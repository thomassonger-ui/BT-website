"use client";

import Image from "next/image";
import { useState } from "react";
import { PathwayModal, type Pathway } from "@/components/search/PathwayCards";
import { formatPrice, type Listing } from "@/lib/listings";
import { cn } from "@/lib/utils/cn";

/**
 * Featured-listing cards. Every card opens the site's standard pop-up with
 * a tailored micro-form — inquiries land in Premier Leads as
 * "Website — Buyer Lead" prefixed "Featured listing inquiry (<address>)".
 */

const STATUS_STYLES: Record<string, string> = {
  "For Sale": "bg-teal-700 text-soft-white",
  Pending: "bg-gold text-ink",
  "Active Under Contract": "bg-gold text-ink",
};

function toPathway(l: Listing): Pathway {
  const facts = [
    l.beds ? `${l.beds} bd` : null,
    l.baths ? `${l.baths} ba` : null,
    l.sqft ? `${l.sqft.toLocaleString("en-US")} sqft` : null,
    l.acres ? `${l.acres} acres` : null,
  ]
    .filter(Boolean)
    .join(" · ");
  return {
    id: l.slug,
    img: l.photo || "/images/heroes/communities.jpg",
    alt: `Photo of ${l.address}`,
    title: `${formatPrice(l.price)} — ${l.status}`,
    text: "",
    ctaLabel: "",
    mode: "form",
    inquiryType: "Buying",
    description: `${l.address}${facts ? ` · ${facts}` : ""}${l.mls_number ? ` · MLS# ${l.mls_number}` : ""}. ${l.description ?? ""}`,
    value: [],
    fields: [
      {
        key: "Interest",
        label: "What would you like to do?",
        type: "select",
        options: [
          "Schedule a private showing",
          "Ask a question about this property",
          "Get comparable sales for this area",
          "Make an offer",
        ],
        required: true,
      },
    ],
    leadPrefix: `Featured listing inquiry (${l.address})`,
    submitLabel: "Send to the Listing Team",
  };
}

export function ListingCards({ listings }: { listings: Listing[] }) {
  const [open, setOpen] = useState<Pathway | null>(null);
  const [filter, setFilter] = useState<"All" | "For Sale" | "Pending">("All");

  const shown = listings.filter((l) =>
    filter === "All"
      ? true
      : filter === "Pending"
        ? l.status === "Pending" || l.status === "Active Under Contract"
        : l.status === "For Sale",
  );

  return (
    <>
      {/* Status filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter listings by status">
        {(["All", "For Sale", "Pending"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              "min-h-[40px] rounded-full border px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
              filter === f
                ? "border-teal-700 bg-teal-700 text-soft-white"
                : "border-ink/15 bg-soft-white text-charcoal hover:border-teal-700 hover:text-teal-800",
            )}
          >
            {f === "Pending" ? "Pending / Under Contract" : f}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((l) => (
          <article
            key={l.slug}
            className="group flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-soft-white transition-shadow hover:shadow-lg"
          >
            <button
              type="button"
              onClick={() => setOpen(toPathway(l))}
              aria-haspopup="dialog"
              className="text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={l.photo || "/images/heroes/communities.jpg"}
                  alt={`Photo of ${l.address}`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={cn(
                    "absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
                    STATUS_STYLES[l.status] ?? "bg-ink text-soft-white",
                  )}
                >
                  {l.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-display text-2xl font-medium text-ink">{formatPrice(l.price)}</p>
                <p className="mt-1 text-sm font-medium text-charcoal">
                  {[
                    l.beds ? `${l.beds} bd` : null,
                    l.baths ? `${l.baths} ba` : null,
                    l.sqft ? `${l.sqft.toLocaleString("en-US")} sqft` : null,
                    l.acres ? `${l.acres} acres` : null,
                  ]
                    .filter(Boolean)
                    .join(" · ")}
                  {l.property_type ? ` · ${l.property_type}` : ""}
                </p>
                <p className="mt-1 text-sm text-muted">{l.address}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                  Click to Explore <span aria-hidden="true">→</span>
                </p>
              </div>
            </button>
          </article>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="mt-8 text-center text-sm text-muted">
          No listings in this category right now — check back soon or call (407) 228-1112.
        </p>
      ) : null}

      {open ? <PathwayModal pathway={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}
