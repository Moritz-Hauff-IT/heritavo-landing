import Image from "next/image";
import { useTranslations } from "next-intl";
import { Shield } from "lucide-react";
import { Link } from "@/i18n/navigation";

const CONTACT_EMAIL = "support@heritavo.com";

/** Gemeinsamer Seitenfuss aller Landing-Seiten (Rechtliches + Kontakt). */
export default function SiteFooter() {
  const t = useTranslations("landing");

  return (
    <footer className="border-t border-slate-100 py-14 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-4" aria-label="Heritavo">
              <Image src="/logo.svg" alt="" width={140} height={40} unoptimized />
            </Link>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              {t("footerDesc")}
            </p>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-4 text-sm">{t("footerLegal")}</h2>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><Link href="/imprint" className="hover:text-slate-900 transition-colors">{t("footer.imprint")}</Link></li>
              <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-slate-900 transition-colors">{t("footer.terms")}</Link></li>
              <li><Link href="/press" className="hover:text-slate-900 transition-colors">{t("footer.press")}</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-slate-900 mb-4 text-sm">{t("footerContact")}</h2>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-slate-900 transition-colors">{CONTACT_EMAIL}</a>
              </li>
              <li>Tägerwilen, Schweiz</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <span>&copy; {new Date().getFullYear()} {t("footerCopyright")}</span>
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-slate-300" />
            <span>{t("footerMadeIn")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
