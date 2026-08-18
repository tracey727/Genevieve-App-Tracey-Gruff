# GENEVIEVE App™ Dog Park — Complete Master Blueprint Control Register

Control source: `GENEVIEVE_Dog_Park_COMPLETE_MASTER_BLUEPRINT_2026-08-15.docx`
Control date: 15 August 2026 — Australia/Brisbane
Stage 3 branch: `stage3/functional-visit-lifecycle-20260818`

## Governing identity
The controlled product identity is **GENEVIEVE App™ Dog Park — V52 baseline + 12 August 2026 Unified Build cumulative specification**. No product version is to be called V53 unless an explicit verified version-control record names it V53.

A requirement appearing in this register is **not automatically live or verified**. Every requirement must retain a visible implementation status.

## Status vocabulary
- VERIFIED WORKING — current source plus complete successful workflow evidence.
- IMPLEMENTED, NOT VERIFIED — code exists but complete staging/production evidence is missing.
- PARTIAL OR BROKEN — some implementation exists but workflow is incomplete or known to fail.
- APPROVED REQUIREMENT — controlled requirement not yet proven implemented.
- ROADMAP — retained for later and not a current release dependency unless promoted.
- CONFLICT / DECISION REQUIRED — records disagree or owner decision remains open.
- SUPERSEDED — historical only; must not return.
- OUT OF SCOPE — belongs elsewhere in GENEVIEVE.

# Complete requirement register

## 1. Document control and source hierarchy
- 12 Aug Unified Build controls cumulative implementation requirements.
- 5 Aug V52 blueprint supplies baseline and 31-view structure.
- 12 Aug New Chat Master Handover supplies capability register and chronological build order.
- 12 Aug Safety Improvements supplies five added safety improvements, prohibited ideas and gates.
- 13 Aug Master Platform Register confirms Solar/Night, Attendance Obfuscation, Ephemeral GPS Boundary and Slide-to-Activate Emergency candidates.
- Older launch/build/test material is evidence/history only and cannot override later safety/privacy rules.

## 2. Product definition
- Australian dog-owner/traveller/council safety, compatibility and journey decision-support system.
- Core question: “Is this park suitable for my dog right now?”
- Real visit lifecycle: Assess → Plan → Arrive → Check In → Supervise → Respond → Check Out.
- Inputs include current dog state, activity, park rules/facilities, crowd context, gates/boundaries, heat/weather, hazards, tides/beach access, travel needs and owner supervision capacity.
- Decision support only; no safety guarantee, diagnosis, veterinary replacement, emergency dispatch, automated enforcement or legal/liability conclusion.
- Official closures/emergency instructions/verified rules override favourable app conditions or community reports.

## 3. Navigation and major app areas
- Today — default opening page and immediate dog/park/risk/status decision.
- Parks — Australian park/beach discovery, filters, verified details, maps, boundaries, rules and alternatives.
- Journey — separate first-class pre-leaving and Grey Nomad travel page.
- Dogs — profiles, current status, compatibility, personalisation and Best Mates.
- More — owner duty, hazards, incidents, Lost & Found, council, accessibility, privacy, account, membership, legal and data functions.
- Emergency — persistent beside More, visually larger and protected by deliberate activation.

## 4. Today and pre-arrival safety
- Always launch to Today.
- Select current dog and intended park/activity.
- Explainable bounded 1–10 suitability assessment with words, reasons, source, uncertainty and practical controls.
- Before You Leave warning.
- Check dog condition, equipment, owner readiness, weather/heat, boundaries/gates, space, surface, shade, water, signage and active hazards.
- Recommend alternative park/route/time if unsuitable or materially uncertain.
- Recalculate when arrival differs from plan.
- Label live/current/cached/stale/estimated/community/authorised/council-verified truthfully.

## 5. One-tap dog status and temporary state
- Happy to Play / Playful.
- Off Game / Neutral.
- Needs Space / Respect My Bubble.
- Reactive Today.
- On Lead.
- In Training.
- Unwell.
- Anxious / Unsure.
- Incognito / Private.
- Arrived / Left.
- Best Mate Arrived / Left.
- Owner Still Supervising.
- Temporary state must expire or be actively cleared under approved policy; it must not permanently stigmatise a dog.

