import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

const OFFERINGS = [
  {
    title: "Private Breakfasts",
    copy: "Power breakfasts and morning briefings in a room that has seen its share of Washington dealmaking.",
  },
  {
    title: "Celebrations & Parties",
    copy: "Birthdays, anniversaries, and engagements — including, perhaps, a proposal of your own.",
  },
  {
    title: "Corporate Dinners",
    copy: "Seated dinners and receptions with bespoke menus and a dedicated maître d'.",
  },
];

/**
 * Private events & dining. Split layout: an image with a "host with us" card
 * over it, and a list of event types with a contact CTA.
 */
export default function PrivateEvents() {
  return (
    <section id="events" className="bg-forest py-24 text-cream lg:py-36">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Image */}
        <Reveal from="right">
          <div className="relative">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-sm shadow-luxe lg:aspect-[5/6]">
              {/* PLACEHOLDER: Replace with a private dining room or a set party table. */}
              <Image
                src="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1100&q=80"
                alt="Guests raising glasses at a celebratory private dinner"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1400ms] ease-luxe group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Private Events & Dining"
            title="Host an occasion to remember"
            intro="From intimate private breakfasts to grand celebrations, our historic rooms set a stage that no ordinary venue can. Tell us what you're planning and we'll craft the rest."
            tone="dark"
          />

          <ul className="flex flex-col divide-y divide-cream/15 border-y border-cream/15">
            {OFFERINGS.map((o, i) => (
              <Reveal as="li" key={o.title} delay={i * 0.08}>
                <div className="flex gap-6 py-5">
                  <span className="font-display text-2xl text-brass-300">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-cream">
                      {o.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-cream/65">
                      {o.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <ButtonLink href="/private-events" variant="primary">
              Plan Your Event
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
