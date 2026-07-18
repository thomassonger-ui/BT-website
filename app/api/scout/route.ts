import { NextResponse } from "next/server";

/**
 * Proxies website Scout™ questions to the "scout-chat" Supabase Edge Function
 * (Claude Sonnet, BearTeamOS Scout parameters). The function holds the
 * Anthropic key; this route only forwards. Returns { offline: true } until
 * ANTHROPIC_API_KEY is configured as a function secret.
 */

const SCOUT_CHAT_URL = "https://evzgihywbkaxpkbhstdb.supabase.co/functions/v1/scout-chat";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emdpaHl3YmtheHBrYmhzdGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTkyMjIsImV4cCI6MjA5NTAzNTIyMn0.XRxCAI_Lwa-QfUSLUE8gItlQszjb152UD62CbzT-FtU";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }
  try {
    const res = await fetch(SCOUT_CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.ok ? 200 : res.status });
  } catch {
    return NextResponse.json({ ok: false, offline: true });
  }
}
