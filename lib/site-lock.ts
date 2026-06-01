import { getPool } from "./db";

/**
 * The site "kill-switch".
 *
 * Reads the `is_active` boolean from the `site_settings` table (row id = 1).
 * When it is FALSE, the whole site renders a locked screen instead of the
 * real content (see app/layout.tsx). The check runs server-side, so it cannot
 * be bypassed from the browser.
 *
 * The result is cached in-process for a few seconds so we hit the database at
 * most once per CACHE_TTL_MS regardless of traffic. Flipping the flag takes
 * effect within that window.
 *
 * Fail-open policy: if DATABASE_URL is missing or the query errors, we serve
 * the last known value (or `true` if we never succeeded) so a database hiccup
 * never accidentally takes the live site down.
 */
const CACHE_TTL_MS = 5_000;

let cache: { value: boolean; at: number } | null = null;

export async function isSiteActive(): Promise<boolean> {
  const now = Date.now();
  if (cache && now - cache.at < CACHE_TTL_MS) return cache.value;

  const pool = getPool();
  if (!pool) {
    cache = { value: true, at: now };
    return true;
  }

  try {
    const res = await pool.query(
      "SELECT is_active FROM site_settings WHERE id = 1 LIMIT 1"
    );
    const raw = res.rows[0]?.is_active;
    const active = raw === undefined || raw === null ? true : Boolean(raw);
    cache = { value: active, at: now };
    return active;
  } catch {
    // Serve last known value, otherwise fail open.
    if (cache) return cache.value;
    return true;
  }
}

/**
 * Set the lock state (used by the /permission admin toggle). Updates the
 * database and immediately refreshes the in-process cache so the change is
 * reflected on the very next page render.
 */
export async function setSiteActive(active: boolean): Promise<boolean> {
  const pool = getPool();
  if (!pool) throw new Error("Database not configured (DATABASE_URL missing)");

  await pool.query(
    "UPDATE site_settings SET is_active = $1, updated_at = now() WHERE id = 1",
    [active]
  );
  cache = { value: active, at: Date.now() };
  return active;
}

/** Read the live value, bypassing the short cache (for the admin panel). */
export async function getSiteActiveFresh(): Promise<boolean> {
  cache = null;
  return isSiteActive();
}
