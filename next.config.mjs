/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep the native `pg` driver out of the bundler so it loads as a normal
  // Node module on the server (used by the kill-switch in lib/site-lock.ts).
  experimental: {
    serverComponentsExternalPackages: ["pg"],
  },
  images: {
    // Placeholder photography is served from Unsplash. Swap these remote
    // patterns for your own CDN / local /public images when the real
    // Martin's Tavern photography is dropped in.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
