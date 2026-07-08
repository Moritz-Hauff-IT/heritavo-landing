import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales, type Locale } from "./config";

const URL_LOCALE_RE = /^\/(de|en|fr|it)(?:\/|$)/;

export default getRequestConfig(async () => {
  const { headers } = await import("next/headers");
  const headerStore = await headers();

  const pathname = headerStore.get("x-request-path") ?? "";
  const urlMatch = pathname.match(URL_LOCALE_RE);
  if (urlMatch) {
    const urlLocale = urlMatch[1] as Locale;
    return {
      locale: urlLocale,
      messages: (await import(`../messages/${urlLocale}.json`)).default,
    };
  }

  const acceptLang = headerStore.get("accept-language") ?? "";
  const browserLocale = acceptLang
    .split(",")
    .map((part) => part.split(";")[0].trim().split("-")[0].toLowerCase())
    .find((lang) => locales.includes(lang as Locale)) as Locale | undefined;

  const locale = browserLocale ?? defaultLocale;
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
