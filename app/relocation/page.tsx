import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { RelocationPathwayCards } from "@/components/relocation/RelocationPathwayCards";
import { LeadForm } from "@/components/forms/LeadForm";
import { buyerFields } from "@/components/forms/definitions";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Relocating to Central Florida | Relocation Services",
  description:
    "Moving into, out of, or within Central Florida? Bear Team provides dedicated relocation guidance — community comparison, remote touring, and coordinated timelines.",
  path: "/relocation",
});

export default function RelocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Relocation"
        title="A Guide on the Ground, Wherever You're Headed."
        intro="Employment, retirement, family, lifestyle, or investment — relocations run on logistics. We provide the local knowledge and coordination that make them manageable."
      >
        <ButtonLink href="#relocation-inquiry" variant="primary">
          Start a Relocation Conversation
        </ButtonLink>
        <SearchHomesLink variant="outline-light" />
      </PageHero>
      <Breadcrumbs items={[{ name: "Relocation", path: "/relocation" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            title="Three Kinds of Moves, One Process"
            intro="Every relocation gets a defined plan: community comparison, financing preparation, remote decision support, and coordinated timelines. Pick your move and tell us about it."
          />
          <RelocationPathwayCards />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/communities" variant="outline">
              Compare Central Florida Communities
            </ButtonLink>
            <ButtonLink href="/resources/relocation-guide" variant="ghost">
              Read the Relocation Guide →
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="relocation-inquiry" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Tell Us About Your Move"
            intro="A short conversation now saves weeks later. Share your timeline and target area and we'll follow up with a relocation consultation."
          />
          <div className="rounded-lg border border-ink/10 bg-soft-white p-6 md:p-8">
            <LeadForm
              kind="buyer-lead"
              fields={buyerFields}
              submitLabel="Request a Relocation Consultation"
              footnote={compliance.brokerageRelationship}
            />
          </div>
        </div>
      </section>
    </>
  );
}
