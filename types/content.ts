/** Shared content types. All editable content lives in /content as typed data. */

export type ReviewFlag = {
  /** Present on any content that must be verified/approved before launch. */
  reviewNote?: string;
};

export type ProofPoint = ReviewFlag & {
  id: string;
  value: string;
  label: string;
  detail: string;
};

export type PropertyTypeCard = ReviewFlag & {
  id: string;
  name: string;
  description: string;
  buyerConsiderations: string[];
  /** Path under /public/images — replaced with approved photography. */
  image: string;
  imageAlt: string;
  showSearchLink?: boolean;
};

export type Community = ReviewFlag & {
  slug: string;
  name: string;
  intro: string;
  lifestyle: string;
  locationContext: string;
  housingOverview: string;
  propertyTypes: string[];
  buyerConsiderations: string[];
  sellerConsiderations: string[];
  amenities: string[];
  transportation: string[];
  image: string;
  imageAlt: string;
  related: string[];
};

export type TeamMember = ReviewFlag & {
  slug: string;
  name: string;
  title: string;
  bio: string;
  experience?: string;
  areasServed: string[];
  specialties: string[];
  languages: string[];
  license?: string;
  phone?: string;
  email?: string;
  headshot: string;
  verified: boolean;
};

export type ResourceSection = { heading: string; body: string[] };

export type Resource = ReviewFlag & {
  slug: string;
  title: string;
  category:
    | "Buying"
    | "Selling"
    | "Financing"
    | "Inspections"
    | "Appraisals"
    | "Closing"
    | "Relocation"
    | "New Construction"
    | "Investment"
    | "Community";
  summary: string;
  author: string;
  reviewDate: string;
  sections: ResourceSection[];
  /** Requires review by the named licensed professional before launch. */
  professionalReview?: string;
  related: string[];
};

export type Testimonial = ReviewFlag & {
  id: string;
  clientName: string;
  clientType: string;
  text: string;
  source: string;
  date: string;
  propertyType?: string;
  photo?: string;
  /** Only verified: true testimonials may be shown in production. */
  verified: boolean;
};

export type Faq = { question: string; answer: string };

export type ProcessStep = { title: string; description: string };
