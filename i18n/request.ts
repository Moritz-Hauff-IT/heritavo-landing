import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "./config";
import deMessages from "../messages/de.json";
import enMessages from "../messages/en.json";
import frMessages from "../messages/fr.json";
import itMessages from "../messages/it.json";

const messagesByLocale: Record<Locale, Record<string, unknown>> = {
  de: deMessages,
  en: enMessages,
  fr: frMessages,
  it: itMessages,
};

const URL_LOCALE_RE = /^\/(de|en|fr|it)(?:\/|$)/;

export default getRequestConfig(async () => {
  const { headers } = await import("next/headers");
  const headerStore = await headers();

  const pathname = headerStore.get("x-request-path") ?? "";
  const urlMatch = pathname.match(URL_LOCALE_RE);
  const locale: Locale = urlMatch
    ? (urlMatch[1] as Locale)
    : (() => {
        const acceptLang = headerStore.get("accept-language") ?? "";
        const browserLocale = acceptLang
          .split(",")
          .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase())
          .find((lang) => locales.includes(lang as Locale)) as Locale | undefined;
        return browserLocale ?? defaultLocale;
      })();

  return {
    locale,
    messages: messagesByLocale[locale],
  };
});
