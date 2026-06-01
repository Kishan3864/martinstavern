import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { ButtonLink } from "@/components/ui/Button";

/**
 * A full-bleed feature band for brunch. Dark image with a parallax drift, a
 * large headline, and the key selling line: brunch every day until 4 PM.
 */
export default function Brunch() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink-900 py-28 text-cream">
      {/* PLACEHOLDER: Replace with a beautiful brunch spread / mimosa shot. */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1533920379810-6bedac961555?auto=format&fit=crop&w=2000&q=80"
        alt="A sunlit brunch spread with eggs, pastries, and fresh juice"
        strength={100}
        className="absolute inset-0 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/92 via-ink-900/70 to-ink-900/40" />

      <div className="container-luxe relative z-10">
        <div className="max-w-xl">
          <Reveal>
            <span className="eyebrow text-brass-300">A Georgetown Ritual</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              Brunch, served every day
              <span className="text-brass-300"> until 4 PM</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-cream/75 sm:text-lg">
              Slow mornings deserve a proper table. Crab cake Benedict, golden
              buttermilk pancakes, and a perfectly cold mimosa — poured from
              opening until late afternoon, seven days a week.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="/menus?tab=lunch-brunch" variant="primary">
                See the Brunch Menu
              </ButtonLink>
            </div>
          </Reveal>

          {/* Quick highlight chips */}
          <Reveal delay={0.2}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-sans text-xs uppercase tracking-wide text-cream/55">
              <li>Bottomless Coffee</li>
              <li aria-hidden className="text-brass/50">
                /
              </li>
              <li>Mimosas &amp; Bellinis</li>
              <li aria-hidden className="text-brass/50">
                /
              </li>
              <li>Served 7 Days</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
