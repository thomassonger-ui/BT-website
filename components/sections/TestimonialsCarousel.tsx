"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Horizontal auto-rotating carousel for review cards.
 * - Cards are server-rendered children marked with data-card; this wrapper
 *   only handles scrolling, so review content stays static and crawlable.
 * - Auto-advances every 5s, loops back to the start, pauses on hover/focus,
 *   and never auto-moves for prefers-reduced-motion users (WCAG 2.2).
 * - Arrow buttons are 40px targets (2.5.8) and work with the keyboard.
 */
export function TestimonialsCarousel({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  const step = useCallback((dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 24 : 400;
    const max = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + dir * w;
    if (next > max + 4) next = 0;
    if (next < -4) next = max;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (!paused.current) step(1);
    }, 5000);
    return () => clearInterval(id);
  }, [step]);

  const [pausedUi, setPausedUi] = useState(false);
  const setPaused = (v: boolean) => {
    paused.current = v;
    setPausedUi(v);
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        ref={track}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="mt-6 flex items-center justify-end gap-3">
        <span className="sr-only" aria-live="polite">
          {pausedUi ? "Carousel paused" : ""}
        </span>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span aria-hidden="true">&larr;</span>
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next reviews"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink transition-colors hover:bg-ink hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <span aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </div>
  );
}
