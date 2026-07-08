import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware Navigation-Helpers.
 *
 * Drop-in-Ersatz fuer `next/link`, `next/navigation` Router-Hooks und
 * `redirect` — alle behandeln den aktuellen Locale-Prefix automatisch:
 *
 *   <Link href="/security">  // /de/security wenn aktueller Locale DE
 *   router.push("/security") // dito
 *   redirect("/security")    // dito
 *
 * Verwenden in: Landing-Pages (innerhalb [locale]/(landing)) und ueberall
 * wo Links zu Landing-Pages gefuehrt werden (Auth, Dashboard, Cookie-Banner).
 *
 * Fuer Links zu Routen OHNE Locale-Prefix (Auth, Dashboard) — `next/link`
 * direkt nutzen, damit kein /de/login gerendert wird (Login hat keinen
 * Prefix; siehe i18n/routing.ts).
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
