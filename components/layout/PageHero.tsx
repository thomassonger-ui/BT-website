import type { ReactNode } from "react";

/** Shared dark hero band for interior pages (keeps the transparent header legible). */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ink pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="mx-auto max-w-content px-6">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{eyebrow}</p>
        ) : null}
        <h1 className="max-w-3xl font-display text-display-lg font-medium leading-tight text-soft-white text-balance">
          {title}
        </h1>
        {intro ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/80">{intro}</p> : null}
        {children ? <div className="mt-8 flex flex-wrap gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
