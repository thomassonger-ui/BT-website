import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPage } from "@/components/layout/LegalPage";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "Terms governing use of the Bear Team Real Estate website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      path="/terms"
      intro="The terms that govern your use of this website."
      sections={[
        {
          heading: "Use of This Website",
          paragraphs: [
            "This website provides general information about Bear Team Real Estate's services and Central Florida real estate education. Content is provided for informational purposes and may change without notice.",
            // REVIEW (not user-visible): counsel to provide complete terms — permitted use, IP, limitation of liability, governing law.
            "All content on this website — including text, photography, graphics, and branding — is the property of Bear Team Real Estate LLC or its licensors and may not be reproduced without written permission. Use of this website constitutes acceptance of these terms, which may be updated from time to time.",
          ],
        },
        {
          heading: "No Professional Advice",
          paragraphs: [
            "Website content is not legal, tax, lending, insurance, inspection, or appraisal advice. Consult the appropriate licensed professional about your situation.",
            compliance.brokerageRelationship,
          ],
        },
        {
          heading: "Third-Party Links",
          paragraphs: [compliance.thirdPartyLinkDisclaimer, compliance.thirdPartySearchDisclaimer],
        },
        {
          heading: "Market Information",
          paragraphs: [compliance.marketDataDisclaimer],
        },
      ]}
    />
  );
}
