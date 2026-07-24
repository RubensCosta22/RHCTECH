# RHCTECH-WEB-001 — RHC Tech Corporate Website Redesign

> RHC Tech Spec-Driven Development Standard v1.3

## 1. Identification

- **Spec ID:** RHCTECH-WEB-001
- **Product:** RHC Tech Corporate Website
- **Version:** 1.0
- **Status:** In Review
- **Owner:** RubensCosta22
- **Required Approvers:** Human owner
- **Risk Tier:** R2 — Medium
- **SDD Process Budget Target:** one focused work session
- **Created:** 2026-07-24
- **Central Standard:** `RubensCosta22/RHC-Tech-Engineering`

## 2. Problem

The current rhctech.com.br homepage has a coherent dark visual identity, but it does not present RHC Tech products with the clarity, commercial credibility, product evidence, visual depth or differentiated personality expected from a premium software company.

Observed problems:

- product screenshots are visually secondary and undersized;
- large empty or low-information frames create the impression of unfinished content;
- RHC Training and H&NTrip use nearly identical editorial compositions, differentiated mainly by accent color;
- labels such as `Produto ativo` communicate internal status rather than user value;
- product sections behave more like brand-book slides than convincing product demonstrations;
- dark surfaces and dark screenshots merge, reducing hierarchy and perceived polish;
- the copy explains categories but does not strongly communicate differentiation, benefit or reason to try the products;
- the page does not fully demonstrate that RHC Tech builds real, usable, production-grade software.

## 3. Objective

Redesign the corporate homepage so that a first-time visitor can quickly understand:

1. what RHC Tech is;
2. what problems its products solve;
3. why each product is distinct;
4. that the products are real and working;
5. what action to take next.

The redesigned page must feel like a premium software company website rather than a portfolio, design exercise or AI-generated landing-page template.

## 4. Non-Goals

- Redesigning the RHC Training application itself.
- Redesigning the H&NTrip application itself.
- Changing authentication, databases, APIs, Supabase, RLS or user data.
- Adding e-commerce, subscriptions or checkout.
- Re-activating Inspecto.
- Introducing a JS framework solely for the redesign.

## 5. Users / Audiences

### US-01 — Prospective product user
As a visitor, I want to understand each product in seconds so I can decide whether it is relevant to me.

### US-02 — Prospective customer/partner
As someone evaluating RHC Tech, I want credible product evidence and engineering signals so I can trust the company.

### US-03 — Existing user
As an existing user, I want a clear route from the corporate site to the relevant product.

## 6. Functional Requirements

### FR-01 — Corporate positioning
The hero must state clearly that RHC Tech builds its own digital products and must communicate a distinct value proposition without generic AI/agency language.

### FR-02 — Product-first structure
RHC Training and H&NTrip must each have a substantial product showcase section with real UI evidence as a primary visual element.

### FR-03 — Distinct product personalities
The two active products must share RHC Tech brand foundations while using different composition, rhythm and product storytelling. Accent color alone is not sufficient differentiation.

### FR-04 — Product CTAs
Each active product section must provide a clear action such as `Conhecer`, `Explorar` or equivalent. Internal-status wording such as `Produto ativo` must not be the primary CTA.

### FR-05 — Inspecto state
Inspecto may remain visible as a paused product, but it must be visually subordinate to active products and must not suggest current availability.

### FR-06 — Engineering credibility
The site must include a restrained section that communicates RHC Tech engineering principles: quality, security, Spec-Driven Development, reliability and evidence-based release discipline. It must not read like internal process documentation.

### FR-07 — Contact / company path
The site must retain a clear company/contact path.

## 7. Content / Messaging Requirements

### Corporate tone
- precise;
- confident;
- restrained;
- product-led;
- no inflated startup clichés;
- no fake metrics;
- no unsupported customer counts, revenue claims, testimonials or market claims.

### RHC Training
The messaging should emphasize training execution, progression, history and reduced interaction cost during workouts.

Candidate direction:

**Headline:** `Treine. Registre. Evolua.`

Supporting direction: the product should accompany progression without becoming a distraction during training.

### H&NTrip
`Planeje menos. Viaje mais.` may be retained if it continues to fit the redesigned composition.

Supporting messaging should emphasize itinerary, reservations, budget, documents and memories before, during and after travel.

