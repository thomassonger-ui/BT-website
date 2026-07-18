# Deployment Guide

## 1. GitHub (new repository: `BT-website`)

1. Create a **new** GitHub repository named `BT-website` (do not reuse or overwrite any other
   repository).
2. From the project root:

   ```bash
   git init
   git branch -M main
   git add .
   git commit -m "Initial build of Bear Team public website"
   git remote add origin <NEW_GITHUB_REPOSITORY_URL>
   git push -u origin main
   ```

3. Confirm `.env.local` is untracked (`git status`) — secrets are never committed.

Branch model: feature branches → pull request → preview deployment → merge to `main` →
production deployment.

## 2. Vercel (new project: `BT-website`)

1. Vercel → **Add New Project** → import the `BT-website` GitHub repository.
   **Do not connect to or overwrite any existing Vercel project.**
2. Framework preset: **Next.js**. Root directory: repository root. Build command and output:
   defaults.
3. Project name: `BT-website`.

### Environment variables

Add every variable from `.env.example` to **both Preview and Production** environments (values
may differ per environment):

**Public (browser-exposed, `NEXT_PUBLIC_*`):** site URL, phone, general email, property-search
URL, scheduling URL, Google Maps/Business URLs, social URLs.

**Server-only secrets (no `NEXT_PUBLIC_` prefix):** `LEAD_NOTIFICATION_EMAIL`,
`CONTACT_FORM_WEBHOOK_URL`, `BUYER_LEAD_WEBHOOK_URL`, `SELLER_LEAD_WEBHOOK_URL`,
`VALUATION_WEBHOOK_URL`, `EMAIL_API_KEY`.

Server-only variables are read exclusively inside `app/api/*` route handlers
(`lib/forms/handle-lead.ts`) and are never bundled into client JavaScript. After the first
deploy, verify no secret appears in the browser bundle (TESTING_CHECKLIST.md → "Secret
exposure").

### Deployments

- **Preview:** every branch/PR push deploys automatically to a preview URL.
- **Production:** merges to `main` deploy to production automatically.

### Post-deploy verification

Visit every route (see TESTING_CHECKLIST.md route list), confirm `/sitemap.xml` and
`/robots.txt`, submit each form once, and confirm the production build succeeded with no
hydration or console errors.

## 3. Form integration

Forms ship in **mock mode**: submissions are validated server-side and logged, and the user
sees a success state — no external delivery happens until you configure it. To connect a real
destination, set the per-form webhook variables to an approved endpoint (CRM webhook, Zapier/
Make, or a transactional-email service integration). The payload shape is:

```json
{
  "kind": "buyer-lead",
  "receivedAt": "ISO-8601",
  "notify": "LEAD_NOTIFICATION_EMAIL value",
  "lead": { "...validated fields..." }
}
```

Test each form in Preview before enabling in Production. Do not assume an existing CRM
integration — none is configured in this build.

## 4. Custom domain

Full plan in **DOMAIN_CUTOVER.md**. Summary: keep bearteam.com pointed at the current site
until content verification, compliance review, form testing, and redirect mapping are complete
and cutover is explicitly approved. Then add `bearteam.com` + `www.bearteam.com` to the Vercel
project, update DNS as instructed by Vercel, verify SSL and both host variants, and submit the
new sitemap.
