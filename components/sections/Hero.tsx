"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroBackground from "@/components/sections/HeroBackground";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

/**
 * Full-bleed hero with an auto-sliding photo carousel (3s crossfade + Ken
 * Burns), an editorial headline that staggers in line-by-line, a tagline, and
 * the two primary CTAs.
 */
export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Headline animates in line by line for a confident, theatrical entrance.
  const lines = ["High in Hospitality.", "Rich in History."];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: reduceMotion ? 0 : 0.3 },
    },
  };
  const line = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink-900">
      {/* Auto-sliding signature photography (3s crossfade). */}
      <HeroBackground />

      {/* Tonal scrims for legibility + the heritage vignette. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-900/70 via-ink-900/30 to-ink-900/85" />
      <div className="pointer-events-none absolute inset-0 vignette" />

      {/* Content */}
      <div className="container-luxe relative z-10 flex h-full flex-col justify-center pb-16 pt-[var(--header-height)]">
        <motion.span
          className="eyebrow mb-6 text-brass-300"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.15 }}
        >
          A Georgetown Tradition &middot; Est. 1933
        </motion.span>

        <motion.h1
          className="max-w-4xl font-display text-5xl font-semibold leading-[1.12] text-cream sm:text-6xl lg:text-8xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {lines.map((text, i) => (
            // pb gives descenders (g, y, p) room so they're never clipped.
            <span key={i} className="block pb-[0.12em]">
              <motion.span variants={line} className="block">
                {i === 1 ? (
                  <>
                    Rich in <span className="italic text-brass-300">History.</span>
                  </>
                ) : (
                  text
                )}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.75 }}
        >
          Savory comfort fare and high-end American cuisine, a Georgetown
          favorite for nearly a century — locally owned for four generations
          since 1933, and the oldest family-owned restaurant in town.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: reduceMotion ? 0 : 0.9 }}
        >
          <ButtonLink href={SITE.reservations.url} external variant="primary">
            Reserve a Table
          </ButtonLink>
          <ButtonLink href="/menus" variant="outline" className="text-cream">
            View Menus
          </ButtonLink>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: reduceMotion ? 0 : 1.3 }}
      >
        <span className="font-sans text-[0.6rem] uppercase tracking-label text-cream/50">
          Scroll
        </span>
        <motion.span
          className="block h-10 w-px bg-gradient-to-b from-brass-300 to-transparent"
          animate={reduceMotion ? {} : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
