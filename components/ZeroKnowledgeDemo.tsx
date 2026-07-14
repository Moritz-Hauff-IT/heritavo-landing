"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Lock } from "lucide-react";

/**
 * Live-Demo des Zero-Knowledge-Prinzips: Der Besucher tippt Text und sieht
 * in Echtzeit den AES-256-GCM-Ciphertext — echtes WebCrypto, kein Fake.
 * Der Demo-Schluessel wird pro Seitenaufruf zufaellig erzeugt, ist nicht
 * extrahierbar und verlaesst den Browser nie (es gibt keinerlei Upload).
 */
export default function ZeroKnowledgeDemo() {
  const t = useTranslations("landing.zkDemo");
  const [plain, setPlain] = useState("");
  const [cipher, setCipher] = useState("");
  const keyRef = useRef<CryptoKey | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const key = await crypto.subtle.generateKey(
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt"]
      );
      if (!cancelled) {
        keyRef.current = key;
        setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Beispieltext beim Laden einsetzen, damit die Demo sofort etwas zeigt.
  useEffect(() => {
    setPlain(t("sample"));
  }, [t]);

  useEffect(() => {
    if (!ready || !keyRef.current) return;
    let cancelled = false;
    const id = setTimeout(async () => {
      if (!plain) {
        setCipher("");
        return;
      }
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const buf = await crypto.subtle.encrypt(
        { name: "AES-GCM", iv },
        keyRef.current!,
        new TextEncoder().encode(plain)
      );
      if (cancelled) return;
      let bin = "";
      for (const b of [...iv, ...new Uint8Array(buf)]) bin += String.fromCharCode(b);
      setCipher(btoa(bin));
    }, 120);
    return () => {
      cancelled = true;
      clearTimeout(id);
    };
  }, [plain, ready]);

  return (
    <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 space-y-5">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-500" />
          <span className="w-3 h-3 rounded-full bg-amber-500" />
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
        </div>
        <span className="text-xs text-slate-500 font-mono">zero-knowledge-demo</span>
      </div>

      <label className="block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {t("inputLabel")}
        </span>
        <input
          type="text"
          value={plain}
          maxLength={140}
          onChange={(e) => setPlain(e.target.value)}
          placeholder={t("placeholder")}
          className="w-full rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/60 transition-colors"
        />
      </label>

      <div className="space-y-2">
        <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          <Lock className="w-3 h-3 text-emerald-400" />
          {t("serverLabel")}
        </span>
        <div
          key={cipher}
          className="cipher-flash min-h-[88px] rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 font-mono text-[11px] leading-relaxed text-emerald-400/90 break-all select-all"
          aria-live="polite"
        >
          {cipher || "—"}
        </div>
      </div>

      <p className="text-xs text-slate-500 leading-relaxed">{t("caption")}</p>
    </div>
  );
}
