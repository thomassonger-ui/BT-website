import { siteConfig, isPlaceholder } from "@/config/site";
import type { Faq, Resource } from "@/types/content";

/**
 * JSON-LD structured data helpers.
 * NOTE: no property-listing structured data is generated anywhere on this
 * site, by design. FAQ structured data may only be used on pages where the
 * identical FAQs are visible to users.
 */

function clean(value: string): string | undefined {
  return isPlaceholder(value) ? undefined : value;
}

/** RealEstateAgent / LocalBusiness schema for the organization. */
export function realEstateAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.name,
    legalName: clean(siteConfig.legalName),
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: clean(siteConfig.phone),
    email: clean(siteConfig.email),
    address: {
      "@type": "PostalAddress",
      streetAddress: clean(siteConfig.address.street),
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: clean(siteConfig.address.zip),
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreas.map((name) => ({ "@type": "Place", name })),
    slogan: siteConfig.tagline,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

/** Only call from a page where these exact FAQs are rendered visibly. */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(resource: Resource, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resource.title,
    description: resource.summary,
    author: { "@type": "Organization", name: resource.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.url}${path}`,
  };
}

/** Serialize for a <script type="application/ld+json"> tag. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
