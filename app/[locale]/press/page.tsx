import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import PressDe from "./_content/de";
import PressEn from "./_content/en";
import PressFr from "./_content/fr";
import PressIt from "./_content/it";

const META: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "Presse & Medien – Heritavo",
    description:
      "Presskit von Heritavo: Boilerplate, Factsheet, Logos und Pressekontakt für Journalistinnen und Journalisten.",
  },
  en: {
    title: "Press & Media – Heritavo",
    description:
      "Heritavo press kit: boilerplate, fact sheet, logos and press contact for journalists.",
  },
  fr: {
    title: "Presse & médias – Heritavo",
    description:
      "Kit presse de Heritavo : présentation, fiche d'information, logos et contact presse pour les journalistes.",
  },
  it: {
    title: "Stampa & media – Heritavo",
    description:
      "Press kit di Heritavo: presentazione, scheda informativa, loghi e contatto stampa per giornalisti.",
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

export default async function PressPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  switch (safeLocale) {
    case "en": return <PressEn />;
    case "fr": return <PressFr />;
    case "it": return <PressIt />;
    default:   return <PressDe />;
  }
}
