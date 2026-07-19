import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ListingCards } from "@/components/listings/ListingCards";
import { getListings } from "@/lib/listings";
import { compliance } from "@/config/compliance";

export const revalidate = 1800;

export const metadata: Metadata = buildMetadata({
  title: "Featured Listings | Active & Pending Sales",
  description:
    "Bear Team Real Estate's featured listings across Central Florida — active homes for sale and pending sales, listed by Bethanne Baer, Broker. Schedule a private showing.",
  path: "/listings",
});

export default async function ListingsPage() {
  const listings = await getListings();
  const active = listings.filter((l) => l.status === "For Sale").length;
  const pending = listings.length - active;

  return (
    <>
      <PageHero
        eyebrow="Our listings"
        title="Featured Listings."
        intro={`Active and pending sales, listed and represented by Bear Team. ${active} active, ${pending} pending — every one backed by professional photography, deliberate pricing, and the team's full contract-to-close coordination.`}
        image="/images/heroes/sell.jpg"
        imageAlt="Grand two-story Florida home with manicured landscaping"
      >
        <ButtonLink href="#listings" variant="primary">
          Browse the Listings
        </ButtonLink>
        <ButtonLink href="/sell" variant="outline-light">
          List Your Property Here
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Featured Listings", path: "/listings" }]} />

      <section id="listings" className="scroll-mt-24 bg-soft-white py-16 md:py-24" aria-labelledby="listings-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="Active & pending sales"
            title="Every Listing, Personally Represented"
            intro="Click any property to ask a question, request comparables, or schedule a private showing — your note goes straight to the listing team, not a call center."
          />
          <h2 id="listings-heading" className="sr-only">
            Featured listings
          </h2>
          <ListingCards listings={listings} />
          <p className="mt-12 text-center text-xs italic leading-relaxed text-muted">
            Listing information is provided by Bear Team Real Estate LLC from Stellar MLS and is
            believed accurate as of the last update but is not guaranteed; status and pricing can
            change at any time. {compliance.brokerageRelationship} Equal Housing Opportunity.
          </p>
        </div>
      </section>

      {/* Seller CTA — the listings page doubles as proof for sellers */}
      <section className="bg-charcoal py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <SectionHeading
            title="Your Home Could Be on This Page."
            intro="Professional photography, deliberate pricing, and a team that answers — see how Bear Team markets every listing it takes."
            tone="light"
            className="mb-6"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <ButtonLink href="/sell" variant="primary">
              See Six Ways Out
            </ButtonLink>
            <ButtonLink href="/home-value" variant="outline-light">
              Check Your Home&rsquo;s Value
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
