# Launch Checklist

Work through in order. Do not launch with any unchecked item.

## 1. Content & verification

- [ ] All `[VERIFY ...]` placeholders replaced with approved business information
- [ ] Proof-point figures (40+ yrs / 7,000+ homes / $4B+) approved in writing
- [ ] Company history/philosophy copy approved
- [ ] Team profiles verified (`verified: true`) with approved headshots
- [ ] Testimonials replaced with verified reviews (`verified: true`)
- [ ] Community facts (amenities, transportation) verified
- [ ] All placeholder imagery replaced with approved, licensed photography + alt text
- [ ] Resource pages professionally reviewed where flagged; review dates set

## 2. Configuration

- [ ] `NEXT_PUBLIC_PROPERTY_SEARCH_URL` set to the approved external search destination
- [ ] Scheduling, maps, Google Business, and social URLs set
- [ ] Phone + email env vars set; click-to-call verified on a real phone
- [ ] Form webhook variables set for all four forms; `LEAD_NOTIFICATION_EMAIL` set
- [ ] `NEXT_PUBLIC_SITE_URL` set to the final production domain

## 3. Compliance (see COMPLIANCE_REVIEW.md)

- [ ] Legal counsel sign-off on privacy, terms, disclosures, fair housing, accessibility pages
- [ ] Broker sign-off on all consumer-facing copy
- [ ] Consent language (TCPA / CAN-SPAM) approved
- [ ] Equal Housing Opportunity mark present in footer

## 4. Quality gates (see TESTING_CHECKLIST.md)

- [ ] `npm run typecheck` and `npm run build` pass clean
- [ ] Full testing checklist executed on the preview deployment
- [ ] Lighthouse: performance ~90+, accessibility 95+, no CLS regressions from final imagery
- [ ] Forms tested end-to-end with real delivery destinations

## 5. Cutover (see DOMAIN_CUTOVER.md)

- [ ] Legacy URL inventory exported; redirect map implemented and tested
- [ ] Written approval to connect bearteam.com
- [ ] DNS updated per Vercel; SSL verified; www + non-www verified
- [ ] Post-cutover form + external-link verification complete
- [ ] Sitemap submitted; 404 monitoring active

## 6. Remaining known work at handoff

- [ ] Replace PlaceholderImage components with approved photography (site-wide)
- [ ] Select analytics tooling (none installed) and revisit cookie-consent decision
- [ ] Connect CRM/email delivery for forms (mock mode until then)
- [ ] Decide canonical host (www vs non-www)
