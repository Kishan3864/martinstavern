import type { Config } from "tailwindcss";

/**
 * Tailwind configuration for the "Heritage Luxe" design system.
 *
 * The palette and type scale here are the single source of truth for the
 * Martin's Tavern brand. Fonts are wired up via CSS variables that next/font
 * injects in app/layout.tsx (--font-playfair, --font-inter).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm ink / near-black — primary dark backgrounds
        ink: {
          DEFAULT: "#1A1614",
          900: "#120F0E",
          800: "#1A1614",
          700: "#241F1C",
          600: "#2E2825",
        },
        // Bordeaux / oxblood — brand accent (tavern wine red)
        bordeaux: {
          DEFAULT: "#5C1A1B",
          600: "#5C1A1B",
          500: "#73272A",
          400: "#8C3A3C",
        },
        // Deep forest green — secondary
        forest: {
          DEFAULT: "#1E3A2F",
          600: "#1E3A2F",
          500: "#2A4D3F",
        },
        // Cream / parchment — light backgrounds
        cream: {
          DEFAULT: "#F4ECE0",
          200: "#FBF6EE",
          100: "#F4ECE0",
          300: "#E9DCC9",
        },
        // Brass / gold — highlights, lines, hover accents
        brass: {
          DEFAULT: "#B8862F",
          400: "#C99B45",
          300: "#D9B775",
        },
      },
      fontFamily: {
        // Display / headings — high-contrast elegant serif
        display: ["var(--font-playfair)", "Georgia", "serif"],
        // Body / UI — clean modern sans
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
        wide: "0.18em",
      },
      maxWidth: {
        container: "82rem",
        prose: "44rem",
      },
      transitionTimingFunction: {
        // Refined, editorial easing used across reveals & hovers
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" },
        },
        "underline-grow": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "grain-shift": "grain-shift 8s steps(6) infinite",
      },
      boxShadow: {
        luxe: "0 30px 60px -20px rgba(18, 15, 14, 0.45)",
        "luxe-sm": "0 12px 30px -12px rgba(18, 15, 14, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
