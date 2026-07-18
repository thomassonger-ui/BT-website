import { PathwayCards, type Pathway } from "@/components/search/PathwayCards";

/**
 * Six Ways Out — the seller-side mirror of the buyer pathway cards.
 * Each of the six seller pillars opens a modal that pitches how Bear Team
 * handles that stage differently, then captures a tailored micro-lead.
 * Submissions flow through /api/contact → website-lead → premier_leads,
 * marked "Website — Seller Lead" (pricing card sends "Property value" so it
 * arrives as "Website — Home Value Lead"). The final card hands straight to
 * Bethanne's 30-minute booking calendar.
 */
const SELLER_PATHWAYS: Pathway[] = [
  {
    id: "pricing",
    img: "/images/rooms/01-exterior-1.jpg",
    alt: "Front exterior of a Florida home with palm trees and manicured landscaping",
    title: "Pricing Strategy",
    text: "Position your property against its real competition — not wishful comparables.",
    ctaLabel: "Price My Property",
    mode: "form",
    primary: true,
    inquiryType: "Property value",
    value: [
      "Priced against the homes your buyers are touring this same week — not stale comparables",
      "40+ years reading Central Florida values, deepest in the Conway · Edgewood · Belle Isle corridor",
      "A written pricing rationale you can question — never a flattering number picked to win your listing",
    ],
    fields: [
      {
        key: "Property address",
        label: "Property address",
        type: "text",
        required: true,
        placeholder: "123 Main St, Orlando",
      },
      {
        key: "Timeframe",
        label: "When are you thinking of selling?",
        type: "select",
        options: ["Ready now", "1–3 months", "3–6 months", "6–12 months", "Just researching"],
        required: true,
      },
    ],
    leadPrefix: "Pricing strategy request",
    submitLabel: "Get My Pricing Strategy",
  },
  {
    id: "preparation",
    img: "/images/rooms/04-living-2.jpg",
    alt: "Bright open living area of a staged Florida home",
    title: "Property Preparation",
    text: "Spend where buyers pay — skip what they will never notice.",
    ctaLabel: "Plan My Prep",
    mode: "form",
    inquiryType: "Selling",
    value: [
      "We separate what buyers pay for from what they never notice — no blanket renovation lists",
      "A budget-aware plan built around your dollars and your timeline, including selling as-is",
      "Trusted local vendors when work is worth doing — coordinated so you are not chasing contractors",
    ],
    fields: [
      {
        key: "Biggest prep question",
        label: "What's your biggest preparation question?",
        type: "select",
        options: [
          "What to fix vs. what to skip",
          "Staging and presentation",
          "Budgeting for repairs",
          "Selling as-is",
          "Not sure — walk me through it",
        ],
        required: true,
      },
      {
        key: "Timeframe",
        label: "When are you thinking of selling?",
        type: "select",
        options: ["Ready now", "1–3 months", "3–6 months", "6–12 months", "Just researching"],
        required: true,
      },
    ],
    leadPrefix: "Pre-listing prep plan",
    submitLabel: "Build My Prep Plan",
  },
  {
    id: "marketing",
    img: "/images/rooms/07-kitchen-1.jpg",
    alt: "Professionally photographed kitchen with a large stone island",
    title: "Marketing & Photography",
    text: "Professional presentation where Central Florida buyers actually look.",
    ctaLabel: "See the Marketing",
    mode: "form",
    inquiryType: "Selling",
    value: [
      "Professional photography on every listing — your home never debuts with phone snapshots",
      "Presented across the channels Central Florida buyers actually use, positioned to stand out",
      "Your home is the product being marketed — not bait for selling buyer leads to other agents",
    ],
    fields: [
      {
        key: "Property address or area",
        label: "Property address or neighborhood",
        type: "text",
        required: true,
        placeholder: "123 Main St, Orlando — or just the neighborhood",
      },
      {
        key: "What makes it special",
        label: "What makes your property special? (optional)",
        type: "textarea",
      },
    ],
    leadPrefix: "Marketing plan request",
    submitLabel: "Request My Marketing Plan",
  },
  {
    id: "showings",
    img: "/images/rooms/02-entry-1.jpg",
    alt: "Covered front entry of a Florida home with glass doors",
    title: "Showing Management",
    text: "Qualified exposure that respects your household.",
    ctaLabel: "Manage My Showings",
    mode: "form",
    inquiryType: "Selling",
    value: [
      "Organized scheduling around your household's rules — you approve the windows, we handle the rest",
      "Showing feedback collected and actually reported back to you, not lost in an agent's inbox",
      "Qualified, screened buyers prioritized over open-door foot traffic",
    ],
    fields: [
      {
        key: "Occupancy",
        label: "Who's living in the home?",
        type: "select",
        options: ["We live in the home", "Tenant-occupied", "Vacant", "Second home / we're out of state"],
        required: true,
      },
      {
        key: "Concerns",
        label: "Any showing concerns — pets, schedules, privacy? (optional)",
        type: "textarea",
      },
    ],
    leadPrefix: "Showing plan request",
    submitLabel: "Build My Showing Plan",
  },
  {
    id: "offers",
    img: "/images/rooms/06-dining-1.jpg",
    alt: "Formal dining room with a long table and upholstered chairs",
    title: "Offer Evaluation & Negotiation",
    text: "Offers weighed on strength and risk — then negotiated on every term.",
    ctaLabel: "Talk Offers",
    mode: "form",
    inquiryType: "Selling",
    value: [
      "Offers weighed on financing strength, timeline, and risk of falling through — not just the headline price",
      "Negotiated by an experienced broker on terms, repairs, appraisal gaps, and contingencies",
      "Already holding an offer — even selling on your own? We will review it with you before you sign",
    ],
    fields: [
      {
        key: "Offer status",
        label: "Where are you with offers?",
        type: "select",
        options: [
          "I have an offer in hand",
          "Expecting offers soon",
          "Selling on my own and want a second opinion",
          "Planning ahead",
        ],
        required: true,
      },
    ],
    leadPrefix: "Offer review request",
    submitLabel: "Review My Options",
  },
  {
    id: "closing",
    img: "/images/rooms/09-pool-1.jpg",
    alt: "Backyard pool and covered lanai of a Florida home",
    title: "Contract-to-Close Coordination",
    text: "Talk it through with the broker — from signed contract to closing table.",
    ctaLabel: "Book 30 Minutes",
    mode: "booking",
    value: [
      "Free 30 minutes with Bethanne Baer — Broker/Owner, 40+ years in Central Florida",
      "Inspections, title, lender milestones, and deadlines tracked deliberately so nothing slips",
      "One accountable local team from signed contract to closing day — no obligation, no pressure",
    ],
  },
];

export function SellerPathwayCards() {
  return <PathwayCards pathways={SELLER_PATHWAYS} scoutTargetId="seller-inquiry" />;
}
