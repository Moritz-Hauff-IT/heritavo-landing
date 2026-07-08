export default function SecurityDe() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Security & Responsible Disclosure</h1>
        <p className="text-slate-600">
          Heritavo verwaltet sensible Daten unter einem Zero-Knowledge-Modell. Sicherheits­meldungen
          haben für uns höchste Priorität. Diese Seite beschreibt, wie du eine Schwachstelle
          melden kannst und welche Erwartungen du an unseren Umgang stellen darfst.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Wie du Probleme meldest</h2>
        <p className="text-slate-600">
          Bevorzugt per E-Mail an{" "}
          <a href="mailto:security@heritavo.com" className="underline hover:text-slate-900">
            security@heritavo.com
          </a>
          . Falls dieser Kanal nicht erreichbar ist, erreichst du uns auch unter{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>
          .
        </p>
        <p className="text-slate-600">
          Maschinenlesbare Fassung dieser Policy:{" "}
          <a href="/.well-known/security.txt" className="underline hover:text-slate-900">
            /.well-known/security.txt
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Was du in deine Meldung packen solltest</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>Eine kurze Beschreibung der Schwachstelle und der betroffenen Komponente.</li>
          <li>Reproduktionsschritte (Request/Response, URL, ggf. Account-ID falls anwendbar).</li>
          <li>Einschätzung des Impacts und welche Vorbedingungen ein Angreifer braucht.</li>
          <li>Optional: einen Vorschlag zur Behebung.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Was wir zusichern</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>Wir bestätigen den Eingang innerhalb von 72 Stunden.</li>
          <li>Wir geben einen ersten Status-Update innerhalb von 7 Tagen.</li>
          <li>
            Wir verfolgen keine rechtlichen Schritte gegen Forschende, die in gutem Glauben handeln,
            sich an diese Policy halten und keine echten User-Daten exfiltrieren.
          </li>
          <li>
            Wir nennen dich auf Wunsch in einer öffentlichen Hall-of-Fame, sobald die Lücke behoben
            ist.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Was wir bitten</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            Verwende keine destruktiven Techniken (DoS, Datenmanipulation, Massenanlage von
            Accounts) — wenn du Beweisbedarf hast, lege dir einen eigenen Test-Account an.
          </li>
          <li>
            Greife nicht auf fremde User-Daten zu. Wenn du an reale Daten kommen kannst, stoppe
            sofort und melde es.
          </li>
          <li>
            Veröffentliche die Schwachstelle erst nach Behebung oder nach 90 Tagen — je nachdem
            was zuerst eintritt.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Scope</h2>
        <p className="text-slate-600">
          Im Scope liegen alle Heritavo-betriebenen Hosts unter <code>heritavo.com</code>. Andere
          Heritavo-Domains (z. B. <code>heritavo.ch</code>, <code>heritavo.de</code>) sind reine
          Weiterleitungen auf <code>heritavo.com</code> und haben keinen eigenen Scope. Out of
          Scope sind verlinkte Drittanbieter, reine Spam-/Phishing-Reports und automatisierte
          Scanner-Findings ohne konkreten Impact.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Zero-Knowledge-Modell</h2>
        <p className="text-slate-600">
          Heritavo verschlüsselt Vault-Inhalte client-seitig vor Upload. Der Server hat keinen
          Zugriff auf den Master-Key. Selbst ein vollständiger DB-Leak gibt einem Angreifer keinen
          Zugriff auf entschlüsselte Vault-Daten — vorausgesetzt das User-Passwort ist stark genug,
          um Argon2id-Bruteforce zu widerstehen. Findings, die diese Invariante brechen, behandeln
          wir mit höchster Priorität.
        </p>
      </section>

      <p className="text-xs text-slate-400">Stand: Mai 2026</p>
    </main>
  );
}
