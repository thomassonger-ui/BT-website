"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Central GSAP setup. Import { gsap, ScrollTrigger } from here — never from
 * "gsap" directly in components — so plugin registration happens exactly once.
 *
 * Motion policy (see CONTENT_GUIDE.md "Motion"):
 * - Native scrolling is never hijacked (no Lenis — documented decision: it was
 *   excluded because it risks interfering with touch scrolling, keyboard
 *   controls, anchor links, and browser history; native scroll meets the
 *   design goals).
 * - Every scroll animation is reversible (plays back when scrolling up).
 * - prefers-reduced-motion: all scrubbed/pinned animation is skipped and
 *   content renders in normal document flow via CSS fallbacks.
 */

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Breakpoint used for gsap.matchMedia desktop/mobile variants. */
export const DESKTOP_MQ = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";
export const MOBILE_MQ = "(max-width: 767.98px) and (prefers-reduced-motion: no-preference)";
export const REDUCED_MQ = "(prefers-reduced-motion: reduce)";

export { gsap, ScrollTrigger };
