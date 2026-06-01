import Reveal from "@/components/ui/Reveal";
import MenuItemRow from "./MenuItemRow";
import { type MenuSection } from "@/lib/menu-data";

/**
 * Renders one titled menu section (e.g. "From the Grill") with its optional
 * kitchen note and the list of dishes.
 */
export default function MenuSectionBlock({
  section,
}: {
  section: MenuSection;
}) {
  return (
    <Reveal className="break-inside-avoid">
      <div className="mb-12">
        <div className="mb-4 flex items-baseline gap-4">
          <h3 className="font-sans text-xs font-semibold uppercase tracking-label text-bordeaux">
            {section.title}
          </h3>
          <span className="h-px flex-1 bg-ink/15" />
        </div>
        {section.note && (
          <p className="mb-4 font-sans text-xs italic text-ink/50">
            {section.note}
          </p>
        )}
        <ul className="divide-y divide-ink/5">
          {section.items.map((item) => (
            <MenuItemRow key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
