/**
 * CREDENTIALS BAND - homepage trust section (approved by Tom Songer, 2026-08-28).
 * Memberships, licensing, and capabilities. Do NOT add memberships,
 * designations, or claims that Tom has not explicitly approved.
 */
const MEMBERSHIPS = [
  "REALTOR\u00AE \u00B7 National Association of REALTORS\u00AE",
  "Orlando Regional REALTOR\u00AE Association",
  "Florida Realtors\u00AE",
  "Osceola County Association Member",
  "Stellar MLS Member",
  "Equal Housing Opportunity",
];

const CAPABILITIES = [
  "Certified HAFA Professional",
  "Former mortgage-lending professional",
  "HUD & VA buyer and seller experience",
  "Residential, commercial & investment property",
  "Property-management experience",
  "English- and Spanish-speaking team",
];

export function CredentialsBand() {
  return (
    <section className="border-t border-ink/10 bg-soft-white py-14 md:py-20" aria-labelledby="credentials-heading">
      <div className="mx-auto max-w-content px-6">
        <h2 id="credentials-heading" className="font-display text-2xl font-medium text-ink md:text-3xl">
          Conway&rsquo;s Hometown Real Estate Broker
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-soft md:text-base">
          Helping Central Florida families buy, sell and invest with confidence since 1987.
        </p>
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted">Memberships &amp; Licensing</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {MEMBERSHIPS.map((m) => (
            <li key={m} className="rounded-full border border-ink/15 bg-cream px-4 py-2 text-xs font-semibold text-ink">
              {m}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-charcoal-soft">
          Licensed Florida Real Estate Brokerage &middot; Lic. BK553431 &middot; Bethanne Baer, Broker/Owner
        </p>
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-muted">How We Can Help</p>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
          {CAPABILITIES.map((c) => (
            <li key={c} className="text-sm text-charcoal-soft">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
