import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { MENUS } from "@/lib/menu-data";

/**
 * Home-page menu teaser. Shows the four menu categories as elegant cards that
 * deep-link into the dedicated /menus page (each opens its tab), plus a couple
 * of highlighted dishes to whet the appetite.
 */
export default function MenuPreview() {
  return (
    <section id="menus" className="relative bg-cream-200 py-24 lg:py-36">
      <div className="container-luxe">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="The Menus"
            title={
              <>
                Crafted classics,
                <br /> served all day
              </>
            }
            intro="From a leisurely brunch to a celebratory dinner, every plate is rooted in tradition. Explore each menu in full — beautifully typeset, never a PDF in sight."
          />
          <Reveal from="left">
            <ButtonLink href="/menus" variant="outline" className="text-ink">
              View All Menus
            </ButtonLink>
          </Reveal>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {MENUS.map((menu, i) => (
            <Reveal key={menu.id} delay={i * 0.06}>
              <a
                href={`/menus?tab=${menu.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-sm border border-ink/10 bg-cream transition-all duration-500 ease-luxe hover:-translate-y-1 hover:border-brass/40 hover:shadow-luxe-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={CATEGORY_IMAGES[i]}
                    alt={menu.label}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-sans text-[0.6rem] uppercase tracking-label text-brass-300">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {menu.label}
                    </h3>
                    <p className="mt-2 text-sm text-ink/60">{menu.blurb}</p>
                  </div>
                  <span className="flex items-center gap-2 font-sans text-[0.65rem] uppercase tracking-wide text-bordeaux">
                    Explore
                    <span className="transition-transform duration-500 ease-luxe group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// PLACEHOLDER images for each menu category card. Replace with real photos:
// lunch/brunch spread, plated steak dinner, wine, cocktail/dessert, champagne.
const CATEGORY_IMAGES = [
  "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80", // lunch / brunch
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80", // dinner / steak
  "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80", // wines & beers
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80", // cocktails / dessert
  "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=900&q=80", // champagne
];
