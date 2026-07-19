import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How BearTeam LLC, doing business as Bear Team Real Estate, collects, uses, discloses, retains, and protects information when you visit our website or request real estate services.",
  path: "/privacy",
});

/** A content block is either a paragraph or a bulleted list. */
type Block = { p?: string; list?: string[] };
type Section = { heading?: string; blocks: Block[] };

const sections: Section[] = [
  {
    blocks: [
      { p: "Effective Date: July 2, 2015" },
      { p: "Last Updated: July 19, 2026" },
      {
        p: "BearTeam LLC, doing business as Bear Team Real Estate and operated by Bethanne Baer (“Bear Team Real Estate,” “we,” “us,” or “our”), respects your privacy. This Privacy Policy explains how we collect, use, disclose, retain, and protect information when you visit our website, communicate with us, request real estate services, attend one of our events, or otherwise interact with Bear Team Real Estate.",
      },
      {
        p: "By using our website or providing information to us, you acknowledge the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    heading: "1. Information We Collect",
    blocks: [
      {
        p: "We may collect information that you provide directly to us, information collected automatically when you use our website, and information received from third parties.",
      },
      { p: "Information You Provide" },
      { p: "Depending on how you interact with us, we may collect:" },
      {
        list: [
          "Your name",
          "Email address",
          "Telephone number",
          "Mailing address",
          "Property address",
          "Preferred method of communication",
          "Information about your interest in buying, selling, leasing, or investing in real estate",
          "Property preferences, budget, desired location, and anticipated transaction timeline",
          "Information submitted through contact forms, property-inquiry forms, home-valuation requests, appointment requests, event registrations, or newsletter sign-ups",
          "Questions, answers, and contact details you share with Scout\u2122, our conversational website assistant",
          "Communications you send to our agents, brokers, employees, contractors, or representatives",
          "Documents and information necessary to provide brokerage or transaction-related services",
          "Information submitted when applying to join or work with Bear Team Real Estate",
          "Any other information you voluntarily provide",
        ],
      },
      {
        p: "Please do not submit Social Security numbers, banking credentials, wire instructions, or similarly sensitive information through unsecured website forms, email, or text message.",
      },
      { p: "Information Collected Automatically" },
      {
        p: "When you visit our website, we and our service providers may automatically collect certain technical information, including:",
      },
      {
        list: [
          "Internet Protocol address",
          "Browser type",
          "Device type",
          "Operating system",
          "Referring website",
          "Pages viewed",
          "Links selected",
          "Date and time of access",
          "Approximate geographic location",
          "Website usage and interaction data",
          "Cookie identifiers and similar technology data",
        ],
      },
      {
        p: "We may use cookies, pixels, tags, analytics tools, and similar technologies to operate the website, understand website traffic, improve performance, measure advertising, and provide more relevant content.",
      },
      { p: "Information From Third Parties" },
      { p: "We may receive information from:" },
      {
        list: [
          "Multiple listing services",
          "Real estate portals and lead-generation platforms",
          "Referral partners",
          "Mortgage lenders, title companies, inspectors, appraisers, attorneys, insurance providers, and other transaction participants",
          "Advertising and analytics providers",
          "Public records and government databases",
          "Social-media platforms",
          "Customer relationship management systems",
          "Other real estate professionals",
          "Individuals who refer you to us",
        ],
      },
      {
        p: "Information received from third parties may be combined with information we collect directly from you.",
      },
    ],
  },
  {
    heading: "2. Scout\u2122 and Assistant Conversations",
    blocks: [
      {
        p: "Scout\u2122 is our conversational website assistant. It offers a guided, chat-style way to tell us what you are looking for and to ask questions about Bear Team Real Estate and Central Florida real estate.",
      },
      {
        p: "When you interact with Scout\u2122, we collect the information you choose to share in the conversation, which may include your answers to intake questions (such as area, price range, property details, and timeframe), your name, telephone number, and email address, and the text of any questions you type.",
      },
      {
        p: "Scout\u2122's conversational answers are generated with the assistance of a third-party artificial-intelligence service provider that processes the text of your questions in order to produce a response. Conversations may be stored so Scout\u2122 can maintain context and so we can review quality and follow up on your request. Completed Scout\u2122 intakes are handled like any other website inquiry and are routed to our team for follow-up as described in this Privacy Policy.",
      },
      {
        p: "Scout\u2122 provides general information only. It does not provide legal, tax, lending, insurance, or appraisal advice, and no decision producing legal or similarly significant effects about you is made solely by automated means. Please do not share Social Security numbers, banking credentials, wire instructions, or similarly sensitive information with Scout\u2122; for anything sensitive, call our office directly.",
      },
    ],
  },
  {
    heading: "3. How We Use Information",
    blocks: [
      { p: "We may use personal information to:" },
      {
        list: [
          "Respond to questions and property inquiries",
          "Schedule consultations, showings, listing appointments, open houses, and other meetings",
          "Help clients buy, sell, lease, or evaluate real property",
          "Provide property alerts, market information, valuation information, and transaction updates",
          "Match prospective buyers with available properties",
          "Market properties and communicate with prospective purchasers",
          "Maintain client, customer, prospect, and referral records",
          "Administer real estate transactions",
          "Coordinate with transaction participants and service providers",
          "Provide requested brokerage and real estate services",
          "Operate, maintain, secure, and improve our website",
          "Analyze website traffic and user engagement",
          "Manage advertising and marketing campaigns",
          "Send newsletters, event invitations, educational materials, and promotional communications",
          "Recruit, evaluate, onboard, and communicate with prospective agents, employees, or independent contractors",
          "Detect fraud, security threats, and unauthorized activity",
          "Protect our rights, clients, agents, systems, and property",
          "Comply with legal, regulatory, licensing, brokerage, record-retention, and professional obligations",
          "Establish, exercise, or defend legal claims",
          "Carry out other purposes disclosed when the information is collected",
        ],
      },
    ],
  },
  {
    heading: "4. Real Estate Communications and Lead Follow-Up",
    blocks: [
      {
        p: "When you request information about a property, submit a home-valuation request, register for an event, request an appointment, or otherwise contact us, Bear Team Real Estate and its affiliated real estate professionals may respond by telephone, email, or text message.",
      },
      {
        p: "Your inquiry may be assigned to an appropriate broker, real estate agent, team member, lender, or service provider based on the nature and location of your request.",
      },
      {
        p: "Submitting an inquiry does not create a brokerage relationship. Any agency or brokerage relationship will be established only through the disclosures or agreements required by applicable law.",
      },
    ],
  },
  {
    heading: "5. Text Messages and Telephone Calls",
    blocks: [
      {
        p: "When you provide your telephone number and expressly agree to receive communications, you authorize Bear Team Real Estate and its representatives to contact you regarding your inquiry, real estate services, appointments, property opportunities, events, and related matters.",
      },
      {
        p: "Communications may include calls or text messages made using automated technology where permitted by law. Consent to receive automated marketing calls or text messages is not a condition of purchasing property or obtaining real estate services.",
      },
      { p: "Message frequency may vary. Message and data rates may apply." },
      {
        p: "You may opt out of marketing text messages at any time by replying STOP. You may request assistance by replying HELP or contacting us using the information listed below.",
      },
      {
        p: "We may continue to send nonmarketing or transactional communications when reasonably necessary, including appointment confirmations, requested property information, transaction communications, account notices, security notices, and legally required communications.",
      },
      {
        p: "Mobile information and text-message consent will not be sold or shared with unaffiliated third parties for their own independent text-message marketing purposes.",
      },
    ],
  },
  {
    heading: "6. Email Communications",
    blocks: [
      {
        p: "You may unsubscribe from promotional emails by using the unsubscribe link included in the message or by contacting us directly.",
      },
      {
        p: "Even after you unsubscribe from marketing emails, we may continue sending transactional, administrative, brokerage-related, security, or legally required communications.",
      },
    ],
  },
  {
    heading: "7. How We Disclose Information",
    blocks: [
      {
        p: "We may disclose personal information to the following categories of recipients when reasonably necessary:",
      },
      { p: "Bear Team Real Estate Professionals" },
      {
        p: "We may disclose information to our broker, real estate agents, team members, employees, independent contractors, administrators, and affiliated professionals who need the information to respond to your request or provide services.",
      },
      { p: "Transaction Participants" },
      {
        p: "Information may be disclosed to parties involved in a potential or completed real estate transaction, including:",
      },
      {
        list: [
          "Buyers and sellers",
          "Cooperating brokers and agents",
          "Multiple listing services",
          "Title and escrow companies",
          "Mortgage lenders",
          "Appraisers",
          "Inspectors",
          "Surveyors",
          "Insurance providers",
          "Home-warranty providers",
          "Attorneys",
          "Accountants",
          "Property managers",
          "Contractors and repair professionals",
          "Government agencies and recording offices",
          "Other parties authorized by you or reasonably necessary to complete the transaction",
        ],
      },
      { p: "Service Providers" },
      { p: "We may use third-party companies to provide:" },
      {
        list: [
          "Website hosting",
          "Customer relationship management services",
          "Email and text-message delivery",
          "Appointment scheduling",
          "Cloud storage",
          "Document management",
          "Electronic signatures",
          "Data analytics",
          "Advertising",
          "Cybersecurity",
          "Payment processing",
          "Technical support",
          "Professional consulting",
        ],
      },
      {
        p: "These providers may process information on our behalf for the services they perform.",
      },
      { p: "Legal and Safety Disclosures" },
      {
        p: "We may disclose information when we reasonably believe disclosure is necessary to:",
      },
      {
        list: [
          "Comply with applicable laws, regulations, subpoenas, court orders, or government requests",
          "Meet real estate licensing, brokerage, reporting, or record-retention obligations",
          "Investigate fraud, security incidents, or unlawful activity",
          "Protect the rights, safety, property, or interests of Bear Team Real Estate, our clients, our representatives, or others",
          "Enforce contracts, policies, and legal rights",
          "Establish, exercise, or defend legal claims",
        ],
      },
      { p: "Business Transactions" },
      {
        p: "Information may be transferred in connection with a merger, acquisition, financing, restructuring, sale of assets, change in brokerage ownership, or similar business transaction, subject to applicable law.",
      },
    ],
  },
  {
    heading: "8. Sale and Sharing of Personal Information",
    blocks: [
      { p: "Bear Team Real Estate does not sell personal information in exchange for money." },
      {
        p: "Certain advertising, analytics, and social-media technologies may be considered “sharing,” “targeted advertising,” or a “sale” under some state privacy laws, even when no money is exchanged.",
      },
      {
        p: "Where required by applicable law, eligible residents may request to opt out of covered sales, sharing, or targeted advertising by contacting us through the methods listed below.",
      },
      {
        p: "We do not knowingly sell or share the personal information of individuals under 16 years of age.",
      },
    ],
  },
  {
    heading: "9. Cookies and Similar Technologies",
    blocks: [
      { p: "Our website may use cookies and similar technologies to:" },
      {
        list: [
          "Keep the website functioning",
          "Remember preferences",
          "Measure website traffic",
          "Understand visitor behavior",
          "Improve website functionality",
          "Evaluate advertising performance",
          "Provide relevant advertising",
          "Prevent fraud and maintain security",
        ],
      },
      {
        p: "You may adjust your browser settings to block or delete cookies. Blocking cookies may cause certain website features to operate improperly.",
      },
      {
        p: "Where required, we may provide additional cookie controls or consent-management options.",
      },
    ],
  },
  {
    heading: "10. Third-Party Websites and Services",
    blocks: [
      {
        p: "Our website may contain links to third-party websites, including property-search platforms, multiple listing services, social-media sites, mortgage providers, title companies, scheduling services, mapping providers, and other real estate resources.",
      },
      {
        p: "We do not control and are not responsible for the privacy, security, content, or practices of third-party websites or services. Their collection and use of information are governed by their own policies.",
      },
    ],
  },
  {
    heading: "11. Data Retention",
    blocks: [
      { p: "We retain personal information for as long as reasonably necessary to:" },
      {
        list: [
          "Respond to inquiries",
          "Provide requested services",
          "Maintain client and transaction records",
          "Manage ongoing business relationships",
          "Comply with brokerage, licensing, tax, accounting, insurance, and legal obligations",
          "Resolve disputes",
          "Prevent fraud",
          "Enforce agreements",
          "Protect legal rights",
        ],
      },
      {
        p: "Retention periods vary depending on the type of information, the nature of the relationship, and applicable legal requirements.",
      },
    ],
  },
  {
    heading: "12. Data Security",
    blocks: [
      {
        p: "We use reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.",
      },
      {
        p: "No website, email system, text-message service, database, or internet transmission method is completely secure. We cannot guarantee absolute security.",
      },
      {
        p: "Real estate transactions are frequent targets of wire fraud. Never rely solely on wiring instructions received by email or text message. Independently verify all wiring instructions using a known and trusted telephone number before transferring funds.",
      },
    ],
  },
  {
    heading: "13. Your Privacy Choices and Rights",
    blocks: [
      {
        p: "Depending on your state of residence and applicable law, you may have the right to:",
      },
      {
        list: [
          "Confirm whether we process your personal information",
          "Request access to personal information we maintain about you",
          "Request correction of inaccurate information",
          "Request deletion of certain information",
          "Request a portable copy of certain information",
          "Opt out of covered sales or sharing of personal information",
          "Opt out of targeted advertising",
          "Withdraw consent where processing is based on consent",
          "Appeal a decision concerning a privacy request",
          "Receive equal service and pricing without unlawful discrimination for exercising a privacy right",
        ],
      },
      {
        p: "These rights may be subject to exceptions. For example, we may need to retain information to complete a requested transaction, comply with brokerage and legal recordkeeping requirements, detect fraud, protect legal rights, or fulfill another permitted purpose.",
      },
      {
        p: "To submit a privacy request, contact us using the information in the “Contact Us” section below. We may need to verify your identity before completing the request.",
      },
      {
        p: "An authorized agent may submit a request where permitted by law. We may require proof of the agent’s authority and may contact you directly to verify the request.",
      },
    ],
  },
  {
    heading: "14. Florida Residents",
    blocks: [
      {
        p: "Florida residents may have privacy rights under applicable Florida law when Bear Team Real Estate meets the law’s applicability requirements.",
      },
      {
        p: "Eligible Florida residents may submit applicable privacy requests using the contact methods below. We will evaluate each request based on the law that applies to Bear Team Real Estate and the information involved.",
      },
    ],
  },
  {
    heading: "15. California Residents",
    blocks: [
      {
        p: "California residents may have additional rights under the California Consumer Privacy Act, as amended, when Bear Team Real Estate meets the law’s applicability thresholds.",
      },
      {
        p: "Eligible California residents may have rights concerning access, correction, deletion, portability, and opting out of covered sales or sharing. California residents may also have the right to limit certain uses of sensitive personal information where applicable.",
      },
      {
        p: "Bear Team Real Estate will not unlawfully discriminate against an eligible consumer for exercising a privacy right.",
      },
    ],
  },
  {
    heading: "16. Do Not Track and Opt-Out Preference Signals",
    blocks: [
      {
        p: "Some browsers provide “Do Not Track” settings. Because there is not a universally accepted standard for responding to traditional Do Not Track signals, our website may not respond to every such signal.",
      },
      {
        p: "Where required by applicable law and supported by our systems, we will process recognized browser-based opt-out preference signals as requests to opt out of covered sales or sharing for the browser or device sending the signal.",
      },
    ],
  },
  {
    heading: "17. Children’s Privacy",
    blocks: [
      {
        p: "Our website and services are intended for adults seeking real estate information or professional services. They are not directed to children under 13 years of age.",
      },
      {
        p: "We do not knowingly collect personal information online from children under 13. If we learn that such information has been collected, we will take reasonable steps to delete it.",
      },
    ],
  },
  {
    heading: "18. Fair Housing",
    blocks: [
      {
        p: "Bear Team Real Estate supports equal housing opportunity and conducts its real estate activities in accordance with applicable fair housing laws.",
      },
      {
        p: "We do not use personal information for unlawful discrimination based on a legally protected characteristic.",
      },
    ],
  },
  {
    heading: "19. International Visitors",
    blocks: [
      {
        p: "Bear Team Real Estate is based in Florida, United States. Information submitted through our website may be collected, processed, stored, and maintained in the United States.",
      },
      {
        p: "If you access the website from another country, you understand that applicable data-protection laws may differ from the laws in your jurisdiction.",
      },
    ],
  },
  {
    heading: "20. Changes to This Privacy Policy",
    blocks: [
      {
        p: "We may update this Privacy Policy periodically to reflect changes in our services, technology, legal obligations, or information-handling practices.",
      },
      {
        p: "The revised policy will be posted on this page with an updated “Last Updated” date. Material changes may also be communicated through the website or another appropriate method.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        intro="How Bear Team Real Estate collects, uses, discloses, retains, and protects your information."
      />
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy" }]} />
      <article className="bg-soft-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          {sections.map((section, i) => (
            <section key={section.heading ?? `intro-${i}`} className="mb-10">
              {section.heading ? (
                <h2 className="mb-3 font-display text-xl font-medium text-ink">{section.heading}</h2>
              ) : null}
              {section.blocks.map((block, j) =>
                block.p ? (
                  <p key={j} className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                    {block.p}
                  </p>
                ) : (
                  <ul key={j} className="mt-3 list-disc space-y-1.5 pl-6 text-sm leading-relaxed text-charcoal-soft">
                    {block.list?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}

          <section className="mb-10">
            <h2 className="mb-3 font-display text-xl font-medium text-ink">20. Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
              For questions about this Privacy Policy or to submit a privacy request, contact:
            </p>
            <address className="mt-4 rounded-lg border border-ink/10 bg-cream/40 p-5 text-sm not-italic leading-relaxed text-charcoal-soft">
              <p className="font-semibold text-ink">{siteConfig.legalName}</p>
              <p>Attention: Bethanne Baer, Broker/Owner</p>
              <p>{siteConfig.address.street}</p>
              <p>
                {siteConfig.address.city}, Florida {siteConfig.address.zip}
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}?subject=Privacy%20Request`} className="text-teal-800 underline-offset-2 hover:underline">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                Telephone:{" "}
                <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`} className="text-teal-800 underline-offset-2 hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>Website: www.bearteam.com</p>
            </address>
            <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
              Please include “Privacy Request” in the subject line and describe the nature of your
              request. Do not include Social Security numbers, financial account credentials, wire
              instructions, or other highly sensitive information in your request.
            </p>
          </section>

          <section className="border-t border-ink/10 pt-8">
            <h2 className="mb-3 font-display text-xl font-medium text-ink">Equal Housing Opportunity</h2>
            <p className="text-sm leading-relaxed text-charcoal-soft">
              BearTeam LLC d/b/a Bear Team Real Estate is committed to providing professional real estate services
              without unlawful discrimination and supports the principles of the Fair Housing Act.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
