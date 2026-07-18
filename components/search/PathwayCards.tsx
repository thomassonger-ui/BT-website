"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { compliance } from "@/config/compliance";
import { externalLinks } from "@/config/external-links";
import { cn } from "@/lib/utils/cn";

/**
 * Six Ways In — each pathway card opens its own modal with a specific value
 * pitch and a tailored micro-form. Every submission flows through
 * /api/contact → website-lead → BearTeamOS premier_leads (status "offering")
 * with a pathway-specific prefix, so the claiming agent knows exactly what
 * the buyer needs. "Search Available Homes" routes to the Scout™ qualifier;
 * "Talk It Through First" hands straight to Bethanne's booking calendar.
 */

type Field = {
  key: string;
  label: string;
  type: "text" | "select" | "textarea";
  options?: string[];
  required?: boolean;
  placeholder?: string;
};

type Pathway = {
  id: string;
  img: string;
  alt: string;
  title: string;
  text: string;
  ctaLabel: string;
  value: string[];
  fields?: Field[];
  leadPrefix?: string;
  /** "form" opens the micro-form modal; "booking" opens value + booking; "scout" scrolls to Scout. */
  mode: "form" | "booking" | "scout";
  submitLabel?: string;
};

const PATHWAYS: Pathway[] = [
  {
    id: "first-time",
    img: "/images/buy/firsttime.jpg",
    alt: "Modest single-story Florida home in the suburbs",
    title: "First-Time Buyers",
    text: "Get guidance from financing through closing.",
    ctaLabel: "Start Here",
    mode: "form",
    value: [
      "Plain-language guidance from first conversation to keys in hand",
      "Financing preparation before you ever tour a home",
      "We flag the mistakes that only show up after closing",
    ],
    fields: [
      {
        key: "Timeframe",
        label: "When would you like to be in your first home?",
        type: "select",
        options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just exploring"],
        required: true,
      },
      {
        key: "Financing",
        label: "Have you talked with a lender yet?",
        type: "select",
        options: ["Pre-approved", "Working with a lender", "Not yet — could use a referral", "Not yet — just starting"],
        required: true,
      },
    ],
    leadPrefix: "First-time buyer",
    submitLabel: "Start My Buyer Plan",
  },
  {
    id: "investors",
    img: "/images/buy/investor.jpg",
    alt: "Duplex home with two entrances and driveways in Orlando",
    title: "Investors",
    text: "Find rental, duplex, value-add, and income opportunities.",
    ctaLabel: "Talk Investments",
    mode: "form",
    value: [
      "Deal flow portals never see — off-market, coming-soon, land, and duplexes",
      "Realistic rent and expense analysis before you write an offer",
      "Local regulation and zoning awareness across Central Florida",
    ],
    fields: [
      {
        key: "Investment type",
        label: "What kind of investment?",
        type: "select",
        options: ["Long-term rental", "Duplex / small multifamily", "Fix and flip", "Land", "Not sure yet"],
        required: true,
      },
      {
        key: "Price range",
        label: "Target price range",
        type: "select",
        options: ["Under $300k", "$300k–$450k", "$450k–$650k", "$650k–$1M", "$1M+"],
        required: true,
      },
    ],
    leadPrefix: "Investor",
    submitLabel: "Send My Criteria",
  },
  {
    id: "search",
    img: "/images/buy/search.jpg",
    alt: "Palm-lined street of homes in a Florida subdivision",
    title: "Search Available Homes",
    text: "Have our team build a personalized property search.",
    ctaLabel: "Build My Home Search",
    mode: "scout",
    value: [],
  },
  {
    id: "found-online",
    img: "/images/buy/online.jpg",
    alt: "Person browsing home listings on a laptop",
    title: "Found One Online?",
    text: "Send us the link and we will investigate it.",
    ctaLabel: "Send Us a Listing",
    mode: "form",
    value: [
      "We verify status — many portal listings are stale or already pending",
      "Condition, HOA, insurance, and flood red flags before you fall in love",
      "If it checks out, we schedule your private showing fast",
    ],
    fields: [
      {
        key: "Listing",
        label: "Paste the listing link or address",
        type: "text",
        required: true,
        placeholder: "https://… or 123 Main St, Orlando",
      },
      {
        key: "What caught your eye",
        label: "What caught your eye? (optional)",
        type: "textarea",
      },
    ],
    leadPrefix: "Found-online listing check",
    submitLabel: "Investigate This Listing",
  },
  {
    id: "consult",
    img: "/images/buy/consult.jpg",
    alt: "Agent discussing plans with a couple in an office",
    title: "Talk It Through First",
    text: "Schedule a buyer strategy consultation.",
    ctaLabel: "Book 30 Minutes",
    mode: "booking",
    value: [
      "Free 30 minutes with Bethanne Baer — Broker/Owner, 40+ years in Central Florida",
      "Goals, budget comfort, financing questions, and a search plan",
      "No obligation, no pressure — just a clear next step",
    ],
  },
  {
    id: "communities",
    img: "/images/buy/community.jpg",
    alt: "Aerial view of a residential subdivision with the downtown skyline beyond",
    title: "Browse by Community",
    text: "Explore Orlando-area communities and request current options.",
    ctaLabel: "View Communities",
    mode: "form",
    value: [
      "Factual comparisons — housing character, amenities, transportation",
      "Current options pulled for the areas you pick",
      "Specialty corridor: Conway · Edgewood · Belle Isle, 40+ years",
    ],
    fields: [
      {
        key: "Community",
        label: "Which area interests you most?",
        type: "select",
        options: [
          "Conway · Edgewood · Belle Isle",
          "Downtown Orlando",
          "Winter Park",
          "Lake Nona",
          "Dr. Phillips / Windermere",
          "College Park",
          "Not sure — help me compare",
        ],
        required: true,
      },
    ],
    leadPrefix: "Community options request",
    submitLabel: "Send Me Current Options",
  },
];

