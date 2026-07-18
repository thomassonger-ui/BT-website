import { cn } from "@/lib/utils/cn";

/**
 * Bear Team "BT" mark — vector recreation of the brand logo (framed square
 * with BT), drawn in currentColor so it adapts to any surface.
 * Replace with the official vector in public/brand if one is supplied.
 */
export function BTMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("h-9 w-9", className)}
      fill="none"
    >
      <rect x="6" y="6" width="88" height="88" stroke="currentColor" strokeWidth="7" />
      <text
        x="50"
        y="54"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="var(--font-sans), system-ui, sans-serif"
        fontWeight="800"
        fontSize="46"
        letterSpacing="-1"
      >
        BT
      </text>
    </svg>
  );
}
