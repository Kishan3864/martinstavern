"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/site";

/**
 * Sticky navigation.
 *
 * - Transparent with cream text while sitting over the dark hero.
 * - On scroll past a small threshold it solidifies into a cream bar with ink
 *   text and a thin brass underline.
 * - Mobile uses an elegant full-height slide-in panel.
 */
export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Solidify the bar once the user scrolls away from the very top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile panel is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const tone: "light" | "dark" = solid ? "dark" : "light";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-luxe ${
        solid
          ? "bg-cream/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* Thin brass underline appears only once solid. */}
      <span
        className={`absolute inset-x-0 bottom-0 h-px origin-left bg-brass transition-transform duration-700 ease-luxe ${
          solid ? "scale-x-100" : "scale-x-0"
        }`}
      />

      <nav className="container-luxe flex h-[var(--header-height)] items-center justify-between">
        <Logo tone={tone} />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`link-underline font-sans text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
                    tone === "light" ? "text-cream/90 hover:text-cream" : "text-ink/80 hover:text-ink"
                  } ${active ? "after:scale-x-100" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SITE.reservations.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex"
          >
            Reserve a Table
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`relative z-50 flex h-11 w-11 items-center justify-center lg:hidden ${
              tone === "light" ? "text-cream" : "text-ink"
            }`}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-6 flex-col items-end gap-[5px]">
              <span
                className={`h-px bg-current transition-all duration-300 ${open ? "w-6 translate-y-[6px] rotate-45" : "w-6"}`}
              />
              <span
                className={`h-px bg-current transition-all duration-300 ${open ? "opacity-0" : "w-4"}`}
              />
              <span
                className={`h-px bg-current transition-all duration-300 ${open ? "w-6 -translate-y-[6px] -rotate-45" : "w-5"}`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile slide-in panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink-900/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed right-0 top-0 z-40 flex h-[100dvh] w-[min(86vw,24rem)] flex-col bg-ink-900 px-8 pb-10 pt-28 lg:hidden"
              initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.5 }}
                    >
                      <Link
                        href={link.href}
                        className={`block border-b border-cream/10 py-4 font-display text-2xl transition-colors ${
                          active ? "text-brass" : "text-cream hover:text-brass-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto flex flex-col gap-4">
                <a
                  href={SITE.reservations.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  Reserve a Table
                </a>
                <a
                  href={SITE.phone.href}
                  className="text-center font-sans text-sm tracking-wide text-cream/70 transition-colors hover:text-brass-300"
                >
                  {SITE.phone.display}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
