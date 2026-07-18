import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { externalLinks } from "@/config/external-links";
import { siteConfig } from "@/config/site";

/** Section 12 — final conversion. Visually strong, deliberately simple. */
export function FinalCta() {
  return (
    <section className="bg-ink py-24 md:py-32" aria-labelledby="final-cta-heading">
      <div className="mx-auto max-w-content px-6 text-center">
        <Reveal>
          <h2 id="final-cta-heading" className="font-display text-display-lg font-medium text-soft-white text-balance">
            Ready to Make Your Next Move?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/75">
            Search for a home, sell a property, or speak with Bear Team — whichever step you&rsquo;re
            on, we&rsquo;re ready to help.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <SearchHomesLink variant="primary" label="Search for a Home" />
            <ButtonLink href="/sell" variant="outline-light">
              Sell a Property
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline-light">
              Speak With Bear Team
            </ButtonLink>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-cream/70">
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="font-semibold text-gold-light underline-offset-4 hover:underline"
            >
              Call {siteConfig.phone}
            </a>
            {externalLinks.scheduling ? (
              <a
                href={externalLinks.scheduling}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                Schedule a Consultation
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span className="italic">Scheduling link: [VERIFY SCHEDULING URL]</span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
