import { NextResponse } from "next/server";
import { leadSchemas, type LeadKind } from "./schemas";

/**
 * Shared server-side lead handler used by all four API routes.
 *
 * Security / privacy notes:
 * - Server-side zod validation runs on every submission (never trust client).
 * - Honeypot field ("company") silently accepts-and-drops bot submissions.
 * - Webhook URLs and EMAIL_API_KEY are SERVER-ONLY env vars — they are read
 *   here (server runtime) and never shipped to the browser.
 * - MOCK MODE: when no webhook is configured for a form, the submission is
 *   validated and logged server-side, and the API responds with
 *   { ok: true, mode: "mock" }. This lets the site function end-to-end before
 *   a CRM / email integration is connected. See DEPLOYMENT.md ("Form
 *   integration") for connecting a real destination.
 */

/**
 * Default destination: the "website-lead" Supabase Edge Function, which
 * inserts every submission into BearTeamOS premier_leads (status "offering")
 * so it appears in the agent portal at bearteam.app/portal/leads for
 * claiming. Per-form env vars still override. The anon key below is the
 * project's public client key (not a secret) used only to satisfy the edge
 * function's JWT gate; inserts happen inside the function via service role.
 */
const DEFAULT_LEAD_WEBHOOK =
  "https://evzgihywbkaxpkbhstdb.supabase.co/functions/v1/website-lead";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emdpaHl3YmtheHBrYmhzdGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTkyMjIsImV4cCI6MjA5NTAzNTIyMn0.XRxCAI_Lwa-QfUSLUE8gItlQszjb152UD62CbzT-FtU";

const WEBHOOK_ENV: Record<LeadKind, string | undefined> = {
  contact: process.env.CONTACT_FORM_WEBHOOK_URL || DEFAULT_LEAD_WEBHOOK,
  "buyer-lead": process.env.BUYER_LEAD_WEBHOOK_URL || DEFAULT_LEAD_WEBHOOK,
  "seller-lead": process.env.SELLER_LEAD_WEBHOOK_URL || DEFAULT_LEAD_WEBHOOK,
  valuation: process.env.VALUATION_WEBHOOK_URL || DEFAULT_LEAD_WEBHOOK,
};

/** Very small in-memory rate limit per runtime instance (spam backstop). */
const recent = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function handleLead(kind: LeadKind, request: Request): Promise<NextResponse> {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again shortly." },
      { status: 429 },
    );
  }

  const parsed = leadSchemas[kind].safeParse(payload);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, fieldErrors }, { status: 422 });
  }

  // Honeypot filled -> pretend success, deliver nothing.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true, mode: "discarded" });
  }

  const { company: _honeypot, ...lead } = parsed.data;
  const destination = WEBHOOK_ENV[kind];

  if (!destination) {
    // MOCK MODE — no integration configured yet.
    console.info(`[lead:${kind}] mock submission (no webhook configured)`, {
      receivedAt: new Date().toISOString(),
      fields: Object.keys(lead),
    });
    return NextResponse.json({ ok: true, mode: "mock" });
  }

  try {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (destination === DEFAULT_LEAD_WEBHOOK) {
      headers.Authorization = `Bearer ${SUPABASE_ANON_KEY}`;
      headers.apikey = SUPABASE_ANON_KEY;
    }
    const res = await fetch(destination, {
      method: "POST",
      headers,
      body: JSON.stringify({
        kind,
        receivedAt: new Date().toISOString(),
        notify: process.env.LEAD_NOTIFICATION_EMAIL || undefined,
        lead,
      }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    return NextResponse.json({ ok: true, mode: "delivered" });
  } catch (err) {
    console.error(`[lead:${kind}] delivery failed`, err);
    return NextResponse.json(
      { ok: false, error: "We couldn't submit your request. Please call or email us directly." },
      { status: 502 },
    );
  }
}
