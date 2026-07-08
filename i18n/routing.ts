import { defineRouting } from "next-intl/routing";
import { locales, defaultLocale } from "./config";

/**
 * next-intl Routing-Konfiguration.
 *
 * localePrefix: "always" — alle Public-Routes haben einen Locale-Prefix:
 *   /de/security, /en/security, /fr/security, /it/security
 *
 * Root `/` wird vom Middleware auf `/de/` (defaultLocale) redirected.
 *
 * Diese Routing-Tabelle wird vom Middleware nur fuer Landing-/Public-Pages
 * angewendet — Auth (`/login`), Dashboard, API, Admin und Token-basierte
 * Public-Pages (`/release/[token]`, `/trustees/...`) bleiben unprefixed,
 * weil sie nicht SEO-relevant sind und ihr eigenes Locale-Sourcing haben
 * (Cookie + DB-User-Setting + Token-Owner-Locale).
 */
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
});
