# RHCTECH-WEB-001 — RHC Tech Corporate Website Redesign

> RHC Tech Spec-Driven Development Standard v1.3

## 1. Identification

- **Spec ID:** RHCTECH-WEB-001
- **Product:** RHC Tech Corporate Website
- **Version:** 1.1
- **Status:** Approved
- **Owner:** RubensCosta22
- **Required Approvers:** Human owner
- **Risk Tier:** R2 — Medium
- **SDD Process Budget Target:** one focused work session
- **Created:** 2026-07-24
- **Approved:** 2026-07-24
- **Central Standard:** `RubensCosta22/RHC-Tech-Engineering`
- **Architecture:** static HTML + CSS + vanilla JavaScript

## 2. Problem

The current `rhctech.com.br` homepage has a coherent dark visual identity but does not present RHC Tech products with the clarity, commercial credibility, product evidence, visual depth or differentiated personality expected from a premium software company.

Observed problems:

- product screenshots are visually secondary and undersized;
- large empty or low-information frames create an unfinished impression;
- RHC Training and H&NTrip use nearly identical editorial compositions differentiated mainly by accent color;
- `Produto ativo` communicates internal status rather than user value;
- product sections behave more like brand-book slides than product demonstrations;
- dark surfaces and dark screenshots merge, reducing hierarchy;
- copy explains categories but does not strongly communicate differentiation or reason to try;
- the page does not convincingly demonstrate that RHC Tech builds real, usable software;
- decorative quantitative hero cards can be mistaken for unsupported traction metrics.

## 3. Objective

Redesign the corporate homepage so a first-time visitor can quickly understand:

1. what RHC Tech is;
2. what problems its products solve;
3. why RHC Training and H&NTrip are distinct;
4. that the products are real and working;
5. what action to take next.

The page must feel like a premium software-company website rather than a portfolio, brand-book slide deck or generic AI-generated landing page.

## 4. Success Principles

The redesign succeeds when the visitor reaction moves from:

> “Bonita identidade visual.”

To:

> “Essa empresa realmente desenvolve software.”

And then:

> “Esse produto parece bem feito; quero abrir.”

## 5. Non-Goals

- Redesign RHC Training itself.
- Redesign H&NTrip itself.
- Change product authentication, databases, APIs, Supabase, RLS or user data.
- Add checkout, subscriptions or e-commerce.
- Re-activate Inspecto.
- Introduce React, Next, Vite or another framework solely for visual redesign.
- Add analytics/tracking without separate review.
- Replace current contact-data handling unless explicitly re-scoped.

## 6. Audiences

### US-01 — Prospective product user
As a visitor, I want to understand each product in seconds so I can decide whether it is relevant to me.

### US-02 — Prospective customer/partner
As someone evaluating RHC Tech, I want credible product evidence and engineering signals so I can trust the company.

### US-03 — Existing user
As an existing user, I want a clear route from the corporate site to the product I already use.

## 7. Functional Requirements

### FR-01 — Corporate positioning
The hero must state clearly that RHC Tech builds its own digital products and must avoid generic agency/AI language.

### FR-02 — Product-first structure
RHC Training and H&NTrip must each receive a substantial showcase section where real UI is a primary visual element.

### FR-03 — Distinct product personalities
The two active products must share RHC Tech brand foundations while using different composition, rhythm and storytelling. Accent color alone is insufficient differentiation.

### FR-04 — Real product CTAs
The active product CTAs are fixed:

- **RHC Training:** `https://rhc-training.onrender.com/`
- **H&NTrip:** `https://h-ntrip.onrender.com/`

Primary labels should be product-oriented, for example:

- `Conhecer RHC Training →`
- `Explorar H&NTrip →`

`Produto ativo` must not be the primary action. No `#`, placeholder, disabled or misleading product CTA is permitted.

### FR-05 — Inspecto state
Inspecto may remain visible but must be clearly paused and visually subordinate. It must not imply current availability or equal product maturity.

### FR-06 — Engineering credibility
Include a restrained public-facing section communicating quality, security, Spec-Driven Development, reliability and evidence-based releases. It must read as a customer trust signal, not internal process documentation.

### FR-07 — Contact/company path
Retain a clear route to contact/company information. Existing contact behavior remains unchanged unless separately re-scoped.

### FR-08 — Unsupported metrics removal
Unsupported company/product traction metrics must not appear in the corporate hero. Quantitative UI shown in product demonstrations must either be real product data, privacy-safe demo data, or unmistakably interface content—not company traction claims.

## 8. Messaging Requirements

### Corporate tone

- precise;
- confident;
- restrained;
- product-led;
- human;
- no inflated startup clichés;
- no fake customer counts, revenue claims, testimonials or market claims.

### RHC Training

Preferred headline direction:

**Treine. Registre. Evolua.**

Messaging must emphasize execution, progression, history and reduced interaction cost during workouts.

### H&NTrip

`Planeje menos. Viaje mais.` may remain.

Messaging must emphasize itinerary, reservations, budget, documents and memories before, during and after travel.

## 9. Information Architecture

Target homepage order:

