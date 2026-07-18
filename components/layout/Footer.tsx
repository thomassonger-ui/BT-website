import Link from "next/link";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { compliance } from "@/config/compliance";
import { externalLinks } from "@/config/external-links";
import { SearchHomesLink } from "@/components/ui/Button";

const socials = [
  { label: "Facebook", href: externalLinks.facebook },
  { label: "Instagram", href: externalLinks.instagram },
  { label: "LinkedIn", href: externalLinks.linkedin },
  { label: "Google Business Profile", href: externalLinks.googleBusinessProfile },
].filter((s) => s.href);

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-soft-white">
            Bear Team <span className="text-gold-light">Real Estate</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed">{siteConfig.tagline}</p>
          <address className="mt-4 space-y-1 text-sm not-italic">
            <p>{siteConfig.legalName}</p>
            <p>
              {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state}{" "}
              {siteConfig.address.zip}
            </p>
            <p>
              <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="hover:text-gold-light">
                {siteConfig.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-light">
                {siteConfig.email}
              </a>
            </p>
            <p>License: {siteConfig.brokerageLicense}</p>
            <p>Broker: {siteConfig.brokerName}</p>
          </address>
          <div className="mt-5">
            <SearchHomesLink variant="outline-light" className="!min-h-0 !px-4 !py-2 text-xs" />
          </div>
        </div>

        <FooterColumn title="Services" links={footerNav.services} />
        <FooterColumn title="Company" links={footerNav.company} />
        <div>
          <FooterColumn title="Legal" links={footerNav.legal} />
          {socials.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light">
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-content space-y-3 px-6 py-8 text-xs leading-relaxed text-cream/60">
          <p className="flex items-start gap-3">
            {/* Equal Housing Opportunity mark */}
            <svg aria-label="Equal Housing Opportunity" role="img" viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 shrink-0 fill-current">
              <path d="M12 2 1 10h2v12h18V10h2L12 2zm0 2.5L18.5 9h-13L12 4.5zM5 11h14v9H5v-9zm3 1.5v1.5h8v-1.5H8zm0 3v1.5h8v-1.5H8z" />
            </svg>
            <span>{compliance.equalHousing}</span>
          </p>
          <p>{compliance.brokerageRelationship}</p>
          <p>{compliance.thirdPartySearchDisclaimer}</p>
          <p>{compliance.thirdPartyLinkDisclaimer}</p>
          <p>
            Accessibility: if you have difficulty using this website, contact{" "}
            {siteConfig.accessibilityContact} or see our{" "}
            <Link href="/accessibility" className="underline hover:text-gold-light">
              accessibility statement
            </Link>
            .
          </p>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <nav aria-label={`Footer ${title}`}>
      <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-gold-light">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
