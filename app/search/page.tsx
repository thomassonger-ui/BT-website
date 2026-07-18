import type { Metadata } from "next";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { Scout, type ScoutQuestion } from "@/components/forms/Scout";
import { compliance } from "@/config/compliance";
import { externalLinks } from "@/config/external-links";

export const metadata: Metadata = buildMetadata({
  title: "Search Homes in Central Florida",
  description:
    "You don't need another property-search website — you need the right homes, verified by an experienced local team. Tell Bear Team what you're looking for and we'll search, screen, and organize the strongest options.",
  path: "/search",
});

/** Buyer-qualifying questions — financing and situation separate lookers from buyers. */
const qualifyingQuestions: ScoutQuestion[] = [
  {
    key: "preferredArea",
    prompt: "Where are you thinking about living?",
    options: [
      "Conway · Edgewood · Belle Isle",
      "Downtown Orlando",
      "Winter Park",
      "Lake Nona",
      "Dr. Phillips / Windermere",
      "Elsewhere in Central Florida",
      "Not sure yet",
    ],
  },
  {
    key: "priceRange",
    prompt: "What price range feels comfortable?",
    options: ["Under $300k", "$300k–$450k", "$450k–$650k", "$650k–$1M", "$1M+", "Not sure yet"],
  },
  {
    key: "financingStatus",
    prompt: "Have you talked with a lender yet?",
    options: [
      "Pre-approved and ready",
      "Working with a lender now",
      "Paying cash",
      "Not yet — could use a referral",
      "Not yet — just starting",
    ],
  },
  {
    key: "housingSituation",
    prompt: "What's your current housing situation?",
    options: [
      "Renting",
      "Own — need to sell first",
      "Own — keeping it",
      "Relocating to the area",
      "Living with family",
    ],
  },
  {
    key: "timeframe",
    prompt: "When would you like to be moved in?",
    options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just exploring"],
  },
];

const pathCards = [
  {
    img: "/images/buy/firsttime.jpg",
    alt: "Modest single-story Florida home in the suburbs",
    title: "First-Time Buyers",
    text: "Get guidance from financing through closing.",
    cta: { label: "Start Here", href: "/buy" },
  },
  {
    img: "/images/buy/investor.jpg",
    alt: "Duplex home with two entrances and driveways in Orlando",
    title: "Investors",
    text: "Find rental, duplex, value-add, and income opportunities.",
    cta: { label: "Talk Investments", href: "/buy" },
  },
  {
    img: "/images/buy/search.jpg",
    alt: "Palm-lined street of homes in a Florida subdivision",
    title: "Search Available Homes",
    text: "Have our team build a personalized property search.",
    cta: { label: "Build My Home Search", href: "#scout-qualify" },
  },
  {
    img: "/images/buy/online.jpg",
    alt: "Person browsing home listings on a laptop",
    title: "Found One Online?",
    text: "Send us the link and we will investigate it.",
    cta: { label: "Send Us a Listing", href: "/contact" },
  },
  {
    img: "/images/buy/consult.jpg",
    alt: "Agent discussing plans with a couple in an office",
    title: "Talk It Through First",
    text: "Schedule a buyer strategy consultation.",
    cta: { label: "Book 30 Minutes", href: externalLinks.scheduling, external: true },
  },
  {
    img: "/images/buy/community.jpg",
    alt: "Aerial view of a residential subdivision with the downtown skyline beyond",
    title: "Browse by Community",
    text: "Explore Orlando-area communities and request current options.",
    cta: { label: "View Communities", href: "/communities" },
  },
];

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Home search"
        title="You do not need another property-search website."
        intro="You need the right homes, verified by an experienced local team. Tell us what you are looking for — we will search, screen, and organize the strongest available options for you. Ninety seconds to start, your shortlist within one business day, and direct MLS alerts the moment new homes hit the market."
        image="/images/buy/search.jpg"
      >
        <ButtonLink href="#scout-qualify" variant="primary">
          Build My Home Search
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-light">
          Send Us a Listing
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Search Homes", path: "/search" }]} />

      {/* Six pathways — the expert filter, not another portal */}
      <section className="bg-cream py-16 md:py-24" aria-labelledby="pathways-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="How would you like to start?"
            title="Six Ways In — All Backed by the Same Team"
          />
          <h2 id="pathways-heading" className="sr-only">
            Six ways to start your home search
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pathCards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-soft-white transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-medium text-ink">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{card.text}</p>
                  <ButtonLink
                    href={card.cta.href}
                    external={card.cta.external}
                    variant={card.title === "Search Available Homes" ? "primary" : "outline"}
                    className="mt-5 w-full"
                  >
                    {card.cta.label}
                  </ButtonLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why not just browse the portals? — the hook */}
      <section className="bg-ink py-16 md:py-24" aria-labelledby="why-not-portals-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="The honest answer"
            title="Why Not Just Browse Zillow?"
            intro="Browse wherever you like — then understand what the portals aren't doing for you."
            tone="light"
          />
          <h2 id="why-not-portals-heading" className="sr-only">
            Why not just browse the portals
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <article>
              <p className="font-display text-display-md font-medium text-gold-light">01</p>
              <h3 className="mt-2 text-lg font-semibold text-soft-white">
                Portals show homes after everyone&rsquo;s seen them.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">
                Listings reach national portals on a delay — and the best homes go pending while
                browsers scroll. Our clients get direct MLS alerts the moment a matching home
                lists, often before it surfaces on the portals at all.
              </p>
            </article>
            <article>
              <p className="font-display text-display-md font-medium text-gold-light">02</p>
              <h3 className="mt-2 text-lg font-semibold text-soft-white">
                The best inventory never makes the portals.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">
                Coming-soon listings, off-market sellers, and four decades of relationships in the
                Conway, Edgewood, and Belle Isle corridor surface homes you will simply never see
                on a search site.
              </p>
            </article>
            <article>
              <p className="font-display text-display-md font-medium text-gold-light">03</p>
              <h3 className="mt-2 text-lg font-semibold text-soft-white">
                On the portals, you are the product.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">
                Click &ldquo;contact agent&rdquo; on a portal and your information is sold as a
                lead to whoever paid for that ZIP code. Here you get one accountable local team —
                and we screen every home&rsquo;s condition, HOA, insurance, and flood picture
                before you fall in love with it.
              </p>
            </article>
          </div>
          <p className="mt-12 text-center">
            <ButtonLink href="#scout-qualify" variant="primary">
              Build My Home Search — 90 Seconds
            </ButtonLink>
          </p>
        </div>
      </section>

      {/* Scout™ buyer qualification — "Build My Home Search" lands here */}
      <section id="scout-qualify" className="scroll-mt-24 bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Ask Scout™ | Build My Home Search"
            intro="Ninety seconds, five questions. Your curated shortlist arrives within one business day, direct MLS alerts follow the moment matching homes hit the market — and you can book 30 minutes with Bethanne right now."
          />
          <Scout initialIntent="Buying" questions={qualifyingQuestions} />
          <p className="mt-6 text-xs italic leading-relaxed text-muted">
            {compliance.thirdPartySearchDisclaimer} {compliance.brokerageRelationship}
          </p>
        </div>
      </section>
    </>
  );
}
