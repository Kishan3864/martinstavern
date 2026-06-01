import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { SIGNATURE_DISHES } from "@/lib/gallery-data";

/**
 * Interactive signature-dish grid. Each tile zooms its image on hover and
 * slides up a caption with a brass rule. Editorial, asymmetric column spans
 * keep the grid from feeling like a plain product matrix.
 */
export default function SignatureDishes() {
  return (
    <section id="signature" className="bg-cream py-24 lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Signature Dishes"
          title="Plates worth the journey"
          intro="A few of the dishes our regulars have ordered for decades — and the ones first-timers come back for."
          align="center"
          className="mb-16"
        />

        <div className="grid auto-rows-[15rem] grid-cols-2 gap-4 sm:auto-rows-[18rem] lg:grid-cols-3 lg:gap-6">
          {SIGNATURE_DISHES.map((dish, i) => (
            <Reveal
              key={dish.caption}
              delay={(i % 3) * 0.08}
              // Give the 1st and 6th tiles a taller, feature span on desktop.
              className={`${i === 0 || i === 5 ? "lg:row-span-2" : ""} ${
                i === 0 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <figure className="group relative h-full w-full overflow-hidden rounded-sm">
                <Image
                  src={dish.src}
                  alt={dish.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-110"
                />
                {/* Darkening scrim grows on hover for caption legibility. */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-90 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="block h-px w-8 bg-brass transition-all duration-500 group-hover:w-12" />
                  <span className="mt-3 block font-display text-lg font-medium text-cream">
                    {dish.caption}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
