export const metadata = {
  title: "About Bear Team Real Estate",
  description:
    "Meet Bear Team Real Estate — a boutique Orlando brokerage led by Broker/Owner Bethanne Baer.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-bear-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            The Bear Team Story
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            A boutique brokerage built on the belief that agents and clients
            both deserve better than big box.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold">Bethanne Baer, Broker/Owner</h2>
        <p className="mt-4 text-bear-slate">
          {/* TODO: Bethanne's bio and headshot */}
          Bethanne founded Bear Team Real Estate in Orlando to build the kind
          of brokerage she always wanted to work at — one where agents keep
          more of their commission, get real support, and clients get personal
          attention from start to finish.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Our Culture</h2>
        <p className="mt-4 text-bear-slate">
          {/* TODO: culture section copy + team photos */}
          We&rsquo;re intentionally boutique. That means every agent has a
          direct line to the broker, every client has a team behind their
          transaction, and nobody gets lost in the shuffle.
        </p>

        <h2 className="mt-12 text-2xl font-bold">Our Team</h2>
        <p className="mt-4 text-bear-slate">
          {/* TODO: agent roster grid */}
          Meet the agents of Bear Team — coming soon.
        </p>
      </section>
    </>
  );
}
