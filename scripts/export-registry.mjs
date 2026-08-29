#!/usr/bin/env node
/**
 * Export guides Markdown frontmatter as a catalogue Lambda Invoke payload.
 * Usage: node scripts/export-registry.mjs > payload.json
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const GUIDES_DIR = path.join(ROOT, "src", "content", "guides");

function parseFrontmatter(raw) {
  if (!raw.startsWith("---")) {
    return null;
  }
  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return null;
  }
  const block = raw.slice(3, end).replace(/^\r?\n/, "");
  const data = {};
  for (const line of block.split(/\r?\n/)) {
    if (!line.trim() || line.trimStart().startsWith("#")) {
      continue;
    }
    const colon = line.indexOf(":");
    if (colon === -1) {
      continue;
    }
    const key = line.slice(0, colon).trim();
    let value = line.slice(colon + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (value === "true") {
      data[key] = true;
    } else if (value === "false") {
      data[key] = false;
    } else if (value.startsWith("[") && value.endsWith("]")) {
      const inner = value.slice(1, -1).trim();
      data[key] = inner
        ? inner.split(",").map((part) => {
            let item = part.trim();
            if (
              (item.startsWith('"') && item.endsWith('"')) ||
              (item.startsWith("'") && item.endsWith("'"))
            ) {
              item = item.slice(1, -1);
            }
            return item;
          })
        : [];
    } else {
      data[key] = value;
    }
  }
  return data;
}

function pickUrl(fm) {
  return (
    String(fm.walkthrough_url || "").trim() ||
    String(fm.article_url || "").trim() ||
    String(fm.video_url || "").trim() ||
    ""
  );
}

function pickRepo(fm) {
  const demo = String(fm.demo_url || "").trim();
  if (/^https?:\/\/(www\.)?github\.com\//i.test(demo)) {
    return demo;
  }
  return "";
}

async function main() {
  const names = (await readdir(GUIDES_DIR))
    .filter((name) => name.endsWith(".md"))
    .sort();

  const items = [];
  for (const name of names) {
    const slug = name.replace(/\.md$/i, "");
    const raw = await readFile(path.join(GUIDES_DIR, name), "utf8");
    const fm = parseFrontmatter(raw);
    if (!fm) {
      console.error(`skip ${name}: missing frontmatter`);
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
