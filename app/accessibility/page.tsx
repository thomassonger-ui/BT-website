import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description: "Bear Team Real Estate's commitment to an accessible website experience for all visitors.",
  path: "/accessibility",
});

// Statement text provided by Tom Songer, July 19, 2026 (contact placeholders
// filled with verified site contacts; Scout™ section added per Tom).
export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility Statement"
      path="/accessibility"
      intro="Last updated: July 19, 2026"
      sections={[
        {
          heading: "Our Commitment",
          paragraphs: [
            `${siteConfig.legalName} is committed to providing a website that is accessible to the widest possible audience, including individuals with disabilities. We believe everyone should be able to access information about our real estate services, communities, properties, and team without unnecessary barriers.`,
          ],
        },
        {
          heading: "Our Accessibility Goal",
          paragraphs: [
            "We are working to improve the accessibility and usability of the Bear Team website by using the Web Content Accessibility Guidelines, version 2.2, Level AA, as our technical accessibility goal. WCAG is an internationally recognized standard developed by the World Wide Web Consortium for making digital content more accessible to people with visual, auditory, mobility, cognitive, and other disabilities.",
            "Our accessibility efforts may include:",
            "• Providing alternative text for meaningful images",
            "• Supporting keyboard navigation",
            "• Maintaining sufficient color contrast",
            "• Using descriptive headings, links, buttons, and form labels",
            "• Supporting screen readers and other assistive technologies",
            "• Avoiding unnecessary flashing or moving content",
            "• Providing captions or transcripts for multimedia when appropriate",
            "• Designing pages to work across common browsers, devices, and screen sizes",
            "• Reviewing forms and interactive features for accessibility barriers",
          ],
        },
        {
          heading: "Scout™, Our Digital Assistant",
          paragraphs: [
            "Scout™, our conversational intake assistant, offers an alternative, text-based way to ask questions and request help on this website — including starting a home search, requesting a selling consultation, or asking about the market — without completing traditional multi-field forms. Scout™ is designed to be keyboard-operable and compatible with screen readers.",
            "If you have difficulty using Scout™ or any interactive feature, you can always reach a person directly by phone or email using the contact information below, and we will provide the same information or service through an accessible alternative.",
          ],
        },
        {
          heading: "Ongoing Efforts",
          paragraphs: [
            "Accessibility is an ongoing process. We periodically review the website, correct identified barriers, and consider accessibility when adding or updating content and functionality.",
            "The U.S. Department of Justice advises businesses that serve the public to make their websites accessible to people with disabilities.",
            "Although we strive to make the entire website accessible, some content, documents, embedded services, maps, videos, property-search tools, social-media features, or third-party applications may be provided or controlled by outside organizations. We may not be able to control the accessibility of every third-party platform, but we welcome reports of any difficulty accessing those features.",
          ],
        },
        {
          heading: "Need Assistance?",
          paragraphs: [
            "Should you have difficulty accessing information, completing a form, navigating the website, or using any website feature, please contact us. We will make reasonable efforts to provide the requested information or service through an accessible alternative.",
            siteConfig.legalName,
            `Phone: ${siteConfig.phone}`,
            `Email: ${siteConfig.accessibilityContact}`,
            `Office: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
            "When contacting us, please include:",
            "• The webpage or feature you were attempting to use",
            "• A brief description of the accessibility issue",
            "• The device, browser, or assistive technology being used, when relevant",
            "• Your preferred method of receiving a response",
            "Please do not include confidential financial, identification, or transaction information in an accessibility request.",
          ],
        },
        {
          heading: "Feedback",
          paragraphs: [
            "We welcome feedback about the accessibility of the Bear Team website. Accessibility concerns will be reviewed and directed to the appropriate team member for follow-up.",
            "This statement does not constitute a certification that every page or third-party feature fully conforms to WCAG or any particular legal standard. It describes our commitment, accessibility objective, and process for addressing reported barriers.",
          ],
        },
      ]}
    />
  );
}
