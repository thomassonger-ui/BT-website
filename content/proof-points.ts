import type { ProofPoint } from "@/types/content";

/**
 * BUSINESS PROOF POINTS — approved by Bear Team (Tom Songer, 2026-07-18).
 * Do not add statistics, awards, rankings, review counts, or market-share
 * claims that are not verified.
 */
export const proofPoints: ProofPoint[] = [
  {
    id: "experience",
    value: "40+",
    label: "Years of Real Estate Experience",
    detail:
      "Four decades of Central Florida market cycles, negotiations, and closings inform every recommendation we make.",
  },
  {
    id: "homes-sold",
    value: "7,000+",
    label: "Homes Sold",
    detail:
      "Thousands of completed transactions across Central Florida property types, price points, and market conditions.",
  },
  {
    id: "volume",
    value: "$4B+",
    label: "Career Real Estate Volume",
    detail:
      "Experience at every scale — from first homes to luxury properties, land, and investment portfolios.",
  },
];

export const proofSupportingCopy =
  "Real estate decisions involve pricing, timing, financing, inspections, appraisal, negotiation, contracts, and risk. Experience helps bring those pieces together.";
