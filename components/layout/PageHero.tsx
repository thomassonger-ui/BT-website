import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Shared dark hero band for interior pages (keeps the transparent header
 * legible). Pass `image` for a photographic backdrop with a legibility scrim.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[420px] items-center overflow-hidden bg-ink pb-12 pt-28 md:min-h-[600px] md:pb-16 md:pt-40">
      {image ? (
        <>
          <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/40" />
        </>
      ) : null}
      <div className="relative mx-auto w-full max-w-content px-6">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-[1.65rem] font-medium leading-[1.18] text-soft-white text-balance md:text-display-lg md:leading-tight">
          {title}
        </h1>
        {intro ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/80 md:mt-5 md:text-base">{intro}</p> : null}
        {children ? <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
