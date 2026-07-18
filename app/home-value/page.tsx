import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LeadForm } from "@/components/forms/LeadForm";
import { valuationFields } from "@/components/forms/definitions";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Home Value Consultation | What Could Your Property Sell For?",
  description:
    "Request a property-value consultation for your Central Florida home — condition, location, improvements, competition, and buyer demand considered by an experienced local team.",
  path: "/home-value",
});

const factors = [
  { title: "Condition & improvements", text: "What you've updated, what's original, and how buyers will weigh both." },
  { title: "Location specifics", text: "Micro-location matters: the street, the lot, the orientation — not just the ZIP code." },
  { title: "Competition", text: "What alternatives buyers in your segment are seeing right now." },
  { title: "Market activity & demand", text: "What comparable properties are actually doing — not last year's headlines." },
];

export default function HomeValuePage() {
  return (
    <>
      <PageHero
        eyebrow="For homeowners"
        title="What Could Your Property Sell For?"
        intro="Online estimates are a starting point. A thoughtful property-value consultation considers condition, location, improvements, competition, market activity, and buyer demand."
      />
      <Breadcrumbs items={[{ name: "Home Value", path: "/home-value" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[2fr,3fr]">
          <div>
            <SectionHeading
              align="left"
              title="Why a Consultation Beats an Algorithm"
              intro="Automated estimates can't walk your property, see your improvements, or read your local competition. An experienced set of eyes can."
            />
            <ul className="space-y-4">
              {factors.map((f) => (
                <li key={f.title} className="rounded-lg border border-ink/10 bg-cream/40 p-4">
                  <p className="text-sm font-semibold text-ink">{f.title}</p>
                  <p className="mt-1 text-sm text-muted">{f.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-md border-l-4 border-gold bg-cream/60 p-4 text-sm italic leading-relaxed text-charcoal-soft">
              {compliance.valuationDisclaimer}
            </p>
          </div>
          <Reveal>
            <div className="rounded-lg border border-ink/10 bg-cream/30 p-6 md:p-8">
              <h2 className="mb-6 font-display text-xl font-medium text-ink">
                Request Your Property Review
              </h2>
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
      </section>
    </>
  );
}
