"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { HOURS, NAV_LINKS, SITE } from "@/lib/site";

/**
 * Site footer: monogram + mission line, quick links, hours, contact, a
 * newsletter capture field, social links, and copyright. The newsletter form
 * is a client-side demo (no backend) — wire it to your ESP of choice.
 */
export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const year = 2026; // Static to keep the component deterministic; update as needed.

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // DEMO ONLY: connect this to your newsletter provider (Mailchimp, Klaviyo…).
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden bg-ink-900 text-cream">
      {/* Brass hairline at the very top of the footer. */}
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass/60 to-transparent" />

      <div className="container-luxe grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:py-24">
        {/* Brand + newsletter */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <div className="self-start">
            <Logo tone="light" />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-cream/60">
            A Georgetown tradition since {SITE.established}. Steaks, seafood, and a
            warm welcome on Wisconsin Avenue.
          </p>

          <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
            <label
              htmlFor="newsletter"
              className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300"
            >
              Join our list
            </label>
            {submitted ? (
              <p className="text-sm text-cream/80" role="status">
                Thank you — we&rsquo;ll be in touch with news from the tavern.
              </p>
            ) : (
              <div className="flex items-center gap-2 border-b border-cream/20 pb-2 transition-colors focus-within:border-brass">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full bg-transparent font-sans text-sm text-cream placeholder:text-cream/40 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="shrink-0 font-sans text-xs uppercase tracking-wide text-brass-300 transition-colors hover:text-brass"
                >
                  Join
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Explore */}
        <nav aria-label="Footer" className="flex flex-col gap-4">
          <h3 className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300">
            Explore
          </h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-underline text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hours */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300">
            Hours
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-cream/70">
            {HOURS.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day.slice(0, 3)}</span>
                <span className="text-cream/90">{h.hours}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-brass-300">Brunch daily until 4 PM</p>
        </div>

        {/* Visit */}
        <div className="flex flex-col gap-4">
          <h3 className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300">
            Visit
          </h3>
          <address className="not-italic text-sm leading-relaxed text-cream/70">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
          </address>
          <a
            href={SITE.phone.href}
            className="link-underline text-sm text-cream/70 transition-colors hover:text-cream"
          >
            {SITE.phone.display}
          </a>
          <div className="mt-2 flex gap-4">
            {Object.values(SITE.social).map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-cream/60 transition-colors hover:text-brass-300"
              >
                <SocialIcon name={s.label} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-cream/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/40 sm:flex-row">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="tracking-wide">
            Designed with care in Georgetown, Washington&nbsp;D.C.
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Minimal inline social icons (no icon-library dependency). */
function SocialIcon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  } as const;

  if (name === "Instagram") {
    return (
      <svg {...common}>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.74.07-.9.04-1.38.2-1.7.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.28.8-.32 1.7C3.42 8.5 3.4 8.86 3.4 12s.02 3.5.09 4.74c.04.9.2 1.38.32 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.28 1.7.32 1.24.07 1.6.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.2 1.7-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.28-.8.32-1.7.07-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.04-.9-.2-1.38-.32-1.7a2.85 2.85 0 00-.69-1.06 2.85 2.85 0 00-1.06-.69c-.32-.12-.8-.28-1.7-.32C15.5 4 15.14 4 12 4zm0 3.06A4.94 4.94 0 1012 17a4.94 4.94 0 000-9.88zm0 8.14A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm6.3-8.34a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg {...common}>
        <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" />
      </svg>
    );
  }
  // Twitter / X
  return (
    <svg {...common}>
      <path d="M18.9 2.5h3.3l-7.2 8.23L23.5 21.5h-6.6l-5.18-6.77-5.92 6.77H2.5l7.7-8.8L2 2.5h6.77l4.68 6.19L18.9 2.5zm-1.16 17h1.83L8.34 4.4H6.38l11.36 15.1z" />
    </svg>
  );
}
