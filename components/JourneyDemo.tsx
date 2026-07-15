"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import {
  UserPlus,
  Users,
  Vault,
  HeartPulse,
  BellRing,
  Clock,
  Unlock,
  type LucideIcon,
} from "lucide-react";

const PHASE_MS = 2200;
const RESET_HOLD_MS = 2000;

type Station = {
  /** i18n-Pfad unterhalb von `landing` */
  key: string;
  icon: LucideIcon;
  active: string;
};

// Akt 1: Setup (nutzt die bestehenden steps-Texte), Akt 2: Ernstfall.
const ACT1: Station[] = [
  { key: "steps.s1", icon: UserPlus, active: "bg-slate-900 text-white ring-slate-900/15" },
  { key: "steps.s2", icon: Users, active: "bg-slate-900 text-white ring-slate-900/15" },
  { key: "steps.s3", icon: Vault, active: "bg-slate-900 text-white ring-slate-900/15" },
];
const ACT2: Station[] = [
  { key: "flowDemo.s1", icon: HeartPulse, active: "bg-emerald-500 text-white ring-emerald-500/25" },
  { key: "flowDemo.s2", icon: BellRing, active: "bg-amber-500 text-white ring-amber-500/25" },
  { key: "flowDemo.s3", icon: Clock, active: "bg-sky-500 text-white ring-sky-500/25" },
  { key: "flowDemo.s4", icon: Unlock, active: "bg-slate-900 text-[hsl(var(--brand-accent))] ring-slate-900/20" },
];
const TOTAL = ACT1.length + ACT2.length;

/**
 * Die komplette Heritavo-Reise als eine durchgehende Animation in zwei
 * Akten: Setup (einmalig) -> Ernstfall (vollautomatisch). Stationen leuchten
 * nacheinander auf, Verbindungen fuellen sich, dann Loop. Spielt nur im
 * Viewport; prefers-reduced-motion bekommt eine statische Darstellung.
 */
export default function JourneyDemo() {
  const t = useTranslations("landing");
  const rootRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0);
  const [resetting, setResetting] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [staticMode, setStaticMode] = useState(false);

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
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || staticMode) return;
    const id = setTimeout(() => {
      if (phase < TOTAL - 1) {
        setPhase(phase + 1);
      } else {
        setResetting(true);
        setPhase(0);
        setTimeout(() => setResetting(false), 60);
      }
    }, phase === TOTAL - 1 ? PHASE_MS + RESET_HOLD_MS : PHASE_MS);
    return () => clearTimeout(id);
  }, [phase, playing, staticMode]);

  const shownPhase = staticMode ? TOTAL - 1 : phase;

  const renderRow = (stations: Station[], offset: number) => (
    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-0">
      {stations.map((station, i) => {
        const idx = offset + i;
        const Icon = station.icon;
        const isActive = !staticMode && shownPhase === idx;
        const isDone = staticMode || shownPhase > idx;
        return (
          <div key={station.key} className="flex md:flex-col md:flex-1 items-start md:items-center gap-4 md:gap-0">
            <div className="flex md:w-full items-center md:justify-center relative">
              {i > 0 && (
                <div className="hidden md:block absolute right-1/2 mr-8 left-[calc(-50%+2rem)] top-1/2 -translate-y-1/2 h-1 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-primary to-primary"
                    style={{
                      width: isDone || isActive ? "100%" : "0%",
                      transition: resetting ? "none" : "width 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
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
                <Icon className="h-7 w-7" />
                {isActive && (
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-40" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-current" />
                  </span>
                )}
              </div>
            </div>
            <div className="md:mt-5 md:text-center max-w-[240px] md:mx-auto">
              <p className={`font-bold transition-colors duration-500 ${isActive || isDone ? "text-slate-900" : "text-slate-400"}`}>
                {t(`${station.key}.title`)}
              </p>
              <p className={`text-sm leading-relaxed transition-opacity duration-500 ${isActive ? "text-slate-600 opacity-100" : "text-slate-400 opacity-70"}`}>
                {t(`${station.key}.desc`)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );

  const act2Started = staticMode || shownPhase >= ACT1.length;

  return (
    <div ref={rootRef} className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-sm space-y-10">
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-600">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-[10px] text-white">1</span>
          {t("flowDemo.act1")}
        </span>
      </div>

      {renderRow(ACT1, 0)}

      {/* Uebergang zwischen den Akten: vertikale Linie fuellt sich. */}
      <div className="flex justify-center" aria-hidden>
        <div className="h-12 w-1 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="w-full rounded-full bg-gradient-to-b from-primary to-emerald-400"
            style={{
              height: act2Started ? "100%" : "0%",
              transition: resetting ? "none" : "height 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-500 ${
            act2Started ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400"
          }`}
        >
          <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white transition-colors duration-500 ${act2Started ? "bg-emerald-500" : "bg-slate-400"}`}>2</span>
          {t("flowDemo.act2")}
        </span>
      </div>

      {renderRow(ACT2, ACT1.length)}
    </div>
  );
}
