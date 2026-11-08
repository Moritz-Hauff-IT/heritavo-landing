import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./config";
import deMessages from "../messages/de.json";
import enMessages from "../messages/en.json";
import frMessages from "../messages/fr.json";
import itMessages from "../messages/it.json";

const messagesByLocale = {
  de: deMessages,
  en: enMessages,
  fr: frMessages,
  it: itMessages,
};

// Locale kommt aus dem [locale]-Segment bzw. — fuer not-found, wo keine
// Params anliegen — aus dem Header, den die next-intl-Middleware setzt.
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;
  return {
    locale,
    messages: messagesByLocale[locale],
  };
});
