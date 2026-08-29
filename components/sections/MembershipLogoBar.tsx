import Image from "next/image";

/**
 * MEMBERSHIP LOGO BAR — sliding logo strip, LAST section of the homepage,
 * just above the dark footer (Tom, 8/28: quiet closing trust signal; earlier
 * spots — inside the dark band, then right below it — both rejected).
 * Cream background so it flows out of the light sections; no tile boxes. Pure-CSS marquee:
 * two identical halves, track slides -50% and loops seamlessly; pauses on
 * hover; prefers-reduced-motion gets a static centered row instead.
 * Contents approved by Tom (8/28): five memberships + the RealTrends
 * "The Thousand"/WSJ badge, rendered larger (documented ranking). D&B was
 * added then REMOVED per Tom (8/28 pm) - do not re-add without his say-so. NEVER add the
 * BBB "Accredited Business" seal unless the brokerage supplies its official
 * seal from BBB (no accreditation claim without it — Tom's rule); never add
 * HUD/VA/DBPR seals or media-network logos.
 */
type BarLogo = { src: string; alt: string; width: number; height: number; big?: boolean };

const MEMBERSHIP_LOGOS: BarLogo[] = [
  { src: "/logos/nar.png", alt: "National Association of REALTORS®", width: 484, height: 120 },
  { src: "/logos/florida-realtors.png", alt: "Florida Realtors®", width: 500, height: 120 },
  { src: "/logos/orra.png", alt: "Orlando Regional REALTOR® Association", width: 281, height: 116 },
  { src: "/logos/osceola-realtors.png", alt: "Osceola County Association of REALTORS®, Inc.", width: 394, height: 120 },
  { src: "/logos/stellar-mls.png", alt: "Stellar MLS", width: 320, height: 81 },
  { src: "/logos/realtrends-thousand.png", alt: 'RealTrends "The Thousand" — as advertised in The Wall Street Journal', width: 279, height: 160, big: true },
];

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden ? "true" : undefined}
      className={`flex shrink-0 items-center gap-20 pr-20${hidden ? " bt-logobar-dup" : ""}`}
    >
      {MEMBERSHIP_LOGOS.map((l) => (
        <li key={l.src} className="shrink-0">
          <Image
            src={l.src}
            alt={hidden ? "" : l.alt}
            width={l.width}
            height={l.height}
            className={l.big ? "h-16 w-auto md:h-20" : "h-10 w-auto md:h-11"}
          />
        </li>
      ))}
    </ul>
  );
}

export function MembershipLogoBar() {
  return (
    <section aria-label="Memberships and recognitions" className="overflow-hidden border-t border-ink/10 bg-cream py-10 md:py-12">
      <style>{`
        @keyframes bt-logobar-slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .bt-logobar-track { animation: bt-logobar-slide 35s linear infinite; }
        .bt-logobar-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .bt-logobar-track { animation: none; width: 100%; justify-content: center; }
          .bt-logobar-dup { display: none; }
        }
      `}</style>
      <div className="bt-logobar-track flex w-max items-center">
        <LogoRow />
        <LogoRow hidden />
      </div>
    </section>
  );
}