## 6. Park, beach, trail and trip-stop discovery
- Nearby Australian dog parks with foreground location permission only.
- Australia-wide search by suburb, postcode, place and need.
- Dog beaches, supported tracks/trails and journey rest-stop candidates.
- Fenced/unfenced/unknown boundary states without invented certainty.
- Actual selected places and real map/direction hand-offs.
- Route distance/time or clearly labelled estimate.
- Selected place carried into Today, Journey, Arrival and Check-In.
- Source, freshness, council verification and correction status.
- Sourced off-leash hours, seasonal restrictions, signage, closures and changing local rules.
- No claim of complete indoor dog-park catalogue until verified.

## 7. Park information and filters
- Accessibility/mobility, wheelchair/pram and verified accessible routes.
- Beach/water access and verified accessible dry-sand corridors.
- Fencing, boundaries, double gates and gate condition.
- Big/small dog areas.
- Puppy, senior, reactive, anxious, training and extra-care suitability.
- Quiet/low-crowd preference and space context.
- Shade, dog bowls, tap water, toilets, seating.
- Lighting and hours.
- Agility/training-friendly areas.
- Easy/caravan parking and Grey Nomad suitability.
- Nearby cafés/food/BBQ/picnic.
- Bins, waste bags, maintenance.
- Reliable size/capacity/space ratio context.
- Child/bicycle/skateboard/pram/mobility-aid considerations using respectful wording.
- Current alerts, hazards, maintenance, closures and council notices.
- Selected-dog suitability with reasons and limitations.

## 8. Dog profiles, privacy layers and personalisation
- Multiple owner-controlled dog profiles: create/edit/select/archive/delete.
- Public safety layer for owner-selected interaction information.
- Behaviour guidance layer for sociability, reactivity, tolerance, energy, play intensity, vulnerability and resource-sharing concerns.
- Restricted health/emergency layer for microchip, allergies, medication, vaccination context, weight, vet and emergency contacts.
- Age/life stage, breed/mix, size, sex/desexing, weight, energy and social comfort without breed as behavioural verdict.
- Puppy/senior/anxious/reactive/recovering/disabled/extra-care support.
- Swimming ability and mobility limitation personalisation where verified.
- Document dates/reminders without treating owner entry as official verification.
- Exact-location hiding, incognito, export, correction and deletion.

## 9. Compatibility and preventative matching
- Pre-confrontation dog-to-dog interaction concern assessment.
- Pair and group contexts treated separately.
- Consider life stage, size, energy, play style, tolerance, reactivity, confidence, vulnerability, resource guarding and crowd context.
- Gentle-mentor puppy considerations where appropriate.
- Explain drivers and controls.
- No binary safe/unsafe dog verdict and no breed-alone verdict.
- Favourable result is never a guarantee.
- Alternative park/time/lower-intensity option when unsuitable.

## 10. Best Mates and trusted relationships
- Save Best Mate/companion relationships and successful interaction context.
- Arrival/left alerts require both-owner consent and notification permission.
- Relationships can pause/remove without falsifying historical visits.
- Relationship never authorises precise-location disclosure.
- Ordinary presence alerts suppressed/delayed after dark under Night Safety.

## 11. Voluntary check-in, check-out and owner presence
- Voluntary, privacy-controlled Check In/Check Out.
- “My Dog Arrived / I’m Here” shares canonical check-in logic.
- One active visit per dog enforced.
- Idempotency prevents duplicate visits from taps/retries/network issues.
- Arrival, current status, owner/session and departure recorded.
- Refresh/offline/retry reliability.
- Stale/uncertain presence expires.
- Incognito/location-sharing controls apply.
- Owner Duty timers: 5/10/15/20 minutes.
- Owner location state: inside/at gate/outside/left without precise public GPS trace.
- “I’m still supervising” renews timer.
- Owner-left prompts checkout and can open unattended observation flow.
- Unattended reports are observations, not public accusations.

