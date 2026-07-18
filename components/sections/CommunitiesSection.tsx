import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CommunityCard } from "@/components/ui/CommunityCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { communities } from "@/content/communities";

/** Section 8 — Central Florida communities (first six on home; all on /communities). */
export function CommunitiesSection() {
  return (
    <section className="relative bg-soft-white py-20 md:py-28" aria-labelledby="communities-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Service areas"
          title="Explore Central Florida"
          intro="Distinct communities with distinct housing character — compared factually: architecture, amenities, transportation, and property types."
        />
        <h2 id="communities-heading" className="sr-only">
          Explore Central Florida
        </h2>
        <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communities.slice(0, 6).map((community) => (
            <div key={community.slug} className="relative">
              <CommunityCard community={community} />
            </div>
          ))}
        </Reveal>
        <div className="mt-12 text-center">
          <ButtonLink href="/communities" variant="secondary">
            Explore All Communities
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
