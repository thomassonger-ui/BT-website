import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { propertyTypes } from "@/content/property-types";

/**
 * Section 3 — editorial property-types section. Deliberately NOT a listing
 * grid: no prices, statuses, MLS numbers, addresses, or inventory implied.
 */
export function PropertyTypesSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="property-types-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Central Florida property types"
          title="Explore the Possibilities"
          intro="An editorial look at the kinds of properties Central Florida offers — and what buyers should weigh with each. When you're ready to see what's on the market, use our approved external search."
        />
        <div id="property-types-heading" className="sr-only">
          Explore the Possibilities
        </div>
        <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {propertyTypes.map((type) => (
            <article key={type.id} className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-soft-white">
              <PlaceholderImage label={type.name} alt={type.imageAlt} className="aspect-[4/3]" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-medium text-ink">{type.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{type.description}</p>
                <ul className="mt-3 space-y-1.5 text-xs text-charcoal-soft">
                  {type.buyerConsiderations.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true" className="mt-0.5 text-gold">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-1 flex-col justify-end gap-2">
                  <ButtonLink href="/contact" variant="outline" className="!min-h-0 !px-4 !py-2 text-xs">
                    Talk With Bear Team
                  </ButtonLink>
                  {type.showSearchLink ? (
                    <SearchHomesLink variant="ghost" label="Search this property type" className="!min-h-0 text-xs" />
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
        <div className="mt-12 text-center">
          <SearchHomesLink variant="secondary" label="Search Available Homes" />
        </div>
      </div>
    </section>
  );
}