## 12. GPS, boundaries, geofencing and location privacy
- Ephemeral GPS Boundary Engine: short-lived boundary decision, not tracking.
- Foreground explicit user action only.
- No ordinary continuous/background tracking.
- Least precision needed.
- Verified park coordinates/boundary where available; approximate explicitly labelled.
- Derive IN-BOUNDARY / OUTSIDE / UNKNOWN plus coarse park id, then discard exact coordinate need.
- Never store exact coordinates in localStorage, IndexedDB, service-worker cache, offline drafts, analytics, URLs, ordinary logs, errors or crash reports.
- Stop listeners after decision; clear ordinary in-memory references where feasible.
- Never claim physical memory overwrite certainty.
- Denied/stale/low-accuracy/missing boundary → UNKNOWN/restricted, never false in-park.
- Precise GPS not public by default; no permanent movement trail.

## 13. Solar cycle and Night Safety
- Park-local sunrise/sunset/civil dawn/dusk/solar phase from verified coordinates/time zone/date.
- PRE_DAWN, DAYLIGHT, DUSK, NIGHT, unknown/unavailable.
- Never use phone home time zone for remote park.
- Today compact “Daylight at This Park” card; Journey expected solar phase.
- Daylight does not mean safe; darkness alone does not mean red risk.
- Sunset→sunrise ordinary public attendance shut down.
- Hide counts, capacity, bands, status totals, lists, arrivals/departures, identities, Best Mate presence, cached attendance widgets, notifications and attendance APIs.
- Night wording: “NIGHT SAFETY MODE ACTIVE — Live park attendance is hidden from sunset until sunrise to protect park-user privacy and safety.”
- Private own check-in/out may remain.
- Sunrise expires stale visits and revalidates; no cached night count resurrection.
- Enforce server/API-side.
- Solar unavailable → public attendance hidden.

## 14. Safer occupancy and anti-inference protections
- No public exact low-attendance counts or identities.
- Never disclose someone is last/only person.
- Coarse bands, minimum thresholds, delayed/batched updates and reviewed server jitter may reduce inference.
- Delayed data labelled honestly.
- Public APIs cannot leak hidden exact data.
- Test polling, multi-account inference, notification timing, small parks and dusk/night transitions.
- Final timing/accuracy policy remains decision required before coding exact behaviour.

## 15. Journey and Grey Nomad travel
- Journey stays a first-class separate page.
- Readiness/equipment/dog condition/heat checks.
- Door-to-gate planning and lead-on safety.
- Geocode origin/destination; actual road route or labelled fallback.
- Google Maps hand-off.
- Automatic rest-stop calculations; extra-care intervals.
- Overnight estimates and Tasmania ferry checkpoint where relevant.
- Search around checkpoints.
- Save up to 30 journeys.
- Grey Nomad/caravan mode.
- Search dog parks/beaches, caravan parks, pet-friendly accommodation, food, water, shade, toilets, vets, pet services, fuel, rest and parking.
- Distinguish search suggestion from verified dog-permitted stop.

## 16. Weather, heat and surface risk
- Temperature warning plus explainable heat score.
- Humidity, UV, sun exposure, hot surfaces, shade and water.
- Extra caution for puppies/seniors/unwell; breed-specific vulnerability requires professional review.
- Rain/wind/storm/smoke/flood/bushfire architecture.
- Provider source/freshness labels; missing data → caution/UNKNOWN.
- Controls include delay, alternate time/place, shade, water, reset on lead, leave.
- Surface/path heat estimate disabled until validated model and expert review.
- Stale/missing/out-of-range surface inputs → UNKNOWN/general heat caution.

## 17. Live tides, dog beaches and marine safety
- Verified station-to-beach mapping, threshold, unit and vertical datum.
- Local timezone and dry-sand corridor.
- Observation/forecast/retrieval/expiry/freshness and provider quality flags.
- Trend and threshold-crossing forecast; safe access/return windows.
- SAFE_WINDOW, MONITOR, THRESHOLD_EXCEEDED, UNKNOWN.
- Missing/stale/invalid/conflicting/wrong station/unit/datum → UNKNOWN, never safe.
- Combine daylight, surf, swell, surge, storm, flooding, erosion, currents, water quality and algae.
- Official closures/serious hazards override favourable tide.
- Approved personalised caution and safer alternatives.
- Do not invent Australian provider connections, mappings, credentials or thresholds.

