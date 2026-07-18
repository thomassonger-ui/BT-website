import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { LeadForm } from "@/components/forms/LeadForm";
import { buyerFields } from "@/components/forms/definitions";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Relocating to Central Florida | Relocation Services",
  description:
    "Moving into, out of, or within Central Florida? Bear Team provides dedicated relocation guidance — community comparison, remote touring, and coordinated timelines.",
  path: "/relocation",
});

const relocationTypes = [
  {
    title: "Moving to Central Florida",
    text: "Community orientation before you commit, remote-friendly touring, detailed condition reporting, and local guidance from someone who knows the difference a few miles makes here.",
  },
  {
    title: "Leaving Central Florida",
    text: "Sell here with a coordinated timeline while we help connect you with trusted representation in your destination market.",
  },
  {
    title: "Moving Within the Area",
    text: "Sequencing a sale and purchase is half the work. We coordinate both transactions so the timelines protect you, not stress you.",
  },
];

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
            intro="Every relocation gets a defined plan: community comparison, financing preparation, remote decision support, and coordinated timelines."
          />
          <Reveal stagger className="grid gap-6 md:grid-cols-3">
            {relocationTypes.map((type) => (
              <article key={type.title} className="rounded-lg border border-ink/10 bg-cream/40 p-6">
                <h3 className="font-display text-lg font-medium text-ink">{type.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{type.text}</p>
              </article>
            ))}
          </Reveal>
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
