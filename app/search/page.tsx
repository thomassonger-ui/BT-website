import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { Scout, type ScoutQuestion } from "@/components/forms/Scout";
import { compliance } from "@/config/compliance";
import { hasPropertySearchUrl } from "@/config/external-links";

export const metadata: Metadata = buildMetadata({
  title: "Search Homes in Central Florida",
  description:
    "Start your Central Florida home search — browse available homes and get matched with the right search plan through Scout™, Bear Team's intake assistant.",
  path: "/search",
});

/**
 * Buyer-QUALIFYING question set for the Search page — deeper than the
 * standard intake: financing status and current housing situation are the
 * questions that turn a browser into a qualified buyer conversation.
 */
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

export default function SearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Home search"
        title="Search Homes in Central Florida."
        intro="Browse what's on the market — and let Scout™ build your search plan, so the right homes find you instead of the other way around."
        image="/images/buy/search.jpg"
      >
        {hasPropertySearchUrl ? (
          <SearchHomesLink variant="primary" label="Browse Available Homes" />
        ) : (
          <ButtonLink href="#scout-qualify" variant="primary">
            Get Matched with Scout™
          </ButtonLink>
        )}
        <ButtonLink href="/communities" variant="outline-light">
          Explore Communities
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Search Homes", path: "/search" }]} />

      {/* Scout™ buyer qualification */}
      <section id="scout-qualify" className="scroll-mt-24 bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Ask Scout™ | Get Matched Before You Search"
            intro="Five quick questions so your search starts focused — the right areas, the right price band, financing squared away — then 30 minutes with Bethanne to lock in the plan."
          />
          <Scout initialIntent="Buying" questions={qualifyingQuestions} />
          <p className="mt-6 text-xs italic leading-relaxed text-muted">
            {compliance.thirdPartySearchDisclaimer} {compliance.brokerageRelationship}
          </p>
        </div>
      </section>

      {/* Why qualify first */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            title="Why a Focused Search Wins"
            intro="Anyone can scroll listings. Buyers who know their numbers and their target areas move faster when the right home appears — and in a competitive market, speed is leverage."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Financing First",
                text: "Sellers weigh financing strength alongside price. Knowing where you stand before you tour makes every offer you write stronger.",
              },
              {
                title: "Target the Right Areas",
                text: "Central Florida changes character every few miles. A focused search in two or three communities beats a shallow search across twenty.",
              },
              {
                title: "Move When It Matters",
                text: "When the right home lists, prepared buyers see it first and act the same day — with Bear Team handling the scheduling and strategy.",
              },
            ].map((card) => (
              <article key={card.title} className="rounded-lg border border-ink/10 bg-soft-white p-6">
                <h3 className="font-display text-lg font-medium text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/buy" variant="outline">
              See the Full Buyer Process
            </ButtonLink>
            <ButtonLink href="/home-value" variant="ghost">
              Selling first? Start with your home&rsquo;s value →
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
