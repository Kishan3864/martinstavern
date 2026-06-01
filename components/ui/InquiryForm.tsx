"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InquiryFormProps {
  /** Show the event-specific fields (date, guest count, event type). */
  variant?: "event" | "contact";
  tone?: "light" | "dark";
}

const inputBase =
  "w-full border-b bg-transparent py-3 font-sans text-sm transition-colors focus:outline-none";

/**
 * A graceful, accessible inquiry form. This is a front-end demo — on submit it
 * shows a confirmation rather than posting anywhere. Wire `handleSubmit` to
 * your email service, CRM, or a Next.js Route Handler / Server Action.
 */
export default function InquiryForm({
  variant = "contact",
  tone = "light",
}: InquiryFormProps) {
  const [sent, setSent] = useState(false);

  const dark = tone === "dark";
  const border = dark ? "border-cream/25 focus:border-brass" : "border-ink/20 focus:border-bordeaux";
  const text = dark ? "text-cream placeholder:text-cream/40" : "text-ink placeholder:text-ink/40";
  const label = dark ? "text-brass-300" : "text-bordeaux";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // DEMO ONLY — replace with a real submission (Route Handler / ESP / CRM).
    setSent(true);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-sm border p-10 text-center ${border}`}
            role="status"
          >
            <p className={`font-display text-2xl ${dark ? "text-cream" : "text-ink"}`}>
              Thank you.
            </p>
            <p className={`mt-3 text-sm ${dark ? "text-cream/70" : "text-ink/60"}`}>
              We&rsquo;ve received your note and will be in touch shortly to take
              care of the details.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-7"
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="Full Name" labelColor={label}>
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Jacqueline Bouvier"
                  className={`${inputBase} ${border} ${text}`}
                />
              </Field>
              <Field label="Email" labelColor={label}>
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@email.com"
                  className={`${inputBase} ${border} ${text}`}
                />
              </Field>
            </div>

            <div className="grid gap-7 sm:grid-cols-2">
              <Field label="Phone" labelColor={label}>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  placeholder="(202) 000-0000"
                  className={`${inputBase} ${border} ${text}`}
                />
              </Field>

              {variant === "event" ? (
                <Field label="Preferred Date" labelColor={label}>
                  <input
                    type="date"
                    name="date"
                    className={`${inputBase} ${border} ${text}`}
                  />
                </Field>
              ) : (
                <Field label="Subject" labelColor={label}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Reservation, feedback, press…"
                    className={`${inputBase} ${border} ${text}`}
                  />
                </Field>
              )}
            </div>

            {variant === "event" && (
              <div className="grid gap-7 sm:grid-cols-2">
                <Field label="Guests" labelColor={label}>
                  <input
                    type="number"
                    name="guests"
                    min={1}
                    placeholder="20"
                    className={`${inputBase} ${border} ${text}`}
                  />
                </Field>
                <Field label="Occasion" labelColor={label}>
                  <select
                    name="occasion"
                    className={`${inputBase} ${border} ${text} ${dark ? "[&>option]:text-ink" : ""}`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an occasion
                    </option>
                    <option>Private Breakfast</option>
                    <option>Birthday / Celebration</option>
                    <option>Corporate Dinner</option>
                    <option>Engagement / Proposal</option>
                    <option>Other</option>
                  </select>
                </Field>
              </div>
            )}

            <Field
              label={variant === "event" ? "Tell us about your event" : "Message"}
              labelColor={label}
            >
              <textarea
                required
                name="message"
                rows={4}
                placeholder="A few details to help us prepare…"
                className={`${inputBase} ${border} ${text} resize-none`}
              />
            </Field>

            <button type="submit" className="btn-primary mt-2 self-start">
              {variant === "event" ? "Submit Inquiry" : "Send Message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  labelColor,
  children,
}: {
  label: string;
  labelColor: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className={`font-sans text-[0.65rem] uppercase tracking-label ${labelColor}`}>
        {label}
      </span>
      {children}
    </label>
  );
}
