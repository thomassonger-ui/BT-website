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

/**
 * /testimonials — "Reviews by Real People".
 * Two sections of REAL reviews only (see content/testimonials.ts):
 *   1. Google reviews with the brokerage's public owner replies,
 *      republished verbatim (per Tom, no aggregate-rating banner).
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

      <section className="bg-soft-white py-16 md:py-24" aria-label="Google reviews">
        <div className="mx-auto max-w-content px-6">
          <Reveal stagger className="grid gap-6 md:grid-cols-2">
            {googleReviews.map((r) => (
              <figure
                key={r.id}
                className="relative flex flex-col rounded-lg border border-ink/10 bg-cream p-6"
              >
                <figcaption className="mb-3 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-dark font-display text-lg font-medium text-cream"
                  >
                    {r.name.charAt(0)}
                  </span>
                  <span>
                  <span className="block font-semibold text-ink">{r.name}</span>
                  <span
                    className="text-sm tracking-widest text-gold-dark"
                    role="img"
                    aria-label={`Rated ${r.rating} out of 5 stars`}
                  >
                    {"★".repeat(r.rating)}
                  </span>
                  <span className="ml-2 text-xs text-muted">Google review</span>
                  </span>
                </figcaption>
                <blockquote className="flex-1 text-sm leading-relaxed text-charcoal-soft">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <div className="mt-4 rounded-md border-l-2 border-gold-dark bg-soft-white p-4">
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

      <section className="bg-cream py-16 md:py-24" aria-label="Client testimonials">
        <div className="mx-auto max-w-content px-6">
          <h2 className="mb-8 font-display text-2xl font-medium text-ink">
            More Client Testimonials
          </h2>
          <Reveal stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {verified.map((t) => (
              <figure
                key={t.id}
                className="relative flex flex-col rounded-lg border border-ink/10 bg-soft-white p-6"
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
