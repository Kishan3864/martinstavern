import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Timeline from "@/components/sections/Timeline";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Martin's Tavern — founded in 1933 by former Major League Baseball player Billy Martin and run by four generations of the Martin family in Georgetown, D.C.",
};

const FACTS = [
  { value: "1933", label: "The year we opened our doors" },
  { value: "4", label: "Generations of the Martin family" },
  { value: "11", label: "U.S. Presidents served" },
  { value: "#1", label: "Oldest family-owned restaurant in D.C." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A Georgetown Tradition"
        intro="High in hospitality, rich in history. For nearly nine decades Martin's Tavern has welcomed presidents, statesmen and neighbors alike to its booths on Wisconsin Avenue."
        // PLACEHOLDER: Replace with a historic exterior or vintage interior photo.
        image="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Historic Georgetown storefront on a quiet evening"
      />

      {/* Narrative intro */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow="Since 1933"
              title="Built by a ballplayer, kept by a family"
              intro="When former Major League Baseball player Billy Martin opened his tavern on Wisconsin Avenue, he wanted a place where everyone — from the corner regular to the sitting senator — felt equally at home."
            />
            <Reveal delay={0.1}>
              <p className="max-w-prose text-base leading-relaxed text-ink/70">
                That welcome has drawn an extraordinary cast. Every president
                from Harry S. Truman through George W. Bush has dined here;
                Senator John F. Kennedy proposed to Jacqueline Lee Bouvier in
                Booth 3; and baseball legends Mickey Mantle, Ty Cobb and Yogi
                Berra gathered in the Dugout Room.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-prose text-base leading-relaxed text-ink/70">
                Now under {SITE.owner}, the fourth generation behind the bar,
                Martin&rsquo;s remains the oldest family-owned restaurant in
                Washington — a living landmark where the history is real, the
                booths are original, and the welcome is exactly as warm as it
                always was.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ButtonLink href={SITE.reservations.url} external variant="primary">
                Dine With Us
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal from="left">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm shadow-luxe">
              {/* PLACEHOLDER: Replace with a portrait of the Martin family / owner. */}
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=80"
                alt="Warm wooden interior of a historic tavern dining room"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Facts band */}
      <section className="bg-bordeaux py-20 text-cream">
        <div className="container-luxe grid grid-cols-2 gap-10 lg:grid-cols-4">
          {FACTS.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.08} className="text-center">
              <div className="flex flex-col items-center gap-3">
                <span className="font-display text-5xl font-semibold text-brass-300 sm:text-6xl">
                  {f.value}
                </span>
                <span className="max-w-[12rem] font-sans text-xs uppercase tracking-wide text-cream/70">
                  {f.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The full timeline showpiece */}
      <Timeline />
    </>
  );
}
