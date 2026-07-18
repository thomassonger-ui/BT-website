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
  /** REVIEW: confirm exact registered legal entity name before launch */
  legalName: "Bear Team Real Estate LLC [VERIFY LEGAL ENTITY NAME]",
  tagline: "Experience, Local Knowledge, and a Clear Path Home.",
  description:
    "Bear Team Real Estate is a Central Florida real estate company helping buyers, sellers, homeowners, investors, and relocation clients move forward with experienced, local guidance.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.bearteam.com",

  /** REVIEW: verify license numbers with the Florida DBPR before launch */
  brokerageLicense: "[VERIFY BROKERAGE LICENSE]",
  brokerName: "[VERIFY BROKER NAME]",

  address: {
    street: "[VERIFY BUSINESS ADDRESS]",
    city: "Orlando",
    state: "FL",
    zip: "[VERIFY ZIP]",
  },

  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "[VERIFY PHONE NUMBER]",
  email: process.env.NEXT_PUBLIC_GENERAL_EMAIL || "[VERIFY GENERAL EMAIL]",
  officeHours: "[VERIFY OFFICE HOURS]",

  /** Contacts required by the accessibility & compliance pages */
  accessibilityContact: "[VERIFY ACCESSIBILITY CONTACT]",
  complaintContact: "[VERIFY CONSUMER COMPLAINT CONTACT]",
  privacyContact: "[VERIFY PRIVACY CONTACT]",

  serviceAreas: [
    "Orlando",
    "Winter Park",
    "Lake Nona",
    "Conway",
    "College Park",
    "Dr. Phillips",
    "Windermere",
    "MetroWest",
    "Pine Hills",
    "Greater Central Florida",
  ],
} as const;

export type SiteConfig = typeof siteConfig;

/** True when a value is still an unverified placeholder. */
export function isPlaceholder(value: string): boolean {
  return value.includes("[VERIFY") || value.includes("[INSERT");
}
