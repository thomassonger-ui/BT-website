import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Orlando Market Brief — the same monthly brief agents share from
 * bearteam.app (portal brief), rendered for the public home-value page.
 * Data is updated monthly by the team; keep numbers in sync with the
 * portal brief. Scout™'s scout-chat system prompt carries the same block
 * so AI answers match what's printed here.
 */

const BRIEF_MONTH = "July 2026";

const STATS = [
  {
    value: "$398K",
    label: "Median sale price",
    detail: "Orange County — up 2.0% year over year",
  },
  {
    value: "34",
    label: "Days on market",
    detail: "MSA average — up from ~22 a year ago",
  },
  {
    value: "+18%",
    label: "Active listings",
    detail: "Deepest inventory since 2019 — 2.5 to 3 months of supply",
  },
  {
    value: "6.53%",
    label: "30-year fixed rate",
    detail: "Easing from ~6.8%",
  },
];

const COUNTIES = [
  { county: "Orange", median: "$398,000", dom: "33", inventory: "5,480", yoy: "+2.0%" },
  { county: "Seminole", median: "$448,000", dom: "35", inventory: "1,960", yoy: "+3.1%" },
  { county: "Osceola", median: "$362,000", dom: "41", inventory: "3,340", yoy: "+1.2%" },
  { county: "Lake", median: "$384,000", dom: "43", inventory: "2,460", yoy: "+3.8%" },
];

const SOURCES_LINE =
  "Sources: Stellar MLS, Realtor.com Research, Freddie Mac PMMS, Florida Realtors, U.S. Census ACS. Numbers reflect Orlando MSA — Orange, Seminole, Osceola, and Lake counties. Equal Housing Opportunity. Each Bear Team office is independently owned and operated. Marketing material — not a binding offer or guarantee of sale price. © 2026 Bear Team Real Estate.";

export function MarketBrief() {
  return (
    <section id="market-brief" className="scroll-mt-24 bg-soft-white py-16 md:py-24" aria-labelledby="market-brief-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow={`Orlando Market Brief · ${BRIEF_MONTH}`}
          title="More Homes, Easing Rates — the Summer Window Belongs to Sellers Who Price to Today."
        />
        <h2 id="market-brief-heading" className="sr-only">
          Orlando market brief, {BRIEF_MONTH}
        </h2>

        {/* Stat tiles */}
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-lg border border-ink/10 bg-cream/40 p-6">
              <dd className="font-display text-display-md font-medium text-teal-800">{s.value}</dd>
              <dt className="mt-1 text-sm font-semibold text-ink">{s.label}</dt>
              <p className="mt-2 text-xs leading-relaxed text-muted">{s.detail}</p>
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
              {COUNTIES.map((c) => (
                <tr key={c.county} className="border-b border-ink/5 last:border-b-0">
                  <th scope="row" className="px-5 py-3.5 font-semibold text-ink">{c.county}</th>
                  <td className="px-5 py-3.5 text-charcoal-soft">{c.median}</td>
                  <td className="px-5 py-3.5 text-charcoal-soft">{c.dom}</td>
                  <td className="px-5 py-3.5 text-charcoal-soft">{c.inventory}</td>
                  <td className="px-5 py-3.5 font-semibold text-teal-800">{c.yoy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* The take */}
        <div className="mt-10 rounded-md border-l-4 border-gold bg-cream/60 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The take</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-charcoal-soft">
            Inventory is the deepest it has been since 2019 — roughly 2.5 to 3 months of supply —
            and about 22% of active listings have already cut their asking price. Homes priced to
            today&rsquo;s market are still selling and values are still rising in every county;
            homes priced to last year&rsquo;s headlines are the ones sitting and cutting. That is
            exactly why the number your home starts at matters more this summer than it has in
            years.
          </p>
        </div>

        <p className="mt-10 text-[11px] italic leading-relaxed text-muted">{SOURCES_LINE}</p>
      </div>
    </section>
  );
}
