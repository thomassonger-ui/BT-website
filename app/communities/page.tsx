import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { CommunityCard } from "@/components/ui/CommunityCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { CommunityTiles, type CommunityTile } from "@/components/communities/CommunityTiles";
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
/** Blurb lookup for the 11 communities with full guides — reuse their intros. */
const intros = Object.fromEntries(communities.map((c) => [c.slug, c.intro]));

/**
 * Orange County photo tiles — every tile opens a pop-up card with the photo,
 * a short factual description, a full-guide link where one exists, and a
 * "current options" micro-form. REVIEW: verify blurb facts before launch.
 */
const orangeTiles: CommunityTile[] = [
  { name: "Orlando", slug: "orlando", img: "/images/communities/orlando.jpg", blurb: intros["orlando"] },
  { name: "Conway", slug: "conway", img: "/images/communities/conway.jpg", blurb: intros["conway"] },
  { name: "Edgewood", slug: "edgewood", img: "/images/communities/edgewood.jpg", blurb: intros["edgewood"] },
  { name: "Belle Isle", slug: "belle-isle", img: "/images/communities/belle-isle.jpg", blurb: intros["belle-isle"] },
  { name: "Winter Park", slug: "winter-park", img: "/images/communities/winter-park.jpg", blurb: intros["winter-park"] },
  { name: "College Park", slug: "college-park", img: "/images/communities/college-park.jpg", blurb: intros["college-park"] },
  { name: "Lake Nona", slug: "lake-nona", img: "/images/communities/lake-nona.jpg", blurb: intros["lake-nona"] },
  { name: "Dr. Phillips", slug: "dr-phillips", img: "/images/communities/dr-phillips.jpg", blurb: intros["dr-phillips"] },
  { name: "Windermere", slug: "windermere", img: "/images/communities/windermere.jpg", blurb: intros["windermere"] },
  { name: "MetroWest", slug: "metrowest", img: "/images/communities/metrowest.jpg", blurb: intros["metrowest"] },
  { name: "Pine Hills", slug: "pine-hills", img: "/images/communities/pine-hills.jpg", blurb: intros["pine-hills"] },
  {
    name: "Baldwin Park",
    img: "/images/communities/baldwin-park.jpg",
    blurb: "A planned village on the former Orlando Naval Training Center site — neo-traditional homes, townhomes, and condominiums around Lake Baldwin and a walkable village center.",
  },
  {
    name: "Thornton Park",
    img: "/images/communities/thornton-park.jpg",
    blurb: "A downtown-edge Orlando district of brick streets, historic bungalows, and condominiums a short walk from Lake Eola.",
  },
  {
    name: "Delaney Park",
    img: "/images/communities/delaney-park.jpg",
    blurb: "An established near-downtown Orlando neighborhood of early-20th-century homes surrounding its namesake park.",
  },
  {
    name: "Audubon Park",
    img: "/images/communities/audubon-park.jpg",
    blurb: "A garden district between downtown Orlando and Winter Park with mid-century homes and the East End Market corridor.",
  },
  {
    name: "Winter Garden",
    img: "/images/communities/winter-garden.jpg",
    blurb: "A west Orange County city with a restored historic downtown on the West Orange Trail near Lake Apopka's south shore.",
  },
  {
    name: "Horizon West",
    img: "/images/communities/horizon-west.jpg",
    blurb: "One of Orange County's newest master-planned areas — village-based new construction in the county's southwest corner.",
  },
  {
    name: "Ocoee",
    img: "/images/communities/ocoee.jpg",
    blurb: "A west Orange County city of established and newer subdivisions with access to SR 429 and the West Orange Trail.",
  },
  {
    name: "Apopka",
    img: "/images/communities/apopka.jpg",
    blurb: "A northwest Orange County city with acreage properties and newer subdivisions, near Wekiwa Springs State Park.",
  },
  {
    name: "Maitland",
    img: "/images/communities/maitland.jpg",
    blurb: "A lake-dotted suburb just north of Winter Park with mid-century and custom homes and its own SunRail station.",
  },
  {
    name: "Hunter's Creek",
    img: "/images/communities/hunters-creek.jpg",
    blurb: "A master-planned community in south Orlando with village neighborhoods, parks, and access to SR 417.",
  },
  {
    name: "Avalon Park",
    img: "/images/communities/avalon-park.jpg",
    blurb: "A neo-traditional planned community in east Orlando built around a town-center main street.",
  },
  {
    name: "Waterford Lakes",
    img: "/images/communities/waterford-lakes.jpg",
    blurb: "An east Orlando area of 1990s–2000s subdivisions around the Waterford Lakes Town Center.",
  },
  {
    name: "Gotha",
    img: "/images/communities/gotha.jpg",
    blurb: "A small historic west Orange County community of acreage homesteads and custom homes near the Windermere-area lakes.",
  },
  {
    name: "Oakland",
    img: "/images/communities/oakland.jpg",
    blurb: "A small town on Lake Apopka's south shore along the West Orange Trail, with historic streets and newer enclaves.",
  },
];

const serviceAreas: { county: string; places: { name: string }[] }[] = [
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

      {/* Featured: the specialty corridor */}
      <section className="bg-soft-white py-16 md:py-24" aria-labelledby="featured-communities-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="Featured communities"
            title="The Conway · Edgewood · Belle Isle Corridor"
            intro="Bear Team's home turf for more than 40 years — three lake-dotted communities minutes south of downtown Orlando, where the team has guided thousands of moves."
          />
          <h2 id="featured-communities-heading" className="sr-only">
            Featured communities
          </h2>
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["conway", "edgewood", "belle-isle"]
              .map((slug) => communities.find((c) => c.slug === slug))
              .filter((c): c is (typeof communities)[number] => Boolean(c))
              .map((community) => (
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
            <div>
              <h3 className="border-b border-gold/40 pb-2 font-display text-lg font-medium text-ink">
                Orange County
              </h3>
              <CommunityTiles tiles={orangeTiles} />
            </div>
            {serviceAreas.map((group) => (
              <div key={group.county}>
                <h3 className="border-b border-gold/40 pb-2 font-display text-lg font-medium text-ink">
                  {group.county}
                </h3>
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
