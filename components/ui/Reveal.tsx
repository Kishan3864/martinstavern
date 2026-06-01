"use client";

import { ReactNode, type ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  /** Direction the content rises/slides in from. */
  from?: Direction;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Travel distance in pixels. */
  distance?: number;
  className?: string;
  /** Render as a different element (e.g. "li", "span"). */
  as?: "div" | "li" | "span" | "section" | "article";
  once?: boolean;
}

const offset = (dir: Direction, d: number) => {
  switch (dir) {
    case "up":
      return { y: d };
    case "down":
      return { y: -d };
    case "left":
      return { x: d };
    case "right":
      return { x: -d };
    default:
      return {};
  }
};

/**
 * Scroll-triggered reveal: content fades and rises into view as it enters the
 * viewport. Honours reduced-motion by rendering content immediately with no
 * transform. Used on essentially every section for the editorial reveal feel.
 */
export default function Reveal({
  children,
  from = "up",
  delay = 0,
  distance = 28,
  className,
  as = "div",
  once = true,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, ...offset(from, distance) },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Cast to ElementType so the dynamic tag doesn't trip TS's "union too
  // complex" check while still rendering the correct motion element.
  const MotionTag = motion[as] as ElementType;

  if (reduceMotion) {
    const Tag = as as ElementType;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </MotionTag>
  );
}
