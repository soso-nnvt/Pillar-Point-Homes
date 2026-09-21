# Pillar Point Homes

Company/marketing + listings portal for Pillar Point Homes. React + Vite + TypeScript with charts-ready UI (recharts), routing, and SEO meta.

## Stack
- React 19, React Router 7, TypeScript, Vite 6
- Tailwind CSS 4, lucide-react, motion, recharts
- react-helmet-async for SEO (where wired)
- Express backend shim for local/dev

## Run locally
1. `npm install`
2. `cp .env.example .env` if you need runtime env (defaults are placeholders)
3. `npm run dev` â€” Vite on port 3000
4. `npm run build` / `npm run preview`
5. `npm run lint` (`tsc --noEmit`)

## Deploy
- `netlify.toml` present â€” Netlify-ready.
- `.env*` gitignored except `.env.example`. No secrets committed.

## Repo
- Default branch: `main`
- Author: Abdulsobur Obe â€” https://www.linkedin.com/in/abdulsobur-obe-463a6729b/
