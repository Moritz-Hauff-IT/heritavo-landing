"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { locales, type Locale } from "@/i18n/config";

const labels: Record<Locale, string> = {
  de: "DE",
  en: "EN",
  fr: "FR",
  it: "IT",
};

const LOCALE_PREFIX_RE = /^\/(de|en|fr|it)(?=\/|$)/;

/**
 * Language-Switcher mit Hybrid-Verhalten:
 *
 * - Wenn die aktuelle URL einen Locale-Prefix hat (`/de/security`,
 *   /de/, ...): zur entsprechenden Sprach-Variante derselben Page navigieren
 *   (`/fr/security`). Das ist der SEO-relevante Pfad — User landet auf der
 *   indexierten URL der gewuenschten Sprache.
 * - Wenn die aktuelle URL keinen Prefix hat (Dashboard, Auth, ...): nur
 *   Cookie via `/api/locale` setzen + Page refreshen. Routing-Layer in
 *   `i18n/request.ts` liest dann den Cookie und rendert die andere Sprache
 *   in-place.
 *
 * Cookie wird in beiden Faellen gesetzt (durch `/api/locale` oder durch
 * next-intl beim URL-Wechsel), damit die naechste un-prefixed Page
 * (z.B. Dashboard nach Login) automatisch in der zuletzt gewaehlten
 * Sprache rendert.
 */
export default function LanguageSwitcher({ className }: { className?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  async function switchLocale(locale: Locale) {
    if (locale === currentLocale) return;

    // Cookie immer setzen — damit auch un-prefixed Pages (Dashboard, Auth)
    // beim naechsten Besuch in der gewaehlten Sprache rendern.
    await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    });

    if (LOCALE_PREFIX_RE.test(pathname)) {
      // Prefixed-Route: zur gleichen Page in anderer Sprache navigieren.
      const newPath = pathname.replace(LOCALE_PREFIX_RE, `/${locale}`);
      router.push(newPath);
    } else {
      // Unprefixed (Dashboard etc.): nur refresh — Cookie steuert dann
      // die neue Sprache.
      router.refresh();
    }
  }

  return (
    <div className={`inline-flex items-center gap-0.5 text-xs ${className ?? ""}`}>
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
            currentLocale === locale
              ? "bg-slate-200 text-slate-900 font-bold"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          {labels[locale]}
        </button>
      ))}
    </div>
  );
}
