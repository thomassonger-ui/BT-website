# BT-website — Bear Team Real Estate Public Website

Modern public website for **Bear Team Real Estate LLC** (Central Florida): buyers, sellers,
homeowners, investors, and relocation clients. Replaces the previous bearteam.com site after
approval and domain cutover.

**This site intentionally contains no IDX, MLS, listing feeds, property-search databases, or
mock listings.** Property search is provided exclusively through a configurable external link
(`config/external-links.ts`). This is also **not** a recruiting site — no agent-recruiting
content may be added.

## Stack

- Next.js 15 (App Router) + TypeScript — *15.5.20 chosen as the current patched stable release
  (15.1.x had CVE-2025-66478)*
- Tailwind CSS 3 with documented design tokens (`tailwind.config.ts`)
- GSAP + ScrollTrigger for scroll-driven storytelling (reduced-motion safe; no scroll hijacking;
  Lenis deliberately excluded — see `lib/animations/gsap.ts`)
- Zod for client- and server-side form validation
- Typed content files in `/content` (CMS-ready architecture)

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in values; never commit .env.local
npm run dev                  # http://localhost:3000
```

Production checks:

```bash
npm run typecheck
npm run build
npm run start
```

## Project map

| Path | Purpose |
| --- | --- |
| `app/` | Routes (18 public routes, 4 form API handlers, sitemap, robots, OG image) |
| `components/` | `layout/`, `sections/` (homepage), `animation/` (GSAP), `forms/`, `ui/` |
| `config/` | `site.ts` (verified business info), `external-links.ts`, `navigation.ts`, `compliance.ts` |
| `content/` | All editable copy: communities, resources, team, testimonials, FAQs, proof points |
| `lib/` | forms (zod + lead handler), seo, structured-data, animations, utils |
| `public/` | brand / images / icons / social assets (approved assets only) |

## Editing content (non-developers)

See **CONTENT_GUIDE.md**. Short version: business facts live in `config/site.ts`, the external
property-search URL comes from `NEXT_PUBLIC_PROPERTY_SEARCH_URL`, and every page's copy lives in
`content/*.ts` files with `[VERIFY ...]` placeholders where information is unconfirmed.

## External property-search link

Set `NEXT_PUBLIC_PROPERTY_SEARCH_URL` to the approved external search platform. Until then,
every "Search Homes" CTA renders a clearly-labeled pending state that routes to `/contact`.
Do not point this at an unapproved destination. Details: CONTENT_GUIDE.md → "External links".

## Compliance review

**This website must not be represented as legally compliant until it passes qualified review.**
Every claim, placeholder, disclosure, and consent string requiring approval is inventoried in
**COMPLIANCE_REVIEW.md**.

## GitHub setup (new repository)

```bash
git init
git branch -M main
git add .
git commit -m "Initial build of Bear Team public website"
git remote add origin <NEW_GITHUB_REPOSITORY_URL>
git push -u origin main
```

`.gitignore` excludes `.env.local` and all secrets — never commit credentials.

## Deployment

- **DEPLOYMENT.md** — Vercel project setup, environment variables (Preview + Production), form
  integration, preview/production flow
- **DOMAIN_CUTOVER.md** — safe transition of `bearteam.com` (no DNS changes without explicit
  authorization; existing site stays live until approved cutover)
- **LAUNCH_CHECKLIST.md** / **TESTING_CHECKLIST.md** — pre-launch verification
