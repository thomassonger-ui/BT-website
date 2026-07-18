import { NextResponse } from "next/server";

/** Proxies blog likes to the blog-like Supabase Edge Function. */

const LIKE_URL = "https://evzgihywbkaxpkbhstdb.supabase.co/functions/v1/blog-like";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emdpaHl3YmtheHBrYmhzdGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTkyMjIsImV4cCI6MjA5NTAzNTIyMn0.XRxCAI_Lwa-QfUSLUE8gItlQszjb152UD62CbzT-FtU";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  try {
    const res = await fetch(LIKE_URL, {
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
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
