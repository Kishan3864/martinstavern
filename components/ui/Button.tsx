import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  /** External links open in a new tab with safe rel. */
  external?: boolean;
}

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="transition-transform duration-500 ease-luxe group-hover:translate-x-1"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const classesFor = (variant: Variant, className = "") =>
  `group ${variant === "primary" ? "btn-primary" : "btn-outline"} ${className}`;

/**
 * Brand CTA rendered as a Next.js Link (internal) or a plain anchor
 * (external). Includes a sliding arrow micro-interaction on hover.
 */
export function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
  className,
}: LinkButtonProps) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10">
        <ArrowIcon />
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classesFor(variant, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classesFor(variant, className)}>
      {content}
    </Link>
  );
}
