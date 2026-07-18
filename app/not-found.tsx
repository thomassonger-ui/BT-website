import Link from "next/link";
import { ButtonLink, SearchHomesLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-ink">
      <div className="mx-auto max-w-content px-6 py-32 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-light">404</p>
        <h1 className="mt-4 font-display text-display-lg font-medium text-soft-white">
          This page has moved on.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-cream/75">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has a new address. Let&rsquo;s
          get you somewhere useful.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" variant="primary">
            Back to Home
          </ButtonLink>
          <SearchHomesLink variant="outline-light" />
          <ButtonLink href="/contact" variant="outline-light">
            Contact Bear Team
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-cream/60">
          Popular pages:{" "}
          <Link href="/buy" className="underline underline-offset-4 hover:text-gold-light">
            Buy
          </Link>
          {" · "}
          <Link href="/sell" className="underline underline-offset-4 hover:text-gold-light">
            Sell
          </Link>
          {" · "}
          <Link href="/communities" className="underline underline-offset-4 hover:text-gold-light">
            Communities
          </Link>
          {" · "}
          <Link href="/home-value" className="underline underline-offset-4 hover:text-gold-light">
            Home Value
          </Link>
        </p>
      </div>
    </section>
  );
}
