import { jsonLd } from "@/lib/structured-data";

/** Renders a JSON-LD script tag for structured data. */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: jsonLd(data) }}
    />
  );
}
