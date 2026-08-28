import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { testimonials, googleReviews } from "@/content/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Reviews by Real People",
  description:
    "What buyers and sellers across Central Florida say about working with Bethanne Baer and Bear Team Real Estate — real Google reviews and client testimonials from real transactions.",
  path: "/testimonials",
});

/** Rotating avatar fills for reviewer initials (Google-style fallback circles). */
const AVATAR_BG = ["bg-ink", "bg-gold-dark", "bg-charcoal-soft"];

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

/**
 * /testimonials — "Reviews by Real People".
 * Two sections of REAL reviews only (see content/testimonials.ts):
 *   1. Google reviews with the brokerage's public owner replies,
 *      republished verbatim (per Tom: no aggregate-rating banner).
 *   2. Client testimonials from the brokerage's previously published
 *      BearTeam.com testimonials page.
 * This page keeps the old site's /testimonials URL alive through the
 * domain cutover. Never add fabricated entries.
 */
export default function TestimonialsPage() {
  const verified = testimonials.filter((t) => t.verified);
  return (
    <>
      <PageHero
        eyebrow="Client experiences"
        title="Reviews by Real People."
        intro="Real reviews from Central Florida buyers and sellers who worked with Bethanne Baer and the Bear Team — in their own words, with our replies."
      >
        <ButtonLink href="/contact" variant="primary">
          Work With the Bear Team
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Testimonials", path: "/testimonials" }]} />

      <section className="bg-cream py-16 md:py-24" aria-label="Google reviews">
        <div className="mx-auto max-w-content px-6">
          <Reveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {googleReviews.map((r, i) => (
              <figure
                key={r.id}
                className="relative flex flex-col rounded-lg border border-ink/10 bg-soft-white p-6 shadow-sm"
              >
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
                <blockquote className="flex-1 text-sm leading-relaxed text-charcoal-soft">
                  {r.text}
                </blockquote>
                <div className="mt-4 rounded-md border-l-2 border-gold-dark bg-cream p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Response from Bear Team Real Estate
                  </p>
                  <p className="mt-1 text-sm italic text-charcoal-soft">{r.ownerReply}</p>
                </div>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-soft-white py-16 md:py-24" aria-label="Client testimonials">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-8 font-display text-2xl font-medium text-ink">
            More Client Testimonials
          </h2>
          <Reveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {verified.map((t) => (
              <figure
                key={t.id}
                className="relative flex flex-col rounded-lg border border-ink/10 bg-cream p-6"
              >
                <blockquote className="flex-1 text-sm italic leading-relaxed text-charcoal-soft">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="mt-4 border-t border-ink/10 pt-4 text-xs text-muted">
                  <span className="block font-semibold text-ink">{t.clientName}</span>
                  <span>
                    {t.clientType}
                    {t.propertyType ? ` · ${t.propertyType}` : ""}
                  </span>
                  <span className="block">{t.source}</span>
                </figcaption>
              </figure>
            ))}
          </Reveal>
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
