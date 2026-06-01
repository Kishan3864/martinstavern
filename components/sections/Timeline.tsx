"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { TIMELINE, type Milestone } from "@/lib/timeline-data";

/**
 * The history timeline — the visual centerpiece.
 *
 * A vertical brass "spine" runs down the centre (left on mobile). As the
 * section scrolls through the viewport, a brighter brass line fills the spine
 * from top to bottom, and each milestone card reveals as it arrives. Cards
 * alternate left/right on desktop for an editorial rhythm.
 */
export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });

  // The filled portion of the spine tracks scroll progress.
  const fillHeight = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ["100%", "100%"] : ["0%", "100%"]
  );

  return (
    <section className="relative overflow-hidden bg-ink-900 py-24 text-cream lg:py-36">
      {/* Soft forest-green glow to add depth to the dark field. */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-forest/20 blur-[120px]" />

      <div className="container-luxe relative">
        <SectionHeading
          eyebrow="Our History"
          title={
            <>
              Nine decades on
              <br /> Wisconsin Avenue
            </>
          }
          intro="From a Prohibition-era pour to a presidential institution — the moments that made Martin's a Washington landmark."
          align="center"
          tone="dark"
          className="mb-20 lg:mb-28"
        />

        {/* Spine + milestones */}
        <div ref={ref} className="relative">
          {/* Base spine */}
          <div className="absolute left-6 top-0 h-full w-px bg-cream/15 lg:left-1/2 lg:-translate-x-1/2" />
          {/* Animated brass fill */}
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-brass via-brass to-brass/40 lg:left-1/2 lg:-translate-x-1/2"
          />

          <ol className="flex flex-col gap-16 lg:gap-4">
            {TIMELINE.map((m, i) => (
              <TimelineItem key={m.year} milestone={m} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const isRight = index % 2 === 1;

  return (
    <li className="relative">
      <div
        className={`grid lg:grid-cols-2 lg:items-center lg:gap-16 ${
          isRight ? "lg:[&>*:first-child]:col-start-2" : ""
        }`}
      >
        {/* Card */}
        <motion.div
          className={`relative pl-16 lg:pl-0 ${isRight ? "lg:order-2 lg:pl-16" : "lg:order-1 lg:pr-16 lg:text-right"}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Node on the spine */}
          <span className="absolute left-6 top-2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center lg:left-auto lg:right-auto">
            <span
              className={`absolute h-3 w-3 rounded-full bg-brass ${
                isRight
                  ? "lg:-left-[4.05rem]"
                  : "lg:left-auto lg:-right-[4.05rem]"
              }`}
            />
          </span>

          <span className="font-sans text-xs uppercase tracking-label text-brass-300">
            {milestone.year}
          </span>
          <h3 className="mt-3 font-display text-2xl font-semibold text-cream sm:text-3xl">
            {milestone.title}
          </h3>
          <p
            className={`mt-4 max-w-md text-sm leading-relaxed text-cream/65 ${
              isRight ? "" : "lg:ml-auto"
            }`}
          >
            {milestone.description}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className={`mt-6 pl-16 lg:mt-0 lg:pl-0 ${isRight ? "lg:order-1" : "lg:order-2"}`}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="group relative aspect-[16/10] overflow-hidden rounded-sm shadow-luxe">
            <Image
              src={milestone.image}
              alt={milestone.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent" />
            <span className="absolute right-4 top-4 font-display text-5xl font-bold text-cream/15">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
    </li>
  );
}
