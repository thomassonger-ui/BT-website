import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { ButtonLink } from "@/components/ui/Button";
import { team } from "@/content/team";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) return {};
  return buildMetadata({
    title: `${member.name} | ${member.title}`,
    description: `${member.name}, ${member.title} at Bear Team Real Estate, serving ${member.areasServed.join(", ")}.`,
    path: `/team/${member.slug}`,
  });
}

export default async function TeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  return (
    <>
      <PageHero eyebrow={member.title} title={member.name} />
      <Breadcrumbs
        items={[
          { name: "Meet the Team", path: "/team" },
          { name: member.name, path: `/team/${member.slug}` },
        ]}
      />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[1fr,2fr]">
          <div>
            <PlaceholderImage
              label="Approved headshot"
              alt={`${member.name} headshot placeholder`}
              className="aspect-square rounded-lg"
              tone="charcoal"
            />
            <dl className="mt-6 space-y-3 rounded-lg border border-ink/10 bg-cream/40 p-6 text-sm">
              <div>
                <dt className="font-semibold text-ink">Areas served</dt>
                <dd className="text-muted">{member.areasServed.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Specialties</dt>
                <dd className="text-muted">{member.specialties.join(", ")}</dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Languages</dt>
                <dd className="text-muted">{member.languages.join(", ")}</dd>
              </div>
              {member.license ? (
                <div>
                  <dt className="font-semibold text-ink">License</dt>
                  <dd className="text-muted">{member.license}</dd>
                </div>
              ) : null}
            </dl>
          </div>
          <div>
            {!member.verified ? (
              <p className="mb-4 inline-block rounded bg-gold/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                Profile pending verification — do not publish
              </p>
            ) : null}
            <h2 className="font-display text-2xl font-medium text-ink">Biography</h2>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">{member.bio}</p>
            {member.experience ? (
              <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">{member.experience}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/contact" variant="primary">
                Work With {member.name.includes("[") ? "Bear Team" : member.name.split(" ")[0]}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
