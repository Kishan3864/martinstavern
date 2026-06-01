import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";

/**
 * Warm introduction with an asymmetric editorial layout: copy on the left,
 * a tall image with a layered brass frame and an owner pull-quote card on the
 * right.
 */
export default function Welcome() {
  return (
    <section className="relative bg-cream py-24 lg:py-36">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        {/* Copy */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Welcome"
            title={
              <>
                A Georgetown
                <br /> Tradition
              </>
            }
            intro="In an era of constant change, some things remain great. The historic service, authentic ambiance, savory comfort fare and high-end American cuisine at Martin's Tavern has remained a Georgetown favorite for nearly a century. Locally owned for four generations since 1933, and the oldest family-owned restaurant in town, Martin's is a long-standing and beloved Washington DC institution and landmark."
          />

          <Reveal delay={0.1}>
            <p className="max-w-prose text-base leading-relaxed text-ink/70">
              Through our 90+ year history, we have and will continue to provide
              the best possible customer experience for our guests through
              quality service, food &amp; beverage, generosity, and compassion.
              Martin&rsquo;s Tavern is a family, and we want to extend our values
              of respect and love for each other to the Washington, DC community,
              surrounding areas and beyond.
            </p>
          </Reveal>

          {/* Owner pull-quote */}
          <Reveal delay={0.15}>
            <figure className="relative mt-2 max-w-prose border-l-2 border-brass pl-6">
              <span
                aria-hidden="true"
                className="absolute -left-1 -top-6 font-display text-7xl leading-none text-brass/30"
              >
                &ldquo;
              </span>
              <blockquote className="font-display text-xl italic leading-relaxed text-ink sm:text-2xl">
                We know people want to feel recognized, important and respected
                &ndash; they want to feel at home.
              </blockquote>
              <figcaption className="mt-4 font-sans text-xs uppercase tracking-wide text-ink/60">
                <span className="text-bordeaux">{SITE.owner}</span> &middot;{" "}
                {SITE.ownerNote}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Image with offset brass frame */}
        <Reveal from="left" delay={0.1}>
          <div className="relative">
            <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-sm border border-brass/50 sm:block" />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm shadow-luxe">
              {/* PLACEHOLDER: Replace with a portrait of the owner or a classic
                  interior detail (the bar, a booth, brass rails). */}
              <Image
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1100&q=80"
                alt="Glasses of red wine on a polished wooden tavern table"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/30 to-transparent" />
            </div>

            {/* Floating "est." badge */}
            <div className="absolute -bottom-6 left-6 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-bordeaux text-cream shadow-luxe-sm">
              <span className="font-sans text-[0.5rem] uppercase tracking-label text-brass-300">
                Est.
              </span>
              <span className="font-display text-2xl font-semibold leading-none">
                1933
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
