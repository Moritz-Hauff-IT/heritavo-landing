import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";

const FACTS: [string, string][] = [
  ["Product", "Zero-knowledge vault for digital legacy planning (SaaS)"],
  ["Headquarters", "Tägerwilen (Thurgau), Switzerland"],
  ["Founder", "Moritz Hauff"],
  ["Hosting", "Switzerland"],
  ["Languages", "German, English, French, Italian"],
  ["Pricing", "Free to CHF 89/year (Family, 5 people); Pro CHF 39/year"],
  ["Release methods", "Recovery sheet (offline), access code by email, printed access code"],
  ["Website", "heritavo.com"],
];

const ANGLES: [string, string][] = [
  [
    "Locked out when it matters",
    "When someone dies or falls seriously ill, most families are locked out of their relative's accounts — from online banking to the photo archive.",
  ],
  [
    "Trust you don't need",
    "Zero-knowledge encryption means the provider is technically unable to read its customers' data. What does trust look like when you don't need any?",
  ],
  [
    "More than the worst case",
    "Digital estate planning is not just about death: dementia, accidents or a hospital stay make orderly access just as necessary.",
  ],
  [
    "Decryptable offline",
    "The emergency notification arrives by email — but the handed-over data package is self-contained: recipients decrypt it locally in their browser, with no internet connection and without Heritavo needing to still exist.",
  ],
];

const LOGOS: { file: string; name: string; square?: boolean }[] = [
  { file: "/logo.svg", name: "Logo (SVG)" },
  { file: "/logo.png", name: "Logo (PNG)" },
  { file: "/logo-square.png", name: "Square logo (PNG)", square: true },
];

export default function PressEn() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/en" className="flex items-center space-x-2.5" aria-label="Heritavo">
            <Image src="/logo.svg" alt="Heritavo Logo" width={160} height={48} unoptimized priority />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-6 py-20 space-y-14">
        <header className="space-y-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Press & Media</p>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Covering Heritavo
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Boilerplate, fact sheet, logos and a direct line to the founder. For interviews,
            background conversations or test accounts, get in touch any time — we usually
            reply within one business day.
          </p>
          <div className="flex justify-center pt-2">
            <div className="h-1 w-16 bg-primary/30 rounded-full" />
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900">About Heritavo</h2>
          <p className="text-sm text-slate-500">
            Boilerplate — may be reproduced verbatim:
          </p>
          <blockquote className="rounded-xl bg-slate-50 border border-slate-100 p-5 text-slate-700 leading-relaxed">
            Heritavo is a Swiss online service for digital legacy and emergency planning.
            Passwords, documents and personal messages are stored with end-to-end
            encryption — in a way that not even Heritavo itself can read them — and are
            handed over automatically and discreetly to designated trusted contacts when
            the time comes. The service is hosted in Switzerland and available in German,
            English, French and Italian.
          </blockquote>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Fact sheet</h2>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm divide-y divide-slate-100 overflow-hidden">
            {FACTS.map(([label, value]) => (
              <div key={label} className="grid sm:grid-cols-[220px_1fr] gap-1 px-6 py-3.5">
                <div className="text-sm font-semibold text-slate-900">{label}</div>
                <div className="text-sm text-slate-600">{value}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Story angles</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {ANGLES.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-2">
                <h3 className="font-bold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Logos & assets</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {LOGOS.map((logo) => (
              <a
                key={logo.file}
                href={logo.file}
                download
                className="group flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
              >
                <span className="flex h-16 items-center justify-center">
                  <Image
                    src={logo.file}
                    alt={logo.name}
                    width={logo.square ? 56 : 120}
                    height={logo.square ? 56 : 36}
                    unoptimized
                  />
                </span>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  {logo.name} <span aria-hidden>↓</span>
                </span>
              </a>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Product screenshots and a founder photo are available on request in print
            resolution.
          </p>
        </section>

        <section className="rounded-3xl bg-slate-900 p-10 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Press contact</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Moritz Hauff, founder — for interviews, background conversations and test
            accounts.
          </p>
          <a
            href="mailto:presse@heritavo.com"
            className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors"
          >
            presse@heritavo.com
          </a>
        </section>
      </main>
    </>
  );
}
