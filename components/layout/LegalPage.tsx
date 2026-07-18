import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export type LegalSection = { heading: string; paragraphs: string[] };

/**
 * Shared template for legal/compliance pages. All content is placeholder
 * structure pending qualified legal review — see COMPLIANCE_REVIEW.md.
 */
export function LegalPage({
  title,
  path,
  intro,
  sections,
  reviewNotice = "This page is a structural draft. It requires review and approval by qualified legal counsel and the broker before launch, and must not be represented as legally compliant until that review is complete.",
}: {
  title: string;
  path: string;
  intro: string;
  sections: LegalSection[];
  reviewNotice?: string;
}) {
  return (
    <>
      <PageHero title={title} intro={intro} />
      <Breadcrumbs items={[{ name: title, path }]} />
      <article className="bg-soft-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-10 rounded-md border-l-4 border-gold bg-cream/60 p-4 text-xs font-semibold uppercase tracking-wide text-charcoal-soft">
            {reviewNotice}
          </p>
          {sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="font-display text-xl font-medium text-ink">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
