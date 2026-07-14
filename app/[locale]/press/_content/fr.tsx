import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher";

const FACTS: [string, string][] = [
  ["Produit", "Coffre-fort zero-knowledge pour l'héritage numérique (SaaS)"],
  ["Siège", "Tägerwilen (Thurgovie), Suisse"],
  ["Fondateur", "Moritz Hauff"],
  ["Hébergement", "Suisse"],
  ["Langues", "allemand, anglais, français, italien"],
  ["Tarifs", "gratuit à CHF 89/an (Family, 5 personnes) ; Pro CHF 39/an"],
  ["Méthodes de transmission", "Recovery sheet (hors ligne), code d'accès par e-mail, code d'accès imprimé"],
  ["Site web", "heritavo.com"],
];

const ANGLES: [string, string][] = [
  [
    "Exclus au pire moment",
    "En cas de décès ou de maladie grave, la plupart des familles se retrouvent exclues des comptes de leur proche — de l'e-banking aux archives photos.",
  ],
  [
    "Une confiance devenue inutile",
    "Le chiffrement zero-knowledge signifie que le prestataire est techniquement incapable de lire les données de ses clients. À quoi ressemble la confiance quand on n'en a plus besoin ?",
  ],
  [
    "Bien plus que le décès",
    "La prévoyance numérique ne concerne pas que le décès : démence, accident ou hospitalisation rendent un accès organisé tout aussi nécessaire.",
  ],
  [
    "Fonctionne aussi hors ligne",
    "Toutes les méthodes de transmission fonctionnent hors ligne — la remise réussit même si le service venait à disparaître un jour.",
  ],
];

const LOGOS: { file: string; name: string; square?: boolean }[] = [
  { file: "/logo.svg", name: "Logo (SVG)" },
  { file: "/logo.png", name: "Logo (PNG)" },
  { file: "/logo-square.png", name: "Logo carré (PNG)", square: true },
];

export default function PressFr() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/fr" className="flex items-center space-x-2.5" aria-label="Heritavo">
            <Image src="/logo.svg" alt="Heritavo Logo" width={160} height={48} unoptimized priority />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-6 py-20 space-y-14">
        <header className="space-y-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Presse & médias</p>
          <h1 className="text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Parler de Heritavo
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Présentation, fiche d&apos;information, logos et un contact direct avec le
            fondateur. Pour une interview, un entretien de fond ou un compte de test,
            contactez-nous à tout moment — nous répondons en général sous un jour ouvrable.
          </p>
          <div className="flex justify-center pt-2">
            <div className="h-1 w-16 bg-primary/30 rounded-full" />
          </div>
        </header>

        <section className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm space-y-3">
          <h2 className="text-xl font-bold text-slate-900">À propos de Heritavo</h2>
          <p className="text-sm text-slate-500">
            Présentation — peut être reprise telle quelle :
          </p>
          <blockquote className="rounded-xl bg-slate-50 border border-slate-100 p-5 text-slate-700 leading-relaxed">
            Heritavo est un service en ligne suisse dédié à la prévoyance numérique et à
            l&apos;héritage numérique. Mots de passe, documents et messages personnels sont
            stockés avec un chiffrement de bout en bout — de sorte que même Heritavo ne
            peut pas les lire — puis transmis automatiquement et discrètement aux personnes
            de confiance désignées, le moment venu. Le service est hébergé en Suisse et
            disponible en allemand, anglais, français et italien.
          </blockquote>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Fiche d&apos;information</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Angles d&apos;articles</h2>
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
          <h2 className="text-xl font-bold text-slate-900">Logos & visuels</h2>
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
            Captures d&apos;écran du produit et photo du fondateur disponibles sur demande
            en haute résolution.
          </p>
        </section>

        <section className="rounded-3xl bg-slate-900 p-10 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Contact presse</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Moritz Hauff, fondateur — interviews, entretiens de fond et comptes de test.
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
