# GENEVIEVE Dog Park — Complete Master Blueprint (15 August 2026)

> Faithful text-and-table extraction of `GENEVIEVE_Dog_Park_COMPLETE_MASTER_BLUEPRINT_2026-08-15.docx` for GitHub staging continuity. The original DOCX remains preserved in the linked Stage 1–3 ZIP archive; this Markdown copy preserves the blueprint content for repository-readable audit and build control.

GENEVIEVE App™

DOG PARK — COMPLETE MASTER FUNCTIONAL, SAFETY & TECHNICAL BLUEPRINT

Cumulative paperwork record: V52 baseline + later Unified Build requirements through 12 August 2026


Prepared for Tracey Ann Kennedy
Control date: 15 August 2026 — Australia/Brisbane


| CONTROL STATEMENT No canonical Dog Park file named “V53” was located in the reviewed records. V52 remains the last named baseline version. However, the 12 August 2026 GENEVIEVE App™ Dog Park Unified Build is a later, broader cumulative requirements layer and must be read with V52. This blueprint combines both. A documented feature is not automatically a live or verified feature. |
| --- |


## 25. PWA, offline operation, caching and resilience

Installable Progressive Web App and Add to Home Screen.

Today opens first after launch.

Profiles, forms and settings survive refresh.

Saved journeys, checklists, recent assessments, emergency summary and drafts available offline where safe.

Live information is visibly stale offline.

Build/update status and safe cache-recovery path to prevent old builds recurring.

No silent loss of typed information.

Safe retry and idempotency for writes.

No silent overwrite of newer local/server revisions.

Visible success, failure, offline and permission states.

Exact location must not leak into offline caches.

## 26. Accounts, backend, database and security

Secure user accounts and sessions.

Production state encryption and appropriate server-side access controls.

Validation, origin/CSRF protection, rate limiting and tamper-evident audit under the recorded backend design.

Role/permission separation and restricted sensitive data.

One active visit per dog enforced by database rules.

Checkout/immutable visit history protections.

Forward-only, ordered, idempotent migrations; never rewrite an applied production migration.

Preserve V001–V003 history and reconcile later V004–V006 records only against verified database state.

Backups, restore, rollback, health/metrics, monitoring and incident response are release gates.

Secrets must never be stored in source or pasted into ordinary project records.

## 27. Membership, billing, legal and support

Standard and concession structures, monthly and annual options.

One-month / 30-day eligible-new-subscriber trial concept, subject to exact store/provider wording.

Billing gate blocks charging until products, prices, webhook handling, receipts, cancellation, refunds and reconciliation are proven.

Deleting an account does not automatically cancel Apple/Google/Stripe billing; the correct billing channel must be explained.

Legal pages include Privacy, Terms, Safety Disclaimer, Refund/Cancellation, Account Deletion, Community Guidelines, Data Security, Support and Complaints.

Final Australian legal/privacy/consumer review remains required before commercial launch.

Apple/Google store privacy/data-safety declarations and real-device purchase testing are separate release gates.

## 28. Risk and decision logic

V52 uses a bounded 1–10 scale with words and controls. The controlled V52 vocabulary is:

| SCORE | LEVEL | ACTION FRAME |
| --- | --- | --- |
| 1–3 | Green — Lower risk | Proceed only while conditions remain consistent. |
| 4–5 | Yellow — Caution | Add controls, recheck and stay ready to leave. |
| 6–7 | Amber — High concern | Delay or choose another option. |
| 8–10 | Red — Highest concern | Do not proceed now; leave/avoid and use appropriate professional/emergency help. |

Every score must identify the reasons, source/verification state, uncertainty and practical controls. Unknown inputs are not silently treated as safe. Darkness alone is not a red condition; it can affect risk only when combined with explainable conditions such as verified lack of lighting, closure hours, severe weather, flooding, tide/access risk or an active hazard.

## 29. Five later safety improvements added on 12 August

SI-01 — One-time location / no precise-location residue — Foreground, user-initiated, minimum precision, short-lived boundary use; no exact coordinates in storage, cache, telemetry or logs.

SI-02 — Low-occupancy timing protection — Server-side coarse/delayed/batched public occupancy to prevent inference of lone arrivals/departures; final delay trade-off still requires decision.

SI-03 — Abuse-resistant hazard reporting — Rate limiting, anti-automation, duplicate detection, moderation, spoofing resistance, immutable moderation history and appeal/closure.

SI-04 — Owner-controlled emergency medical/behaviour summary — Minimum-data emergency card, explicit sharing, step-up access and audit; disabled until professional/privacy/security gates pass.

SI-05 — Estimated surface/path heat — Evidence-gated estimate only, model/version/provenance/uncertainty required; disabled until validation and expert review.

## 30. Explicitly prohibited scope

Continuous Bluetooth/LE peer-to-peer background tracking.

Crowdsourced live face or incident video streaming.

Automated owner-liability or legal-fault grading.

These may not be reintroduced under another name or third-party package without a separate controlled safety review.

## 31. Features retained as unproven / not to falsely claim

Public star ratings and review system.

Algorithmic social For You feed.

Public breed search for nearby dogs.

Full scheduled-playdate calendar.

Booking.com or another accommodation-booking partnership.

Direct sitter/walker/daycare hiring.

Complete professional marketplace.

In-app product marketplace.

General-purpose health/training AI chatbot.

Complete indoor dog-park catalogue.

Sensor-detected occupancy/behaviour without deployed verified hardware.

Adaptive learning without governance, training evidence, explanation, bias testing, versioning and monitoring.

## 32. Council / pilot / patent evidence boundaries

