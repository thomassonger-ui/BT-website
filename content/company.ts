import type { ProcessStep } from "@/types/content";

/**
 * Company story, positioning, and process content.
 * REVIEW NOTE: history and philosophy copy below is drafted for review —
 * confirm all factual statements with Bear Team before launch.
 */

export const positioning = {
  primary: "Experience, Local Knowledge, and a Clear Path Home.",
  supporting: [
    "Helping Central Florida Buyers and Sellers Move Forward.",
    "Your Central Florida Real Estate Resource.",
    "Local Knowledge. Experienced Guidance. Better Decisions.",
    "From Property Search to Closing, We Help You Move With Confidence.",
    "A Better Real Estate Experience Starts With the Right Team.",
  ],
};

export const companyStory = {
  history: [
    "Bear Team Real Estate is a Central Florida real estate company built on decades of hands-on experience helping buyers and sellers navigate one of the most dynamic housing markets in the country. [REVIEW: confirm founding details and company history with Bear Team]",
    "From established Orlando neighborhoods to growing master-planned communities, our team has guided clients through changing markets, changing rates, and changing neighborhoods — with the same steady process each time.",
  ],
  philosophy: [
    "We believe real estate guidance should be personal. National portals can show you photographs; they can't walk a property with you, read a contract addendum, or negotiate a repair credit.",
    "Our approach combines established real estate experience with modern technology — clear communication, honest pricing conversations, and a defined process from first consultation to closing.",
  ],
  commitments: [
    "Clear, proactive communication at every stage",
    "Honest pricing and market-position guidance",
    "Skilled representation in negotiation and contract terms",
    "Coordination through inspections, appraisal, financing, and closing",
    "Professional standards and Fair Housing compliance in every interaction",
  ],
};

export const buyerProcess: ProcessStep[] = [
  { title: "Initial consultation", description: "We talk through your goals, timeline, budget comfort, and what a successful move looks like for you." },
  { title: "Financing preparation", description: "We help you get organized for lender conversations so your offer carries weight when the right property appears." },
  { title: "Search strategy", description: "We define target areas, property types, and priorities — then keep the search focused and current." },
  { title: "Property tours", description: "We walk properties with you and point out what photographs don't show — condition, layout, surroundings, and resale considerations." },
  { title: "Property evaluation", description: "We compare each candidate against the market so you understand value before you write an offer." },
  { title: "Offer preparation", description: "Price, terms, timelines, and contingencies structured to protect you and compete effectively." },
  { title: "Negotiation", description: "Experienced representation through counters, escalations, and multiple-offer situations." },
  { title: "Inspections", description: "We coordinate inspections and help you evaluate findings and negotiate repairs or credits." },
  { title: "Appraisal & financing", description: "We track appraisal and loan milestones so surprises surface early, not at the closing table." },
  { title: "Closing", description: "Final walkthrough, document review coordination, and keys in hand." },
];

export const sellerProcess: ProcessStep[] = [
  { title: "Property consultation", description: "We walk your property and listen to your goals, timing, and constraints." },
  { title: "Market analysis", description: "A realistic view of your competition and what buyers are actually paying right now." },
  { title: "Pricing strategy", description: "A position designed to attract the strongest buyer pool — not just the highest number on paper." },
  { title: "Property preparation", description: "Practical, budget-aware recommendations on repairs, staging, and presentation." },
  { title: "Photography & marketing", description: "Professional presentation across the channels where Central Florida buyers are actually looking." },
  { title: "Showing management", description: "Organized scheduling that respects your household while maximizing qualified exposure." },
  { title: "Feedback & adjustment", description: "Showing feedback and market response reviewed with you, with adjustments made deliberately." },
  { title: "Offer evaluation", description: "Every offer weighed on price, financing strength, timelines, and risk — not price alone." },
  { title: "Negotiation", description: "Experienced negotiation on terms, repairs, appraisal gaps, and contingencies." },
  { title: "Contract-to-close coordination", description: "Inspections, title, lender milestones, and deadlines managed to keep your sale on track." },
  { title: "Closing", description: "A coordinated closing and a clean handoff to your next move." },
];
