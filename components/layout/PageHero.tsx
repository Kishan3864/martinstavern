import { ReactNode } from "react";
import ParallaxImage from "@/components/ui/ParallaxImage";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  image: string;
  imageAlt: string;
}

/**
 * Shared dark hero band for interior pages. Gives each subpage a full-bleed,
 * parallaxed header so the transparent navbar always sits over a dark surface,
 * and establishes a consistent editorial rhythm across the site.
 */
export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-ink-900 pb-16 pt-[calc(var(--header-height)+4rem)] text-cream">
      <ParallaxImage
        src={image}
        alt={imageAlt}
        strength={90}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/60 to-ink-900/40" />
      <div className="absolute inset-0 vignette" />

      <div className="container-luxe relative z-10">
        {eyebrow && (
          <span className="eyebrow mb-5 text-brass-300">{eyebrow}</span>
        )}
        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.03] text-cream sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
