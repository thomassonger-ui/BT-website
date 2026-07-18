import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { resources } from "@/content/resources";

/** Section 10 — resource center preview. */
export function ResourcesSection() {
  const featured = resources.slice(0, 6);
  return (
    <section className="bg-soft-white py-20 md:py-28" aria-labelledby="resources-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Real estate resources"
          title="Plan Your Next Move"
          intro="Guides, checklists, and plain-language education for Central Florida buyers, sellers, and homeowners."
        />
        <h2 id="resources-heading" className="sr-only">
          Plan Your Next Move
        </h2>
        <Reveal stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((resource) => (
            <article
              key={resource.slug}
              className="group relative rounded-lg border border-ink/10 bg-cream/40 p-6 transition-shadow hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-800">{resource.category}</p>
              <h3 className="mt-2 font-display text-lg font-medium text-ink">
                <Link
                  href={`/resources/${resource.slug}`}
                  className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  {resource.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{resource.summary}</p>
              <span aria-hidden="true" className="mt-4 inline-block text-sm font-semibold text-teal-800 group-hover:underline">
                Read →
              </span>
            </article>
          ))}
        </Reveal>
        <div className="mt-12 text-center">
          <ButtonLink href="/resources" variant="outline">
            Browse All Resources
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
