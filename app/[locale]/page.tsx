"use client";

import { Link } from "@/i18n/navigation";
// Auth-Pages (/login, /register) sind absichtlich OHNE Locale-Prefix
// (siehe i18n/routing.ts). Link aus @/i18n/navigation wuerde dort ein
// /de/login draus machen -> 404. AuthLink ist der plain next/link
// fuer genau diese Faelle.
import AuthLink from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect, type CSSProperties } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/language-switcher";
import ZeroKnowledgeDemo from "@/components/ZeroKnowledgeDemo";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ShieldCheck,
  Key,
  UserCheck,
  Check,
  CheckCircle2,
  Lock,
  Clock,
  FileText,
  ArrowRight,
  Shield,
  Globe,
  Zap,
  Mail,
  Printer,
  Stethoscope,
  Brain,
  Hourglass,
} from "lucide-react";

const featureKeys = [
  { key: "vault", icon: Key, color: "bg-blue-500/10 text-blue-600" },
  { key: "contacts", icon: UserCheck, color: "bg-emerald-500/10 text-emerald-600" },
  { key: "zeroKnowledge", icon: ShieldCheck, color: "bg-purple-500/10 text-purple-600" },
  { key: "autoRelease", icon: Clock, color: "bg-amber-500/10 text-amber-600" },
  { key: "methods", icon: FileText, color: "bg-rose-500/10 text-rose-600" },
  { key: "offline", icon: Globe, color: "bg-sky-500/10 text-sky-600" },
] as const;

const stepKeys = [
  { key: "s1", number: "01" },
  { key: "s2", number: "02" },
  { key: "s3", number: "03" },
] as const;

// PR-pricing-2026: Jahresabos 1J / 2J / 3J. 1 Jahr ist Standard, 2 Jahre
// mit ~10% Rabatt, 3 Jahre mit ~15% Rabatt. 3 Jahre ist Stripe's
// recurring-Subscription-Maximum. Preise in CHF (Schweiz-Markt).
const planDefs = [
  { key: "free",   name: "Free",   "1year": 0,  "2years": 0,   "3years": 0,   highlighted: false },
  { key: "light",  name: "Light",  "1year": 19, "2years": 34,  "3years": 49,  highlighted: false },
  { key: "pro",    name: "Pro",    "1year": 39, "2years": 70,  "3years": 99,  highlighted: true  },
  { key: "couple", name: "Couple", "1year": 59, "2years": 106, "3years": 150, highlighted: false },
  { key: "family", name: "Family", "1year": 89, "2years": 160, "3years": 227, highlighted: false },
] as const;

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

const modesDef = [
  { key: "recovery", icon: FileText, num: "01", color: "text-slate-600", bg: "bg-slate-100" },
  { key: "email", icon: Mail, num: "02", color: "text-blue-600", bg: "bg-blue-100" },
  { key: "print", icon: Printer, num: "03", color: "text-amber-600", bg: "bg-amber-100" },
] as const;

const momentDefs = [
  { key: "sudden",    icon: Stethoscope, color: "text-rose-600",    bg: "bg-rose-50",    border: "border-rose-100" },
  { key: "cognitive", icon: Brain,       color: "text-amber-600",   bg: "bg-amber-50",   border: "border-amber-100" },
  { key: "death",     icon: Hourglass,   color: "text-slate-600",   bg: "bg-slate-100",  border: "border-slate-200" },
] as const;

type PricingInterval = "1year" | "2years" | "3years";

