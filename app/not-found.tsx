import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";

/**
 * A branded 404 in the heritage style rather than the default Next.js page.
 */
export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-ink-900 px-6 text-center text-cream">
      <div className="flex flex-col items-center gap-6">
        <span className="eyebrow text-brass-300">Lost the trail</span>
        <h1 className="font-display text-6xl font-semibold text-cream sm:text-8xl">
          404
        </h1>
        <p className="max-w-md text-cream/70">
          This page seems to have slipped out the back. Let&rsquo;s get you back
          to the warmth of the tavern.
        </p>
        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
          <ButtonLink href="/" variant="primary">
            Return Home
          </ButtonLink>
          <Link
            href="/menus"
            className="link-underline text-sm tracking-wide text-cream/80"
          >
            Browse the Menus
          </Link>
        </div>
      </div>
    </section>
  );
}
