import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { CommunityCard } from "@/components/ui/CommunityCard";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { communities } from "@/content/communities";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Central Florida Communities & Neighborhoods",
  description:
    "Compare Central Florida communities — Orlando, Winter Park, Lake Nona, Windermere, Dr. Phillips, and more — by housing character, amenities, and transportation.",
  path: "/communities",
});

export default function CommunitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Explore Central Florida Communities."
        intro="Each community here is described factually — architecture, housing character, amenities, and transportation — so you can compare on the things that actually differ."
      >
        <SearchHomesLink variant="primary" />
        <ButtonLink href="/contact" variant="outline-light">
          Ask About a Community
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Communities", path: "/communities" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((community) => (
              <div key={community.slug} className="relative">
                <CommunityCard community={community} />
              </div>
            ))}
          </Reveal>
          <p className="mt-12 text-center text-xs italic text-muted">{compliance.marketDataDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
