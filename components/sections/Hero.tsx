import { HeroIntro } from "@/components/animation/HeroIntro";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

/**
 * Homepage hero — layered reveal, subtle scroll-scrubbed background scale.
 * CTAs are rendered immediately and never gated behind animation.
 */
export function Hero() {
  return (
    <HeroIntro>
      <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-ink" aria-labelledby="hero-heading">
        {/* Background scene (approved Central Florida photography goes here) */}
        <div data-hero-bg className="absolute inset-0 will-change-transform">
          <PlaceholderImage
            label="Central Florida hero scene"
            className="h-full w-full"
            tone="charcoal"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        </div>

        <div data-hero-content className="relative z-10 mx-auto w-full max-w-content px-6 pb-24 pt-36">
          <h1 id="hero-heading" className="max-w-3xl font-display text-display-xl font-medium leading-[1.05] text-soft-white">
            <span data-hero-line className="block">
              Find Your Place
            </span>
            <span data-hero-line className="block text-gold-light">
              in Central Florida.
            </span>
          </h1>
          <p data-hero-copy className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            Whether you are buying, selling, relocating, or exploring your options, Bear Team
            provides the experience and local guidance to help you move forward.
          </p>
          <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-4">
            <SearchHomesLink variant="primary" />
            <ButtonLink href="/sell" variant="outline-light">
              Sell Your Property
            </ButtonLink>
          </div>
          <div data-hero-cta className="mt-5">
            <ButtonLink href="/home-value" variant="ghost" className="!text-cream/90 hover:!text-gold-light">
              Request a Home Value Consultation →
            </ButtonLink>
          </div>
        </div>

        {/* Scroll cue */}
        <div aria-hidden="true" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/50">
          <svg viewBox="0 0 24 24" className="h-6 w-6 motion-safe:animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14m0 0-5-5m5 5 5-5" />
          </svg>
        </div>
      </section>
    </HeroIntro>
  );
}
