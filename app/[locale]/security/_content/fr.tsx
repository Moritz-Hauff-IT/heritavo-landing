import { Link } from "@/i18n/navigation";

export default function SecurityFr() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Traduction informelle.</strong> Ceci est une traduction française
        informelle de la politique allemande. En cas de divergence, la{" "}
        <Link href="/de/security" className="underline hover:text-amber-700">version allemande</Link>{" "}
        fait foi.
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Sécurité & divulgation responsable</h1>
        <p className="text-slate-600">
          Heritavo gère des données sensibles selon un modèle zero-knowledge. Les
          signalements de sécurité sont notre priorité absolue. Cette page décrit
          comment signaler une faille et à quoi tu peux t'attendre de notre part.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Comment signaler un problème</h2>
        <p className="text-slate-600">
          De préférence par e-mail à{" "}
          <a href="mailto:security@heritavo.com" className="underline hover:text-slate-900">
            security@heritavo.com
          </a>
          . Si ce canal n'est pas accessible, tu peux aussi nous joindre à{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>
          .
        </p>
        <p className="text-slate-600">
          Version lisible par machine de cette politique :{" "}
          <a href="/.well-known/security.txt" className="underline hover:text-slate-900">
            /.well-known/security.txt
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Ce qu'il faut inclure dans ton signalement</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>Une brève description de la vulnérabilité et du composant affecté.</li>
          <li>Étapes de reproduction (requête/réponse, URL, ID de compte le cas échéant).</li>
          <li>Évaluation de l'impact et conditions requises pour l'attaquant.</li>
          <li>Optionnel : une suggestion de correction.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Ce que nous nous engageons à faire</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>Nous confirmons la réception dans les 72 heures.</li>
          <li>Nous fournissons un premier point sous 7 jours.</li>
          <li>
            Nous ne poursuivrons pas judiciairement les chercheurs qui agissent de
            bonne foi, respectent cette politique et n'exfiltrent pas de données
            utilisateur réelles.
          </li>
          <li>
            Sur demande, nous te créditons dans un Hall of Fame public dès que la
            faille est corrigée.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Ce que nous demandons</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            N'utilise pas de techniques destructrices (DoS, manipulation de données,
            création massive de comptes) — si tu as besoin d'une preuve, crée ton
            propre compte de test.
          </li>
          <li>
            N'accède pas aux données d'autres utilisateurs. Si tu peux atteindre des
            données réelles, arrête immédiatement et signale-le.
          </li>
          <li>
            Ne divulgue la vulnérabilité qu'après correction ou après 90 jours — le
            premier des deux.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Périmètre</h2>
        <p className="text-slate-600">
          Sont dans le périmètre tous les hôtes exploités par Heritavo sous{" "}
          <code>heritavo.com</code>. Les autres domaines Heritavo (par ex.{" "}
          <code>heritavo.ch</code>, <code>heritavo.de</code>) sont de simples
          redirections vers <code>heritavo.com</code> et n'ont pas de périmètre
          propre. Sont hors périmètre les tiers liés, les pures signalisations de
          spam/phishing et les résultats de scanners automatisés sans impact concret.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Modèle zero-knowledge</h2>
        <p className="text-slate-600">
          Heritavo chiffre le contenu du coffre-fort côté client avant l'upload. Le
          serveur n'a pas accès à la clé maîtresse. Même une fuite complète de la
          base ne donne à un attaquant aucun accès aux données déchiffrées du
          coffre-fort — à condition que le mot de passe utilisateur soit suffisamment
          fort pour résister à un brute-force Argon2id. Les findings qui rompent cet
          invariant sont traités avec la plus haute priorité.
        </p>
      </section>

      <p className="text-xs text-slate-400">Version : mai 2026</p>
    </main>
  );
}
