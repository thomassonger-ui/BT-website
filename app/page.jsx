import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bear-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Orlando&rsquo;s Boutique Brokerage.
            <br />
            <span className="text-bear-gold">Big Results, Real Support.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Bear Team Real Estate helps Central Florida buyers, sellers, and
            agents win — with personal service you won&rsquo;t find at the big
            box brokerages.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-bear-gold px-6 py-3 font-semibold text-bear-navy transition hover:opacity-90"
            >
              Work With Us
            </Link>
            <Link
              href="/join"
              className="rounded-md border border-bear-gold px-6 py-3 font-semibold text-bear-gold transition hover:bg-bear-gold hover:text-bear-navy"
            >
              Agents: Join Bear Team
            </Link>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">Local Expertise</h2>
            <p className="mt-3 text-bear-slate">
              Born and built in Orlando. We know these neighborhoods,
              schools, and markets street by street.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Boutique Service</h2>
            <p className="mt-3 text-bear-slate">
              You&rsquo;re a client, not a file number. Direct access to your
              agent and our broker from listing to closing.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Agents Who Stay</h2>
            <p className="mt-3 text-bear-slate">
              Our agents keep more of what they earn and get real training —
              so the best people in Orlando do their best work here.
            </p>
          </div>
        </div>
      </section>

      {/* Recruiting banner */}
      <section className="bg-bear-gold">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 sm:flex-row">
          <div>
            <h2 className="text-2xl font-bold text-bear-navy">
              Licensed agent? Keep more of your commission.
            </h2>
            <p className="mt-2 text-bear-navy/80">
              Progressive splits up to 90/10, zero monthly fees, and a $16k
              cap. Do the math.
            </p>
          </div>
          <Link
            href="/join"
            className="whitespace-nowrap rounded-md bg-bear-navy px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            See the Numbers
          </Link>
        </div>
      </section>
    </>
  );
}
