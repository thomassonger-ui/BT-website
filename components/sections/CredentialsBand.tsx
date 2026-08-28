import { Reveal } from "@/components/animation/Reveal";

/**
 * CREDENTIALS BAND - homepage trust section (approved by Tom Songer, 2026-08-28).
 * Continues the dark ProofStrip band: centered editorial header, three ruled
 * columns. Do NOT add memberships, designations, or claims Tom has not
 * explicitly approved.
 */
const COLUMNS = [
  {
    heading: "Licensed & Accredited",
    items: [
      "Licensed Florida Real Estate Brokerage",
      "Lic. BK553431 \u2014 Bethanne Baer, Broker/Owner",
      "Equal Housing Opportunity",
    ],
  },
  {
    heading: "Professional Memberships",
    items: [
      "REALTOR\u00AE \u2014 National Association of REALTORS\u00AE",
      "Orlando Regional REALTOR\u00AE Association",
      "Florida Realtors\u00AE",
      "Osceola County Association Member",
      "Stellar MLS Member",
    ],
  },
  {
    heading: "Depth of Practice",
    items: [
      "Certified HAFA Professional",
      "Former mortgage-lending professional",
      "HUD & VA buyer and seller experience",
      "Residential, commercial & investment property",
      "Property-management experience",
      "English- and Spanish-speaking team",
    ],
  },
];

export function CredentialsBand() {
  return (
    <section aria-labelledby="credentials-heading" className="border-t border-cream/10 bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-content px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Credentials &amp; Memberships
          </p>
          <h2 id="credentials-heading" className="mt-3 font-display text-3xl font-medium text-cream md:text-4xl">
            Conway&rsquo;s Hometown Real Estate Broker
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-cream/80 md:text-base">
            Helping Central Florida families buy, sell and invest with confidence since 1987.
          </p>
        </div>
        <Reveal stagger className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-cream/10">
          {COLUMNS.map((col) => (
            <div key={col.heading} className="md:px-10 md:first:pl-0 md:last:pr-0">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                {col.heading}
              </h3>
              <div className="mt-3 h-px w-8 bg-gold-light/40" aria-hidden="true" />
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
