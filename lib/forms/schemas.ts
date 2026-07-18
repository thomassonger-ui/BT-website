import { z } from "zod";

/**
 * Shared zod schemas — used for BOTH client-side validation (in the LeadForm
 * component) and server-side validation (in app/api route handlers).
 */

const name = z.string().trim().min(2, "Please enter your name.").max(120);
const email = z.string().trim().email("Please enter a valid email address.").max(200);
const phone = z
  .string()
  .trim()
  .min(7, "Please enter a valid phone number.")
  .max(30)
  .regex(/^[\d\s()+.\-]+$/, "Please enter a valid phone number.");
const contactMethod = z.enum(["Phone", "Email", "Text message"], {
  message: "Please choose a preferred contact method.",
});
const consent = z.literal(true, {
  message: "Please confirm you consent to be contacted.",
});
const comments = z.string().trim().max(3000).optional().or(z.literal(""));

/**
 * Honeypot — validation deliberately ACCEPTS any value here so bots receive a
 * normal success response; the server handler silently discards submissions
 * where it is non-empty (lib/forms/handle-lead.ts).
 */
const honeypot = z.string().max(500).optional().or(z.literal(""));

export const contactSchema = z.object({
  name,
  email,
  phone,
  inquiryType: z.enum(
    ["Buying", "Selling", "Property value", "Relocation", "General question", "Other"],
    { message: "Please choose an inquiry type." },
  ),
  message: z.string().trim().min(5, "Please enter a message.").max(3000),
  preferredContact: contactMethod,
  consent,
  company: honeypot,
});

export const buyerLeadSchema = z.object({
  name,
  email,
  phone,
  preferredArea: z.string().trim().min(2, "Please tell us your preferred area.").max(200),
  priceRange: z.string().trim().min(1, "Please choose a price range.").max(60),
  propertyType: z.string().trim().min(1, "Please choose a property type.").max(60),
  bedrooms: z.string().trim().min(1, "Please choose bedrooms.").max(10),
  bathrooms: z.string().trim().min(1, "Please choose bathrooms.").max(10),
  financingStatus: z.string().trim().min(1, "Please choose a financing status.").max(80),
  housingStatus: z.string().trim().min(1, "Please choose your current housing status.").max(80),
  timeframe: z.string().trim().min(1, "Please choose a timeframe.").max(60),
  mustHaves: comments,
  preferredContact: contactMethod,
  comments,
  consent,
  company: honeypot,
});

export const sellerLeadSchema = z.object({
  name,
  email,
  phone,
  address: z.string().trim().min(4, "Please enter the property address.").max(250),
  city: z.string().trim().min(2, "Please enter the city.").max(100),
  zip: z.string().trim().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code."),
  propertyType: z.string().trim().min(1, "Please choose a property type.").max(60),
  bedrooms: z.string().trim().min(1, "Please choose bedrooms.").max(10),
  bathrooms: z.string().trim().min(1, "Please choose bathrooms.").max(10),
  squareFootage: z.string().trim().min(1, "Please enter approximate square footage.").max(20),
  condition: z.string().trim().min(1, "Please choose the property condition.").max(60),
  occupancy: z.string().trim().min(1, "Please choose the occupancy status.").max(60),
  timeframe: z.string().trim().min(1, "Please choose a timeframe.").max(60),
  reason: comments,
  preferredContact: contactMethod,
  comments,
  consent,
  company: honeypot,
});

export const valuationSchema = z.object({
  name,
  email,
  phone,
  address: z.string().trim().min(4, "Please enter the property address.").max(250),
  city: z.string().trim().min(2, "Please enter the city.").max(100),
  zip: z.string().trim().regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code."),
  propertyType: z.string().trim().min(1, "Please choose a property type.").max(60),
  bedrooms: z.string().trim().min(1, "Please choose bedrooms.").max(10),
  bathrooms: z.string().trim().min(1, "Please choose bathrooms.").max(10),
  squareFootage: z.string().trim().min(1, "Please enter approximate square footage.").max(20),
  condition: z.string().trim().min(1, "Please choose the property condition.").max(60),
  timeframe: z.string().trim().min(1, "Please choose a timeframe.").max(60),
  comments,
  preferredContact: contactMethod,
  consent,
  company: honeypot,
});

export type ContactInput = z.infer<typeof contactSchema>;
export type BuyerLeadInput = z.infer<typeof buyerLeadSchema>;
export type SellerLeadInput = z.infer<typeof sellerLeadSchema>;
export type ValuationInput = z.infer<typeof valuationSchema>;

export const leadSchemas = {
  contact: contactSchema,
  "buyer-lead": buyerLeadSchema,
  "seller-lead": sellerLeadSchema,
  valuation: valuationSchema,
} as const;

export type LeadKind = keyof typeof leadSchemas;
