/**
 * Single source of truth for the portfolio site URL and global configuration.
 * Configured via NEXT_PUBLIC_SITE_URL environment variable with fallback to production domain.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://jclopezespitia.sytes.net"
).replace(/\/+$/, "");

/**
 * Helper to construct absolute canonical URLs for SEO, OpenGraph, sitemap, and assets.
 */
export function getAbsoluteUrl(path: string = ""): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
}
