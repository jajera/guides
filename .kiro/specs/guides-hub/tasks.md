# Implementation Plan: Guides Hub

## Overview

Build a fully set up Astro GitHub Pages hub for AWS walkthroughs and articles. Content is manual Markdown. Ship working layouts, home filters/search/pagination, category indexes, theme toggle, SEO/RSS/sitemap, Pages workflow, and docs.

## Tasks

- [x] 1. Scaffold Astro project
  - [x] 1.1 Initialize Astro + TypeScript in repo root
    - Create `package.json` with `dev`, `build`, `preview`
    - Create `astro.config.mjs` with `site: https://jajera.github.io` and `base: /guides/`
    - Create `tsconfig.json` and `.gitignore`
    - Add `public/.nojekyll`
    - _Requirements: 1.1, 1.2, 1.4, 9.1, 9.2_

- [x] 2. Content collection
  - [x] 2.1 Define `src/content/config.ts` schema for guides
    - Required: title, date, type, category, summary
    - Optional: tags, walkthrough_url, demo_url, article_url, draft
    - Enums for type and category per design
    - _Requirements: 2.1–2.6_

- [x] 3. Layout and styles
  - [x] 3.1 Implement `BaseLayout.astro` and `global.css`
    - Brand header, search, theme toggle, footer, CSS variables, light/dark
    - Starlight-inspired palette; responsive two-column grid
    - _Requirements: 7.1–7.5_

- [x] 4. Components
  - [x] 4.1 Implement `EntryCard`, `EntryMeta`, `CtaLinks`, `ThemeToggle`
    - _Requirements: 3.2, 4.3, 4.4, 7.1_

- [x] 5. Pages
  - [x] 5.1 Home page with latest listing, filters, search, pagination
    - _Requirements: 3.1–3.6_
  - [x] 5.2 Entry detail pages `[slug].astro` (URLs `/guides/<slug>/`)
    - _Requirements: 4.1–4.4_
  - [x] 5.3 Category index and `[category]` pages
    - _Requirements: 5.1, 5.2, 5.4_
  - [x] 5.4 Type browsing via home filters (no dedicated `/types/*` pages)
    - _Requirements: 5.3_

- [x] 6. Content
  - [x] 6.1 Add published Markdown entries for live walkthroughs/articles
    - Cover walkthrough + article types and multiple categories
    - Include DEV.to articles where relevant
    - _Requirements: 6.2_

- [x] 7. SEO and feeds
  - [x] 7.1 Canonical / Open Graph / Twitter meta + `public/og.png`
  - [x] 7.2 `@astrojs/sitemap` and `@astrojs/rss`
    - _Requirements: 1.6, 7.5_

- [x] 8. Checkpoint — local build
  - Run `npm install` and `npm run build`
  - Confirm pages render under `/guides/` base via preview

- [x] 9. GitHub Pages workflow
  - [x] 9.1 Add `.github/workflows/deploy.yml`
    - Build and deploy `dist/` with official Pages actions
    - _Requirements: 1.3, 1.5_

- [x] 10. Documentation
  - [x] 10.1 Write `docs/walkthrough.md` from walkthrough spec
  - [x] 10.2 Write `README.md`
    - _Requirements: 6.1, 6.3, 8.1–8.5, 9.3_

- [x] 11. Final checkpoint
  - `npm run build` succeeds
  - Draft entries excluded
  - `.nojekyll` present in output
  - Favicon assets small and linked
  - Docs and Kiro specs match implemented paths
  - _Requirements: 1, 2.6, 8, 9_

## Notes

- Content stays manual; do not build GitHub API sync in v1
- Theme preference key is `starlight-theme` (shared with jajera Starlight walkthroughs on github.io)
- Entry detail path must not double the base (`/guides/guides/...` is incorrect)
- Prefer completing a shippable site over extra features

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "2.1"] },
    { "id": 1, "tasks": ["3.1", "4.1"] },
    { "id": 2, "tasks": ["5.1", "5.2", "5.3", "5.4", "6.1", "7.1", "7.2"] },
    { "id": 3, "tasks": ["8"] },
    { "id": 4, "tasks": ["9.1", "10.1", "10.2"] },
    { "id": 5, "tasks": ["11"] }
  ]
}
```
