import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";

const FACTS: [string, string][] = [
  ["Prodotto", "Cassaforte zero-knowledge per l'eredità digitale (SaaS)"],
  ["Sede", "Tägerwilen (Turgovia), Svizzera"],
  ["Fondatore", "Moritz Hauff"],
  ["Hosting", "Svizzera"],
  ["Lingue", "tedesco, inglese, francese, italiano"],
  ["Prezzi", "gratuito fino a CHF 89/anno (Family, 5 persone); Pro CHF 39/anno"],
  ["Metodi di consegna", "Recovery sheet (offline), codice di accesso via e-mail, codice di accesso stampato"],
  ["Sito web", "heritavo.com"],
];

const ANGLES: [string, string][] = [
  [
    "Esclusi nel momento peggiore",
    "In caso di decesso o malattia grave, la maggior parte delle famiglie resta esclusa dagli account del proprio caro — dall'e-banking all'archivio fotografico.",
  ],
  [
    "Fiducia che non serve più",
    "Crittografia zero-knowledge significa che il fornitore è tecnicamente incapace di leggere i dati dei propri clienti. Che aspetto ha la fiducia quando non serve più?",
  ],
  [
    "Non solo il decesso",
    "La previdenza digitale non riguarda solo il decesso: demenza, incidenti o un ricovero rendono altrettanto necessario un accesso ordinato.",
  ],
  [
    "Decifrabile offline",
    "La notifica d'emergenza arriva via e-mail — ma il pacchetto di dati consegnato è autonomo: i familiari lo decifrano localmente nel browser, senza connessione internet e senza che Heritavo debba ancora esistere.",
  ],
];

const LOGOS: { file: string; name: string; square?: boolean }[] = [
  { file: "/logo.svg", name: "Logo (SVG)" },
  { file: "/logo.png", name: "Logo (PNG)" },
  { file: "/logo-square.png", name: "Logo quadrato (PNG)", square: true },
];

export default function PressIt() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/it" className="flex items-center space-x-2.5" aria-label="Heritavo">
            <Image src="/logo.svg" alt="Heritavo Logo" width={160} height={48} unoptimized priority />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-6 py-20 space-y-14">
        <header className="space-y-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Stampa & media</p>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Raccontare Heritavo
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Presentazione, scheda informativa, loghi e un contatto diretto con il
            fondatore. Per interviste, colloqui di approfondimento o account di prova,
            scriveteci in qualsiasi momento — di norma rispondiamo entro un giorno
            lavorativo.
          </p>
          <div className="flex justify-center pt-2">
            <div className="h-1 w-16 bg-primary/30 rounded-full" />
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900">Su Heritavo</h2>
          <p className="text-sm text-slate-500">
            Presentazione — può essere ripresa integralmente:
          </p>
          <blockquote className="rounded-xl bg-slate-50 border border-slate-100 p-5 text-slate-700 leading-relaxed">
            Heritavo è un servizio online svizzero per la previdenza digitale e
            l&apos;eredità digitale. Password, documenti e messaggi personali vengono
            salvati con crittografia end-to-end — in modo che nemmeno Heritavo stessa possa
            leggerli — e consegnati automaticamente e con discrezione alle persone di
            fiducia designate, quando arriva il momento. Il servizio è ospitato in Svizzera
            ed è disponibile in tedesco, inglese, francese e italiano.
          </blockquote>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Scheda informativa</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Spunti per articoli</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Loghi & materiale visivo</h2>
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
            Screenshot del prodotto e foto del fondatore disponibili su richiesta in alta
            risoluzione.
          </p>
        </section>

        <section className="rounded-3xl bg-slate-900 p-10 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Contatto stampa</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Moritz Hauff, fondatore — interviste, approfondimenti e account di prova.
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
