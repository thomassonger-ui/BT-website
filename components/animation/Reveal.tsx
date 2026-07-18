"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, DESKTOP_MQ, MOBILE_MQ } from "@/lib/animations/gsap";

/**
 * Generic scroll-in reveal. Content is FULLY VISIBLE by default (no CSS
 * hiding), so users without JavaScript, reduced-motion users, and search
 * engines always get normal document flow. GSAP sets the initial offset only
 * when motion is allowed, and every tween reverses on upward scroll.
 */
export function Reveal({
  children,
  className,
  stagger = false,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  /** Animate direct children in sequence instead of the wrapper as one unit. */
  stagger?: boolean;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add([DESKTOP_MQ, MOBILE_MQ], (context) => {
        const isMobile = context.conditions?.[1];
        const targets = stagger ? Array.from(el.children) : [el];
        gsap.fromTo(
          targets,
          { autoAlpha: 0, y: isMobile ? Math.min(y, 20) : y },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger: stagger ? 0.12 : 0,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
      // Reduced-motion: no tweens are created; content stays visible.
    }, el);
    return () => ctx.revert();
  }, [stagger, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
