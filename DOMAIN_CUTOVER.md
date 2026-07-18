# Domain Cutover Plan — bearteam.com

**The existing BearTeam.com website remains operational and untouched until this plan is
completed and cutover is explicitly approved. No DNS change may be made automatically or
without written authorization.**

## Phase 1 — Build & verify on preview domain

1. Deploy to the Vercel preview/production domain (`bt-website-*.vercel.app`) with
   `NEXT_PUBLIC_SITE_URL` set accordingly.
2. Complete content verification: every `[VERIFY ...]` placeholder replaced with approved
   information; every `reviewNote` cleared (COMPLIANCE_REVIEW.md sections A–C).
3. Verify the external property-search URL: approved destination configured in
   `NEXT_PUBLIC_PROPERTY_SEARCH_URL`, tested from header, hero, pathways, property types,
   buy page, footer, and final CTA.
4. Complete brokerage and legal review (COMPLIANCE_REVIEW.md sections D–G) — sign-off recorded.
5. Complete form-delivery testing: all four forms submit to their production destinations;
   notifications received; error and success states verified.
6. Complete mobile and accessibility testing (TESTING_CHECKLIST.md).

## Phase 2 — Preserve search value

7. Export/record the current site's important URLs (crawl bearteam.com; export from Google
   Search Console: pages with impressions/backlinks).
8. Build the redirect map old URL → new URL. Add permanent (301/308) redirects in
   `next.config.ts` (`redirects()`), e.g.:

   ```ts
   async redirects() {
     return [
       { source: "/old-buyers-page", destination: "/buy", permanent: true },
       { source: "/old-sellers-page", destination: "/sell", permanent: true },
       // ...complete from the recorded URL inventory
     ];
   }
   ```

9. Re-deploy and test every redirect on the preview domain.

## Phase 3 — Cutover (only after approval)

10. Add `bearteam.com` and `www.bearteam.com` to the Vercel project (Settings → Domains).
11. Update DNS at the registrar exactly as Vercel instructs (A/ALIAS + CNAME). Keep prior DNS
    values recorded for rollback.
12. Verify SSL certificates are issued and valid.
13. Verify both `www` and non-`www` resolve, with one canonical (non-`www` → `www` or vice
    versa — decide once; Vercel handles the redirect).
14. Update `NEXT_PUBLIC_SITE_URL=https://www.bearteam.com`, redeploy (canonicals, sitemap, OG
    URLs, structured data all read from it).
15. Verify all four forms after cutover.
16. Verify external property-search links after cutover.

## Phase 4 — Post-launch

17. Submit the updated sitemap in Google Search Console (and Bing Webmaster Tools); verify the
    new property.
18. Monitor 404s and broken links (Search Console → Coverage; Vercel logs) for at least 30
    days; add redirects for any missed legacy URLs.
19. Keep the rollback path available (previous DNS records + old hosting) for an agreed window.

## Rollback

If a blocking issue appears post-cutover: restore prior DNS records (recorded in step 11) —
the old site remains hosted until the retention window closes.
