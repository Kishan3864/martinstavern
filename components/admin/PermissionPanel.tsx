"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

type State = {
  authed: boolean;
  active: boolean | null;
};

/**
 * Single-password admin panel for the site kill-switch.
 * - Not logged in → password form.
 * - Logged in → a live toggle that flips `site_settings.is_active`.
 * The password and session are validated entirely server-side.
 */
export default function PermissionPanel() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState<State>({ authed: false, active: null });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  // Check existing session on load.
  useEffect(() => {
    fetch("/api/admin/state")
      .then((r) => r.json())
      .then((d) => setState({ authed: !!d.authed, active: d.active ?? null }))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setError("Incorrect password. Please try again.");
        setBusy(false);
        return;
      }
      const s = await fetch("/api/admin/state").then((r) => r.json());
      setState({ authed: true, active: s.active ?? null });
      setPassword("");
    } catch {
      setError("Something went wrong. Try again.");
    } finally {
      setBusy(false);
    }
  }

  async function setActive(next: boolean) {
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: next }),
      });
      const d = await res.json();
      if (!res.ok || !d.ok) {
        setError(d.error || "Could not update.");
      } else {
        setState((s) => ({ ...s, active: d.active }));
      }
    } catch {
      setError("Network error.");
    } finally {
      setBusy(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
    setState({ authed: false, active: null });
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-ink-900 px-6 py-16 text-cream">
      <div className="relative w-full max-w-md">
        <div className="pointer-events-none absolute -inset-x-10 -top-10 h-40 rounded-full bg-bordeaux/20 blur-3xl" />

        <div className="relative rounded-2xl border border-cream/10 bg-ink-800/80 p-8 shadow-luxe backdrop-blur sm:p-10">
          <div className="mb-8 flex flex-col items-center gap-4 text-center">
            <Logo tone="light" asLink={false} />
            <span className="h-px w-16 bg-brass" />
            <p className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300">
              Site Control
            </p>
          </div>

          {loading ? (
            <p className="text-center text-sm text-cream/50">Loading…</p>
          ) : state.authed ? (
            /* ---------------- Logged in: the toggle ---------------- */
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="font-sans text-[0.65rem] uppercase tracking-label text-cream/50">
                  Current status
                </span>
                <span
                  className={`font-display text-2xl font-semibold ${
                    state.active ? "text-emerald-400" : "text-bordeaux-400"
                  }`}
                >
                  {state.active === null
                    ? "Unknown"
                    : state.active
                      ? "● Site is LIVE"
                      : "● Site is LOCKED"}
                </span>
              </div>

              {/* The switch */}
              <button
                type="button"
                role="switch"
                aria-checked={!!state.active}
                disabled={busy || state.active === null}
                onClick={() => setActive(!state.active)}
                className={`relative mx-auto flex h-14 w-28 items-center rounded-full border transition-colors duration-300 disabled:opacity-60 ${
                  state.active
                    ? "border-emerald-500/40 bg-emerald-600/30"
                    : "border-bordeaux/50 bg-bordeaux/40"
                }`}
              >
                <span
                  className={`absolute flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink shadow-lg transition-transform duration-300 ${
                    state.active ? "translate-x-[3.7rem]" : "translate-x-1"
                  }`}
                >
                  {state.active ? "🔓" : "🔒"}
                </span>
              </button>

              <p className="text-center text-sm leading-relaxed text-cream/60">
                {state.active
                  ? "Flip the switch to LOCK the site. Visitors will see a maintenance screen within a few seconds."
                  : "Flip the switch to bring the site back LIVE for everyone."}
              </p>

              {error && (
                <p className="text-center text-sm text-bordeaux-400">{error}</p>
              )}

              <button
                type="button"
                onClick={handleLogout}
                className="mx-auto text-xs uppercase tracking-wide text-cream/40 transition-colors hover:text-cream/70"
              >
                Sign out
              </button>
            </div>
          ) : (
            /* ---------------- Login form ---------------- */
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="font-sans text-[0.65rem] uppercase tracking-label text-brass-300">
                  Password
                </span>
                <input
                  type="password"
                  autoFocus
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full rounded-lg border border-cream/20 bg-ink-900/60 px-4 py-3 font-sans text-sm text-cream placeholder:text-cream/30 focus:border-brass focus:outline-none"
                />
              </label>

              {error && <p className="text-sm text-bordeaux-400">{error}</p>}

              <button
                type="submit"
                disabled={busy || !password}
                className="btn-primary w-full justify-center disabled:opacity-60"
              >
                {busy ? "Signing in…" : "Sign In"}
              </button>
            </form>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-cream/30">
          Authorized access only.
        </p>
      </div>
    </main>
  );
}
