import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Orlando Market Brief — reads the latest PUBLISHED brief from BearTeamOS
 * (market_briefs via the website-brief Edge Function), the same source that
 * powers the agent portal brief. Publishing a new monthly brief in the
 * portal updates this page automatically (ISR, 30-minute revalidate).
 * The July 2026 numbers below are only a fallback if the fetch fails.
 * scout-chat reads the same table, so Scout's answers stay in sync.
 */

const BRIEF_URL = "https://evzgihywbkaxpkbhstdb.supabase.co/functions/v1/website-brief";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emdpaHl3YmtheHBrYmhzdGRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0NTkyMjIsImV4cCI6MjA5NTAzNTIyMn0.XRxCAI_Lwa-QfUSLUE8gItlQszjb152UD62CbzT-FtU";

type Brief = {
  period_label: string;
  headline: string;
  summary: string;
  highlights: { label: string; value: string; hint: string }[];
  counties: { name: string; median_price: number; dom: number; inventory: number; yoy_pct: number }[];
};

const FALLBACK: Brief = {
  period_label: "July 2026",
  headline: "More homes, easing rates — the summer window belongs to sellers who price to today.",
  summary:
    "Inventory is the deepest it has been since 2019 — roughly 2.5 to 3 months of supply — and about 22% of active listings have already cut their asking price. Homes priced to today's market are still selling and values are still rising in every county; homes priced to last year's headlines are the ones sitting and cutting. That is exactly why the number your home starts at matters more this summer than it has in years.",
  highlights: [
    { label: "Median sale price", value: "$398K", hint: "Orange Co. · +2% YoY" },
    { label: "Days on market", value: "34", hint: "up from ~22 last year" },
    { label: "Active listings", value: "+18%", hint: "highest since 2019" },
    { label: "30-yr mortgage", value: "6.53%", hint: "easing from 6.8%" },
  ],
  counties: [
    { name: "Orange", median_price: 398000, dom: 33, inventory: 5480, yoy_pct: 2.0 },
    { name: "Seminole", median_price: 448000, dom: 35, inventory: 1960, yoy_pct: 3.1 },
    { name: "Osceola", median_price: 362000, dom: 41, inventory: 3340, yoy_pct: 1.2 },
    { name: "Lake", median_price: 384000, dom: 43, inventory: 2460, yoy_pct: 3.8 },
  ],
};

const SOURCES_LINE =
  "Sources: Stellar MLS, Realtor.com Research, Freddie Mac PMMS, Florida Realtors, U.S. Census ACS. Numbers reflect Orlando MSA — Orange, Seminole, Osceola, and Lake counties. Equal Housing Opportunity. Each Bear Team office is independently owned and operated. Marketing material — not a binding offer or guarantee of sale price. © 2026 Bear Team Real Estate.";

async function getBrief(): Promise<Brief> {
  try {
    const res = await fetch(BRIEF_URL, {
      headers: { Authorization: `Bearer ${SUPABASE_ANON_KEY}`, apikey: SUPABASE_ANON_KEY },
      next: { revalidate: 1800 },
    });
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as { ok: boolean; brief?: Brief };
    if (!data.ok || !data.brief?.highlights?.length || !data.brief?.counties?.length) return FALLBACK;
    return data.brief;
  } catch {
    return FALLBACK;
  }
}

const money = (n: number) => `$${n.toLocaleString("en-US")}`;
const pct = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;

export async function MarketBrief() {
  const brief = await getBrief();
  return (
    <section id="market-brief" className="scroll-mt-24 bg-soft-white py-16 md:py-24" aria-labelledby="market-brief-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={`Orlando Market Brief · ${brief.period_label}`}
          title={brief.headline}
        />
        <h2 id="market-brief-heading" className="sr-only">
          Orlando market brief, {brief.period_label}
        </h2>

        {/* Stat tiles */}
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brief.highlights.map((s) => (
            <div key={s.label} className="rounded-lg border border-ink/10 bg-cream/40 p-6">
              <dd className="font-display text-display-md font-medium text-teal-800">{s.value}</dd>
              <dt className="mt-1 text-sm font-semibold text-ink">{s.label}</dt>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.hint}</p>
            </div>
          ))}
        </dl>

        {/* County table */}
        <div className="mt-10 overflow-x-auto rounded-lg border border-ink/10 bg-soft-white">
          <table className="w-full min-w-[560px] text-left text-sm">
            <caption className="sr-only">
              Median sale price, days on market, active inventory, and year-over-year price change by county
            </caption>
            <thead>
              <tr className="border-b border-ink/10 bg-cream/60 text-xs uppercase tracking-wider text-charcoal-soft">
                <th scope="col" className="px-5 py-3.5 font-semibold">County</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Median sale</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Days on market</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Active inventory</th>
                <th scope="col" className="px-5 py-3.5 font-semibold">Price YoY</th>
              </tr>
            </thead>
            <tbody>
              {brief.counties.map((c) => (
                <tr key={c.name} className="border-b border-ink/5 last:border-b-0">
                  <th scope="row" className="px-5 py-3.5 font-semibold text-ink">{c.name}</th>
                  <td className="px-5 py-3.5 text-charcoal-soft">{money(c.median_price)}</td>
                  <td className="px-5 py-3.5 text-charcoal-soft">{c.dom}</td>
                  <td className="px-5 py-3.5 text-charcoal-soft">{c.inventory.toLocaleString("en-US")}</td>
                  <td className="px-5 py-3.5 font-semibold text-teal-800">{pct(c.yoy_pct)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The take */}
        <div className="mt-10 rounded-md border-l-4 border-gold bg-cream/60 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The take</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal-soft">{brief.summary}</p>
        </div>

        <p className="mt-10 text-[11px] italic leading-relaxed text-muted">{SOURCES_LINE}</p>
      </div>
    </section>
  );
}
