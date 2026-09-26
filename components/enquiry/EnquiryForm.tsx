"use client";

import { useActionState, type ReactNode } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/actions/enquiry";
import { site, telHref } from "@/content/site";

type EnquiryFormProps = {
  tone?: "light" | "dark";
};

const emptyState: EnquiryState = {
  status: "idle",
  message: "",
  fieldErrors: {},
};

export function EnquiryForm({ tone = "light" }: EnquiryFormProps) {
  const [state, formAction, pending] = useActionState(submitEnquiry, emptyState);
  const dark = tone === "dark";
  const fieldClass = dark
    ? "w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50"
    : "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink";
  const labelClass = dark ? "text-white/80" : "text-ink";

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Full name" name="name" error={state.fieldErrors.name} labelClass={labelClass}>
        <input id="name" name="name" required maxLength={100} autoComplete="name" className={fieldClass} />
      </Field>
      <Field label="Email address" name="email" error={state.fieldErrors.email} labelClass={labelClass}>
        <input id="email" name="email" type="email" required maxLength={100} autoComplete="email" className={fieldClass} />
      </Field>
      <Field label="Phone number" name="phone" error={state.fieldErrors.phone} labelClass={labelClass} optional>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} />
      </Field>
      <Field label="Message" name="message" error={state.fieldErrors.message} labelClass={labelClass}>
        <textarea id="message" name="message" required rows={6} maxLength={5000} className={fieldClass} />
      </Field>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>

      {state.status !== "idle" ? (
        <p
          role="status"
          className={`rounded-xl px-4 py-3 text-sm ${
            state.status === "success"
              ? "bg-emerald-50 text-emerald-900"
              : state.status === "unavailable"
                ? "bg-amber-50 text-amber-950"
                : "bg-red-50 text-red-900"
          }`}
        >
          {state.message}{" "}
          {state.status !== "success" ? (
            <>
              Call{" "}
              <a className="font-semibold underline" href={telHref(site.phone)}>
                {site.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a className="font-semibold underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </>
          ) : null}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  name,
  error,
  labelClass,
  optional = false,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  labelClass: string;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className={`mb-1.5 block text-sm font-semibold ${labelClass}`}>
        {label}
        {optional ? <span className="font-medium text-muted"> (optional)</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
