/**
 * Central site constants for Martin's Tavern.
 * Edit values here to update them everywhere across the site.
 */

export const SITE = {
  name: "Martin's Tavern",
  established: 1933,
  tagline: "High in hospitality. Rich in history.",
  subTagline: "A Georgetown Tradition",
  description:
    "High in hospitality, rich in history. Martin's Tavern has served savory comfort fare and high-end American cuisine in Georgetown, Washington D.C. for nearly a century — locally owned for four generations since 1933.",
  url: "https://www.martinstavern.com",
  owner: "Wm. (Billy) A. Martin, Jr.",
  ownerNote: "Fourth generation owner",

  address: {
    street: "1264 Wisconsin Avenue NW",
    city: "Washington",
    state: "DC",
    zip: "20007",
    full: "1264 Wisconsin Avenue NW, Washington, DC 20007",
  },

  phone: {
    display: "(202) 333-7370",
    href: "tel:+12023337370",
  },

  email: "events@martinstavern.com",

  reservations: {
    label: "Reserve on Resy",
    url: "https://resy.com/cities/dc/martins-tavern",
  },

  // Google Maps embed for the Hours & Location section.
  map: {
    embed:
      "https://www.google.com/maps?q=1264+Wisconsin+Avenue+NW,+Washington,+DC+20007&output=embed",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=1264+Wisconsin+Avenue+NW,+Washington,+DC+20007",
  },

  social: {
    instagram: { label: "Instagram", handle: "@martinstavern", url: "https://www.instagram.com/martinstavern" },
    facebook: { label: "Facebook", handle: "/billymartinstavern", url: "https://www.facebook.com/billymartinstavern" },
    twitter: { label: "Twitter", handle: "@MartinsTavernDC", url: "https://twitter.com/MartinsTavernDC" },
  },
} as const;

/**
 * Opening hours, sourced from the live listing.
 * Brunch is served every day until 4 PM.
 */
export const HOURS: { day: string; hours: string }[] = [
  { day: "Monday", hours: "11:00 AM – 12:00 AM" },
  { day: "Tuesday", hours: "11:00 AM – 12:00 AM" },
  { day: "Wednesday", hours: "11:00 AM – 12:00 AM" },
  { day: "Thursday", hours: "11:00 AM – 1:30 AM" },
  { day: "Friday", hours: "11:00 AM – 2:30 AM" },
  { day: "Saturday", hours: "9:00 AM – 2:30 AM" },
  { day: "Sunday", hours: "9:00 AM – 1:30 AM" },
];

/** Primary navigation used by the navbar and mobile menu. */
export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Menus", href: "/menus" },
  { label: "Private Events", href: "/private-events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
