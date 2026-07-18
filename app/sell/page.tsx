import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { faqSchema } from "@/lib/structured-data";
import { ProcessTimeline } from "@/components/animation/ProcessTimeline";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { Scout } from "@/components/forms/Scout";
import { sellerProcess } from "@/content/company";
import { sellerFaqs } from "@/content/faqs";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Sell Your Central Florida Property",
  description:
    "Sell with a defined strategy — pricing, preparation, professional marketing, showing management, negotiation, and contract-to-close coordination in Orlando and Central Florida.",
  path: "/sell",
});

const sellerPillars = [
  {
    title: "Pricing Strategy",
    text: "Position your property against its real competition — the homes buyers in your segment are seeing the same week — not against wishful comparables.",
  },
  {
    title: "Property Preparation",
    text: "Budget-aware recommendations that separate what buyers pay for from what they won't notice. No unnecessary renovation lists.",
  },
  {
    title: "Marketing & Photography",
    text: "Professional photography and presentation across the channels where Central Florida buyers actually look — presented to stand out, not blend in.",
  },
  {
    title: "Showing Management",
    text: "Organized scheduling and feedback loops that respect your household while maximizing qualified exposure.",
  },
  {
    title: "Offer Evaluation & Negotiation",
    text: "Offers weighed on financing strength, timelines, and risk — then negotiated on terms, repairs, appraisal gaps, and contingencies.",
  },
  {
    title: "Contract-to-Close Coordination",
    text: "Inspections, title, lender milestones, and deadlines tracked deliberately so your sale closes on schedule.",
  },
];

export default function SellPage() {
  return (
    <>
      <PageHero
        eyebrow="For sellers"
        title="Sell With a Strategy, Not Just a Sign."
        intro="Understand your market position, prepare deliberately, market professionally, and negotiate from strength — with coordination through closing day."
      >
        <ButtonLink href="/home-value" variant="primary">
          Request a Home Value Consultation
        </ButtonLink>
        <ButtonLink href="#seller-inquiry" variant="outline-light">
          Start a Selling Conversation
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Sell", path: "/sell" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="Seller services"
            title="Every Stage, Handled Deliberately"
            intro="A successful sale is a sequence of decisions — pricing, preparation, marketing, showings, offers, and contract management. Here's how we handle each."
          />
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sellerPillars.map((pillar) => (
              <article key={pillar.title} className="rounded-lg border border-ink/10 bg-cream/40 p-6">
                <h3 className="font-display text-lg font-medium text-ink">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-charcoal py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading title="The Seller Process" tone="light" />
          <ProcessTimeline steps={[...sellerProcess]} tone="light" />
        </div>
      </section>

      <section className="bg-cream py-16 md:py-24" aria-labelledby="seller-faq-heading">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Seller Questions, Answered" />
          <h2 id="seller-faq-heading" className="sr-only">
            Seller FAQs
          </h2>
          <FaqList faqs={sellerFaqs} />
        </div>
        <JsonLd data={faqSchema(sellerFaqs)} />
      </section>

      <section id="seller-inquiry" className="scroll-mt-24 bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Request a Selling Consultation"
            intro="Answer a few quick questions and pick a time with Bethanne — no long forms, no pressure."
          />
          <Scout initialIntent="Selling" />
          <p className="mt-6 text-xs italic leading-relaxed text-muted">
            {compliance.valuationDisclaimer} {compliance.brokerageRelationship}
          </p>
        </div>
      </section>
    </>
  );
}
