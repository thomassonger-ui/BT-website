"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, DESKTOP_MQ, MOBILE_MQ } from "@/lib/animations/gsap";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { rooms, heroCopy } from "@/content/home-scenes";
import { siteConfig } from "@/config/site";

/**
 * CONTINUOUS-FILM HOMEPAGE — 9 rooms × 4 sequential frames.
 *
 * Scroll = walking. Inside each room, scrolling steps through 4 photographed
 * frames along one path (image-sequence animation — scrubbing real footage of
 * the walk), each frame carrying a continuous push-in so the camera never
 * stops. Rooms hand off by melting (opacity + focus-pull blur) into the next
 * room, whose own frame sequence is already moving. Mouse = looking: a damped
 * 3D perspective tilt lets the visitor look around each room, Matterport-
 * style, independent of the walk.
 *
 * Fallbacks: absolute stacking only applies via `md:motion-safe:` variants —
 * mobile and reduced-motion get ordinary stacked sections (first frame of
 * each room) in document flow with every CTA reachable.
 */

const ROOM_FADE = 0.3; // room-to-room melt length, in room-units
const FRAME_FADE = 0.1; // frame-to-frame dissolve length, in room-units
const UNIT_SCROLL = 130; // vh of scroll per room

export function CinematicHome() {
  const ref = useRef<HTMLDivElement>(null);
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

      // Desktop: the continuous scrubbed film.
      mm.add(DESKTOP_MQ, () => {
        const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", el);

        // Soft snap to each room's caption moment.
        const holdPoints = [0, ...scenes.map((_, i) => (i + 0.35) / n), 1];

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: `+=${n * UNIT_SCROLL}%`,
            pin: true,
            anticipatePin: 1,
            scrub: 0.7,
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

        scenes.forEach((scene, i) => {
          const lastRoom = i === n - 1;
          const framesWrap = scene.querySelector<HTMLElement>("[data-scene-frames]");
          const frames = gsap.utils.toArray<HTMLElement>("[data-frame]", scene);
          const text = scene.querySelector<HTMLElement>("[data-scene-text]");

          // IMAGE SEQUENCE inside the room: 4 frames, each owning a quarter
          // of the room's scroll unit. Every frame pushes in continuously for
          // its whole life; consecutive frames hand off with a quick dissolve
          // — scrubbing forward and back steps through the photographed walk.
          frames.forEach((frame, f) => {
            const lastFrame = f === frames.length - 1;
            const winStart = i + f / 4;
            const winEnd = i + (f + 1) / 4;
            const lifeStart = f === 0 ? (i === 0 ? 0 : i - ROOM_FADE) : winStart - FRAME_FADE / 2;
            const lifeEnd = lastFrame ? (lastRoom ? n : i + 1) : winEnd + FRAME_FADE / 2;

            gsap.set(frame, { transformOrigin: "50% 52%" });
            tl.fromTo(
              frame,
              { scale: 1.05 },
              { scale: 1.24, duration: lifeEnd - lifeStart },
              lifeStart,
            );
            if (!lastFrame) {
              tl.to(frame, { autoAlpha: 0, duration: FRAME_FADE }, winEnd - FRAME_FADE / 2);
            }
          });

          // ROOM HANDOFF — the whole room melts away (opacity + focus-pull
          // blur), revealing the next room's sequence already in motion.
          if (!lastRoom) {
            tl.to(scene, { autoAlpha: 0, duration: ROOM_FADE }, i + 1 - ROOM_FADE);
            if (framesWrap) {
              tl.to(framesWrap, { filter: "blur(9px)", duration: ROOM_FADE, ease: "power1.in" }, i + 1 - ROOM_FADE);
            }
          }

          // CAPTIONS — rise in once the room is revealed, drift up and fade
          // before the handoff (their own speed = foreground parallax).
          if (text) {
            if (i > 0) {
              tl.fromTo(text, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.18 }, i + 0.06);
            } else {
              tl.set(text, { autoAlpha: 1, y: 0 }, 0);
            }
            if (!lastRoom) {
              tl.to(text, { autoAlpha: 0, y: -70, duration: 0.16 }, i + 0.55);
            }
          }
        });

        // MOUSE LOOK-AROUND (the Matterport feel): moving the mouse rotates
        // the room around you in 3D — damped, like dragging a panorama —
        // while scroll independently walks you forward. Captions counter-move
        // slightly for depth. Mouse pointer only.
        const wraps = scenes
          .map((scene) => scene.querySelector<HTMLElement>("[data-scene-frames]"))
          .filter((node): node is HTMLElement => Boolean(node));
        const texts = scenes
          .map((scene) => scene.querySelector<HTMLElement>("[data-scene-text]"))
          .filter((node): node is HTMLElement => Boolean(node));
        wraps.forEach((w) => gsap.set(w, { transformPerspective: 1200 }));
        const lookY = wraps.map((w) => gsap.quickTo(w, "rotationY", { duration: 0.9, ease: "power2.out" }));
        const lookX = wraps.map((w) => gsap.quickTo(w, "rotationX", { duration: 0.9, ease: "power2.out" }));
        const textX = texts.map((t) => gsap.quickTo(t, "x", { duration: 1.1, ease: "power2.out" }));
        const onPointerMove = (e: PointerEvent) => {
          if (e.pointerType !== "mouse") return;
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          lookY.forEach((to) => to(nx * 7));
          lookX.forEach((to) => to(-ny * 4));
          textX.forEach((to) => to(nx * -18));
        };
        const onPointerLeave = () => {
          lookY.forEach((to) => to(0));
          lookX.forEach((to) => to(0));
          textX.forEach((to) => to(0));
        };
        window.addEventListener("pointermove", onPointerMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onPointerLeave);
        return () => {
          window.removeEventListener("pointermove", onPointerMove);
          document.documentElement.removeEventListener("pointerleave", onPointerLeave);
        };
      });

      // Mobile: normal flow, no pinning — light caption reveals only.
      mm.add(MOBILE_MQ, () => {
        gsap.utils.toArray<HTMLElement>("[data-scene]", el).forEach((scene, i) => {
          if (i === 0) return;
          const text = scene.querySelector("[data-scene-text]");
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
  }, [n]);

  const sceneClass =
    "relative flex h-[100svh] overflow-hidden bg-ink md:motion-safe:absolute md:motion-safe:inset-0 md:motion-safe:h-full";

  return (
    <div
      ref={ref}
      className="relative bg-ink md:motion-safe:h-[100svh] md:motion-safe:overflow-hidden"
    >
      {rooms.map((room, i) => {
        const isHero = i === 0;
        const isFinale = i === rooms.length - 1;
        return (
          <section
            key={room.id}
            data-scene
            aria-labelledby={isHero ? "hero-heading" : isFinale ? "finale-heading" : undefined}
            className={`${sceneClass} ${isFinale ? "items-center" : "items-end"}`}
            style={{ zIndex: rooms.length - i }}
          >
            {/* 4-frame sequence (frame 1 on top; melts reveal the next) */}
            <div data-scene-frames className="absolute inset-0 overflow-hidden will-change-transform">
              {room.frames.map((src, f) => (
                <div key={src} data-frame className="absolute inset-0 will-change-transform" style={{ zIndex: 4 - f }}>
                  <Image
                    src={src}
                    alt=""
                    fill
                    priority={isHero && f === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              ))}
              <div
                aria-hidden="true"
                className={`absolute inset-0 z-10 ${
                  isHero
                    ? "bg-gradient-to-t from-ink/90 via-ink/25 to-ink/20"
                    : isFinale
                      ? "bg-ink/70"
                      : "bg-gradient-to-t from-ink/75 via-transparent to-transparent"
                }`}
              />
            </div>

            {/* Overlay content */}
            {isHero ? (
              <div data-scene-text className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-32">
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
              <div data-scene-text className="relative z-10 mx-auto w-full max-w-content px-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">{room.kicker}</p>
                <h2 id="finale-heading" className="mx-auto mt-4 max-w-3xl font-display text-display-xl font-medium leading-tight text-soft-white text-balance">
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
                data-scene-text
                className={`relative z-10 mx-auto w-full max-w-content px-6 pb-20 ${
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
          </section>
        );
      })}
    </div>
  );
}
