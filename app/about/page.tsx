import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { companyStory } from "@/content/company";
import { proofPoints } from "@/content/proof-points";
import { compliance } from "@/config/compliance";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "About Bear Team Real Estate",
  description:
    "Bear Team Real Estate is a Central Florida real estate company combining decades of experience with modern service — buyer and seller representation across the Orlando area.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Bear Team"
        title="Central Florida Real Estate Experience You Can Rely On."
        intro="An experienced, locally knowledgeable real estate company — and a hands-on alternative to impersonal national portals."
      >
        <ButtonLink href="/team" variant="primary">
          Meet Bear Team
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-light">
          Contact Us
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "About", path: "/about" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">Our History</h2>
                {companyStory.history.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {p}
                  </p>
                ))}
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">Our Philosophy</h2>
                {companyStory.philosophy.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {p}
                  </p>
                ))}
              </div>
              <div>
                <h2 className="font-display text-2xl font-medium text-ink">How We Work</h2>
                <ul className="mt-4 space-y-2 text-sm text-charcoal-soft">
                  {companyStory.commitments.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden="true" className="mt-0.5 font-bold text-teal-700">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Reveal className="space-y-6">
              <PlaceholderImage
                label="Bear Team leadership photo"
                alt="Bear Team leadership placeholder image"
                className="aspect-[4/3] rounded-lg"
                tone="charcoal"
              />
              <div className="rounded-lg border border-ink/10 bg-cream/40 p-6">
                <h2 className="font-display text-xl font-medium text-ink">Experience, in Numbers</h2>
                <dl className="mt-4 grid grid-cols-3 gap-4 text-center">
                  {proofPoints.map((point) => (
                    <div key={point.id}>
                      <dt className="order-2 text-[11px] uppercase tracking-wider text-muted">{point.label}</dt>
                      <dd className="font-display text-2xl font-medium text-teal-800">{point.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[11px] italic text-muted">
                  Figures pending final verification before launch.
                </p>
              </div>
              <div className="rounded-lg border border-ink/10 bg-cream/40 p-6 text-sm leading-relaxed text-charcoal-soft">
                <h2 className="font-display text-xl font-medium text-ink">Brokerage Information</h2>
                <p className="mt-3">{siteConfig.legalName}</p>
                <p>License: {siteConfig.brokerageLicense}</p>
                <p>Broker: {siteConfig.brokerName}</p>
                <p className="mt-3">{compliance.equalHousing}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 text-center">
          <SectionHeading
            title="Fair Housing Commitment"
            intro={compliance.equalHousing}
            tone="light"
            className="mb-6"
          />
          <ButtonLink href="/fair-housing" variant="outline-light">
            Read Our Fair Housing Statement
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
