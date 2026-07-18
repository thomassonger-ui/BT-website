import type { Metadata } from "next";
import Image from "next/image";
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
import { Scout } from "@/components/forms/Scout";
import { buyerProcess } from "@/content/company";
import { buyerFaqs } from "@/content/faqs";
import { compliance } from "@/config/compliance";
import { externalLinks } from "@/config/external-links";
import { siteConfig } from "@/config/site";

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
    img: "/images/buy/firsttime.jpg",
    alt: "Modest single-story Florida home in the suburbs",
  },
  {
    title: "Relocation Buyers",
    text: "Moving to Central Florida? We pair community comparison with remote-friendly touring and a coordinated timeline, so you can decide confidently from anywhere. See our Relocation page for the full approach.",
    img: "/images/rooms/08-lanai-1.jpg",
    alt: "Covered lanai opening to a pool deck",
  },
  {
    title: "New-Construction Buyers",
    text: "Builder contracts, incentives, and timelines work differently from resale. The on-site sales team represents the builder — we represent you, through every phase and inspection.",
    img: "/images/rooms/07-kitchen-1.jpg",
    alt: "New kitchen with island and pendant lighting",
  },
  {
    title: "Investors",
    text: "Rental-demand fundamentals, realistic expense analysis, and local regulation awareness — real estate evaluated as an investment, not a brochure.",
    img: "/images/buy/investor.jpg",
    alt: "Duplex home with two entrances and driveways in Orlando",
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="For buyers"
        title="Buy With Experienced Guidance on Your Side."
        intro="From financing preparation and property selection through negotiation, inspections, and closing — a defined process, an experienced advocate, and a clear path to keys in hand."
        image="/images/rooms/01-exterior-1.jpg"
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
            {[
              {
                img: "/images/buy/search.jpg",
                alt: "Palm-lined street of homes in a Florida subdivision",
                title: "Search Available Homes",
                text: "Browse every home on the market in Central Florida through our search platform.",
                cta: <SearchHomesLink variant="primary" className="mt-5 w-full" label="Search Homes" />,
              },
              {
                img: "/images/buy/online.jpg",
                alt: "Person browsing home listings on a laptop",
                title: "Found One Online?",
                text: "Saw a home on any website or portal? Send it to us — we’ll verify the details and schedule your private showing.",
                cta: (
                  <ButtonLink href="#buyer-inquiry" variant="outline" className="mt-5 w-full">
                    Request a Showing
                  </ButtonLink>
                ),
              },
              {
                img: "/images/buy/consult.jpg",
                alt: "Agent discussing plans with a couple in an office",
                title: "Talk It Through First",
                text: "Book a free 30-minute buyer consultation — goals, budget comfort, and a search plan.",
                cta: (
                  <ButtonLink href={externalLinks.scheduling} external variant="outline" className="mt-5 w-full">
                    Book 30 Minutes
                  </ButtonLink>
                ),
              },
              {
                img: "/images/buy/community.jpg",
                alt: "Aerial view of a residential subdivision with the downtown skyline beyond",
                title: "Browse by Community",
                text: "Compare Orlando-area communities — housing character, amenities, and transportation.",
                cta: (
                  <ButtonLink href="/communities" variant="outline" className="mt-5 w-full">
                    Explore Communities
                  </ButtonLink>
                ),
              },
            ].map((card) => (
              <article key={card.title} className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-soft-white">
                <div className="relative aspect-[16/10]">
                  <Image src={card.img} alt={card.alt} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-medium text-ink">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>
                  {card.cta}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scout™ conversational intake */}
      <section id="buyer-inquiry" className="scroll-mt-24 bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Ask Scout™ | Plan Your Home Purchase"
            intro="Answer a few quick questions and pick a time with Bethanne — no long forms, no pressure."
          />
          <Scout initialIntent="Buying" />
          <p className="mt-6 text-xs italic leading-relaxed text-muted">{compliance.brokerageRelationship}</p>
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
                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-cream/40 sm:flex-row">
                  <div className="relative aspect-[16/10] sm:aspect-auto sm:w-2/5">
                    <Image src={seg.img} alt={seg.alt} fill sizes="(min-width:768px) 20vw, 100vw" className="object-cover" />
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="font-display text-lg font-medium text-ink">{seg.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{seg.text}</p>
                  </div>
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

      {/* Service area map */}
      <section className="bg-cream py-16 md:py-24" aria-labelledby="service-area-heading">
        <div className="mx-auto max-w-content px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[2fr,3fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Where we work"
                title="Buying Across Central Florida"
                intro="From downtown Orlando to the lakes, golf communities, and new-construction corridors — we show and negotiate homes across the metro."
              />
              <h2 id="service-area-heading" className="sr-only">
                Buying Across Central Florida
              </h2>

              {/* Specialty corridor — home turf */}
              <div className="mb-6 rounded-lg border-l-4 border-gold bg-soft-white p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Our specialty for 40+ years
                </p>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  The <strong>Conway · Edgewood · Belle Isle</strong> corridor is Bear Team&rsquo;s
                  home turf — our office sits in the middle of it, and we&rsquo;ve represented
                  buyers and sellers here for four decades.
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {[
                    { name: "Conway", slug: "conway" },
                    { name: "Edgewood", slug: "edgewood" },
                    { name: "Belle Isle", slug: "belle-isle" },
                  ].map((area) => (
                    <li key={area.slug}>
                      <ButtonLink
                        href={`/communities/${area.slug}`}
                        variant="ghost"
                        className="!min-h-0 rounded-full border border-gold bg-gold/10 !px-4 !py-1.5 text-xs font-semibold !text-ink !no-underline hover:bg-gold/25"
                      >
                        ★ {area.name}
                      </ButtonLink>
                    </li>
                  ))}
                </ul>
              </div>

              <ul className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas
                  .filter((area) => !(siteConfig.specialtyAreas as readonly string[]).includes(area))
                  .map((area) => (
                    <li key={area}>
                      <ButtonLink
                        href="/communities"
                        variant="ghost"
                        className="!min-h-0 rounded-full border border-teal-700/30 bg-soft-white !px-4 !py-1.5 text-xs !no-underline hover:border-teal-700"
                      >
                        {area}
                      </ButtonLink>
                    </li>
                  ))}
              </ul>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=Conway,+Orlando,+FL&z=12&output=embed"
              title="Map of Bear Team's specialty corridor — Conway, Edgewood, and Belle Isle — and the surrounding Central Florida service area"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full rounded-lg border-0 shadow-sm lg:aspect-[16/10]"
            />
          </div>
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

    </>
  );
}
