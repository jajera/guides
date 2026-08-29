/**
 * Load the shared content catalogue (hooks) for overlay onto guides entries.
 *
 * Remote URL when CATALOGUE_URL is set; otherwise the committed snapshot.
 * Remote failure always degrades to the snapshot rather than failing the build.
 */
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const SNAPSHOT = 'data/catalogue.json';
const FETCH_TIMEOUT_MS = 8000;

type CatalogueItem = {
  slug: string;
  hook?: string;
};

type CatalogueDoc = {
  items?: CatalogueItem[];
};

function isValid(doc: unknown): doc is CatalogueDoc {
  return (
    !!doc &&
    typeof doc === 'object' &&
    Array.isArray((doc as CatalogueDoc).items) &&
    ((doc as CatalogueDoc).items?.length ?? 0) > 0
  );
}

async function loadSnapshot(): Promise<CatalogueItem[]> {
  const doc = JSON.parse(await readFile(join(root, SNAPSHOT), 'utf8')) as unknown;
  if (!isValid(doc)) {
    throw new Error(`${SNAPSHOT} has no items - cannot build`);
  }
  return doc.items!;
}

let cached: Promise<CatalogueItem[]> | null = null;

async function loadCatalogueItems(): Promise<CatalogueItem[]> {
  if (!cached) {
    cached = (async () => {
      const url = process.env.CATALOGUE_URL?.trim();

      if (url) {
        try {
          const res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
          if (!res.ok) {
            throw new Error(`HTTP ${res.status}`);
          }
          const doc = (await res.json()) as unknown;
          if (!isValid(doc)) {
            throw new Error('no items in payload');
          }
          console.log(`catalogue: ${doc.items!.length} from ${url}`);
          return doc.items!;
        } catch (err) {
          const message = err instanceof Error ? err.message : String(err);
          console.warn(`catalogue: remote failed (${message}), using ${SNAPSHOT}`);
        }
      }

      const items = await loadSnapshot();
      console.log(`catalogue: ${items.length} from ${SNAPSHOT}`);
      return items;
    })();
  }
  return cached;
}

/** slug → hook for card/lede overlay. Empty hook skipped. */
export async function catalogueHooksBySlug(): Promise<Map<string, string>> {
  const items = await loadCatalogueItems();
  const map = new Map<string, string>();
  for (const item of items) {
    const hook = (item.hook || '').trim();
    if (item.slug && hook) {
      map.set(item.slug, hook);
    }
  }
  return map;
}
