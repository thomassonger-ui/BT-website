import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { faqSchema } from "@/lib/structured-data";
import { ProcessTimeline } from "@/components/animation/ProcessTimeline";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { Scout, type ScoutQuestion } from "@/components/forms/Scout";
import { SellerPathwayCards } from "@/components/sell/SellerPathwayCards";
import { sellerProcess } from "@/content/company";
import { sellerFaqs } from "@/content/faqs";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Sell Your Central Florida Property",
  description:
    "Sell with a defined strategy — pricing, preparation, professional marketing, showing management, negotiation, and contract-to-close coordination in Orlando and Central Florida.",
  path: "/sell",
});

/** Seller-qualifying questions — property, condition, and timing separate ready sellers from researchers. */
const sellerQuestions: ScoutQuestion[] = [
  {
    key: "propertyType",
    prompt: "What kind of property are you selling?",
    options: ["Single-family home", "Condo", "Townhome", "Duplex / multifamily", "Land", "Something else"],
  },
  {
    key: "area",
    prompt: "Which area is it in?",
    options: [
      "Conway · Edgewood · Belle Isle",
      "Downtown Orlando",
      "Winter Park",
      "Lake Nona",
      "Dr. Phillips / Windermere",
      "Elsewhere in Central Florida",
    ],
  },
  {
    key: "condition",
    prompt: "How would you describe its condition?",
    options: ["Move-in ready", "Needs some updates", "Needs significant work", "Not sure"],
  },
  {
    key: "situation",
    prompt: "What best describes your situation?",
    options: [
      "Upsizing",
      "Downsizing",
      "Relocating out of the area",
      "Selling a rental / investment",
      "Estate or inherited property",
      "Just exploring my options",
    ],
  },
  {
    key: "timeframe",
    prompt: "When are you hoping to sell?",
    options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just researching"],
  },
];

/** Tappable seller prompts for the Ask Scout™ input. */
const sellerAskSuggestions = [
  "What will it cost me to sell?",
  "How do you decide my list price?",
  "Should I make repairs before listing?",
  "How long do homes take to sell here?",
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

      {/* Six ways out — every stage opens its own value pitch + micro-form */}
      <section className="bg-soft-white py-16 md:py-24" aria-labelledby="seller-pathways-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="Where would you like to start?"
            title="Six Ways Out — How We Do Things Differently"
            intro="A successful sale is a sequence of decisions — pricing, preparation, marketing, showings, offers, and contract management. Pick the stage on your mind and see exactly how we handle it."
          />
          <h2 id="seller-pathways-heading" className="sr-only">
            Six ways to start your home sale
          </h2>
          <SellerPathwayCards />
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
            title="Ask Scout™ | Request a Selling Consultation"
            intro="Answer a few quick questions and pick a time with Bethanne — no long forms, no pressure."
          />
          <Scout initialIntent="Selling" questions={sellerQuestions} askSuggestions={sellerAskSuggestions} />
          <p className="mt-6 text-xs italic leading-relaxed text-muted">
            {compliance.valuationDisclaimer} {compliance.brokerageRelationship}
          </p>
        </div>
      </section>
    </>
  );
}
