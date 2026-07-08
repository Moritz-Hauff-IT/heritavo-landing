import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum – Heritavo",
  description: "Impressum von Heritavo (Moritz Hauff IT): Angaben zum Betreiber, Handelsregistereintrag und Kontakt.",
  robots: { index: true, follow: true },
};

export default function ImprintPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16">
      <h1 className="text-3xl font-semibold">Impressum</h1>

      <section className="space-y-1">
        <h2 className="font-semibold text-slate-900">Anbieter</h2>
        <p className="text-slate-600">
          Moritz Hauff IT<br />
          Einzelunternehmen<br />
          Okenfinerstrasse 2C<br />
          8274 Tägerwilen<br />
          Schweiz
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-semibold text-slate-900">Vertreten durch</h2>
        <p className="text-slate-600">Moritz Hauff</p>
      </section>

      <section className="space-y-1">
        <h2 className="font-semibold text-slate-900">Handelsregister</h2>
        <p className="text-slate-600">
          Handelsregisteramt des Kantons Thurgau<br />
          UID: CHE-327.341.932
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-semibold text-slate-900">Kontakt</h2>
        <p className="text-slate-600">
          E-Mail:{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-semibold text-slate-900">Verantwortlich für den Inhalt</h2>
        <p className="text-slate-600">Moritz Hauff, Okenfinerstrasse 2C, 8274 Tägerwilen</p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Haftungsausschluss</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Die Inhalte dieser Website wurden mit grösster Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
          Für externe Links wird keine Verantwortung übernommen; massgebend ist ausschliesslich
          der Inhalt der verlinkten Seiten zum Zeitpunkt des Abrufens.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Urheberrecht</h2>
        <p className="text-slate-600 text-sm leading-relaxed">
          Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen dem schweizerischen
          Urheberrecht. Jede Art der Vervielfältigung, Bearbeitung, Verbreitung oder Verwertung
          ausserhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung von
          Moritz Hauff IT.
        </p>
      </section>

      <p className="text-xs text-slate-400">Stand: Mai 2026</p>
    </main>
  );
}
