# Content Guide

How to edit this website without touching components. Everything a non-developer needs to
update lives in `config/` and `content/`.

## Where things live

| To change… | Edit… |
| --- | --- |
| Phone, email, address, license, broker, hours | `config/site.ts` (or env vars — see below) |
| External links (property search, scheduling, social) | `.env` values read by `config/external-links.ts` |
| Navigation items | `config/navigation.ts` |
| Legal/disclaimer language | `config/compliance.ts` |
| Homepage hero & section copy | `components/sections/*` (copy strings at top) + `content/company.ts` |
| Buyer/seller process steps | `content/company.ts` |
| Experience proof points (40+ yrs, 7,000+ homes, $4B+) | `content/proof-points.ts` |
| Property-type cards | `content/property-types.ts` |
| Communities | `content/communities.ts` |
| Team profiles | `content/team.ts` |
| Resources / guides | `content/resources.ts` |
| FAQs | `content/faqs.ts` |
| Testimonials | `content/testimonials.ts` |

After editing, run `npm run typecheck` (or just `npm run build`) — the typed content files
catch structural mistakes immediately.

## Placeholders

Anything wrapped in `[VERIFY ...]` or `[INSERT ...]` is intentionally unverified. Replace only
with information confirmed by Bear Team. The site renders these placeholders visibly so nothing
unverified can silently look final. `[REVIEW: ...]` notes flag copy needing professional review.

## Verified-only rules (do not break these)

1. **No fabricated statistics, awards, rankings, reviews, or team members.** Every proof point
   carries a `reviewNote` until approved.
2. **Testimonials** must have `verified: true` plus name, source, and date approved by Bear
   Team. Unverified entries render with a visible "Placeholder" badge.
3. **Team profiles** must have `verified: true` before the pending-verification badge disappears.
4. **No listings content, ever**: no prices, MLS numbers, statuses, addresses, days-on-market,
   or anything implying live inventory. Property-type and community content is editorial.

## Fair Housing language rules (communities)

Describe **property characteristics, amenities, transportation, architecture, geography, and
verified public features**. Never describe who a community is "for."

Prohibited: "perfect for families", "safe", "exclusive", "ideal for young professionals",
"best for retirees", religious characterizations, "family-friendly", prestige based on
residents, anything referencing demographics or protected classes, school ratings, crime
ratings. When in doubt, describe the buildings, not the people.

## External links

All external destinations come from environment variables (see `.env.example`):

- `NEXT_PUBLIC_PROPERTY_SEARCH_URL` — the **only** property-search destination. Every "Search
  Homes" button site-wide reads it. Until set, buttons show a pending state routing to /contact.
  It may later point to an approved third-party search site, a brokerage-provided search page,
  or another authorized platform. **Do not invent a destination.**
- `NEXT_PUBLIC_SCHEDULING_URL`, social URLs, `NEXT_PUBLIC_GOOGLE_MAPS_URL` — optional; UI
  renders labeled placeholders until provided.

## Replacing images

Current imagery is a branded placeholder component (`components/ui/PlaceholderImage.tsx`) that
visibly says "replace with approved photo."

1. Put approved, licensed photos in `public/images/` (communities), `public/brand/` (logo),
   `public/social/` (OG/social).
2. Swap the `PlaceholderImage` usage for `next/image` with meaningful `alt` text (decorative
   images get `alt=""`), `fill` or explicit dimensions, and `sizes` for responsive loading.
3. After adding large hero images, re-test Core Web Vitals (TESTING_CHECKLIST.md).

## Design tokens

Defined in `tailwind.config.ts` and documented pairings are WCAG 2.2 AA:

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#14171A` | Near-black backgrounds, headings |
| `charcoal` | `#23282D` | Deep charcoal bands, body headings |
| `cream` | `#F6F1E7` | Warm section backgrounds |
| `soft-white` | `#FDFCF8` | Page background |
| `teal-700` | `#1E6E68` | Primary actions, links |
| `muted` | `#5C6670` | Secondary text |
| `gold` | `#B08D3E` | Restrained accent (eyebrows, markers) |

Typography: Playfair Display (`font-display`) for editorial headlines, Inter (`font-sans`) for
UI/body — both framework-managed and self-hosted via `next/font`. Responsive sizes use
`clamp()` (`text-display-*`). Replace with verified Bear Team brand fonts/colors when supplied.

## Motion

GSAP ScrollTrigger drives: hero reveal + scrubbed background scale, staggered pathway/card
reveals, the pinned experience stats (desktop only), and the process timelines. Rules encoded in
`lib/animations/gsap.ts` and the animation components: native scrolling is never hijacked, all
animation is reversible, mobile gets shorter/simpler motion, and `prefers-reduced-motion` users
get everything in normal document flow. Lenis is deliberately not used. Don't add pinning to
forms or legal pages.
