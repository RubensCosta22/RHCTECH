# RHCTECH-WEB-001 — Implementation Plan

> Approved under RHC Tech SDD v1.3

## 1. Spec Reference

- **Spec ID:** RHCTECH-WEB-001
- **Spec Version:** 1.1
- **Status:** Approved / Ready
- **Risk Tier:** R2 — Medium
- **Approved By:** Human owner + independent AI adversarial review
- **Architecture:** static HTML + CSS + vanilla JavaScript

## 2. Technical Strategy

Redesign the existing static corporate homepage without introducing a framework or backend.

The implementation will prioritize:

1. stronger corporate positioning;
2. large, legible real-product evidence;
3. distinct visual storytelling for RHC Training and H&NTrip;
4. real product CTAs;
5. reduced decorative/dashboard-like content;
6. intentional desktop/mobile layouts;
7. accessibility, performance and progressive enhancement.

## 3. Planned File Scope

| Area | File / surface | Planned change |
|---|---|---|
| Corporate page | `index.html` | Rewrite hero, product storytelling, Inspecto treatment, engineering credibility and CTA structure. |
| Styling | current CSS / inline style | Rebuild layout hierarchy, responsive compositions, product-specific visual systems and focus/reduced-motion states. Extract CSS only if it materially improves maintainability without architecture change. |
| Interaction | current inline JS / `assets/js/app.js` if applicable | Keep only necessary nav/reveal/mobile behavior; remove decorative continuous motion. |
| Product evidence | `assets/rhc-training-site.webp`, `assets/hntrip-site.webp` and/or replacement assets | Use current privacy-safe product imagery at useful display resolution. |
| SEO | `index.html`, sitemap/metadata as applicable | Update description/Open Graph/canonical only where necessary. |
| Governance | `docs/` | Preserve Spec, adversarial review, implementation plan and verification evidence. |

## 4. Explicit Non-Changes

Do not modify:

- RHC Training code or data;
- H&NTrip code or data;
- Supabase;
- RLS;
- authentication;
- product APIs;
- contact-data processing;
- Netlify security headers unless a separate review is triggered;
- framework/build architecture.

## 5. Content Plan

### Corporate hero

Remove the current metric-orbit/dashboard motif.

Replace with a product-company statement and a more credible visual system based on product identity/evidence rather than fabricated-looking metrics.

### RHC Training

Primary narrative:

**Treine. Registre. Evolua.**

The product UI should be large and visually dominant. Supporting UI details may be composed around the primary screenshot only when they represent real product capabilities.

CTA:

`Conhecer RHC Training →`

Destination:

`https://rhc-training.onrender.com/`

### H&NTrip

Primary narrative:

**Planeje menos. Viaje mais.**

Use a calmer, spatial composition distinct from Training. Product UI should be large enough to inspect rather than buried in a frame.

CTA:

`Explorar H&NTrip →`

Destination:

`https://h-ntrip.onrender.com/`

### Inspecto

Present as a small paused-product signal, not a third equal showcase.

### Engineering credibility

Present RHC Tech quality/security/SDD principles in customer-facing language. Avoid internal checklists or process-heavy documentation tone.

## 6. Product Imagery Plan

Before using an asset publicly:

- verify current relevance;
- verify sufficient resolution/cropping;
- verify no unintended email/personal/admin/private information;
- preserve legibility at desktop display size;
- provide meaningful alt text;
- ensure layout remains understandable if image fails.

If current screenshots are insufficient, implementation may replace them with newly captured privacy-safe screenshots from the live products without changing product code.

## 7. Responsive Plan

### Desktop

- use asymmetric editorial/product compositions;
- product UI dominates rather than sitting inside empty mockup frames;
- Training composition feels more kinetic;
- H&NTrip composition feels calmer/more spatial;
- maintain strong typographic hierarchy and readable line lengths.

### Tablet

- reduce secondary visual layers;
- maintain product evidence prominence;
- prevent awkward split layouts.

### Mobile (~390px)

- single logical reading flow;
- no horizontal overflow;
- product screenshots remain useful rather than microscopic;
- CTAs full/comfortable touch targets where appropriate;
- secondary decorative elements removed before primary information is compromised.

## 8. Accessibility Plan

- semantic landmarks and heading order;
- descriptive link labels;
- visible focus states;
- keyboard-operable nav/menu;
- `prefers-reduced-motion` support;
- WCAG AA contrast target;
- meaningful alt text.

## 9. Motion Plan

Use only progressive-enhancement reveal/transitions where useful.

No continuous orbiting, pulsing or distracting loops.

Core content and CTAs remain available with JS disabled/failing.

## 10. Performance Plan

- no new framework/dependencies;
- no autoplay video;
- compress/size product assets appropriately;
- minimize layout shift;
- avoid excessive effects/filters;
- preserve fast static-site delivery.

Verification records:

- Lighthouse scores;
- test conditions;
- LCP;
- CLS;
- INP or available proxy such as TBT where appropriate.

## 11. Failure Modes

| Failure | Required behavior |
|---|---|
| Product screenshot fails | Alt/fallback and surrounding copy still communicate product purpose. |
| Reveal/IntersectionObserver unavailable | Content remains visible/usable. |
| Reduced motion enabled | Non-essential animation disabled/reduced. |
| Product external app unavailable | CTA remains truthful; no false success state is simulated by corporate site. |
| Contact integration issue | Preserve existing fallback behavior. |

## 12. Verification Matrix

| Requirement | Verification |
|---|---|
| FR-01 / AC-01 | Manual first-impression/content review desktop + mobile |
| FR-02 / AC-02 | Visual review of product UI prominence |
| FR-03 / AC-03 | Side-by-side composition review |
| FR-04 / AC-04 / AC-05 | Inspect exact href + manual navigation |
| FR-08 / AC-06 | Content audit for unsupported metrics |
| AC-07 | Dark-surface visual review |
| AC-08 | ~390px manual responsive review |
| AC-09 | Keyboard + reduced-motion review |
| AC-10 | Lighthouse + underlying metrics evidence |
| AC-11 | Product imagery privacy review |
| AC-12 | Diff review for architecture/backend changes |
| AC-13 | Inspecto visual/status review |

## 13. Rollout & Recovery

The change is a static frontend redesign.

Rollback strategy:

- preserve the current `Rcosta22` commit as rollback point;
- deploy via the existing GitHub/Netlify workflow;
- if production verification exposes a material visual/navigation regression, revert the redesign commit/merge rather than patching blindly in production.

No database rollback is required.

## 14. Risk Register

| Risk | Impact | Mitigation |
|---|---|---|
| Attractive but commercially weak redesign | High | Product-first ACs and adversarial visual review. |
| Generic AI-site aesthetic | Medium | Explicit anti-pattern list and Brand review. |
| Product UI still unreadable | High | Minimum prominence requirement + manual desktop/mobile review. |
| Screenshot privacy leak | High | Pre-merge privacy review of every public product asset. |
| Performance regression from imagery/effects | Medium | No video/framework; optimized assets; Lighthouse evidence. |
| CTA regression | High | Exact approved href verification. |
| Scope creep into product/backend | High | AC-12 + diff review; return to Spec Review if discovered. |

## 15. Implementation Gate

- [x] Spec Approved
- [x] Risk Tier assigned
- [x] Applicable Controls declared
- [x] Adversarial Review passed
- [x] Human owner approval recorded
- [x] CTA destinations fixed
- [x] Local governance authority declared
- [x] Rollback strategy defined
- [x] Verification plan defined

**IMPLEMENTATION AUTHORIZED.**

Material discoveries that change requirements, architecture, security/privacy or risk classification return this item to Spec Review.