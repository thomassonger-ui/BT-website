import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Reveal } from "@/components/animation/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { LeadForm } from "@/components/forms/LeadForm";
import { contactFields } from "@/components/forms/definitions";
import { siteConfig } from "@/config/site";
import { externalLinks } from "@/config/external-links";
import { compliance } from "@/config/compliance";

export const metadata: Metadata = buildMetadata({
  title: "Contact Bear Team Real Estate",
  description:
    "Call, email, schedule, or send a message to Bear Team Real Estate in Orlando — buying, selling, property value, relocation, or general Central Florida real estate questions.",
  path: "/contact",
});

const socials = [
  { label: "Facebook", href: externalLinks.facebook },
  { label: "Instagram", href: externalLinks.instagram },
  { label: "LinkedIn", href: externalLinks.linkedin },
  { label: "Google Business Profile", href: externalLinks.googleBusinessProfile },
].filter((s) => s.href);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Next Move."
        intro="Call, email, schedule a consultation, or send a message — whichever is easiest for you."
      />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto grid max-w-content gap-12 px-6 lg:grid-cols-[2fr,3fr]">
          {/* Office info */}
          <div className="space-y-6">
            <div className="rounded-lg border border-ink/10 bg-cream/40 p-6">
              <h2 className="font-display text-xl font-medium text-ink">Bear Team Real Estate</h2>
              <address className="mt-4 space-y-2 text-sm not-italic text-charcoal-soft">
                <p>{siteConfig.legalName}</p>
                <p>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
                <p>
                  <span className="font-semibold text-ink">Phone: </span>
                  <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="text-teal-800 underline-offset-2 hover:underline">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-ink">Email: </span>
                  <a href={`mailto:${siteConfig.email}`} className="text-teal-800 underline-offset-2 hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-ink">Office hours: </span>
                  {siteConfig.officeHours}
                </p>
              </address>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                {externalLinks.scheduling ? (
                  <a href={externalLinks.scheduling} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline-offset-2 hover:underline">
                    Schedule a consultation
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="text-xs italic text-muted">Scheduling link: [VERIFY SCHEDULING URL]</span>
                )}
                {externalLinks.googleMaps ? (
                  <a href={externalLinks.googleMaps} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-800 underline-offset-2 hover:underline">
                    Get directions
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : (
                  <span className="text-xs italic text-muted">Directions link: [VERIFY GOOGLE MAPS URL]</span>
                )}
              </div>
            </div>

            {/* Map placeholder */}
            <PlaceholderImage
              label="Office location map"
              alt="Map placeholder showing the Bear Team office location"
              className="aspect-[4/3] rounded-lg"
              tone="teal"
            />

            {socials.length > 0 ? (
              <div className="rounded-lg border border-ink/10 bg-cream/40 p-6 text-sm">
                <h2 className="font-semibold text-ink">Follow Bear Team</h2>
                <ul className="mt-3 flex flex-wrap gap-4">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-teal-800 underline-offset-2 hover:underline">
                        {s.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="space-y-3 text-xs leading-relaxed text-muted">
              <p>{compliance.equalHousing}</p>
              <p>
                Accessibility: if you have difficulty using this website or need assistance,
                contact {siteConfig.accessibilityContact}.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <Reveal>
            <div className="rounded-lg border border-ink/10 bg-cream/30 p-6 md:p-8">
              <h2 className="mb-6 font-display text-xl font-medium text-ink">Send a Message</h2>
              <LeadForm kind="contact" fields={contactFields} submitLabel="Send Message" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
