# Deployment & Security — Martin's Tavern

Production target: **https://martinstavern.flexypdf.com** on a Hostinger VPS,
run with **PM2** behind **Nginx**, backed by **PostgreSQL**, auto-deployed from
**GitHub Actions**.

## The kill-switch (site lock)

A single boolean in PostgreSQL controls whether the whole site is live.

- Table: `site_settings`, row `id = 1`, column `is_active BOOLEAN`.
- The root layout reads it server-side on every request (cached ~5s). When
  `is_active = FALSE`, every page renders the locked screen instead of the real
  content — it cannot be bypassed from the browser.

**Lock the site (instant maintenance screen):**

```bash
psql -d martinstavern -c "UPDATE site_settings SET is_active = FALSE, updated_at = now() WHERE id = 1;"
```

**Unlock the site (go live):**

```bash
psql -d martinstavern -c "UPDATE site_settings SET is_active = TRUE, updated_at = now() WHERE id = 1;"
```

**Check current state:**

```bash
psql -d martinstavern -c "SELECT is_active, updated_at FROM site_settings WHERE id = 1;"
```

## Anti-copy guard

`components/ui/CopyGuard.tsx` disables right-click, the dev-tools shortcuts
(F12, Ctrl/Cmd+Shift+I/J/C, Ctrl/Cmd+U, Ctrl/Cmd+S) and image dragging. This is
a deterrent, not real security — the kill-switch is the real control. Disable it
with `NEXT_PUBLIC_COPY_GUARD=false` in `.env.local`.

## Environment variables (`.env.local` on the server — never committed)

```
DATABASE_URL=postgres://martins_user:PASSWORD@localhost:5432/martinstavern
PGSSL=false
NEXT_PUBLIC_COPY_GUARD=true
```

## CI/CD (GitHub Actions)

`.github/workflows/deploy.yml` SSHes into the VPS on every push to `main` and
runs `git pull → npm ci → npm run build → pm2 startOrReload`. Required GitHub
repo secrets:

| Secret         | Value                                             |
| -------------- | ------------------------------------------------- |
| `VPS_HOST`     | VPS IP address                                    |
| `VPS_USER`     | SSH user (e.g. `flexyuser`)                        |
| `VPS_PORT`     | SSH port (usually `22`)                           |
| `VPS_SSH_KEY`  | Private key whose public key is in the VPS `authorized_keys` |

## Manual deploy (if ever needed)

```bash
cd ~/martinstavern
git pull origin main
npm ci
npm run build
pm2 startOrReload ecosystem.config.js --update-env
```
