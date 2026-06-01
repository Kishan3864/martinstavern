import { ReactNode } from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  /** Small uppercase brass eyebrow label. */
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  /** Tone of the surface this heading sits on, for sensible defaults. */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Consistent section header: brass eyebrow, large Playfair title, optional
 * intro paragraph — all wrapped in scroll reveals.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-5 ${isCenter ? "items-center text-center" : "items-start"} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`max-w-3xl text-4xl leading-[1.05] sm:text-5xl lg:text-6xl ${
            tone === "dark" ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={`max-w-prose text-base leading-relaxed sm:text-lg ${
              tone === "dark" ? "text-cream/70" : "text-ink/70"
            } ${isCenter ? "mx-auto" : ""}`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
