# Accessibility Baseline Audit — Press Information Bureau

**Target:** https://www.pib.gov.in/  
**Audit date:** 9 November 2026  
**Reference standard:** WCAG 2.1 AA / GIGW 3.0  
**Evidence basis:** PIB's published Accessibility Statement: https://www.pib.gov.in/AccessibilityStatement.aspx?lang=2&reg=48

> Integrity note: The findings below separate limitations explicitly disclosed by PIB from a process gap. Lighthouse score and live keyboard observations are intentionally left blank until actually tested. Do not invent scores or screenshots.

## Findings register

| ID | Finding / evidence | Impact | Priority | Recommended remediation |
|---|---|---|---|---|
| A-01 | **Published limitation:** PIB says its page layout is not fully responsive on every page. Evidence: Accessibility Statement, “What this site provides”. | Users on small screens or zoomed layouts may need extra scrolling or may encounter layout problems. | High | Apply responsive layout rules to every page template; test at 320 CSS px, 200% zoom, portrait/landscape, and common breakpoints. |
| A-02 | **Published limitation:** PIB says some pages are served in a separate mobile version. Evidence: same statement. | Separate desktop/mobile implementations can become inconsistent and create navigation or content parity gaps. | Medium | Consolidate on one responsive codebase where feasible; otherwise maintain feature parity and automated parity tests. |
| A-03 | **Published limitation:** Urdu right-to-left layout currently applies to article text rather than the whole page. Evidence: same statement. | Urdu users may encounter mixed-direction navigation, controls, or page structure. | High | Apply `dir="rtl"` at the correct page/container level; use logical CSS properties; test menus, forms, breadcrumbs, and mixed-language content. |
| A-04 | **Published limitation / third-party dependency:** Embedded X, Facebook, and YouTube content is supplied by those platforms and is outside PIB's control. Evidence: same statement. | Embedded content may not expose consistent keyboard or screen-reader behavior. | Medium | Provide accessible titles for embeds, captions/transcripts where applicable, a descriptive link to the source, and an equivalent text summary. Re-test after provider changes. |
| A-05 | **Assurance gap:** PIB states its statement is based on an internal review and has not yet been validated by an external audit or formal user test with people with disabilities. Evidence: same statement, “How this statement was prepared”. | Some barriers may remain undetected by internal checks alone. | Medium | Commission an independent WCAG 2.1 AA audit and include disabled users in usability testing; publish remediation status. |

## Lighthouse results (fill after running)
- Date/time:
- Page URL:
- Device mode: Mobile / Desktop
- Performance:
- Accessibility:
- Best Practices:
- SEO:
- Report file: `docs/evidence/lighthouse-report.html`

## Keyboard-only test log (fill after running)
| Page / component | Keys used | Expected result | Actual result | Pass / Fail |
|---|---|---|---|---|
| Homepage navigation | Tab / Shift+Tab / Enter | Every link receives visible focus and activates | Pending live test | Pending |
| Search control | Tab / Enter / typing | Search can be reached and submitted without a mouse | Pending live test | Pending |
| Language / Urdu view | Tab / Enter | Focus order and direction remain understandable | Pending live test | Pending |
| Embedded media | Tab / Enter / Esc | Embed can be reached and exited without trapping focus | Pending live test | Pending |

## Evidence checklist
- [ ] Lighthouse HTML report saved in `docs/evidence/`
- [ ] Screenshot of Lighthouse accessibility summary
- [ ] Screenshot(s) of each reproduced issue
- [ ] Keyboard test log completed with observed outcomes
- [ ] Re-check findings against current live site before final submission

## Reference
PIB Accessibility Statement: https://www.pib.gov.in/AccessibilityStatement.aspx?lang=2&reg=48  
GIGW 3.0: https://guidelines.india.gov.in/
