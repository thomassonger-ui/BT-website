import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const paths = [
  {
    title: "Buy a Home",
    text: "Receive experienced guidance from financing preparation and property selection through negotiation and closing.",
    cta: { label: "Plan Your Home Purchase", href: "/buy" },
    secondary: "search" as const,
  },
  {
    title: "Sell a Property",
    text: "Understand your position in the market and build a pricing and marketing strategy around your property.",
    cta: { label: "Explore Selling", href: "/sell" },
  },
  {
    title: "Explore Communities",
    text: "Compare Central Florida communities, lifestyles, property types, and local considerations.",
    cta: { label: "View Communities", href: "/communities" },
  },
];

/** Section 2 — Buy, Sell, or Explore. Interactive immediately; reveal is decorative. */
export function Pathways() {
  return (
    <section className="bg-soft-white py-20 md:py-28" aria-labelledby="pathways-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Where would you like to start?"
          title="Buy, Sell, or Explore"
        />
        <Reveal stagger className="grid gap-8 md:grid-cols-3">
          {paths.map((path) => (
            <article
              key={path.title}
              className="flex flex-col rounded-lg border border-ink/10 bg-cream/50 p-8 transition-shadow hover:shadow-lg"
            >
              <h3 id={path.title === "Buy a Home" ? "pathways-heading" : undefined} className="font-display text-2xl font-medium text-ink">
                {path.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{path.text}</p>
              {/* Secondary link sits above the primary CTA so every card's
                  primary button bottom-aligns across the row. */}
              <div className="mt-6 flex flex-1 flex-col justify-end gap-3">
                {path.secondary === "search" ? (
                  <SearchHomesLink variant="ghost" label="Search Available Homes" className="w-full" />
                ) : null}
                <ButtonLink href={path.cta.href} variant="primary" className="w-full">
                  {path.cta.label}
                </ButtonLink>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
