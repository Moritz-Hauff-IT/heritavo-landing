import type { MetadataRoute } from "next";

// KI-Crawler explizit willkommen heissen — die Landing ist vollstaendig
// oeffentlich. Die Liste dokumentiert Absicht und macht die Freigabe in
// Log-Auswertungen/GEO-Checks sichtbar (formal redundant zu "*").
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Gemini-Deep-Research",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "Applebot-Extended",
  "Amazonbot",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
    ],
    sitemap: "https://heritavo.com/sitemap.xml",
    host: "https://heritavo.com",
  };
}