### Claims
Any quantitative product metric shown must come from real product data or be explicitly presented as illustrative/demo data. No fabricated traction metrics are allowed.

## 8. UX/UI Specification

## 8.1 Information architecture

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

Exact ordering of manifesto and product sections may change during implementation only if the acceptance criteria remain satisfied.

## 8.2 Corporate hero

The hero must:

- avoid dashboard-like decorative data cards that imply unsupported operational metrics;
- establish RHC Tech as the parent brand;
- provide one dominant CTA toward products;
- use visual depth without excessive gradients, glowing blobs or AI-template motifs;
- work without relying on motion to communicate meaning.

## 8.3 RHC Training showcase

Must communicate energy, movement and progression.

Visual requirements:

- real product UI must occupy meaningful visual area;
- avoid a large empty frame around a small screenshot;
- composition may combine a primary desktop/mobile product view with cropped detail panels;
- any floating metric/detail card must represent a real product capability or clearly illustrative UI, not fake business traction;
- visual rhythm should feel more active than H&NTrip while remaining premium and restrained.

## 8.4 H&NTrip showcase

Must communicate exploration, planning and calm.

Visual requirements:

- real product UI must be clearly legible and prominent;
- supporting details may show itinerary, budget, reservations, dates, documents or travel progress;
- composition should feel spatial and calm rather than reusing the exact Training layout;
- product screenshot must not appear buried inside a large dark empty container.

## 8.5 Surfaces and depth

Dark mode remains acceptable, but hierarchy must distinguish:

- page background;
- elevated surfaces;
- product screenshots/content;
- borders and separators.

The page must not collapse visually into black-on-black-on-dark-grey.

## 8.6 Responsive behavior

Desktop and mobile must be intentionally composed rather than scaled copies.

Desktop:
- use the available horizontal space for product storytelling;
- screenshots/details may overlap or form asymmetric compositions where legibility is maintained.

Mobile:
- stack content in reading order;
- primary product UI remains legible;
- decorative supporting panels may be reduced/removed;
- no horizontal overflow;
- no text below 14px for meaningful content.

## 8.7 Motion

Motion is optional, not required for comprehension.

When used:
- subtle reveal/translation only;
- respect `prefers-reduced-motion`;
- no continuous distracting orbiting/pulsing effects;
- no animation that delays content access.

## 8.8 Accessibility

- semantic landmarks;
- visible keyboard focus;
- keyboard-operable navigation/mobile menu;
- meaningful alt text for product screenshots;
- WCAG AA contrast target;
- reduced-motion support;
- headings in logical hierarchy;
- buttons/links with descriptive labels.

## 9. Brand Rules

The redesign must preserve RHC Tech identity while avoiding generic AI-dashboard aesthetics.

Required:
- restrained dark foundation;
- RHC Tech typography/hierarchy;
- product accent system: Training lime, H&NTrip blue, Inspecto orange only where relevant;
- strong whitespace and editorial confidence;
- product UI as evidence, not decoration.

Avoid:
- excessive glassmorphism;
- gradient blobs;
- random glow effects;
- symmetrical feature-card grids used merely to fill space;
- oversized empty mockup frames;
- fake terminal/code windows;
- decorative charts without decision value;
- generic phrases such as `inovação que transforma o futuro`.

## 10. Architecture Impact

Current repository is a static site using HTML, CSS and vanilla JavaScript. The redesign should preserve that architecture unless implementation discovers a concrete requirement that justifies change.

Expected affected areas:
- `index.html`;
- existing CSS architecture or current inline CSS extraction if warranted;
- `assets/` product imagery;
- `app.js` only where interaction/motion changes require it;
- metadata/SEO if content structure changes.

No backend or database impact is expected.

## 11. Security & Privacy

Expected risk is low because the redesign is presentation-focused.

Must preserve:
- current security headers/deployment behavior unless explicitly reviewed;
- no secrets embedded in frontend source;
- no new third-party script without supply-chain/privacy review;
- contact behavior must not expose credentials or private data.

## 12. Observability / Failure Handling

Static presentation failures must not result in blank core content.

- product meaning must remain understandable if images fail to load;
- essential navigation and CTAs must work without animation APIs;
- JavaScript errors must not block core page content;
- any external contact integration failure must have a clear fallback.

