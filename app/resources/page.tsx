import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { resources } from "@/content/resources";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Real Estate Resources & Guides",
  description:
    "Buyer guides, seller guides, financing preparation, inspection and appraisal overviews, moving checklists, and Central Florida relocation education from Bear Team.",
  path: "/resources",
});

export default function ResourcesPage() {
  const grouped = resources.reduce<Record<string, typeof resources>>((acc, r) => {
    (acc[r.category] ||= [] as unknown as typeof resources).push(r);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Education center"
        title="Plan Your Next Move."
        intro="Plain-language guides and checklists for Central Florida buyers, sellers, homeowners, and relocation clients. Education first — decisions second."
      >
        <ButtonLink href="/contact" variant="primary">
          Ask a Question Instead
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Resources", path: "/resources" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="mb-14 last:mb-0">
              <h2 className="mb-6 font-display text-2xl font-medium text-ink">{category}</h2>
              <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((resource) => (
                  <article
                    key={resource.slug}
                    className="group relative flex flex-col rounded-lg border border-ink/10 bg-cream/40 p-6 transition-shadow hover:shadow-md"
                  >
                    <h3 className="font-display text-lg font-medium text-ink">
                      <Link
                        href={`/resources/${resource.slug}`}
                        className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                      >
                        {resource.title}
                      </Link>
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{resource.summary}</p>
                    <span aria-hidden="true" className="mt-4 text-sm font-semibold text-teal-800 group-hover:underline">
                      Read →
                    </span>
                  </article>
                ))}
              </Reveal>
            </div>
          ))}
          <p className="mt-10 text-xs italic text-muted">{compliance.resourceDisclaimer}</p>
        </div>
      </section>
    </>
  );
}
