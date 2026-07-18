import { ProcessTimeline } from "@/components/animation/ProcessTimeline";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buyerProcess, sellerProcess } from "@/content/company";

/** Section 5 — buyer process (scroll-driven timeline, readable without animation). */
export function BuyerProcessSection() {
  return (
    <section className="bg-soft-white py-20 md:py-28" aria-labelledby="buyer-process-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="For buyers"
          title="A Clearer Way to Buy."
          intro="Ten defined stages — so you always know where you are and what comes next."
        />
        <h2 id="buyer-process-heading" className="sr-only">
          A Clearer Way to Buy
        </h2>
        <ProcessTimeline steps={[...buyerProcess]} tone="dark" />
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/buy" variant="primary">
            Plan Your Home Purchase
          </ButtonLink>
          <SearchHomesLink variant="outline" />
        </div>
      </div>
    </section>
  );
}

/** Section 6 — seller process (progressive sequence on a dark band). */
export function SellerProcessSection() {
  return (
    <section className="bg-charcoal py-20 md:py-28" aria-labelledby="seller-process-heading">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="For sellers"
          title="From Market Position to Closing."
          intro="Eleven stages, managed deliberately — pricing, preparation, marketing, negotiation, and coordination through closing day."
          tone="light"
        />
        <h2 id="seller-process-heading" className="sr-only">
          From Market Position to Closing
        </h2>
        <ProcessTimeline steps={[...sellerProcess]} tone="light" />
        <div className="mt-14 text-center">
          <ButtonLink href="/sell" variant="primary">
            Request a Selling Consultation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
