import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
});

// Origin des self-hosted Umami. Muss zum Host von UMAMI_URL aus dem Helm-Chart
// passen (k8s/charts/heritavo-landing/values.yaml).
const UMAMI_ORIGIN = "https://analytics.hauff.cloud";

const LOCALE_PATH = new RegExp(`^/(${locales.join("|")})(/|$)`);

/**
 * Per-Request-Nonce-CSP statt 'unsafe-inline' (Landing und App sind
 * same-site, ein XSS hier waere ein Sprungbrett). Next.js liest den Nonce aus
 * dem CSP-*Request*-Header und haengt ihn an seine Inline-Scripts; next/script
 * nimmt ihn ebenfalls. Deshalb CSP auf Request UND Response setzen.
 */
function buildCsp(nonce: string): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${UMAMI_ORIGIN}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    `connect-src 'self' ${UMAMI_ORIGIN}`,
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join("; ");
}

export default function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const csp = buildCsp(nonce);
  request.headers.set("x-nonce", nonce);
  request.headers.set("Content-Security-Policy", csp);

  const { pathname } = request.nextUrl;
  const response =
    pathname === "/" || LOCALE_PATH.test(pathname)
      ? intlMiddleware(request)
      : NextResponse.next({ request: { headers: request.headers } });
  response.headers.set("Content-Security-Policy", csp);
  return response;
}

export const config = {
  // Alles ausser statischen Assets — auch robots.txt, sitemap.xml, api/health
  // bekommen so dieselbe CSP.
  matcher: ["/((?!_next/static|_next/image|images/|favicon\\.png|.*\\.(?:png|svg|webp|jpg|ico|txt|js)$).*)"],
};
