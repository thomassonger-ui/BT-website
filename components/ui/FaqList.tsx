import type { Faq } from "@/types/content";

/** Accessible FAQ accordion using native disclosure semantics. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-ink/10 rounded-lg border border-ink/10 bg-soft-white">
      {faqs.map((faq) => (
        <details key={faq.question} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
            {faq.question}
            <svg
              aria-hidden="true"
              viewBox="0 0 12 8"
              className="h-2.5 w-3.5 shrink-0 transition-transform group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m1 1 5 5 5-5" />
            </svg>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
