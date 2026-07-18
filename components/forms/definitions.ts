/**
 * Field definitions for every lead form. Plain serializable data so server
 * pages can pass them to the LeadForm client component.
 * Option lists are intentionally value-neutral (no invented market data).
 */

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  options?: string[];
  required?: boolean;
  autoComplete?: string;
  half?: boolean;
  hint?: string;
};

const contactMethodField: FieldConfig = {
  name: "preferredContact",
  label: "Preferred contact method",
  type: "select",
  options: ["Phone", "Email", "Text message"],
  required: true,
  half: true,
};

const nameEmailPhone: FieldConfig[] = [
  { name: "name", label: "Name", type: "text", required: true, autoComplete: "name" },
  { name: "email", label: "Email", type: "email", required: true, autoComplete: "email", half: true },
  { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel", half: true },
];

const propertyBasics: FieldConfig[] = [
  { name: "address", label: "Property address", type: "text", required: true, autoComplete: "street-address" },
  { name: "city", label: "City", type: "text", required: true, autoComplete: "address-level2", half: true },
  { name: "zip", label: "ZIP code", type: "text", required: true, autoComplete: "postal-code", half: true },
  {
    name: "propertyType",
    label: "Property type",
    type: "select",
    options: ["Single-family home", "Condominium", "Townhome", "New construction", "Luxury property", "Investment property", "Land / acreage", "Other"],
    required: true,
    half: true,
  },
  { name: "bedrooms", label: "Bedrooms", type: "select", options: ["1", "2", "3", "4", "5", "6+"], required: true, half: true },
  { name: "bathrooms", label: "Bathrooms", type: "select", options: ["1", "1.5", "2", "2.5", "3", "3.5", "4+"], required: true, half: true },
  { name: "squareFootage", label: "Approximate square footage", type: "text", required: true, half: true },
  {
    name: "condition",
    label: "Property condition",
    type: "select",
    options: ["Move-in ready", "Lightly updated", "Original / dated", "Needs significant work"],
    required: true,
    half: true,
  },
];

export const valuationFields: FieldConfig[] = [
  ...nameEmailPhone,
  ...propertyBasics,
  {
    name: "timeframe",
    label: "Selling timeframe",
    type: "select",
    options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just researching"],
    required: true,
    half: true,
  },
  { name: "comments", label: "Additional comments", type: "textarea" },
  contactMethodField,
];

export const sellerFields: FieldConfig[] = [
  ...nameEmailPhone,
  ...propertyBasics,
  {
    name: "occupancy",
    label: "Occupancy status",
    type: "select",
    options: ["Owner-occupied", "Tenant-occupied", "Vacant", "Second home"],
    required: true,
    half: true,
  },
  {
    name: "timeframe",
    label: "Desired selling timeframe",
    type: "select",
    options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just researching"],
    required: true,
    half: true,
  },
  { name: "reason", label: "Reason for selling (optional)", type: "textarea" },
  { name: "comments", label: "Additional comments", type: "textarea" },
  contactMethodField,
];

export const buyerFields: FieldConfig[] = [
  ...nameEmailPhone,
  { name: "preferredArea", label: "Preferred area or community", type: "text", required: true, half: true },
  {
    name: "priceRange",
    label: "Price range",
    type: "select",
    options: ["Under $300k", "$300k–$450k", "$450k–$650k", "$650k–$1M", "$1M+", "Not sure yet"],
    required: true,
    half: true,
  },
  {
    name: "propertyType",
    label: "Property type",
    type: "select",
    options: ["Single-family home", "Condominium", "Townhome", "New construction", "Luxury property", "Investment property", "Land / acreage", "Not sure yet"],
    required: true,
    half: true,
  },
  { name: "bedrooms", label: "Bedrooms", type: "select", options: ["1", "2", "3", "4", "5", "6+", "Flexible"], required: true, half: true },
  { name: "bathrooms", label: "Bathrooms", type: "select", options: ["1", "1.5", "2", "2.5", "3", "3.5", "4+", "Flexible"], required: true, half: true },
  {
    name: "financingStatus",
    label: "Financing status",
    type: "select",
    options: ["Pre-approved", "Working with a lender", "Paying cash", "Haven't started yet"],
    required: true,
    half: true,
  },
  {
    name: "housingStatus",
    label: "Current housing status",
    type: "select",
    options: ["Renting", "Own — will sell first", "Own — will keep", "Living with family", "Relocating to the area"],
    required: true,
    half: true,
  },
  {
    name: "timeframe",
    label: "Buying timeframe",
    type: "select",
    options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just researching"],
    required: true,
    half: true,
  },
  { name: "mustHaves", label: "Must-have features (optional)", type: "textarea" },
  { name: "comments", label: "Additional comments", type: "textarea" },
  contactMethodField,
];

export const contactFields: FieldConfig[] = [
  ...nameEmailPhone,
  {
    name: "inquiryType",
    label: "Inquiry type",
    type: "select",
    options: ["Buying", "Selling", "Property value", "Relocation", "General question", "Other"],
    required: true,
    half: true,
  },
  { name: "message", label: "Message", type: "textarea", required: true },
  contactMethodField,
];
