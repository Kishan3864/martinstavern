import Logo from "@/components/ui/Logo";
import GrainOverlay from "@/components/ui/GrainOverlay";
import { SITE } from "@/lib/site";

/**
 * Shown in place of the entire site when the kill-switch (is_active) is FALSE.
 * Branded, calm, and intentionally information-light.
 */
export default function LockedScreen() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-900 px-6 text-center text-cream">
      <GrainOverlay />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bordeaux/20 blur-[140px]" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <Logo tone="light" asLink={false} />
        <span className="mt-2 h-px w-24 bg-brass" />
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          We&rsquo;ll be right back
        </h1>
        <p className="max-w-md text-cream/70">
          Our site is briefly unavailable while we make a few improvements.
          Please check back shortly — we look forward to welcoming you to the
          tavern.
        </p>
        <a href={SITE.phone.href} className="btn-primary mt-2">
          Call {SITE.phone.display}
        </a>
      </div>
    </main>
  );
}
