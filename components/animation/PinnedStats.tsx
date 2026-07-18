"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, DESKTOP_MQ } from "@/lib/animations/gsap";
import type { ProofPoint } from "@/types/content";

/**
 * Experience proof points.
 * Desktop + motion allowed: the section pins briefly while each proof point
 * takes focus in sequence (scrubbed, fully reversible). No spinning counters.
 * Mobile / reduced motion / no JS: all three render in normal flow.
 */
export function PinnedStats({ points }: { points: ProofPoint[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(DESKTOP_MQ, () => {
        const items = gsap.utils.toArray<HTMLElement>("[data-stat]", el);
        if (items.length < 2) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top+=80",
            end: "+=120%", // restrained pin duration
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
          },
        });
        items.forEach((item, i) => {
          // Each point moves to full focus, then softens as the next arrives.
          tl.fromTo(
            item,
            { opacity: i === 0 ? 1 : 0.25, scale: i === 0 ? 1 : 0.96 },
            { opacity: 1, scale: 1, duration: 1, ease: "none" },
            i,
          );
          if (i < items.length - 1) {
            tl.to(item, { opacity: 0.25, scale: 0.96, duration: 1, ease: "none" }, i + 1);
          }
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="grid gap-10 md:grid-cols-3 md:gap-8">
      {points.map((point) => (
        <div key={point.id} data-stat className="text-center will-change-transform">
          <p className="font-display text-display-lg font-medium text-gold-light">{point.value}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-soft-white">
            {point.label}
          </p>
          <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-cream/75">{point.detail}</p>
        </div>
      ))}
    </div>
  );
}
