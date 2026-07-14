import Script from "next/script";

/**
 * Umami-Analytics-Integration.
 *
 * Privacy-friendly Page-Analytics — kein Cookie, kein Consent-Banner noetig,
 * Daten bleiben self-hosted auf dem Infra-Cluster (DSGVO-konform). Die
 * Datenschutzerklaerung beschreibt das unter "Reichweitenmessung (Umami
 * Analytics)" in app/[locale]/privacy/page.tsx.
 *
 * Aktivierung via 2 Pod-ENV-Vars (aus dem Helm-Chart, values-prod.yaml):
 *   - UMAMI_URL          → volle Script-URL (https://.../script.js)
 *   - UMAMI_WEBSITE_ID   → UUID aus dem Umami-Dashboard
 *
 * Beide Werte sind NICHT geheim — die Website-ID landet als data-Attribut im
 * ausgelieferten HTML jeder Seite. Deshalb Helm-Values statt Infisical.
 *
 * Server-Component (kein "use client") — liest process.env zur Render-Zeit auf
 * dem Server. Das funktioniert nur, weil die Landing-Routen SSR sind und NICHT
 * statisch prerendert werden; sonst wuerde process.env zur Build-Zeit im
 * Docker-Builder gelesen, wo die Pod-ENV nicht existiert (→ immer leer).
 *
 * Wenn eine der Vars fehlt, wird kein Script geladen — sicheres no-op.
 *
 * ACHTUNG CSP: Der Origin von UMAMI_URL muss in next.config.ts (UMAMI_ORIGIN)
 * in script-src UND connect-src stehen, sonst blockt der Browser das Script
 * bzw. den /api/send-Beacon. Die CSP wird beim Build in routes-manifest.json
 * eingebacken und kann den Wert nicht zur Laufzeit aus der ENV lesen.
 */
export default function UmamiAnalytics() {
  const url = process.env.UMAMI_URL;
  const websiteId = process.env.UMAMI_WEBSITE_ID;
  if (!url || !websiteId) return null;

  return (
    <Script
      src={url}
      data-website-id={websiteId}
      strategy="afterInteractive"
      defer
    />
  );
}
