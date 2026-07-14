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

export default function PressIt() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Stampa & media</h1>
        <p className="text-slate-600">
          Tutto ciò che serve ai giornalisti per raccontare Heritavo: presentazione, scheda
          informativa, loghi e un contatto diretto con il fondatore. Per interviste,
          colloqui di approfondimento o account di prova, scriveteci in qualsiasi momento —
          di norma rispondiamo entro un giorno lavorativo.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Su Heritavo (presentazione)</h2>
        <p className="text-slate-600">Il testo seguente può essere ripreso integralmente:</p>
        <blockquote className="border-l-2 border-slate-200 pl-4 text-slate-600">
          Heritavo è un servizio online svizzero per la previdenza digitale e
          l&apos;eredità digitale. Password, documenti e messaggi personali vengono salvati
          con crittografia end-to-end — in modo che nemmeno Heritavo stessa possa leggerli —
          e consegnati automaticamente e con discrezione alle persone di fiducia designate,
          quando arriva il momento. Il servizio è ospitato in Svizzera ed è disponibile in
          tedesco, inglese, francese e italiano.
        </blockquote>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Scheda informativa</h2>
        <table className="w-full text-sm">
          <tbody>
            {FACTS.map(([label, value]) => (
              <tr key={label} className="border-b border-slate-100">
                <td className="py-2 pr-4 font-medium text-slate-900 align-top whitespace-nowrap">{label}</td>
                <td className="py-2 text-slate-600">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Spunti per articoli</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            In caso di decesso o malattia grave, la maggior parte delle famiglie resta
            esclusa dagli account del proprio caro — dall&apos;e-banking all&apos;archivio
            fotografico.
          </li>
          <li>
            Crittografia zero-knowledge significa che il fornitore è tecnicamente incapace
            di leggere i dati dei propri clienti. Che aspetto ha la fiducia quando non
            serve più?
          </li>
          <li>
            La previdenza digitale non riguarda solo il decesso: demenza, incidenti o un
            ricovero rendono altrettanto necessario un accesso ordinato.
          </li>
          <li>
            Tutti i metodi di consegna funzionano offline — il passaggio riesce anche se un
            giorno il servizio non esistesse più.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Loghi & materiale visivo</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            <a href="/logo.svg" download className="underline hover:text-slate-900">Logo (SVG)</a>
          </li>
          <li>
            <a href="/logo.png" download className="underline hover:text-slate-900">Logo (PNG)</a>
          </li>
          <li>
            <a href="/logo-square.png" download className="underline hover:text-slate-900">Logo quadrato (PNG)</a>
          </li>
        </ul>
        <p className="text-slate-600">
          Screenshot del prodotto e foto del fondatore disponibili su richiesta in alta
          risoluzione.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Contatto stampa</h2>
        <p className="text-slate-600">
          Moritz Hauff, fondatore —{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>{" "}
          (indicare «stampa» nell&apos;oggetto).
        </p>
      </section>
    </main>
  );
}
