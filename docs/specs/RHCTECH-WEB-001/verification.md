# RHCTECH-WEB-001 — Verification Record

## 1. Release Candidate

- **Spec:** RHCTECH-WEB-001 v1.1
- **Risk Tier:** R2 — Medium
- **Branch:** `agent/spec-rhctech-web-001`
- **Current reviewed head before this record update:** `bc36632f6d995d9475eec4032d8d9b1e006f183f`
- **Verifier:** AI implementation/review pass + human owner visual acceptance
- **Environment:** Cloudflare Pages branch preview
- **Human visual approval:** APPROVED — 2026-07-24

## 2. Acceptance Evidence

| AC | Evidence | Result |
|---|---|---|
| AC-01 Product understanding | Hero identifies RHC Tech as product company; Training and H&NTrip have separate showcase narratives. | Pass |
| AC-02 Product evidence | Both active products use current real product UI as primary visual evidence. Replacement captures were reviewed and approved by the owner. | **Pass — human visual acceptance** |
| AC-03 Distinct composition | Training and H&NTrip use materially different layout/composition. | Pass |
| AC-04 Training CTA | `https://rhc-training.onrender.com/` with label `Conhecer RHC Training`. | Pass — source inspection |
| AC-05 H&NTrip CTA | `https://h-ntrip.onrender.com/` with label `Explorar H&NTrip`. | Pass — source inspection |
| AC-06 No fake traction | Former hero cards with unsupported metrics are removed. | Pass |
| AC-07 Dark hierarchy | Background, surfaces, borders and product-specific stages were visually accepted by the owner. | **Pass — human visual acceptance** |
| AC-08 Responsive quality | Dedicated responsive compositions exist. Full device-specific manual regression remains required before release. | Partial — runtime/device checks pending |
| AC-09 Accessibility | Skip link, semantic landmarks, focus-visible, reduced-motion and ARIA mobile-menu state are present. | Partial — runtime keyboard/menu check pending |
| AC-10 Performance | Static architecture retained; no framework/dependency/video added. | Lighthouse pending |
| AC-11 Privacy-safe evidence | H&NTrip published capture excludes the personal-email region; replacement evidence was visually approved. | **Pass — privacy correction + human confirmation** |
| AC-12 Architecture preservation | No backend/database/auth/RLS/dependency changes. | Pass |
| AC-13 Inspecto honesty | Inspecto remains subordinate and explicitly paused. | Pass |
| AC-14 Contact channels | Contact section now exposes LinkedIn `https://www.linkedin.com/in/rubens-hcosta/` and `mailto:rhc.techbr@gmail.com`; obsolete `contato@rhctech.com.br` removed. | Pass — source inspection |

## 3. Visual Review History

### Round 1 — Rejected

Human review identified two release-blocking presentation defects:

1. RHC Training current product evidence was not presented correctly.
2. H&NTrip evidence was pixelated and exposed a personal email address.

This correctly blocked G7 UX, G8 Brand and G10 Privacy.

### Corrective action

- Current RHC Training capture promoted to the canonical website asset.
- Current H&NTrip privacy-safe capture promoted to the canonical website asset.
- Forced screenshot zoom/crop (`108%`, `112%`, `116%`, `118%` plus translation) removed.
- Product captures now preserve their source aspect ratio with non-destructive presentation.
- Contact channels changed to owner-approved LinkedIn and email.

### Round 2 — Approved

The human owner explicitly approved the corrected visual release candidate on 2026-07-24.

**Result:** visual product evidence, composition and privacy correction accepted.

## 4. Remaining Verification Before Ready-to-Merge

- [ ] Laptop review around 1280px
- [ ] Tablet review
- [ ] Mobile review around 390px
- [ ] No horizontal overflow
- [x] RHC Training current capture is visible, sharp and commercially credible — owner approved
- [x] H&NTrip current capture is sharp and contains no exposed personal email/details — owner approved
- [x] Product CTA hrefs point to the approved live products — source inspection
- [ ] Keyboard navigation and mobile-menu runtime behavior
- [ ] `prefers-reduced-motion` runtime behavior
- [ ] Image-failure/fallback sanity check
- [x] Contact hrefs updated to LinkedIn and `rhc.techbr@gmail.com` — source inspection
- [ ] Legal-link regression runtime check
- [ ] Lighthouse representative mobile run with conditions recorded
- [ ] Record LCP / CLS / INP or available proxy
- [x] Human owner visual acceptance

## 5. Quality Gates — Current State

| Gate | Result |
|---|---|
| G1 Spec Compliance | Pass |
| G2 Build / static validity | Cloudflare preview deployment observed during review; final-head confirmation pending |
| G3 Static Quality | Pass by code inspection |
| G4 Tests | Manual runtime checks pending |
| G5 Security | Pass for changed surface — no new security/auth/data-processing capability introduced |
| G6 Permissions | N/A — no auth/permissions change |
| G7 UX | **Pass — human owner visual acceptance** |
| G8 Brand | **Pass — human owner visual acceptance** |
| G9 Observability / failure handling | Runtime/fallback sanity pending |
| G10 Privacy | **Pass — personal-email exposure removed and visually confirmed** |
| G11 Supply Chain | Pass — no dependency added |
| G12 Performance & Reliability | **Pending Lighthouse / Web Vitals proxy** |
| G13 Regression | Runtime navigation/contact/legal checks pending |

## 6. Definition of Done

**NOT DONE YET.**

The visual release candidate is approved and the previously blocking UX/Brand/Privacy findings are closed. The PR remains Draft only for objective runtime, responsive, accessibility, regression and performance evidence.

**No evidence → No Done. No passed mandatory gates → No Release.**