import { cn } from "@/lib/utils/cn";

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
  className,
}: {
  /** Set this when a parent <section aria-labelledby> points at this heading,
   *  so the section is named by its own h2 rather than an unrelated card title. */
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-teal-700" : "text-gold-light",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-display-md font-medium leading-tight text-balance",
          tone === "dark" ? "text-ink" : "text-soft-white",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p className={cn("mt-4 text-base leading-relaxed", tone === "dark" ? "text-muted" : "text-cream/80")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
