import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const APP_ORIGIN = "https://app.heritavo.com";

// Top-Level-Pfade, die frueher unter heritavo.com von der App bedient wurden
// (vor dem app.heritavo.com-Split). Alte Bookmarks und bereits versendete
// E-Mail-/Token-Links (Release, Trustee-Einladung, Invite) muessen weiter
// funktionieren -> 308-Redirect auf die App. `:path*` deckt Basis + Subpfade
// inkl. [token]-Segmente ab.
const LEGACY_APP_PATHS = [
  "login",
  "register",
  "reset",
  "2fa",
  "verify-pending",
  "invite",
  "dashboard",
  "admin",
  "release",
  "trustees",
  "unsubscribe",
  "newsletter",
];

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    return [
      // /f = Flyer-Kurz-URL (gedruckte Flyer/QR). Zeigt wie vor dem Split auf
      // die deutsche Landing. Temporaer (307), damit das Ziel spaeter ohne
      // Browser-Cache-Probleme aenderbar bleibt.
      { source: "/f", destination: "/de", permanent: false },
      ...LEGACY_APP_PATHS.flatMap((p) => [
        { source: `/${p}`, destination: `${APP_ORIGIN}/${p}`, permanent: true },
        {
          source: `/${p}/:path*`,
          destination: `${APP_ORIGIN}/${p}/:path*`,
          permanent: true,
        },
      ]),
    ];
  },
  async headers() {
    const fallbackCsp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; ");
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "Content-Security-Policy", value: fallbackCsp },
        ],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
