# RHCTECH-WEB-001 — Adversarial Review

> RHC Tech SDD v1.3 · Solo-development R2 review

## 1. Review Context

- **Spec ID / Version:** RHCTECH-WEB-001 v1.1
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
| AR-01 | Major | Commercial truthfulness | Quantitative hero cards could be interpreted as unsupported traction. | Prohibit unsupported traction-looking metrics in corporate hero. | Resolved in Spec v1.1. |
| AR-02 | Major | CTA behavior | Active product CTA destinations were undefined. | Fix exact live destinations and prohibit dead/placeholder CTAs. | Resolved: Training → `https://rhc-training.onrender.com/`; H&NTrip → `https://h-ntrip.onrender.com/`. |
| AR-03 | Major | Product imagery | Real UI requirement did not guarantee freshness, legibility or privacy safety. | Require current, representative, sufficiently high-resolution and privacy-safe imagery. | Resolved in Spec v1.1. |
| AR-04 | Major | Source-of-truth drift | RHCTECH did not explicitly declare central engineering authority. | Add local governance reference to `RubensCosta22/RHC-Tech-Engineering`. | Resolved via `docs/README.md`. |
| AR-05 | Minor | Inspecto | Paused product could still dilute trust if given equal weight. | Keep Inspecto clearly secondary and paused. | Covered by FR-05 / AC-13. |
| AR-06 | Minor | Performance | Headline Lighthouse score alone can encourage score gaming. | Record conditions and inspect underlying web-vital-related evidence. | Resolved in Sections 15/17/AC-10. |
| AR-07 | Minor | Contact flow | Redesign could accidentally alter contact-data behavior. | Preserve contact behavior unless explicitly re-scoped. | Resolved by Non-Goals and Security requirements. |

## 4. Risk Tier Challenge

R2 remains appropriate provided implementation stays frontend presentation-only.

Return the Spec to review and reconsider controls if implementation introduces:

- analytics or tracking;
- new third-party scripts;
- new framework/build system;
- authentication/account flows;
- changed contact-data collection;
- backend/API changes;
- material deployment/security-header changes.

## 5. Requirement Challenge

The previously ambiguous product continuation path is now explicit and testable.

Approved destinations:

- RHC Training: `https://rhc-training.onrender.com/`
- H&NTrip: `https://h-ntrip.onrender.com/`

A disabled, `#`, placeholder or misleading CTA is explicitly prohibited.

## 6. Security & Data Challenge

No direct backend/data exposure is expected.

Public screenshots/assets must be rejected if they expose unintended:

- personal email addresses;
- tokens/keys;
- private trip/user data;
- admin-only information;
- sensitive financial/personal information.

No new tracking, external scripts or data collection are approved by this Spec.

## 7. Architecture & Reliability Challenge

The current site is static HTML/CSS/vanilla JS. A framework migration would increase complexity, supply-chain surface and deployment risk without demonstrated need.

**Decision:** preserve the static architecture for this redesign.

Core content, navigation and product CTAs must continue to work even if animation APIs fail or motion is disabled.

## 8. UX & Brand Challenge

Reject implementation that merely replaces the current design with:

- glowing bento cards;
- generic glassmorphism;
- decorative dashboards;
- oversized browser frames containing unreadable UI;
- identical product sections recolored per product;
- excessive motion masking weak hierarchy;
- fake metrics or unsupported social proof.

Product evidence must remain legible at common desktop sizes and meaningful on mobile.

## 9. Follow-up Review Result

The follow-up pass tested the two former Major blockers:

### AR-02 — CTA destinations
Resolved. Exact product destinations are now normative requirements and acceptance criteria.

### AR-04 — governance authority
Resolved. `docs/README.md` now declares `RubensCosta22/RHC-Tech-Engineering` as the corporate source of truth and states that the central Standard wins on conflict.

No new Blocker or Major finding was introduced by these corrections.

## 10. Approval Verdict

- [x] **APPROVE**
- [ ] RETURN TO DRAFT / REVIEW

### Blocking findings remaining

**0 Blocker.**

### Major findings remaining

**0 Major.**

### Minor findings remaining

No Minor finding blocks Ready. AR-05 is an explicit visual verification item during implementation.

### Human owner approval

Recorded on 2026-07-24: the owner supplied the final live CTA destinations and instructed the work to continue.

### Reviewer conclusion

**RHCTECH-WEB-001 v1.1 is Approved and Ready for Implementation.**

Implementation must remain within the approved static frontend scope. Any discovery that changes architecture, privacy/data collection, third-party dependencies or security behavior returns the item to Spec Review before code proceeds.