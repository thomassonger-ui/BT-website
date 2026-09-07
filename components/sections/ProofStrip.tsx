import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";
import { proofPoints } from "@/content/proof-points";

/**
 * Reviews tile — figures supplied by Tom Songer 2026-09-07: Google 4.6/57,
 * Zillow 4.8/37, Homes.com 5.0/51, Facebook 4.9/29, Realtor.com 5.0/6,
 * website testimonials 5.0/201. Weighted average 4.9 over 381 reviews.
 * Update value/label when the counts move materially.
 */
const REVIEWS_TILE = {
  value: "4.9★",
  label: "380+ Reviews · Google, Zillow, Homes.com & More",
  href: "/testimonials",
};

/** Slim experience strip under the cinematic sequence. Approved figures. */
export function ProofStrip() {
  return (
    <section aria-label="Bear Team experience" className="relative border-t border-cream/10 bg-ink py-14">
      <div className="mx-auto max-w-content px-6">
        <Reveal stagger converge className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.id}>
              <p className="font-display text-display-md font-medium text-gold-light">{point.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
                {point.label}
              </p>
            </div>
          ))}
          <Link href={REVIEWS_TILE.href} className="group block" aria-label="Read Bear Team reviews">
            <p className="font-display text-display-md font-medium text-gold-light">{REVIEWS_TILE.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80 group-hover:text-cream">
              {REVIEWS_TILE.label}
            </p>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
