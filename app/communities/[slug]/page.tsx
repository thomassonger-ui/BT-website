import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import Image from "next/image";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CommunityCard } from "@/components/ui/CommunityCard";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { contactFields } from "@/components/forms/definitions";
import { communities, getCommunity } from "@/content/communities";
import { compliance } from "@/config/compliance";

export function generateStaticParams() {
  return communities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) return {};
  return buildMetadata({
    title: `${community.name} Real Estate & Community Guide`,
    description: `${community.intro} Housing character, amenities, and transportation in ${community.name}, Central Florida.`,
    path: `/communities/${community.slug}`,
  });
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const community = getCommunity(slug);
  if (!community) notFound();

  const related = community.related
    .map((s) => getCommunity(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  return (
    <>
      <PageHero eyebrow="Community guide" title={community.name} intro={community.intro}>
        <SearchHomesLink variant="primary" label={`Search Homes`} />
        <ButtonLink href="#community-inquiry" variant="outline-light">
          Ask About {community.name}
        </ButtonLink>
      </PageHero>
      <Breadcrumbs
        items={[
          { name: "Communities", path: "/communities" },
          { name: community.name, path: `/communities/${community.slug}` },
        ]}
      />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              {community.image.includes("placeholder") ? (
                <PlaceholderImage
                  label={`${community.name} photography`}
                  alt={community.imageAlt}
                  className="aspect-[4/3] rounded-lg"
                />
              ) : (
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={community.image}
                    alt={community.imageAlt}
                    fill
                    sizes="(min-width:1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
            </Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">Lifestyle & Character</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{community.lifestyle}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">Location Context</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{community.locationContext}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">Housing Overview</h2>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{community.housingOverview}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {community.propertyTypes.map((type) => (
                    <li key={type} className="rounded-full border border-teal-700/30 bg-teal-50 px-3 py-1 text-xs font-medium text-teal-900">
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-lg border border-ink/10 bg-cream/40 p-6">
                <h2 className="font-display text-xl font-medium text-ink">Buyer Considerations</h2>
                <ul className="mt-4 space-y-2 text-sm text-charcoal-soft">
                  {community.buyerConsiderations.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-0.5 text-gold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal>
              <article className="h-full rounded-lg border border-ink/10 bg-cream/40 p-6">
                <h2 className="font-display text-xl font-medium text-ink">Seller Considerations</h2>
                <ul className="mt-4 space-y-2 text-sm text-charcoal-soft">
                  {community.sellerConsiderations.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-0.5 text-gold">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-medium text-ink">Nearby Amenities</h2>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-soft">
                {community.amenities.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-0.5 text-teal-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-medium text-ink">Transportation</h2>
              <ul className="mt-4 space-y-2 text-sm text-charcoal-soft">
                {community.transportation.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-0.5 text-teal-700">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 text-xs italic text-muted">{compliance.marketDataDisclaimer}</p>
        </div>
      </section>

      {/* Community inquiry */}
      <section id="community-inquiry" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title={`Curious About ${community.name}?`}
            intro="Ask us anything — property types, timing, or how this community compares to others you're considering."
          />
          <div className="rounded-lg border border-ink/10 bg-soft-white p-6 md:p-8">
            <LeadForm kind="contact" fields={contactFields} submitLabel="Send My Question" />
          </div>
        </div>
      </section>

      {/* Related communities */}
      {related.length > 0 ? (
        <section className="bg-soft-white py-16 md:py-24">
          <div className="mx-auto max-w-content px-6">
            <SectionHeading title="Related Communities" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((c) => (
                <CommunityCard key={c.slug} community={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
