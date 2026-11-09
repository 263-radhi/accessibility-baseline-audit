# Accessibility Baseline & Repository Architecture Audit

A starter full-stack repository created for the RabTech Academy milestone.

## Audit target
Press Information Bureau (PIB), Government of India — https://www.pib.gov.in/

The audit notes are based on PIB's published Accessibility Statement, reviewed on 9 November 2026. Items explicitly described by PIB are marked **Published limitation**. The report does not pretend that Lighthouse or a hands-on keyboard audit has already been run; those measurements must be captured on the machine used for final verification.

## Repository structure
- `client/` — React + Vite user interface
- `server/` — Express API
- `docs/` — accessibility audit and architecture notes
- `tests/` — starter automated checks

## Requirements
- Node.js 20+
- npm

## Run locally
Open two terminals:

### Terminal 1 — API
```bash
cd server
npm install
npm run dev
```
API runs at http://localhost:4000

### Terminal 2 — client
```bash
cd client
npm install
npm run dev
```
Client runs at http://localhost:5173

## Run checks
```bash
cd client && npm install && npm run build
cd ../server && npm install && npm test
```

## Complete the live audit before submission
1. Open https://www.pib.gov.in/ in Chrome.
2. Run Lighthouse: DevTools → Lighthouse → Accessibility → Analyze page.
3. Save the report using **Save report** and add it under `docs/evidence/`.
4. Test keyboard-only navigation with `Tab`, `Shift+Tab`, `Enter`, `Space`, and `Esc`. Record the exact page, control, and observed result.
5. Add screenshots to `docs/evidence/` and update `docs/accessibility-audit.md` with the actual measured Lighthouse score and manual results.
6. Do not mark a suspected issue as confirmed unless you reproduce it.

## Submission
Create a **public** GitHub repository, upload this folder's contents, and submit the repository URL. The ZIP itself is not a GitHub repository URL.
