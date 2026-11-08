import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { pageMetadata, toLocale } from "@/lib/seo";
import TermsDe from "./_content/de";
import TermsEn from "./_content/en";
import TermsFr from "./_content/fr";
import TermsIt from "./_content/it";

const META: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "AGB – Heritavo",
    description: "Allgemeine Geschäftsbedingungen von Heritavo: Abonnementpläne, Preise, Kündigung, Haftung und anwendbares Recht.",
  },
  en: {
    title: "Terms – Heritavo",
    description: "Heritavo Terms of Service: subscription plans, pricing, cancellation, liability and applicable law. Informal English translation; the German version is legally binding.",
  },
  fr: {
    title: "CGV – Heritavo",
    description: "Conditions générales de vente de Heritavo : plans d'abonnement, prix, résiliation, responsabilité et droit applicable. Traduction française informelle ; la version allemande fait foi.",
  },
  it: {
    title: "Condizioni – Heritavo",
    description: "Condizioni di servizio di Heritavo: piani di abbonamento, prezzi, disdetta, responsabilità e diritto applicabile. Traduzione italiana informale; la versione tedesca è giuridicamente vincolante.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  return pageMetadata({ locale, path: "/terms", ...META[locale] });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  switch (toLocale((await params).locale)) {
    case "en": return <TermsEn />;
    case "fr": return <TermsFr />;
    case "it": return <TermsIt />;
    default:   return <TermsDe />;
  }
}
