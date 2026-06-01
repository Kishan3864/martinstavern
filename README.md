# Martin's Tavern — Heritage Luxe Redesign

A premium, production-quality redesign for **Martin's Tavern**, the historic
Georgetown institution in Washington, D.C. (established 1933). Built as a
flagship portfolio piece with a "Heritage Luxe" aesthetic — timeless and
elegant, with cutting-edge motion.

> **Reference:** [martinstavern.com](https://www.martinstavern.com/) (content/structure only — the visual design here is wholly original).

---

## ✨ Highlights

- **Cinematic hero** with slow parallax and a staggered, line-by-line headline.
- **Scroll-animated history timeline** — the showpiece — with a brass "spine"
  that fills as you scroll past JFK's proposal, the presidential years, and four
  generations of the Martin family.
- **Fully typeset HTML menus** (no PDFs) with tabbed categories and classic
  dotted-leader pricing — the single biggest upgrade over the original site.
- **Buttery smooth scrolling** via Lenis, with scroll-triggered fade-and-rise
  reveals on every section.
- **Sticky navigation** that's transparent over the hero and solidifies into a
  cream bar with a thin brass underline on scroll; elegant mobile slide-in menu.
- **Page-load intro animation** (monogram + brass rule curtain reveal).
- **Film-grain / paper texture** overlay for warmth, refined hover
  micro-interactions (image zoom, gold underline grow, sliding arrows).
- **Fully responsive, accessible (WCAG-minded), and SEO-optimized** — semantic
  markup, metadata, Open Graph, JSON-LD `Restaurant` schema, sitemap & robots.
- **Respects `prefers-reduced-motion`** throughout.

---

## 🧱 Tech Stack

| Concern        | Choice                                    |
| -------------- | ----------------------------------------- |
| Framework      | **Next.js 14** (App Router) + TypeScript  |
| Styling        | **Tailwind CSS**                          |
| Animation      | **Framer Motion**                         |
| Smooth scroll  | **Lenis**                                 |
| Fonts          | **next/font** — Playfair Display + Inter  |
| Images         | **next/image** (optimized, remote AVIF/WebP) |

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18.17+ (Node 20+ recommended) and npm.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
#    http://localhost:3000
```

### Other scripts

```bash
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # Lint with eslint-config-next
```

---

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout: fonts, metadata, JSON-LD, providers
│   ├── page.tsx             # Home (single-page composition of all sections)
│   ├── globals.css          # Design tokens, base styles, reusable utilities
│   ├── about/               # The story + full history timeline
│   ├── menus/               # Tabbed, fully-typeset HTML menus
│   ├── private-events/      # Event spaces + inquiry form
│   ├── gallery/             # Masonry photo gallery
│   ├── contact/             # Contact details, map, message form
│   ├── robots.ts / sitemap.ts / manifest.ts   # SEO + PWA metadata
│   └── not-found.tsx        # Branded 404
│
├── components/
│   ├── layout/              # Navbar, Footer, PageIntro, PageHero
│   ├── providers/           # SmoothScroll (Lenis)
│   ├── sections/            # Hero, Welcome, Timeline, MenuPreview, Brunch,
│   │                        #   SignatureDishes, PrivateEvents, Reservations,
│   │                        #   HoursLocation, GalleryGrid
│   ├── menu/                # MenuTabs, MenuSectionBlock, MenuItemRow
│   └── ui/                  # Button, Reveal, SectionHeading, Logo,
│                            #   ParallaxImage, GrainOverlay, InquiryForm
│
├── lib/
│   ├── site.ts              # Single source of truth: name, address, hours, links
│   ├── menu-data.ts         # Menu content (sections + items)
│   ├── timeline-data.ts     # History milestones
│   └── gallery-data.ts      # Signature-dish + gallery imagery
│
├── types/global.d.ts        # Window.__lenis typing
├── tailwind.config.ts       # Palette, fonts, easing, keyframes
└── next.config.mjs          # Remote image patterns, formats
```

---

## 🎨 Design System

Defined in `tailwind.config.ts` and `app/globals.css`.

**Palette**

| Token         | Hex       | Use                              |
| ------------- | --------- | -------------------------------- |
| `ink`         | `#1A1614` | Primary dark backgrounds         |
| `bordeaux`    | `#5C1A1B` | Brand accent (tavern wine red)   |
| `forest`      | `#1E3A2F` | Secondary                        |
| `cream`       | `#F4ECE0` | Light backgrounds / parchment    |
| `brass`       | `#B8862F` | Highlights, lines, hover accents |

**Typography**

- **Display / headings:** Playfair Display (`font-display`)
- **Body / UI:** Inter (`font-sans`)
- Uppercase small-cap labels use the `.eyebrow` utility and wide tracking.

Reusable utilities worth knowing: `.container-luxe` (page gutters), `.eyebrow`
(brass label), `.btn-primary` / `.btn-outline`, `.link-underline` (growing gold
underline), `.leader` (dotted menu leader).

---

## 🖼️ Swapping in Real Photography

All imagery uses **Unsplash placeholders**. Every placeholder is labelled:

- In data files (`lib/timeline-data.ts`, `lib/gallery-data.ts`) each image has an
  `alt` and a `replace` note describing the real photo it should become.
- In components, look for `// PLACEHOLDER:` comments next to each `<Image>` /
  hero describing the intended shot.

**To use local images instead of Unsplash:**

1. Drop files into `public/` (e.g. `public/images/hero.jpg`).
2. Replace the remote URL with the local path (e.g. `/images/hero.jpg`).
3. You can then remove the `images.remotePatterns` entry in `next.config.mjs`.

---

## 📝 Content & Data

Everything textual lives in `lib/` so it's easy to edit without touching markup:

- **Hours, address, phone, social, reservation link** → `lib/site.ts`
- **Menus** (categories, sections, dishes, prices) → `lib/menu-data.ts`
- **History timeline** → `lib/timeline-data.ts`
- **Gallery & signature dishes** → `lib/gallery-data.ts`

> **Note on content:** Hours are sourced from the live listing. Menu dish names
> and prices are realistic **placeholders** in the spirit of a classic American
> tavern — replace them with the real menu when ready. Reservations link to
> [Resy](https://resy.com/cities/dc/martins-tavern).

### Wiring up the forms

The newsletter (footer) and the inquiry/contact forms are **front-end demos**
that show a confirmation on submit. To make them live, connect:

- `components/ui/InquiryForm.tsx` → a Next.js Route Handler / Server Action or
  your CRM / email service.
- `components/layout/Footer.tsx` (newsletter) → your ESP (Mailchimp, Klaviyo…).

---

## ♿ Accessibility & Performance

- Semantic landmarks (`header`, `main`, `nav`, `footer`, `address`), labelled
  controls, visible brass focus rings, and ARIA on the tabbed menus & mobile nav.
- `prefers-reduced-motion` disables Lenis, parallax, the intro, and reveals.
- `next/image` with AVIF/WebP, responsive `sizes`, and a priority hero.
- `next/font` self-hosts fonts (no layout shift, no third-party requests).

---

## 📄 License

Created as a design portfolio piece. "Martin's Tavern," its history, and any
real branding belong to their respective owners; imagery here is placeholder
stock for demonstration only.