Keep the Dog Park app separate from unrelated GENEVIEVE Health/Human systems.

Animal patent alignment is confidential and should map protected functions to implementation/test evidence without publishing claims.

Software implementation does not itself prove patent validity, grant status, infringement or freedom to operate.

Council pilot data must distinguish community observations from verified official findings.

De-identified evidence can support evaluation, maintenance and product/patent records, subject to privacy and consent.

## 33. Chronological build and verification order

Phase 0: Freeze/protect and audit exact GitHub, Vercel, Neon, branch, commit, deployment, database, tests and rollback.

Phase 1: Identity, security, permissions, consent, audit and core data foundation.

Phase 2: Controlled shell, Today-first navigation, branding and reusable components.

Phase 3: Owner/dog/park source-of-truth data and verified park information.

Phase 4: Suitability, heat, risk and compatibility engines.

Phase 5: Check-in/out, owner duty, presence expiry, GPS boundary and safe occupancy/Night Safety.

Phase 6: Alerts, hazards, incidents, evidence, Lost & Found, magpie and Emergency.

Phase 7: Maps, Journey, Australia-wide travel and Grey Nomad.

Phase 8: Weather, tides, dog beaches, marine conditions and official closures.

Phase 9: Accessibility, communication and Deaf/Auslan verification.

Phase 10: Council notices, maintenance, verification and de-identified reporting.

Phase 11: Membership, payments, legal, deletion, support and complaints.

Phase 12: Offline/PWA resilience, cache recovery, monitoring, performance, backups and rollback.

Phase 13: Full unit/integration/E2E/accessibility/security/privacy/load/staging verification.

Phase 14: Controlled pilot, staged rollout and separately approved production release.

## 34. Testing requirements

Check-in idempotency and one active visit per dog.

Forms and saved state survive refresh.

Consent, incognito and restricted-data boundaries.

Denied, low-accuracy, stale, spoofed or offline location.

No exact coordinates in storage, URLs, logs, analytics, cache or crash reports.

Sunrise/sunset across Brisbane/Gold Coast, Sydney/Melbourne DST, Perth and Adelaide half-hour time zone.

Night occupancy cannot be recovered through UI, public API, cache, notifications, timing or polling.

Weather/tide provider timeout, stale data, wrong station, wrong unit/datum and official-closure override.

Tide exactly below, at and above threshold plus forecast crossing during planned access/return.

Magpie/hazard create, confirm, correct, expire, resolve and kill-switch paths.

Hazard-report flooding, duplicate reports, account rotation, forged location, upload abuse and moderator misuse.

Emergency accidental activation, full gesture, cancel, offline and real-device call hand-off.

Keyboard, screen reader, contrast, zoom, reflow and reduced motion.

PWA install/update/offline/cache recovery and old-version prevention.

Database migration replay, constraints, backup restore and rollback.

Load stages 100, 500, 1,000 and 2,500 users.

Target under 0.1% failures, p50 reads under 500 ms, p95 writes under one second, and no duplicate check-ins.

## 35. Known open decisions / unresolved gates

Final public occupancy delay/batching/freshness policy for low/moderate attendance.

Hazard-report immediate-display location rule versus remote moderation rule.

Whether the surface-heat estimate stays as evidence-gated roadmap or ambient/official warnings only.

Exact temporary status expiry windows.

Exact stale check-in auto-expiry policy.

Magpie numeric risk contribution, if any; no weight should be guessed.

Magpie safety-copy authority and expiry/verification windows.

Verified live Australian weather provider connections and quotas.

Verified tide providers, station-to-beach mappings, datums and approved thresholds.

Production domain/build, real staging database proof, backups/restore and rollback evidence.

Live payment product mappings, webhooks, cancellations/refunds/reconciliation.

Final Australian legal/privacy/consumer review.

Veterinary/animal-behaviour review of risk/heat/compatibility guidance.

Accessibility/Deaf-community review of communication functions.

Real-device PWA, emergency and store purchase tests.

Load, penetration/security and incident-response verification.

## 36. Current version/status conclusion

The best-supported paperwork conclusion is: V52 is the last clearly named Dog Park baseline version found in the reviewed archive, but it is not the whole current specification. The later 12 August 2026 GENEVIEVE App™ Dog Park Unified Build is the controlling cumulative requirements layer and must be applied on top of V52. The 13 August master platform register separately confirms four later Dog Park configurations: Solar Cycle/Night Blindfold, Attendance Obfuscation, Ephemeral GPS Boundary and Slide-to-Activate Emergency, all recorded as planning-baseline/candidate-unmerged configurations.

Therefore the complete paperwork identity for the project should be described as: “GENEVIEVE App™ Dog Park — V52 baseline + 12 August 2026 Unified Build cumulative specification.” Do not call the product V53 unless a verified project file, commit, release or Tracey-approved version-control record is found that explicitly names it V53.

## 37. Definition of done

Every requirement above has a visible final status.

Integrated code and chronological migrations exist in the verified repository.

Required tests were actually run and recorded.

Privacy/security/abuse/accessibility/failure-path tests pass.

A non-production integrated preview demonstrates the full user journey.

Provider-dependent or expert-gated functions remain safely disabled until gates pass.

Backup and rollback procedures are rehearsed.

Pilot risks and unresolved items are presented honestly.

Production release occurs only under a separate explicit approval.


Source note: consolidated from the V52 Master Functional Blueprint, the 12 August Dog Park Unified Build index/modules, New Chat Master Handover, Safety Improvements & Controlled Complete-Build Order, and the 13 August Master Platform Register. This document intentionally distinguishes requirements from verified live implementation.
