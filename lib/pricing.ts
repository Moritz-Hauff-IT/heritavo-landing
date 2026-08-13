// Zentrale Preisquelle fuer Landing-UI UND strukturierte Daten (JSON-LD).
// Neutral gehalten (kein React/Client-Code), damit Server- (layout.tsx) und
// Client-Komponenten (page.tsx) gleichermassen importieren koennen.
//
// WICHTIG: Bei Preisaenderungen muessen mitgezogen werden:
//   - public/llms.txt + public/llms-full.txt (dieses Repo)
//   - public/llms.txt + public/llms-full.txt im App-Repo (Moritz-Hauff-IT/heritavo)
//   - Stripe-Preise (verbindliche Quelle, App mappt via STRIPE_PRICE_*-Envs)

// PR-pricing-2026: Jahresabos 1J / 2J / 3J. 1 Jahr ist Standard, 2 Jahre
// mit ~10% Rabatt, 3 Jahre mit ~15% Rabatt. 3 Jahre ist Stripe's
// recurring-Subscription-Maximum. Preise in CHF (Schweiz-Markt).
export const PLANS = [
  { key: "free",   name: "Free",   "1year": 0,  "2years": 0,   "3years": 0,   highlighted: false },
  { key: "light",  name: "Light",  "1year": 19, "2years": 34,  "3years": 49,  highlighted: false },
  { key: "pro",    name: "Pro",    "1year": 39, "2years": 70,  "3years": 99,  highlighted: true  },
  { key: "couple", name: "Couple", "1year": 59, "2years": 106, "3years": 150, highlighted: false },
  { key: "family", name: "Family", "1year": 89, "2years": 160, "3years": 227, highlighted: false },
] as const;

export type PricingInterval = "1year" | "2years" | "3years";

export const PRICE_CURRENCY = "CHF";

export const PRICE_LOW = Math.min(...PLANS.map((p) => p["1year"]));
export const PRICE_HIGH = Math.max(...PLANS.map((p) => p["1year"]));
