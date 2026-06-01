import { type MenuItem } from "@/lib/menu-data";

/**
 * A single menu line in the classic style: dish name and price tied together
 * with a dotted leader, description set quietly beneath. An optional brass tag
 * (e.g. "Signature") flags standout dishes.
 */
export default function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="group py-3">
      <div className="flex items-baseline gap-3">
        <h4 className="font-display text-lg font-medium text-ink transition-colors duration-300 group-hover:text-bordeaux">
          {item.name}
          {item.tag && (
            <span className="ml-3 align-middle font-sans text-[0.6rem] font-semibold uppercase tracking-wide text-brass">
              {item.tag}
            </span>
          )}
        </h4>
        {/* Dotted leader + price, shown only when the item carries a price.
            Price-less items (e.g. the $8-each sides list) render name-only. */}
        {item.price && (
          <>
            <span aria-hidden="true" className="leader" />
            <span className="whitespace-nowrap font-display text-lg font-medium text-bordeaux">
              {item.price}
            </span>
          </>
        )}
      </div>
      {item.description && (
        <p className="mt-1 max-w-prose text-sm leading-relaxed text-ink/60">
          {item.description}
        </p>
      )}
    </li>
  );
}
