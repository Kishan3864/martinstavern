import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/ui/InquiryForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Private Events",
  description:
    "Host private breakfasts, celebrations, and corporate dinners at Martin's Tavern — a historic Georgetown setting with bespoke menus and dedicated service.",
};

const SPACES = [
  {
    name: "The Dugout",
    capacity: "Up to 20 guests",
    copy: "An intimate, wood-panelled room with the character only nine decades can give it.",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    alt: "Cozy private dining nook with warm lighting",
  },
  {
    name: "The Main Dining Room",
    capacity: "Up to 60 guests",
    copy: "Buyouts of our historic dining room for receptions, seated dinners, and milestone celebrations.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Spacious classic dining room with wooden booths",
  },
  {
    name: "The Bar & Lounge",
    capacity: "Standing receptions",
    copy: "Cocktail-style gatherings around the brass rail where Washington has long gathered.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    alt: "Classic bar with bottles and warm lighting",
  },
];

export default function PrivateEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Private Events & Dining"
        title="Occasions worthy of the room"
        intro="Private breakfasts, parties, and celebrations in a setting steeped in history — with menus and service tailored to you."
        // PLACEHOLDER: Replace with a private party / set event table photo.
        image="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Guests toasting at a celebratory dinner"
      />

      {/* Intro */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="container-luxe max-w-3xl text-center">
          <SectionHeading
            eyebrow="Host With Us"
            title="Every gathering deserves a great room"
            intro="From a twenty-person breakfast to a full buyout, our team will help you choose a space, build a menu, and handle every detail — so you can simply enjoy the occasion."
            align="center"
          />
        </div>

        {/* Spaces */}
        <div className="container-luxe mt-16 grid gap-6 lg:grid-cols-3">
          {SPACES.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink/10 bg-cream-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/50 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="font-sans text-[0.6rem] uppercase tracking-label text-brass">
                    {s.capacity}
                  </span>
                  <h3 className="font-display text-2xl font-medium text-ink">
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/60">{s.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Inquiry form */}
      <section className="bg-ink-900 py-24 text-cream lg:py-32">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Plan Your Event"
              title="Let's begin"
              intro="Share a few details and our events team will craft a proposal for your gathering."
              tone="dark"
            />
            <div className="mt-4 flex flex-col gap-2 text-sm text-cream/70">
              <p>
                Prefer to talk it through?{" "}
                <a
                  href={SITE.phone.href}
                  className="link-underline text-brass-300"
                >
                  {SITE.phone.display}
                </a>
              </p>
              <p>
                Email us at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="link-underline text-brass-300"
                >
                  {SITE.email}
                </a>
              </p>
            </div>
          </div>

          <Reveal from="left">
            <InquiryForm variant="event" tone="dark" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
