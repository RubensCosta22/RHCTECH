# RHCTECH-WEB-001 — Verification Record

## 1. Release Candidate

- **Spec:** RHCTECH-WEB-001 v1.1
- **Risk Tier:** R2 — Medium
- **Branch:** `agent/spec-rhctech-web-001`
- **Current implementation head at record creation:** `23ad84250035397b315d0d8b9125d9d66dcf9b48`
- **Verifier:** AI implementation/review pass + human visual acceptance pending
- **Environment:** GitHub branch / deployment preview pending

## 2. Static Acceptance Evidence

| AC | Evidence | Result |
|---|---|---|
| AC-01 Product understanding | Hero explicitly identifies RHC Tech as product company; Training and H&NTrip have named, separate showcase narratives. | Pass — code inspection |
| AC-02 Product evidence | Both active products use `assets/rhc-training-site.webp` / `assets/hntrip-site.webp` as large primary visual surfaces rather than small images inside empty generic cards. | Pass — structural inspection; visual preview pending |
| AC-03 Distinct composition | Training uses copy + kinetic offset screen/note composition; H&NTrip uses full-width spatial stage + index treatment. | Pass — structural inspection; visual preview pending |
| AC-04 Training CTA | `href="https://rhc-training.onrender.com/"` with label `Conhecer RHC Training`. | Pass |
| AC-05 H&NTrip CTA | `href="https://h-ntrip.onrender.com/"` with label `Explorar H&NTrip`. | Pass |
| AC-06 No fake traction | Former hero cards with `247` / `1.284 km` are removed from redesigned markup. Hero now shows product previews/status only. | Pass — implementation inspection |
| AC-07 Dark hierarchy | Separate tokens exist for background, soft background, surfaces, stronger borders and product-specific stages. | Pending visual confirmation |
| AC-08 Mobile quality | Dedicated `@media (max-width:760px)` composition exists; no visual overflow evidence collected yet. | Pending manual preview |
| AC-09 Accessibility | Skip link, semantic nav/main/sections, descriptive CTA labels, focus-visible rule, reduced-motion rule and ARIA menu state are implemented. | Partial pass; keyboard/manual review pending |
| AC-10 Performance | No framework/dependency/video added; static architecture retained. | Lighthouse pending |
| AC-11 Privacy-safe evidence | Product assets are cropped in presentation to reduce header exposure; source assets still require human privacy review at rendered size. | Pending human review |
| AC-12 Architecture preservation | Diff comparison shows documentation + `index.html`; no backend/database/auth/RLS/dependency changes. | Pass |
| AC-13 Inspecto honesty | Inspecto is a compact subordinate row with explicit `Em pausa` status rather than equal showcase. | Pass — structural inspection |

## 3. Diff / Scope Evidence

Comparison against `Rcosta22` at implementation stage:

- governance/specification files added under `docs/`;
- only runtime file changed: `index.html`;
- no package/dependency files;
- no backend/API/database/migration/RLS files;
- no Netlify/security-header file changed.

## 4. Implementation Checks Completed

- [x] Spec Approved before runtime code change
- [x] Adversarial review: 0 Blocker / 0 Major before implementation
- [x] Central governance authority declared
- [x] Static HTML/CSS/JS architecture preserved
- [x] Unsupported hero traction-looking metrics removed
- [x] Exact Training CTA implemented
- [x] Exact H&NTrip CTA implemented
- [x] Inspecto made subordinate and clearly paused
- [x] Reduced-motion CSS implemented
- [x] Visible focus style implemented
- [x] Skip link implemented
- [x] No new third-party JavaScript/dependency introduced

## 5. Manual Verification Required Before Ready-to-Merge

- [ ] Desktop visual review at approximately 1440px+
- [ ] Laptop review around 1280px
- [ ] Tablet review
- [ ] Mobile review around 390px
- [ ] No horizontal overflow
- [ ] RHC Training product image legible/current/privacy-safe
- [ ] H&NTrip image legible/current/privacy-safe; no unintended personal email/details visible
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
| G2 Build / static validity | Pending preview/static runtime confirmation |
| G3 Static Quality | Pass by code inspection; further review pending |
| G4 Tests | Manual checks pending |
| G5 Security | No new security surface; screenshot privacy pending |
| G6 Permissions | N/A — no auth/permissions change |
| G7 UX | Pending visual/manual review |
| G8 Brand | Pending human visual acceptance |
| G9 Observability / failure handling | Progressive fallback implemented; manual sanity pending |
| G10 Privacy | Screenshot review pending |
| G11 Supply Chain | Pass — no dependency added |
| G12 Performance & Reliability | Lighthouse pending |
| G13 Regression | Contact/legal/nav/manual regression pending |

## 7. Definition of Done

**NOT DONE YET.**

The implementation may enter Draft PR review, but it must not merge/release until the pending visual, privacy, accessibility, regression and performance evidence above is collected and accepted.

**No evidence → No Done. No passed mandatory gates → No Release.**