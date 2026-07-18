"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap, ScrollTrigger, DESKTOP_MQ, MOBILE_MQ } from "@/lib/animations/gsap";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { heroScene, walkthroughScenes, finaleScene } from "@/content/home-scenes";
import { siteConfig } from "@/config/site";

/**
 * Cinematic scroll-driven homepage.
 *
 * Ten full-screen photo scenes walk the visitor through a home. On desktop
 * (motion allowed) each scene pins while its photo pushes in toward the
 * center of the frame — scrolling moves you closer, like walking toward the
 * front door — then the next photo dissolves in over it (scrubbed crossfade),
 * carrying you into the next room. Video-like, wheel-driven, reversible.
 *
 * Degradation is built in: with JavaScript off, reduced motion on, or on
 * mobile, the scenes are ordinary stacked full-screen sections in document
 * flow (no pinning, no scrubbing) and every CTA stays reachable. Native
 * scrolling is never hijacked; all animation reverses when scrolling up.
 */
export function CinematicHome() {
  const ref = useRef<HTMLDivElement>(null);

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

      // Desktop: pinned cut-through sequence, scroll-scrubbed.
      mm.add(DESKTOP_MQ, () => {
        const scenes = gsap.utils.toArray<HTMLElement>("[data-scene]", el);

        // Gentle snap: after the wheel settles, ease to the nearest scene cut.
        // Directional + short, so free scrolling is never hijacked.
        ScrollTrigger.create({
          trigger: el,
          start: "top top",
          end: "bottom bottom",
          snap: {
            snapTo: 1 / (scenes.length - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power1.inOut",
            directional: true,
          },
        });
        scenes.forEach((scene, i) => {
          // Pin every scene except the last so the next one cuts up over it.
          if (i < scenes.length - 1) {
            ScrollTrigger.create({
              trigger: scene,
              start: "top top",
              end: "bottom top",
              pin: true,
              pinSpacing: false,
              anticipatePin: 1,
            });
          }

          // WALK-IN DOLLY: while a scene holds the screen (pinned), its photo
          // pushes in toward the center of the frame — scrubbed 1:1 with the
          // wheel, so scrolling literally moves you closer to the front door /
          // into the room. Fully reversible when scrolling back.
          const img = scene.querySelector("[data-scene-img]");
          if (img) {
            gsap.set(img, { transformOrigin: "50% 52%" });
            gsap.fromTo(
              img,
              { scale: 1 },
              {
                scale: 1.45,
                ease: "none",
                scrollTrigger: { trigger: scene, start: "top top", end: "bottom top", scrub: 0.4 },
              },
            );
          }

          // DISSOLVE: the next scene fades in over the pinned one as you keep
          // walking — a scrubbed crossfade, so each photo melts into the next
          // room while the previous is still pushing forward underneath.
          if (i > 0) {
            gsap.fromTo(
              scene,
              { autoAlpha: 0 },
              {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: { trigger: scene, start: "top 90%", end: "top 10%", scrub: 0.4 },
              },
            );
          }

          // Scene text slides in as the scene takes the screen…
          const text = scene.querySelector("[data-scene-text]");
          if (text && i > 0) {
            gsap.fromTo(
              text,
              { autoAlpha: 0, y: 56 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: { trigger: scene, start: "top 55%", toggleActions: "play none none reverse" },
              },
            );
          }
          // …then drifts upward and dissolves at its own speed while you walk
          // deeper into the photo (foreground/background parallax).
          if (text && i < scenes.length - 1) {
            gsap.to(text, {
              y: -90,
              autoAlpha: 0,
              ease: "none",
              scrollTrigger: { trigger: scene, start: "bottom bottom", end: "bottom top", scrub: 0.5 },
            });
          }
        });
      });

      // Mobile: no pinning — natural flow with light text reveals only.
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
      // Reduced motion: no tweens created — plain stacked sections.
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="bg-ink">
      {/* SCENE 1 — HERO */}
      <section
        data-scene
        aria-labelledby="hero-heading"
        className="relative flex h-[100svh] items-end overflow-hidden bg-ink"
        style={{ zIndex: 1 }}
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
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/20" />
        </div>
        <div data-scene-text className="relative z-10 mx-auto w-full max-w-content px-6 pb-24 pt-32">
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
          <p data-hero-cta className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-cream/60">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 motion-safe:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5v14m0 0-5-5m5 5 5-5" />
            </svg>
            Scroll to walk through
          </p>
        </div>
      </section>

      {/* SCENES 2–9 — THE WALKTHROUGH */}
      {walkthroughScenes.map((scene, i) => (
        <section
          key={scene.image}
          data-scene
          className="relative flex h-[100svh] items-end overflow-hidden bg-ink"
          style={{ zIndex: i + 2 }}
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
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
          </div>
          <div data-scene-text className="relative z-10 mx-auto w-full max-w-content px-6 pb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">
              {String(i + 2).padStart(2, "0")} — {scene.kicker}
            </p>
            <p className="mt-3 max-w-2xl font-display text-display-lg font-medium leading-tight text-soft-white text-balance">
              {scene.line}
            </p>
          </div>
        </section>
      ))}

      {/* SCENE 10 — FINALE / CONVERSION */}
      <section
        data-scene
        aria-labelledby="finale-heading"
        className="relative flex h-[100svh] items-center overflow-hidden bg-ink"
        style={{ zIndex: walkthroughScenes.length + 2 }}
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
