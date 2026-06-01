import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryGrid from "@/components/sections/GalleryGrid";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Martin's Tavern — the dining room, the famous Proposal Booth, the bar, and the dishes that have defined Georgetown dining since 1933.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look inside"
        intro="The rooms, the details, and the plates that make Martin's, Martin's."
        // PLACEHOLDER: Replace with a striking signature interior or detail shot.
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Warm interior of Martin's Tavern dining room"
      />

      <section className="bg-cream py-20 lg:py-28">
        <div className="container-luxe">
          <GalleryGrid />

          <div className="mt-16 flex flex-col items-center gap-6 text-center">
            <p className="max-w-md text-sm leading-relaxed text-ink/55">
              Photography shown is placeholder imagery for this design — swap in
              the real Martin&rsquo;s Tavern photos to bring the gallery to life.
            </p>
            <ButtonLink href={SITE.reservations.url} external variant="primary">
              Reserve a Table
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