## 18. Hazard and colour-alert network
- Magpie/swooping, snakes, ticks, algae/unsafe water, broken fences/gates, glass, 1080/poison bait, heat, flood/fire/storm/smoke, crowded gates, aggressive incidents, unattended dogs, lighting, closures, bag/bin problems.
- Each alert: place/sub-location, observed/reported time, source class, verification state, description, action, freshness, expiry, correction/closure history.
- Community observations visibly distinct from authorised/council notices.
- Magpie on Today/Park Details/Arrival/active visit; optional 1–5000m radius control under later requirement.
- Magpie kill switch and staged rollout.
- No guessed numeric magpie risk weight.

## 19. Abuse-resistant community reporting
- Server rate limits and anti-automation.
- Layered account/session/network/duplicate/report-velocity/lawful device integrity signals.
- Geolocation/device identity treated as spoofable.
- Remote/low-confidence reports may be privately moderated before publication.
- No public reporter identity/exact location/evidence metadata.
- Idempotency, attachment limits, malware/content checks and immutable moderation history.
- Correction, expiry, appeal, closure.
- Test bot floods, account rotation, forged location, duplicates, conflicts, upload abuse and moderator misuse.
- Immediate-display versus stricter location-only publication policy remains decision required.

## 20. Incidents, evidence, Lost & Found and notices
- Aggression, injury, unattended dog, hazard and incident reporting.
- Observation/action/outcome separate.
- Controlled evidence attachments.
- Atomic transactional save to avoid misleading half-records.
- Correction/audit history.
- Owner-approved lost-dog public description/time/last-known safe area.
- Found-dog description/time/location/welfare/action/authority contacted.
- No restricted microchip/medication/owner-sensitive public disclosure.
- Versioned source/status/effective-window notices.
- De-identified authorised pilot/council exports without automatic enforcement conclusions.

## 21. Emergency, after-hours vet and lone-walker safety
- Emergency persistent on every page beside More, approximately twice normal tab width.
- Three-second hold then complete slide; incomplete gesture does nothing.
- Clear Cancel.
- Real-device testing required.
- Never claim location transmitted, responders dispatched or help confirmed.
- Offline owner-approved emergency dog summary.
- Verified after-hours vet link/search with limitations.
- Privacy-aware lost-dog broadcast.
- Lone-walker timers: 10/20/30/45/60 minutes with no false rescue claims.
- Restricted emergency health/behaviour sharing is later, owner-controlled, minimum-data, explicit, step-up, short-lived, audited and revocable.
- External restricted-data sharing disabled until privacy/legal/veterinary/security gates pass.

## 22. Accessibility and communication
- Mobility/wheelchair/pram/accessible route context and verified dry-sand routes.
- Plain-language, reduced cognitive load, larger text, high contrast, reduced motion.
- Keyboard, visible focus, screen-reader names/roles/states/errors.
- 200% zoom and 320px reflow.
- Risk meaning number + words + colour.
- Sound/vibration, vibration-only and silent visual alert options.
- Language/communication preferences.
- Visual emergency and dog-command support.
- Deaf/Auslan area must use verified Deaf-community sources; never invent signs.
- QR communication signage proposed and review-gated.

## 23. Privacy, consent and data rights
- Public/behaviour/restricted data layers.
- Precise GPS not public by default.
- Incognito/exact-location hiding.
- Consent-controlled presence, Best Mates and notifications.
- No unnecessary movement trail.
- De-identification before broader reporting.
- Export/correction/deletion requests.
- Account deletion and subscription cancellation separate.
- Versioned consent/legal acknowledgements.
- Least-privilege roles and audited authorised actions.
- No hidden surveillance or autonomous legal/council/veterinary conclusions.

## 24. Council and park operational support
- Council-verified rules/notices.
- Maintenance for fencing/gates/lighting/waste/bins/other assets.
- Hazard/incident pattern review.
- De-identified trends/heatmaps.
- Superintendent/maintenance workflows.
- Correction/action/resolution/human-reviewed closure evidence.
- Pilot benefit reporting.
- Human review before enforcement/consequential conclusion.
- BagStation telemetry remains roadmap unless separately promoted.

