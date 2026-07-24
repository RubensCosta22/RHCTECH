# RHCTECH — Engineering Governance

This repository follows the **RHC Tech Spec-Driven Development Standard v1.3**.

## Corporate authority

The normative source of truth is:

`RubensCosta22/RHC-Tech-Engineering`

The central repository owns the approved SDD Standard, operational playbook, risk-tier applicability matrix and reusable engineering templates.

Product-local documentation exists only to execute product-specific work. If a local artifact conflicts with the central Standard, **the central Standard wins**.

## Mandatory operating rules

- **No Risk Tier → No Ready.**
- **No Applicable Controls → No Ready.**
- **No Ready → No Code.**
- **No required independent review → No Approved.**
- **No evidence → No Done.**
- **No passed mandatory gates → No Release.**

## Current material work

- `RHCTECH-WEB-001` — RHC Tech Corporate Website Redesign — R2

The corporate website is an existing/legacy product surface. Adoption follows the current Legacy Touch Rule: changed behavior follows current SDD controls, while unrelated historical debt remains outside scope unless it exposes critical security/data risk.