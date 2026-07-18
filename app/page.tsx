import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { CinematicHome } from "@/components/sections/CinematicHome";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Pathways } from "@/components/sections/Pathways";

export const metadata: Metadata = buildMetadata({
  title: "Central Florida Real Estate | Bear Team Real Estate",
  description:
    "Buy, sell, or explore Central Florida real estate with Bear Team — experienced local guidance for Orlando-area buyers, sellers, homeowners, and relocation clients.",
  path: "/",
});

/**
 * Minimal, cinematic landing page:
 * 10 full-screen photo scenes that cut into each other as you scroll
 * (pinned + scrubbed on desktop, natural flow on mobile/reduced motion),
 * followed by a slim proof strip and the three primary pathways.
 * Deeper content lives on /buy, /sell, /home-value, /communities, /resources.
 */
export default function HomePage() {
  return (
    <>
      <CinematicHome />
      <ProofStrip />
      <Pathways />
    </>
  );
}
