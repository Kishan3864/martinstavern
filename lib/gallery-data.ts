/**
 * Photography used by the Signature Dishes grid and the Gallery page.
 * Every entry is an Unsplash placeholder — the `replace` note describes the
 * real Martin's Tavern photo that should take its place.
 */

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** What real photo should replace this placeholder. */
  replace: string;
  /** Optional layout span for the masonry gallery. */
  span?: "tall" | "wide";
}

export const SIGNATURE_DISHES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1100&q=80",
    alt: "Dry-aged steak with herb butter on a dark plate",
    caption: "Bone-In Ribeye",
    replace: "Photo of Martin's signature aged ribeye / filet mignon.",
  },
  {
    src: "https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=1100&q=80",
    alt: "Golden crab cakes with remoulade and lemon",
    caption: "Maryland Crab Cakes",
    replace: "Photo of the jumbo lump crab cakes.",
  },
  {
    src: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&w=1100&q=80",
    alt: "Fresh oysters on the half shell over crushed ice",
    caption: "Tavern Oysters",
    replace: "Photo of the raw bar / oyster selection.",
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1100&q=80",
    alt: "Classic tavern burger with cheddar and fries",
    caption: "The Tavern Burger",
    replace: "Photo of the house burger with hand-cut fries.",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1100&q=80",
    alt: "Eggs benedict with hollandaise on toasted muffin",
    caption: "Crab Cake Benedict",
    replace: "Photo of the brunch crab cake benedict.",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1100&q=80",
    alt: "An old fashioned cocktail with orange and cherry",
    caption: "Old Fashioned, 1933",
    replace: "Photo of a signature cocktail from the bar.",
  },
];

export const GALLERY: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm restaurant dining room with wooden booths",
    caption: "The Dining Room",
    replace: "Wide shot of Martin's main dining room and booths.",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    alt: "Candlelit booth set for two",
    caption: "The Proposal Booth",
    replace: "Photo of the famous Booth 3 — the Proposal Booth.",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80",
    alt: "Bartender pouring a cocktail at a classic bar",
    caption: "Behind the Bar",
    replace: "Photo of the bar / bartender at work.",
  },
  {
    src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?auto=format&fit=crop&w=900&q=80",
    alt: "Plated fine-dining entrée with garnish",
    caption: "From the Kitchen",
    replace: "Photo of a plated signature entrée.",
  },
  {
    src: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=900&q=80",
    alt: "Exterior of a historic Georgetown storefront",
    caption: "1264 Wisconsin Avenue",
    replace: "Photo of the Martin's Tavern Georgetown exterior / awning.",
    span: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    alt: "Glasses of red wine on a wooden table",
    caption: "The Cellar",
    replace: "Photo of the wine selection / cellar.",
  },
  {
    src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=900&q=80",
    alt: "Guests toasting glasses at a celebration dinner",
    caption: "Gatherings",
    replace: "Photo of a private event or celebration at the tavern.",
    span: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Elegant table setting with brass and candlelight",
    caption: "An Evening Table",
    replace: "Photo of a set dinner table with ambiance.",
  },
];
