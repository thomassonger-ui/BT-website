import { cn } from "@/lib/utils/cn";

/**
 * Approved-photography placeholder.
 * Renders a decorative, brand-toned panel with a visible replacement note so
 * unfinished imagery can never be mistaken for final content. Swap for
 * next/image with approved photos per CONTENT_GUIDE.md ("Replacing images").
 */
export function PlaceholderImage({
  label,
  alt,
  className,
  tone = "teal",
}: {
  label: string;
  alt?: string;
  className?: string;
  tone?: "teal" | "charcoal" | "gold";
}) {
  const tones = {
    teal: "from-teal-800 to-teal-900",
    charcoal: "from-charcoal to-ink",
    gold: "from-[#8d7132] to-[#6e5827]",
  } as const;
  return (
    <div
      role={alt ? "img" : undefined}
      aria-label={alt}
      aria-hidden={alt ? undefined : true}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        tones[tone],
        className,
      )}
    >
      {/* subtle architectural line motif */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full opacity-10" viewBox="0 0 400 300" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 260 L120 150 L200 210 L290 110 L400 190" className="text-cream" />
        <path d="M0 300 L400 300 M40 300 L40 240 M120 300 L120 150 M200 300 L200 210 M290 300 L290 110" className="text-cream" />
      </svg>
      <span className="relative z-10 rounded border border-cream/30 px-3 py-1.5 text-center text-[11px] uppercase tracking-widest text-cream/70">
        {label} — replace with approved photo
      </span>
    </div>
  );
}