## 13. Performance & Reliability

Targets for production verification:

- Lighthouse Performance target: >= 90 on representative mobile run, unless documented network/tool variance explains a lower result;
- Accessibility target: >= 95;
- Best Practices target: >= 95;
- SEO target: >= 95;
- avoid unnecessary JS dependencies;
- product images must use appropriate dimensions/compression;
- no autoplay video in initial implementation unless separately justified by performance evidence;
- layout should avoid significant CLS from media.

## 14. SEO

- retain/update canonical metadata;
- meaningful page title and description;
- Open Graph image should represent RHC Tech, not an obsolete single-product identity;
- structured heading hierarchy;
- sitemap/robots must remain valid.

## 15. Test Strategy

Required for this R2 change:

- HTML/JS sanity validation;
- navigation and CTA checks;
- responsive manual validation at representative mobile/tablet/desktop widths;
- keyboard navigation review;
- reduced-motion check;
- image failure/fallback sanity check;
- Lighthouse evidence;
- regression check for legal/contact/navigation links;
- visual review against Brand System and this Spec.

## 16. Acceptance Criteria

### AC-01 — Product understanding
**Given** a first-time visitor on desktop or mobile,  
**When** they scan the hero and active product sections,  
**Then** they can identify what RHC Tech is and distinguish the purpose of RHC Training and H&NTrip without opening another page.

### AC-02 — Product evidence
**Given** either active product showcase,  
**When** the section is visible,  
**Then** real product UI is a primary visual element and is not presented as a small screenshot inside a mostly empty frame.

### AC-03 — Distinct composition
**Given** the RHC Training and H&NTrip sections,  
**When** compared side by side,  
**Then** they do not use the exact same composition with only color/text changes.

### AC-04 — Commercial CTA
**Given** an active product section,  
**When** the user wants to continue,  
**Then** a clear product-oriented CTA exists and `Produto ativo` is not used as the primary action.

### AC-05 — No fake traction
**Given** any metrics shown on the corporate site,  
**When** reviewed,  
**Then** they are sourced from real product data or unmistakably presented as interface/demo content, never fabricated company traction.

### AC-06 — Dark hierarchy
**Given** the page in dark mode,  
**When** viewed on a calibrated/common display,  
**Then** background, surfaces and product imagery remain visually distinguishable without excessive glow effects.

### AC-07 — Mobile quality
**Given** a viewport around 390px width,  
**When** navigating the full homepage,  
**Then** no horizontal overflow exists, product content remains legible, CTAs remain accessible and the layout feels intentionally composed for mobile.

### AC-08 — Accessibility
**Given** keyboard-only navigation and reduced-motion preference,  
**When** the page is used,  
**Then** all interactive elements are reachable with visible focus and non-essential motion is reduced/disabled.

### AC-09 — Performance
**Given** the production candidate,  
**When** Lighthouse is run under a representative mobile profile,  
**Then** the page meets the targets in Section 13 or any variance is documented and explicitly accepted before release.

### AC-10 — Runtime preservation
**Given** this redesign,  
**When** the implementation diff is reviewed,  
**Then** no product backend, database, authentication, RLS or user-data behavior is changed.

## 17. Applicable Controls

- [x] Feature Spec
- [x] Acceptance Criteria
- [x] Solo AI Adversarial Review
- [x] Brand/UX Review
- [x] Manual UX Validation
- [x] Performance Review
- [x] Accessibility Review
- [x] Regression Verification
- [x] Production Verification
- [ ] Architecture Review — conditional if site architecture changes materially
- [ ] ADR — conditional if a new framework/build architecture is introduced
- [ ] Security Review — conditional if external scripts/forms/security headers change
- [ ] Privacy/LGPD Review — conditional if new tracking/analytics/data collection is added
- [ ] Supply Chain Review — conditional if dependencies are added

## 18. Definition of Ready

- [x] Risk tier assigned
- [x] Problem and objective explicit
- [x] Scope/non-goals explicit
- [x] UX direction defined
- [x] Brand constraints defined
- [x] Responsive behavior defined
- [x] Accessibility requirements defined
- [x] Performance targets defined
- [x] Acceptance criteria defined
- [ ] Adversarial review completed
- [ ] Blocking/Major findings resolved
- [ ] Human owner approval recorded

**No Ready → No Code.**