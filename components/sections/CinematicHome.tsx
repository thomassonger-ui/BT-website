"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, DESKTOP_MQ, MOBILE_MQ } from "@/lib/animations/gsap";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { rooms, heroCopy } from "@/content/home-scenes";
import { siteConfig } from "@/config/site";

/**
 * SCROLL-SCRUBBED WALKTHROUGH — compositor-only build.
 *
 * The 36 full-resolution stills form one flat sequence in a pinned viewport.
 * Every image plays a slow continuous push-in for its entire life, and hands
 * off with a LONG overlapping crossfade (the top layer melts, revealing the
 * next already in motion). At any moment at most two layers are active.
 *
 * Deliberately restricted to opacity + transform — the only two properties
 * browsers composite on the GPU without re-painting — so scrubbing holds
 * 60fps on ordinary hardware. No filters, no blur, no 3D tilt, no snap:
 * every source of frame drops from earlier iterations is gone. Photos render
 * at full source resolution (no video compression), so it's crisp.
 *
 * Scroll = playhead, forward and backward. Mobile / reduced-motion get
 * ordinary stacked photo sections in document flow.
 */

const IMG_SCROLL = 45; // vh of scroll per image (36 images ≈ 16 viewports)
const XFADE = 0.6; // crossfade length in image-units (60% overlap = always in motion)

