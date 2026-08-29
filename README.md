# guides

Dated hub for articles and walkthroughs with categories linking to full GitHub Pages content.

Short intros live here. Full articles and walkthroughs stay on their source repo Pages sites (or external posts such as DEV.to).

Card hooks are shared with [johna.kiwi](https://johna.kiwi/) via the public catalogue JSON produced by the johna-kiwi-infra Lambda. Front matter `summary` is the fallback; a matching catalogue `hook` wins at build time.

**Live site:** https://guides.johna.kiwi/

## Stack

- [Astro](https://astro.build/) (static)
- Markdown content collections
- Catalogue overlay (`CATALOGUE_URL` → `data/catalogue.json` fallback)
- Client search, filters, pagination
- Patina theme (shared with johna.kiwi): auto / light / dark
- Sitemap + RSS
- GitHub Pages + Actions

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

Shared card copy (hooks) is authored in `platformfuzz/johna-kiwi-infra` `catalogue.yaml` and published to S3. Keep the guide `slug` aligned with the catalogue item.

## Deploy

Push to `main`. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds and publishes `dist/`. The deploy build sets `CATALOGUE_URL` so hooks stay in sync with johna.kiwi when this site rebuilds.

Enable once: repo **Settings → Pages → Source: GitHub Actions**.
