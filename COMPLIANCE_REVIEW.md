# Compliance Review — Required Before Launch

**Status: NOT REVIEWED. This website must not be represented as legally compliant until a
qualified Florida real estate attorney and the broker complete this review.**

## A. Business facts to verify (config/site.ts)

- [ ] Brokerage legal name (`legalName`)
- [ ] Brokerage license number (`brokerageLicense`) — verify with Florida DBPR
- [ ] Broker name (`brokerName`)
- [ ] Office street address + ZIP
- [ ] Telephone number (env: `NEXT_PUBLIC_PHONE_NUMBER`)
- [ ] General email (env: `NEXT_PUBLIC_GENERAL_EMAIL`)
- [ ] Office hours
- [ ] Accessibility contact · Consumer complaint contact · Privacy contact
- [ ] Service-area list

## B. Claims requiring approval (content/proof-points.ts, about page)

- [ ] "More than 40 years of real estate experience"
- [ ] "More than 7,000 homes sold"
- [ ] "More than $4 billion in career real estate volume"
- [ ] Company history statements in `content/company.ts` (marked `[REVIEW ...]`)

No other statistics, awards, rankings, review counts, or market-share claims exist in the
build; none may be added without verification.

## C. Testimonials & team

- [ ] Replace all placeholder testimonials with verified reviews (name, source, date approved);
      set `verified: true` (content/testimonials.ts)
- [ ] Replace placeholder team profiles with verified names, titles, bios, licenses, headshots;
      set `verified: true` (content/team.ts)

## D. Legal pages (structural drafts — counsel must finalize)

- [ ] /privacy — data collection, sharing, cookies, CCPA/consumer-rights applicability
- [ ] /terms — complete terms of use
- [ ] /accessibility — statement + consider independent audit
- [ ] /fair-housing — statement + complaint pathway + any required state notices
- [ ] /disclosures — brokerage relationships (Ch. 475 F.S.), affiliated-business (RESPA), all
      disclaimers

## E. Consent & communications (config/compliance.ts)

- [ ] Telephone/text consent language on all four forms (TCPA)
- [ ] Email-marketing consent (CAN-SPAM)
- [ ] Cookie consent banner decision (none needed in initial build — no marketing cookies set;
      revisit when analytics are added)

## F. Disclaimers in place (verify wording)

- [ ] Equal Housing Opportunity mark + statement (footer, about, fair-housing)
- [ ] Brokerage-relationship disclosure (footer + forms)
- [ ] Home-value consultation disclaimer — "not an appraisal / no brokerage relationship"
      (home-value section, /home-value, valuation + seller forms)
- [ ] Market-data disclaimer (community pages, resources)
- [ ] Third-party property-search disclaimer (footer, /terms, /disclosures)
- [ ] Third-party link disclaimer (footer, /terms)
- [ ] Resource education disclaimer (every resource page)

## G. Resource professional review (content/resources.ts)

- [ ] financing-preparation — licensed mortgage professional
- [ ] home-inspection-overview — licensed home inspector
- [ ] appraisal-overview — licensed appraiser
- [ ] closing-cost-overview — title/closing professional
- [ ] investment-property-basics — tax professional/attorney

## H. Structural guarantees (verified in build — keep true)

- No IDX/MLS/listing-feed code, SDKs, env vars, or structured data
- No listing prices, statuses, MLS numbers, addresses, or days-on-market anywhere
- No recruiting content, routes, or inquiry types
- Community pages use Fair-Housing-safe, factual language (see CONTENT_GUIDE.md rules)
- External property search is a single configurable link with a visible pending state
