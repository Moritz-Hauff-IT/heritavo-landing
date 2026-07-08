import { Link } from "@/i18n/navigation";

export default function TermsIt() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 text-slate-600">
      <h1 className="text-3xl font-semibold text-slate-900">Condizioni generali (CG)</h1>

      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Traduzione informale.</strong> Questa è una traduzione italiana
        informale delle condizioni generali tedesche. In caso di divergenza o
        controversia, la{" "}
        <Link href="/de/terms" className="underline hover:text-amber-700">versione tedesca</Link>{" "}
        è giuridicamente vincolante.
      </div>

      <p className="text-sm leading-relaxed">
        Le presenti condizioni generali disciplinano l'utilizzo del servizio SaaS
        Heritavo (il «Servizio»), gestito da Moritz Hauff IT, Okenfinerstrasse 2C,
        8274 Tägerwilen, Svizzera (il «Fornitore»). Con la registrazione l'utente
        accetta le presenti condizioni.
      </p>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Oggetto del contratto</h2>
        <p className="text-sm leading-relaxed">
          Il Fornitore mette a disposizione dell'utente un servizio basato sul web
          per la conservazione cifrata di patrimoni digitali nonché per la loro
          trasmissione automatizzata in caso di emergenza. Il Servizio è prestato
          esclusivamente come Software-as-a-Service (SaaS); l'utente non acquisisce
          alcun diritto di cessione di software.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. Piani di abbonamento e prezzi</h2>
        <p className="text-sm leading-relaxed">
          Il Servizio è offerto secondo i seguenti piani (prezzi in CHF, comprese
          eventuali imposte):
        </p>
        <div className="overflow-x-auto">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">Piano</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">1 anno</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">2 anni</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">3 anni</th>
                <th className="text-left py-2 font-semibold text-slate-800">Prestazioni essenziali</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 pr-4 font-medium">Free</td>
                <td className="py-2 pr-4">CHF 0</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">1 utente, 10 voci, 1 contatto di emergenza</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Light</td>
                <td className="py-2 pr-4">CHF 19</td>
                <td className="py-2 pr-4">CHF 34</td>
                <td className="py-2 pr-4">CHF 49</td>
                <td className="py-2">1 utente, 50 voci, 1 contatto di emergenza, allegati</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Pro</td>
                <td className="py-2 pr-4">CHF 39</td>
                <td className="py-2 pr-4">CHF 70</td>
                <td className="py-2 pr-4">CHF 99</td>
                <td className="py-2">1 utente, 200 voci, 3 contatti di emergenza, allegati & priorità</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Couple</td>
                <td className="py-2 pr-4">CHF 59</td>
                <td className="py-2 pr-4">CHF 106</td>
                <td className="py-2 pr-4">CHF 150</td>
                <td className="py-2">2 utenti, 200 voci, 5 contatti di emergenza, supporto prioritario</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Family</td>
                <td className="py-2 pr-4">CHF 89</td>
                <td className="py-2 pr-4">CHF 160</td>
                <td className="py-2 pr-4">CHF 227</td>
                <td className="py-2">5 utenti, 400 voci, 8 contatti di emergenza, supporto prioritario</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          Il piano Free non è limitato nel tempo; il Fornitore si riserva il diritto
          di adeguarne le funzionalità o le condizioni con un preavviso ragionevole.
        </p>
      </section>

      {/* 2a */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2a. Superamento dei limiti del piano</h2>
        <p className="text-sm leading-relaxed">
          Ogni piano definisce limiti massimi concreti (numero di voci, allegati,
          video-eredità, contatti di emergenza, utenti per nucleo). Qualora tali
          limiti vengano superati — ad esempio in seguito a un successivo declassamento
          a un piano inferiore — l'account è considerato <strong>oltre la quota</strong>.
          I dati esistenti restano in ogni caso invariati e consultabili.
        </p>
        <p className="text-sm leading-relaxed">
          Mentre un account è oltre la quota, <strong>le nuove azioni di scrittura
          sono bloccate</strong> (creazione di nuove voci, caricamento di ulteriori
          allegati, invito di ulteriori utenti). La lettura, la cancellazione e la
          gestione dei declassamenti restano integralmente possibili. Il rilascio di
          emergenza verso le persone di fiducia (trustee release) continua a
          funzionare in ogni caso — è esentato da questa restrizione.
        </p>
        <p className="text-sm leading-relaxed">
          Il Fornitore <strong>si riserva il diritto</strong>, in caso di superamento
          sproporzionatamente prolungato dei limiti del piano, di restringere un
          account utente secondo la seguente procedura graduale:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li><strong>Giorno 0:</strong> avviso nella dashboard e via e-mail; le scritture nelle aree interessate sono bloccate.</li>
          <li><strong>Giorni 14 e 30:</strong> e-mail di sollecito con la richiesta di consolidare le voci o di adeguare il piano.</li>
          <li><strong>Giorno 90:</strong> in caso di superamento persistente, l'account è impostato in <strong>sola lettura</strong>. Lettura e rilascio di emergenza restano disponibili; tutte le altre azioni sono bloccate in modo permanente finché persiste il superamento.</li>
          <li><strong>Dopo il giorno 90, senza risposta a tentativi ragionevoli di contatto:</strong> il Fornitore si riserva il diritto di cancellare definitivamente l'account previo preavviso scritto con un termine ragionevole. La cancellazione si applica conformemente alle disposizioni sulla cancellazione dell'account (cfr. punto 4).</li>
        </ul>
        <p className="text-sm leading-relaxed">
          L'impostazione in sola lettura ed un'eventuale cancellazione dell'account
          sono annunciate con almeno 14 giorni di anticipo via e-mail all'indirizzo
          registrato. La ripresa del funzionamento illimitato avviene automaticamente
          non appena i limiti del piano sono nuovamente rispettati — sia mediante
          consolidamento dei dati sia mediante passaggio a un piano adeguato.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Condizioni di pagamento</h2>
        <p className="text-sm leading-relaxed">
          I piani a pagamento sono fatturati anticipatamente come importo unico per
          la durata scelta (1, 2 o 3 anni). Il pagamento avviene tramite il prestatore
          di servizi di pagamento Stripe, Inc. L'importo viene addebitato
          automaticamente sul mezzo di pagamento registrato. In caso di mora, il
          Fornitore si riserva il diritto di sospendere l'accesso al Servizio fino al
          saldo dell'importo dovuto.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Disdetta</h2>
        <p className="text-sm leading-relaxed">
          L'abbonamento può essere disdetto in qualsiasi momento dall'account utente.
          La disdetta impedisce il rinnovo automatico; l'abbonamento resta attivo
          fino al termine della durata pagata. Non è previsto alcun rimborso
          proporzionale degli importi già versati. Il Fornitore può sospendere o
          cancellare l'account utente senza preavviso in caso di grave violazione
          delle presenti condizioni.
        </p>
        <p className="text-sm leading-relaxed">
          Prima della disdetta, il Fornitore raccomanda vivamente di scaricare un
          export cifrato dei dati del vault, poiché tutti i dati sono cancellati in
          modo irreversibile dopo la disdetta.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. Obblighi dell'utente</h2>
        <ul className="list-disc list-inside text-sm space-y-1.5 leading-relaxed">
          <li>L'utente è personalmente responsabile della sicurezza della propria password e della chiave di recupero.</li>
          <li>L'utente non deve utilizzare il Servizio per scopi illeciti.</li>
          <li>L'utente garantisce che i dati da lui archiviati non ledono diritti di terzi.</li>
          <li>L'utente mantiene aggiornati i recapiti registrati nell'account.</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Disponibilità e manutenzione</h2>
        <p className="text-sm leading-relaxed">
          Il Fornitore si impegna a garantire un'elevata disponibilità del Servizio
          (disponibilità target: 99 % in media mensile) ma non assume alcuna garanzia
          di disponibilità ininterrotta. Gli interventi di manutenzione pianificati
          sono annunciati con anticipo per quanto possibile.
        </p>
      </section>

      {/* 6a */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6a. Durata minima di esercizio degli abbonamenti pagati</h2>
        <p className="text-sm leading-relaxed">
          Il Fornitore si impegna a mantenere il Servizio per l'intera durata di un
          abbonamento prepagato dall'utente. Chi acquista un abbonamento con durata di
          uno (1), due (2) o tre (3) anni vanta un diritto contrattuale alla
          prestazione del Servizio per l'intero periodo prepagato.
        </p>
        <p className="text-sm leading-relaxed">
          Qualora il Fornitore cessi il Servizio prima della scadenza del periodo
          prepagato per motivi economici o strategici a lui imputabili, egli si
          impegna a:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li>comunicare per iscritto la cessazione con un preavviso di almeno novanta (90) giorni all'indirizzo e-mail registrato;</li>
          <li>mantenere disponibile la funzione di export dei dati cifrati del vault per l'intera durata del preavviso;</li>
          <li>rimborsare la quota non utilizzata dell'abbonamento, calcolata pro rata temporis sulla durata prepagata residua.</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Questa garanzia non si applica in caso di forza maggiore, ordini delle
          autorità, insolvenza o altre circostanze non imputabili al Fornitore. In
          tali casi il Fornitore si adopererà in buona fede per consentire agli
          utenti un export ordinato dei dati entro un termine ragionevole.
        </p>
        <p className="text-sm leading-relaxed">
          Una cessazione del piano Free gratuito non è espressamente coperta da
          questa disposizione ed è disciplinata dal punto 2, ultimo capoverso.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Limitazione di responsabilità</h2>
        <p className="text-sm leading-relaxed">
          Il Fornitore risponde soltanto dei danni causati da colpa grave o dolo. È
          esclusa qualsiasi responsabilità per colpa lieve nonché per danni indiretti,
          danni consequenziali e mancato guadagno, nella misura consentita dalla
          legge. Poiché il Servizio utilizza un'architettura zero-knowledge, è
          tecnicamente impossibile per il Fornitore accedere ai contenuti del vault o
          recuperare chiavi perse.
        </p>
        <p className="text-sm leading-relaxed">
          La responsabilità complessiva del Fornitore è limitata alle commissioni di
          abbonamento effettivamente pagate dall'utente negli ultimi 12 mesi.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Protezione dei dati</h2>
        <p className="text-sm leading-relaxed">
          Il trattamento dei dati personali è disciplinato dalla nostra{" "}
          <Link href="/privacy" className="underline hover:text-slate-900">informativa sulla privacy</Link>.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">9. Modifiche delle CG</h2>
        <p className="text-sm leading-relaxed">
          Il Fornitore si riserva il diritto di modificare le presenti CG con un
          preavviso di 30 giorni via e-mail. Se l'utente non si oppone entro tale
          termine, le nuove CG si considerano accettate. In caso di opposizione,
          all'utente spetta il diritto di disdetta straordinaria.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">10. Diritto applicabile e foro competente</h2>
        <p className="text-sm leading-relaxed">
          Si applica esclusivamente il diritto svizzero. Foro competente per tutte
          le controversie derivanti o connesse al presente contratto è il Cantone
          di Turgovia, Svizzera, salvo che disposizioni di legge imperative
          stabiliscano un altro foro.
        </p>
      </section>

      <p className="text-xs text-slate-400">Versione: 22 maggio 2026</p>
    </main>
  );
}
