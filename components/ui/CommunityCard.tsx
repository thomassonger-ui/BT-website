import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { Community } from "@/types/content";

/**
 * Community card used on the homepage and /communities index.
 *
 * The <article> MUST keep `relative`. The title link uses the stretched-link
 * pattern (`after:absolute after:inset-0`) so the whole card is clickable —
 * and without a positioned ancestor that ::after resolves against the initial
 * containing block and covers the ENTIRE PAGE, swallowing every other click on
 * it. That shipped once and killed the hero buttons on all 18 community pages.
 */
export function CommunityCard({ community }: { community: Community }) {
  const hasPhoto = !community.image.includes("placeholder");
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-soft-white transition-shadow hover:shadow-lg">
      {hasPhoto ? (
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={community.image}
            alt={community.imageAlt}
            fill
            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <PlaceholderImage label={community.name} alt={community.imageAlt} className="aspect-[16/10]" tone="teal" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium text-ink">
          <Link
            href={`/communities/${community.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {community.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{community.intro}</p>
        <p className="mt-4 text-xs font-medium uppercase tracking-wider text-teal-800">
          {community.propertyTypes.slice(0, 3).join(" · ")}
        </p>
        <span className="mt-4 text-sm font-semibold text-teal-800 group-hover:underline" aria-hidden="true">
          Explore {community.name} →
        </span>
      </div>
    </article>
  );
}
