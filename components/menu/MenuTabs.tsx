"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import MenuSectionBlock from "./MenuSectionBlock";
import { MENUS } from "@/lib/menu-data";

/**
 * Tabbed, fully responsive menu browser for the /menus page.
 * Tabs switch between Brunch & Lunch, Dinner, Wine & Beer, and Cocktails &
 * Dessert. The active panel fades/rises in. Sections flow in a two-column
 * editorial layout on large screens.
 */
export default function MenuTabs({ initial }: { initial?: string }) {
  const reduceMotion = useReducedMotion();
  const startIndex = Math.max(
    0,
    MENUS.findIndex((m) => m.id === initial)
  );
  const [active, setActive] = useState(startIndex === -1 ? 0 : startIndex);

  const menu = MENUS[active];

  return (
    <div>
      {/* Tab bar */}
      <div
        role="tablist"
        aria-label="Menu categories"
        className="sticky top-[var(--header-height)] z-30 -mx-6 mb-12 flex gap-1 overflow-x-auto border-b border-ink/10 bg-cream/90 px-6 py-3 backdrop-blur-md sm:gap-2"
      >
        {MENUS.map((m, i) => {
          const selected = i === active;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`panel-${m.id}`}
              id={`tab-${m.id}`}
              onClick={() => setActive(i)}
              className={`relative shrink-0 whitespace-nowrap rounded-full px-4 py-2 font-sans text-xs font-semibold uppercase tracking-wide transition-colors duration-300 sm:px-5 ${
                selected
                  ? "text-cream"
                  : "text-ink/55 hover:text-ink"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="menu-tab-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-bordeaux"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={menu.id}
          id={`panel-${menu.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${menu.id}`}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-10 font-display text-xl italic text-ink/70">
            {menu.blurb}
          </p>

          <div className="gap-x-16 lg:columns-2">
            {menu.sections.map((section) => (
              <MenuSectionBlock key={section.title} section={section} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
