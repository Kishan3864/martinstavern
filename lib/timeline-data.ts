/**
 * History timeline content — the showpiece scroll-animated section.
 * Each milestone renders as an alternating card along a brass spine.
 */

export interface Milestone {
  year: string;
  title: string;
  description: string;
  /** Placeholder image — see `alt` for the photo that should replace it. */
  image: string;
  alt: string;
}

export const TIMELINE: Milestone[] = [
  {
    year: "1933",
    title: "Billy Martin opens the doors",
    description:
      "Former Major League Baseball player Billy Martin pours the first pint the same year Prohibition is repealed. A neighborhood tavern is born on Wisconsin Avenue — mahogany booths, brass rails, and a welcome that never closes.",
    // PLACEHOLDER: Replace with a vintage 1930s exterior or founding-era photo of Martin's Tavern.
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    alt: "Vintage tavern interior with warm wood booths and brass details",
  },
  {
    year: "1953",
    title: "The Proposal Booth",
    description:
      "On June 24, 1953, Senator John F. Kennedy proposed to Jacqueline Lee Bouvier in Booth 3 — now known the world over as the Proposal Booth, and still the most requested seat in Washington.",
    // PLACEHOLDER: Replace with a photo of the famous "Proposal Booth" (Booth 3).
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
    alt: "Intimate restaurant booth set for two with candlelight",
  },
  {
    year: "Presidents & legends",
    title: "A table for history",
    description:
      "Every president from Harry S. Truman through George W. Bush has dined here, alongside senators, staffers and celebrities. Baseball greats Mickey Mantle, Ty Cobb and Yogi Berra held court in the Dugout Room, and Secretary of State Madeleine Albright called the tavern an extension of her home.",
    // PLACEHOLDER: Replace with a photo of the presidential booths / framed memorabilia wall.
    image:
      "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1200&q=80",
    alt: "Walls lined with framed historic photographs in a classic dining room",
  },
  {
    year: "Today",
    title: "Four generations of the Martin family",
    description:
      "Now led by Billy Martin Jr., the fourth generation behind the bar, Martin's Tavern is the oldest family-owned restaurant in Washington — still pouring, still proposing, still home.",
    // PLACEHOLDER: Replace with a present-day portrait of Billy Martin Jr. or the family.
    image:
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm, bustling tavern dining room in the evening",
  },
];
