"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { HeartPulse, BellRing, Clock, Unlock } from "lucide-react";

const PHASE_MS = 2600;
const RESET_HOLD_MS = 1800;

const STATIONS = [
  { key: "s1", icon: HeartPulse, active: "bg-emerald-500 text-white ring-emerald-500/25" },
  { key: "s2", icon: BellRing, active: "bg-amber-500 text-white ring-amber-500/25" },
  { key: "s3", icon: Clock, active: "bg-sky-500 text-white ring-sky-500/25" },
  { key: "s4", icon: Unlock, active: "bg-slate-900 text-[hsl(var(--brand-accent))] ring-slate-900/20" },
] as const;

/**
 * Selbst ablaufende Notfallplan-Sequenz: vier Stationen leuchten nacheinander
 * auf, die Fortschrittslinie fuellt sich dazwischen, dann Loop. Spielt nur,
 * wenn die Sektion im Viewport ist. Bei prefers-reduced-motion: statische
 * Darstellung mit allen Stationen sichtbar.
 */
export default function EmergencyFlowDemo() {
  const t = useTranslations("landing.flowDemo");
  const rootRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [resetting, setResetting] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [staticMode, setStaticMode] = useState(false);

  // Nur animieren, wenn sichtbar; reduced-motion -> statisch.
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setStaticMode(true);
      return;
    }
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      setPlaying(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || staticMode) return;
    const id = setTimeout(() => {
      if (phase < STATIONS.length - 1) {
        setPhase(phase + 1);
      } else {
        // Loop: kurz halten, dann ohne Ruecklauf-Animation zuruecksetzen.
        setResetting(true);
        setPhase(0);
        setTimeout(() => setResetting(false), 60);
      }
    }, phase === STATIONS.length - 1 ? PHASE_MS + RESET_HOLD_MS : PHASE_MS);
    return () => clearTimeout(id);
  }, [phase, playing, staticMode]);

  const shownPhase = staticMode ? STATIONS.length - 1 : phase;

  return (
    <div ref={rootRef} className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm">
      <div className="text-center mb-10 md:mb-14">
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">{t("title")}</h3>
        <p className="text-slate-500 max-w-xl mx-auto">{t("subtitle")}</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
        {STATIONS.map((station, i) => {
          const Icon = station.icon;
          const isActive = !staticMode && shownPhase === i;
          const isDone = staticMode || shownPhase > i;
          return (
            <div key={station.key} className="flex md:flex-col md:flex-1 items-start md:items-center gap-4 md:gap-0">
              <div className="flex md:w-full items-center md:justify-center relative">
                {/* Fortschritts-Segment links der Station (ab Station 2) */}
                {i > 0 && (
                  <div className="hidden md:block absolute right-1/2 mr-8 left-[calc(-50%+2rem)] top-1/2 -translate-y-1/2 h-1 rounded-full bg-slate-100 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-primary to-primary"
                      style={{
                        width: isDone || isActive ? "100%" : "0%",
                        transition: resetting ? "none" : "width 1s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    />
                  </div>
                )}
                <div
                  className={`relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
                    isActive
                      ? `${station.active} ring-8 scale-110 shadow-lg`
                      : isDone
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <Icon className={`h-7 w-7 ${isActive && i === 0 ? "lock-pulse" : ""}`} />
                  {isActive && (
                    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-40" />
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-current" />
                    </span>
                  )}
                </div>
              </div>
              <div className="md:mt-5 md:text-center max-w-[220px] md:mx-auto">
                <p
                  className={`font-bold transition-colors duration-500 ${
                    isActive || isDone ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {t(`${station.key}.title`)}
                </p>
                <p
                  className={`text-sm leading-relaxed transition-opacity duration-500 ${
                    isActive ? "text-slate-600 opacity-100" : "text-slate-400 opacity-70"
                  }`}
                >
                  {t(`${station.key}.desc`)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
