import type { Testimonial } from "@/types/content";

/**
 * TESTIMONIALS — PLACEHOLDERS ONLY.
 * Every entry below is clearly labeled and has verified: false.
 * The Testimonials section renders unverified entries with a visible
 * "placeholder" label, and they must be replaced with approved, verified
 * client reviews (with source and date) before launch. DO NOT fabricate
 * reviews. See COMPLIANCE_REVIEW.md.
 */
export const testimonials: Testimonial[] = [
  {
    id: "placeholder-1",
    clientName: "[VERIFY CLIENT NAME]",
    clientType: "Home Seller",
    text: "[PLACEHOLDER — replace with an approved, verified client review. Do not launch with this text.]",
    source: "[VERIFY REVIEW SOURCE]",
    date: "[VERIFY DATE]",
    propertyType: "Single-family home",
    verified: false,
    reviewNote: "Replace with verified review before launch.",
  },
  {
    id: "placeholder-2",
    clientName: "[VERIFY CLIENT NAME]",
    clientType: "First-Time Buyer",
    text: "[PLACEHOLDER — replace with an approved, verified client review. Do not launch with this text.]",
    source: "[VERIFY REVIEW SOURCE]",
    date: "[VERIFY DATE]",
    verified: false,
    reviewNote: "Replace with verified review before launch.",
  },
  {
    id: "placeholder-3",
    clientName: "[VERIFY CLIENT NAME]",
    clientType: "Relocation Client",
    text: "[PLACEHOLDER — replace with an approved, verified client review. Do not launch with this text.]",
    source: "[VERIFY REVIEW SOURCE]",
    date: "[VERIFY DATE]",
    verified: false,
    reviewNote: "Replace with verified review before launch.",
  },
];
