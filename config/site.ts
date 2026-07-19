/**
 * VERIFIED BUSINESS INFORMATION — single source of truth.
 *
 * Every value wrapped in [VERIFY ...] is a placeholder. Replace only with
 * information verified by Bear Team Real Estate LLC. See COMPLIANCE_REVIEW.md.
 * Nothing in this file is invented; placeholders remain visibly unverified
 * until replaced.
 */

export const siteConfig = {
  /** Public marketing name */
  name: "Bear Team Real Estate",
  legalName: "Bear Team Real Estate LLC",
  tagline: "Experience, Local Knowledge, and a Clear Path Home.",
  description:
    "Bear Team Real Estate is a Central Florida real estate company helping buyers, sellers, homeowners, investors, and relocation clients move forward with experienced, local guidance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bearteam.com",

  /** REVIEW: sourced from public listings — confirm against Florida DBPR before launch */
  brokerageLicense: "FL BK553431",
  brokerName: "Bethanne Baer",

  address: {
    street: "2300 S Crystal Lake Dr",
    city: "Orlando",
    state: "FL",
    zip: "32806",
  },

  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "(407) 228-1112",
  email: process.env.NEXT_PUBLIC_GENERAL_EMAIL || "Bethanne@BearTeam.com",
  officeHours: "Monday–Friday, 9 AM–5 PM",

  /** Contacts required by the accessibility & compliance pages */
  accessibilityContact: "Tom@BearTeam.com",
  complaintContact: "Bethanne Baer, Broker — (407) 228-1112, Bethanne@BearTeam.com",
  privacyContact: "Bethanne@BearTeam.com",

  serviceAreas: [
    "Orlando",
    "Winter Park",
    "Lake Nona",
    "Conway",
    "Edgewood",
    "Belle Isle",
    "College Park",
    "Dr. Phillips",
    "Windermere",
    "MetroWest",
    "Pine Hills",
    "Greater Central Florida",
  ],

  /** Specialty corridor — Bear Team's home turf for 40+ years. */
  specialtyAreas: ["Conway", "Edgewood", "Belle Isle"],
} as const;

export type SiteConfig = typeof siteConfig;

/** True when a value is still an unverified placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.includes("[VERIFY") || value.includes("[INSERT");
}
