/**
 * CREDENTIALS BAND - homepage trust section (content approved by Tom Songer,
 * 2026-08-28). Continues the dark ProofStrip band: centered editorial header,
 * three ruled columns. "Licensed & Regulated" wording is deliberate - the
 * brokerage is state-licensed, NOT "accredited" (no BBB accreditation held).
 * Deliberately static (no scroll-reveal) and no state seals (imply
 * endorsement). Do NOT add memberships, license numbers, or claims Tom has
 * not explicitly approved. Corporate license CQ1054831 verified against the
 * DBPR registry 8/28/2026 (BEARTEAM LLC, Real Estate Corporation, active,
 * expires 03/31/2028).
 *
 * Membership LOGOS live in MembershipLogoBar (sliding bar at the bottom of
 * the homepage above the footer) — never inside this dark section (Tom, 8/28).
 */
import Image from "next/image";

const MEMBERSHIPS = [
  "REALTOR\u00AE \u2014 National Association of REALTORS\u00AE",
  "Orlando Regional REALTOR\u00AE Association",
  "Florida Realtors\u00AE",
  "Osceola County Association Member",
  "Stellar MLS Member",
];

const CAPABILITIES = [
  "Certified HAFA Professional",
  "Former mortgage-lending professional",
  "HUD & VA buyer and seller experience",
  "Residential, commercial & investment property",
  "Property-management experience",
  "English- and Spanish-speaking team",
];

/** Simplified Equal Housing Opportunity mark (house + equal sign). */
function EhoMark() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" role="img" aria-label="Equal Housing Opportunity logo" className="shrink-0">
      <path d="M12 2.5 22 10v11.5H2V10L12 2.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <rect x="7.5" y="12" width="9" height="1.8" fill="currentColor" />
      <rect x="7.5" y="15.6" width="9" height="1.8" fill="currentColor" />
    </svg>
  );
}

export function CredentialsBand() {
  return (
    <section aria-labelledby="credentials-heading" className="relative overflow-hidden border-t border-cream/10 bg-ink py-16 md:py-20">
      {/* Faint neighborhood-and-skyline backdrop under a heavy ink scrim —
          fades to solid ink at the top and bottom so the band still melts
          into the dark sections around it. Text sits on near-solid ink. */}
      <Image
        src="/images/buy/community.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-40"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/50 to-ink" aria-hidden="true" />
      <div className="relative mx-auto max-w-content px-6">
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
        <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-cream/10">
          <div className="md:pr-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Licensed &amp; Regulated
            </h3>
            <div className="mt-3 h-px w-8 bg-gold-light/40" aria-hidden="true" />
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
              <li>Florida-Licensed Independent Real Estate Brokerage</li>
              <li>Independently Owned and Operated</li>
              <li>Bethanne Baer, Broker/Owner</li>
              <li>Florida Broker License BK553431</li>
              <li>Corporate Brokerage License CQ1054831</li>
              <li>Regulated by the Florida DBPR and the Florida Real Estate Commission</li>
              <li className="flex items-center gap-2.5">
                <EhoMark />
                <span>Equal Housing Opportunity</span>
              </li>
            </ul>
            <a
              href="https://www.myfloridalicense.com/portalsearches/VerifyLicensee"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md border border-gold px-5 py-2 text-sm font-semibold text-gold-light transition-colors hover:bg-gold hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Verify Our License
            </a>
          </div>
          <div className="md:px-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Professional Memberships
            </h3>
            <div className="mt-3 h-px w-8 bg-gold-light/40" aria-hidden="true" />
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
              {MEMBERSHIPS.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="md:pl-10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Depth of Practice
            </h3>
            <div className="mt-3 h-px w-8 bg-gold-light/40" aria-hidden="true" />
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/85">
              {CAPABILITIES.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