1. Navigation
2. Corporate hero
3. Short positioning/manifesto
4. RHC Training product demonstration
5. H&NTrip product demonstration
6. Inspecto paused-product treatment
7. Engineering / quality principles
8. Company/contact
9. Footer

Implementation may adjust exact section order only when all acceptance criteria remain satisfied.

## 10. UX/UI Specification

### 10.1 Corporate hero

Must:

- establish RHC Tech as the parent brand;
- communicate that the company builds real products;
- provide one dominant CTA toward active products;
- avoid decorative dashboards or quantitative cards that look like traction metrics;
- use depth without excessive gradients, glowing blobs or glassmorphism;
- remain understandable with motion disabled.

### 10.2 RHC Training showcase

Must communicate energy, movement and progression.

Requirements:

- real product UI occupies meaningful visual area;
- no large empty frame around a small screenshot;
- composition may combine a large primary interface view with cropped/detail UI panels;
- visual rhythm is more energetic than H&NTrip but remains restrained;
- CTA links to `https://rhc-training.onrender.com/`;
- screenshot must be current, representative, high-resolution enough for intended display and privacy-safe.

### 10.3 H&NTrip showcase

Must communicate exploration, planning and calm.

Requirements:

- real product UI is prominent and legible;
- supporting details may show itinerary, budget, reservations, dates, documents or travel progress;
- composition must not duplicate the Training layout;
- screenshot must not be buried inside a mostly empty dark container;
- CTA links to `https://h-ntrip.onrender.com/`;
- screenshot must be current, representative, high-resolution enough for intended display and privacy-safe.

### 10.4 Product image privacy

Public product imagery must not expose:

- private email addresses;
- authentication tokens/keys;
- private personal travel data not intended for publication;
- admin-only information;
- sensitive financial/personal details without explicit publication intent.

### 10.5 Surfaces and depth

Dark mode remains the foundation, but the following layers must be visually distinguishable:

- page background;
- elevated content surfaces;
- product screenshot/UI;
- borders/separators.

The design must not collapse into black-on-black-on-dark-grey.

### 10.6 Responsive behavior

Desktop and mobile must be intentionally composed, not scaled copies.

Desktop:

- use horizontal space for product storytelling;
- allow asymmetric composition where legibility is preserved;
- product UI should dominate its visual region.

Mobile:

- stack content in logical reading order;
- preserve primary product UI legibility;
- reduce/remove secondary decorative panels as needed;
- no horizontal overflow;
- no meaningful body content below 14px;
- CTAs remain obvious and touch-friendly.

### 10.7 Motion

Motion is optional and never required for comprehension.

When used:

- subtle reveal/translation only;
- respect `prefers-reduced-motion`;
- no continuous orbiting/pulsing decorative animation;
- no animation that delays access to content.

### 10.8 Accessibility

- semantic landmarks;
- logical headings;
- visible keyboard focus;
- keyboard-operable navigation/mobile menu;
- descriptive product CTA labels;
- meaningful alt text for product imagery;
- WCAG AA contrast target;
- reduced-motion support.

## 11. Brand Rules

Preserve RHC Tech identity while avoiding generic AI-dashboard aesthetics.

Required:

- restrained dark foundation;
- strong typographic hierarchy;
- Training lime, H&NTrip blue and Inspecto orange used only in product context;
- generous whitespace without dead/empty composition;
- product UI as evidence, not decoration;
- polished editorial confidence.

Avoid:

- excessive glassmorphism;
- gradient blobs;
- random glow effects;
- bento-card grids used only to fill space;
- oversized empty browser/mockup frames;
- fake code/terminal windows;
- decorative charts without meaning;
- identical product sections recolored per product;
- generic copy such as `inovação que transforma o futuro`.

## 12. Architecture

Current architecture remains the default:

- semantic HTML;
- CSS;
- vanilla JavaScript;
- static deploy.

Expected affected files/surfaces:

- `index.html`;
- current CSS structure or extraction of current inline CSS if this materially improves maintainability without changing architecture;
- `assets/` product imagery;
- JavaScript only for navigation/motion behavior actually required;
- SEO/Open Graph metadata where required.

No framework/build-system migration is approved by this Spec.

## 13. Security & Privacy

Expected direct security risk is low, but implementation must:

- preserve existing deployment/security headers unless separately reviewed;
- embed no secrets in frontend source;
- add no new third-party script without Security/Supply-Chain/Privacy review;
- preserve current contact behavior unless re-scoped;
- publish only privacy-safe product imagery.

Escalate/re-review if implementation introduces analytics, tracking, new external scripts, new data collection, authentication/account flows, backend APIs or deployment-security changes.

## 14. Failure Handling

- core content remains understandable if product images fail;
- alt text/fallback structure preserves meaning;
- navigation and CTAs do not depend on animation APIs;
- JavaScript errors must not blank core content;
- existing contact fallback behavior remains intact.

## 15. Performance & Reliability

Production verification targets:

- Lighthouse Performance >= 90 on representative mobile run;
- Accessibility >= 95;
- Best Practices >= 95;
- SEO >= 95;
- inspect LCP, CLS and INP/TBT-related evidence where tooling exposes them;
- record test conditions rather than relying on a single headline score;
- no unnecessary JavaScript dependencies;
- appropriately sized/compressed imagery;
- no autoplay video in initial implementation;
- avoid significant layout shift from media.

