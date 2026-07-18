"use client";

import { useState } from "react";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { heroCopy } from "@/content/home-scenes";

/**
 * MATTERPORT TOUR HERO — the interactive 3D walkthrough IS the hero.
 *
 * The tour is click-to-activate: until the visitor opts in, an overlay with
 * the headline + CTAs sits above the iframe (pointer-events blocked), so
 * page scrolling is never hijacked. Activating hands mouse/touch to the
 * tour; a persistent Exit button restores the overlay.
 *
 * REVIEW NOTE: the default model is Matterport's own public demo home
 * ("Southern California Luxury Home") and is clearly labeled as a sample.
 * Replace NEXT_PUBLIC_MATTERPORT_URL with a Bear Team-owned scan before
 * launch — a demo property must never be presentable as a listing.
 */

const TOUR_URL =
  process.env.NEXT_PUBLIC_MATTERPORT_URL ||
  "https://my.matterport.com/show/?m=JGPnGQ6hosj&play=1&qs=1&brand=0";

const IS_DEMO_TOUR = !process.env.NEXT_PUBLIC_MATTERPORT_URL;

export function TourHero() {
  const [exploring, setExploring] = useState(false);

  return (
    <section aria-labelledby="hero-heading" className="relative h-[100svh] overflow-hidden bg-ink">
      {/* The 3D tour */}
      <iframe
        src={TOUR_URL}
        title="Interactive 3D home walkthrough"
        allow="fullscreen; xr-spatial-tracking"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />

      {/* Sample label — required until replaced with a Bear Team scan */}
      {IS_DEMO_TOUR ? (
        <p className="absolute left-1/2 top-24 z-30 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-gold-light backdrop-blur">
          Sample 3D tour — for demonstration only, not a Bear Team listing
        </p>
      ) : null}

      {exploring ? (
        /* EXPLORE MODE — tour owns the mouse; exit restores the page */
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex justify-center">
          <button
            type="button"
            onClick={() => setExploring(false)}
            className="pointer-events-auto inline-flex min-h-[48px] items-center gap-2 rounded-full bg-ink/85 px-6 py-3 text-sm font-semibold text-soft-white backdrop-blur transition-colors hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
            Exit tour & continue to site
          </button>
        </div>
      ) : (
        /* OVERLAY MODE — headline + CTAs; page scroll works normally */
        <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-t from-ink/90 via-ink/40 to-ink/25">
          <div className="mx-auto w-full max-w-content px-6 pb-16 pt-32">
            <h1 id="hero-heading" className="max-w-3xl font-display text-display-xl font-medium leading-[1.05] text-soft-white">
              <span className="block">{heroCopy.headlineTop}</span>
              <span className="block text-gold-light">{heroCopy.headlineBottom}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">{heroCopy.copy}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setExploring(true)}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-white"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M10 2 2 7v11h5v-6h6v6h5V7l-8-5z" />
                </svg>
                Walk Through in 3D
              </button>
              <SearchHomesLink variant="primary" />
              <ButtonLink href="/sell" variant="outline-light">
                Sell Your Property
              </ButtonLink>
            </div>
            <div className="mt-5">
              <ButtonLink href="/home-value" variant="ghost" className="!text-cream/90 hover:!text-gold-light">
                Request a Home Value Consultation →
              </ButtonLink>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
