/**
 * Centralized external links — the ONLY place external destinations are set.
 *
 * The property-search link must point to an approved external search platform.
 * This site intentionally contains no IDX, MLS, or listing-feed functionality.
 * Until a verified URL is supplied via NEXT_PUBLIC_PROPERTY_SEARCH_URL, the
 * placeholder below is used and Search CTAs render in a clearly-labeled
 * "pending" state (see components/ui/Button.tsx SearchHomesLink).
 */

export const PROPERTY_SEARCH_PLACEHOLDER = "[INSERT APPROVED PROPERTY SEARCH URL]";

export const externalLinks = {
  propertySearch:
    process.env.NEXT_PUBLIC_PROPERTY_SEARCH_URL || PROPERTY_SEARCH_PLACEHOLDER,
  scheduling:
    process.env.NEXT_PUBLIC_SCHEDULING_URL || "https://calendar.app.google/Ppha9tukU9iqDgs88",
  googleMaps: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || "https://maps.app.goo.gl/n6635xh7GQ7E1fbX7",
  googleBusinessProfile: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || "",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
} as const;

export type ExternalLinks = typeof externalLinks;

/** Whether an approved property-search URL has been configured. */
export const hasPropertySearchUrl =
  externalLinks.propertySearch !== PROPERTY_SEARCH_PLACEHOLDER &&
  externalLinks.propertySearch.startsWith("http");
