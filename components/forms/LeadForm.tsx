"use client";

import Link from "next/link";
import { useId, useRef, useState } from "react";
import { leadSchemas, type LeadKind } from "@/lib/forms/schemas";
import { compliance } from "@/config/compliance";
import { cn } from "@/lib/utils/cn";
import type { FieldConfig } from "./definitions";

/**
 * Accessible lead-form engine used by all four forms (contact, buyer, seller,
 * valuation).
 * - Client-side zod validation (same schemas the server uses)
 * - Server-side re-validation via /api/<kind>
 * - Error summary (role="alert", focused on failure) + field-level errors
 *   announced via aria-describedby
 * - Honeypot spam trap; success and failure states; consent checkbox
 * - Works entirely with keyboard; visible focus throughout
 */
export function LeadForm({
  kind,
  fields,
  submitLabel,
  successTitle = "Thank you — we received your request.",
  successBody = "A member of Bear Team will follow up using your preferred contact method.",
  footnote,
}: {
  kind: LeadKind;
  fields: FieldConfig[];
  submitLabel: string;
  successTitle?: string;
  successBody?: string;
  footnote?: string;
}) {
  const formId = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "failed">("idle");
  const [serverError, setServerError] = useState<string>("");
  const summaryRef = useRef<HTMLDivElement>(null);

  const errorEntries = Object.entries(errors);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const values: Record<string, unknown> = {};
    for (const field of fields) values[field.name] = String(data.get(field.name) ?? "");
    values.consent = data.get("consent") === "on";
    values.company = String(data.get("company") ?? "");

    const parsed = leadSchemas[kind].safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "form");
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch(`/api/${kind}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const body = (await res.json()) as {
        ok: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
      };
      if (body.ok) {
        setStatus("success");
        return;
      }
      if (body.fieldErrors) {
        setErrors(body.fieldErrors);
        setStatus("idle");
        requestAnimationFrame(() => summaryRef.current?.focus());
        return;
      }
      setServerError(body.error ?? "Something went wrong. Please try again or call us directly.");
      setStatus("failed");
    } catch {
      setServerError("We couldn't reach the server. Please try again or call us directly.");
      setStatus("failed");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-teal-700/30 bg-teal-50 p-8 text-center">
        <p className="font-display text-xl font-medium text-teal-900">{successTitle}</p>
        <p className="mt-2 text-sm text-charcoal-soft">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {errorEntries.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-md border border-red-700/40 bg-red-50 p-4 text-sm text-red-900"
        >
          <p className="font-semibold">Please correct the following:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errorEntries.map(([field, message]) => (
              <li key={field}>
                <a href={`#${formId}-${field}`} className="underline underline-offset-2">
                  {message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {serverError ? (
        <p role="alert" className="rounded-md border border-red-700/40 bg-red-50 p-4 text-sm text-red-900">
          {serverError}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <Field key={field.name} field={field} formId={formId} error={errors[field.name]} />
        ))}
      </div>

      {/* Honeypot — visually hidden from humans, irresistible to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-company`}>Company (leave blank)</label>
        <input id={`${formId}-company`} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={cn("rounded-md border p-4", errors.consent ? "border-red-700/50 bg-red-50" : "border-ink/10 bg-soft-white")}>
        <div className="flex items-start gap-3">
          <input
            id={`${formId}-consent`}
            name="consent"
            type="checkbox"
            aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
            className="mt-1 h-5 w-5 shrink-0 accent-teal-700"
          />
          <label htmlFor={`${formId}-consent`} className="text-xs leading-relaxed text-charcoal-soft">
            {compliance.communicationConsent} See our{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {errors.consent ? (
          <p id={`${formId}-consent-error`} className="mt-2 text-xs font-medium text-red-800">
            {errors.consent}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-soft-white transition-colors hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>

      {footnote ? <p className="text-xs italic leading-relaxed text-muted">{footnote}</p> : null}
    </form>
  );
}

function Field({
  field,
  formId,
  error,
}: {
  field: FieldConfig;
  formId: string;
  error?: string;
}) {
  const id = `${formId}-${field.name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: field.name,
    required: field.required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    autoComplete: field.autoComplete,
    className: cn(
      "mt-1.5 w-full rounded-md border bg-soft-white px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-700",
      error ? "border-red-700/60" : "border-ink/15",
    ),
  } as const;

  return (
    <div className={field.half ? "" : "sm:col-span-2"}>
      <label htmlFor={id} className="text-sm font-medium text-ink">
        {field.label}
        {field.required ? (
          <span aria-hidden="true" className="text-red-700">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {field.hint ? <p className="mt-0.5 text-xs text-muted">{field.hint}</p> : null}
      {field.type === "textarea" ? (
        <textarea {...shared} rows={4} />
      ) : field.type === "select" ? (
        <select {...shared} defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input {...shared} type={field.type} />
      )}
      {error ? (
        <p id={errorId} className="mt-1.5 text-xs font-medium text-red-800">
          {error}
        </p>
      ) : null}
    </div>
  );
}
