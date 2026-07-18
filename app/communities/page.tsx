import type { Metadata } from "next";
import Image from "next/image";
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
const serviceAreas: { county: string; places: { name: string; slug?: string; img?: string }[] }[] = [
  {
    county: "Orange County",
    places: [
      { name: "Orlando", slug: "orlando", img: "/images/communities/orlando.jpg" },
      { name: "Conway", slug: "conway", img: "/images/communities/conway.jpg" },
      { name: "Edgewood", slug: "edgewood", img: "/images/communities/edgewood.jpg" },
      { name: "Belle Isle", slug: "belle-isle", img: "/images/communities/belle-isle.jpg" },
      { name: "Winter Park", slug: "winter-park", img: "/images/communities/winter-park.jpg" },
      { name: "College Park", slug: "college-park", img: "/images/communities/college-park.jpg" },
      { name: "Lake Nona", slug: "lake-nona", img: "/images/communities/lake-nona.jpg" },
      { name: "Dr. Phillips", slug: "dr-phillips", img: "/images/communities/dr-phillips.jpg" },
      { name: "Windermere", slug: "windermere", img: "/images/communities/windermere.jpg" },
      { name: "MetroWest", slug: "metrowest", img: "/images/communities/metrowest.jpg" },
      { name: "Pine Hills", slug: "pine-hills", img: "/images/communities/pine-hills.jpg" },
      { name: "Baldwin Park", img: "/images/communities/baldwin-park.jpg" },
      { name: "Thornton Park", img: "/images/communities/thornton-park.jpg" },
      { name: "Delaney Park", img: "/images/communities/delaney-park.jpg" },
      { name: "Audubon Park", img: "/images/communities/audubon-park.jpg" },
      { name: "Winter Garden", img: "/images/communities/winter-garden.jpg" },
      { name: "Horizon West", img: "/images/communities/horizon-west.jpg" },
      { name: "Ocoee", img: "/images/communities/ocoee.jpg" },
      { name: "Apopka", img: "/images/communities/apopka.jpg" },
      { name: "Maitland", img: "/images/communities/maitland.jpg" },
      { name: "Hunter's Creek", img: "/images/communities/hunters-creek.jpg" },
      { name: "Avalon Park", img: "/images/communities/avalon-park.jpg" },
      { name: "Waterford Lakes", img: "/images/communities/waterford-lakes.jpg" },
      { name: "Gotha", img: "/images/communities/gotha.jpg" },
      { name: "Oakland", img: "/images/communities/oakland.jpg" },
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
          <div className="space-y-12">
            {serviceAreas.map((group) => (
              <div key={group.county}>
                <h3 className="border-b border-gold/40 pb-2 font-display text-lg font-medium text-ink">
                  {group.county}
                </h3>
                {group.places.some((p) => p.img) ? (
                  <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                    {group.places.map((place) => {
                      const tile = (
                        <div className="group relative aspect-[16/10] overflow-hidden rounded-lg">
                          <Image
                            src={place.img as string}
                            alt={`Homes in ${place.name}, Florida`}
                            fill
                            sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
                          <p className="absolute bottom-2.5 left-3 right-3 text-sm font-semibold text-soft-white drop-shadow">
                            {place.name}
                            {place.slug ? <span aria-hidden="true" className="ml-1 text-gold-light">→</span> : null}
                          </p>
                        </div>
                      );
                      return (
                        <li key={place.name}>
                          {place.slug ? (
                            <Link
                              href={`/communities/${place.slug}`}
                              className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                            >
                              {tile}
                            </Link>
                          ) : (
                            tile
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.places.map((place) => (
                      <li
                        key={place.name}
                        className="inline-flex min-h-[36px] items-center rounded-full border border-ink/10 bg-soft-white/70 px-4 py-1.5 text-sm text-charcoal-soft"
                      >
                        {place.name}
                      </li>
                    ))}
                  </ul>
                )}
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
