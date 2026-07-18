import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { valuationFields } from "@/components/forms/definitions";
import { Scout } from "@/components/forms/Scout";
import { MarketBrief } from "@/components/home-value/MarketBrief";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Home Value & Orlando Market Brief | What Could Your Property Sell For?",
  description:
    "Orlando's market moved — did your home's value move with it? See the current Orlando MSA market brief and request a property-value consultation from an experienced local team.",
  path: "/home-value",
});

const factors = [
  { title: "Condition & improvements", text: "What you've updated, what's original, and how buyers will weigh both." },
  { title: "Location specifics", text: "Micro-location matters: the street, the lot, the orientation — not just the ZIP code." },
  { title: "Competition", text: "What alternatives buyers in your segment are seeing right now." },
  { title: "Market activity & demand", text: "What comparable properties are actually doing — not last year's headlines." },
];

/** Market-brief prompts for the Ask Scout™ input — answered from the July 2026 brief data. */
const briefAskSuggestions = [
  "What's the median price in my county?",
  "Are Orlando prices still rising?",
  "How fast are homes selling right now?",
  "Is this a good time to sell?",
];

export default function HomeValuePage() {
  return (
    <>
      <PageHero
        eyebrow="For homeowners"
        title="The Market Moved. Did Your Home's Value Move With It?"
        intro="Prices are up in all four Orlando-area counties — but inventory is the deepest since 2019 and 22% of listings are cutting price. A Zillow guess won't tell you where your home stands in that market. A consultation will."
      >
        <ButtonLink href="#market-brief" variant="primary">
          See This Month&rsquo;s Market Brief
        </ButtonLink>
        <ButtonLink href="#valuation-request" variant="outline-light">
          Request My Property Review
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Home Value", path: "/home-value" }]} />

      {/* Orlando Market Brief — same data the agent portal brief carries */}
      <MarketBrief />

      {/* Ask Scout™ — market brief analysis + seller intake */}
      <section className="bg-cream py-16 md:py-24" aria-labelledby="scout-brief-heading">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Ask Scout™ | Your Market, Explained"
            intro="Ask Scout what these numbers mean for your street, your timeline, and your price — it answers from this month's brief. Or take the 90-second intake and get your consultation with Bethanne on the calendar."
          />
          <h2 id="scout-brief-heading" className="sr-only">
            Ask Scout about the market brief
          </h2>
          <Scout initialIntent="Selling" askSuggestions={briefAskSuggestions} />
          <p className="mt-6 text-xs italic leading-relaxed text-muted">
            {compliance.valuationDisclaimer} {compliance.brokerageRelationship}
          </p>
        </div>
      </section>

      <section id="valuation-request" className="scroll-mt-24 bg-soft-white py-16 md:py-24">
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
