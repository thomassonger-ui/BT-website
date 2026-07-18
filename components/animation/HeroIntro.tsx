"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/animations/gsap";

/**
 * Hero entrance + subtle scroll response.
 * - On load: layered text reveal (headline lines, then copy, then CTAs) —
 *   fast (< 1s to CTAs) so calls to action are usable immediately. Content is
 *   visible without JS; GSAP only creates offsets when motion is allowed.
 * - On scroll: the background pans/scales very subtly (scrubbed parallax) and
 *   the foreground eases upward. Fully reversible; never blocks scrolling.
 */
export function HeroIntro({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", (context) => {
        const isMobile = window.matchMedia("(max-width: 767.98px)").matches;
        void context;

        // Layered entrance — quick, content-first.
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo("[data-hero-line]", { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12 })
          .fromTo("[data-hero-copy]", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3")
          .fromTo("[data-hero-cta]", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.25");

        // Scroll response — controlled scale on the backdrop, gentle lift on content.
        gsap.fromTo(
          "[data-hero-bg]",
          { scale: 1 },
          {
            scale: isMobile ? 1.04 : 1.1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
          },
        );
        gsap.to("[data-hero-content]", {
          y: isMobile ? -24 : -60,
          autoAlpha: 0.4,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top top", end: "bottom top", scrub: 0.6 },
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
