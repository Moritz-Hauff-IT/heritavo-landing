import type { MetadataRoute } from "next";
import { locales, defaultLocale } from "@/i18n/config";
import { getAllBlogPostMeta, getTranslationKeyMap } from "@/lib/blog";
import { BASE_URL, UNTRANSLATED_PATHS, localeAlternates } from "@/lib/seo";

// Reihenfolge = absteigende Prioritaet
const TRANSLATED_PATHS = ["", "/blog", "/press", "/security", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const translatedEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    TRANSLATED_PATHS.map((p) => ({
      url: `${BASE_URL}/${locale}${p}`,
      alternates: { languages: localeAlternates(p) },
      changeFrequency: p === "" ? ("weekly" as const) : ("monthly" as const),
      priority: p === "" ? 1 : p === "/blog" ? 0.8 : 0.4,
    }))
  );

  // Nur die kanonische deutsche URL, ohne hreflang (siehe UNTRANSLATED_PATHS).
  const untranslatedEntries: MetadataRoute.Sitemap = UNTRANSLATED_PATHS.map((p) => ({
    url: `${BASE_URL}/${defaultLocale}${p}`,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  // Slugs sind pro Locale uebersetzt. Ueber den translationKey im
  // Frontmatter lassen sich die 4 Versionen desselben Artikels
  // verknuepfen und als hreflang-alternates in der Sitemap ausweisen.
  // lastModified aus Frontmatter (updatedAt ?? publishedAt), nicht mtime:
  // im Docker-Build ist mtime der Checkout-Zeitpunkt aller Dateien.
  const translationMap = getTranslationKeyMap();
  const blogEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    getAllBlogPostMeta(locale).map((post) => {
      const siblings = post.translationKey ? translationMap[post.translationKey] : undefined;
      const languages = siblings && Object.keys(siblings).length >= 2
        ? {
            ...Object.fromEntries(
              locales.map((l) => [l, `${BASE_URL}/${l}/blog/${siblings[l] ?? post.slug}`]),
            ),
            ["x-default" as string]: `${BASE_URL}/${defaultLocale}/blog/${siblings[defaultLocale] ?? post.slug}`,
          }
        : undefined;
      return {
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: post.updatedAt ?? post.publishedAt,
        changeFrequency: "yearly" as const,
        priority: 0.6,
        ...(languages ? { alternates: { languages } } : {}),
      };
    })
  );

  return [...translatedEntries, ...untranslatedEntries, ...blogEntries];
}
