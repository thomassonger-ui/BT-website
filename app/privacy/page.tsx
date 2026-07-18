import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPage } from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Bear Team Real Estate collects, uses, and protects information submitted through this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy"
      intro="How this website collects, uses, and protects your information."
      sections={[
        {
          heading: "Information We Collect",
          paragraphs: [
            "When you submit a form on this website (contact, buyer, seller, valuation, or community inquiries), we collect the information you provide: name, contact details, property information, and your message.",
            "[REVIEW: counsel to confirm description of analytics/cookie data collection once tooling is selected. No analytics are configured in the initial build.]",
          ],
        },
        {
          heading: "How We Use Information",
          paragraphs: [
            "Information you submit is used to respond to your inquiry, provide requested consultations, and communicate with you using your preferred contact method.",
            "We do not sell personal information. [REVIEW: counsel to confirm sharing/disclosure language, including any CRM or email-service providers used for lead handling.]",
          ],
        },
        {
          heading: "Communication Consent",
          paragraphs: [
            "Forms on this site include an express consent checkbox for phone, email, and text-message contact. Consent is not a condition of purchase, and you may opt out at any time. [REVIEW: counsel to confirm TCPA and email-marketing consent language.]",
          ],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "[REVIEW: describe cookies actually in use after analytics decisions are made, and add a consent banner if required. The initial build sets no marketing cookies.]",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Privacy questions: ${siteConfig.privacyContact}. You may also write to us at ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}.`,
          ],
        },
      ]}
    />
  );
}
