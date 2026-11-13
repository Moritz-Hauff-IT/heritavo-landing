import type { Metadata } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";

export const BASE_URL = "https://heritavo.com";

const OG_IMAGE = { url: "/og.png", width: 1200, height: 630 } as const;

const OG_LOCALE: Record<Locale, string> = {
  de: "de_CH",
  en: "en_GB",
  fr: "fr_CH",
  it: "it_CH",
};

/**
 * Seiten, deren Inhalt nur auf Deutsch existiert (Impressum, Datenschutz).
 * Sie laufen zwar unter allen Locale-Prefixen, kanonisch ist aber nur die
 * deutsche URL — sonst stehen vier identische Seiten im Index. Die Sitemap
 * listet sie deshalb nur einmal und ohne hreflang.
 */
export const UNTRANSLATED_PATHS: readonly string[] = ["/imprint", "/privacy"];

/** hreflang-Map fuer einen Pfad, der in jeder Locale unter demselben Pfad liegt. */
export function localeAlternates(path: string): Record<string, string> {
  return Object.fromEntries([
    ...locales.map((l) => [l, `${BASE_URL}/${l}${path}`]),
    ["x-default", `${BASE_URL}/${defaultLocale}${path}`],
  ]);
}

type PageMetadataInput = {
  locale: Locale;
  /** Pfad ohne Locale-Prefix, "" fuer die Startseite. */
  path: string;
  title: string;
  description: string;
  /** Kuerzere Fassung fuer Link-Vorschauen; Default: description. */
  ogDescription?: string;
};

/**
 * Metadaten einer Landing-Seite: eigener Canonical, hreflang sowie OG- und
 * Twitter-Tags in der Sprache der Seite. Next.js merged `openGraph` und
 * `twitter` nicht mit dem Layout, deshalb setzt jede Seite sie vollstaendig.
 */
export function pageMetadata({ locale, path, title, description, ogDescription }: PageMetadataInput): Metadata {
  const untranslated = UNTRANSLATED_PATHS.includes(path);
  const canonical = `${BASE_URL}/${untranslated ? defaultLocale : locale}${path}`;
  const previewDescription = ogDescription ?? description;
  return {
    title,
    description,
    alternates: untranslated ? { canonical } : { canonical, languages: localeAlternates(path) },
    openGraph: {
      url: canonical,
      title,
      description: previewDescription,
      siteName: "Heritavo",
      locale: OG_LOCALE[locale],
      images: [{ ...OG_IMAGE, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: previewDescription,
      images: [OG_IMAGE.url],
    },
  };
}

/** Locale aus dem Route-Segment, ungueltige Werte fallen auf die Default-Locale. */
export function toLocale(value: string): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : defaultLocale;
}
