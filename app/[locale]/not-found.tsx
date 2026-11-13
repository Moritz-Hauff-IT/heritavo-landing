import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export default function NotFound() {
  const t = useTranslations("landing.notFound");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* not-found unterstuetzt kein generateMetadata; React hoistet <title> in den <head>. */}
      <title>{t("metaTitle")}</title>
      <SiteHeader />
      <main className="container flex flex-1 flex-col items-center justify-center py-24 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">404</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{t("title")}</h1>
        <p className="text-lg text-slate-500 max-w-xl mb-10">{t("text")}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button size="lg" className="group px-8 rounded-full gap-2">
              {t("home")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="outline" size="lg" className="px-8 rounded-full border-slate-200">{t("blog")}</Button>
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
