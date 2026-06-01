"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import Logo from "@/components/ui/Logo";

const SESSION_KEY = "mt_intro_seen";

/**
 * Elegant page-load intro: an ink "curtain" with the monogram that draws a
 * brass rule, then lifts away to reveal the site. Plays once per browser
 * session (so internal navigation doesn't replay it) and is skipped entirely
 * for reduced-motion users.
 */
export default function PageIntro() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const seen = sessionStorage.getItem(SESSION_KEY);
    if (seen) return;

    setShow(true);
    // Lock scroll while the curtain is up.
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      setShow(false);
      document.body.style.overflow = "";
    }, 2300);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <Logo tone="light" asLink={false} className="scale-125" />
            </motion.div>

            {/* Brass rule that draws itself across the monogram. */}
            <motion.span
              className="block h-px bg-brass"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 180, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="font-sans text-[0.6rem] uppercase tracking-label text-cream/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              A Georgetown Tradition
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
