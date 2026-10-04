/**
 * Resolves a path against Astro's configured `base` value.
 *
 * GitHub Pages serves project repositories from a sub-path such as
 * `/my-portfolio`, so any hard-coded absolute link (`/resume.pdf`) would break
 * there. Always wrap local asset links with this helper.
 *
 * Absolute URLs (http://, https://, mailto:) are returned untouched, so a CV
 * hosted on Google Drive works as-is.
 */
export function withBase(path: string): string {
  if (!path) return "";
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;

  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\/+/, "")}`;
}
