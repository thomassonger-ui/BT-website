import type { TeamMember } from "@/types/content";

/**
 * TEAM — VERIFIED PROFILES ONLY.
 * The entries below are structural placeholders with verified: false and are
 * rendered with a visible "profile pending verification" label. Replace with
 * verified names, titles, biographies, license info, and approved headshots
 * before launch. DO NOT invent staff members or credentials.
 */
export const team: TeamMember[] = [
  {
    slug: "broker",
    name: "Bethanne Baer",
    title: "Broker/Owner",
    bio: "[PLACEHOLDER — verified broker biography goes here. Include background, market experience, and approach. Do not launch with this text.]",
    areasServed: ["Central Florida"],
    specialties: ["[VERIFY SPECIALTIES]"],
    languages: ["English"],
    license: "[VERIFY LICENSE NUMBER]",
    headshot: "/images/placeholder-headshot.svg",
    verified: false,
    reviewNote: "Replace with verified broker profile before launch.",
  },
  {
    slug: "team-member-1",
    name: "[VERIFY TEAM MEMBER NAME]",
    title: "[VERIFY TITLE]",
    bio: "[PLACEHOLDER — verified team member biography goes here. Do not launch with this text.]",
    areasServed: ["Central Florida"],
    specialties: ["[VERIFY SPECIALTIES]"],
    languages: ["English"],
    headshot: "/images/placeholder-headshot.svg",
    verified: false,
    reviewNote: "Replace with verified team member profile before launch.",
  },
];
