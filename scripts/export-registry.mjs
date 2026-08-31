#!/usr/bin/env node
/**
 * Export guides Markdown frontmatter as a catalogue Lambda Invoke payload.
 * Usage: node scripts/export-registry.mjs > payload.json
 */

import {
  loadGuides,
  pickRepo,
  pickUrl,
} from "./lib/guides-md.mjs";

async function main() {
  const guides = await loadGuides();
  const items = [];

  for (const { slug, file, fm } of guides) {
    if (!fm) {
      console.error(`skip ${file}: missing frontmatter`);
      continue;
    }
    if (fm.draft === true) {
      continue;
    }
    const url = pickUrl(fm);
    if (!url) {
      console.error(`skip ${slug}: no walkthrough_url / article_url / video_url`);
      continue;
    }

    const tags = Array.isArray(fm.tags)
      ? fm.tags.map(String)
      : typeof fm.tags === "string" && fm.tags
        ? [fm.tags]
        : [];

    const item = {
      slug,
      title: String(fm.title || "").trim(),
      date: String(fm.date || "").trim(),
      type: String(fm.type || "walkthrough").trim() || "walkthrough",
      category: String(fm.category || "").trim(),
      tags,
      url,
      hook: String(fm.summary || "").trim(),
    };
    const repo = pickRepo(fm);
    if (repo) {
      item.repo = repo;
    }
    items.push(item);
  }

  if (!items.length) {
    console.error("no publishable guides found");
    process.exit(1);
  }

  process.stdout.write(`${JSON.stringify({ items }, null, 2)}\n`);
  console.error(`exported ${items.length} items`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
