import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPage } from "@/components/layout/LegalPage";
import { compliance } from "@/config/compliance";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Fair Housing",
  description: "Bear Team Real Estate's Fair Housing commitment and Equal Housing Opportunity statement.",
  path: "/fair-housing",
});

export default function FairHousingPage() {
  return (
    <LegalPage
      title="Fair Housing"
      path="/fair-housing"
      intro="Equal Housing Opportunity — our commitment in every transaction and every communication."
      sections={[
        {
          heading: "Equal Housing Opportunity",
          paragraphs: [
            compliance.equalHousing,
            "We provide real estate services without regard to race, color, religion, sex, disability, familial status, national origin, or any other class protected by federal, state, or local law.",
          ],
        },
        {
          heading: "What This Means on This Website",
          paragraphs: [
            "Community descriptions on this website are intentionally factual: architecture, amenities, transportation, geography, and property characteristics. We do not describe communities in terms of who they are 'for,' and we do not publish school ratings, crime characterizations, or demographic commentary.",
          ],
        },
        {
          heading: "Questions or Concerns",
          paragraphs: [
            `Fair Housing questions or concerns may be directed to ${siteConfig.complaintContact}. Information about federal Fair Housing protections is available from the U.S. Department of Housing and Urban Development (HUD).`, // REVIEW (not user-visible): counsel to confirm complaint-pathway language and any required state notices,
          ],
        },
      ]}
    />
  );
}
