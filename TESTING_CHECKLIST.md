# Testing Checklist

Run on every release candidate (local + Vercel preview).

## Build & types

- [ ] `npm run typecheck` — zero errors
- [ ] `npm run build` — zero errors/warnings that matter; all routes compile
- [ ] `npm run start` — production server boots; no hydration errors in console

## Routes (all must return 200 and render)

`/`, `/buy`, `/sell`, `/home-value`, `/communities`, `/communities/orlando` (+ all 9 slugs),
`/relocation`, `/about`, `/team`, `/team/broker`, `/resources`, `/resources/buyer-guide`
(+ all 13 slugs), `/contact`, `/privacy`, `/terms`, `/accessibility`, `/fair-housing`,
`/disclosures`, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, and a nonsense URL → custom
404.

## Navigation

- [ ] Desktop: all header items navigate; About dropdown opens/closes with mouse, keyboard
      (Enter/Escape), and click-outside; active page indicated
- [ ] Header transparent at top, solid after scroll
- [ ] Mobile: menu opens/closes, Escape closes, body scroll locks, all links work,
      click-to-call button works
- [ ] "Search Homes" (header, hero, pathways, property types, buy page, footer, final CTA) all
      use the configured external URL and open in a new tab with the external indicator —
      or render the labeled pending state when unconfigured

## Forms (contact, buyer, seller, valuation)

- [ ] Submit empty → error summary appears, focus moves to it, links jump to fields
- [ ] Field-level errors announced (aria-describedby); invalid email/ZIP/phone caught
- [ ] Consent required; unchecked blocks submission with message
- [ ] Valid submit → success state (mock mode logs server-side)
- [ ] Server validation: POST invalid JSON to each `/api/*` route → 4xx JSON, no crash
- [ ] Honeypot: filled `company` field → success response, no delivery

## Accessibility (WCAG 2.2 AA)

- [ ] Keyboard-only pass on every template: logical focus order, visible focus, no traps,
      skip link works
- [ ] Screen reader pass (VoiceOver/NVDA): headings hierarchical, landmarks present, forms
      labeled, external links announced, FAQ disclosures announced
- [ ] Reduced motion (OS setting): no pinning/scrubbing/parallax; all sections in normal flow;
      every CTA and content block present
- [ ] Contrast spot-check on all token pairings; no text under 4.5:1 (normal) / 3:1 (large)
- [ ] No flashing content; no information conveyed only by animation

## Scroll behavior

- [ ] Scroll down AND back up through the homepage: animations reverse cleanly; no jumps
- [ ] Pinned experience section: pins on desktop, never on mobile; releases correctly both
      directions
- [ ] Anchor links (`#buyer-inquiry`, `#seller-inquiry`, `#community-inquiry`) land correctly
- [ ] Keyboard scrolling (space, PgDn/PgUp, arrows) and touch scrolling unaffected
- [ ] No horizontal overflow at 320px, 375px, 768px, 1024px, 1440px, 1920px
- [ ] Navigating away mid-animation then back: no duplicate triggers, no console errors
      (context cleanup)

## Layout

- [ ] Desktop, tablet (768px), mobile (375px) pass on every template
- [ ] Tap targets ≥ 44px on mobile; forms comfortable to complete on a phone
- [ ] Images (once real) have correct aspect ratios — no CLS

## SEO & metadata

- [ ] Unique title + description on every page (view source)
- [ ] Canonical URLs correct; OG image renders (test a share/debugger)
- [ ] Structured data validates (Rich Results test): RealEstateAgent, BreadcrumbList, FAQPage
      (only on /buy and /sell), Article (resources) — and NO listing/product schema anywhere
- [ ] `/sitemap.xml` lists all routes; `/robots.txt` correct

## Security & integrity

- [ ] No server-only env values in browser bundle: search `.next/static` for webhook/API-key
      values → zero hits
- [ ] `git log --all` contains no secrets; `.env.local` untracked
- [ ] No console errors on any route
- [ ] Confirm absent: IDX/MLS/listing-feed code, listing APIs, mock listings, property-search
      forms, saved-search/favorites features, recruiting content (`grep -ri "idx\|mls" app/
      components/ lib/ config/ content/` → only prohibition comments)

## Vercel compatibility

- [ ] Preview deployment builds and serves all routes
- [ ] `/opengraph-image` renders on the deployed environment
- [ ] API routes respond in the deployed environment (mock mode OK)
