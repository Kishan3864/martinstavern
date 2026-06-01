"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  /** Strength of the parallax drift in pixels. */
  strength?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Tailwind object-position helper. */
  position?: string;
}

/**
 * An image whose vertical position drifts slightly slower than the scroll,
 * producing a refined depth/parallax effect. The image is over-sized and
 * translated within an overflow-hidden frame so no gaps ever appear.
 * Disabled (rendered static) under reduced-motion.
 */
export default function ParallaxImage({
  src,
  alt,
  strength = 80,
  className = "",
  priority = false,
  sizes = "100vw",
  position = "object-center",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-strength, strength]
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 -top-[12%] h-[124%]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${position}`}
        />
      </motion.div>
    </div>
  );
}
