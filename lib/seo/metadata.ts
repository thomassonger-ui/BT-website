import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  /**
   * Optional page-specific share image — a root-relative path such as
   * "/images/communities/conway.jpg". Falls back to the generated brand card.
   */
  image?: string;
  imageAlt?: string;
};

/** Generated brand card from app/opengraph-image.tsx — 1200x630. */
const DEFAULT_OG_IMAGE = `${siteConfig.url}/opengraph-image`;
const DEFAULT_OG_ALT = `${siteConfig.name} — Central Florida`;

/**
 * Builds consistent per-page metadata: unique title/description, canonical
 * URL, Open Graph, and Twitter card data.
 *
 * The share image is set EXPLICITLY here rather than relying on the
 * app/opengraph-image.tsx file convention. That convention only reached the
 * homepage: any page that defines its own `openGraph` object — which every
 * page using this helper does — replaced the inherited image and shipped with
 * no og:image at all. 54 of 55 pages were affected, so every share on
 * Facebook, LinkedIn, iMessage or WhatsApp rendered as a bare text link.
 *
 * Pass `image` to override with a page-specific photo (community heroes,
 * listing photos). Absolute URLs are required by the OG spec, so a
 * root-relative path is resolved against siteConfig.url.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogTitle,
  image,
  imageAlt,
}: PageMeta): Metadata {
  const url = `${siteConfig.url}${path}`;
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${siteConfig.url}${image}`
    : DEFAULT_OG_IMAGE;
  const alt = imageAlt ?? DEFAULT_OG_ALT;

  // Only the generated card has known dimensions (1200x630). Photo assets vary
  // (the community images are 1200x671-675), so declaring 1200x630 for them
  // would hand scrapers the wrong aspect ratio — omit and let them read the file.
  const ogImage = image
    ? { url: imageUrl, alt }
    : { url: imageUrl, width: 1200, height: 630, alt };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle ?? title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description,
      images: [{ url: imageUrl, alt }],
    },
  };
}
