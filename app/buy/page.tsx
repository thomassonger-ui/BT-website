import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { faqSchema } from "@/lib/structured-data";
import { ProcessTimeline } from "@/components/animation/ProcessTimeline";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { LeadForm } from "@/components/forms/LeadForm";
import { buyerFields } from "@/components/forms/definitions";
import { buyerProcess } from "@/content/company";
import { buyerFaqs } from "@/content/faqs";
import { compliance } from "@/config/compliance";
import { externalLinks } from "@/config/external-links";

export const metadata: Metadata = buildMetadata({
  title: "Buy a Home in Central Florida",
  description:
    "Experienced buyer representation in Orlando and Central Florida — financing preparation, search strategy, negotiation, inspections, and closing coordination.",
  path: "/buy",
});

const buyerSegments = [
  {
    title: "First-Time Buyers",
    text: "The whole process explained in plain language — what things cost, what happens when, and how to avoid the mistakes that only show up after closing. No question is too basic.",
  },
  {
    title: "Relocation Buyers",
    text: "Moving to Central Florida? We pair community comparison with remote-friendly touring and a coordinated timeline, so you can decide confidently from anywhere. See our Relocation page for the full approach.",
  },
  {
    title: "New-Construction Buyers",
    text: "Builder contracts, incentives, and timelines work differently from resale. The on-site sales team represents the builder — we represent you, through every phase and inspection.",
  },
  {
    title: "Investors",
    text: "Rental-demand fundamentals, realistic expense analysis, and local regulation awareness — real estate evaluated as an investment, not a brochure.",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="For buyers"
        title="Buy With Experienced Guidance on Your Side."
        intro="From financing preparation and property selection through negotiation, inspections, and closing — a defined process, an experienced advocate, and a clear path to keys in hand."
      >
        <SearchHomesLink variant="primary" label="Search Available Homes" />
        <ButtonLink href="#buyer-inquiry" variant="outline-light">
          Start a Buyer Consultation
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Buy", path: "/buy" }]} />

      {/* Free ways to see homes */}
      <section className="bg-cream py-16 md:py-24" aria-labelledby="see-homes-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="Start looking today"
            title="See Homes This Week"
            intro="Four ways to start looking right now — all free, no obligation."
          />
          <h2 id="see-homes-heading" className="sr-only">
            See Homes This Week
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col rounded-lg border border-ink/10 bg-soft-white p-6">
              <h3 className="font-display text-lg font-medium text-ink">Search Available Homes</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                Browse every home on the market in Central Florida through our search platform.
              </p>
              <SearchHomesLink variant="primary" className="mt-5 w-full" label="Search Homes" />
            </article>
            <article className="flex flex-col rounded-lg border border-ink/10 bg-soft-white p-6">
              <h3 className="font-display text-lg font-medium text-ink">Found One Online?</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                Saw a home on any website or portal? Send it to us — we&rsquo;ll verify the details
                and schedule your private showing.
              </p>
              <ButtonLink href="#buyer-inquiry" variant="outline" className="mt-5 w-full">
                Request a Showing
              </ButtonLink>
            </article>
            <article className="flex flex-col rounded-lg border border-ink/10 bg-soft-white p-6">
              <h3 className="font-display text-lg font-medium text-ink">Talk It Through First</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                Book a free 30-minute buyer consultation — goals, budget comfort, and a search plan.
              </p>
              <ButtonLink
                href={externalLinks.scheduling}
                external
                variant="outline"
                className="mt-5 w-full"
              >
                Book 30 Minutes
              </ButtonLink>
            </article>
            <article className="flex flex-col rounded-lg border border-ink/10 bg-soft-white p-6">
              <h3 className="font-display text-lg font-medium text-ink">Browse by Community</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                Compare Orlando-area communities — housing character, amenities, and transportation.
              </p>
              <ButtonLink href="/communities" variant="outline" className="mt-5 w-full">
                Explore Communities
              </ButtonLink>
            </article>
          </div>
        </div>
      </section>

      {/* Service overview */}
      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            align="left"
            eyebrow="Buyer services"
            title="What Working With Bear Team Looks Like"
            intro="Buyer representation is more than opening doors. It's financing preparation, honest property evaluation, offer strategy, skilled negotiation, inspection and appraisal guidance, and coordination through closing — with communication at every step."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {buyerSegments.map((seg) => (
              <Reveal key={seg.title}>
                <article className="h-full rounded-lg border border-ink/10 bg-cream/40 p-6">
                  <h3 className="font-display text-lg font-medium text-ink">{seg.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{seg.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer process */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading title="The Buyer Process, Stage by Stage" />
          <ProcessTimeline steps={[...buyerProcess]} tone="dark" />
        </div>
      </section>

      {/* Financing / inspection / appraisal overview */}
      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-8 px-6 md:grid-cols-3">
          <Reveal className="md:col-span-3">
            <SectionHeading title="Preparation That Protects You" />
          </Reveal>
          {[
            {
              title: "Financing Preparation",
              text: "Getting organized before lender conversations makes every later step easier — and makes your offers stronger. We help you prepare for those conversations; licensed mortgage professionals make the lending decisions.",
              href: "/resources/financing-preparation",
            },
            {
              title: "Inspections",
              text: "General, wind-mitigation, four-point, and specialty inspections all play roles in Florida. We coordinate them and help you use the findings — negotiate, proceed, or walk away informed.",
              href: "/resources/home-inspection-overview",
            },
            {
              title: "Appraisal",
              text: "In financed purchases the lender orders an appraisal by a licensed appraiser. We track it, and when value and contract price differ, we walk you through the options.",
              href: "/resources/appraisal-overview",
            },
          ].map((card) => (
            <Reveal key={card.title}>
              <article className="flex h-full flex-col rounded-lg border border-ink/10 bg-cream/40 p-6">
                <h3 className="font-display text-lg font-medium text-ink">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>
                <ButtonLink href={card.href} variant="ghost" className="mt-4 self-start !px-0">
                  Learn more →
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQs — identical FAQs rendered visibly, so FAQ structured data is allowed here */}
      <section className="bg-cream py-16 md:py-24" aria-labelledby="buyer-faq-heading">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Buyer Questions, Answered" />
          <h2 id="buyer-faq-heading" className="sr-only">
            Buyer FAQs
          </h2>
          <FaqList faqs={buyerFaqs} />
        </div>
        <JsonLd data={faqSchema(buyerFaqs)} />
      </section>

      {/* Buyer inquiry form */}
      <section id="buyer-inquiry" className="scroll-mt-24 bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Plan Your Home Purchase"
            intro="Tell us where you're headed and we'll follow up with a consultation matched to your timeline — no pressure, no obligation."
          />
          <div className="rounded-lg border border-ink/10 bg-cream/30 p-6 md:p-8">
            <LeadForm
              kind="buyer-lead"
              fields={buyerFields}
              submitLabel="Request a Buyer Consultation"
              footnote={compliance.brokerageRelationship}
            />
          </div>
        </div>
      </section>
    </>
  );
}
