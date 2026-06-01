import crypto from "crypto";

/**
 * Minimal, dependency-free auth for the single-password /permission admin
 * panel. The password is read from the environment (never committed), and the
 * session is an HMAC-signed token stored in an HttpOnly cookie.
 */

export const ADMIN_COOKIE = "mt_admin";

/** Secret used to sign session cookies. */
function sessionSecret(): string {
  return (
    process.env.ADMIN_SESSION_SECRET ||
    process.env.ADMIN_PASSWORD_B64 ||
    process.env.ADMIN_PASSWORD ||
    "mt-insecure-fallback-change-me"
  );
}

/**
 * The expected admin password. Prefer ADMIN_PASSWORD_B64 (base64) because it
 * sidesteps any `$`/`#` parsing quirks in .env files; fall back to a plain
 * ADMIN_PASSWORD if provided.
 */
function expectedPassword(): string {
  const b64 = process.env.ADMIN_PASSWORD_B64;
  if (b64) {
    try {
      return Buffer.from(b64, "base64").toString("utf8");
    } catch {
      return "";
    }
  }
  return process.env.ADMIN_PASSWORD || "";
}

/** Constant-time string comparison that tolerates differing lengths. */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return crypto.timingSafeEqual(ab, bb);
}

export function checkPassword(input: string): boolean {
  const expected = expectedPassword();
  if (!expected) return false;
  return safeEqual(input, expected);
}

/** Create a signed session token: `auth.<issuedAt>.<hmac>`. */
export function createSessionToken(): string {
  const payload = `auth.${Date.now()}`;
  const sig = crypto
    .createHmac("sha256", sessionSecret())
    .update(payload)
    .digest("hex");
  return `${payload}.${sig}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const idx = token.lastIndexOf(".");
  if (idx <= 0) return false;
  const payload = token.slice(0, idx);
  const sig = token.slice(idx + 1);
  const expected = crypto
    .createHmac("sha256", sessionSecret())
    .update(payload)
    .digest("hex");
  return safeEqual(sig, expected);
}