export function PathwayCards() {
  const [open, setOpen] = useState<Pathway | null>(null);

  function activate(p: Pathway) {
    if (p.mode === "scout") {
      document.getElementById("scout-qualify")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setOpen(p);
  }

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PATHWAYS.map((p) => (
          <article
            key={p.id}
            className="flex flex-col overflow-hidden rounded-lg border border-ink/10 bg-soft-white transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
              <button
                type="button"
                onClick={() => activate(p)}
                className={cn(
                  "mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
                  p.id === "search"
                    ? "bg-teal-700 text-soft-white hover:bg-teal-800"
                    : "border-2 border-teal-700 text-teal-800 hover:bg-teal-700 hover:text-soft-white",
                )}
              >
                {p.ctaLabel}
              </button>
            </div>
          </article>
        ))}
      </div>

      {open ? <PathwayModal pathway={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}

function PathwayModal({ pathway, onClose }: { pathway: Pathway; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    // Validate
    for (const f of pathway.fields ?? []) {
      if (f.required && !String(values[f.key] ?? "").trim()) {
        setError(`Please answer: ${f.label.replace(" (optional)", "")}`);
        return;
      }
    }
    if (name.trim().length < 2) return setError("Please tell us your name.");
    if (!/^[\d\s()+.\-]{7,}$/.test(phone.trim())) return setError("Please enter a valid phone number.");
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setError("Please enter a valid email address.");
    if (!consent) return setError("Please confirm you consent to be contacted.");
    setError("");
    setStatus("submitting");

    const details = (pathway.fields ?? [])
      .map((f) => `${f.key}: ${values[f.key] ?? "—"}`)
      .join(" | ");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          inquiryType: "Buying",
          message: `${pathway.leadPrefix}: ${details}`,
          preferredContact: "Phone",
          consent: true,
          company: "",
        }),
      });
      const body = (await res.json()) as { ok: boolean };
      if (!body.ok) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again or call (407) 228-1112.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`modal-${pathway.id}-title`}
        tabIndex={-1}
        className="max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-2xl bg-soft-white shadow-2xl outline-none sm:rounded-2xl"
      >
        <div className="relative aspect-[16/7]">
          <Image src={pathway.img} alt="" fill sizes="512px" className="object-cover sm:rounded-t-2xl" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-soft-white backdrop-blur hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <h3 id={`modal-${pathway.id}-title`} className="font-display text-2xl font-medium text-ink">
            {pathway.title}
          </h3>
          <ul className="mt-4 space-y-2">
            {pathway.value.map((v) => (
              <li key={v} className="flex gap-3 text-sm leading-relaxed text-charcoal-soft">
                <span aria-hidden="true" className="mt-0.5 font-bold text-gold">✓</span>
                {v}
              </li>
            ))}
          </ul>

          {pathway.mode === "booking" ? (
            <div className="mt-6">
              <a
                href={externalLinks.bethanneBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                Book 30 Minutes with Bethanne
              </a>
              <p className="mt-3 text-center text-xs text-muted">
                Prefer to talk now?{" "}
                <a href="tel:4072281112" className="font-semibold text-teal-800 underline-offset-2 hover:underline">
                  Call (407) 228-1112
                </a>
              </p>
            </div>
          ) : status === "done" ? (
            <div role="status" className="mt-6 rounded-lg border border-teal-700/30 bg-teal-50 p-6 text-center">
              <p className="font-display text-lg font-medium text-teal-900">
                Sent to the team{name ? `, ${name.split(" ")[0]}` : ""}.
              </p>
              <p className="mt-2 text-sm text-charcoal-soft">
                An agent will follow up fast. Want to lock in a time with Bethanne now?
              </p>
              <a
                href={externalLinks.bethanneBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-light"
              >
                Book 30 Minutes
              </a>
            </div>
          ) : (
            <form onSubmit={submit} className="mt-6 space-y-4">
              {(pathway.fields ?? []).map((f) => (
                <div key={f.key}>
                  <label htmlFor={`pf-${pathway.id}-${f.key}`} className="text-sm font-medium text-ink">
                    {f.label}
                  </label>
                  {f.type === "select" ? (
                    <select
                      id={`pf-${pathway.id}-${f.key}`}
                      value={values[f.key] ?? ""}
                      onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                      className="mt-1.5 w-full rounded-md border border-ink/15 bg-soft-white px-4 py-3 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700"
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {f.options?.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea
                      id={`pf-${pathway.id}-${f.key}`}
                      rows={2}
                      value={values[f.key] ?? ""}
                      onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      className="mt-1.5 w-full rounded-md border border-ink/15 bg-soft-white px-4 py-3 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700"
                    />
                  ) : (
                    <input
                      id={`pf-${pathway.id}-${f.key}`}
                      type="text"
                      value={values[f.key] ?? ""}
                      onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      className="mt-1.5 w-full rounded-md border border-ink/15 bg-soft-white px-4 py-3 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700"
                    />
                  )}
                </div>
              ))}

              <div className="grid gap-3 sm:grid-cols-3">
                <input aria-label="Your name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" autoComplete="name" className="min-h-[46px] rounded-md border border-ink/15 bg-soft-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700" />
                <input aria-label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" autoComplete="tel" className="min-h-[46px] rounded-md border border-ink/15 bg-soft-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700" />
                <input aria-label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" className="min-h-[46px] rounded-md border border-ink/15 bg-soft-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700" />
              </div>

              <label className="flex items-start gap-3 rounded-md border border-ink/10 bg-cream/40 p-3 text-[11px] leading-relaxed text-charcoal-soft">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-teal-700" />
                <span>
                  {compliance.communicationConsent}{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {error ? (
                <p role="alert" className="text-xs font-medium text-red-800">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-soft-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : pathway.submitLabel ?? "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
