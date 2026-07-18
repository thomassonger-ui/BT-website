import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { CommunityCard } from "@/components/ui/CommunityCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { communities } from "@/content/communities";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Central Florida Communities & Neighborhoods",
  description:
    "Compare Central Florida communities — Orlando, Winter Park, Lake Nona, Windermere, Dr. Phillips, and more — by housing character, amenities, and transportation.",
  path: "/communities",
});

/**
 * Full service-area directory, grouped by Orlando MSA county.
 * Names only — geography, no characterizations (Fair Housing).
 * Entries with a `slug` link to their detailed community page.
 */
const serviceAreas: { county: string; places: { name: string; slug?: string }[] }[] = [
  {
    county: "Orange County",
    places: [
      { name: "Orlando", slug: "orlando" },
      { name: "Conway", slug: "conway" },
      { name: "Edgewood", slug: "edgewood" },
      { name: "Belle Isle", slug: "belle-isle" },
      { name: "Winter Park", slug: "winter-park" },
      { name: "College Park", slug: "college-park" },
      { name: "Lake Nona", slug: "lake-nona" },
      { name: "Dr. Phillips", slug: "dr-phillips" },
      { name: "Windermere", slug: "windermere" },
      { name: "MetroWest", slug: "metrowest" },
      { name: "Pine Hills", slug: "pine-hills" },
      { name: "Baldwin Park" },
      { name: "Thornton Park" },
      { name: "Delaney Park" },
      { name: "Audubon Park" },
      { name: "Winter Garden" },
      { name: "Horizon West" },
      { name: "Ocoee" },
      { name: "Apopka" },
      { name: "Maitland" },
      { name: "Hunter's Creek" },
      { name: "Avalon Park" },
      { name: "Waterford Lakes" },
      { name: "Gotha" },
      { name: "Oakland" },
    ],
  },
  {
    county: "Seminole County",
    places: [
      { name: "Altamonte Springs" },
      { name: "Casselberry" },
      { name: "Lake Mary" },
      { name: "Longwood" },
      { name: "Oviedo" },
      { name: "Sanford" },
      { name: "Winter Springs" },
      { name: "Heathrow" },
      { name: "Wekiwa Springs" },
    ],
  },
  {
    county: "Osceola County",
    places: [
      { name: "Kissimmee" },
      { name: "St. Cloud" },
      { name: "Celebration" },
      { name: "Poinciana" },
      { name: "Harmony" },
    ],
  },
  {
    county: "Lake County",
    places: [
      { name: "Clermont" },
      { name: "Minneola" },
      { name: "Montverde" },
      { name: "Mount Dora" },
      { name: "Tavares" },
      { name: "Eustis" },
      { name: "Groveland" },
      { name: "Howey-in-the-Hills" },
    ],
  },
];

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

      {/* Full service-area directory by county */}
      <section className="bg-cream py-16 md:py-24" aria-labelledby="service-areas-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="The full map"
            title="Every Community We Serve"
            intro="Bear Team works across the four-county Orlando area. Communities with a detailed guide are linked — for any of the rest, current options are one conversation away."
          />
          <h2 id="service-areas-heading" className="sr-only">
            Communities served, by county
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            {serviceAreas.map((group) => (
              <div key={group.county}>
                <h3 className="border-b border-gold/40 pb-2 font-display text-lg font-medium text-ink">
                  {group.county}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.places.map((place) =>
                    place.slug ? (
                      <li key={place.name}>
                        <Link
                          href={`/communities/${place.slug}`}
                          className="inline-flex min-h-[36px] items-center rounded-full border border-teal-700/40 bg-soft-white px-4 py-1.5 text-sm font-medium text-teal-800 transition-colors hover:border-teal-700 hover:bg-teal-700 hover:text-soft-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                        >
                          {place.name}
                        </Link>
                      </li>
                    ) : (
                      <li
                        key={place.name}
                        className="inline-flex min-h-[36px] items-center rounded-full border border-ink/10 bg-soft-white/70 px-4 py-1.5 text-sm text-charcoal-soft"
                      >
                        {place.name}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              Don&rsquo;t see your community? We cover all of Central Florida.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/search" variant="primary">
                Request Current Options
              </ButtonLink>
              <ButtonLink href="/contact" variant="outline">
                Ask About a Community
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
