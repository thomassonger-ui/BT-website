import { PinnedStats } from "@/components/animation/PinnedStats";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { proofPoints, proofSupportingCopy } from "@/content/proof-points";

/**
 * Section 4 — Experience & trust. Pinned sequential proof points on desktop;
 * normal flow on mobile and for reduced-motion users. No spinning counters.
 * NOTE: figures require final approval — see content/proof-points.ts.
 */
export function ExperienceSection() {
  return (
    <section className="bg-ink py-24 md:py-32" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Why experience matters"
          title="Experience That Helps You Make Better Decisions."
          intro={proofSupportingCopy}
          tone="light"
        />
        <h2 id="experience-heading" className="sr-only">
          Experience That Helps You Make Better Decisions
        </h2>
        <PinnedStats points={[...proofPoints]} />
      </div>
    </section>
  );
}
