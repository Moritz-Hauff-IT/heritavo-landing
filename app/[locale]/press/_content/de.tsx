import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";

const FACTS: [string, string][] = [
  ["Produkt", "Zero-Knowledge-Tresor für den digitalen Nachlass (SaaS)"],
  ["Sitz", "Tägerwilen (Thurgau), Schweiz"],
  ["Gründer", "Moritz Hauff"],
  ["Hosting", "Schweiz"],
  ["Sprachen", "Deutsch, Englisch, Französisch, Italienisch"],
  ["Preise", "Kostenlos bis CHF 89/Jahr (Family, 5 Personen); Pro CHF 39/Jahr"],
  ["Freigabe-Methoden", "Recovery Sheet (offline), Zugangscode per E-Mail, Zugangscode ausgedruckt"],
  ["Website", "heritavo.com"],
];

const ANGLES: [string, string][] = [
  [
    "Ausgesperrt im Ernstfall",
    "Die meisten Familien sind im Todesfall oder bei schwerer Krankheit von den Konten der Angehörigen ausgesperrt — vom E-Banking bis zum Foto-Archiv.",
  ],
  [
    "Vertrauen, das man nicht braucht",
    "Zero-Knowledge-Verschlüsselung heisst: Der Anbieter kann die Daten seiner Kundschaft technisch nicht lesen. Wie funktioniert Vertrauen, das man nicht braucht?",
  ],
  [
    "Mehr als der Todesfall",
    "Digitale Vorsorge betrifft nicht nur den Todesfall: Demenz, Unfall oder ein Spitalaufenthalt machen den geregelten Zugriff genauso nötig.",
  ],
  [
    "Offline entschlüsselbar",
    "Die Benachrichtigung im Ernstfall kommt per E-Mail — das übergebene Datenpaket selbst ist aber eigenständig: Angehörige entschlüsseln es lokal im Browser, ohne Internetverbindung und ohne dass es Heritavo dafür noch braucht.",
  ],
];

const LOGOS: { file: string; name: string; square?: boolean }[] = [
  { file: "/logo.svg", name: "Logo (SVG)" },
  { file: "/logo.png", name: "Logo (PNG)" },
  { file: "/logo-square.png", name: "Logo quadratisch (PNG)", square: true },
];

export default function PressDe() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/de" className="flex items-center space-x-2.5" aria-label="Heritavo">
            <Image src="/logo.svg" alt="Heritavo Logo" width={160} height={48} unoptimized priority />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-6 py-20 space-y-14">
        <header className="space-y-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Presse & Medien</p>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Heritavo für die Berichterstattung
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Kurzbeschreibung, Factsheet, Logos und der direkte Draht zum Gründer. Für
            Interviews, Hintergrundgespräche oder Testzugänge melde dich jederzeit — wir
            antworten in der Regel innerhalb eines Werktags.
          </p>
          <div className="flex justify-center pt-2">
            <div className="h-1 w-16 bg-primary/30 rounded-full" />
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900">Über Heritavo</h2>
          <p className="text-sm text-slate-500">
            Boilerplate — darf unverändert übernommen werden:
          </p>
          <blockquote className="rounded-xl bg-slate-50 border border-slate-100 p-5 text-slate-700 leading-relaxed">
            Heritavo ist ein Schweizer Online-Dienst für die digitale Nachlass- und
            Notfallvorsorge. Passwörter, Dokumente und persönliche Nachrichten werden
            Ende-zu-Ende verschlüsselt gespeichert — so, dass nicht einmal Heritavo selbst
            sie lesen kann — und im Ernstfall automatisch und diskret an zuvor bestimmte
            Vertrauenspersonen übergeben. Der Dienst wird in der Schweiz gehostet und ist
            auf Deutsch, Englisch, Französisch und Italienisch verfügbar.
          </blockquote>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Factsheet</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Worüber sich zu schreiben lohnt</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Logos & Bildmaterial</h2>
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
            Produkt-Screenshots und ein Gründerfoto stellen wir auf Anfrage in
            Druckauflösung bereit.
          </p>
        </section>

        <section className="rounded-3xl bg-slate-900 p-10 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Pressekontakt</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Moritz Hauff, Gründer — für Interviews, Hintergrundgespräche und Testzugänge.
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
