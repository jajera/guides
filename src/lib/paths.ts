/** Join a path with Astro `base` (site root on guides.johna.kiwi). */
export function withBase(path = '') {
  const base = import.meta.env.BASE_URL;
  const root = base.endsWith('/') ? base : `${base}/`;
  if (!path || path === '/') return root;
  return `${root}${path.replace(/^\//, '')}`;
}
