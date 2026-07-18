import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Hero } from "@/components/sections/Hero";
import { Pathways } from "@/components/sections/Pathways";
import { PropertyTypesSection } from "@/components/sections/PropertyTypesSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { BuyerProcessSection, SellerProcessSection } from "@/components/sections/ProcessSections";
import { HomeValueSection } from "@/components/sections/HomeValueSection";
import { CommunitiesSection } from "@/components/sections/CommunitiesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = buildMetadata({
  title: "Central Florida Real Estate | Bear Team Real Estate",
  description:
    "Buy, sell, or explore Central Florida real estate with Bear Team — experienced local guidance for Orlando-area buyers, sellers, homeowners, and relocation clients.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pathways />
      <PropertyTypesSection />
      <ExperienceSection />
      <BuyerProcessSection />
      <SellerProcessSection />
      <HomeValueSection />
      <CommunitiesSection />
      <AboutSection />
      <ResourcesSection />
      <TestimonialsSection />
      <FinalCta />
    </>
  );
}
