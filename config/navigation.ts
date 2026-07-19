/**
 * Centralized navigation configuration.
 * "Search Homes" is always an EXTERNAL link (config/external-links.ts).
 * No recruiting links may be added here.
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string }[];
};

/** Minimal header — plain links with two dropdowns, no header CTA buttons. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Search Homes", href: "/search" },
  { label: "Featured Listings", href: "/listings" },
  {
    label: "Buy & Sell",
    href: "/buy",
    children: [
      { label: "Buy a Home", href: "/buy" },
      { label: "Sell a Property", href: "/sell" },
      { label: "Home Value", href: "/home-value" },
      { label: "Relocation", href: "/relocation" },
    ],
  },
  { label: "Communities", href: "/communities" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog — Market News Weekly", href: "/blog" },
      { label: "Guides & Resources", href: "/resources" },
      { label: "Monthly Market Brief", href: "/home-value#market-brief" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Bear Team", href: "/about" },
      { label: "Meet the Team", href: "/team" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "Featured Listings", href: "/listings" },
    { label: "Buy a Home", href: "/buy" },
    { label: "Sell a Property", href: "/sell" },
    { label: "Home Valuation", href: "/home-value" },
    { label: "Relocation", href: "/relocation" },
    { label: "Communities", href: "/communities" },
  ],
  company: [
    { label: "About Bear Team", href: "/about" },
    { label: "Meet the Team", href: "/team" },
    { label: "Blog", href: "/blog" },
    { label: "Real Estate Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Fair Housing", href: "/fair-housing" },
    { label: "Disclosures", href: "/disclosures" },
  ],
} as const;
