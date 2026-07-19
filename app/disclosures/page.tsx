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
            // REVIEW (not user-visible): facts per Tom Songer 7/19/2026 + Sunbiz records. Counsel to confirm the formal RESPA ABA disclosure form used at referral and exact ownership percentages.
            "Bear Team Real Estate is the trade name of BearTeam LLC, a Florida limited liability company (Sunbiz document L16000178990) owned 100% by Bethanne Baer, Broker. Property-management services offered through this website are provided in-house by the same company.",
            "In addition, we disclose the following business relationship, which may be referred to you in connection with a transaction:",
            "Conway Title LLC — title and settlement services. Per Florida public corporate records, the manager and registered agent of Conway Title LLC (2462 E. Michigan Street, Suite 205, Orlando, FL 32806) is Allen J. Baer, a member of the Bear Team organization.",
            "Because of this relationship, a referral to an affiliated company may provide a financial or other benefit to the referring party or its owners. Where an affiliated business arrangement applies to your transaction, you will also receive a written disclosure at or before the time of referral, as required by the Real Estate Settlement Procedures Act (RESPA).",
            "You are NOT required to use any affiliated company as a condition of buying, selling, or settling on a property, or of receiving any Bear Team service. There are frequently other settlement service providers available with similar services — you are free to shop around to determine that you are receiving the best services and the best rate for those services.",
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
