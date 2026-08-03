import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import { getAllBlogPostMeta } from "@/lib/blog";

const BASE_URL = "https://heritavo.com";

// Reihenfolge = absteigende Prioritaet
const STATIC_PATHS = ["", "/blog", "/press", "/security", "/imprint", "/privacy", "/terms"];

function staticAlternates(path: string) {
  return {
    languages: Object.fromEntries([
      ...locales.map((l) => [l, `${BASE_URL}/${l}${path}`]),
      ["x-default", `${BASE_URL}/${defaultLocale}${path}`],
    ]),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    STATIC_PATHS.map((p) => ({
      url: `${BASE_URL}/${locale}${p}`,
      alternates: staticAlternates(p),
      changeFrequency: p === "" ? ("weekly" as const) : ("monthly" as const),
      priority: p === "" ? 1 : p === "/blog" ? 0.8 : 0.4,
    }))
  );

  // Slugs sind pro Locale lokal (uebersetzte Dateinamen). hreflang zwischen
  // Blog-Posts nur, wenn derselbe Slug in allen Locales existiert — sonst
  // irrefuehrende Verweise, also hier bewusst keine alternates.
  // lastModified aus Frontmatter (updatedAt ?? publishedAt), nicht mtime:
  // im Docker-Build ist mtime der Checkout-Zeitpunkt aller Dateien.
  const blogEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getAllBlogPostMeta(locale).map((post) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: post.updatedAt ?? post.publishedAt,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...blogEntries];
}
