import Reveal from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

/**
 * A confident, centered reservations CTA band linking out to Resy, with the
 * phone number as a secondary option for those who'd rather call.
 */
export default function Reservations() {
  return (
    <section
      id="reserve"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink-900 py-28 text-center text-cream"
    >
      {/* PLACEHOLDER: Replace with a warm, inviting full table or dining-room shot. */}
      <ParallaxImage
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
        alt="An elegant table set for dinner in a warm dining room"
        strength={90}
        className="absolute inset-0 h-full w-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink-900/80" />
      <div className="absolute inset-0 vignette" />

      <div className="container-luxe relative z-10 flex flex-col items-center">
        <Reveal>
          <span className="eyebrow text-brass-300">Reservations</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-6xl">
            Your table at Martin&rsquo;s is waiting
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Book in seconds through Resy, or call us directly — we&rsquo;ll
            always find room for one more.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
            <ButtonLink href={SITE.reservations.url} external variant="primary">
              Reserve on Resy
            </ButtonLink>
            <a
              href={SITE.phone.href}
              className="link-underline font-sans text-sm tracking-wide text-cream/80 transition-colors hover:text-cream"
            >
              or call {SITE.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
