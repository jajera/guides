# Guides hub walkthrough

Operator guide for the **guides** Astro hub: local run, adding entries, and GitHub Pages.

## Purpose

Dated hub for articles and walkthroughs. Each Markdown entry is a short intro with metadata; full content stays on the source repo’s GitHub Pages site or an external article URL.

Live URL (after Pages is enabled): https://jajera.github.io/guides/

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm

## Local run

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321/guides/`).

To verify the production base path:

```bash
npm run build
npm run preview
```

Preview serves under `/guides/`.

## Add a new entry

1. Create `src/content/guides/YYYY-MM-DD-slug.md`.
2. Fill required front matter.
3. Add outbound URLs and a short body.
4. Set `draft: false` when ready to publish.
5. Commit and push to `main`.

### Front matter template

```yaml
---
title: Your guide title
date: 2026-07-11
type: walkthrough # or article
category: networking # see categories below
tags: [example, tag]
summary: One or two sentences for cards and SEO.
walkthrough_url: https://jajera.github.io/your-walkthrough/
demo_url: https://github.com/jajera/your-demo
# article_url: https://dev.to/jajera/your-article
draft: false
---
Short intro in Markdown. Link out via the CTA buttons from front matter URLs.
```

### Required fields

| Field      | Notes                      |
| ---------- | -------------------------- |
| `title`    | Display title              |
| `date`     | ISO date (`YYYY-MM-DD`)    |
| `type`     | `walkthrough` or `article` |
| `category` | One of the enums below     |
| `summary`  | Card / meta description    |

### Optional fields

`tags`, `walkthrough_url`, `demo_url`, `article_url`, `draft` (default `false`)

Published entries should usually include at least one of `walkthrough_url` or `article_url`.

## Categories

`networking`, `dns`, `serverless`, `storage`, `containers`, `iot`, `tooling`, `general`

## Types

- `walkthrough` — hands-on guides (home Type filter)
- `article` — talks, slides, and write-ups (home Type filter)

## Site map

| Path                             | Purpose                                          |
| -------------------------------- | ------------------------------------------------ |
| `/guides/`                       | Home — search, type/category filters, pagination |
| `/guides/[slug]/`                | Entry detail                                     |
| `/guides/categories/`            | Category index                                   |
| `/guides/categories/[category]/` | Entries in a category                            |
| `/guides/rss.xml`                | RSS feed                                         |
| `/guides/sitemap-index.xml`      | Sitemap                                          |

## Home UX notes

- Search matches title, summary, type, category, and tags (`Ctrl/Cmd+K` focuses the box)
- Filters and search reset pagination to page 1
- Page size is 12; URL keeps `?q=` and `?page=`
- Theme toggle uses `localStorage` key `starlight-theme` (same as jajera Starlight walkthroughs)

## GitHub Pages

1. Push this repo to `jajera/guides` (public).
2. **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` (or run **Deploy to GitHub Pages** manually).
4. Site: https://jajera.github.io/guides/

The workflow builds with `npm ci` and deploys `dist/`. `public/.nojekyll` is copied into the output so Jekyll does not process the site.

## Troubleshooting

| Symptom                                   | Check                                                                                              |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Build fails on front matter               | Required fields / enum values; Zod schema in `src/content/config.ts`                               |
| Draft still visible                       | Confirm `draft: true` and that you are not looking at a stale preview                              |
| Assets 404 under Pages                    | `astro.config.mjs` must keep `base: '/guides/'`                                                    |
| Card links look like `/guides/guides/...` | Detail route must be `src/pages/[slug].astro`, not `pages/guides/[slug].astro`                     |
| Search does not hide cards                | Ensure `.entry-list > li[hidden] { display: none; }` (flex overrides `hidden` otherwise)           |
| Blank Pages deploy                        | Pages source must be **GitHub Actions**, not “Deploy from a branch”                                |
| `npm ci` fails in CI                      | Commit an up-to-date `package-lock.json` after `npm install`                                       |
| `astro: Permission denied`                | Reinstall deps (`rm -rf node_modules && npm install`); do not copy `node_modules` between machines |

## Intentionally excluded (v1)

- Auto-import from GitHub API / gitprofile
- CMS sync
- Pagefind / server search
- Dedicated `/types/*` pages
- Custom domain setup (optional later)
- S3 / CloudFront hosting

## Smoke checklist

- [ ] `npm run build` exits 0
- [ ] Home lists published entries only (no drafts)
- [ ] Search, type/category filters, and pagination work together
- [ ] Theme toggle switches light/dark and persists
- [ ] One category page renders
- [ ] Entry CTAs open walkthrough / article / demo URLs
- [ ] `/guides/rss.xml` and sitemap exist in `dist/`
- [ ] `.nojekyll` present under `dist/` after build
- [ ] `public/favicon.svg` is small (not a megabyte-scale export)
