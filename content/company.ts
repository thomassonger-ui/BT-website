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
    "Bear Team Real Estate LLC is a boutique Orlando brokerage founded and led by Bethanne Baer, Broker/Owner — built on more than four decades of hands-on Central Florida experience, over 7,000 homes sold, and more than $4 billion in career volume.",
    "From our office at 2300 S Crystal Lake Dr, the team has served generations of families across the Conway, Edgewood, and Belle Isle corridor and greater Orlando — through changing markets, changing rates, and changing neighborhoods, with the same steady process each time.",
  ],
  philosophy: [
    "A home is not a home because of its room dimensions or the color of the walls. It is about how you feel when you walk through the front door — and the way you can instantly envision your life unfolding there. This is about more than real estate: it is about your life and your dreams.",
    "We are different by design. Bear Team takes a different approach to real estate — one built on personal service to each customer, win-win deals, and positive results. We use current technology, market research, and business strategy to exceed your expectations. More importantly, we listen — and that means solutions tailored to you.",
  ],
  commitments: [
    "Clear, proactive communication at every stage",
    "Honest pricing and market-position guidance",
    "Skilled representation in negotiation and contract terms",
    "Coordination through inspections, appraisal, financing, and closing",
    "Help navigating down payment assistance, bond money, and renovation financing programs",
    "Experienced guidance through difficult situations, including short sales",
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
