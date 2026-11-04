import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { locales, type Locale } from "@/i18n/config";
import { PRICE_CURRENCY, PRICE_HIGH, PRICE_LOW, PLANS } from "@/lib/pricing";
import { BASE_URL, pageMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import UmamiAnalytics from "@/components/UmamiAnalytics";
import deMessages from "@/messages/de.json";
import enMessages from "@/messages/en.json";
import frMessages from "@/messages/fr.json";
import itMessages from "@/messages/it.json";

type MessagesShape = {
  landing: { meta: { title: string; description: string; ogDescription: string } };
};
const messagesByLocale: Record<Locale, MessagesShape> = {
  de: deMessages,
  en: enMessages,
  fr: frMessages,
  it: itMessages,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  return {
    ...pageMetadata({ locale, path: "", ...messagesByLocale[locale].landing.meta }),
    icons: {
      icon: "/favicon.png",
      apple: "/logo-square.png",
    },
  };
}

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
    // sameAs verknuepft die Entität mit ihren offiziellen Profilen —
    // wichtig fuer Knowledge-Graph-Entity-Recognition (Google + AI-Search).
    sameAs: [
      "https://www.instagram.com/heritavo_com/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@heritavo.com",
      availableLanguage: ["de", "en", "fr", "it"],
    },
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

// SoftwareApplication mit AggregateOffer (statt Einzel-Offers pro Plan —
// robuster fuer Rich Results). Preise aus lib/pricing.ts, damit Schema und
// UI nicht driften. Bewusst KEIN aggregateRating: ohne echte Review-Daten
// waere das ein Policy-Verstoss.
function buildSoftwareSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#app`,
    name: "Heritavo",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Web",
    url: BASE_URL,
    inLanguage: ["de-CH", "en", "fr-CH", "it-CH"],
    publisher: { "@id": `${BASE_URL}/#organization` },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: PRICE_CURRENCY,
      lowPrice: PRICE_LOW,
      highPrice: PRICE_HIGH,
      offerCount: PLANS.length,
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/de#pricing`,
    },
  };
}

// Seitenuebergreifende Entitaeten. Seitenspezifisches (FAQ, Artikel)
// rendert die jeweilige Seite selbst.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [...staticGraphNodes, buildSoftwareSchema()],
};

export default async function LandingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Ungueltige Locale-Segmente (z.B. /login, /xyz die nicht via next.config
  // redirects abgefangen wurden) sind echte 404 — kein stiller Fallback auf
  // "de", sonst rendert jeder unbekannte Ein-Segment-Pfad die Homepage (soft-404).
  if (!locales.includes(locale as Locale)) notFound();
  const safeLocale = locale as Locale;
  return (
    <html lang={safeLocale}>
      <body>
        <JsonLd data={siteJsonLd} />
        <NextIntlClientProvider locale={safeLocale} messages={messagesByLocale[safeLocale]}>
          {children}
        </NextIntlClientProvider>
        <UmamiAnalytics />
      </body>
    </html>
  );
}
