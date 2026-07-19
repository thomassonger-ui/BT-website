import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description: "Bear Team Real Estate's commitment to an accessible website experience for all visitors.",
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      path="/accessibility"
      intro="Our commitment to a website every visitor can use."
      sections={[
        {
          heading: "Our Commitment",
          paragraphs: [
            "Bear Team Real Estate is committed to providing a website that is accessible to the widest possible audience. This website targets WCAG 2.2 Level AA conformance: semantic structure, keyboard operability, visible focus indicators, sufficient color contrast, labeled forms with announced errors, and reduced-motion support.",
          ],
        },
        {
          heading: "Motion & Animation",
          paragraphs: [
            "Scroll-driven animation on this site respects your operating system's reduced-motion preference. With reduced motion enabled, animated and pinned sections are presented in normal reading order with all content and calls to action preserved.",
          ],
        },
        {
          heading: "Ongoing Work",
          paragraphs: [
            "Accessibility is ongoing. Content, images, and features added over time are reviewed against the same standard.", // REVIEW (not user-visible): consider an independent accessibility audit before launch,
          ],
        },
        {
          heading: "Feedback & Assistance",
          paragraphs: [
            `If you have difficulty using any part of this website, or would like information provided in an alternative format, contact ${siteConfig.accessibilityContact} or call ${siteConfig.phone}. We will work with you to provide the information or service you need.`,
          ],
        },
      ]}
    />
  );
}
