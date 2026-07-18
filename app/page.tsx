import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { TourHero } from "@/components/sections/TourHero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Pathways } from "@/components/sections/Pathways";

export const metadata: Metadata = buildMetadata({
  title: "Central Florida Real Estate | Bear Team Real Estate",
  description:
    "Buy, sell, or explore Central Florida real estate with Bear Team — experienced local guidance for Orlando-area buyers, sellers, homeowners, and relocation clients.",
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
      <Pathways />
    </>
  );
}