export default function LandingPage() {
  // 1 Jahr ist Default-Standard, kein Monats-Toggle mehr.
  const [pricingInterval, setPricingInterval] = useState<PricingInterval>("1year");
  const [scrolled, setScrolled] = useState(false);

  const t = useTranslations("landing");
  const tAuth = useTranslations("auth");
  const tBilling = useTranslations("billing");

  // Scroll-Reveal (IntersectionObserver, gebuendelt = CSP-safe), Scroll-
  // Progress-Bar und Nav-Elevation. Alles rein progressiv: faellt JS oder
  // der Observer aus, greift der Safety-Timeout bzw. der reduced-motion-
  // CSS-Fallback und der Content bleibt sichtbar.
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let io: IntersectionObserver | undefined;
    let safety: number | undefined;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
    } else {
      io = new IntersectionObserver(
        (entries, obs) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              obs.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      els.forEach((el) => io!.observe(el));
      // Sicherheitsnetz: nach 2.5s alles zeigen, falls ein Element nie triggert.
      // Rein dekorative Elemente (.steps-line) ausgenommen — sonst ist die
      // Zeichnen-Animation laengst durch, bevor die Sektion in den Viewport
      // scrollt. Worst case ohne Netz: die Linie bleibt unsichtbar (kein
      // Content-Verlust).
      safety = window.setTimeout(
        () =>
          els
            .filter((el) => !el.classList.contains("steps-line"))
            .forEach((el) => el.classList.add("is-visible")),
        2500
      );
    }

    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      h.style.setProperty("--scroll", max > 0 ? String(h.scrollTop / max) : "0");
      // Parallax-Versatz fuers Hero-Foto (px, gedeckelt — Hero ist nach
      // ~800px aus dem Viewport, danach kein Style-Update mehr noetig).
      h.style.setProperty("--heroY", String(Math.min(h.scrollTop, 800)));
      setScrolled(h.scrollTop > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      if (safety) clearTimeout(safety);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Scroll-Progress-Indikator */}
      <div
        aria-hidden
        className="scroll-progress fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-primary to-[hsl(var(--brand-accent))]"
      />

      {/* ── Navigation ── */}
      <header
        className={`sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "border-slate-200 shadow-sm" : "border-slate-100"
        }`}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2.5">
            <Image src="/logo.svg" alt="Heritavo Logo" width={160} height={48} unoptimized />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#features" className="hover:text-slate-900 transition-colors">{t("nav.solution")}</Link>
            <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">{t("nav.howItWorks")}</Link>
            <Link href="#pricing" className="hover:text-slate-900 transition-colors">{t("nav.pricing")}</Link>
            <Link href="#faq" className="hover:text-slate-900 transition-colors">{t("nav.faq")}</Link>
            <Link href="/blog" className="hover:text-slate-900 transition-colors">{t("nav.blog")}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <AuthLink href="/login">
              <Button variant="ghost" size="sm" className="text-slate-600 hover:text-slate-900">{tAuth("login")}</Button>
            </AuthLink>
            <AuthLink href="/register">
              <Button size="sm" className="rounded-full px-5 shadow-sm">{t("hero.cta")}</Button>
            </AuthLink>
          </div>
        </div>
      </header>

      <main className="flex-1">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="aurora-blob absolute -top-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-slate-100 to-transparent rounded-full blur-3xl opacity-70" />
            <div className="aurora-blob aurora-blob-2 absolute bottom-0 -right-[5%] w-[420px] h-[420px] bg-blue-100 rounded-full blur-3xl opacity-60" />
            <div
              className="aurora-blob absolute top-[18%] -left-[5%] w-[380px] h-[380px] rounded-full blur-3xl opacity-50"
              style={{ background: "radial-gradient(circle, hsl(152 43% 30% / 0.28), transparent 70%)" }}
            />
            <div
              className="aurora-blob aurora-blob-2 absolute bottom-[8%] left-[28%] w-[320px] h-[320px] rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(var(--brand-accent) / 0.32), transparent 70%)" }}
            />
          </div>

          <div className="container flex flex-col items-center text-center">
            <div
              className="hero-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold mb-8 tracking-wide uppercase"
              style={{ "--hero-i": 0 } as CSSProperties}
            >
              <Lock className="lock-pulse w-3 h-3 text-[hsl(var(--brand-accent))]" />
              {t("heroBadge")}
            </div>

            <h1
              className="hero-item text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.05]"
              style={{ "--hero-i": 1 } as CSSProperties}
            >
              {t("heroTitleLine1")}<br />
              <span className="hero-gradient-text">
                {t("heroTitleLine2")}
              </span>
            </h1>

            <p
              className="hero-item text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed"
              style={{ "--hero-i": 2 } as CSSProperties}
            >
              {t("heroSubtitle")}
            </p>

            <div
              className="hero-item flex flex-col sm:flex-row gap-4 mb-16"
              style={{ "--hero-i": 3 } as CSSProperties}
            >
              <AuthLink href="/register">
                <Button size="lg" className="group px-8 text-base rounded-full shadow-lg shadow-slate-200 gap-2 transition-transform hover:scale-[1.03] active:scale-95">
                  {t("hero.cta")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </AuthLink>
              <Link href="#how-it-works">
                <Button variant="outline" size="lg" className="px-8 text-base rounded-full border-slate-200 transition-transform hover:scale-[1.03] active:scale-95">
                  {t("hero.ctaSecondary")}
                </Button>
              </Link>
            </div>

            <div
              className="hero-item flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-slate-400"
              style={{ "--hero-i": 4 } as CSSProperties}
            >
              {([
                { icon: Shield, label: t("trust.encryption") },
                { icon: Globe, label: t("trust.hosting") },
                { icon: Zap, label: t("trust.noCreditCard") },
              ] as const).map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div
              className="hero-item relative mt-16 w-full max-w-5xl"
              style={{ "--hero-i": 5 } as CSSProperties}
            >
              {/* Glow hinter dem Foto — verankert es in der Aurora-Welt. */}
              <div
                aria-hidden
                className="aurora-blob absolute -inset-x-10 -top-10 -bottom-16 -z-10 rounded-full blur-3xl opacity-60"
                style={{ background: "radial-gradient(ellipse, hsl(152 43% 30% / 0.18), hsl(var(--brand-accent) / 0.12) 45%, transparent 72%)" }}
              />

              <div className="relative aspect-[2000/950] rounded-3xl overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200">
                <div className="hero-photo-parallax absolute -inset-y-[8%] inset-x-0">
                  <Image
                    src="/images/hero-family.webp"
                    alt={t("heroImageAlt")}
                    fill
                    unoptimized
                    priority
                    className="kenburns-hero object-cover"
                  />
                </div>
                {/* Sanfter Verlauf am unteren Rand fuer Tiefe. */}
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-slate-900/25 to-transparent" />

                {/* Schwebende Produkt-Badges verbinden Foto und Funktion. */}
                <div
                  className="hero-item absolute top-5 right-5 sm:top-7 sm:right-7"
                  style={{ "--hero-i": 7 } as CSSProperties}
                >
                  <div className="float-badge flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md px-4 py-2 shadow-lg text-xs sm:text-sm font-semibold text-slate-800">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {t("heroCard1")}
                  </div>
                </div>
                <div
                  className="hero-item absolute bottom-5 left-5 sm:bottom-7 sm:left-7"
                  style={{ "--hero-i": 8 } as CSSProperties}
                >
                  <div className="float-badge float-badge-2 flex items-center gap-2 rounded-full bg-slate-900/80 backdrop-blur-md px-4 py-2 shadow-lg text-xs sm:text-sm font-semibold text-white">
                    <Lock className="h-3.5 w-3.5 text-[hsl(var(--brand-accent))]" />
                    {t("heroCard2")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Moments (3 Anlässe — Vorsorge-Frame) ── */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="container">
            <div data-reveal className="text-center mb-14 max-w-3xl mx-auto">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{t("moments.label")}</p>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t("moments.title")}</h2>
              <p className="text-lg text-slate-500">{t("moments.subtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {momentDefs.map((m, i) => (
                <div key={m.key} data-reveal style={{ "--reveal-i": i } as CSSProperties} className={`card-lift rounded-3xl p-7 border ${m.border} bg-white shadow-sm hover:shadow-xl`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${m.bg}`}>
                    <m.icon className={`w-6 h-6 ${m.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{t(`moments.${m.key}.title`)}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t(`moments.${m.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="py-24 bg-slate-50">
          <div className="container">
            <div data-reveal className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{t("featuresLabel")}</p>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t("featuresTitle")}</h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto">
                {t("featuresSubtitle")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureKeys.map((f, i) => (
                <div key={f.key} data-reveal style={{ "--reveal-i": i % 3 } as CSSProperties} className="card-lift bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5 ${f.color}`}>
                    <f.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{t(`features.${f.key}.title`)}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{t(`features.${f.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ── */}
        <section id="how-it-works" className="py-24">
          <div className="container">
            <div data-reveal className="text-center mb-16">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{t("stepsLabel")}</p>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t("stepsTitle")}</h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto">{t("stepsSubtitle")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div data-reveal className="steps-line hidden md:block absolute top-10 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-0.5 rounded-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              {stepKeys.map((step, i) => (
                <div key={step.number} data-reveal style={{ "--reveal-i": i } as CSSProperties} className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-3xl bg-slate-900 text-white flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-slate-200 relative z-10 transition-transform hover:scale-105">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t(`steps.${step.key}.title`)}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm max-w-xs">{t(`steps.${step.key}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 Release Modes ── */}
        <section id="modes" className="py-24 bg-white">
          <div className="container">
            <div data-reveal className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{t("modes.label")}</p>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t("modes.title")}</h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto">
                {t("modes.subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {modesDef.map((mode, i) => {
                const Icon = mode.icon;
                const pros = t(`modes.${mode.key}.pros`).split("|");
                const cons = t(`modes.${mode.key}.cons`).split("|");
                return (
                  <div key={mode.num} data-reveal style={{ "--reveal-i": i } as CSSProperties} className="card-lift bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-xl flex flex-col">
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${mode.bg}`}>
                        <Icon className={`w-5 h-5 ${mode.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-slate-400">{mode.num}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${mode.bg} ${mode.color}`}>{t(`modes.${mode.key}.tag`)}</span>
                        </div>
                        <h3 className="font-bold text-slate-900">{t(`modes.${mode.key}.title`)}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5 flex-1">{t(`modes.${mode.key}.desc`)}</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1.5">{t("modes.prosLabel")}</p>
                        <ul className="space-y-1">
                          {pros.map(p => (
                            <li key={p} className="text-xs text-slate-600 flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" /> {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">{t("modes.consLabel")}</p>
                        <ul className="space-y-1">
                          {cons.map(c => (
                            <li key={c} className="text-xs text-slate-500 flex items-start gap-1.5">
                              <span className="text-slate-300 shrink-0 mt-0.5">&rarr;</span> {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Zero-Knowledge notice card */}
              <div data-reveal className="bg-amber-50 rounded-3xl border border-amber-200 p-7 flex flex-col justify-center">
                <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-3">{t("modes.noticeLabel")}</p>
                <p className="text-lg font-bold text-amber-900 mb-3">{t("modes.noticeTitle")}</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  {t("modes.noticeDesc1")}
                </p>
                <p className="text-sm text-amber-700 mt-3 leading-relaxed">
                  {t("modes.noticeDesc2")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Security ── */}
        <section id="security" className="py-24 bg-slate-900">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div data-reveal>
                <p className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">{t("security.label")}</p>
                <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                  {t("security.title")}
                </h2>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                  {t("security.desc")}
                </p>
                <ul className="space-y-4">
                  {t("security.items").split("|").map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div data-reveal style={{ "--reveal-i": 1 } as CSSProperties}>
                <ZeroKnowledgeDemo />
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-24 bg-white">
          <div className="container">
            <div data-reveal className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{t("pricingLabel")}</p>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{t("pricingTitle")}</h2>
              <p className="text-lg text-slate-500 max-w-xl mx-auto">{t("pricingSubtitle")}</p>

              {/* Interval Toggle (1 Jahr Default, 2 Jahre ~10% off, 3 Jahre ~15% off) */}
              <div className="inline-flex items-center gap-1 mt-8 p-1 bg-slate-100 rounded-2xl">
                {(["1year", "2years", "3years"] as PricingInterval[]).map((iv) => (
                  <button
                    key={iv}
                    onClick={() => setPricingInterval(iv)}
                    className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      pricingInterval === iv
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {iv === "1year" ? tBilling("oneYear") : iv === "2years" ? tBilling("twoYears") : tBilling("threeYears")}
                    {iv === "2years" && (
                      <span className="absolute -top-2.5 -right-1 bg-emerald-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">
                        &minus;10%
                      </span>
                    )}
                    {iv === "3years" && (
                      <span className="absolute -top-2.5 -right-1 bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full uppercase">
                        &minus;15%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div data-reveal className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {planDefs.map((plan) => {
                const price = plan[pricingInterval];
                // CHF/Mt-Aequivalent als Wert-Anker (auch fuer 1J — niemand
                // rechnet "39 / 12 = 3.25" im Kopf).
                const monthlyDivisor = pricingInterval === "1year" ? 12 : pricingInterval === "2years" ? 24 : 36;
                const monthlyEquiv = price > 0 ? (price / monthlyDivisor).toFixed(2) : null;
                const planFeatures = t(`plans.${plan.key}.features`).split("|");
                return (
                  <div
                    key={plan.name}
                    className={`relative flex flex-col rounded-3xl p-6 border transition-all ${
                      plan.highlighted
                        ? "bg-slate-900 border-slate-900 shadow-xl shadow-slate-200 scale-105"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                        {t("pricingPopular")}
                      </div>
                    )}
                    <div className="mb-5">
                      <p className={`font-bold text-lg mb-1 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>{plan.name}</p>
                      <div className="flex items-baseline gap-1">
                        <span className={`text-4xl font-black ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                          {price}
                        </span>
                        <span className="text-sm text-slate-400">
                          {pricingInterval === "1year" ? t("pricingPer1Year") : pricingInterval === "2years" ? t("pricingPer2Years") : t("pricingPer3Years")}
                        </span>
                      </div>
                      {monthlyEquiv && price > 0 && (
                        <p className={`text-xs mt-1 ${plan.highlighted ? "text-emerald-400" : "text-emerald-600"}`}>
                          {t("pricingEquiv", { amount: monthlyEquiv })}
                        </p>
                      )}
                      <p className={`text-xs mt-2 leading-relaxed ${plan.highlighted ? "text-slate-400" : "text-slate-500"}`}>{t(`plans.${plan.key}.desc`)}</p>
                    </div>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {planFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlighted ? "text-emerald-400" : "text-emerald-500"}`} />
                          <span className={plan.highlighted ? "text-slate-300" : "text-slate-600"}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <AuthLink href="/register" className="w-full">
                      <Button
                        variant={plan.highlighted ? "default" : "outline"}
                        className={`w-full rounded-xl h-11 font-semibold ${
                          plan.highlighted ? "bg-white text-slate-900 hover:bg-slate-100" : ""
                        }`}
                      >
                        {t(`plans.${plan.key}.cta`)}
                      </Button>
                    </AuthLink>
                  </div>
                );
              })}
            </div>

            <p className="text-center text-xs text-slate-400 mt-8">
              {t("pricingNote")}
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" className="py-24 bg-slate-50">
          <div className="container max-w-2xl">
            <div data-reveal className="text-center mb-14">
              <p className="text-sm font-bold uppercase tracking-widest text-primary mb-3">{t("faqLabel")}</p>
              <h2 className="text-4xl font-extrabold text-slate-900">{t("faqTitle")}</h2>
            </div>
            <Accordion data-reveal type="single" collapsible className="space-y-3">
              {faqKeys.map((key, i) => (
                <AccordionItem
                  key={key}
                  value={`item-${i}`}
                  className="bg-white rounded-2xl border border-slate-100 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline py-5">
                    {t(`faq.${key}.q`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-sm leading-relaxed pb-5">
                    {t(`faq.${key}.a`)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ── Über Heritavo ── */}
        <section id="about" className="py-24 bg-white border-t border-slate-100">
          <div data-reveal className="container max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              {t("about.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5">
              {t("about.body")}
            </p>
            <p className="text-sm text-slate-500 leading-relaxed">
              {t("about.founderLine")}
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden py-24 bg-slate-900">
          <Image
            src="/images/cta-lake.webp"
            alt=""
            aria-hidden
            fill
            unoptimized
            className="kenburns-cta object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900/60 to-slate-900/95" />
          <div data-reveal className="container text-center relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              {t("cta.titleLine1")}<br />
              <span className="text-slate-400">{t("cta.titleLine2")}</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto">
              {t("cta.desc")}
            </p>
            <AuthLink href="/register">
              <Button size="lg" className="group px-10 text-base rounded-full bg-white text-slate-900 hover:bg-slate-100 shadow-xl gap-2 font-bold transition-transform hover:scale-[1.03] active:scale-95">
                {t("cta.button")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </AuthLink>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-100 py-14 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2">
              <Link href="/" className="flex items-center space-x-2.5 mb-4">
                <Image src="/logo.svg" alt="Heritavo Logo" width={140} height={40} unoptimized className="rounded-lg" />
              </Link>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                {t("footerDesc")}
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm">{t("footerLegal")}</h3>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li><Link href="/imprint" className="hover:text-slate-900 transition-colors">{t("footer.imprint")}</Link></li>
                <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">{t("footer.privacy")}</Link></li>
                <li><Link href="/terms" className="hover:text-slate-900 transition-colors">{t("footer.terms")}</Link></li>
                <li><Link href="/press" className="hover:text-slate-900 transition-colors">{t("footer.press")}</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-sm">{t("footerContact")}</h3>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li>support@heritavo.com</li>
                <li>Tägerwilen, Schweiz</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <span>&copy; {new Date().getFullYear()} {t("footerCopyright")}</span>
            <div className="flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-slate-300" />
              <span>{t("footerMadeIn")}</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
