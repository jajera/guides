#!/usr/bin/env node
/**
 * Validate guide frontmatter and data/catalogue.json consistency.
 * Usage: node scripts/check-registry.mjs
 */

import { readFile } from "node:fs/promises";
import {
  ALLOWED_TYPES,
  CATALOGUE_PATH,
  JOHNA_KIWI_HOST,
  REQUIRED_FIELDS,
  loadGuides,
  normalizeUrl,
  pickUrl,
} from "./lib/guides-md.mjs";

const errors = [];

function fail(msg) {
  errors.push(msg);
}

async function main() {
  const guides = await loadGuides();
  const published = [];

  for (const { slug, file, fm } of guides) {
    if (!fm) {
      fail(`${file}: missing or invalid frontmatter`);
      continue;
    }

    for (const key of REQUIRED_FIELDS) {
      const value = fm[key];
      if (value === undefined || value === null || String(value).trim() === "") {
        fail(`${slug}: missing required field '${key}'`);
      }
    }

    const type = String(fm.type || "").trim();
    if (type && !ALLOWED_TYPES.has(type)) {
      fail(`${slug}: type must be walkthrough|article (got '${type}')`);
    }

    if (type === "walkthrough") {
      const url = String(fm.walkthrough_url || "").trim();
      if (!url) {
        fail(`${slug}: walkthrough requires walkthrough_url`);
      } else if (!JOHNA_KIWI_HOST.test(url)) {
        fail(
          `${slug}: walkthrough_url must be https://<host>.johna.kiwi/ (got '${url}')`,
        );
      }
    }

    if (type === "article") {
      const article = String(fm.article_url || "").trim();
      const video = String(fm.video_url || "").trim();
      if (!article && !video) {
        fail(`${slug}: article requires article_url or video_url`);
      }
    }

    if (fm.draft === true) {
      continue;
    }

    const url = pickUrl(fm);
    if (!url) {
      fail(`${slug}: published guide needs walkthrough_url, article_url, or video_url`);
      continue;
    }

    published.push({
      slug,
      title: String(fm.title || "").trim(),
      type,
      summary: String(fm.summary || "").trim(),
      url: normalizeUrl(url),
    });
  }

  let catalogue;
  try {
    catalogue = JSON.parse(await readFile(CATALOGUE_PATH, "utf8"));
  } catch (err) {
    fail(`cannot read data/catalogue.json: ${err.message}`);
    report();
    return;
  }

  if (!catalogue || !Array.isArray(catalogue.items)) {
    fail("data/catalogue.json: missing items array");
    report();
    return;
  }

  const bySlug = new Map(published.map((g) => [g.slug, g]));
  const catSlugs = new Set();

  for (const item of catalogue.items) {
    const slug = String(item.slug || "").trim();
    if (!slug) {
      fail("catalogue item missing slug");
      continue;
    }
    catSlugs.add(slug);

    const guide = bySlug.get(slug);
    if (!guide) {
      fail(`catalogue has '${slug}' but no matching published guide`);
      continue;
    }

    if (String(item.type || "").trim() !== guide.type) {
      fail(
        `${slug}: catalogue type '${item.type}' != frontmatter '${guide.type}'`,
      );
    }
    if (String(item.title || "").trim() !== guide.title) {
      fail(
        `${slug}: catalogue title diverges from frontmatter\n  catalogue: ${item.title}\n  guide:     ${guide.title}`,
      );
    }
    if (normalizeUrl(item.url) !== guide.url) {
      fail(
        `${slug}: catalogue url diverges from frontmatter\n  catalogue: ${item.url}\n  guide:     ${guide.url}`,
      );
    }
    if (String(item.hook || "").trim() !== guide.summary) {
      fail(
        `${slug}: catalogue hook diverges from frontmatter summary\n  catalogue: ${item.hook}\n  guide:     ${guide.summary}`,
      );
    }
  }

  for (const guide of published) {
    if (!catSlugs.has(guide.slug)) {
      fail(
        `${guide.slug}: published guide missing from data/catalogue.json (update snapshot)`,
      );
    }
  }

  report();
}

function report() {
  if (errors.length) {
    console.error(`guide registry check failed (${errors.length}):\n`);
    for (const msg of errors) {
      console.error(`- ${msg}`);
    }
    process.exit(1);
  }
  console.log("guide registry check passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
