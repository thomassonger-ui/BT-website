import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPage } from "@/components/layout/LegalPage";
import { compliance } from "@/config/compliance";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Disclosures",
  description: "Brokerage, licensing, and website disclosures for Bear Team Real Estate.",
  path: "/disclosures",
});

export default function DisclosuresPage() {
  return (
    <LegalPage
      title="Disclosures"
      path="/disclosures"
      intro="Brokerage, licensing, and website disclosures."
      sections={[
        {
          heading: "Brokerage Information",
          paragraphs: [
            `${siteConfig.legalName} · License: ${siteConfig.brokerageLicense} · Broker: ${siteConfig.brokerName} · ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip} · ${siteConfig.phone}`,
          ],
        },
        {
          heading: "Brokerage Relationships",
          paragraphs: [compliance.brokerageRelationship],
        },
        {
          heading: "Property-Value Consultations",
          paragraphs: [compliance.valuationDisclaimer],
        },
        {
          heading: "Third-Party Property Search",
          paragraphs: [compliance.thirdPartySearchDisclaimer],
        },
        {
          heading: "Market Information",
          paragraphs: [compliance.marketDataDisclaimer],
        },
        {
          heading: "Affiliated Business Arrangements",
          paragraphs: [
            "[REVIEW: disclose any affiliated business arrangements (title, mortgage, insurance) here, or state that none exist. Counsel to confirm RESPA-related language.]",
          ],
        },
        {
          heading: "Consumer Complaints",
          paragraphs: [`Consumer complaints may be directed to ${siteConfig.complaintContact}.`],
        },
      ]}
    />
  );
}
