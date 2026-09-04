"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

/**
 * Registration gate + saved-listing plumbing for /listings.
 *
 * Replaces the two passive captures the old iHouseweb site had:
 *  - GATE: a visitor may open FREE_OPENS listing pop-ups; the next one asks
 *    for name / phone / email first. Posts a "Listing registration" lead.
 *  - SAVES: a heart on every card. The first save requires registration;
 *    every save posts a "Saved listing (<address>)" lead — the same signal
 *    the old "X saved a listing on www.bearteam.com" emails carried.
 *
 * Both post through /api/contact → website-lead → premier_leads, so nothing
 * new is needed server-side. Visitor identity lives in localStorage only
 * (no accounts); clearing the browser simply asks them to register again.
 */

export const FREE_OPENS = 3;
const VISITOR_KEY = "bt_visitor";
const OPENS_KEY = "bt_listing_opens";
const SAVED_KEY = "bt_saved_listings";

export type Visitor = { name: string; email: string; phone: string };

function read<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* private mode / quota — gate simply re-asks next time */
  }
}

/** Post a lead through the standard contact route. Resolves true on success. */
export async function postListingLead(v: Visitor, message: string): Promise<boolean> {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: v.name,
        email: v.email,
        phone: v.phone,
        inquiryType: "Buying",
        message,
        preferredContact: "Phone",
        consent: true,
        company: "",
      }),
    });
    const body = (await res.json()) as { ok?: boolean };
    return Boolean(body.ok);
  } catch {
    return false;
  }
}

export function useListingVisitor() {
  const [visitor, setVisitor] = useState<Visitor | null>(null);
  const [saved, setSaved] = useState<string[]>([]);
  const opens = useRef(0);

  useEffect(() => {
    setVisitor(read<Visitor | null>(VISITOR_KEY, null));
    setSaved(read<string[]>(SAVED_KEY, []));
    opens.current = read<number>(OPENS_KEY, 0);
  }, []);

  /** Count a pop-up open; returns true when the gate should show first. */
  const recordOpen = useCallback((): boolean => {
    if (visitor) return false;
    opens.current += 1;
    write(OPENS_KEY, opens.current);
    return opens.current > FREE_OPENS;
  }, [visitor]);

  const register = useCallback((v: Visitor) => {
    write(VISITOR_KEY, v);
    setVisitor(v);
  }, []);

  const markSaved = useCallback((slug: string) => {
    setSaved((prev) => {
      const next = prev.includes(slug) ? prev : [...prev, slug];
      write(SAVED_KEY, next);
      return next;
    });
  }, []);

  const unmarkSaved = useCallback((slug: string) => {
    setSaved((prev) => {
      const next = prev.filter((s) => s !== slug);
      write(SAVED_KEY, next);
      return next;
    });
  }, []);

  return { visitor, saved, recordOpen, register, markSaved, unmarkSaved };
}

/* ------------------------------------------------------------------ */

export function RegistrationModal({
  reason,
  context,
  onRegistered,
  onClose,
}: {
  /** Why we're asking — shown as the modal title. */
  reason: "gate" | "save";
  /** Address list (gate) or the single address (save) — goes into the lead notes. */
  context: string;
  onRegistered: (v: Visitor) => void;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panelRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (name.trim().length < 2) return setError("Please tell us your name.");
    if (!/^[\d\s()+.\-]{7,}$/.test(phone.trim())) return setError("Please enter a valid phone number.");
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) return setError("Please enter a valid email address.");
    if (!consent) return setError("Please confirm you consent to be contacted.");
    setError("");
    setBusy(true);
    const v: Visitor = { name: name.trim(), email: email.trim(), phone: phone.trim() };
    const message =
      reason === "save"
        ? `Saved listing (${context}): Registered while saving`
        : `Listing registration: Viewing featured listings | Opened: ${context}`;
    const ok = await postListingLead(v, message);
    setBusy(false);
    if (!ok) return setError("Something went wrong. Please try again or call (407) 228-1112.");
    onRegistered(v);
  }

  const title = reason === "save" ? "Save this listing" : "Keep exploring";
  const blurb =
    reason === "save"
      ? "Tell us who you are and we'll keep this one on your list — and let you know if anything changes."
      : `You've opened ${FREE_OPENS} listings. Register once to keep browsing and get updates on the homes you're looking at.`;

  const input =
    "min-h-[46px] rounded-md border border-ink/15 bg-soft-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700";

  return (
    <div
      className="fixed inset-0 z-[95] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="listing-registration-title"
        tabIndex={-1}
        className="w-full max-w-md rounded-t-2xl bg-soft-white p-6 shadow-2xl outline-none sm:rounded-2xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="listing-registration-title" className="font-display text-2xl font-medium text-ink">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink/10 text-ink hover:bg-ink/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        </div>
        <p className="mt-2 text-sm text-charcoal">{blurb}</p>

        <form onSubmit={submit} className="mt-5 grid gap-3" noValidate>
          <input aria-label="Your name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" autoComplete="name" className={input} />
          <div className="grid gap-3 sm:grid-cols-2">
            <input aria-label="Phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" autoComplete="tel" className={input} />
            <input aria-label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" className={input} />
          </div>
          <label className="flex items-start gap-3 rounded-md border border-ink/10 bg-ink/[0.03] p-3 text-xs leading-relaxed text-charcoal">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 shrink-0 accent-teal-700" />
            <span>
              By submitting this form you consent to be contacted by Bear Team Real Estate by phone, email, or text
              message about your inquiry. Consent is not a condition of purchase. Message and data rates may apply.
              You may opt out at any time.{" "}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {error ? (
            <p role="alert" className="text-sm font-medium text-red-700">
              {error}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={busy}
            className="min-h-[48px] rounded-md bg-teal-700 px-5 text-sm font-semibold text-soft-white transition-colors hover:bg-teal-800 disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            {busy ? "One moment…" : reason === "save" ? "Save & Continue" : "Register & Keep Browsing"}
          </button>
        </form>
      </div>
    </div>
  );
}

/** Heart toggle rendered on each listing card. */
export function SaveButton({ saved, onClick }: { saved: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={saved}
      aria-label={saved ? "Remove from saved listings" : "Save this listing"}
      className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-soft-white/90 text-ink shadow-md backdrop-blur transition-colors hover:bg-soft-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={saved ? "#b91c1c" : "none"}
        stroke={saved ? "#b91c1c" : "currentColor"}
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M12 21s-7-4.6-9.3-8.5C.9 9.4 2.4 5.5 6 5c2 -.3 3.6.7 6 3 2.4-2.3 4-3.3 6-3 3.6.5 5.1 4.4 3.3 7.5C19 16.4 12 21 12 21z" />
      </svg>
    </button>
  );
}
