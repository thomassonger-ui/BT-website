import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { getPosts, formatPostDate } from "@/lib/blog";
import { compliance } from "@/config/compliance";

export const revalidate = 1800;

export const metadata: Metadata = buildMetadata({
  title: "Orlando Real Estate Blog | Market News for Buyers & Sellers",
  description:
    "Weekly answers to the questions Orlando buyers and sellers are asking right now — current mortgage rates, closing costs and title rules, market data, and practical strategy. Cited, current, and written for Central Florida.",
  path: "/blog",
});

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        eyebrow="The Bear Team blog"
        title="Your Questions, Answered With This Week's Data."
        intro="Every week we answer the questions Orlando buyers and sellers are actually asking — with current rates, real statistics, and sources you can check. No hype, no evergreen filler."
      >
        <ButtonLink href="#latest" variant="primary">
          Read the Latest
        </ButtonLink>
        <ButtonLink href="/home-value" variant="outline-light">
          See the Monthly Market Brief
        </ButtonLink>
      </PageHero>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <section id="latest" className="scroll-mt-24 bg-soft-white py-16 md:py-24" aria-labelledby="latest-heading">
        <div className="mx-auto max-w-content px-6">
          <SectionHeading
            eyebrow="Updated weekly"
            title="Latest Articles"
          />
          <h2 id="latest-heading" className="sr-only">
            Latest blog articles
          </h2>

          {posts.length === 0 ? (
            <p className="text-center text-sm text-muted">
              New articles are on the way — check back shortly, or call (407) 228-1112 with any
              question and a real person will answer it today.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col rounded-lg border border-ink/10 bg-cream/30 p-6 transition-shadow hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {formatPostDate(post.published_at)} · {post.read_minutes} min read
                  </p>
                  <h3 className="mt-3 font-display text-xl font-medium leading-snug text-ink">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="after:absolute after:inset-0 group-hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((t) => (
                      <span key={t} className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-medium text-teal-900">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-teal-800">
                    Read article → <span className="ml-2 text-xs font-normal text-muted">♥ {post.likes}</span>
                  </p>
                </article>
              ))}
            </div>
          )}

          <p className="mt-12 text-center text-xs italic leading-relaxed text-muted">
            Articles are for general education, not financial, legal, lending, or title advice.{" "}
            {compliance.brokerageRelationship}
          </p>
        </div>
      </section>
    </>
  );
}
