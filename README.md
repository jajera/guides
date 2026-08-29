# guides

Dated hub for articles and walkthroughs with categories linking to full GitHub Pages content.

Short intros live here. Full articles and walkthroughs stay on their source repo Pages sites (or external posts such as DEV.to).

Card hooks are shared with [johna.kiwi](https://johna.kiwi/) via the public catalogue JSON. Front matter `summary` is the day-to-day card copy (and the catalogue `hook` when this repo syncs membership). A matching catalogue `hook` still overlays `summary` at build time when present.

**Live site:** https://guides.johna.kiwi/

## Stack

- [Astro](https://astro.build/) (static)
- Markdown content collections
- Catalogue overlay (`CATALOGUE_URL` → `data/catalogue.json` fallback)
- Client search, filters, pagination
- Patina theme (shared with johna.kiwi): auto / light / dark
- Sitemap + RSS
- GitHub Pages + Actions
- Catalogue sync on `main` (OIDC → `johna-kiwi-catalogue` Lambda)

## Quick start

```bash
npm install
npm run dev
```

Production check (optional remote catalogue):

```bash
CATALOGUE_URL=https://johna-kiwi-content.s3.ap-southeast-2.amazonaws.com/catalogue.json npm run build
npm run preview
```

Without `CATALOGUE_URL`, the build uses the committed snapshot in `data/catalogue.json`.

## Content

Add entries under `src/content/guides/` as dated Markdown files. See [docs/walkthrough.md](docs/walkthrough.md) for front matter, categories, Pages setup, and troubleshooting.

Merging to `main` updates the johna.kiwi Labs membership list via [Catalogue sync](.github/workflows/catalogue-sync.yml) (no Terraform for list edits). Requires repository variable `CATALOGUE_SYNC_ROLE_ARN` from johna-kiwi-infra.

Preview the payload locally:

```bash
node scripts/export-registry.mjs > /tmp/payload.json
```

## Deploy

Push to `main`. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds and publishes `dist/`. The deploy build sets `CATALOGUE_URL` so hooks stay in sync with johna.kiwi when this site rebuilds. Catalogue sync runs in parallel on the same push.

Enable once: repo **Settings → Pages → Source: GitHub Actions**.
