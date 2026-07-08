import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import SecurityDe from "./_content/de";
import SecurityEn from "./_content/en";
import SecurityFr from "./_content/fr";
import SecurityIt from "./_content/it";

const META: Record<Locale, { title: string; description: string }> = {
  de: {
    title: "Security & Vulnerability Disclosure – Heritavo",
    description:
      "Responsible-Disclosure-Policy für Heritavo. So meldest du Sicherheitslücken und so reagieren wir.",
  },
  en: {
    title: "Security & Vulnerability Disclosure – Heritavo",
    description:
      "Heritavo's Responsible Disclosure Policy. How to report security vulnerabilities and how we respond. Informal translation; the German version is authoritative.",
  },
  fr: {
    title: "Sécurité & divulgation responsable – Heritavo",
    description:
      "Politique de divulgation responsable de Heritavo. Comment signaler des failles et comment nous réagissons. Traduction informelle ; la version allemande fait foi.",
  },
  it: {
    title: "Sicurezza & divulgazione responsabile – Heritavo",
    description:
      "Politica di divulgazione responsabile di Heritavo. Come segnalare vulnerabilità e come rispondiamo. Traduzione informale; la versione tedesca è giuridicamente vincolante.",
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

export default async function SecurityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  switch (safeLocale) {
    case "en": return <SecurityEn />;
    case "fr": return <SecurityFr />;
    case "it": return <SecurityIt />;
    default:   return <SecurityDe />;
  }
}
