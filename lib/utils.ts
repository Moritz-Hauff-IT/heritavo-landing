import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Pragmatic email format check — catches obvious typos like `,com` instead
 * of `.com`, missing TLD, whitespace, etc. Not RFC-5322 compliant; rejects
 * exotic-but-valid forms (quoted local-parts, IP-literal domains) in exchange
 * for catching the 99% of real-world typos before we hit the mail server.
 */
export function isValidEmail(email: unknown): email is string {
  if (typeof email !== "string") return false;
  const trimmed = email.trim();
  if (trimmed.length < 6 || trimmed.length > 254) return false;

  const atIdx = trimmed.indexOf("@");
  if (atIdx < 1 || atIdx !== trimmed.lastIndexOf("@")) return false;

  const local = trimmed.slice(0, atIdx);
  const domain = trimmed.slice(atIdx + 1);

  if (local.length === 0 || local.length > 64) return false;
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return false;
  if (!/^[A-Za-z0-9._%+\-]+$/.test(local)) return false;

  if (domain.length === 0 || domain.length > 253) return false;
  if (!domain.includes(".")) return false;
  if (domain.startsWith(".") || domain.endsWith(".") || domain.includes("..")) return false;

  const labels = domain.split(".");
  for (const label of labels) {
    if (label.length === 0 || label.length > 63) return false;
    if (label.startsWith("-") || label.endsWith("-")) return false;
    if (!/^[A-Za-z0-9-]+$/.test(label)) return false;
  }
  const tld = labels[labels.length - 1];
  if (tld.length < 2 || !/^[A-Za-z]+$/.test(tld)) return false;

  return true;
}

/**
 * Lower-case + trim. Use everywhere we look up or store an email so
 * `User@X.COM` and `user@x.com` reference the same account.
 */
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

/**
 * "alice@example.com" → "al***@example.com". Datenminimierung fuer Stellen
 * die zwar einen Hinweis auf die Adresse brauchen (Login-Mask, interne
 * Notifications) aber nicht die volle Identitaet leaken sollen.
 */
export function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  if (!user || !domain) return email;
  return `${user.slice(0, 2)}***@${domain}`;
}
