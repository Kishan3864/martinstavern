import type Lenis from "lenis";

/**
 * Allow components to reach the shared Lenis instance created by
 * SmoothScroll for programmatic, eased anchor scrolling.
 */
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export {};
