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

/**
 * Rotating hero phrases. Index 0 (the classic) always paints first with the
 * poster; when the 3D tour crossfades in, the headline crossfades to a random
 * one of the other 29 — a different one each visit, never repeating the one
 * shown last time (remembered per browser). Fair-Housing-safe: no phrase
 * characterizes people or neighborhoods — only homes, craft, and geography.
 */
const PHRASES: [string, string][] = [
  ["Find Your Place", "in Central Florida."],
  ["Every Home Tells a Story.", "Let's Find Yours."],
  ["From First Look", "to Final Key."],
  ["Your Next Chapter", "Starts at the Front Door."],
  ["Four Decades of Doors,", "Opened the Right Way."],
  ["The Right Home", "Is Worth the Right Guide."],
  ["Move With Confidence,", "Not Guesswork."],
  ["Homes Change.", "Home Doesn't."],
  ["Local Knowledge.", "Lifelong Addresses."],
  ["Buy Smart.", "Sell Smarter."],
  ["Orlando Is Big.", "Your Team Shouldn't Be."],
  ["See It. Walk It.", "Love It. Live It."],
  ["Great Moves", "Are Made, Not Found."],
  ["Behind Every Sold Sign,", "A Strategy."],
  ["The Market Moves.", "We Read It Daily."],
  ["A House Is a Price.", "A Home Is a Fit."],
  ["Doors Open", "for the Well-Prepared."],
  ["Walk In Curious.", "Walk Out Certain."],
  ["Real Estate Is Local.", "So Are We."],
  ["Seven Thousand Homes.", "One Standard."],
  ["Your Timeline.", "Our Craft."],
  ["Priced Right.", "Presented Beautifully."],
  ["From Conway to the Chain of Lakes,", "We Know the Way Home."],
  ["Not Just Square Feet —", "the Life Inside Them."],
  ["Begin With a Conversation.", "End With Keys."],
  ["The Best Tours", "Start With the Right Guide."],
  ["Every Street", "Has Its Own Rhythm."],
  ["Tour It in 3D.", "Live It in Person."],
  ["Experience Isn't Extra.", "It's Everything."],
  ["Make Your Move", "a Masterpiece."],
];

export function TourHero() {
  const [exploring, setExploring] = useState(false);
  const [mountTour, setMountTour] = useState(false);
  const [tourReady, setTourReady] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [phraseVisible, setPhraseVisible] = useState(true);

  // Poster-first: paint an instant photo of the tour's starting view, then
  // load the heavy Matterport engine in the background and crossfade it in.
  useEffect(() => {
    const t = setTimeout(() => setMountTour(true), 300);
    return () => clearTimeout(t);
  }, []);

  // When the tour appears, crossfade the headline to a random phrase —
  // different every visit, never the one shown last time on this device.
  useEffect(() => {
    if (!tourReady) return;
    let last = 0;
    try {
      last = Number(window.localStorage.getItem("bt-hero-phrase") || 0);
    } catch {
      /* private mode etc. */
    }
    let next = 1 + Math.floor(Math.random() * (PHRASES.length - 1));
    if (next === last) next = (next % (PHRASES.length - 1)) + 1;
    try {
      window.localStorage.setItem("bt-hero-phrase", String(next));
    } catch {
      /* ignore */
    }
    setPhraseVisible(false);
    const t = setTimeout(() => {
      setPhraseIdx(next);
      setPhraseVisible(true);
    }, 500);
    return () => clearTimeout(t);
  }, [tourReady]);

  return (
    <section aria-labelledby="hero-heading" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Instant poster — same kitchen view the tour starts at */}
      <Image
        src="/images/rooms/07-kitchen-1.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover transition-opacity duration-700 ${tourReady ? "opacity-0" : "opacity-100"}`}
      />

      {/* The 3D tour — mounted just after first paint, faded in when loaded.
          Offset upward so the embed's built-in top-left watermark sits above
          the visible crop (attribution moves to our caption at the bottom). */}
      {mountTour ? (
        <iframe
          src={TOUR_URL}
          title="Interactive 3D home walkthrough"
          allow="fullscreen; xr-spatial-tracking"
          allowFullScreen
          onLoad={() => setTimeout(() => setTourReady(true), 1200)}
          className={`absolute inset-x-0 -top-16 h-[calc(100%+4rem)] w-full border-0 transition-opacity duration-700 ${tourReady ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}

      {exploring ? (
        /* EXPLORE MODE — tour owns the mouse; exit restores the page */
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30 flex flex-col items-center gap-2">
          <p className="text-[10px] uppercase tracking-widest text-cream/40">
            {IS_DEMO_TOUR ? "Sample 3D tour — for demonstration only, not a Bear Team listing · " : ""}
            3D tour powered by Matterport
          </p>
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
        /* OVERLAY MODE — headline + CTAs; content taller than the screen grows
           the section downward instead of overflowing up into the header */
        <div className="relative z-20 flex min-h-[100svh] items-end bg-gradient-to-t from-ink/75 via-ink/20 to-transparent">
          <div className="mx-auto w-full max-w-content px-6 pb-12 pt-28 md:pb-16 md:pt-32">
            <h1
              id="hero-heading"
              className={`max-w-3xl font-display text-[1.7rem] font-medium leading-[1.15] text-soft-white transition-opacity duration-500 md:text-display-xl md:leading-[1.05] ${phraseVisible ? "opacity-100" : "opacity-0"}`}
            >
              <span className="block">{PHRASES[phraseIdx][0]}</span>
              <span className="block text-gold-light">{PHRASES[phraseIdx][1]}</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/90 md:mt-6 md:text-lg">{heroCopy.copy}</p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5 md:mt-9 md:gap-4">
              <button
                type="button"
                onClick={() => setExploring(true)}
                className="inline-flex min-h-[48px] items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-white max-md:min-h-[40px] max-md:px-3.5 max-md:py-2 max-md:text-xs"
              >
                <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M10 2 2 7v11h5v-6h6v6h5V7l-8-5z" />
                </svg>
                Walk Through in 3D
              </button>
              <ButtonLink href="/listings" variant="primary" className="max-md:min-h-[40px] max-md:px-3.5 max-md:py-2 max-md:text-xs">
                Featured Listings
              </ButtonLink>
              <SearchHomesLink variant="primary" className="max-md:min-h-[40px] max-md:px-3.5 max-md:py-2 max-md:text-xs" />
              <ButtonLink href="/sell" variant="outline-light" className="max-md:min-h-[40px] max-md:px-3.5 max-md:py-2 max-md:text-xs">
                Sell Your Property
              </ButtonLink>
            </div>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-cream/40 md:mt-8">
              {IS_DEMO_TOUR ? "Sample 3D tour — for demonstration only, not a Bear Team listing · " : ""}
              3D tour powered by Matterport
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