## 25. PWA, offline operation, caching and resilience
- Installable PWA/Add to Home Screen.
- Today first.
- Profiles/forms/settings survive refresh.
- Safe offline saved journeys/checklists/assessments/emergency summary/drafts.
- Live info visibly stale offline.
- Build/update status and safe cache recovery.
- No silent typed-data loss.
- Safe retry/idempotency.
- No silent overwrite of newer local/server revision.
- Visible success/failure/offline/permission states.
- Exact location excluded from offline cache.

## 26. Accounts, backend, database and security
- Secure accounts/sessions.
- Encryption and server-side access control.
- Validation, origin/CSRF protection, rate limiting and tamper-evident audit.
- Role/permission separation and sensitive-data restrictions.
- One active visit per dog database-enforced.
- Checkout/immutable visit-history protection.
- Forward-only ordered idempotent migrations; never rewrite applied production migration.
- Preserve V001–V003 history; reconcile later V004–V006 only against verified DB state.
- Backup/restore/rollback/health/metrics/monitoring/incident response release gates.
- Secrets never in source or ordinary records.

## 27. Membership, billing, legal and support
- Standard/concession, monthly/annual structures.
- One-month/30-day eligible-new-subscriber trial concept subject to store wording.
- Billing gate blocks charging until product/price/webhook/receipt/cancellation/refund/reconciliation proven.
- Account deletion does not automatically cancel store/Stripe billing.
- Privacy, Terms, Safety Disclaimer, Refund/Cancellation, Account Deletion, Community Guidelines, Data Security, Support, Complaints.
- Australian legal/privacy/consumer review required before commercial launch.
- Store privacy/data-safety declarations and real-device purchase testing separate gates.

## 28. Risk and decision logic
- Bounded 1–10 scale with words and controls.
- 1–3 Green — Lower risk: proceed only while conditions remain consistent.
- 4–5 Yellow — Caution: add controls/recheck/be ready to leave.
- 6–7 Amber — High concern: delay or choose another option.
- 8–10 Red — Highest concern: do not proceed now; leave/avoid and use appropriate professional/emergency help.
- Score includes reasons, source/verification, uncertainty and controls.
- Unknown inputs never silently safe.
- Darkness alone is not red; only explainable combined conditions can raise risk.

## 29. Five later safety improvements
- SI-01 one-time location/no precise-location residue.
- SI-02 low-occupancy timing protection.
- SI-03 abuse-resistant hazard reporting.
- SI-04 owner-controlled emergency medical/behaviour summary, disabled until gated.
- SI-05 evidence-gated surface/path heat estimate, disabled until validated and expert-reviewed.

## 30. Explicitly prohibited scope
- No continuous Bluetooth/LE peer-to-peer background tracking.
- No crowdsourced live face/incident video streaming.
- No automated owner-liability/legal-fault grading.
- These cannot return under another name/package without separate safety review.

## 31. Retained as unproven / not to falsely claim
- Public star ratings/reviews.
- Algorithmic social For You feed.
- Public breed search for nearby dogs.
- Full scheduled-playdate calendar.
- Booking.com/other accommodation partnership.
- Direct sitter/walker/daycare hiring.
- Complete professional marketplace.
- In-app product marketplace.
- General-purpose health/training AI chatbot.
- Complete indoor dog-park catalogue.
- Sensor-detected occupancy/behaviour without deployed hardware.
- Adaptive learning without governance/evidence/explanation/bias/versioning/monitoring.

## 32. Council / pilot / patent evidence boundaries
- Dog Park remains separate from unrelated Human/Health systems.
- Patent alignment confidential; implementation does not prove patent validity/grant/infringement/FTO.
- Community observations distinguished from verified official findings.
- De-identified evidence may support authorised evaluation/maintenance/product/patent records subject to privacy/consent.

