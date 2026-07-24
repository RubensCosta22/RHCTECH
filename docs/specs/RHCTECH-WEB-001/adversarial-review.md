# RHCTECH-WEB-001 — Adversarial Review

> RHC Tech SDD v1.3 · Solo-development R2 review

## 1. Review Context

- **Spec ID / Version:** RHCTECH-WEB-001 v1.0
- **Risk Tier:** R2 — Medium
- **Reviewed artifact:** `docs/specs/RHCTECH-WEB-001/spec.md`
- **Reviewer:** Independent AI adversarial review pass
- **Review Date:** 2026-07-24
- **Independent review context from authoring/implementation?** Yes — dedicated review pass before implementation

## 2. Adversarial Question

> What would make this Spec unsafe, ambiguous, incomplete, untestable or likely to cause a regression if implemented exactly as written?

## 3. Findings

| ID | Severity | Area | Finding | Required action | Status |
|---|---|---|---|---|---|
| AR-01 | Major | Commercial truthfulness | The current production page contains quantitative-looking product cards in the hero (`247 treinos`, `1.284 km`) but the Spec only prohibits fake traction generally; implementation could preserve or replace them with similarly ambiguous values. | Explicitly require removal of unsupported company/product traction metrics from the corporate hero unless the value is sourced and contextualized. | Resolved in Spec intent; must be enforced in implementation. |
| AR-02 | Major | CTA behavior | `Conhecer` / `Explorar` is specified, but destination behavior is not defined. A CTA that points nowhere or only scrolls vaguely could satisfy wording while failing user intent. | Define each active-product CTA destination before release: live product, dedicated product page, or clearly intentional in-page product detail. No dead/placeholder CTA. | Open — implementation decision required before Ready. |
| AR-03 | Major | Product imagery | The Spec requires real UI as evidence but does not specify freshness/quality. Old, blurry, misleading or privacy-sensitive screenshots could technically pass. | Require current representative screenshots, no exposed personal identifiers, and adequate resolution/cropping for intended viewport. | Resolved by adding implementation constraint below. |
| AR-04 | Major | Source-of-truth drift | RHCTECH repo does not yet explicitly declare `RHC-Tech-Engineering` as its governing engineering authority. This first R2 work could become an exception to the newly established process. | Add local engineering-governance reference as part of this documentation PR before implementation begins. | Open. |
| AR-05 | Minor | Inspecto | The Spec says Inspecto may remain visible, but the current page heavily frames the company as three products. Since Inspecto is paused, it could still dilute trust or create false breadth. | Treat Inspecto as clearly secondary/paused and never equal in visual weight to active products. | Covered by FR-05; verify visually. |
| AR-06 | Minor | Performance target | Lighthouse thresholds are useful but can fluctuate. A single score can encourage gaming instead of actual performance. | Record test conditions and inspect LCP/CLS/INP-related evidence in addition to headline score where available. | Open — add to verification plan. |
| AR-07 | Minor | Contact flow | Existing README documents Formspree/mailto behavior, but the redesign Spec does not decide whether contact functionality will be touched. | Preserve current contact behavior unless explicitly brought into scope; if changed, trigger Security/Privacy conditional controls. | Resolved by scope rule. |

## 4. Risk Tier Challenge

R2 is appropriate provided implementation remains frontend presentation only.

Escalate/re-review if implementation introduces:

- new analytics/tracking;
- new third-party scripts;
- new framework/build system;
- authentication or account flows;
- contact-data collection changes;
- backend/API changes;
- material deployment/security-header changes.

## 5. Requirement Challenge

The visual requirements are substantially testable because they include specific anti-patterns and acceptance criteria. The largest remaining ambiguity is CTA destination behavior.

Required clarification before Ready:

- RHC Training CTA target;
- H&NTrip CTA target.

A disabled, `#`, placeholder, or misleading CTA is not acceptable.

## 6. Security & Data Challenge

No direct backend/data exposure is expected.

Implementation must ensure screenshots/assets do not expose:

- personal email addresses;
- tokens/keys;
- private trip/user data that should not be public;
- admin-only information;
- real sensitive financial/personal details without intentional consent/publication.

## 7. Architecture & Reliability Challenge

The current site is static HTML/CSS/vanilla JS and already deploys without a build pipeline. Adding a framework purely for visual redesign would increase complexity, supply-chain surface and deployment risk without demonstrated need.

Default decision: preserve static architecture.

## 8. UX & Brand Challenge

The redesign must be rejected if it merely replaces the current layout with:

- glowing bento cards;
- generic glassmorphism;
- decorative dashboards;
- oversized browser mockups with unreadable content;
- identical product sections recolored per product;
- excessive motion masking weak hierarchy.

Product evidence must remain legible at common desktop sizes and meaningful on mobile.

## 9. Additional Acceptance Constraints

Before implementation begins, add/confirm:

1. Active-product CTA destinations are explicit and functional.
2. Product screenshots are current, representative, privacy-safe and sufficiently high resolution.
3. RHCTECH repo points to `RHC-Tech-Engineering` as the governing SDD authority.
4. Verification captures performance conditions and key web-vital indicators where tooling provides them.

## 10. Approval Verdict

- [ ] APPROVE
- [x] RETURN TO DRAFT / REVIEW

### Blocking findings remaining

0 Blocker.

### Major findings remaining

2 unresolved Major:

- AR-02 — CTA destinations are undefined.
- AR-04 — local governance authority reference is missing.

### Reviewer conclusion

The redesign direction is strong and the R2 classification is appropriate, but **the Spec is not Ready for Code yet**. Resolve AR-02 and AR-04, update the Spec, then perform a short follow-up adversarial check and obtain explicit human-owner approval.