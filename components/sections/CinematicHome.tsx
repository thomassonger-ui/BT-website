"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, DESKTOP_MQ, MOBILE_MQ } from "@/lib/animations/gsap";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { heroScene, walkthroughScenes, finaleScene } from "@/content/home-scenes";
import { siteConfig } from "@/config/site";

/**
 * CONTINUOUS-FILM HOMEPAGE — scroll moves you through the home.
 *
 * Architecture (desktop + motion): every photo is a full-viewport layer in a
 * single pinned container, stacked with DESCENDING z-index. One master
 * timeline is scrubbed by the scroll position:
 *
 *   - The camera never stops: each photo plays a continuous camera path
 *     (push-in + drift across the room) for its entire life on screen.
 *   - Rooms hand off by the TOP layer melting away (opacity + focus-pull
 *     blur) while the next room — already moving — is revealed beneath.
 *     Both layers are in motion during every transition, so scrolling reads
 *     as one uninterrupted walk through the house, frame by frame, forward
 *     and backward with the wheel.
 *   - Soft snapping settles on each room's caption moment; scrolling is
 *     never hijacked.
 *
 * Fallbacks: the absolute stacking only applies via the `md:motion-safe:`
 * variants — on mobile and for reduced-motion users the scenes are ordinary
 * stacked full-screen sections in document flow, and every CTA stays
 * reachable. (True 360° look-around would require 360 captures or a
 * Matterport embed — this is the closest flat photography allows.)
 */

const FADE = 0.35; // crossfade length, in scene-units
const UNIT_SCROLL = 75; // vh of scroll per scene

export function CinematicHome() {
  const ref = useRef<HTMLDivElement>(null);
  const totalScenes = walkthroughScenes.length + 2;

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
        const n = scenes.length;

        // Soft snap to each room's caption moment (never the cut itself).
        const holdPoints = [0, ...scenes.map((_, i) => (i + 0.4) / n), 1];

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
          const last = i === n - 1;
          const img = scene.querySelector("[data-scene-img]");
          const text = scene.querySelector("[data-scene-text]");
          // Scene i is revealed while scene i-1 fades over [i-FADE, i], and
          // melts away over [i+1-FADE, i+1]. Its life on screen:
          const lifeStart = i === 0 ? 0 : i - FADE;
          const lifeEnd = last ? n : i + 1;

          // CONTINUOUS CAMERA PATH — a straight walk forward: pure push-in
          // toward the center of every room for the photo's entire life.
          // No lateral drift; the path through the house is a straight line.
          // (Base scale 1.06 leaves coverage margin for the mouse look-around
          // tilt below, so edges can never show.)
          if (img) {
            gsap.set(img, { transformOrigin: "50% 52%", transformPerspective: 1200 });
            tl.fromTo(
              img,
              { scale: 1.06 },
              { scale: 1.5, duration: lifeEnd - lifeStart },
              lifeStart,
            );
          }

          // ROOM HANDOFF — the top layer melts away (opacity + focus-pull
          // blur) revealing the next room already in motion beneath.
          if (!last) {
            tl.to(scene, { autoAlpha: 0, duration: FADE }, i + 1 - FADE);
            if (img) {
              tl.to(img, { filter: "blur(9px)", duration: FADE, ease: "power1.in" }, i + 1 - FADE);
            }
          }

          // CAPTIONS — rise in once the room is revealed, drift up and fade
          // before the handoff (their own speed = foreground parallax).
          if (text) {
            if (i > 0) {
              tl.fromTo(text, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.2 }, i + 0.08);
            }
            if (!last) {
              tl.to(text, { autoAlpha: 0, y: -70, duration: 0.18 }, i + 0.5);
            }
          }
        });

        // MOUSE LOOK-AROUND (the Matterport feel): moving the mouse rotates
        // the room around you in 3D — damped, like dragging a panorama —
        // while scroll independently walks you forward. Captions counter-move
        // slightly for depth. Pointer only; never affects touch or keyboard.
        const imgs = scenes
          .map((scene) => scene.querySelector<HTMLElement>("[data-scene-img]"))
          .filter((n): n is HTMLElement => Boolean(n));
        const texts = scenes
          .map((scene) => scene.querySelector<HTMLElement>("[data-scene-text]"))
          .filter((n): n is HTMLElement => Boolean(n));
        const lookY = imgs.map((n) => gsap.quickTo(n, "rotationY", { duration: 0.9, ease: "power2.out" }));
        const lookX = imgs.map((n) => gsap.quickTo(n, "rotationX", { duration: 0.9, ease: "power2.out" }));
        const textX = texts.map((n) => gsap.quickTo(n, "x", { duration: 1.1, ease: "power2.out" }));
        const onPointerMove = (e: PointerEvent) => {
          if (e.pointerType !== "mouse") return;
          const nx = e.clientX / window.innerWidth - 0.5; // -0.5 … 0.5
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
  }, []);

  const sceneClass =
    "relative flex h-[100svh] overflow-hidden bg-ink md:motion-safe:absolute md:motion-safe:inset-0 md:motion-safe:h-full";

  return (
    <div
      ref={ref}
      className="relative bg-ink md:motion-safe:h-[100svh] md:motion-safe:overflow-hidden"
    >
      {/* SCENE 1 — HERO (top layer; visible without JS) */}
      <section
        data-scene
        aria-labelledby="hero-heading"
        className={`${sceneClass} items-end`}
        style={{ zIndex: totalScenes }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            data-scene-img
            src={heroScene.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover will-change-transform"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/20" />
        </div>
        <div data-scene-text className="relative z-10 mx-auto w-full max-w-content px-6 pb-20 pt-32">
          <h1 id="hero-heading" className="max-w-3xl font-display text-display-xl font-medium leading-[1.05] text-soft-white">
            <span data-hero-line className="block">{heroScene.headlineTop}</span>
            <span data-hero-line className="block text-gold-light">{heroScene.headlineBottom}</span>
          </h1>
          <p data-hero-copy className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90">
            {heroScene.copy}
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
      </section>

      {/* SCENES 2–9 — THE WALKTHROUGH (each revealed beneath the last) */}
      {walkthroughScenes.map((scene, i) => (
        <section
          key={scene.image}
          data-scene
          className={`${sceneClass} items-end`}
          style={{ zIndex: totalScenes - (i + 1) }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              data-scene-img
              src={scene.image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover will-change-transform"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          </div>
          <div
            data-scene-text
            className={`relative z-10 mx-auto w-full max-w-content px-6 pb-20 ${
              scene.align === "right" ? "text-right" : ""
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              {String(i + 2).padStart(2, "0")} — {scene.kicker}
            </p>
            <p
              className={`mt-3 max-w-2xl font-display text-display-lg font-medium leading-tight text-soft-white text-balance ${
                scene.align === "right" ? "ml-auto" : ""
              }`}
            >
              {scene.line}
            </p>
          </div>
        </section>
      ))}

      {/* SCENE 10 — FINALE / CONVERSION (bottom layer) */}
      <section
        data-scene
        aria-labelledby="finale-heading"
        className={`${sceneClass} items-center`}
        style={{ zIndex: 1 }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            data-scene-img
            src={finaleScene.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover will-change-transform"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-ink/70" />
        </div>
        <div data-scene-text className="relative z-10 mx-auto w-full max-w-content px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">{finaleScene.kicker}</p>
          <h2 id="finale-heading" className="mx-auto mt-4 max-w-3xl font-display text-display-xl font-medium leading-tight text-soft-white text-balance">
            {finaleScene.line}
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
      </section>
    </div>
  );
}
