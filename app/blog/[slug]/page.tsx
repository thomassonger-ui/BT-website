import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { ShareLike } from "@/components/blog/ShareLike";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { getPost, getPosts, formatPostDate } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import { compliance } from "@/config/compliance";

export const revalidate = 1800;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return buildMetadata({ title: "Article Not Found", description: "", path: "/blog" });
  return buildMetadata({
    title: `${post.title} | Bear Team Blog`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogTitle: post.title,
  });
}

/** Article body typography — styles the rendered markdown. */
const proseClasses = [
  "leading-relaxed text-charcoal-soft",
  "[&_p]:mt-5 [&_p]:text-[15px] [&_p]:leading-[1.8]",
  "[&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-medium [&_h2]:text-ink",
  "[&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-ink",
  "[&_a]:font-medium [&_a]:text-teal-800 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-teal-600",
  "[&_strong]:font-semibold [&_strong]:text-ink",
  "[&_em]:italic",
  "[&_ul]:mt-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-2",
  "[&_ol]:mt-5 [&_ol]:list-decimal [&_ol]:pl-6",
  "[&_blockquote]:mt-5 [&_blockquote]:border-l-4 [&_blockquote]:border-gold [&_blockquote]:pl-4 [&_blockquote]:italic",
].join(" ");

export default async function BlogArticlePage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  // The page renders the title itself — strip a duplicate leading H1 if the body has one.
  const body = post.content_md.replace(/^\s*#\s+[^\n]+\n+/, "");
  const html = await marked.parse(body, { async: true });
  const related = (await getPosts()).filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    author: { "@type": "Organization", name: "Bear Team Research Desk" },
    publisher: {
      "@type": "RealEstateAgent",
      name: siteConfig.legalName,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2300 S Crystal Lake Dr",
        addressLocality: "Orlando",
        addressRegion: "FL",
        postalCode: "32806",
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      {/* Article header */}
      <section className="bg-ink pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            The Bear Team blog · {formatPostDate(post.published_at)}
          </p>
          <h1 className="mt-4 font-display text-display-md font-medium leading-tight text-soft-white md:text-display-lg">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-cream/70">
            By {post.author} · {post.read_minutes} min read
          </p>
        </div>
      </section>
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <article className="bg-soft-white py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Body */}
          <div className={proseClasses} dangerouslySetInnerHTML={{ __html: html }} />

          {/* Hashtags */}
          <div className="mt-10 flex flex-wrap gap-2" aria-label="Article topics">
            {post.tags.map((t) => (
              <span key={t} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-900">
                #{t}
              </span>
            ))}
          </div>

          {/* Share + Like */}
          <div className="mt-8">
            <ShareLike slug={post.slug} title={post.title} initialLikes={post.likes} />
          </div>

          {/* Sources */}
          {post.sources.length > 0 ? (
            <section className="mt-10" aria-labelledby="sources-heading">
              <h2 id="sources-heading" className="font-display text-lg font-medium text-ink">
                Sources
              </h2>
              <ul className="mt-3 space-y-1.5">
                {post.sources.map((s) => (
                  <li key={s.url} className="text-sm text-muted">
                    <a
                      href={s.url}
                      target={s.url.startsWith("/") ? undefined : "_blank"}
                      rel={s.url.startsWith("/") ? undefined : "noopener noreferrer"}
                      className="text-teal-800 underline underline-offset-2 hover:text-teal-600"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {/* Author bio */}
          <div className="mt-10">
            <AuthorBio />
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-lg bg-charcoal p-8 text-center">
            <p className="font-display text-xl font-medium text-soft-white">
              Have a question this article didn&rsquo;t answer?
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-cream/70">
              Ask Scout™ anything, or book 30 free minutes with Bethanne Baer — Broker/Owner, 40+
              years in Central Florida.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/search" variant="primary">
                Start a Home Search
              </ButtonLink>
              <ButtonLink href="/home-value" variant="outline-light">
                Ask Scout™
              </ButtonLink>
            </div>
          </div>

          <p className="mt-8 text-xs italic leading-relaxed text-muted">
            {compliance.brokerageRelationship} Equal Housing Opportunity.
          </p>
        </div>
      </article>

      {/* More articles */}
      {related.length > 0 ? (
        <section className="bg-cream py-12 md:py-16" aria-labelledby="more-articles-heading">
          <div className="mx-auto max-w-content px-6">
            <h2 id="more-articles-heading" className="font-display text-2xl font-medium text-ink">
              More From the Blog
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <article key={p.slug} className="group relative rounded-lg border border-ink/10 bg-soft-white p-5 transition-shadow hover:shadow-md">
                  <p className="text-xs text-muted">
                    {formatPostDate(p.published_at)} · {p.read_minutes} min read
                  </p>
                  <h3 className="mt-2 font-display text-lg font-medium leading-snug text-ink">
                    <Link href={`/blog/${p.slug}`} className="after:absolute after:inset-0 group-hover:underline">
                      {p.title}
                    </Link>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <JsonLd data={articleLd} />
    </>
  );
}
