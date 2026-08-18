# GENEVIEVE Dog Park — Complete Master Blueprint (15 August 2026)

> Faithful text-and-table extraction of `GENEVIEVE_Dog_Park_COMPLETE_MASTER_BLUEPRINT_2026-08-15.docx` for GitHub staging continuity. The original DOCX remains preserved in the linked Stage 1–3 ZIP archive; this Markdown copy preserves the blueprint content for repository-readable audit and build control.

GENEVIEVE App™

DOG PARK — COMPLETE MASTER FUNCTIONAL, SAFETY & TECHNICAL BLUEPRINT

Cumulative paperwork record: V52 baseline + later Unified Build requirements through 12 August 2026


Prepared for Tracey Ann Kennedy
Control date: 15 August 2026 — Australia/Brisbane


| CONTROL STATEMENT No canonical Dog Park file named “V53” was located in the reviewed records. V52 remains the last named baseline version. However, the 12 August 2026 GENEVIEVE App™ Dog Park Unified Build is a later, broader cumulative requirements layer and must be read with V52. This blueprint combines both. A documented feature is not automatically a live or verified feature. |
| --- |


## 13. Solar cycle and Night Safety

Calculate park-local sunrise, sunset, civil dawn/dusk and solar phase from verified park coordinates, local time zone and date.

Supported phases: PRE_DAWN, DAYLIGHT, DUSK and NIGHT, plus unavailable/unknown.

Do not calculate a remote park using the phone’s home time zone.

Today can show a compact collapsible Daylight at This Park card with sunrise, sunset, dusk end, current phase and next transition.

Journey calculates expected solar phase at planned stops.

Daylight does not automatically mean safe; darkness does not automatically mean red risk.

From actual local sunset until sunrise, all ordinary public attendance information is shut down.

Night shutdown includes people/dog counts, spaces left, capacity percentages, occupancy bands, status totals, check-in lists, recent arrivals/departures, identities, Best Mate presence, cached widgets, notifications and APIs that could expose attendance.

Night UI wording: ‘NIGHT SAFETY MODE ACTIVE — Live park attendance is hidden from sunset until sunrise to protect park-user privacy and safety.’

Private check-in/out and the owner’s own state can remain available.

At sunrise, stale visits are expired and fresh data must be revalidated; the previous night’s cached count must not simply reappear.

Night privacy must be enforced server-side/API-side, not merely hidden on the screen.

If solar calculation is unavailable, fail safely by keeping public attendance hidden.

## 14. Safer occupancy and anti-inference protections

No public exact low-attendance counts or identities.

No public disclosure that someone is the last or only person at a park.

Use reviewed coarse bands, minimum reporting thresholds, delayed/batched updates and possibly server-side jitter to reduce arrival/departure inference.

Delayed information must be labelled honestly, e.g. ‘updated within the last 15 minutes’, not described as live.

Public APIs must not leak hidden exact data to an untrusted client.

Test repeated polling, multiple accounts, notification timing, very small parks and dusk/night transitions.

A final public timing/accuracy trade-off remains a named decision before this part is coded.

## 15. Journey and Grey Nomad travel

Journey remains a first-class separate page.

Before-leaving readiness, equipment, dog condition and heat checks.

Door-to-gate route planning.

Lead-on safety from vehicle/home to the signed off-leash boundary and back on lead before departure.

Geocode origin/destination; use actual road routes where available and clearly label fallbacks/estimates.

Google Maps directions hand-off.

Automatically calculate dog rest stops.

Extra-care rest intervals for puppies, seniors, reactive, needs-space or unwell dogs.

Estimate overnight stops for long journeys.

Mainland-to-Tasmania ferry checkpoint where relevant; owner must confirm operator rules.

Search around calculated checkpoints rather than asking the owner to guess.

Save up to 30 reusable journeys.

Grey Nomad/caravan mode.

Travel searches include dog parks, dog beaches, caravan parks, pet-friendly accommodation, cafés/food, water, shade, toilets, emergency/ordinary vets, pet services, fuel, rest and parking.

Distinguish a search suggestion from a verified dog-permitted stop.

## 16. Weather, heat and surface risk

Temperature warnings and explainable heat-risk score.

Humidity, UV, full-sun exposure, hot surfaces, shade and water.

Extra caution for vulnerable dogs including puppies, seniors and dogs marked unwell; breed-specific vulnerabilities require professional review, not automatic diagnosis.

Rain, wind, storm, smoke, flood and bushfire architecture.

Weather provider data must be labelled by source and freshness; disconnected/missing data becomes caution/UNKNOWN, not safe.

Recommended actions can include delay, choose another time/place, move to shade, provide water, reset on lead or leave.

Estimated surface/path heat is a later safety improvement and must remain behind a disabled flag until a validated model, inputs and veterinary/thermal review exist.

If surface model inputs are stale/missing/out of validated range, show UNKNOWN/general heat caution, not a reassuring temperature.

## 17. Live tides, dog beaches and marine safety

Verified tide-station-to-beach mapping for each supported beach park.

Park-specific tide/access threshold, unit and vertical datum.

Local time zone and accessible dry-sand corridor description.

Observation time, forecast time, retrieval time, expiry and freshness.

Authoritative provider/source record and quality flags.

Tide trend and threshold-crossing forecasts.

Safe beach-access and safe-return planning windows.

Required states: SAFE_WINDOW, MONITOR, THRESHOLD_EXCEEDED and UNKNOWN.

