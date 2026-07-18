"use client";

import { useEffect } from "react";
import { siteConfig } from "@/config/site";

/** Root error boundary. */
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center bg-soft-white">
      <div className="mx-auto max-w-xl px-6 py-32 text-center">
        <h1 className="font-display text-display-md font-medium text-ink">
          Something went wrong.
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          An unexpected error occurred while loading this page. You can try again, or reach us
          directly at{" "}
          <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-teal-800 underline underline-offset-2">
            {siteConfig.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-soft-white hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
