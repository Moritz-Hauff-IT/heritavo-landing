# Heritavo Landing

Marketing-Seite für Heritavo. Next.js 16 + next-intl + Tailwind 4.

## Routes

- `/de`, `/en`, `/fr`, `/it` — Landing-Page
- `/de/security`, etc. — Feature-/Info-Seiten
- `/de/blog`, `/de/blog/[slug]` — Blog
- `/de/imprint`, `/de/privacy`, `/de/terms` — Legal

## Deploy

`git push origin main` → GitHub Actions baut `ghcr.io/moritz-hauff-it/heritavo-landing:sha-<short>` → bump `values-prod.yaml` → ArgoCD sync.
