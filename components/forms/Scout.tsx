"use client";

import { useState } from "react";
import Link from "next/link";
import { compliance } from "@/config/compliance";
import { externalLinks } from "@/config/external-links";
import { BTMark } from "@/components/ui/Logo";
import { cn } from "@/lib/utils/cn";

/**
 * Scout™ — Bear Team's conversational intake.
 *
 * Replaces the long inquiry forms with a chat-style flow: a few tappable
 * questions (buyer or seller path), then name / phone / email, consent, and
 * a handoff to Bethanne's 30-minute booking calendar. The completed intake
 * submits through the existing /api/contact route (validated server-side,
 * mock delivery mode until a webhook is configured).
 */

type Intent = "Buying" | "Selling";

const AREAS = [
  "Conway · Edgewood · Belle Isle",
  "Downtown Orlando",
  "Winter Park",
  "Lake Nona",
  "Dr. Phillips / Windermere",
  "Elsewhere in Central Florida",
  "Not sure yet",
];

const BUYER_QUESTIONS = [
  { key: "area", prompt: "Where are you thinking about living?", options: AREAS },
  {
    key: "price",
    prompt: "What price range feels comfortable?",
    options: ["Under $300k", "$300k–$450k", "$450k–$650k", "$650k–$1M", "$1M+", "Not sure yet"],
  },
  {
    key: "timeframe",
    prompt: "When would you like to be moved in?",
    options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just exploring"],
  },
];

const SELLER_QUESTIONS = [
  {
    key: "propertyType",
    prompt: "What kind of property are you selling?",
    options: ["Single-family home", "Condo", "Townhome", "Land", "Something else"],
  },
  { key: "area", prompt: "Which area is it in?", options: AREAS },
  {
    key: "timeframe",
    prompt: "When are you hoping to sell?",
    options: ["As soon as possible", "1–3 months", "3–6 months", "6–12 months", "Just exploring"],
  },
];

const CONTACT_STEPS = [
  { key: "name", prompt: "Great — who do we have the pleasure of helping?", type: "text", placeholder: "Your name", autoComplete: "name" },
  { key: "phone", prompt: "Best number to reach you?", type: "tel", placeholder: "(407) 555-0100", autoComplete: "tel" },
  { key: "email", prompt: "And your email?", type: "email", placeholder: "you@example.com", autoComplete: "email" },
] as const;

export type ScoutQuestion = { key: string; prompt: string; options: string[] };

