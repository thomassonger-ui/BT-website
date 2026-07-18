import Link from "next/link";
import { breadcrumbSchema } from "@/lib/structured-data";
import { JsonLd } from "./JsonLd";

export type Crumb = { name: string; path: string };

/** Breadcrumb navigation + BreadcrumbList structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink/5 bg-soft-white">
      <ol className="mx-auto flex max-w-content flex-wrap items-center gap-1 px-6 py-3 text-xs text-muted">
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="font-medium text-charcoal">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className="underline-offset-2 hover:text-teal-800 hover:underline">
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true" className="mx-1">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
      <JsonLd data={breadcrumbSchema(all)} />
    </nav>
  );
}
