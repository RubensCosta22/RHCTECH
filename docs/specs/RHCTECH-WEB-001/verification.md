# RHCTECH-WEB-001 — Verification Record

## 1. Release Candidate

- **Spec:** RHCTECH-WEB-001 v1.1
- **Risk Tier:** R2 — Medium
- **Branch:** `agent/spec-rhctech-web-001`
- **Verifier:** AI implementation/review pass + human visual acceptance pending
- **Environment:** Cloudflare Pages branch preview

## 2. Static Acceptance Evidence

| AC | Evidence | Result |
|---|---|---|
| AC-01 Product understanding | Hero identifies RHC Tech as product company; Training and H&NTrip have separate showcase narratives. | Pass — code inspection |
| AC-02 Product evidence | Both active products use real product UI as large visual surfaces. Current product captures were re-supplied on 2026-07-24 after visual review found stale/poor presentation. | Re-test pending preview |
| AC-03 Distinct composition | Training and H&NTrip use different layout/composition. | Pass — structural inspection |
| AC-04 Training CTA | `https://rhc-training.onrender.com/` with label `Conhecer RHC Training`. | Pass |
| AC-05 H&NTrip CTA | `https://h-ntrip.onrender.com/` with label `Explorar H&NTrip`. | Pass |
| AC-06 No fake traction | Former hero cards with unsupported metrics are removed. | Pass |
| AC-07 Dark hierarchy | Separate tokens exist for background, surfaces, borders and product stages. | Pending visual confirmation |
| AC-08 Mobile quality | Dedicated mobile composition exists. | Pending manual preview |
| AC-09 Accessibility | Skip link, semantic landmarks, focus-visible, reduced-motion and ARIA mobile menu state are present. | Partial pass; runtime review pending |
| AC-10 Performance | Static architecture retained; no framework/dependency/video added. | Lighthouse pending |
| AC-11 Privacy-safe evidence | H&NTrip replacement capture excludes the personal-email area; Training replacement capture shows product UI without the previously missing image. | Re-test pending preview |
| AC-12 Architecture preservation | No backend/database/auth/RLS/dependency changes. | Pass |
| AC-13 Inspecto honesty | Inspecto remains subordinate and explicitly paused. | Pass |

## 3. Visual Review Findings — Round 1

Human review of the first Cloudflare preview identified two release-blocking presentation defects:

1. **RHC Training:** intended current product image was not being presented correctly in the showcase.
2. **H&NTrip:** the displayed capture was visibly pixelated and the source capture exposed a personal email address in the header.

These findings block G7 UX, G8 Brand and G10 Privacy until corrected and re-reviewed.

## 4. Corrective Action

- Current RHC Training capture supplied by the owner and promoted to the canonical website asset path.
- Current H&NTrip capture supplied by the owner; privacy-safe crop supplied without the personal-email region and promoted to the canonical website asset path.
- Existing public asset paths are preserved so the current page markup consumes the corrected evidence without introducing a new application/runtime dependency.
- Visual scaling/crop remains subject to the second preview review; any remaining visible degradation must be corrected before Ready-to-Merge.

## 5. Manual Verification Required Before Ready-to-Merge

- [ ] Second desktop visual review at approximately 1440px+
- [ ] Laptop review around 1280px
- [ ] Tablet review
- [ ] Mobile review around 390px
- [ ] No horizontal overflow
- [ ] RHC Training current capture is visible, sharp and commercially credible
- [ ] H&NTrip current capture is sharp and contains no exposed personal email/details
- [ ] Product CTAs open correct live products
- [ ] Keyboard navigation and mobile-menu behavior
- [ ] `prefers-reduced-motion` behavior
- [ ] Image-failure/fallback sanity check
- [ ] Contact and legal-link regression check
- [ ] Lighthouse representative mobile run with conditions recorded
- [ ] Record LCP / CLS / INP or available proxy
- [ ] Human owner visual acceptance

## 6. Quality Gates — Current State

| Gate | Result |
|---|---|
| G1 Spec Compliance | Pass so far |
| G2 Build / static validity | Cloudflare preview required after asset correction |
| G3 Static Quality | Pass by code inspection; further review pending |
| G4 Tests | Manual checks pending |
| G5 Security | No new security surface |
| G6 Permissions | N/A — no auth/permissions change |
| G7 UX | **Blocked pending second visual review** |
| G8 Brand | **Blocked pending second visual review** |
| G9 Observability / failure handling | Manual sanity pending |
| G10 Privacy | **Correction applied; second visual confirmation pending** |
| G11 Supply Chain | Pass — no dependency added |
| G12 Performance & Reliability | Lighthouse pending |
| G13 Regression | Contact/legal/nav/manual regression pending |

## 7. Definition of Done

**NOT DONE YET.**

The first visual review correctly rejected the release candidate. The replacement product evidence has now been supplied, but the PR must remain Draft until the new Cloudflare preview is visually reviewed and the remaining mandatory gates pass.

**No evidence → No Done. No passed mandatory gates → No Release.**
