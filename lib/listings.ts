/**
 * Featured listings — read from BearTeamOS website_listings via the
 * website-listings Edge Function (anon key; service-role behind it).
 * ISR 30 min: status/price updates in the table reach the site without
 * a deploy.
 */

const LISTINGS_URL = "https://evzgihywbkaxpkbhstdb.supabase.co/functions/v1/website-listings";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emdpaHl3YmtheHBrYmhzdGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTkyMjIsImV4cCI6MjA5NTAzNTIyMn0.XRxCAI_Lwa-QfUSLUE8gItlQszjb152UD62CbzT-FtU";

export type Listing = {
  slug: string;
  address: string;
  status: "For Sale" | "Pending" | "Active Under Contract" | "Sold";
  price: number;
  beds: number | null;
  baths: number | null;
  sqft: number | null;
  acres: number | null;
  property_type: string | null;
  mls_number: string | null;
  description: string | null;
  photo: string | null;
};

export async function getListings(): Promise<Listing[]> {
  try {
    const res = await fetch(LISTINGS_URL, {
      headers: { Authorization: `Bearer ${SUPABASE_ANON_KEY}`, apikey: SUPABASE_ANON_KEY },
      next: { revalidate: 1800 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { ok: boolean; listings?: Listing[] };
    return data.ok ? (data.listings ?? []) : [];
  } catch {
    return [];
  }
}

export const formatPrice = (n: number) => `$${Number(n).toLocaleString("en-US")}`;