export function CinematicHome() {
  const ref = useRef<HTMLDivElement>(null);
  const allFrames = rooms.flatMap((room) => room.frames);
  const total = allFrames.length;

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Hero entrance — fast, CTAs usable immediately.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo("[data-hero-line]", { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12 })
          .fromTo("[data-hero-copy]", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3")
          .fromTo("[data-hero-cta]", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.25");
      });

      // Desktop: the scrubbed sequence.
      mm.add(DESKTOP_MQ, () => {
        const frames = gsap.utils.toArray<HTMLElement>("[data-seq-frame]", el);
        const captions = gsap.utils.toArray<HTMLElement>("[data-caption]", el);
        const U = frames.length; // 36 units

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `+=${U * IMG_SCROLL}%`,
            pin: true,
            anticipatePin: 1,
            scrub: 1, // heavier smoothing = glide
          },
        });

        frames.forEach((frame, k) => {
          const lastFrame = k === U - 1;
          // Life: revealed while frame k-1 melts, gone when own melt ends.
          const lifeStart = Math.max(0, k - XFADE);
          const lifeEnd = lastFrame ? U : k + 1;

          // CRITICAL PERF: a frame exists for the compositor ONLY during its
          // life. Outside it, visibility:hidden — so at any scroll position
          // at most two layers are painted, not thirty-six.
          gsap.set(frame, { autoAlpha: k === 0 ? 1 : 0 });
          if (k > 0) {
            tl.set(frame, { autoAlpha: 1 }, lifeStart);
          }

          // Continuous push-in for the whole life — the camera never stops.
          const img = frame.firstElementChild;
          if (img) {
            gsap.set(img, { transformOrigin: "50% 52%" });
            tl.fromTo(img, { scale: 1 }, { scale: 1.16, duration: lifeEnd - lifeStart }, lifeStart);
          }
          // Long overlapping melt into the next photo (opacity only).
          if (!lastFrame) {
            tl.to(frame, { autoAlpha: 0, duration: XFADE }, k + 1 - XFADE);
          }
        });

        // Captions: one per room (4 images each), riding the same playhead.
        captions.forEach((caption, i) => {
          const roomStart = i * 4;
          const lastRoom = i === captions.length - 1;
          if (i > 0) {
            tl.fromTo(caption, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.7 }, roomStart + 0.4);
          } else {
            tl.set(caption, { autoAlpha: 1, y: 0 }, 0);
          }
          if (!lastRoom) {
            tl.to(caption, { autoAlpha: 0, y: -50, duration: 0.7 }, roomStart + 3.1);
          }
        });
      });

      // Mobile: normal flow photo sections — light caption reveals only.
      mm.add(MOBILE_MQ, () => {
        gsap.utils.toArray<HTMLElement>("[data-mobile-scene]", el).forEach((scene, i) => {
          if (i === 0) return;
          const text = scene.querySelector("[data-mobile-text]");
          if (text) {
            gsap.fromTo(
              text,
              { autoAlpha: 0, y: 24 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: { trigger: scene, start: "top 75%", toggleActions: "play none none reverse" },
              },
            );
          }
        });
      });
      // Reduced motion: no tweens — plain stacked sections in document flow.
    }, el);
    return () => ctx.revert();
  }, [total]);

  return (
    <div ref={ref} className="relative bg-ink">
      {/* ============ DESKTOP SEQUENCE (scroll-scrubbed) ============ */}
      <div className="relative hidden h-[100svh] overflow-hidden md:motion-safe:block">
        {/* 36 stacked frames, z descending — top layer melts to reveal the next */}
        {allFrames.map((src, k) => (
          <div
            key={src}
            data-seq-frame
            className="absolute inset-0"
            style={{ zIndex: total - k }}
          >
            <div className="absolute inset-0">
              <Image
                src={src}
                alt=""
                fill
                priority={k < 2}
                quality={90}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
        {/* Single static legibility gradient above all frames */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/20"
          style={{ zIndex: total + 1 }}
        />
        <p className="sr-only">
          A scroll-controlled photographic walkthrough of a Central Florida home, from the front
          exterior through the entry, living spaces, kitchen, and lanai to the pool.
        </p>

        {/* Caption overlays — one per room */}
        {rooms.map((room, i) => {
          const isHero = i === 0;
          const isFinale = i === rooms.length - 1;
          return (
            <div
              key={room.id}
              data-caption
              style={{ zIndex: total + 2 }}
              className={`absolute inset-0 flex ${isFinale ? "items-center" : "items-end"} pointer-events-none`}
            >
              {isHero ? (
                <div className="pointer-events-auto relative mx-auto w-full max-w-content px-6 pb-20 pt-32">
                  <h1 id="hero-heading" className="max-w-3xl font-display text-display-xl font-medium leading-[1.05] text-soft-white">
                    <span data-hero-line className="block">{heroCopy.headlineTop}</span>
                    <span data-hero-line className="block text-gold-light">{heroCopy.headlineBottom}</span>
                  </h1>
                  <p data-hero-copy className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
                    {heroCopy.copy}
                  </p>
                  <div data-hero-cta className="mt-9 flex flex-wrap items-center gap-4">
                    <SearchHomesLink variant="primary" />
                    <ButtonLink href="/sell" variant="outline-light">
                      Sell Your Property
                    </ButtonLink>
                    <ButtonLink href="/home-value" variant="ghost" className="!text-cream/90 hover:!text-gold-light">
                      Request a Home Value Consultation →
                    </ButtonLink>
                  </div>
                  <p data-hero-cta className="mt-9 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-cream/60">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 motion-safe:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14m0 0-5-5m5 5 5-5" />
                    </svg>
                    Scroll to walk through
                  </p>
                </div>
              ) : isFinale ? (
                <div className="pointer-events-auto relative mx-auto w-full max-w-content px-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">{room.kicker}</p>
                  <h2 className="mx-auto mt-4 max-w-3xl font-display text-display-xl font-medium leading-tight text-soft-white text-balance">
                    {room.line}
                  </h2>
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                    <SearchHomesLink variant="primary" label="Search for a Home" />
                    <ButtonLink href="/sell" variant="outline-light">
                      Sell a Property
                    </ButtonLink>
                    <ButtonLink href="/contact" variant="outline-light">
                      Speak With Bear Team
                    </ButtonLink>
                  </div>
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-8 inline-block text-sm font-semibold text-gold-light underline-offset-4 hover:underline"
                  >
                    Call {siteConfig.phone}
                  </a>
                </div>
              ) : (
                <div
                  className={`relative mx-auto w-full max-w-content px-6 pb-20 ${
                    room.align === "right" ? "text-right" : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
                    {String(i + 1).padStart(2, "0")} — {room.kicker}
                  </p>
                  <p
                    className={`mt-3 max-w-2xl font-display text-display-lg font-medium leading-tight text-soft-white text-balance ${
                      room.align === "right" ? "ml-auto" : ""
                    }`}
                  >
                    {room.line}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ============ MOBILE / REDUCED-MOTION: photo sections ============ */}
      <div className="md:motion-safe:hidden">
        {rooms.map((room, i) => {
          const isHero = i === 0;
          const isFinale = i === rooms.length - 1;
          return (
            <section
              key={room.id}
              data-mobile-scene
              className={`relative flex h-[100svh] ${isFinale ? "items-center" : "items-end"} overflow-hidden bg-ink`}
            >
              <div className="absolute inset-0">
                <Image
                  src={room.frames[0]}
                  alt=""
                  fill
                  priority={isHero}
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 ${
                    isHero
                      ? "bg-gradient-to-t from-ink/90 via-ink/25 to-ink/20"
                      : isFinale
                        ? "bg-ink/70"
                        : "bg-gradient-to-t from-ink/75 via-transparent to-transparent"
                  }`}
                />
              </div>
              <div
                data-mobile-text
                className={`relative z-10 mx-auto w-full max-w-content px-6 ${
                  isFinale ? "text-center" : isHero ? "pb-16 pt-32" : `pb-16 ${room.align === "right" ? "text-right" : ""}`
                }`}
              >
                {isHero ? (
                  <>
                    <h2 className="max-w-3xl font-display text-display-xl font-medium leading-[1.05] text-soft-white">
                      <span className="block">{heroCopy.headlineTop}</span>
                      <span className="block text-gold-light">{heroCopy.headlineBottom}</span>
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90">{heroCopy.copy}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <SearchHomesLink variant="primary" />
                      <ButtonLink href="/sell" variant="outline-light">
                        Sell Your Property
                      </ButtonLink>
                    </div>
                  </>
                ) : isFinale ? (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">{room.kicker}</p>
                    <h2 className="mx-auto mt-4 max-w-3xl font-display text-display-lg font-medium leading-tight text-soft-white">
                      {room.line}
                    </h2>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                      <SearchHomesLink variant="primary" label="Search for a Home" />
                      <ButtonLink href="/contact" variant="outline-light">
                        Speak With Bear Team
                      </ButtonLink>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
                      {String(i + 1).padStart(2, "0")} — {room.kicker}
                    </p>
                    <p className={`mt-3 max-w-2xl font-display text-display-md font-medium leading-tight text-soft-white ${room.align === "right" ? "ml-auto" : ""}`}>
                      {room.line}
                    </p>
                  </>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
