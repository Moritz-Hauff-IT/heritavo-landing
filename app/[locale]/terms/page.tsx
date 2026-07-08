import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
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
  const { locale } = await params;
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  const m = META[safeLocale];
  return {
    title: m.title,
    description: m.description,
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  switch (safeLocale) {
    case "en": return <TermsEn />;
    case "fr": return <TermsFr />;
    case "it": return <TermsIt />;
    default:   return <TermsDe />;
  }
}