## 33. Chronological build and verification order
- Phase 0 — freeze/protect/audit GitHub, Vercel, Neon, branch, commit, deployment, DB, tests, rollback.
- Phase 1 — identity, security, permissions, consent, audit and core data foundation.
- Phase 2 — controlled shell, Today-first navigation, branding and reusable components.
- **Phase 3 — owner/dog/park source-of-truth data and verified park information.**
- Phase 4 — suitability, heat, risk and compatibility engines.
- Phase 5 — check-in/out, owner duty, presence expiry, GPS boundary and safe occupancy/Night Safety.
- Phase 6 — alerts, hazards, incidents, evidence, Lost & Found, magpie and Emergency.
- Phase 7 — maps, Journey, Australia-wide travel and Grey Nomad.
- Phase 8 — weather, tides, dog beaches, marine conditions and official closures.
- Phase 9 — accessibility, communication and Deaf/Auslan verification.
- Phase 10 — council notices, maintenance, verification and de-identified reporting.
- Phase 11 — membership, payments, legal, deletion, support and complaints.
- Phase 12 — offline/PWA resilience, cache recovery, monitoring, performance, backups and rollback.
- Phase 13 — full unit/integration/E2E/accessibility/security/privacy/load/staging verification.
- Phase 14 — controlled pilot, staged rollout and separately approved production release.

## 34. Testing requirements
- Check-in idempotency/one active visit.
- Refresh persistence.
- Consent/incognito/restricted boundaries.
- Denied/low-accuracy/stale/spoofed/offline location.
- No exact coordinates in storage/URLs/logs/analytics/cache/crash reports.
- Solar/time-zone tests across Brisbane/Gold Coast, Sydney/Melbourne DST, Perth and Adelaide half-hour zone.
- Night occupancy non-recovery via UI/API/cache/notifications/timing/polling.
- Weather/tide timeout/stale/wrong station/unit/datum/closure override.
- Tide threshold boundary/crossing tests.
- Magpie lifecycle and kill switch.
- Hazard abuse paths.
- Emergency accidental/full/cancel/offline/real-device call.
- Keyboard/screen reader/contrast/zoom/reflow/reduced motion.
- PWA install/update/offline/cache recovery/old-version prevention.
- Migration replay/constraints/backup restore/rollback.
- Load 100/500/1000/2500 users; target <0.1% failures, p50 reads <500ms, p95 writes <1s, no duplicate check-ins.

## 35. Known open decisions / unresolved gates
- Public occupancy delay/batching/freshness policy.
- Hazard immediate-display versus remote moderation rule.
- Surface heat future scope.
- Temporary status expiry windows.
- Stale check-in auto-expiry.
- Magpie numeric contribution must not be guessed.
- Magpie safety copy/expiry/verification authority.
- Verified live Australian weather providers/quotas.
- Verified tide providers/mappings/datums/thresholds.
- Production domain/build, staging DB proof, backup/restore/rollback evidence.
- Live payment mappings/webhooks/cancellations/refunds/reconciliation.
- Final Australian legal/privacy/consumer review.
- Veterinary/animal-behaviour review.
- Accessibility/Deaf-community review.
- Real-device PWA/emergency/store purchase tests.
- Load/penetration/security/incident-response verification.

## 36. Current version/status conclusion
Use: **GENEVIEVE App™ Dog Park — V52 baseline + 12 August 2026 Unified Build cumulative specification**. The later Solar Cycle/Night Blindfold, Attendance Obfuscation, Ephemeral GPS Boundary and Slide-to-Activate Emergency configurations remain planning/candidate-unmerged until implemented and verified.

## 37. Definition of done
- Every controlled requirement has visible final status.
- Integrated code and chronological migrations exist in verified repository.
- Required tests actually run and are recorded.
- Privacy/security/abuse/accessibility/failure-path tests pass.
- Non-production integrated preview demonstrates full journey.
- Provider/expert-gated functions remain safely disabled until gates pass.
- Backup/rollback rehearsed.
- Pilot risks/unresolved items presented honestly.
- Production release only under separate explicit approval.

# Stage 3 activation boundary
Stage 3 implements **Phase 3 only**: owner, dog and park source-of-truth data and verified park information. All later-phase capabilities in this register remain attached to the master architecture but cannot be activated out of chronological order.
