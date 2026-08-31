/**
 * Shared Markdown frontmatter helpers for guides maintenance scripts.
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
export const GUIDES_DIR = path.join(ROOT, "src", "content", "guides");
export const CATALOGUE_PATH = path.join(ROOT, "data", "catalogue.json");

/** Walkthrough hosts must use the custom domain, not github.io. */
export const JOHNA_KIWI_HOST =
  /^https:\/\/[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.johna\.kiwi(?:\/.*)?$/i;

export const REQUIRED_FIELDS = ["title", "date", "type", "category", "summary"];
export const ALLOWED_TYPES = new Set(["walkthrough", "article"]);

export function parseFrontmatter(raw) {
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

export function pickUrl(fm) {
  return (
    String(fm.walkthrough_url || "").trim() ||
    String(fm.article_url || "").trim() ||
    String(fm.video_url || "").trim() ||
    ""
  );
}

export function normalizeUrl(url) {
  const s = String(url || "").trim();
  if (!s) return "";
  return s.endsWith("/") ? s : `${s}/`;
}

export function pickRepo(fm) {
  const demo = String(fm.demo_url || "").trim();
  if (/^https?:\/\/(www\.)?github\.com\//i.test(demo)) {
    return demo;
  }
  return "";
}

/**
 * @returns {Promise<Array<{ slug: string, file: string, fm: Record<string, unknown>, raw: string }>>}
 */
export async function loadGuides() {
  const names = (await readdir(GUIDES_DIR))
    .filter((name) => name.endsWith(".md"))
    .sort();

  const entries = [];
  for (const name of names) {
    const slug = name.replace(/\.md$/i, "");
    const raw = await readFile(path.join(GUIDES_DIR, name), "utf8");
    const fm = parseFrontmatter(raw);
    entries.push({ slug, file: name, fm, raw });
  }
  return entries;
}
