import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";
import { externalLinks, hasPropertySearchUrl, PROPERTY_SEARCH_PLACEHOLDER } from "@/config/external-links";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold min-h-[48px]";

const variants: Record<Variant, string> = {
  primary: "bg-teal-700 text-soft-white hover:bg-teal-800",
  secondary: "bg-ink text-soft-white hover:bg-charcoal",
  outline: "border-2 border-teal-700 text-teal-800 hover:bg-teal-700 hover:text-soft-white",
  "outline-light": "border-2 border-soft-white/80 text-soft-white hover:bg-soft-white hover:text-ink",
  ghost: "text-teal-800 underline underline-offset-4 hover:text-teal-600 px-2",
};

export function ButtonLink({
  href,
  variant = "primary",
  external = false,
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(base, variants[variant], className);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ExternalIcon />
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/** Small visual indicator for external links (with SR text). */
export function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 3.5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3" />
      <path d="M9.5 2.5h4v4" />
      <path d="M13.5 2.5 7 9" />
    </svg>
  );
}

/**
 * Every "Search Homes" CTA on the site renders through this component so the
 * destination stays centralized in config/external-links.ts.
 *
 * Until an approved NEXT_PUBLIC_PROPERTY_SEARCH_URL is configured, the button
 * renders as a clearly-labeled pending state pointing to /contact instead of
 * inventing a destination.
 */
export function SearchHomesLink({
  variant = "primary",
  className,
  label = "Search Homes",
}: {
  variant?: Variant;
  className?: string;
  label?: string;
}) {
  if (!hasPropertySearchUrl) {
    return (
      <Link
        href="/contact"
        title={`Property search link pending: ${PROPERTY_SEARCH_PLACEHOLDER}`}
        className={cn(base, variants[variant], className)}
      >
        {label}
        <span className="sr-only">
          (external property-search link not yet configured — contact Bear Team)
        </span>
      </Link>
    );
  }
  return (
    <a
      href={externalLinks.propertySearch}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      {label}
      <ExternalIcon />
      <span className="sr-only">(opens external property-search site in a new tab)</span>
    </a>
  );
}
