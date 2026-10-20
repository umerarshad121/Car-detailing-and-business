"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BUSINESS, SERVICE_OPTIONS } from "@/lib/constants";
import { SectionReveal } from "./SectionReveal";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  const phoneDigits = values.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.service) {
    errors.service = "Select a service type.";
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = "Tell us a bit more (at least 10 characters).";
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    // Client-only: simulate brief processing, then success UI
    window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setValues(initial);
    }, 450);
  }

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionReveal>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ray">
              Contact
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight text-chrome-bright">
              Ready when you are.
            </h2>
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              Call for the fastest response, or send the form below — wash, detail, protect, or
              dent work. We&apos;ll get back to you with next steps.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="label">Phone</p>
                <a
                  href={BUSINESS.phoneTel}
                  className="font-display text-2xl font-bold text-chrome-bright transition-colors hover:text-ray"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div>
                <p className="label">Owner</p>
                <p className="text-chrome-bright">{BUSINESS.owner}</p>
                <a
                  href={BUSINESS.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-steel-soft underline-offset-4 hover:text-ray hover:underline"
                >
                  LinkedIn profile
                </a>
              </div>
              <div>
                <p className="label">Service area</p>
                <p className="text-chrome">{BUSINESS.location}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="relative border border-line-strong bg-bg-elevated/60 p-6 sm:p-8"
              noValidate
            >
              <AnimatePresence>
                {success && (
                  <motion.div
                    role="status"
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg-elevated/95 p-8 text-center backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="font-display text-2xl font-bold text-chrome-bright">
                      Message ready
                    </p>
                    <p className="mt-3 max-w-sm text-muted">
                      Thanks — your details look good. For the quickest reply, call{" "}
                      <a href={BUSINESS.phoneTel} className="text-ray hover:underline">
                        {BUSINESS.phoneDisplay}
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      className="btn-ghost mt-6"
                      onClick={() => setSuccess(false)}
                    >
                      Send another
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={`field ${errors.name ? "field-error" : ""}`}
                    value={values.name}
                    onChange={onChange}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-error">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={`field ${errors.phone ? "field-error" : ""}`}
                    value={values.phone}
                    onChange={onChange}
                    placeholder="(574) 000-0000"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-error">{errors.phone}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={`field ${errors.email ? "field-error" : ""}`}
                    value={values.email}
                    onChange={onChange}
                    placeholder="you@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-error">{errors.email}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="service" className="label">
                    Service type
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={`field ${errors.service ? "field-error" : ""}`}
                    value={values.service}
                    onChange={onChange}
                  >
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-error">{errors.service}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`field resize-y ${errors.message ? "field-error" : ""}`}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Vehicle, timing, and what you’d like done…"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-error">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button type="submit" className="btn-primary" disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                </button>
                <a href={BUSINESS.phoneTel} className="btn-ghost">
                  Or Call Now
                </a>
              </div>
              <p className="mt-4 text-xs text-chrome-dim">
                Form validates on this page only — no backend submit. Prefer a call for booking.
              </p>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
