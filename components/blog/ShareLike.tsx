"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

/**
 * Share + Like bar for blog articles.
 * Share: native share sheet where available, plus Facebook / X / LinkedIn
 * intent links and copy-link. Like: one tap per visit, counted via
 * /api/blog/like → blog-like Edge Function.
 */
export function ShareLike({ slug, title, initialLikes }: { slug: string; title: string; initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}/blog/${slug}`;

  async function like() {
    if (liked) return;
    setLiked(true);
    setLikes((n) => n + 1);
    try {
      const res = await fetch("/api/blog/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = (await res.json()) as { ok: boolean; likes?: number };
      if (data.ok && typeof data.likes === "number") setLikes(data.likes);
    } catch {
      /* keep optimistic count */
    }
  }

  async function share() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        /* fall through to copy */
      }
    }
    copyLink();
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  const shareTargets = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.3-.04-1.3-.13-2.5-.13-2.5 0-4.2 1.5-4.2 4.3v2.4H7.3V13.1h2.7V21h3.5Z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M17.5 3h3.1l-6.8 7.8L21.8 21h-6.3l-4.9-6.4L5 21H1.9l7.3-8.3L2.2 3h6.4l4.4 5.9L17.5 3Zm-1.1 16.1h1.7L7.7 4.7H5.9l10.5 14.4Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0H13v1.7h.05c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V21h-4v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21h-4V9Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-ink/10 bg-cream/40 p-4">
      <button
        type="button"
        onClick={like}
        aria-pressed={liked}
        className={`inline-flex min-h-[42px] items-center gap-2 rounded-full border-2 px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
          liked
            ? "border-gold bg-gold text-ink"
            : "border-teal-700 text-teal-800 hover:bg-teal-700 hover:text-soft-white"
        }`}
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-7.5-4.7-10-9.3C.4 8.6 2.3 5 5.7 5c2 0 3.4 1.1 4.3 2.6h4C14.9 6.1 16.3 5 18.3 5c3.4 0 5.3 3.6 3.7 6.7C19.5 16.3 12 21 12 21Z" transform="scale(0.92) translate(1,0.5)" />
        </svg>
        {liked ? "Liked" : "Like"} · {likes}
      </button>

      <span className="text-xs font-semibold uppercase tracking-wider text-muted">Share:</span>
      <button
        type="button"
        onClick={share}
        className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-ink/15 bg-soft-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-teal-700 hover:text-teal-800"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
          <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
        </svg>
        Share
      </button>
      {shareTargets.map((t) => (
        <a
          key={t.label}
          href={t.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${t.label}`}
          className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-ink/15 bg-soft-white text-charcoal transition-colors hover:border-teal-700 hover:text-teal-800"
        >
          {t.icon}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex min-h-[42px] items-center rounded-full border border-ink/15 bg-soft-white px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-teal-700 hover:text-teal-800"
      >
        {copied ? "Link copied ✓" : "Copy link"}
      </button>
    </div>
  );
}