export function Scout({
  initialIntent,
  questions: questionsOverride,
  askSuggestions,
}: {
  initialIntent?: Intent;
  /** Optional custom question set (e.g. the /search buyer-qualifying flow). */
  questions?: ScoutQuestion[];
  /** Optional tappable example questions shown above the "ask Scout anything" input. */
  askSuggestions?: string[];
}) {
  const [intent, setIntent] = useState<Intent | null>(initialIntent ?? null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [qIndex, setQIndex] = useState(0);
  const [cIndex, setCIndex] = useState(0);
  const [phase, setPhase] = useState<"questions" | "contact" | "consent" | "done">("questions");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [askInput, setAskInput] = useState("");
  const [askLog, setAskLog] = useState<{ q: string; a: string }[]>([]);
  const [asking, setAsking] = useState(false);
  const [sessionId] = useState(() => `web-${Math.random().toString(36).slice(2, 10)}`);

  const questions =
    questionsOverride ?? (intent === "Selling" ? SELLER_QUESTIONS : BUYER_QUESTIONS);
  const trail: string[] = [];
  if (intent) trail.push(intent === "Buying" ? "I'm buying" : "I'm selling");
  questions.slice(0, qIndex).forEach((q) => answers[q.key] && trail.push(answers[q.key]));
  CONTACT_STEPS.slice(0, cIndex).forEach((s) => answers[s.key] && trail.push(answers[s.key]));

  function pickIntent(next: Intent) {
    setIntent(next);
    setQIndex(0);
    setPhase("questions");
  }

  function answerQuestion(value: string) {
    const q = questions[qIndex];
    setAnswers((a) => ({ ...a, [q.key]: value }));
    if (qIndex + 1 < questions.length) {
      setQIndex(qIndex + 1);
    } else {
      setPhase("contact");
    }
  }

  function validateContact(step: (typeof CONTACT_STEPS)[number], value: string): string {
    const v = value.trim();
    if (step.key === "name" && v.length < 2) return "Please tell us your name.";
    if (step.key === "phone" && !/^[\d\s()+.\-]{7,}$/.test(v)) return "Please enter a valid phone number.";
    if (step.key === "email" && !/^\S+@\S+\.\S+$/.test(v)) return "Please enter a valid email address.";
    return "";
  }

  function submitContactStep() {
    const step = CONTACT_STEPS[cIndex];
    const err = validateContact(step, inputValue);
    if (err) {
      setError(err);
      return;
    }
    setError("");
    setAnswers((a) => ({ ...a, [step.key]: inputValue.trim() }));
    setInputValue("");
    if (cIndex + 1 < CONTACT_STEPS.length) {
      setCIndex(cIndex + 1);
    } else {
      setPhase("consent");
    }
  }

  async function finish() {
    if (!consent) {
      setError("Please confirm you consent to be contacted.");
      return;
    }
    setError("");
    setSubmitting(true);
    const summary = questions
      .map((q) => `${q.prompt} ${answers[q.key] ?? "—"}`)
      .join(" | ");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: answers.name,
          email: answers.email,
          phone: answers.phone,
          inquiryType: intent ?? "General question",
          message: `Scout intake (${intent}): ${summary}`,
          preferredContact: "Phone",
          consent: true,
          company: "",
        }),
      });
      const body = (await res.json()) as { ok: boolean };
      if (!body.ok) throw new Error("submit failed");
      setPhase("done");
    } catch {
      setError("Something went wrong sending your answers. Please try again, or call us at (407) 228-1112.");
    } finally {
      setSubmitting(false);
    }
  }

  async function askScout(preset?: string) {
    const q = (preset ?? askInput).trim();
    if (q.length < 2 || asking) return;
    setAskInput("");
    setAsking(true);
    try {
      const res = await fetch("/api/scout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q, session_id: sessionId, context: { intent: intent ?? "", ...answers } }),
      });
      const data = (await res.json()) as { ok: boolean; answer?: string; offline?: boolean };
      const a =
        data.ok && data.answer
          ? data.answer
          : "I'm best with the quick questions above right now — or call us at (407) 228-1112 and a real person will help.";
      setAskLog((log) => [...log, { q, a }]);
    } catch {
      setAskLog((log) => [
        ...log,
        { q, a: "I couldn't reach my brain just now — call (407) 228-1112 and a real person will help." },
      ]);
    } finally {
      setAsking(false);
    }
  }

  const progress =
    phase === "done"
      ? 1
      : phase === "consent"
        ? 0.9
        : phase === "contact"
          ? 0.5 + (cIndex / CONTACT_STEPS.length) * 0.4
          : intent
            ? 0.1 + (qIndex / questions.length) * 0.4
            : 0.02;

  return (
    <div className="overflow-hidden rounded-xl border border-ink/10 bg-soft-white shadow-sm">
      {/* Scout header */}
      <div className="flex items-center gap-3 border-b border-ink/10 bg-ink px-6 py-4">
        <BTMark className="h-8 w-8 text-gold-light" />
        <div>
          <p className="text-sm font-semibold text-soft-white">
            Scout<span className="align-super text-[9px]">™</span>
          </p>
          <p className="text-xs text-cream/60">Bear Team&rsquo;s intake assistant — a few quick questions, then you pick a time with Bethanne.</p>
        </div>
      </div>

      {/* Progress */}
      <div aria-hidden="true" className="h-1 w-full bg-cream">
        <div className="h-1 bg-gold transition-all duration-500" style={{ width: `${progress * 100}%` }} />
      </div>

      <div className="p-6 md:p-8">
        {/* Answer trail */}
        {trail.length > 0 && phase !== "done" ? (
          <ul className="mb-5 flex flex-wrap gap-2" aria-label="Your answers so far">
            {trail.map((item, i) => (
              <li key={`${item}-${i}`} className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-900">
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {/* Ask Scout™ — free-text AI answers (Claude Sonnet via scout-chat) */}
        {phase !== "done" && askLog.length > 0 ? (
          <div className="mb-5 space-y-3" aria-live="polite">
            {askLog.map((entry, i) => (
              <div key={i} className="space-y-2">
                <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-teal-700 px-4 py-2 text-sm text-soft-white">
                  {entry.q}
                </p>
                <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-cream px-4 py-2 text-sm leading-relaxed text-charcoal">
                  {entry.a}
                </p>
              </div>
            ))}
          </div>
        ) : null}

        {phase === "done" ? (
          <div className="text-center" role="status">
            <p className="font-display text-2xl font-medium text-ink">
              You&rsquo;re all set{answers.name ? `, ${answers.name.split(" ")[0]}` : ""}.
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
              Scout passed your answers to the team. Lock in your time with Bethanne now — 30
              minutes, no obligation:
            </p>
            <a
              href={externalLinks.bethanneBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[52px] items-center gap-2 rounded-md bg-gold px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              Book 30 Minutes with Bethanne
              <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 3.5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3" />
                <path d="M9.5 2.5h4v4" />
                <path d="M13.5 2.5 7 9" />
              </svg>
            </a>
            <p className="mt-4 text-xs text-muted">
              Prefer to talk now? Call{" "}
              <a href="tel:4072281112" className="font-semibold text-teal-800 underline-offset-2 hover:underline">
                (407) 228-1112
              </a>
              .
            </p>
          </div>
        ) : !intent ? (
          <div>
            <p className="font-display text-xl font-medium text-ink">Hi — I&rsquo;m Scout. What brings you in today?</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {(["Buying", "Selling"] as Intent[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => pickIntent(option)}
                  className="min-h-[48px] rounded-md border-2 border-teal-700 px-6 py-3 text-sm font-semibold text-teal-800 transition-colors hover:bg-teal-700 hover:text-soft-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {option === "Buying" ? "I'm buying a home" : "I'm selling a property"}
                </button>
              ))}
            </div>
          </div>
        ) : phase === "questions" ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Question {qIndex + 1} of {questions.length}
            </p>
            <p className="mt-2 font-display text-xl font-medium text-ink">{questions[qIndex].prompt}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {questions[qIndex].options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => answerQuestion(option)}
                  className="min-h-[44px] rounded-full border border-teal-700/40 bg-soft-white px-5 py-2.5 text-sm font-medium text-charcoal transition-colors hover:border-teal-700 hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : phase === "contact" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitContactStep();
            }}
          >
            <p className="font-display text-xl font-medium text-ink">{CONTACT_STEPS[cIndex].prompt}</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                key={CONTACT_STEPS[cIndex].key}
                type={CONTACT_STEPS[cIndex].type}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={CONTACT_STEPS[cIndex].placeholder}
                autoComplete={CONTACT_STEPS[cIndex].autoComplete}
                aria-label={CONTACT_STEPS[cIndex].prompt}
                aria-invalid={error ? true : undefined}
                autoFocus
                className={cn(
                  "min-h-[48px] w-full flex-1 rounded-md border bg-soft-white px-4 py-3 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700",
                  error ? "border-red-700/60" : "border-ink/15",
                )}
              />
              <button
                type="submit"
                className="min-h-[48px] rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-soft-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                Next
              </button>
            </div>
            {error ? (
              <p role="alert" className="mt-2 text-xs font-medium text-red-800">
                {error}
              </p>
            ) : null}
          </form>
        ) : (
          <div>
            <p className="font-display text-xl font-medium text-ink">Last step — may we contact you?</p>
            <div className={cn("mt-4 rounded-md border p-4", error ? "border-red-700/50 bg-red-50" : "border-ink/10 bg-cream/40")}>
              <label className="flex items-start gap-3 text-xs leading-relaxed text-charcoal-soft">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 h-5 w-5 shrink-0 accent-teal-700"
                />
                <span>
                  {compliance.communicationConsent} See our{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
            </div>
            {error ? (
              <p role="alert" className="mt-2 text-xs font-medium text-red-800">
                {error}
              </p>
            ) : null}
            <button
              type="button"
              disabled={submitting}
              onClick={finish}
              className="mt-5 inline-flex min-h-[48px] items-center rounded-md bg-teal-700 px-8 py-3 text-sm font-semibold text-soft-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Finish & Pick a Time"}
            </button>
          </div>
        )}
        {/* Ask Scout anything — available throughout the intake */}
        {phase !== "done" ? (
          <form
            className="mt-8 border-t border-ink/10 pt-5"
            onSubmit={(e) => {
              e.preventDefault();
              askScout();
            }}
          >
            <label htmlFor="ask-scout" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Or ask Scout anything
            </label>
            {askSuggestions?.length && askLog.length === 0 ? (
              <div className="mt-2.5 flex flex-wrap gap-2" aria-label="Example questions">
                {askSuggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    disabled={asking}
                    onClick={() => askScout(s)}
                    className="rounded-full border border-gold/50 bg-cream/50 px-4 py-1.5 text-xs font-medium text-charcoal transition-colors hover:border-gold hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60"
                  >
                    {s}
                  </button>
                ))}
              </div>
            ) : null}
            <div className="mt-2 flex gap-2">
              <input
                id="ask-scout"
                type="text"
                value={askInput}
                onChange={(e) => setAskInput(e.target.value)}
                placeholder={
                  intent === "Selling"
                    ? "e.g. What will it cost me to sell my home?"
                    : "e.g. What does a buyer consultation cost?"
                }
                maxLength={600}
                className="min-h-[44px] w-full flex-1 rounded-full border border-ink/15 bg-soft-white px-5 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700"
              />
              <button
                type="submit"
                disabled={asking}
                aria-label="Ask Scout"
                className="min-h-[44px] rounded-full bg-ink px-5 text-sm font-semibold text-gold-light transition-colors hover:bg-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60"
              >
                {asking ? "…" : "Ask"}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}
