import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { TourHero } from "@/components/sections/TourHero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Pathways } from "@/components/sections/Pathways";
import { CredentialsBand } from "@/components/sections/CredentialsBand";
import { NeighborhoodLinks } from "@/components/sections/NeighborhoodLinks";
import { MembershipLogoBar } from "@/components/sections/MembershipLogoBar";

export const metadata: Metadata = buildMetadata({
  title: "Orlando, Florida Real Estate Brokerage | Bear Team Real Estate",
  description:
    "Orlando, Florida homes, houses, and real estate. Bear Team is an Orlando, Florida real estate broker with 40 years in Conway, serving buyers, sellers, and relocation clients across Central Florida communities.",
  path: "/",
});

/**
 * Minimal landing page: an interactive Matterport 3D walkthrough as the hero
 * (click-to-activate so page scrolling is never hijacked), followed by a slim
 * proof strip and the three primary pathways.
 * REVIEW: the tour is Matterport's labeled sample until replaced with a Bear
 * Team-owned scan via NEXT_PUBLIC_MATTERPORT_URL (see TourHero.tsx).
 * Deeper content lives on /buy, /sell, /home-value, /communities, /resources.
 */
export default function HomePage() {
  return (
    <>
      <TourHero />
      <ProofStrip />
      <CredentialsBand />
      <Pathways />
      <NeighborhoodLinks />
      <MembershipLogoBar />
    </>
  );
}
