> **HISTORICAL STAGED PRECURSOR — DO NOT DEPLOY AS THE CURRENT DOG PARK APP.** This repository preserves the earlier Stage 1–3 Gruff/Dog Park build lineage and unique blueprint/audit material. Current Dog Park development lives in `tracey727/Genevieve-Tracey-Gruff-dog-park-app`; the Animal Sense family index is `tracey727/Genevieve-Animals-Dog-Parks-App`. The old branches are intentionally retained because they contain unique staged source/history not duplicated byte-for-byte in the current canonical repository. Vercel references here are historical only and must not be reintroduced into the canonical GitHub + Cloudflare + Neon build.

# GENEVIEVE App™ — Tracey & Gruff Dog Park — Stage 1

Clean Stage 1 structural deployment for the nine-screen GENEVIEVE App™ Dog Park shell.

## Scope
This repository intentionally contains the first structure only. Live data providers, account persistence, check-in/out, hazard broadcasting, GPS boundary monitoring, billing and other Stage 2+ capabilities are not represented as working until implemented and verified.

## Local audit
Run `npm test`. No secret is required for the structural audit.

## Database
The Stage 1 database objects live under the `stage1` schema. Apply `db/V001_stage1_foundation.sql` only to the intended isolated Neon branch. The Vercel runtime reads `DATABASE_URL` from server-only project environment configuration; never commit it.

## Deployment checks
- `/` returns the mobile Stage 1 shell.
- `/api/health` returns structural health and, when configured, confirms the Neon foundation row.
- Every release must pass `npm test` before promotion.
