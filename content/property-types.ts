import type { PropertyTypeCard } from "@/types/content";

/**
 * Editorial property-type content — NOT live listings. No prices, MLS numbers,
 * statuses, addresses, or days-on-market may ever be added here.
 * Images are placeholders; replace with approved photography (CONTENT_GUIDE.md).
 */
export const propertyTypes: PropertyTypeCard[] = [
  {
    id: "single-family",
    name: "Single-Family Homes",
    description:
      "From established Orlando neighborhoods to newer suburban communities, single-family homes remain the backbone of the Central Florida market.",
    buyerConsiderations: [
      "Lot size, orientation, and outdoor living space",
      "Roof, HVAC, and insurance considerations in Florida",
      "HOA versus non-HOA neighborhoods",
    ],
    image: "/images/placeholder-single-family.svg",
    imageAlt: "Single-family home placeholder image",
    showSearchLink: true,
  },
  {
    id: "condominiums",
    name: "Condominiums",
    description:
      "Low-maintenance living near downtown cores, entertainment districts, and resort corridors.",
    buyerConsiderations: [
      "Association budgets, reserves, and milestone inspections",
      "Financing requirements specific to condominiums",
      "Rental restrictions and use policies",
    ],
    image: "/images/placeholder-condo.svg",
    imageAlt: "Condominium building placeholder image",
    showSearchLink: true,
  },
  {
    id: "townhomes",
    name: "Townhomes",
    description:
      "A practical middle ground — more space than most condominiums with less exterior upkeep than a detached home.",
    buyerConsiderations: [
      "What the association maintains versus the owner",
      "Shared-wall construction and layout",
      "Guest parking and community rules",
    ],
    image: "/images/placeholder-townhome.svg",
    imageAlt: "Townhome row placeholder image",
  },
  {
    id: "new-construction",
    name: "New Construction",
    description:
      "Central Florida remains one of the most active new-construction regions in the country, from townhome communities to custom builds.",
    buyerConsiderations: [
      "Builder contracts differ significantly from resale contracts",
      "Independent representation and inspections still matter",
      "Incentives, upgrades, and completion timelines",
    ],
    image: "/images/placeholder-new-construction.svg",
    imageAlt: "New construction placeholder image",
  },
  {
    id: "luxury",
    name: "Luxury Properties",
    description:
      "Lakefront estates, golf communities, and architecturally distinct homes across Central Florida's premier corridors.",
    buyerConsiderations: [
      "Discreet marketing and qualified-buyer screening",
      "Specialty inspections (pool, dock, systems)",
      "Financing and appraisal at higher price points",
    ],
    image: "/images/placeholder-luxury.svg",
    imageAlt: "Luxury property placeholder image",
    showSearchLink: true,
  },
  {
    id: "investment",
    name: "Investment Properties",
    description:
      "Long-term rentals, small multifamily, and value-add opportunities in one of the nation's strongest rental demand regions.",
    buyerConsiderations: [
      "Realistic rent and expense analysis before you buy",
      "Local rental regulations and zoning",
      "Property management logistics",
    ],
    image: "/images/placeholder-investment.svg",
    imageAlt: "Investment property placeholder image",
  },
  {
    id: "land",
    name: "Land & Acreage",
    description:
      "Buildable lots, rural acreage, and infill parcels — opportunities that require careful due diligence.",
    buyerConsiderations: [
      "Zoning, wetlands, and utility availability",
      "Survey and soil considerations",
      "Access, easements, and future-use restrictions",
    ],
    image: "/images/placeholder-land.svg",
    imageAlt: "Land and acreage placeholder image",
  },
  {
    id: "relocation",
    name: "Relocation Opportunities",
    description:
      "Moving to Central Florida — or between its communities — with guidance that starts before you arrive.",
    buyerConsiderations: [
      "Remote touring and decision support",
      "Community comparison across commute and lifestyle needs",
      "Coordinated timelines for selling and buying",
    ],
    image: "/images/placeholder-relocation.svg",
    imageAlt: "Relocation placeholder image",
  },
];
