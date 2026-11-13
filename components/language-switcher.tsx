"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/config";

/**
 * Sprachwahl: wechselt auf dieselbe Seite in der gewaehlten Sprache.
 * next-intl setzt dabei das Sprach-Cookie selbst.
 *
 * Bewusst Buttons statt Links: Blog-Slugs sind pro Sprache uebersetzt, ein
 * crawlbarer Link auf denselben Pfad in anderer Sprache waere dort ein 404.
 * Die Sprachversionen fuer Suchmaschinen stehen in den hreflang-Alternates.
 */
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchLocale(locale: Locale) {
    if (locale !== currentLocale) router.replace(pathname, { locale });
  }

  return (
    <div className="inline-flex items-center gap-0.5 text-xs">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchLocale(locale)}
          aria-pressed={locale === currentLocale}
          className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
            locale === currentLocale
              ? "bg-slate-200 text-slate-900 font-bold"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
