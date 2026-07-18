import { PathwayCards, type Pathway } from "@/components/search/PathwayCards";

/**
 * Three Kinds of Moves — relocation pathway cards with photos, hover, and
 * pop-up modals (value bullets + tailored micro-forms). Submissions flow
 * through /api/contact with inquiryType "Relocation", arriving in Premier
 * Leads as "Website — Relocation Lead" with a move-specific prefix.
 */

const TIMEFRAMES = ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just exploring"];

const RELOCATION_PATHWAYS: Pathway[] = [
  {
    id: "arriving",
    img: "/images/relocation/arriving.jpg",
    alt: "Single-story coastal white Florida home with tropical landscaping",
    title: "Moving to Central Florida",
    text: "Community orientation, remote-friendly touring, and local guidance before you commit.",
    ctaLabel: "I'm Moving Here",
    mode: "form",
    primary: true,
    inquiryType: "Relocation",
    value: [
      "Community orientation before you commit — factual comparisons of housing character, amenities, and commutes",
      "Remote-friendly: video tours, detailed condition reporting, and honest answers before you ever fly in",
      "Local guidance from a team that knows the difference a few miles makes here",
    ],
    fields: [
      {
        key: "Moving from",
        label: "Where are you moving from?",
        type: "text",
        required: true,
        placeholder: "City, State",
      },
      {
        key: "Timeframe",
        label: "When do you plan to make the move?",
        type: "select",
        options: TIMEFRAMES,
        required: true,
      },
    ],
    leadPrefix: "Relocation — moving to Central Florida",
    submitLabel: "Start My Relocation Plan",
  },
  {
    id: "leaving",
    img: "/images/relocation/leaving.jpg",
    alt: "Modern farmhouse-style home with white siding and paver driveway",
    title: "Leaving Central Florida",
    text: "Sell here on a coordinated timeline with trusted representation waiting at your destination.",
    ctaLabel: "I'm Moving Away",
    mode: "form",
    inquiryType: "Relocation",
    value: [
      "Your sale here managed on a coordinated timeline — even after you have already left town",
      "Introductions to trusted representation in your destination market",
      "One accountable team keeping the sale, the move, and the dates aligned",
    ],
    fields: [
      {
        key: "Destination",
        label: "Where are you headed?",
        type: "text",
        required: true,
        placeholder: "City, State",
      },
      {
        key: "Selling here",
        label: "Do you have a property to sell here?",
        type: "select",
        options: ["Yes — sell before I move", "Yes — sell after I move", "No", "Not sure yet"],
        required: true,
      },
    ],
    leadPrefix: "Relocation — leaving Central Florida",
    submitLabel: "Coordinate My Move",
  },
  {
    id: "within",
    img: "/images/relocation/within.jpg",
    alt: "Mediterranean-style Florida home with tile roof and circular paver driveway",
    title: "Moving Within the Area",
    text: "We sequence the sale and the purchase so the timelines protect you, not stress you.",
    ctaLabel: "I'm Moving Locally",
    mode: "form",
    inquiryType: "Relocation",
    value: [
      "Sale and purchase sequenced so you are never stuck between homes or double-paying longer than planned",
      "Timelines, contingencies, and financing coordinated across both transactions by one team",
      "40+ years of Central Florida knowledge on both sides of your move",
    ],
    fields: [
      {
        key: "Sequence",
        label: "How do you see it playing out?",
        type: "select",
        options: ["Sell first, then buy", "Buy first, then sell", "Not sure — I need advice"],
        required: true,
      },
      {
        key: "Timeframe",
        label: "When would you like to move?",
        type: "select",
        options: TIMEFRAMES,
        required: true,
      },
    ],
    leadPrefix: "Relocation — moving within Central Florida",
    submitLabel: "Plan Both Moves",
  },
];

export function RelocationPathwayCards() {
  return <PathwayCards pathways={RELOCATION_PATHWAYS} />;
}
