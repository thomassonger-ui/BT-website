import type { Resource } from "@/types/content";

/**
 * RESOURCE CENTER content.
 * Educational only — never regulated financial, legal, tax, insurance,
 * inspection, appraisal, or mortgage advice. Entries with professionalReview
 * must be reviewed by the named licensed professional before launch.
 * The site-wide resource disclaimer (config/compliance.ts) renders on every
 * resource page.
 */
export const resources: Resource[] = [
  {
    slug: "buyer-guide",
    title: "Central Florida Buyer Guide",
    category: "Buying",
    summary: "The full path from first conversation to keys in hand — what to expect at each stage of a Central Florida purchase.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "Start with clarity, not listings", body: ["The strongest purchases start before the first showing: goals, timeline, budget comfort, and financing preparation. When those are set, the search itself gets faster and calmer.", "Your initial consultation covers how representation works, how compensation works, and how we'll communicate — in plain language, in writing."] },
      { heading: "The search", body: ["Property search happens through an approved external search platform, guided by a strategy we build together: target areas, property types, and the trade-offs you're willing to make.", "We preview considerations photographs can't show — road noise, lot orientation, renovation quality, resale factors."] },
      { heading: "Offer to closing", body: ["Offer structure, negotiation, inspections, appraisal, financing milestones, and closing coordination — each stage has decisions, and each decision benefits from experienced context.", "Our job is to keep you informed and protected from contract to keys."] },
    ],
    related: ["financing-preparation", "home-inspection-overview", "understanding-offers"],
  },
  {
    slug: "seller-guide",
    title: "Central Florida Seller Guide",
    category: "Selling",
    summary: "How pricing, preparation, marketing, and negotiation come together to sell a Central Florida property well.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "Market position comes first", body: ["Every property competes with specific alternatives buyers are seeing the same week. Understanding that competition — honestly — is the foundation of pricing strategy.", "A property-value consultation looks at condition, location, improvements, competition, and buyer demand. It is not an appraisal."] },
      { heading: "Preparation and presentation", body: ["Not every improvement returns its cost. We help you separate the work buyers will pay for from the work they won't notice.", "Professional photography and thoughtful presentation are standard, not upgrades."] },
      { heading: "Offers, negotiation, and closing", body: ["Offers are weighed on financing strength, timelines, and risk — not price alone.", "From executed contract to closing, deadlines and milestones are managed so your sale stays on track."] },
    ],
    related: ["preparing-home-for-sale", "understanding-offers", "closing-cost-overview"],
  },
  {
    slug: "financing-preparation",
    title: "Preparing for Financing",
    category: "Financing",
    summary: "How to get organized before you talk to lenders — documents, questions, and timing.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    professionalReview: "Licensed mortgage professional review required before launch.",
    sections: [
      { heading: "Why preparation matters", body: ["Sellers weigh financing strength alongside price. Being organized before you shop strengthens every offer you write.", "We are not lenders and do not provide mortgage advice. Financing decisions belong with licensed mortgage professionals — this overview only helps you prepare for those conversations."] },
      { heading: "What lenders typically discuss", body: ["Income documentation, assets, credit, and monthly-payment comfort are the usual starting points.", "Ask lenders about rate types, loan programs, estimated closing costs, and timing — and compare more than one conversation."] },
    ],
    related: ["buyer-guide", "closing-cost-overview", "appraisal-overview"],
  },
  {
    slug: "moving-checklist",
    title: "Moving Checklist",
    category: "Relocation",
    summary: "A stage-by-stage checklist from six weeks out through move-in day.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "Six weeks out", body: ["Collect quotes from movers or reserve equipment, begin sorting and donating, and start a folder for records that will move with you."] },
      { heading: "Two to four weeks out", body: ["Schedule utility transfers (power, water, internet), file mail forwarding, update addresses with banks and insurers, and confirm closing or lease dates."] },
      { heading: "Move week", body: ["Pack an essentials box, photograph valuables, confirm elevator or HOA move rules, and do a final walkthrough with utilities on."] },
    ],
    related: ["relocation-guide", "buyer-guide"],
  },
  {
    slug: "home-inspection-overview",
    title: "Home Inspection Overview",
    category: "Inspections",
    summary: "What inspections cover in Florida, how findings are used, and what they can't tell you.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    professionalReview: "Licensed home inspector review required before launch.",
    sections: [
      { heading: "What an inspection is", body: ["A general home inspection is a visual assessment of a property's condition by a licensed inspector — systems, structure, roof, and more.", "In Florida, wind-mitigation and four-point inspections also commonly affect insurance conversations."] },
      { heading: "Using the findings", body: ["Inspection results inform decisions: proceed, negotiate repairs or credits, or walk away within your contract's terms.", "No inspection sees everything. Specialty inspections (pool, septic, WDO) exist for a reason."] },
    ],
    related: ["buyer-guide", "appraisal-overview", "new-construction-considerations"],
  },
  {
    slug: "appraisal-overview",
    title: "Appraisal Overview",
    category: "Appraisals",
    summary: "What an appraisal is, who performs it, and how it interacts with financing.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    professionalReview: "Licensed appraiser review required before launch.",
    sections: [
      { heading: "The basics", body: ["An appraisal is an opinion of value prepared by a licensed appraiser, typically ordered by the lender in a financed purchase.", "It differs from a real estate licensee's price opinion or a property-value consultation — only a licensed appraiser performs an appraisal."] },
      { heading: "When value and contract differ", body: ["When an appraisal comes in below contract price, options may include renegotiation, additional buyer funds, or contract remedies — each situation is specific and worth careful discussion."] },
    ],
    related: ["financing-preparation", "home-inspection-overview", "understanding-offers"],
  },
  {
    slug: "closing-cost-overview",
    title: "Closing-Cost Overview",
    category: "Closing",
    summary: "The categories of costs buyers and sellers typically see at a Florida closing.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    professionalReview: "Title / closing professional review required before launch.",
    sections: [
      { heading: "Buyer-side categories", body: ["Lender fees, prepaid taxes and insurance, title-related charges, and recording costs are the usual categories. Exact amounts come from your lender's official estimates and the closing agent — not from a website."] },
      { heading: "Seller-side categories", body: ["Typical categories include title-related charges, documentary stamp taxes, prorations, payoff amounts, and agreed-upon commissions or credits. Your net-proceeds picture should come from a closing professional's figures."] },
    ],
    related: ["seller-guide", "financing-preparation", "understanding-offers"],
  },
  {
    slug: "relocation-guide",
    title: "Relocating to Central Florida",
    category: "Relocation",
    summary: "A practical orientation for moves into, out of, or within the Orlando area.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "Get oriented before you commit", body: ["Central Florida is a collection of distinct communities, not one market. Commutes, property types, and price points shift meaningfully within a few miles.", "Our Communities pages are built for exactly this comparison — architecture, amenities, transportation, and housing character, described factually."] },
      { heading: "Buying from a distance", body: ["Video tours, detailed condition reporting, and coordinated timelines make remote decisions manageable.", "If you're selling elsewhere while buying here, sequencing the two contracts is half the work — we coordinate both sides' timelines."] },
    ],
    related: ["moving-checklist", "central-florida-community-guide", "buyer-guide"],
  },
  {
    slug: "preparing-home-for-sale",
    title: "Preparing a Home for Sale",
    category: "Selling",
    summary: "Which preparation actually moves the needle — and which doesn't.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "Start with a walkthrough, not a contractor", body: ["Before spending anything, walk the property with us. Buyers pay for condition they can see and systems they trust; they rarely pay extra for improvements they'd redo anyway."] },
      { heading: "The usual high-value work", body: ["Deep cleaning, decluttering, paint where it's tired, lighting, curb appeal, and addressing obvious deferred maintenance typically outperform larger renovations dollar-for-dollar.", "Pre-listing inspections can make sense for some properties — it's a strategy conversation."] },
    ],
    related: ["seller-guide", "home-inspection-overview"],
  },
  {
    slug: "understanding-offers",
    title: "Understanding Offers",
    category: "Selling",
    summary: "Price is one term among many — how buyers and sellers should read an offer.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "The anatomy of an offer", body: ["Price, financing type, deposit, contingencies, timelines, and requested concessions all carry weight. A clean lower offer can outperform a fragile higher one.", "Contract forms and terms are specific legal documents — questions about legal effect belong with a Florida real estate attorney."] },
      { heading: "Multiple offers and negotiation", body: ["Multiple-offer situations reward preparation and clear priorities on both sides of the table. Strategy differs for buyers and sellers, and we represent each accordingly."] },
    ],
    related: ["buyer-guide", "seller-guide", "closing-cost-overview"],
  },
  {
    slug: "central-florida-community-guide",
    title: "Central Florida Community Guide",
    category: "Community",
    summary: "How to compare Orlando-area communities on the factors that actually differ.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "Compare on structure, not slogans", body: ["Housing age and style, lot characteristics, association structures, commute corridors, and amenity access are the concrete differences between Central Florida communities.", "Our community pages describe those factors factually for Orlando, Winter Park, Lake Nona, Conway, College Park, Dr. Phillips, Windermere, MetroWest, and Pine Hills."] },
    ],
    related: ["relocation-guide", "buyer-guide"],
  },
  {
    slug: "new-construction-considerations",
    title: "New-Construction Considerations",
    category: "New Construction",
    summary: "How buying new differs from buying resale — contracts, inspections, and representation.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    sections: [
      { heading: "The builder's contract is not the state resale contract", body: ["Builder purchase agreements are written by the builder. Deposits, timelines, changes, and remedies work differently — read carefully and ask questions before signing. Legal questions belong with an attorney.", "The on-site sales team works for the builder. Independent representation costs you nothing extra in most builder arrangements and gives you an advocate."] },
      { heading: "Inspections still matter", body: ["New homes benefit from independent inspections at key construction phases and before warranty expiration."] },
    ],
    related: ["buyer-guide", "home-inspection-overview"],
  },
  {
    slug: "investment-property-basics",
    title: "Investment-Property Basics",
    category: "Investment",
    summary: "A grounded starting framework for evaluating Central Florida rental property.",
    author: "Bear Team Real Estate",
    reviewDate: "July 2026",
    professionalReview: "Tax professional / attorney review recommended before launch.",
    sections: [
      { heading: "Run the numbers before the tour", body: ["Realistic rent, vacancy, insurance, taxes, maintenance, association fees, and management costs decide whether a property performs — not the listing photos.", "Tax treatment and entity questions belong with your tax professional and attorney; we focus on the real estate."] },
      { heading: "Location rules still apply", body: ["Rental regulations, zoning, and association rental caps vary across Central Florida jurisdictions and communities. Verify before you buy — we help with that diligence."] },
    ],
    related: ["buyer-guide", "central-florida-community-guide"],
  },
];

export const resourceCategories = [
  "Buying",
  "Selling",
  "Financing",
  "Inspections",
  "Appraisals",
  "Closing",
  "Relocation",
  "New Construction",
  "Investment",
  "Community",
] as const;

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
