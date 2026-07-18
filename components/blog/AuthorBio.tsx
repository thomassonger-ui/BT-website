import { BTMark } from "@/components/ui/Logo";

/** Author bio box shown at the end of every blog article. */
export function AuthorBio() {
  return (
    <aside className="flex gap-4 rounded-lg border border-ink/10 bg-cream/40 p-6" aria-label="About the author">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink">
        <BTMark className="h-8 w-8 text-gold-light" />
      </div>
      <div>
        <p className="text-sm font-semibold text-ink">Bear Team Research Desk</p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          The Bear Team Research Desk tracks Central Florida housing data, mortgage rates, and
          closing-cost rules weekly, drawing on Stellar MLS, Freddie Mac, Florida Realtors, and
          public records. Every article is reviewed by{" "}
          <span className="font-medium text-charcoal">Bethanne Baer, Broker/Owner</span> — 40+
          years in Central Florida real estate, 7,000+ homes sold. Questions about anything we
          publish? Call{" "}
          <a href="tel:4072281112" className="font-semibold text-teal-800 underline-offset-2 hover:underline">
            (407) 228-1112
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
