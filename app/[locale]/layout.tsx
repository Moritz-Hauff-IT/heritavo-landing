import type { Metadata } from "next";
import { locales, type Locale } from "@/i18n/config";
import deMessages from "@/messages/de.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import itMessages from "@/messages/it.json";

const BASE_URL = "https://heritavo.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = locales.includes(locale as Locale) ? locale : "de";
  const canonicalUrl = `${BASE_URL}/${safeLocale}`;
  const languageAlternates = Object.fromEntries(
    locales.map((l) => [l, `${BASE_URL}/${l}`])
  );
  languageAlternates["x-default"] = `${BASE_URL}/de`;

  return {
    title: "Heritavo – was zählt, bleibt.",
    description:
      "Heritavo sichert dein digitales Erbe – Ende-zu-Ende verschlüsselt, automatisch aktiviert und diskret übergeben. Pläne ab CHF 0. Hosting in der Schweiz.",
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates,
    },
    openGraph: {
      url: canonicalUrl,
      title: "Heritavo – was zählt, bleibt.",
      description:
        "Digitale Vorsorge mit Ende-zu-Ende-Verschlüsselung – sicher, automatisiert, diskret. Pläne ab CHF 0. Made in Switzerland.",
    },
  };
}

const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;
type MessagesShape = { landing: { faq: Record<string, { q: string; a: string }> } };
const messagesByLocale: Record<Locale, MessagesShape> = {
  de: deMessages as unknown as MessagesShape,
  en: enMessages as unknown as MessagesShape,
  fr: frMessages as unknown as MessagesShape,
  it: itMessages as unknown as MessagesShape,
};

const staticGraphNodes = [
  {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Heritavo",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    email: "support@heritavo.com",
    founder: { "@type": "Person", name: "Moritz Hauff" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Okenfinerstrasse 2C",
      postalCode: "8274",
      addressLocality: "Tägerwilen",
      addressCountry: "CH",
    },
    areaServed: "CH",
  },
  {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Heritavo",
    inLanguage: "de-CH",
    publisher: { "@id": `${BASE_URL}/#organization` },
  },
];

function buildFaqSchema(locale: Locale) {
  const faq = messagesByLocale[locale].landing.faq;
  return {
    "@type": "FAQPage",
    "@id": `${BASE_URL}/${locale}#faq`,
    mainEntity: FAQ_KEYS.map((k) => ({
      "@type": "Question",
      name: faq[k]?.q ?? "",
      acceptedAnswer: { "@type": "Answer", text: faq[k]?.a ?? "" },
    })),
  };
}

function buildJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [...staticGraphNodes, buildFaqSchema(locale)],
  };
}

export default async function LandingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  const jsonLd = buildJsonLd(safeLocale);
  return (
    <html lang={safeLocale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
