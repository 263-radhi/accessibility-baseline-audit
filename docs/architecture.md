# Architecture

## Boundary overview

```text
Browser
  |
  v
client/ (React + Vite, port 5173)
  |
  | HTTP / JSON
  v
server/ (Express API, port 4000)
  |
  v
Future data layer (not configured in this milestone)
```

## Folder responsibilities
- `client/src/`: page components, styles, and browser-side API calls.
- `server/src/`: routes and server startup.
- `docs/`: audit evidence, architecture decisions, and setup instructions.
- `tests/`: automated API checks and future accessibility tests.

## First vertical feature slice
The starter slice is a health-check endpoint:
1. Client requests `GET /api/health`.
2. Express responds with JSON `{ "status": "ok" }`.
3. Client renders the returned status.
4. Server test verifies the response.

## Local setup
Use Node.js 20 or newer. Install dependencies independently in `client/` and `server/`. Run the API and client in separate terminals as described in the root README.

## Maintainability rules
- Keep UI components separate from API routes.
- Keep environment-specific values in environment variables (never commit secrets).
- Add tests alongside each new feature.
- Use semantic HTML, visible focus styles, and accessible labels by default.
