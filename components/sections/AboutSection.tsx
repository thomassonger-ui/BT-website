import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyStory } from "@/content/company";

/** Section 9 — About Bear Team preview. */
export function AboutSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-content px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <PlaceholderImage
              label="Bear Team office / team photo"
              alt="Bear Team Real Estate team placeholder image"
              className="aspect-[4/3] rounded-lg"
              tone="charcoal"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Bear Team"
              title="Central Florida Real Estate Experience You Can Rely On."
            />
            <h2 id="about-heading" className="sr-only">
              Central Florida Real Estate Experience You Can Rely On
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-charcoal-soft">
              <p>{companyStory.philosophy[0]}</p>
              <p>{companyStory.philosophy[1]}</p>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-charcoal-soft">
              {companyStory.commitments.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-teal-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/about" variant="primary">
                Meet Bear Team
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
