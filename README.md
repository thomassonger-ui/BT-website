# Bear Team Real Estate — Website

Public website for Bear Team Real Estate, a boutique brokerage in Orlando, FL.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- Deploys to Vercel

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home — brand, value proposition |
| `/join` | Join Us — agent recruiting: commission tiers, cap, zero fees |
| `/about` | About — Bethanne Baer, brokerage story, culture |
| `/contact` | Contact — get in touch |

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.jsx        # Root layout (header/footer)
  globals.css       # Tailwind + global styles
  page.jsx          # Home
  join/page.jsx     # Join Us / recruiting
  about/page.jsx    # About / team
  contact/page.jsx  # Contact
components/
  Header.jsx
  Footer.jsx
```
