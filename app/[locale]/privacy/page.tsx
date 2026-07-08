import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – Heritavo",
  description: "Datenschutzerklärung von Heritavo: Wie wir personenbezogene Daten verarbeiten, welche Cookies wir einsetzen und welche Rechte Sie haben.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 text-slate-600">
      <h1 className="text-3xl font-semibold text-slate-900">Datenschutzerklärung</h1>

      <p className="text-sm leading-relaxed">
        Diese Datenschutzerklärung gilt für den Dienst Heritavo unter <strong>heritavo.com</strong>,
        betrieben von Moritz Hauff IT, Okenfinerstrasse 2C, 8274 Tägerwilen, Schweiz
        («wir», «uns»). Sie informiert darüber, welche personenbezogenen Daten wir erheben,
        zu welchem Zweck und auf welcher Rechtsgrundlage wir sie verarbeiten sowie welche
        Rechte Ihnen zustehen. Es gelten das schweizerische Datenschutzgesetz (DSG) sowie –
        soweit anwendbar – die EU-Datenschutz-Grundverordnung (DSGVO).
      </p>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Verantwortlicher</h2>
        <p className="text-sm leading-relaxed">
          Moritz Hauff IT<br />
          Moritz Hauff<br />
          Okenfinerstrasse 2C, 8274 Tägerwilen, Schweiz<br />
          E-Mail: <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">support@heritavo.com</a>
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. Erhobene Daten und Verarbeitungszwecke</h2>

        <h3 className="font-semibold text-slate-800">2.1 Registrierung und Nutzerkonto</h3>
        <p className="text-sm leading-relaxed">
          Bei der Registrierung erheben wir Ihre E-Mail-Adresse sowie einen
          kryptografisch abgeleiteten Authentifizierungs-Hash (nie das Klartextpasswort).
          Optional können Sie einen Vornamen für die Mail-Anrede angeben — dieses Feld
          ist nicht erforderlich und kann jederzeit in den Einstellungen geändert oder
          gelöscht werden. Diese Daten werden verwendet, um Ihr Konto anzulegen, Sie
          zu authentifizieren und Ihnen Benachrichtigungen zu senden. Rechtsgrundlage:
          Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO / Art. 31 DSG).
        </p>
        <p className="text-sm leading-relaxed">
          Im Rahmen der Registrierung dokumentieren wir zudem Ihre ausdrückliche
          Zustimmung zu diesen AGB und dieser Datenschutzerklärung in einem
          revisionssicheren Einwilligungsprotokoll (Datum, Quelle, gehashte IP,
          User-Agent). Dieses Protokoll dient ausschliesslich dem Nachweis der
          Einwilligung gegenüber Aufsichtsbehörden (Art. 7 Abs. 1 DSGVO) und wird
          drei Jahre nach Kontolöschung entfernt.
        </p>

        <h3 className="font-semibold text-slate-800">2.2 Verschlüsselte Vault-Inhalte</h3>
        <p className="text-sm leading-relaxed">
          Alle von Ihnen im Vault abgelegten Daten (Einträge, Anhänge, Botschaften) werden
          ausschliesslich in Ihrem Browser mit AES-256-GCM verschlüsselt. Wir speichern
          nur den verschlüsselten Ciphertext. Ein inhaltlicher Zugriff durch uns ist
          technisch ausgeschlossen (Zero-Knowledge-Architektur).
        </p>

        <h3 className="font-semibold text-slate-800">2.3 Zahlungsdaten</h3>
        <p className="text-sm leading-relaxed">
          Zahlungen werden über <strong>Stripe, Inc.</strong> (Irland/USA) abgewickelt.
          Kreditkartendaten gelangen nie auf unsere Server. Stripe verarbeitet Ihre
          Zahlungsdaten auf Grundlage der Stripe-Datenschutzrichtlinie und agiert als
          eigenständig Verantwortlicher. Wir erhalten von Stripe lediglich eine
          Transaktions-ID und den Abonnementstatus.
          Stripe-Datenschutz: <a href="https://stripe.com/de/privacy" className="underline hover:text-slate-900" target="_blank" rel="noopener noreferrer">stripe.com/de/privacy</a>.
        </p>

        <h3 className="font-semibold text-slate-800">2.4 Transaktionale E-Mail-Kommunikation</h3>
        <p className="text-sm leading-relaxed">
          Wir versenden transaktionale E-Mails (E-Mail-Verifizierung bei Registrierung,
          2-Faktor-Authentifizierung, Check-in-Erinnerungen, Notfallbenachrichtigungen,
          Zahlungsstatus). Der Versand erfolgt über unseren selbst betriebenen
          Mailserver auf Infrastruktur in der Schweiz. Es wird kein externer
          E-Mail-Dienstleister eingesetzt. Rechtsgrundlage: Vertragserfüllung bzw.
          berechtigtes Interesse an Diensteverfügbarkeit.
        </p>

        <h3 className="font-semibold text-slate-800">2.5 Newsletter (optional)</h3>
        <p className="text-sm leading-relaxed">
          Sofern Sie bei der Registrierung oder in den Einstellungen ausdrücklich
          eingewilligt haben, senden wir Ihnen gelegentlich Updates und Tipps zu
          Heritavo per E-Mail. Die Anmeldung erfolgt im{" "}
          <strong>Double-Opt-In-Verfahren</strong>: Nach dem Anhaken der Checkbox
          erhalten Sie eine separate Bestätigungs-Mail; erst nach Klick auf den
          darin enthaltenen Link beginnt der Versand. Sie können die Einwilligung
          jederzeit über den Abmelde-Link in jeder Newsletter-Mail oder in den
          Konto-Einstellungen widerrufen — ohne nachteilige Folgen für Ihren
          sonstigen Heritavo-Vertrag. Versand erfolgt ausschliesslich über unseren
          eigenen Mailserver in der Schweiz; es wird kein externer Newsletter-Dienst
          eingesetzt. Rechtsgrundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
        </p>

        <h3 className="font-semibold text-slate-800">2.6 Server-Logs</h3>
        <p className="text-sm leading-relaxed">
          Unser Hosting-Anbieter erhebt automatisch Server-Logfiles (IP-Adresse, Zeitstempel,
          aufgerufene URL, HTTP-Statuscode, übertragene Datenmenge). Diese Daten dienen
          ausschliesslich der Sicherheit und Stabilität des Dienstes und werden nach 30 Tagen
          gelöscht. Rechtsgrundlage: berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO).
        </p>

      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Cookies und lokale Speicherung</h2>
        <p className="text-sm leading-relaxed">
          Heritavo setzt folgende Cookies und Web-Storage-Technologien ein:
        </p>
        <div className="overflow-x-auto">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">Name / Typ</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">Zweck</th>
                <th className="text-left py-2 font-semibold text-slate-800">Kategorie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">session (Cookie)</td>
                <td className="py-2 pr-4">Aufrechterhaltung der Anmeldesitzung</td>
                <td className="py-2">Technisch notwendig</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">localStorage (Browser)</td>
                <td className="py-2 pr-4">Temporäre Zwischenspeicherung der Cookie-Einwilligung</td>
                <td className="py-2">Technisch notwendig</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Stripe-Cookies</td>
                <td className="py-2 pr-4">Zahlungsabwicklung und Betrugsprävention (Stripe, Inc.)</td>
                <td className="py-2">Notwendig für Vertragserfüllung</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          Es werden keine Tracking-, Analyse- oder Werbe-Cookies eingesetzt.
          Technisch notwendige Cookies können nicht abgelehnt werden, da der Dienst ohne
          sie nicht funktioniert.
        </p>
      </section>

      {/* 3b: Reichweitenmessung (Umami) */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3a. Reichweitenmessung (Umami Analytics)</h2>
        <p className="text-sm leading-relaxed">
          Zur Optimierung unseres Angebots erfassen wir aggregierte Reichweiten-Statistiken
          mit <strong>Umami Analytics</strong>. Umami wird von uns selbst auf unserem
          Schweizer Infrastruktur-Cluster betrieben — es findet keine Datenübertragung an
          Dritte (insbesondere nicht an Google, USA o.ä.) statt.
        </p>
        <p className="text-sm leading-relaxed">
          Umami verwendet <strong>keine Cookies</strong> und kein Browser-Fingerprinting.
          Erfasst werden ausschliesslich aggregierte, nicht personenbezogene Daten:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li>aufgerufene Seite (URL ohne Query-Parameter mit personenbezogenen Inhalten),</li>
          <li>Verweis-URL (z.B. Suchmaschine),</li>
          <li>anonymisiertes Land der IP-Adresse (kein Speichern der IP selbst),</li>
          <li>Browser- und Betriebssystem-Familie, Bildschirmgrösse (Kategorie),</li>
          <li>Zeitpunkt des Aufrufs.</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Eine Identifikation einzelner Nutzer ist <strong>nicht möglich</strong>. Umami erzeugt
          intern einen täglich rotierenden, gehashten Tages-Identifier aus IP + User-Agent +
          Domain + Salt — dieser ist nicht reversibel und wird nach dem Tageswechsel
          aussagelos. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          an statistischer Reichweitenmessung ohne Personenbezug) bzw. Art. 31 DSG.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Weitergabe an Dritte</h2>
        <p className="text-sm leading-relaxed">
          Eine Weitergabe personenbezogener Daten erfolgt nur:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li>an Stripe, Inc. zur Zahlungsabwicklung (Auftragsverarbeitungsvertrag gemäss Art. 28 DSGVO),</li>
          <li>an unseren Hosting-Anbieter Infomaniak Network SA (Kubernetes, S3 Object Storage — Server in der Schweiz),</li>
          <li>wenn gesetzlich vorgeschrieben oder zur Geltendmachung von Rechtsansprüchen.</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Eine Weitergabe zu Werbezwecken oder an sonstige Dritte findet nicht statt.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. Datenspeicherung, Löschung und Kontolaufzeit</h2>
        <p className="text-sm leading-relaxed">
          Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen
          Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li>
            <strong>Selbst-Kündigung:</strong> Sie können Ihr Konto jederzeit in den
            Einstellungen des Dashboards unter «Konto löschen» sofort und vollständig löschen.
            Alle Daten (Vault-Inhalte, Kontakte, Anhänge, Audit-Logs) werden dabei unwiderruflich
            entfernt, einschliesslich aller in Infomaniak S3 gespeicherten Dateien.
          </li>
          <li>
            <strong>Kündigung über Stripe:</strong> Nach Kündigung eines bezahlten Abonnements
            bleiben Daten bis zum Ende des Abrechnungszeitraums bestehen. Danach wird das
            Konto auf den Free-Plan zurückgestuft; Inhalte bleiben erhalten, sofern sie den
            Free-Plan-Limits entsprechen.
          </li>
          <li>
            <strong>Einwilligungs-Protokoll:</strong> Einträge im Consent-Log werden drei
            Jahre nach Kontolöschung entfernt. Während dieser Frist dienen sie ausschliesslich
            dem Nachweis der Einwilligung gegenüber Aufsichtsbehörden.
          </li>
          <li>
            <strong>Löschanfrage per E-Mail:</strong> Bei Anfragen per E-Mail (z.B. nach dem
            Tod eines Nutzers) löschen wir Daten innerhalb von 30 Tagen, sofern die Identität
            nachgewiesen wurde.
          </li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Ihre Rechte</h2>
        <p className="text-sm leading-relaxed">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
          Verarbeitung und Datenübertragbarkeit. Das Recht auf Löschung können Sie direkt
          über die Funktion «Konto löschen» in Ihren Einstellungen ausüben.
          Sofern die DSGVO anwendbar ist, haben Sie zudem das Recht, der Verarbeitung
          zu widersprechen. Zur Ausübung weiterer Rechte wenden Sie sich an{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">support@heritavo.com</a>.
          Sie haben ausserdem das Recht, bei der zuständigen Datenschutzbehörde Beschwerde
          einzureichen (Schweiz: Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter,
          EDÖB).
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Datensicherheit</h2>
        <p className="text-sm leading-relaxed">
          Heritavo verwendet eine End-to-End-Zero-Knowledge-Architektur. Alle Inhalte
          werden clientseitig mit AES-256-GCM verschlüsselt; der Schlüssel wird nie
          übertragen. Die Verbindung zwischen Browser und Server ist durchgehend per
          TLS verschlüsselt (HTTPS, HSTS).
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Änderungen dieser Erklärung</h2>
        <p className="text-sm leading-relaxed">
          Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die
          jeweils aktuelle Version ist auf dieser Seite abrufbar. Bei wesentlichen
          Änderungen werden registrierte Nutzer per E-Mail informiert.
        </p>
      </section>

      <p className="text-xs text-slate-400">Stand: Mai 2026</p>
    </main>
  );
}
