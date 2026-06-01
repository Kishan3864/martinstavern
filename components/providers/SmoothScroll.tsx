"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

/**
 * Wraps the app in Lenis for buttery, momentum-based smooth scrolling.
 *
 * Lenis is initialised once on mount and torn down on unmount. We respect
 * `prefers-reduced-motion` by skipping Lenis entirely for those users so the
 * page falls back to the browser's native (instant) scrolling.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      // A classic exponential ease-out for a premium, weighty feel.
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    // Expose the instance so other components (e.g. the navbar's anchor
    // links) can request a smooth, eased scroll to a target.
    window.__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
