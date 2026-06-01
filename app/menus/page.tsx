import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import MenuTabs from "@/components/menu/MenuTabs";
import { ButtonLink } from "@/components/ui/Button";
import { SITE } from "@/lib/site";
import { MENU_FOOTNOTES } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Menus",
  description:
    "Browse the full Martin's Tavern menus — Brunch & Lunch, Dinner, Wine & Beer, and Cocktails & Dessert. Classic upscale American cooking in Georgetown.",
};

/**
 * Dedicated menus page. The `?tab=` query param (set by the home preview
 * cards) selects which menu opens first.
 */
export default function MenusPage({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="Dining at Martin's"
        title="The Menus"
        intro="Beautifully typeset and served all day — from a leisurely brunch to a celebratory dinner."
        // PLACEHOLDER: Replace with a styled overhead shot of a full table.
        image="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=2000&q=80"
        imageAlt="An array of plated dishes on a dark table, seen from above"
      />

      <section className="bg-cream py-16 lg:py-24">
        <div className="container-luxe max-w-5xl">
          <MenuTabs initial={searchParams.tab} />

          {/* Footnotes (transcribed from the printed menus) + reserve CTA */}
          <div className="mt-16 flex flex-col gap-8 border-t border-ink/10 pt-10">
            <ul className="flex flex-col gap-2">
              {MENU_FOOTNOTES.map((note, i) => (
                <li
                  key={i}
                  className="max-w-3xl text-xs leading-relaxed text-ink/50"
                >
                  {i === 0 ? "* " : ""}
                  {note}
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="text-sm italic text-ink/55">
                Menus change with the season and the market — please ask your
                server about today&rsquo;s selections and specials.
              </p>
              <ButtonLink href={SITE.reservations.url} external variant="primary">
                Reserve a Table
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
