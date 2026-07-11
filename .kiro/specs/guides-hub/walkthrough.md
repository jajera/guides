# Walkthrough Specification

Spec-level operator guide. Source for `docs/walkthrough.md` per `.config.kiro`.

## Purpose

Fully set up Astro hub for AWS articles and walkthroughs. Manual Markdown content. GitHub Pages hosting. Home search/filters/pagination and light/dark theme.

## Local run

1. `npm install`
2. `npm run dev`
3. Open local URL shown by Astro (usually `http://localhost:4321/guides/`)
4. `npm run build` then `npm run preview` to verify `/guides/` base path

## Add a new entry

1. Create `src/content/guides/YYYY-MM-DD-slug.md`
2. Fill required front matter: title, date, type, category, summary
3. Add `walkthrough_url` and/or `article_url` and optional `demo_url`
4. Write short intro body
5. Set `draft: false` when ready
6. Commit and push to `main` to publish

## Categories

networking, dns, serverless, storage, containers, iot, tooling, general

## Types

walkthrough, article — filtered on the home page (no dedicated `/types/*` routes)

## Site features to mention in docs

- Search + Type/Category filters on home
- Pagination (12 per page; `?page=` / `?q=`)
- Theme toggle (persists as `starlight-theme`)
- RSS `/guides/rss.xml`, sitemap `/guides/sitemap-index.xml`
- Entry detail at `/guides/<slug>/`

## GitHub Pages

1. Repo Settings → Pages → Source: GitHub Actions
2. Push to `main` triggers deploy workflow
3. Site URL: `https://jajera.github.io/guides/`

## Intentionally excluded

Document in output: auto GitHub sync, CMS, Pagefind, custom domain setup details beyond mention, S3/CloudFront, dedicated type index pages

## Output

Full commands, front matter template, troubleshooting, and sample checklist live in `docs/walkthrough.md`.
