import type { Faq } from "@/types/content";

/**
 * FAQs shown on /buy and /sell. FAQ structured data is generated ONLY for the
 * page where the identical FAQs are visible (lib/structured-data).
 * REVIEW NOTE: confirm all answers with the broker before launch.
 */

export const buyerFaqs: Faq[] = [
  {
    question: "How do I start searching for homes?",
    answer:
      "Property search is provided through an approved external search platform — use the Search Homes button anywhere on this site. For a guided search matched to your goals, start with a buyer consultation and we'll do the heavy lifting.",
  },
  {
    question: "Do I need to be pre-approved before touring homes?",
    answer:
      "Pre-approval isn't required for an initial conversation, but most sellers expect it with an offer. We can point you toward preparation steps so financing is ready when the right home appears. We are not lenders, and financing decisions are made by licensed mortgage professionals.",
  },
  {
    question: "What does it cost to work with a buyer's agent?",
    answer:
      "Compensation arrangements are explained clearly and in writing before you commit to anything. We'll walk through how representation and compensation work in Florida during your initial consultation.",
  },
  {
    question: "How competitive is the Central Florida market?",
    answer:
      "Conditions vary by neighborhood, price point, and season. Part of our job is giving you a current, honest read on the specific segment you're shopping — not a generic market headline.",
  },
  {
    question: "Can you help if I'm relocating from out of state?",
    answer:
      "Yes. We regularly work with relocation clients — video tours, community comparisons, and coordinated timelines are a normal part of our process. See our Relocation page for details.",
  },
];

export const sellerFaqs: Faq[] = [
  {
    question: "What is my home worth?",
    answer:
      "Online estimates are a starting point, not a conclusion. A property-value consultation considers condition, location, improvements, competition, and current buyer demand. It is not an appraisal and does not create a brokerage relationship.",
  },
  {
    question: "What should I fix before selling?",
    answer:
      "Not everything is worth fixing. We walk the property with you and separate the improvements buyers will pay for from the ones they won't notice.",
  },
  {
    question: "How long will my home take to sell?",
    answer:
      "It depends on pricing, condition, presentation, and the current buyer pool in your segment. We'll show you what comparable properties are actually doing right now rather than quoting an average.",
  },
  {
    question: "Do I have to hold open houses?",
    answer:
      "No. Showing strategy is built around your property and your household. Open houses are one tool among several, not a requirement.",
  },
  {
    question: "What happens after I accept an offer?",
    answer:
      "Inspections, appraisal, financing milestones, title work, and closing coordination — we manage the deadlines and keep you informed at every stage so the contract stays on track.",
  },
];
