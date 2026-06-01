import Link from "next/link";
import { SITE } from "@/lib/site";

interface LogoProps {
  /** Colour tone to render against the current surface. */
  tone?: "light" | "dark";
  className?: string;
  /** When false, renders as a plain span (e.g. inside the intro animation). */
  asLink?: boolean;
}

/**
 * The Martin's Tavern wordmark — a stacked, editorial lockup:
 * a brass "EST. 1933" rule, the name in Playfair, and a location line.
 */
export default function Logo({
  tone = "light",
  className = "",
  asLink = true,
}: LogoProps) {
  const text = tone === "light" ? "text-cream" : "text-ink";
  const sub = tone === "light" ? "text-brass-300" : "text-brass";

  const inner = (
    <span className={`flex flex-col items-center leading-none ${className}`}>
      <span
        className={`mb-1 font-sans text-[0.55rem] uppercase tracking-label ${sub}`}
      >
        Est. {SITE.established}
      </span>
      <span
        className={`font-display text-xl font-semibold tracking-tight sm:text-2xl ${text}`}
      >
        Martin&rsquo;s Tavern
      </span>
      <span
        className={`mt-1 font-sans text-[0.5rem] uppercase tracking-label ${sub}`}
      >
        Georgetown &middot; D.C.
      </span>
    </span>
  );

  if (!asLink) return inner;

  return (
    <Link href="/" aria-label="Martin's Tavern — home" className="inline-block">
      {inner}
    </Link>
  );
}
