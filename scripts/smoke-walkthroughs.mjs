#!/usr/bin/env node
/**
 * HTTP smoke: each published walkthrough_url returns 200 and embeds GA.
 * Usage: node scripts/smoke-walkthroughs.mjs
 *
 * Env:
 *   GA_MEASUREMENT_ID  default G-6GP64SX615
 *   SMOKE_CONCURRENCY  default 4
 *   SMOKE_TIMEOUT_MS   default 20000
 */

import {
  JOHNA_KIWI_HOST,
  loadGuides,
  normalizeUrl,
} from "./lib/guides-md.mjs";

const GA_ID = process.env.GA_MEASUREMENT_ID || "G-6GP64SX615";
const CONCURRENCY = Math.max(1, Number(process.env.SMOKE_CONCURRENCY || 4));
const TIMEOUT_MS = Math.max(1000, Number(process.env.SMOKE_TIMEOUT_MS || 20000));

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "user-agent": "guides-walkthrough-smoke/1.0",
        accept: "text/html,application/xhtml+xml",
      },
    });
    const text = await res.text();
    return { status: res.status, finalUrl: res.url, text };
  } finally {
    clearTimeout(timer);
  }
}

async function mapPool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;

  async function worker() {
    while (next < items.length) {
      const i = next++;
      results[i] = await fn(items[i], i);
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, () => worker()),
  );
  return results;
}

async function main() {
  const guides = await loadGuides();
  const targets = [];

  for (const { slug, fm } of guides) {
    if (!fm || fm.draft === true) continue;
    if (String(fm.type || "").trim() !== "walkthrough") continue;
    const url = normalizeUrl(fm.walkthrough_url);
    if (!url) {
      console.error(`${slug}: missing walkthrough_url`);
      process.exitCode = 1;
      continue;
    }
    if (!JOHNA_KIWI_HOST.test(url)) {
      console.error(`${slug}: skip non-johna.kiwi url ${url}`);
      process.exitCode = 1;
      continue;
    }
    targets.push({ slug, url });
  }

  if (!targets.length) {
    console.error("no walkthrough targets");
    process.exit(1);
  }

  console.log(
    `smoking ${targets.length} walkthroughs (ga=${GA_ID}, concurrency=${CONCURRENCY})`,
  );

  const failures = [];

  await mapPool(targets, CONCURRENCY, async ({ slug, url }) => {
    try {
      const { status, finalUrl, text } = await fetchText(url);
      if (status < 200 || status >= 300) {
        failures.push(`${slug}: HTTP ${status} for ${url} (final ${finalUrl})`);
        console.log(`FAIL ${slug} ${status}`);
        return;
      }
      if (!text.includes(GA_ID)) {
        failures.push(`${slug}: missing GA id ${GA_ID} at ${url}`);
        console.log(`FAIL ${slug} missing GA`);
        return;
      }
      console.log(`ok   ${slug}`);
    } catch (err) {
      failures.push(`${slug}: ${err.name || "Error"} ${err.message} (${url})`);
      console.log(`FAIL ${slug} ${err.message}`);
    }
  });

  if (failures.length) {
    console.error(`\nwalkthrough smoke failed (${failures.length}):\n`);
    for (const msg of failures) {
      console.error(`- ${msg}`);
    }
    process.exit(1);
  }

  console.log("\nwalkthrough smoke passed");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
