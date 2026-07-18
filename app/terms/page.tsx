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
            "[REVIEW: counsel to provide complete terms — permitted use, intellectual property, limitation of liability, governing law.]",
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
