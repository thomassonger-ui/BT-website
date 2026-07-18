"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, DESKTOP_MQ, MOBILE_MQ } from "@/lib/animations/gsap";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { rooms, heroCopy } from "@/content/home-scenes";
import { siteConfig } from "@/config/site";

/**
 * SCROLL-SCRUBBED FILM HOMEPAGE.
 *
 * The 36 approved stills are rendered offline (ffmpeg) into one continuous
 * 24fps film — real interpolated zooms inside every frame, true dissolves
 * between steps, blur-melts between rooms (public/videos/walkthrough.mp4,
 * regenerate per scripts/render-walkthrough.sh notes in CONTENT_GUIDE.md).
 *
 * On desktop the film NEVER autoplays: scroll position IS the playhead.
 * A damped ticker lerps video.currentTime toward the scroll target, so the
 * wheel moves you through the house forward and backward with video
 * smoothness — the Matterport "you control the movement" feel. The mouse
 * adds a damped 3D look-around tilt on top.
 *
 * Fallbacks: mobile and reduced-motion get ordinary stacked photo sections
 * (first frame of each room) in document flow; no video downloads there.
 */

const UNIT_SCROLL = 140; // vh of scroll per room
/** Must match the render: 36 clips × 1.4s step + tail (50fps master). */
const VIDEO_FALLBACK_DURATION = 50.2;

export function CinematicHome() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const n = rooms.length;

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

      // Desktop: scroll scrubs the film.
      mm.add(DESKTOP_MQ, () => {
        const video = videoRef.current;
        const captions = gsap.utils.toArray<HTMLElement>("[data-caption]", el);
        const holdPoints = [0, ...captions.map((_, i) => (i + 0.35) / n), 1];

        // THE PLAYHEAD TARGET — scroll progress, captured in the trigger's
        // own onUpdate (registered at creation) and chased by a damped ticker.
        let target = 0;

        // Caption choreography shares the master timeline (9 room-units).
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `+=${n * UNIT_SCROLL}%`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.5,
            onUpdate: (self) => {
              target = self.progress;
            },
            snap: {
              snapTo: (value) =>
                holdPoints.reduce((a, b) => (Math.abs(b - value) < Math.abs(a - value) ? b : a)),
              duration: { min: 0.2, max: 0.6 },
              delay: 0.15,
              ease: "power1.inOut",
              directional: true,
            },
          },
        });
        const pad = { x: 0 };
        tl.to(pad, { x: 1, duration: 0.01 }, n - 0.01); // exact 9-unit length

        captions.forEach((caption, i) => {
          const lastRoom = i === n - 1;
          if (i > 0) {
            tl.fromTo(caption, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.18 }, i + 0.08);
          } else {
            tl.set(caption, { autoAlpha: 1, y: 0 }, 0);
          }
          if (!lastRoom) {
            tl.to(caption, { autoAlpha: 0, y: -70, duration: 0.16 }, i + 0.6);
          }
        });

        // THE PLAYHEAD: scroll progress → video time, through a damped lerp
        // so wheel ticks glide instead of stepping. Forward and backward.
        let current = 0;
        const tick = () => {
          if (!video) return;
          current += (target - current) * 0.12;
          const dur = video.duration || VIDEO_FALLBACK_DURATION;
          const t = Math.min(current * dur, dur - 0.05);
          // Never issue a seek while one is in flight — dropped seeks are
          // what reads as "jumping" while scrubbing.
          if (
            !video.seeking &&
            video.readyState >= 2 &&
            Math.abs(t - video.currentTime) > 1 / 50
          ) {
            video.currentTime = t;
          }
        };
        gsap.ticker.add(tick);

        // Nudge the browser to buffer the whole film for instant scrubbing.
        video?.load();

        // MOUSE LOOK-AROUND: damped 3D tilt on the film, Matterport-style.
        const stage = el.querySelector<HTMLElement>("[data-film-stage]");
        const lookTargets = stage ? [stage] : [];
        lookTargets.forEach((node) => gsap.set(node, { transformPerspective: 1200, scale: 1.06 }));
        const lookY = lookTargets.map((node) => gsap.quickTo(node, "rotationY", { duration: 0.9, ease: "power2.out" }));
        const lookX = lookTargets.map((node) => gsap.quickTo(node, "rotationX", { duration: 0.9, ease: "power2.out" }));
        const textXs = captions.map((c) => gsap.quickTo(c, "x", { duration: 1.1, ease: "power2.out" }));
        const onPointerMove = (e: PointerEvent) => {
          if (e.pointerType !== "mouse") return;
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          lookY.forEach((to) => to(nx * 6));
          lookX.forEach((to) => to(-ny * 3.5));
          textXs.forEach((to) => to(nx * -18));
        };
        const onPointerLeave = () => {
          lookY.forEach((to) => to(0));
          lookX.forEach((to) => to(0));
          textXs.forEach((to) => to(0));
        };
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onPointerLeave);
        return () => {
          gsap.ticker.remove(tick);
          window.removeEventListener("pointermove", onPointerMove);
          document.documentElement.removeEventListener("pointerleave", onPointerLeave);
        };
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
    }, el);
    return () => ctx.revert();
  }, [n]);

  return (
    <div ref={ref} className="relative bg-ink">
      {/* ============ DESKTOP FILM STAGE (scroll-scrubbed) ============ */}
      <div className="relative hidden h-[100svh] overflow-hidden md:motion-safe:block">
        <div data-film-stage className="absolute inset-0 will-change-transform">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            poster="/videos/walkthrough-poster.jpg"
            aria-hidden="true"
            tabIndex={-1}
            disablePictureInPicture
            className="h-full w-full object-cover"
          >
            <source src="/videos/walkthrough.mp4" type="video/mp4" />
            <source src="/videos/walkthrough.webm" type="video/webm" />
          </video>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/25" />
        </div>
        <p className="sr-only">
          A scroll-controlled photographic walkthrough of a Central Florida home, from the front
          exterior through the entry, living spaces, kitchen, and lanai to the pool.
        </p>

        {/* Caption overlays — one per room, choreographed to the playhead */}
        {rooms.map((room, i) => {
          const isHero = i === 0;
          const isFinale = i === rooms.length - 1;
          return (
            <div
              key={room.id}
              data-caption
              className={`absolute inset-0 z-10 flex ${isFinale ? "items-center" : "items-end"} pointer-events-none`}
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
