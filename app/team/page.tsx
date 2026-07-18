import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { team } from "@/content/team";

export const metadata: Metadata = buildMetadata({
  title: "Meet the Bear Team",
  description:
    "Meet the people behind Bear Team Real Estate — experienced Central Florida real estate professionals serving Orlando-area buyers and sellers.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our people"
        title="Meet the Bear Team."
        intro="A boutique team by design — experienced enough to handle anything a transaction can produce, small enough that you always know exactly who is working for you."
      >
        <ButtonLink href="/contact" variant="primary">
          Contact Bear Team
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Meet the Team", path: "/team" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.slug} className="group relative overflow-hidden rounded-lg border border-ink/10 bg-cream/40 transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.headshot}
                    alt={`${member.name}, ${member.title} at Bear Team Real Estate`}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  {!member.verified ? (
                    <p className="mb-2 inline-block rounded bg-gold/15 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                      Profile pending verification
                    </p>
                  ) : null}
                  <h2 className="font-display text-lg font-medium text-ink">
                    <Link
                      href={`/team/${member.slug}`}
                      className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {member.name}
                    </Link>
                  </h2>
                  <p className="text-sm text-muted">{member.title}</p>
                  <span aria-hidden="true" className="mt-3 inline-block text-sm font-semibold text-teal-800 group-hover:underline">
                    View profile →
                  </span>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
