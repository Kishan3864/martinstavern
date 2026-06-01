import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/ui/InquiryForm";
import { ButtonLink } from "@/components/ui/Button";
import { HOURS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Martin's Tavern in Georgetown, Washington D.C. — address, phone, hours, reservations, and a message form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come say hello"
        intro="Reservations, private events, or simply a question — we'd love to hear from you."
        // PLACEHOLDER: Replace with the Georgetown exterior / front-door photo.
        image="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Historic Georgetown storefront at dusk"
      />

      <section className="bg-cream py-24 lg:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Details column */}
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Visit & Reach Us"
              title="Find us in Georgetown"
            />

            <div className="flex flex-col gap-8">
              <Detail label="Address">
                <address className="not-italic font-display text-xl leading-relaxed text-ink">
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </address>
                <a
                  href={SITE.map.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-2 inline-block text-sm text-bordeaux"
                >
                  Get Directions &rarr;
                </a>
              </Detail>

              <Detail label="Phone">
                <a
                  href={SITE.phone.href}
                  className="link-underline font-display text-xl text-ink"
                >
                  {SITE.phone.display}
                </a>
              </Detail>

              <Detail label="Email">
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline font-display text-xl text-ink"
                >
                  {SITE.email}
                </a>
              </Detail>

              <Detail label="Hours">
                <ul className="flex flex-col gap-1.5 text-sm text-ink/70">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6">
                      <span>{h.day}</span>
                      <span className="tabular-nums text-ink">{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs italic text-brass">
                  Brunch served every day until 4 PM.
                </p>
              </Detail>

              <Detail label="Follow Along">
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {Object.values(SITE.social).map((s) => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-sm text-ink/70"
                    >
                      {s.label} {s.handle}
                    </a>
                  ))}
                </div>
              </Detail>
            </div>

            <ButtonLink href={SITE.reservations.url} external variant="primary">
              Reserve on Resy
            </ButtonLink>
          </div>

          {/* Form + map column */}
          <div className="flex flex-col gap-10">
            <Reveal from="left">
              <div className="rounded-sm border border-ink/10 bg-cream-200 p-8 lg:p-10">
                <h3 className="mb-8 font-display text-2xl text-ink">
                  Send us a message
                </h3>
                <InquiryForm variant="contact" />
              </div>
            </Reveal>

            <Reveal from="left" delay={0.1}>
              <div className="relative h-80 overflow-hidden rounded-sm border border-ink/10 shadow-luxe-sm">
                <iframe
                  title="Map showing Martin's Tavern at 1264 Wisconsin Avenue NW, Washington, DC"
                  src={SITE.map.embed}
                  className="h-full w-full grayscale-[0.2] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Detail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-l-2 border-brass/40 pl-5">
      <span className="font-sans text-[0.65rem] uppercase tracking-label text-bordeaux">
        {label}
      </span>
      {children}
    </div>
  );
}
