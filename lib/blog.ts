/**
 * Blog data access — reads published posts from BearTeamOS via the
 * website-blog Edge Function (service-role behind the function; the site
 * calls it with the public anon key). ISR: 30-minute revalidate, so the
 * weekly auto-published article appears without a redeploy.
 */

const BLOG_URL = "https://evzgihywbkaxpkbhstdb.supabase.co/functions/v1/website-blog";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emdpaHl3YmtheHBrYmhzdGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTkyMjIsImV4cCI6MjA5NTAzNTIyMn0.XRxCAI_Lwa-QfUSLUE8gItlQszjb152UD62CbzT-FtU";

const headers = { Authorization: `Bearer ${SUPABASE_ANON_KEY}`, apikey: SUPABASE_ANON_KEY };

export type BlogPostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: string;
  read_minutes: number;
  likes: number;
  published_at: string;
};

export type BlogPost = BlogPostSummary & {
  content_md: string;
  sources: { title: string; url: string }[];
};

export async function getPosts(): Promise<BlogPostSummary[]> {
  try {
    const res = await fetch(BLOG_URL, { headers, next: { revalidate: 1800 } });
    if (!res.ok) return [];
    const data = (await res.json()) as { ok: boolean; posts?: BlogPostSummary[] };
    return data.ok ? (data.posts ?? []) : [];
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${BLOG_URL}?slug=${encodeURIComponent(slug)}`, {
      headers,
      next: { revalidate: 1800 },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { ok: boolean; post?: BlogPost };
    return data.ok && data.post ? data.post : null;
  } catch {
    return null;
  }
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "America/New_York",
  });
}
