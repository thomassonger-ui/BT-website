"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap, DESKTOP_MQ, MOBILE_MQ } from "@/lib/animations/gsap";
import type { ProcessStep } from "@/types/content";
import { cn } from "@/lib/utils/cn";

/**
 * Scroll-driven numbered process timeline.
 * A progress rail draws as the visitor scrolls (scrubbed + reversible) and
 * each step eases in. The ordered list is fully readable with animation
 * disabled — semantics are a plain <ol> in document flow.
 */
export function ProcessTimeline({
  steps,
  tone = "dark",
}: {
  steps: ProcessStep[];
  tone?: "dark" | "light";
}) {
  const ref = useRef<HTMLOListElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add([DESKTOP_MQ, MOBILE_MQ], () => {
        const rail = el.querySelector<HTMLElement>("[data-rail]");
        if (rail) {
          gsap.fromTo(
            rail,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: "none",
              transformOrigin: "top center",
              scrollTrigger: { trigger: el, start: "top 75%", end: "bottom 65%", scrub: 0.4 },
            },
          );
        }
        gsap.utils.toArray<HTMLElement>("[data-step]", el).forEach((step) => {
          gsap.fromTo(
            step,
            { autoAlpha: 0, x: -18 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: { trigger: step, start: "top 82%", toggleActions: "play none none reverse" },
            },
          );
        });
      });
    }, el);
    return () => ctx.revert();
  }, []);

  const dark = tone === "dark";
  return (
    <ol ref={ref} className="relative mx-auto max-w-2xl list-none space-y-8 pl-12">
      <span
        aria-hidden="true"
        data-rail
        className={cn("absolute left-[15px] top-2 h-[calc(100%-1rem)] w-0.5", dark ? "bg-teal-700" : "bg-gold")}
      />
      {steps.map((step, i) => (
        <li key={step.title} data-step className="relative">
          <span
            aria-hidden="true"
            className={cn(
              "absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
              dark ? "bg-teal-700 text-soft-white" : "bg-gold text-ink",
            )}
          >
            {i + 1}
          </span>
          <h3 className={cn("text-base font-semibold", dark ? "text-ink" : "text-soft-white")}>
            {step.title}
          </h3>
          <p className={cn("mt-1 text-sm leading-relaxed", dark ? "text-muted" : "text-cream/75")}>
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
