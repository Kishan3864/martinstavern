"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

/**
 * Auto-advancing hero slideshow. Crossfades through the signature Martin's
 * Tavern photography every 3 seconds with a slow Ken Burns zoom for life.
 * Honours reduced-motion by showing a single still image. Slide dots let the
 * visitor jump manually.
 */

// Real Martin's Tavern hero photography, stored locally in /public.
const SLIDES = [
  { src: "/images/hero/strip-steak.jpg", alt: "Martin's Tavern aged strip steak" },
  { src: "/images/hero/exterior.png", alt: "Martin's Tavern Georgetown storefront at dusk" },
  { src: "/images/hero/special.jpg", alt: "A signature Martin's Tavern dish" },
  { src: "/images/hero/lamb.png", alt: "Martin's Tavern grilled rack of lamb" },
  { src: "/images/hero/cocktail.jpg", alt: "A classic Martin's Tavern cocktail at the bar" },
];

const INTERVAL_MS = 3000;

export default function HeroBackground() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <div className="absolute inset-0">
        <Image
          src={SLIDES[0].src}
          alt={SLIDES[0].alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.09 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.2, ease: "easeInOut" },
            scale: { duration: INTERVAL_MS / 1000 + 1.2, ease: "linear" },
          }}
        >
          <Image
            src={SLIDES[index].src}
            alt={SLIDES[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 z-20 flex gap-2 sm:right-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-6 bg-brass" : "w-1.5 bg-cream/40 hover:bg-cream/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
