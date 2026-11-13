import type { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import AuthLink from "@/components/auth-link";
import LanguageSwitcher from "@/components/language-switcher";

type SiteHeaderProps = {
  /** Zusaetzliche Navigation, z.B. Anker-Links der Startseite (ab lg einblenden). */
  nav?: ReactNode;
  /** Schatten, sobald gescrollt wurde (Startseite). */
  elevated?: boolean;
};

/**
 * Gemeinsamer, sticky Seitenkopf aller Landing-Seiten. Der Registrieren-CTA
 * bleibt damit auch mobil beim Scrollen sichtbar.
 *
 * Unter 640px zeigt der Kopf nur die Bildmarke statt des ganzen Logos und
 * blendet „Anmelden“ aus (die Registrierungsseite verlinkt den Login) —
 * sonst reicht die Breite ab 360px nicht.
 */
export default function SiteHeader({ nav, elevated = false }: SiteHeaderProps) {
  const t = useTranslations("landing");
  const tAuth = useTranslations("auth");

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
        elevated ? "border-slate-200 shadow-sm" : "border-slate-100"
      }`}
    >
      <div className="container flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Heritavo">
          <Image src="/icon.svg" alt="" width={36} height={36} unoptimized priority className="sm:hidden" />
          <Image src="/logo.svg" alt="" width={160} height={40} unoptimized priority className="hidden sm:block" />
        </Link>
        {nav}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <AuthLink href="/login" trackingPosition="header" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">{tAuth("login")}</Button>
          </AuthLink>
          <AuthLink href="/register" trackingPosition="header">
            <Button size="sm" className="rounded-full px-5 shadow-sm">{t("hero.cta")}</Button>
          </AuthLink>
        </div>
      </div>
    </header>
  );
}
