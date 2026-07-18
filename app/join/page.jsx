import Link from "next/link";

export const metadata = {
  title: "Join Bear Team | Careers for Real Estate Agents",
  description:
    "Progressive commission tiers up to 90/10, $16,000 cap, zero monthly fees, E&O covered, and free training through BearTeam Academy.",
};

const tiers = [
  { split: "60/40", note: "Starting tier" },
  { split: "70/30", note: "Automatic advance" },
  { split: "80/20", note: "Automatic advance" },
  { split: "90/10", note: "Top tier" },
];

const perks = [
  {
    title: "$16,000 company dollar cap",
    detail:
      "Hit the cap and you advance to the next tier automatically. No renegotiating, no asking.",
  },
  {
    title: "Zero monthly fees",
    detail: "No desk fees. No technology fees. No franchise fees. Ever.",
  },
  {
    title: "E&O fully covered",
    detail: "Errors & omissions insurance is paid by the brokerage.",
  },
  {
    title: "$150 flat transaction fee",
    detail: "The only cost per closing. That's it.",
  },
  {
    title: "BearTeam Academy",
    detail: "Free training to sharpen your skills and grow your production.",
  },
  {
    title: "Boutique culture",
    detail:
      "Personal support and a real culture — you'll never be a number on a roster.",
  },
];

export default function JoinPage() {
  return (
    <>
      <section className="bg-bear-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Keep More. Grow Faster.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Bear Team is built for producing agents who are tired of
            overpaying and being overlooked at the big box brokerages.
          </p>
        </div>
      </section>

      {/* Commission tiers */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold">
          Progressive Commission Tiers
        </h2>
        <p className="mt-3 text-center text-bear-slate">
          Advance automatically as you close — no caps on your ceiling.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-4">
          {tiers.map((tier, i) => (
            <div
              key={tier.split}
              className="rounded-lg border border-bear-navy/10 bg-white p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-bold text-bear-gold">{tier.split}</p>
              <p className="mt-2 text-sm text-bear-slate">{tier.note}</p>
              <p className="mt-1 text-xs text-bear-slate/70">Tier {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold">
            What You Get at Bear Team
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title}>
                <h3 className="font-bold">{perk.title}</h3>
                <p className="mt-2 text-sm text-bear-slate">{perk.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">
          Let&rsquo;s run your numbers — no pressure, just math.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-bear-slate">
          A 15-minute conversation with Tom Songer will show you exactly what
          your last 12 months of closings would have paid you at Bear Team.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-md bg-bear-navy px-8 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Book a Confidential Chat
        </Link>
      </section>
    </>
  );
}
