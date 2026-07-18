"use client";

import Image from "next/image";
import { useState } from "react";
import { PathwayModal, type Pathway } from "@/components/search/PathwayCards";

/**
 * Photo-tile grid for the service-area directory. Every tile opens a pop-up
 * card: photo, a short factual description (Fair-Housing-safe: housing
 * character, geography, amenities only), a "View the full guide" link when a
 * detailed community page exists, and a micro-form that requests current
 * options — submitted through /api/contact so it lands in Premier Leads as
 * "Website — Buyer Lead" with a community-specific prefix.
 *
 * REVIEW: factual blurbs must be verified by Bear Team before launch.
 */

export type CommunityTile = {
  name: string;
  img: string;
  blurb: string;
  slug?: string;
};

function toPathway(t: CommunityTile): Pathway {
  return {
    id: t.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    img: t.img,
    alt: `Homes in ${t.name}, Florida`,
    title: t.name,
    text: "",
    ctaLabel: "",
    mode: "form",
    inquiryType: "Buying",
    description: t.blurb,
    moreLink: t.slug
      ? { href: `/communities/${t.slug}`, label: `View the full ${t.name} guide` }
      : undefined,
    value: [],
    fields: [
      {
        key: "Timeframe",
        label: "When would you like to move?",
        type: "select",
        options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just exploring"],
        required: true,
      },
    ],
    leadPrefix: `Community options request (${t.name})`,
    submitLabel: `Send Me Current ${t.name} Options`,
  };
}

export function CommunityTiles({ tiles }: { tiles: CommunityTile[] }) {
  const [open, setOpen] = useState<Pathway | null>(null);

  return (
    <>
      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {tiles.map((t) => (
          <li key={t.name}>
            <button
              type="button"
              onClick={() => setOpen(toPathway(t))}
              aria-haspopup="dialog"
              className="group relative block aspect-[16/10] w-full overflow-hidden rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <Image
                src={t.img}
                alt={`Homes in ${t.name}, Florida`}
                fill
                sizes="(min-width:1024px) 20vw, (min-width:640px) 33vw, 50vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent transition-colors group-hover:from-ink/85" />
              <p className="absolute bottom-2.5 left-3 right-3 text-sm font-semibold text-soft-white drop-shadow">
                {t.name}
                <span aria-hidden="true" className="ml-1 text-gold-light opacity-0 transition-opacity group-hover:opacity-100">
                  →
                </span>
              </p>
            </button>
          </li>
        ))}
      </ul>

      {open ? <PathwayModal pathway={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
