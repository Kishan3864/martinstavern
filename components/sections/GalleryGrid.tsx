import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { GALLERY } from "@/lib/gallery-data";

/**
 * Editorial masonry gallery. Uses CSS columns so images of varying heights
 * tile naturally; "tall" and "wide" spans add rhythm. Each tile zooms gently
 * on hover and surfaces its caption.
 */
export default function GalleryGrid() {
  return (
    <div className="gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3 lg:gap-6">
      {GALLERY.map((img, i) => (
        <Reveal
          key={img.caption}
          delay={(i % 3) * 0.06}
          className="mb-4 block break-inside-avoid lg:mb-6"
        >
          <figure className="group relative overflow-hidden rounded-sm">
            <div
              className={`relative w-full ${
                img.span === "tall"
                  ? "aspect-[3/4]"
                  : img.span === "wide"
                    ? "aspect-[4/3]"
                    : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block h-px w-8 bg-brass" />
              <span className="mt-3 block font-display text-lg text-cream">
                {img.caption}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
