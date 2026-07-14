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

export default function PressDe() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Presse & Medien</h1>
        <p className="text-slate-600">
          Hier finden Journalistinnen und Journalisten alles für die Berichterstattung über
          Heritavo: Kurzbeschreibung, Factsheet, Logos und den direkten Draht zum Gründer.
          Für Interviews, Hintergrundgespräche oder Testzugänge melde dich jederzeit — wir
          antworten in der Regel innerhalb eines Werktags.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Über Heritavo (Boilerplate)</h2>
        <p className="text-slate-600">
          Der folgende Text darf unverändert übernommen werden:
        </p>
        <blockquote className="border-l-2 border-slate-200 pl-4 text-slate-600">
          Heritavo ist ein Schweizer Online-Dienst für die digitale Nachlass- und
          Notfallvorsorge. Passwörter, Dokumente und persönliche Nachrichten werden
          Ende-zu-Ende verschlüsselt gespeichert — so, dass nicht einmal Heritavo selbst sie
          lesen kann — und im Ernstfall automatisch und diskret an zuvor bestimmte
          Vertrauenspersonen übergeben. Der Dienst wird in der Schweiz gehostet und ist auf
          Deutsch, Englisch, Französisch und Italienisch verfügbar.
        </blockquote>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Factsheet</h2>
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
        <h2 className="font-semibold text-slate-900">Worüber sich zu schreiben lohnt</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            Die meisten Familien sind im Todesfall oder bei schwerer Krankheit von den Konten
            der Angehörigen ausgesperrt — vom E-Banking bis zum Foto-Archiv.
          </li>
          <li>
            Zero-Knowledge-Verschlüsselung heisst: Der Anbieter kann die Daten seiner
            Kundschaft technisch nicht lesen. Wie funktioniert Vertrauen, das man nicht
            braucht?
          </li>
          <li>
            Digitale Vorsorge betrifft nicht nur den Todesfall: Demenz, Unfall oder ein
            Spitalaufenthalt machen den geregelten Zugriff genauso nötig.
          </li>
          <li>
            Alle Freigabe-Methoden funktionieren offline — die Übergabe klappt auch, wenn es
            den Dienst eines Tages nicht mehr gäbe.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Logos & Bildmaterial</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            <a href="/logo.svg" download className="underline hover:text-slate-900">Logo (SVG)</a>
          </li>
          <li>
            <a href="/logo.png" download className="underline hover:text-slate-900">Logo (PNG)</a>
          </li>
          <li>
            <a href="/logo-square.png" download className="underline hover:text-slate-900">Logo quadratisch (PNG)</a>
          </li>
        </ul>
        <p className="text-slate-600">
          Produkt-Screenshots und ein Gründerfoto stellen wir auf Anfrage in Druckauflösung
          bereit.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Pressekontakt</h2>
        <p className="text-slate-600">
          Moritz Hauff, Gründer —{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>{" "}
          (Stichwort «Presse» im Betreff).
        </p>
      </section>
    </main>
  );
}
