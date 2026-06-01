import { Pool } from "pg";

/**
 * A single shared PostgreSQL connection pool.
 *
 * The pool is cached on the global object so that Next.js' dev hot-reloading
 * (and the long-running `next start` process) reuse one pool instead of
 * opening a new one per request. Connection details come from DATABASE_URL.
 */
declare global {
  // eslint-disable-next-line no-var
  var __mtPgPool: Pool | undefined;
}

export function getPool(): Pool | null {
  // No DATABASE_URL configured → caller should fail open (site stays live).
  if (!process.env.DATABASE_URL) return null;

  if (!global.__mtPgPool) {
    global.__mtPgPool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
      // Enable SSL only if your Postgres requires it (set PGSSL=true).
      ssl:
        process.env.PGSSL === "true"
          ? { rejectUnauthorized: false }
          : undefined,
    });
  }

  return global.__mtPgPool;
}
