import Link from "next/link";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { communities } from "@/content/communities";

/**
 * NEIGHBORHOODS WE SERVE — homepage link grid.
 *
 * SEO purpose: the 18 community pages are the site's highest-intent local
 * assets ("Conway homes for sale", "Winter Park realtor"), but before this
 * section they were reachable only through a nav dropdown and the
 * /communities index — two clicks from the homepage, receiving almost no
 * internal link equity from the site's strongest page. Linking every
 * community directly from the homepage is the fix.
 *
 * Fair Housing: names and links only. This section never characterizes a
 * community or who lives there — see CONTENT_GUIDE.md.
 */
export function NeighborhoodLinks() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-label="Neighborhoods we serve">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Where we work"
          title="Neighborhoods We Serve"
          intro="Bear Team works across Central Florida. Explore the housing stock, location context, and buyer and seller considerations for each community."
          align="left"
        />
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-1 sm:grid-cols-3 lg:grid-cols-4">
            {communities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/communities/${c.slug}`}
                  className="group flex items-baseline gap-2 rounded-sm py-2.5 text-sm text-ink transition-colors hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  <span className="border-b border-transparent transition-colors group-hover:border-gold">
                    {c.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10">
          <ButtonLink href="/communities" variant="ghost">
            Compare All Communities
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
