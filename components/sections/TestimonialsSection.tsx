import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";

/**
 * Section 11 — testimonials.
 * Unverified entries render with an explicit "Placeholder" label so drafted
 * structure can never be mistaken for real reviews. Replace with verified
 * client reviews before launch (content/testimonials.ts).
 */
export function TestimonialsSection() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Client experiences" title="What Clients Say" />
        <h2 id="testimonials-heading" className="sr-only">
          What Clients Say
        </h2>
        <Reveal stagger className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="relative flex flex-col rounded-lg border border-ink/10 bg-soft-white p-6">
              {!t.verified ? (
                <p className="mb-3 inline-block self-start rounded bg-gold/15 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-gold">
                  Placeholder — pending verified review
                </p>
              ) : null}
              <blockquote className="flex-1 text-sm italic leading-relaxed text-charcoal-soft">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-ink/10 pt-4 text-xs text-muted">
                <span className="block font-semibold text-ink">{t.clientName}</span>
                <span>
                  {t.clientType}
                  {t.propertyType ? ` · ${t.propertyType}` : ""}
                </span>
                <span className="block">
                  {t.source} · {t.date}
                </span>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
