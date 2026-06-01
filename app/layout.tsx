import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/ui/GrainOverlay";
import PageIntro from "@/components/layout/PageIntro";
import CopyGuard from "@/components/ui/CopyGuard";
import LockedScreen from "@/components/layout/LockedScreen";
import { isSiteActive } from "@/lib/site-lock";
import { SITE } from "@/lib/site";

// Render dynamically so the kill-switch (is_active) is evaluated live on every
// request rather than baked in at build time.
export const dynamic = "force-dynamic";

/* ------------------------------------------------------------------ Fonts */
// Display serif — loaded as a CSS variable consumed by Tailwind's font-display.
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Body / UI sans.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* --------------------------------------------------------------- Metadata */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Martin's Tavern",
    "Georgetown restaurant",
    "Washington DC steakhouse",
    "historic restaurant DC",
    "brunch Georgetown",
    "JFK proposal booth",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    site: SITE.social.twitter.handle,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1A1614",
  width: "device-width",
  initialScale: 1,
};

/* ------------------------------------------------------- Structured data */
// Restaurant schema for rich search results.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: SITE.name,
  image: `${SITE.url}/og.jpg`,
  servesCuisine: "American",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.zip,
    addressCountry: "US",
  },
  telephone: SITE.phone.display,
  url: SITE.url,
  foundingDate: String(SITE.established),
  acceptsReservations: SITE.reservations.url,
  sameAs: [
    SITE.social.instagram.url,
    SITE.social.facebook.url,
    SITE.social.twitter.url,
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The /permission admin panel must bypass BOTH the kill-switch and the
  // public chrome — otherwise locking the site would lock you out of the
  // very page used to unlock it.
  const pathname = headers().get("x-pathname") || "";
  if (pathname.startsWith("/permission")) {
    return (
      <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
        <body className="relative min-h-screen overflow-x-hidden">
          {children}
        </body>
      </html>
    );
  }

  // Live kill-switch: when false, the entire site is replaced by the locked
  // screen. Evaluated server-side on every request (cached briefly).
  const active = await isSiteActive();

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden">
        {/* Restaurant structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Anti-copy deterrent runs regardless of lock state. */}
        <CopyGuard />

        {active ? (
          <>
            <PageIntro />
            <GrainOverlay />

            <SmoothScroll>
              <Navbar />
              <main id="main">{children}</main>
              <Footer />
            </SmoothScroll>
          </>
        ) : (
          <LockedScreen />
        )}
      </body>
    </html>
  );
}
