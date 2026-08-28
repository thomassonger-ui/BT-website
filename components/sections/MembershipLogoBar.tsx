import Image from "next/image";

/**
 * MEMBERSHIP LOGO BAR — white sliding strip mounted directly below the dark
 * CredentialsBand (Tom, 2026-08-28: logos on a white bar in their own
 * section, never inside the dark band, no tile boxes). Pure-CSS marquee:
 * two identical halves, track slides -50% and loops seamlessly; pauses on
 * hover; prefers-reduced-motion gets a static centered row instead.
 * ONLY the five approved memberships — never add BBB, HUD, D&B, USAA, or
 * media logos here (held/rejected per Tom's compliance review).
 */
const MEMBERSHIP_LOGOS = [
  { src: "/logos/nar.png", alt: "National Association of REALTORS®", width: 484, height: 120 },
  { src: "/logos/florida-realtors.png", alt: "Florida Realtors®", width: 500, height: 120 },
  { src: "/logos/orra.png", alt: "Orlando Regional REALTOR® Association", width: 281, height: 116 },
  { src: "/logos/osceola-realtors.png", alt: "Osceola County Association of REALTORS®, Inc.", width: 394, height: 120 },
  { src: "/logos/stellar-mls.png", alt: "Stellar MLS", width: 320, height: 81 },
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
            className="h-10 w-auto md:h-11"
          />
        </li>
      ))}
    </ul>
  );
}

export function MembershipLogoBar() {
  return (
    <section aria-label="Professional membership organizations" className="overflow-hidden bg-white py-8 md:py-10">
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
