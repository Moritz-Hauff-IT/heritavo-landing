import { Link } from "@/i18n/navigation";

export default function SecurityIt() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Traduzione informale.</strong> Questa è una traduzione italiana
        informale della policy tedesca. In caso di divergenza, la{" "}
        <Link href="/de/security" className="underline hover:text-amber-700">versione tedesca</Link>{" "}
        è vincolante.
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Sicurezza & divulgazione responsabile</h1>
        <p className="text-slate-600">
          Heritavo gestisce dati sensibili secondo un modello zero-knowledge. Le
          segnalazioni di sicurezza hanno per noi la massima priorità. Questa pagina
          descrive come puoi segnalare una vulnerabilità e cosa puoi aspettarti dalla
          nostra gestione.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Come segnalare problemi</h2>
        <p className="text-slate-600">
          Preferibilmente via e-mail a{" "}
          <a href="mailto:security@heritavo.com" className="underline hover:text-slate-900">
            security@heritavo.com
          </a>
          . Se questo canale non è raggiungibile, ci raggiungi anche all'indirizzo{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>
          .
        </p>
        <p className="text-slate-600">
          Versione leggibile da macchina di questa policy:{" "}
          <a href="/.well-known/security.txt" className="underline hover:text-slate-900">
            /.well-known/security.txt
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Cosa includere nella segnalazione</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>Una breve descrizione della vulnerabilità e del componente interessato.</li>
          <li>Passi di riproduzione (richiesta/risposta, URL, ID account se applicabile).</li>
          <li>Valutazione dell'impatto e prerequisiti necessari a un attaccante.</li>
          <li>Opzionale: una proposta di correzione.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Cosa garantiamo</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>Confermiamo la ricezione entro 72 ore.</li>
          <li>Forniamo un primo aggiornamento di stato entro 7 giorni.</li>
          <li>
            Non intraprenderemo azioni legali contro ricercatori che agiscono in
            buona fede, rispettano questa policy e non esfiltrano dati utente reali.
          </li>
          <li>
            Su richiesta ti citiamo in una Hall of Fame pubblica non appena la falla
            è risolta.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Cosa ti chiediamo</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            Non utilizzare tecniche distruttive (DoS, manipolazione di dati,
            creazione massiva di account) — se hai bisogno di una prova, crea un tuo
            account di test.
          </li>
          <li>
            Non accedere a dati di altri utenti. Se puoi raggiungere dati reali,
            fermati subito e segnalalo.
          </li>
          <li>
            Divulga la vulnerabilità solo dopo la correzione o dopo 90 giorni — a
            seconda di quale eventualità si verifichi prima.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Perimetro</h2>
        <p className="text-slate-600">
          Sono nel perimetro tutti gli host gestiti da Heritavo sotto{" "}
          <code>heritavo.com</code>. Altri domini Heritavo (es.{" "}
          <code>heritavo.ch</code>, <code>heritavo.de</code>) sono semplici redirect
          verso <code>heritavo.com</code> e non hanno un perimetro proprio. Sono
          fuori perimetro terze parti collegate, semplici segnalazioni di
          spam/phishing e risultati di scanner automatici senza impatto concreto.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Modello zero-knowledge</h2>
        <p className="text-slate-600">
          Heritavo cifra i contenuti del vault lato client prima dell'upload. Il
          server non ha accesso alla chiave master. Anche un leak completo del
          database non dà a un attaccante alcun accesso ai dati del vault decifrati
          — a condizione che la password utente sia abbastanza forte da resistere
          al brute-force Argon2id. Le segnalazioni che violano questo invariante
          vengono trattate con la massima priorità.
        </p>
      </section>

      <p className="text-xs text-slate-400">Versione: maggio 2026</p>
    </main>
  );
}
