# guides

Dated hub for articles and walkthroughs with categories linking to full GitHub Pages content.

Short intros live here. Full articles and walkthroughs stay on their source repo Pages sites (or external posts such as DEV.to).

**Live site:** https://guides.johna.kiwi/

## Stack

- [Astro](https://astro.build/) (static)
- Markdown content collections
- Client search, filters, pagination
- Light/dark theme toggle
- Sitemap + RSS
- GitHub Pages + Actions

## Quick start

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

## Content

Add entries under `src/content/guides/` as dated Markdown files. See [docs/walkthrough.md](docs/walkthrough.md) for front matter, categories, Pages setup, and troubleshooting.

## Deploy

Push to `main`. The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds and publishes `dist/`.

Enable once: repo **Settings → Pages → Source: GitHub Actions**.
