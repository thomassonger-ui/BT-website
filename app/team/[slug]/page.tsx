import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { team } from "@/content/team";

/**
 * Unknown slugs must return a real 404, not a 200-status not-found shell.
 * Without this, Next generates unlisted slugs on demand and Vercel caches
 * and serves the not-found body with HTTP 200 — a soft 404 that wastes
 * crawl budget and silently absorbs mis-mapped redirects at domain cutover.
 */
export const dynamicParams = false;

/**
 * Official designation logos (member-portal files supplied by Tom Songer,
 * 2026-08-28). Only designations with an approved logo file appear as badges;
 * the rest render as text in the Designations row.
 */
const DESIGNATION_LOGOS: Record<string, { src: string; width: number; height: number }> = {
  GRI: { src: "/logos/gri.png", width: 300, height: 133 },
  ABR: { src: "/logos/abr.png", width: 427, height: 160 },
  CRS: { src: "/logos/crs.png", width: 141, height: 160 },
  "e-PRO": { src: "/logos/epro.png", width: 289, height: 160 },
  SFR: { src: "/logos/sfr.png", width: 575, height: 160 },
  SRES: { src: "/logos/sres.png", width: 241, height: 160 },
};

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
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              <Image
                src={member.headshot}
                alt={`${member.name}, ${member.title} at Bear Team Real Estate`}
                fill
                sizes="(min-width:1024px) 33vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <dl className="mt-6 space-y-3 rounded-lg border border-ink/10 bg-cream/40 p-6 text-sm">
              {member.phone ? (
                <div>
                  <dt className="font-semibold text-ink">Phone</dt>
                  <dd className="text-muted">
                    <a href={`tel:${member.phone.replace(/\D/g, "")}`} className="text-teal-800 underline-offset-2 hover:underline">
                      {member.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
              {member.email ? (
                <div>
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd className="text-muted">
                    <a href={`mailto:${member.email}`} className="text-teal-800 underline-offset-2 hover:underline">
                      {member.email}
                    </a>
                  </dd>
                </div>
              ) : null}
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
              {member.designations?.length ? (
                <div>
                  <dt className="font-semibold text-ink">Designations</dt>
                  <dd className="text-muted">{member.designations.join(", ")}</dd>
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
            {member.profileSections?.map((s) => (
              <div key={s.heading} className="mt-10">
                <h2 className="font-display text-2xl font-medium text-ink">{s.heading}</h2>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">{s.body}</p>
              </div>
            ))}
            {(() => {
              const badges = [
                ...(member.designations ?? [])
                  .filter((d) => DESIGNATION_LOGOS[d])
                  .map((d) => ({ alt: `${d} designation`, ...DESIGNATION_LOGOS[d] })),
                ...(member.recognitionLogos ?? []),
              ];
              if (!badges.length) return null;
              return (
                <div className="mt-10">
                  <h2 className="font-display text-2xl font-medium text-ink">
                    Credentials &amp; Recognition
                  </h2>
                  <ul className="mt-5 flex flex-wrap items-center gap-3">
                    {badges.map((b) => (
                      <li
                        key={b.src}
                        className="flex h-20 items-center rounded-md border border-ink/10 bg-soft-white px-5"
                      >
                        <Image
                          src={b.src}
                          alt={b.alt}
                          width={b.width}
                          height={b.height}
                          className="h-12 w-auto"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}
            <div className="mt-8 flex flex-wrap gap-4">
              {member.bookingUrl ? (
                /* Booking link replaces the generic contact CTA (Tom, 8/28:
                   his "Work With Tom" button → Calendly as "Discovery Call"). */
                <ButtonLink href={member.bookingUrl} variant="primary" external>
                  {member.bookingLabel || "Schedule a Call"}
                  <span className="sr-only"> (opens in a new tab)</span>
                </ButtonLink>
              ) : (
                <ButtonLink href="/contact" variant="primary">
                  Work With {member.name.includes("[") ? "Bear Team" : member.name.split(" ")[0]}
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
