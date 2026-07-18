export const metadata = {
  title: "Contact Bear Team Real Estate",
  description:
    "Get in touch with Bear Team Real Estate in Orlando, FL — buying, selling, or joining the team.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-bear-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Buying, selling, or thinking about joining the team — we&rsquo;d
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-xl px-6 py-16">
        {/* TODO: wire form to email service / CRM */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-bear-navy/20 bg-white px-4 py-2 focus:border-bear-gold focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-bear-navy/20 bg-white px-4 py-2 focus:border-bear-gold focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="interest" className="block text-sm font-medium">
              I&rsquo;m interested in
            </label>
            <select
              id="interest"
              name="interest"
              className="mt-1 w-full rounded-md border border-bear-navy/20 bg-white px-4 py-2 focus:border-bear-gold focus:outline-none"
            >
              <option>Buying a home</option>
              <option>Selling a home</option>
              <option>Joining Bear Team as an agent</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="mt-1 w-full rounded-md border border-bear-navy/20 bg-white px-4 py-2 focus:border-bear-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-bear-navy px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center text-sm text-bear-slate">
          {/* TODO: office address, phone, email */}
          <p>Bear Team Real Estate &middot; Orlando, FL</p>
        </div>
      </section>
    </>
  );
}
