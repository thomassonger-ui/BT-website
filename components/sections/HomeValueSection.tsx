import { Reveal } from "@/components/animation/Reveal";
import { LeadForm } from "@/components/forms/LeadForm";
import { valuationFields } from "@/components/forms/definitions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { compliance } from "@/config/compliance";

/** Section 7 — home value consultation with the full valuation inquiry form. */
export function HomeValueSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="home-value-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-12 lg:grid-cols-[2fr,3fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For homeowners"
              title="What Could Your Property Sell For?"
              intro="Online estimates are a starting point. A thoughtful property-value consultation considers condition, location, improvements, competition, market activity, and buyer demand."
            />
            <h2 id="home-value-heading" className="sr-only">
              What Could Your Property Sell For?
            </h2>
            <p className="rounded-md border-l-4 border-gold bg-soft-white p-4 text-sm italic leading-relaxed text-charcoal-soft">
              {compliance.valuationDisclaimer}
            </p>
          </div>
          <Reveal>
            <div className="rounded-lg border border-ink/10 bg-soft-white p-6 shadow-sm md:p-8">
              <LeadForm
                kind="valuation"
                fields={valuationFields}
                submitLabel="Request My Property Review"
                successTitle="Thank you — your property review request is in."
                successBody="A member of Bear Team will follow up to schedule your consultation."
                footnote={compliance.valuationDisclaimer}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
