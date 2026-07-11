# Requirements Document

## Introduction

This feature implements **guides**, a GitHub Pages hub for **AWS articles and walkthroughs**.

The hub is an **intro and index only**. Full walkthrough content stays on each source repo Pages site (or external article URL such as DEV.to). Hub entries are short dated posts with category, tags, summary, and outbound links.

**Stack:** Astro static site, Markdown content collections, GitHub Actions deploy to GitHub Pages. Client-side search/filters/pagination; Starlight-style theme toggle; sitemap + RSS; Open Graph image.

**Content maintenance is manual:** authors add or edit Markdown files under `src/content/`. No auto-discovery of GitHub repos is required for v1.

## Glossary

- **Hub**: The `guides` GitHub Pages site (`https://jajera.github.io/guides/`)
- **Entry**: One Markdown document in the content collection representing a walkthrough or article intro
- **Source_Guide**: Full walkthrough or article hosted elsewhere (repo Pages URL or external article)
- **Category**: Primary browse facet (one per Entry), e.g. networking, dns, serverless
- **Type**: `walkthrough` or `article`
- **Tags**: Secondary cross-cutting labels (multi-account, terraform, privatelink, etc.)
- **Walkthrough_Doc**: Operator guide at `docs/walkthrough.md` for local run, content authoring, and Pages deploy

## Requirements

### Requirement 1: Astro Site Scaffold

**User Story:** As a deployer, I want a complete Astro project ready for GitHub Pages, so the hub is publishable without further framework setup.

#### Acceptance Criteria

1. THE repository SHALL be an Astro project with TypeScript enabled
2. THE Astro config SHALL set `site` to `https://jajera.github.io` and `base` to `/guides/`
3. THE repository SHALL include a GitHub Actions workflow that builds and deploys to GitHub Pages
4. THE build output SHALL include a `.nojekyll` file so GitHub Pages does not process `_astro` assets with Jekyll
5. WHEN `npm run build` completes, THE site SHALL produce static HTML under `dist/`
6. THE site SHALL emit a sitemap and an RSS feed under the `/guides/` base path

### Requirement 2: Content Collection Schema

**User Story:** As an author, I want a typed Markdown content schema, so every entry has date, category, type, and links.

#### Acceptance Criteria

1. THE content collection SHALL live under `src/content/guides/`
2. EACH Entry SHALL require front matter fields: `title`, `date`, `type`, `category`, `summary`
3. EACH Entry SHALL allow optional fields: `tags`, `walkthrough_url`, `demo_url`, `article_url`, `draft`
4. `type` SHALL be one of `walkthrough` or `article`
5. `category` SHALL be one of a documented fixed set defined in the design
6. Entries with `draft: true` SHALL be excluded from production listings and RSS

### Requirement 3: Home Page

**User Story:** As a visitor, I want a reverse-chronological home page, so I see the latest guides first.

#### Acceptance Criteria

1. THE home page SHALL list published Entries sorted by `date` descending
2. EACH card SHALL show title, date, type, category, and summary
3. EACH card SHALL link to the Entry detail page on the Hub (`/[slug]/` under the site base)
4. THE home page SHALL provide Type and Category filter controls
5. THE home page SHALL provide client-side search across title, summary, type, category, and tags
6. THE home page SHALL paginate results (default page size 12) and keep filters/search in sync with pagination

### Requirement 4: Entry Detail Pages

**User Story:** As a visitor, I want a short intro page per entry, so I can decide whether to open the full source guide.

#### Acceptance Criteria

1. THE Hub SHALL generate one detail page per published Entry at `/[slug]/`
2. THE detail page SHALL render the Markdown body
3. THE detail page SHALL show primary CTA links when URLs are present (`walkthrough_url`, `article_url`, `demo_url`)
4. THE detail page SHALL display category, type, tags, and date

### Requirement 5: Category Indexes

**User Story:** As a visitor, I want to browse by category, so I can find related guides quickly.

#### Acceptance Criteria

1. THE Hub SHALL provide a category index page listing all categories with counts
2. THE Hub SHALL provide one page per category listing Entries in that category
3. Type browsing SHALL be available via home-page filters (dedicated `/types/*` pages are not required)
4. Empty categories MAY still appear on the index with a zero count

### Requirement 6: Manual Content Authoring

**User Story:** As an author, I want a simple Markdown workflow, so I can add guides without automation.

#### Acceptance Criteria

1. THE Walkthrough_Doc SHALL document how to add a new Entry Markdown file
2. THE repository SHALL include real published Entries covering both types and multiple categories
3. THE repository SHALL include a content template or example front matter block in docs
4. THE Hub SHALL NOT require scripts that scrape GitHub APIs to populate content in v1

### Requirement 7: Visual Design Baseline

**User Story:** As a visitor, I want a clean readable site, so the hub feels intentional rather than unfinished.

#### Acceptance Criteria

1. THE site SHALL use a shared layout with site brand, search, theme toggle, and footer
2. THE site SHALL be readable on mobile and desktop
3. THE site SHALL use CSS variables for colors and typography, with light and dark themes
4. THE design SHALL follow a Starlight-inspired dark palette with orange brand accent (not purple-on-white defaults)
5. THE site SHALL include favicon assets and a default Open Graph image

### Requirement 8: Documentation and README

**User Story:** As a presenter or future contributor, I want clear docs, so I can run and publish the hub.

#### Acceptance Criteria

1. THE README SHALL state the hub purpose, stack, and GitHub Pages URL pattern
2. THE README SHALL link to `docs/walkthrough.md`
3. THE Walkthrough_Doc SHALL cover local `npm install` / `npm run dev` / `npm run build`
4. THE Walkthrough_Doc SHALL cover enabling GitHub Pages via Actions
5. THE Walkthrough_Doc SHALL cover adding a new Entry and republishing

### Requirement 9: Repository Hygiene

**User Story:** As a maintainer, I want standard project files, so the repo is ready to push.

#### Acceptance Criteria

1. THE repository SHALL include `.gitignore` for Node and Astro build artifacts
2. THE repository SHALL include `package.json` with `dev`, `build`, and `preview` scripts
3. THE repository description target SHALL be: `Dated hub for AWS articles and walkthroughs with categories linking to full GitHub Pages content`