UNKNOWN applies to missing, stale, invalid, conflicting, wrong-station, wrong-unit or datum-mismatched data and must never be converted to safe.

Combine tide with daylight, surf, swell, surge, storm, flooding, erosion, currents, water quality and algae.

Changing off-leash hours, council rules and official closures are included.

Official closures or serious hazards override a favourable tide result.

Personalised caution for small dogs, non-swimmers, seniors and limited-mobility dogs where thresholds are approved.

Offer safer beach/park alternatives.

Do not invent a provider connection, station mapping, credential or safety threshold. Live Australian integration remains unverified until proven.

## 18. Hazard and colour-alert network

Magpie / swooping-bird activity, including sub-location, freshness and dedicated safety instructions.

Snakes.

Ticks.

Blue-green algae and unsafe water.

Broken fences and unsafe gates.

Broken glass.

1080 / poison bait.

Heat, hot surfaces and heatwaves.

Flood, bushfire, storm and smoke.

Crowded gates.

Aggressive or unsafe incidents.

Unattended dogs.

Lighting faults.

Maintenance closures.

Bag/bin problems.

Every alert carries place/sub-location, observed/reported time, source class, verification state, description, recommended action, freshness, expiry and correction/closure history. Community observations stay visibly different from council/authorised notices.

Magpie alerts are required across Today, Park Details, Arrival and active visit surfaces.

Magpie records may include distance/radius control from 1 to 5000 metres under the later recorded requirement.

Magpie module requires a kill switch and staged rollout.

No numeric risk weight for magpie activity should be guessed. Until approved, it remains a separate active hazard that triggers reassessment and visible controls.

## 19. Abuse-resistant community reporting

Server-side rate limits and anti-automation controls.

Use layered signals such as account/session history, IP/network limits, duplicate detection, report velocity and lawful device/app integrity signals.

Treat geolocation/device identity as fallible and spoofable.

Remote or low-confidence reports can be held for private moderation rather than immediately published.

Do not expose reporter identity, exact location or evidence metadata publicly.

Idempotency, attachment limits, malware/content checks and immutable moderation history.

Correction, expiry, appeal and closure controls.

Test bot floods, account rotation, forged location, duplicate reports, conflicting reports, upload abuse and moderator misuse.

A final policy choice remains between an inclusive in/near-park immediate-display rule with remote moderation, or a stricter location-only rule.

## 20. Incidents, evidence, Lost & Found and notices

Report aggression, injury, unattended dogs, hazards and other incidents.

Record observation, action and outcome separately.

Attach permitted photos/documents/evidence under size/type/privacy controls.

Use transactional/atomic save so failed evidence storage does not leave a misleading half-record.

Preserve corrections and audit history.

Lost-dog alert: owner-approved public description, time and last-known safe area.

Found-dog report: description, time/location, immediate welfare/action and authority contacted.

Do not expose microchip, medication or owner-sensitive restricted data.

Council/park/community notices carry source, status, effective window and version.

De-identified exports can support authorised pilot/council review without turning community reports into automatic enforcement findings.

## 21. Emergency, after-hours vet and lone-walker safety

Emergency available on every page, beside More, approximately twice normal tab width.

Three-second hold followed by complete slide; incomplete gesture does nothing.

Clear Cancel path.

Real-device testing required.

App must state it has not transmitted location, dispatched responders or confirmed that help is coming.

Offline owner-approved emergency dog summary.

After-hours vet search/verified link with availability/source limitations.

Privacy-aware lost-dog broadcast.

Lone-walker timers: 10, 20, 30, 45 or 60 minutes without false automated-rescue claims.

Restricted medical/behaviour emergency sharing is a later feature: owner-controlled minimum-data card, explicit action, step-up authentication where supported, short-lived purpose-bound access if ever enabled, audit and immediate revocation.

External sharing of emergency medical/behaviour details must remain disabled until privacy/legal/veterinary/security gates pass.

## 22. Accessibility and communication

Mobility, wheelchair, pram and accessible-route context.

Accessible dry-sand routes where verified.

Plain-language mode and reduced cognitive load.

Larger text, high contrast and reduced motion.

Keyboard access and visible focus.

Screen-reader names, roles, states and errors.

200% zoom and 320-pixel reflow.

Risk meaning always conveyed by number + words + colour.

Sound + vibration, vibration-only and silent visual alert options.

Language and communication preferences.

Visual emergency information and visual dog-command support.

Deaf/Auslan communication area using verified Deaf-community sources; never invent signs.

QR communication signage remains proposed and requires privacy/accessibility review.

## 23. Privacy, consent and data rights

Separate public, behavioural and restricted data layers.

Precise GPS never public by default.

Incognito and exact-location hiding.

Consent-controlled presence, Best Mate relationships and notifications.

No unnecessary permanent movement trail.

De-identification before broader reporting.

Export, correction and deletion requests.

Account deletion and subscription cancellation are separate actions.

Versioned consent and legal acknowledgements.

Least-privilege roles and audited authorised actions.

No hidden surveillance.

No autonomous legal/council/veterinary conclusions.

## 24. Council and park operational support

Council-verified rules and time-bounded notices.

Maintenance: fencing, gates, lighting, waste bags, bins and other park assets.

Hazard and incident pattern review.

De-identified operational trends and heatmaps.

Superintendent/maintenance workflows.

Correction, action, resolution and human-reviewed closure evidence.

Council pilot benefit reporting.

Human review before any enforcement or consequential conclusion.

BagStation stock/service telemetry remains companion roadmap unless separately promoted into active scope.
