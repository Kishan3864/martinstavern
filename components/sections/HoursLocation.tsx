import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { HOURS, SITE } from "@/lib/site";

/**
 * Hours & location: an embedded Google Map paired with the address, a
 * click-to-call phone number, the full week's hours, and quick directions.
 */
export default function HoursLocation() {
  return (
    <section id="visit" className="bg-cream-200 py-24 lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Hours & Location"
          title="Find us in Georgetown"
          intro="On Wisconsin Avenue at the corner of N Street — the same address since 1933."
          className="mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Map */}
          <Reveal>
            <div className="relative h-full min-h-[22rem] overflow-hidden rounded-sm border border-ink/10 shadow-luxe-sm">
              <iframe
                title="Map showing Martin's Tavern at 1264 Wisconsin Avenue NW, Washington, DC"
                src={SITE.map.embed}
                className="h-full min-h-[22rem] w-full grayscale-[0.2] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>

          {/* Details */}
          <Reveal from="left" delay={0.1}>
            <div className="flex h-full flex-col gap-8 rounded-sm bg-ink-900 p-8 text-cream lg:p-10">
              {/* Address + phone */}
              <div className="flex flex-col gap-5 border-b border-cream/10 pb-8">
                <div>
                  <h3 className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300">
                    Address
                  </h3>
                  <address className="mt-3 not-italic font-display text-xl leading-relaxed text-cream">
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </address>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <a
                    href={SITE.phone.href}
                    className="link-underline font-sans text-sm text-cream/80 transition-colors hover:text-brass-300"
                  >
                    {SITE.phone.display}
                  </a>
                  <a
                    href={SITE.map.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline font-sans text-sm text-cream/80 transition-colors hover:text-brass-300"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              {/* Hours table */}
              <div>
                <h3 className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300">
                  Hours
                </h3>
                <ul className="mt-4 flex flex-col">
                  {HOURS.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-baseline justify-between gap-4 border-b border-cream/10 py-2.5 last:border-0"
                    >
                      <span className="font-sans text-sm text-cream/70">
                        {h.day}
                      </span>
                      <span aria-hidden className="leader border-cream/15" />
                      <span className="font-sans text-sm tabular-nums text-cream">
                        {h.hours}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-sans text-xs italic text-brass-300">
                  Brunch served every day until 4 PM.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