A score variance may be accepted only when test conditions and actual underlying metrics are documented.

## 16. SEO

- meaningful title and description;
- canonical metadata remains correct;
- Open Graph representation must reflect RHC Tech rather than an obsolete single-product identity;
- structured heading hierarchy;
- sitemap and robots remain valid.

## 17. Test Strategy

Required for this R2 change:

- HTML/JS sanity validation;
- product CTA checks using the exact approved destinations;
- navigation/contact/legal-link regression checks;
- responsive manual validation at representative mobile/tablet/desktop widths;
- keyboard navigation review;
- reduced-motion review;
- product-image privacy review;
- image-failure/fallback sanity check;
- Lighthouse evidence with test conditions and key metrics;
- Brand/visual review against this Spec;
- production verification after deploy.

## 18. Acceptance Criteria

### AC-01 — Product understanding
**Given** a first-time visitor on desktop or mobile,  
**When** they scan the hero and active-product sections,  
**Then** they can identify what RHC Tech is and distinguish RHC Training from H&NTrip without opening another page.

### AC-02 — Product evidence
**Given** either active-product showcase,  
**When** the section is visible,  
**Then** real product UI is a primary visual element and is not a small screenshot inside a mostly empty frame.

### AC-03 — Distinct composition
**Given** the Training and H&NTrip showcases,  
**When** compared,  
**Then** they do not use the exact same composition with only color/text changes.

### AC-04 — RHC Training CTA
**Given** the Training showcase,  
**When** the visitor activates its primary product CTA,  
**Then** it targets `https://rhc-training.onrender.com/` and is neither placeholder nor disabled.

### AC-05 — H&NTrip CTA
**Given** the H&NTrip showcase,  
**When** the visitor activates its primary product CTA,  
**Then** it targets `https://h-ntrip.onrender.com/` and is neither placeholder nor disabled.

### AC-06 — No fake traction
**Given** any quantitative information on the corporate page,  
**When** reviewed,  
**Then** it is either sourced/real, clearly interface/demo content or removed; unsupported traction-looking hero metrics do not remain.

### AC-07 — Dark hierarchy
**Given** the page in dark mode,  
**When** viewed on a common display,  
**Then** page background, elevated surfaces and product imagery remain visually distinguishable without excessive glow.

### AC-08 — Mobile quality
**Given** a viewport around 390px,  
**When** navigating the homepage,  
**Then** there is no horizontal overflow, product content is legible and CTAs remain obvious and usable.

### AC-09 — Accessibility
**Given** keyboard-only navigation and reduced-motion preference,  
**When** the page is used,  
**Then** interactive elements are reachable with visible focus and non-essential motion is reduced/disabled.

### AC-10 — Performance
**Given** the production candidate,  
**When** representative mobile Lighthouse verification is performed,  
**Then** targets in Section 15 are met or any variance is explicitly documented with underlying metrics and accepted before release.

### AC-11 — Privacy-safe evidence
**Given** all public product screenshots/assets,  
**When** reviewed before merge,  
**Then** they contain no unintended personal identifiers, secrets, admin-only data or sensitive private information.

### AC-12 — Architecture preservation
**Given** the implementation diff,  
**When** reviewed,  
**Then** no framework/build-system migration, backend, database, authentication, RLS or user-data behavior change has occurred unless the Spec was returned to review first.

### AC-13 — Inspecto honesty
**Given** Inspecto is visible,  
**When** the visitor sees it,  
**Then** it is clearly presented as paused/subordinate and cannot reasonably be interpreted as an active offering.

## 19. Applicable Controls

- [x] Feature Spec
- [x] Acceptance Criteria
- [x] Solo AI Adversarial Review
- [x] Brand/UX Review
- [x] Manual UX Validation
- [x] Performance Review
- [x] Accessibility Review
- [x] Regression Verification
- [x] Production Verification
- [x] Lightweight governance/source-of-truth review
- [ ] Architecture Review — conditional if architecture changes materially
- [ ] ADR — conditional if a new architecture is proposed
- [ ] Security Review — conditional if external scripts/forms/security headers change
- [ ] Privacy/LGPD Review — conditional if tracking/analytics/data collection is introduced
- [ ] Supply Chain Review — conditional if dependencies are added

## 20. Definition of Ready

- [x] Risk tier assigned
- [x] Applicable Controls declared
- [x] Problem/objective explicit
- [x] Scope/non-goals explicit
- [x] Product CTA destinations explicit
- [x] UX direction defined
- [x] Brand constraints defined
- [x] Responsive behavior defined
- [x] Accessibility requirements defined
- [x] Performance targets and verification conditions defined
- [x] Product-image privacy requirements defined
- [x] Acceptance criteria defined
- [x] Adversarial review completed
- [x] Blocking/Major findings resolved
- [x] Human owner approval recorded — owner supplied final CTA destinations and instructed continuation on 2026-07-24

**READY FOR IMPLEMENTATION.**

**No Ready → No Code.**