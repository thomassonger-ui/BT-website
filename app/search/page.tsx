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
        intro="You need the right homes, verified by an experienced local team. Tell us what you are looking for — we will search, screen, and organize the strongest available options for you."
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

      {/* Scout™ buyer qualification — "Build My Home Search" lands here */}
      <section id="scout-qualify" className="scroll-mt-24 bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Ask Scout™ | Build My Home Search"
            intro="Five quick questions so we can search, screen, and organize the strongest options for you — then 30 minutes with Bethanne to lock in the plan."
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
