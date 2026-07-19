"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

// mt=0 hides Mattertags (the demo model's owner embedded promo videos/posts
// in the scan — the tags travel with the model, not our code); hr=0 hides the
// highlight reel; brand=0/title=0 strip the owner's branding.
const TOUR_URL =
  process.env.NEXT_PUBLIC_MATTERPORT_URL ||
  "https://my.matterport.com/show/?m=JGPnGQ6hosj&play=1&qs=1&brand=0&title=0&mt=0&hr=0&ss=16";

const IS_DEMO_TOUR = !process.env.NEXT_PUBLIC_MATTERPORT_URL;

export function TourHero() {
  const [exploring, setExploring] = useState(false);
  const [mountTour, setMountTour] = useState(false);
  const [tourReady, setTourReady] = useState(false);

  // Poster-first: paint an instant photo of the tour's starting view, then
  // load the heavy Matterport engine in the background and crossfade it in.
  useEffect(() => {
    const t = setTimeout(() => setMountTour(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section aria-labelledby="hero-heading" className="relative h-[100svh] overflow-hidden bg-ink">
      {/* Instant poster — same kitchen view the tour starts at */}
      <Image
        src="/images/rooms/07-kitchen-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${tourReady ? "opacity-0" : "opacity-100"}`}
      />

      {/* The 3D tour — mounted just after first paint, faded in when loaded */}
      {mountTour ? (
        <iframe
          src={TOUR_URL}
          title="Interactive 3D home walkthrough"
          allow="fullscreen; xr-spatial-tracking"
          allowFullScreen
          onLoad={() => setTimeout(() => setTourReady(true), 1200)}
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${tourReady ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}

      {exploring ? (
        /* EXPLORE MODE — tour owns the mouse; exit restores the page */
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex flex-col items-center gap-2">
          {IS_DEMO_TOUR ? (
            <p className="text-[10px] uppercase tracking-widest text-cream/40">
              Sample 3D tour — for demonstration only, not a Bear Team listing
            </p>
          ) : null}
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
        <div className="absolute inset-0 z-20 flex items-end bg-gradient-to-t from-ink/75 via-ink/20 to-transparent">
          <div className="mx-auto w-full max-w-content px-6 pb-16 pt-32">
            <h1 id="hero-heading" className="max-w-3xl font-display text-[1.9rem] font-medium leading-[1.12] text-soft-white md:text-display-xl md:leading-[1.05]">
              <span className="block">{heroCopy.headlineTop}</span>
              <span className="block text-gold-light">{heroCopy.headlineBottom}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/90 md:mt-6 md:text-lg">{heroCopy.copy}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5 md:mt-9 md:gap-4">
              <button
                type="button"
                onClick={() => setExploring(true)}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-white max-md:min-h-[44px] max-md:px-4 max-md:py-2.5 max-md:text-xs"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M10 2 2 7v11h5v-6h6v6h5V7l-8-5z" />
                </svg>
                Walk Through in 3D
              </button>
              <SearchHomesLink variant="primary" className="max-md:min-h-[44px] max-md:px-4 max-md:py-2.5 max-md:text-xs" />
              <ButtonLink href="/sell" variant="outline-light" className="max-md:min-h-[44px] max-md:px-4 max-md:py-2.5 max-md:text-xs">
                Sell Your Property
              </ButtonLink>
            </div>
            {IS_DEMO_TOUR ? (
              <p className="mt-8 text-[10px] uppercase tracking-widest text-cream/40">
                Sample 3D tour — for demonstration only, not a Bear Team listing
              </p>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
}
