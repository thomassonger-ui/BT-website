import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { testimonials, googleReviews } from "@/content/testimonials";
import type { GoogleReview } from "@/content/testimonials";
import type { Testimonial } from "@/types/content";

export const metadata: Metadata = buildMetadata({
  title: "Reviews by Real People",
  description:
    "What Central Florida buyers and sellers say about working with Bethanne Baer and Bear Team — real Google reviews and testimonials from real closings.",
  path: "/testimonials",
});

/** Rotating avatar fills for reviewer initials (Google-style fallback circles). */
const AVATAR_BG = ["bg-ink", "bg-gold-dark", "bg-charcoal-soft"];

const CARD =
  "relative flex w-[85vw] max-w-[400px] shrink-0 snap-start flex-col rounded-lg border border-ink/10 p-6";

/** Official Google "G" mark to attribute the review source. */
function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-label="Google" role="img" className="shrink-0">
      <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.51 5.51 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.17 3.57-8.81z" />
      <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.93-2.91l-3.87-3c-1.07.72-2.44 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.29v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.29 14.29A7.2 7.2 0 0 1 4.91 12c0-.8.14-1.57.38-2.29v-3.1H1.29a12 12 0 0 0 0 10.78l4-3.1z" />
      <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44A11.98 11.98 0 0 0 12 0 12 12 0 0 0 1.29 6.61l4 3.1C6.23 6.88 8.88 4.77 12 4.77z" />
    </svg>
  );
}

function GoogleCard({ r, i }: { r: GoogleReview; i: number }) {
  return (
    <figure data-card="true" className={`${CARD} bg-soft-white shadow-sm`}>
      <figcaption className="mb-3 flex items-start gap-3">
        <span
          aria-hidden="true"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg font-medium text-cream ${AVATAR_BG[i % AVATAR_BG.length]}`}
        >
          {r.name.charAt(0)}
        </span>
        <span className="flex-1">
          <span className="block font-semibold text-ink">{r.name}</span>
          <span className="block text-xs text-muted">{r.when}</span>
        </span>
        <GoogleG />
      </figcaption>
      <p
        className="mb-2 text-base tracking-widest text-gold"
        role="img"
        aria-label={`Rated ${r.rating} out of 5 stars`}
      >
        {"★".repeat(r.rating)}
      </p>
      <blockquote className="flex-1 text-sm leading-relaxed text-charcoal-soft">{r.text}</blockquote>
      <div className="mt-4 rounded-md border-l-2 border-gold-dark bg-cream p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted">
          Response from Bear Team Real Estate
        </p>
        <p className="mt-1 text-sm italic text-charcoal-soft">{r.ownerReply}</p>
      </div>
    </figure>
  );
}

function SiteCard({ t, i }: { t: Testimonial; i: number }) {
  return (
    <figure data-card="true" className={`${CARD} bg-soft-white`}>
      <figcaption className="mb-3 flex items-start gap-3">
        <span
          aria-hidden="true"
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-lg font-medium text-cream ${AVATAR_BG[(i + 1) % AVATAR_BG.length]}`}
        >
          {t.clientName.charAt(0).toUpperCase()}
        </span>
        <span className="flex-1">
          <span className="block font-semibold text-ink">{t.clientName}</span>
          <span className="block text-xs text-muted">
            {t.clientType}
            {t.propertyType ? ` · ${t.propertyType}` : ""}
          </span>
        </span>
      </figcaption>
      <blockquote className="flex-1 text-sm italic leading-relaxed text-charcoal-soft">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <p className="mt-4 border-t border-ink/10 pt-3 text-xs text-muted">{t.source}</p>
    </figure>
  );
}

/**
 * /testimonials — "Reviews by Real People".
 * ONE auto-rotating carousel that alternates real Google reviews (with the
 * brokerage's public owner replies) and verbatim client testimonials from the
 * brokerage's previously published BearTeam.com page. No aggregate-rating
 * banner (per Tom). Keeps the old site's /testimonials URL alive through the
 * domain cutover. Never add fabricated entries. Data: content/testimonials.ts.
 */
export default function TestimonialsPage() {
  const verified = testimonials.filter((t) => t.verified);
  const cards: React.ReactNode[] = [];
  const n = Math.max(googleReviews.length, verified.length);
  for (let i = 0; i < n; i++) {
    const g = googleReviews[i];
    if (g) cards.push(<GoogleCard key={`g-${g.id}`} r={g} i={i} />);
    const t = verified[i];
    if (t) cards.push(<SiteCard key={`t-${t.id}`} t={t} i={i} />);
  }
  return (
    <>
      <PageHero
        eyebrow="Client experiences"
        title="Reviews by Real People."
        intro="40 years, 7,000+ transactions, and more than $4 billion in Central Florida real estate — and behind every closing, a client. Real reviews from real buyers and sellers, in their own words, with our replies."
      >
        <ButtonLink href="/contact" variant="primary">
          Work With the Bear Team
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Testimonials", path: "/testimonials" }]} />

      <section className="bg-cream py-16 md:py-24" aria-label="Client reviews">
        <div className="mx-auto max-w-content px-6">
          <TestimonialsCarousel label="Client reviews carousel">{cards}</TestimonialsCarousel>
          <p className="mt-10 text-xs text-muted">
            Reviews on this page were submitted by past clients and are republished
            verbatim from Bear Team Real Estate&rsquo;s public Google Business Profile and
            previously published testimonials page. Individual experiences vary; no result
            is guaranteed.
          </p>
        </div>
      </section>
    </>
  );
}
