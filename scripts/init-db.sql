-- ---------------------------------------------------------------------------
-- Martin's Tavern — kill-switch table
-- Run once against the dedicated `martinstavern` database.
--   psql -d martinstavern -f scripts/init-db.sql
-- ---------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS site_settings (
  id         INTEGER     PRIMARY KEY,
  is_active  BOOLEAN     NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Seed the single control row (id = 1). Site starts ACTIVE (live).
INSERT INTO site_settings (id, is_active)
VALUES (1, TRUE)
ON CONFLICT (id) DO NOTHING;

-- -------- Handy operations (run these any time) ----------------------------
-- Lock the site (show the maintenance/locked screen everywhere):
--   UPDATE site_settings SET is_active = FALSE, updated_at = now() WHERE id = 1;
--
-- Unlock the site (go live again):
--   UPDATE site_settings SET is_active = TRUE,  updated_at = now() WHERE id = 1;
--
-- Check current state:
--   SELECT is_active, updated_at FROM site_settings WHERE id = 1;
