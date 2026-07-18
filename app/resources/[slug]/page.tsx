import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { articleSchema } from "@/lib/structured-data";
import { ButtonLink } from "@/components/ui/Button";
import { resources, getResource } from "@/content/resources";
import { compliance } from "@/config/compliance";

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return buildMetadata({
    title: resource.title,
    description: resource.summary,
    path: `/resources/${resource.slug}`,
  });
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  const related = resource.related
    .map((s) => getResource(s))
    .filter((r): r is NonNullable<typeof r> => Boolean(r));

  return (
    <>
      <PageHero eyebrow={resource.category} title={resource.title} intro={resource.summary} />
      <Breadcrumbs
        items={[
          { name: "Resources", path: "/resources" },
          { name: resource.title, path: `/resources/${resource.slug}` },
        ]}
      />
      <JsonLd data={articleSchema(resource, `/resources/${resource.slug}`)} />

      <article className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-8 text-xs text-muted">
            By {resource.author} · Reviewed: {resource.reviewDate}
          </p>
          {resource.professionalReview ? (
            <p className="mb-8 rounded-md border-l-4 border-gold bg-cream/60 p-4 text-xs font-medium text-charcoal-soft">
              REVIEW NOTE: {resource.professionalReview}
            </p>
          ) : null}

          {resource.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-display text-2xl font-medium text-ink">{section.heading}</h2>
              {section.body.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-[15px] leading-relaxed text-charcoal-soft">
                  {p}
                </p>
              ))}
            </section>
          ))}

          <p className="rounded-md border border-ink/10 bg-cream/50 p-4 text-xs italic leading-relaxed text-muted">
            {compliance.resourceDisclaimer}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/contact" variant="primary">
              Talk With Bear Team
            </ButtonLink>
            <ButtonLink href="/resources" variant="outline">
              All Resources
            </ButtonLink>
          </div>

          {related.length > 0 ? (
            <aside className="mt-14 border-t border-ink/10 pt-8">
              <h2 className="font-display text-xl font-medium text-ink">Related Resources</h2>
              <ul className="mt-4 space-y-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/resources/${r.slug}`}
                      className="text-sm font-medium text-teal-800 underline-offset-4 hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </article>
    </>
  );
}
