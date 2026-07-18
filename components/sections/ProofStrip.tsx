import { Reveal } from "@/components/animation/Reveal";
import { proofPoints } from "@/content/proof-points";

/** Slim experience strip under the cinematic sequence. Approved figures. */
export function ProofStrip() {
  return (
    <section aria-label="Bear Team experience" className="relative border-t border-cream/10 bg-ink py-14">
      <div className="mx-auto max-w-content px-6">
        <Reveal stagger className="grid gap-10 text-center sm:grid-cols-3">
          {proofPoints.map((point) => (
            <div key={point.id}>
              <p className="font-display text-display-md font-medium text-gold-light">{point.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
                {point.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
