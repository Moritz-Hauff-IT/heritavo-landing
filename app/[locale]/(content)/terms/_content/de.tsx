import { Link } from "@/i18n/navigation";

export default function TermsDe() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 text-slate-600">
      <h1 className="text-3xl font-semibold text-slate-900">Allgemeine Geschäftsbedingungen (AGB)</h1>

      <p className="text-sm leading-relaxed">
        Diese Allgemeinen Geschäftsbedingungen regeln die Nutzung des SaaS-Dienstes
        Heritavo («Dienst»), betrieben von Moritz Hauff IT, Okenfinerstrasse 2C,
        8274 Tägerwilen, Schweiz («Anbieter»). Mit der Registrierung akzeptiert der
        Nutzer diese AGB.
      </p>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Vertragsgegenstand</h2>
        <p className="text-sm leading-relaxed">
          Der Anbieter stellt dem Nutzer einen webbasierten Dienst zur verschlüsselten
          Ablage digitaler Nachlässe sowie zur automatisierten Weitergabe im Ernstfall
          zur Verfügung. Der Dienst wird ausschliesslich als Software-as-a-Service (SaaS)
          erbracht; der Nutzer erhält kein Recht auf Überlassung von Software.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. Abonnementpläne und Preise</h2>
        <p className="text-sm leading-relaxed">
          Der Dienst wird in den folgenden Plänen angeboten (Preise in CHF, inkl. allfälliger
          Steuern):
        </p>
        <div className="overflow-x-auto">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">Plan</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">1 Jahr</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">2 Jahre</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">3 Jahre</th>
                <th className="text-left py-2 font-semibold text-slate-800">Wesentliche Leistungen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 pr-4 font-medium">Free</td>
                <td className="py-2 pr-4">CHF 0</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">1 Nutzer, 10 Einträge, 1 Notfallkontakt</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Light</td>
                <td className="py-2 pr-4">CHF 19</td>
                <td className="py-2 pr-4">CHF 34</td>
                <td className="py-2 pr-4">CHF 49</td>
                <td className="py-2">1 Nutzer, 50 Einträge, 1 Notfallkontakt, Anhänge</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Pro</td>
                <td className="py-2 pr-4">CHF 39</td>
                <td className="py-2 pr-4">CHF 70</td>
                <td className="py-2 pr-4">CHF 99</td>
                <td className="py-2">1 Nutzer, 200 Einträge, 3 Notfallkontakte, Anhänge & Priorität</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Couple</td>
                <td className="py-2 pr-4">CHF 59</td>
                <td className="py-2 pr-4">CHF 106</td>
                <td className="py-2 pr-4">CHF 150</td>
                <td className="py-2">2 Nutzer, 200 Einträge, 5 Notfallkontakte, Priorisierter Support</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Family</td>
                <td className="py-2 pr-4">CHF 89</td>
                <td className="py-2 pr-4">CHF 160</td>
                <td className="py-2 pr-4">CHF 227</td>
                <td className="py-2">5 Nutzer, 400 Einträge, 8 Notfallkontakte, Priorisierter Support</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          Der Free-Plan ist zeitlich nicht begrenzt; der Anbieter behält sich vor,
          Funktionsumfang oder Bedingungen mit angemessener Vorankündigung anzupassen.
        </p>
      </section>

      {/* 2a — Plan-Limit-Überschreitung */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2a. Überschreitung von Plan-Limits</h2>
        <p className="text-sm leading-relaxed">
          Jeder Plan definiert konkrete Obergrenzen (Anzahl Einträge, Anhänge, Vermächtnis-Videos,
          Notfallkontakte, Nutzer pro Haushalt). Werden diese Obergrenzen — beispielsweise durch
          ein nachträgliches Downgrade auf einen kleineren Plan — überschritten, gilt das Konto
          als <strong>über Quota</strong>. Bestehende Daten bleiben in jedem Fall unverändert
          erhalten und einsehbar.
        </p>
        <p className="text-sm leading-relaxed">
          Während ein Konto über Quota ist, sind <strong>neue schreibende Aktionen blockiert</strong>
          (Anlegen neuer Einträge, Hochladen weiterer Anhänge, Einladen weiterer Nutzer). Lesen,
          Löschen und Downgrade-Verwaltung bleiben uneingeschränkt möglich. Die Notfallfreigabe
          gegenüber Vertrauenspersonen (Trustee-Release) funktioniert in jedem Fall weiter — sie
          ist von dieser Einschränkung ausgenommen.
        </p>
        <p className="text-sm leading-relaxed">
          Der Anbieter <strong>behält sich vor</strong>, ein Nutzerkonto bei unverhältnismäßig
          langer Überschreitung der Plan-Limits nach folgendem abgestuftem Verfahren einzuschränken:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li><strong>Tag 0:</strong> Hinweis im Dashboard und per E-Mail; Schreibvorgänge in betroffenen Bereichen sind blockiert.</li>
          <li><strong>Tag 14 und 30:</strong> Erinnerungs-E-Mails mit der Aufforderung, entweder Einträge zu konsolidieren oder den Plan anzupassen.</li>
          <li><strong>Tag 90:</strong> Bei weiterhin bestehender Überschreitung wird das Konto auf <strong>Read-Only</strong> gesetzt. Lesen und Notfallfreigabe bleiben verfügbar; alle anderen Aktionen sind dauerhaft blockiert, solange die Überschreitung besteht.</li>
          <li><strong>Nach Tag 90, ohne Reaktion auf zumutbare Kontaktversuche:</strong> Der Anbieter behält sich vor, das Konto nach schriftlicher Vorwarnung mit angemessener Frist endgültig zu löschen. Die Löschung gilt im Sinne der Bestimmungen zur Kontolöschung (siehe Ziffer 4).</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Die Read-Only-Schaltung und eine etwaige Kontolöschung werden mindestens 14 Tage im
          Voraus per E-Mail an die hinterlegte Adresse angekündigt. Eine Wiederaufnahme des
          uneingeschränkten Betriebs erfolgt automatisch, sobald die Plan-Grenzen wieder eingehalten
          werden — entweder durch Konsolidierung der Daten oder durch Upgrade auf einen passenden Plan.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Zahlungsbedingungen</h2>
        <p className="text-sm leading-relaxed">
          Kostenpflichtige Pläne werden für die gewählte Laufzeit (1, 2 oder 3 Jahre)
          jeweils im Voraus als Einmalbetrag abgerechnet. Die Zahlung erfolgt über den
          Zahlungsdienstleister Stripe, Inc. Der Betrag wird automatisch vom
          hinterlegten Zahlungsmittel abgebucht. Bei Zahlungsverzug behält sich der
          Anbieter vor, den Zugriff auf den Dienst zu sperren, bis der ausstehende
          Betrag beglichen ist.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Kündigung</h2>
        <p className="text-sm leading-relaxed">
          Das Abonnement kann jederzeit im Nutzerkonto gekündigt werden. Die Kündigung
          verhindert die automatische Verlängerung; das Abo bleibt bis zum Ende der
          bezahlten Laufzeit aktiv. Eine anteilige Erstattung bereits bezahlter Beträge
          erfolgt nicht. Der Anbieter kann das Nutzerkonto bei schwerem Verstoss gegen
          diese AGB fristlos sperren oder löschen.
        </p>
        <p className="text-sm leading-relaxed">
          Vor Kündigung empfiehlt der Anbieter dringend, einen verschlüsselten Export
          der Vault-Daten herunterzuladen, da nach Kündigung alle Daten unwiderruflich
          gelöscht werden.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. Pflichten des Nutzers</h2>
        <ul className="list-disc list-inside text-sm space-y-1.5 leading-relaxed">
          <li>Der Nutzer ist für die Sicherheit seines Passworts und Recovery Keys selbst verantwortlich.</li>
          <li>Der Nutzer darf den Dienst nicht für rechtswidrige Zwecke nutzen.</li>
          <li>Der Nutzer stellt sicher, dass die von ihm hinterlegten Daten keine Rechte Dritter verletzen.</li>
          <li>Der Nutzer hält die Kontaktangaben im Konto aktuell.</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Verfügbarkeit und Wartung</h2>
        <p className="text-sm leading-relaxed">
          Der Anbieter bemüht sich um eine hohe Verfügbarkeit des Dienstes (angestrebte
          Verfügbarkeit: 99 % im Monatsmittel), übernimmt jedoch keine Garantie für
          eine ununterbrochene Verfügbarkeit. Geplante Wartungsarbeiten werden nach
          Möglichkeit rechtzeitig angekündigt.
        </p>
      </section>

      {/* 6a — Mindestbetriebsdauer */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6a. Mindestbetriebsdauer bezahlter Abonnemente</h2>
        <p className="text-sm leading-relaxed">
          Der Anbieter verpflichtet sich, den Dienst für die gesamte Dauer eines vom
          Nutzer vorausbezahlten Abonnements aufrechtzuerhalten. Wer ein Abonnement
          mit einer Laufzeit von einem (1), zwei (2) oder drei (3) Jahren erwirbt, hat
          einen vertraglichen Anspruch auf die Erbringung des Dienstes über den gesamten
          vorausbezahlten Zeitraum.
        </p>
        <p className="text-sm leading-relaxed">
          Sollte der Anbieter den Dienst aus eigenen wirtschaftlichen oder strategischen
          Gründen vor Ablauf der vorausbezahlten Laufzeit einstellen, verpflichtet er
          sich:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li>zu einer schriftlichen Ankündigung der Einstellung mit einer Vorlaufzeit
            von mindestens neunzig (90) Tagen an die hinterlegte E-Mail-Adresse;</li>
          <li>zur Bereitstellung der Export-Funktion für die verschlüsselten Vault-Daten
            während der gesamten Ankündigungsfrist;</li>
          <li>zur anteiligen Rückerstattung des nicht genutzten Abonnement-Anteils,
            berechnet pro rata temporis auf die verbleibende vorausbezahlte Laufzeit.</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Diese Zusicherung gilt nicht im Falle höherer Gewalt, behördlicher
          Anordnungen, Insolvenz oder anderer Umstände, die der Anbieter nicht zu
          vertreten hat. In diesen Fällen wird sich der Anbieter nach Treu und Glauben
          bemühen, den Nutzern einen geordneten Daten-Export innerhalb einer
          angemessenen Frist zu ermöglichen.
        </p>
        <p className="text-sm leading-relaxed">
          Eine Einstellung des kostenlosen Free-Plans ist von dieser Bestimmung
          ausdrücklich nicht erfasst und richtet sich nach Ziffer 2 letzter Absatz.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Haftungsbeschränkung</h2>
        <p className="text-sm leading-relaxed">
          Der Anbieter haftet nur für Schäden, die durch grobe Fahrlässigkeit oder
          Vorsatz verursacht wurden. Für leichte Fahrlässigkeit sowie für mittelbare
          Schäden, Folgeschäden und entgangenen Gewinn wird jede Haftung ausgeschlossen,
          soweit gesetzlich zulässig. Da der Dienst eine Zero-Knowledge-Architektur
          verwendet, ist es dem Anbieter technisch unmöglich, auf die Inhalte des Vaults
          zuzugreifen oder verlorene Schlüssel wiederherzustellen.
        </p>
        <p className="text-sm leading-relaxed">
          Die Gesamthaftung des Anbieters ist auf die vom Nutzer in den letzten 12 Monaten
          tatsächlich bezahlten Abonnementgebühren beschränkt.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Datenschutz</h2>
        <p className="text-sm leading-relaxed">
          Die Verarbeitung personenbezogener Daten richtet sich nach unserer{" "}
          <Link href="/privacy" className="underline hover:text-slate-900">Datenschutzerklärung</Link>.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">9. Änderungen der AGB</h2>
        <p className="text-sm leading-relaxed">
          Der Anbieter behält sich vor, diese AGB mit einer Ankündigungsfrist von
          30 Tagen per E-Mail zu ändern. Widerspricht der Nutzer nicht innerhalb dieser
          Frist, gelten die neuen AGB als akzeptiert. Bei Widerspruch steht dem Nutzer
          das Recht zur ausserordentlichen Kündigung zu.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">10. Anwendbares Recht und Gerichtsstand</h2>
        <p className="text-sm leading-relaxed">
          Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand für alle
          Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist
          Kanton Thurgau, Schweiz, sofern keine zwingenden gesetzlichen Vorschriften
          einen anderen Gerichtsstand bestimmen.
        </p>
      </section>

      <p className="text-xs text-slate-400">Stand: 22. Mai 2026</p>
    </main>
  );
}
