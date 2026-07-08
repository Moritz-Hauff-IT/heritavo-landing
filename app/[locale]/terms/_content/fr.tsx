import { Link } from "@/i18n/navigation";

export default function TermsFr() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 text-slate-600">
      <h1 className="text-3xl font-semibold text-slate-900">Conditions générales de vente (CGV)</h1>

      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Traduction informelle.</strong> Ceci est une traduction française
        informelle des conditions générales allemandes. En cas de divergence ou de
        litige, la{" "}
        <Link href="/de/terms" className="underline hover:text-amber-700">version allemande</Link>{" "}
        fait juridiquement foi.
      </div>

      <p className="text-sm leading-relaxed">
        Les présentes conditions générales régissent l'utilisation du service SaaS
        Heritavo (le « Service »), exploité par Moritz Hauff IT, Okenfinerstrasse 2C,
        8274 Tägerwilen, Suisse (le « Fournisseur »). En s'inscrivant, l'utilisateur
        accepte les présentes conditions.
      </p>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Objet du contrat</h2>
        <p className="text-sm leading-relaxed">
          Le Fournisseur met à la disposition de l'utilisateur un service en ligne
          permettant le stockage chiffré de successions numériques ainsi que leur
          transmission automatisée en cas d'urgence. Le Service est fourni
          exclusivement sous forme de Software-as-a-Service (SaaS) ; l'utilisateur
          n'acquiert aucun droit de cession sur un logiciel.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. Plans d'abonnement et tarifs</h2>
        <p className="text-sm leading-relaxed">
          Le Service est proposé selon les plans suivants (prix en CHF, taxes
          éventuelles incluses) :
        </p>
        <div className="overflow-x-auto">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">Plan</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">1 an</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">2 ans</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">3 ans</th>
                <th className="text-left py-2 font-semibold text-slate-800">Prestations principales</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 pr-4 font-medium">Free</td>
                <td className="py-2 pr-4">CHF 0</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">1 utilisateur, 10 entrées, 1 contact d'urgence</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Light</td>
                <td className="py-2 pr-4">CHF 19</td>
                <td className="py-2 pr-4">CHF 34</td>
                <td className="py-2 pr-4">CHF 49</td>
                <td className="py-2">1 utilisateur, 50 entrées, 1 contact d'urgence, pièces jointes</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Pro</td>
                <td className="py-2 pr-4">CHF 39</td>
                <td className="py-2 pr-4">CHF 70</td>
                <td className="py-2 pr-4">CHF 99</td>
                <td className="py-2">1 utilisateur, 200 entrées, 3 contacts d'urgence, pièces jointes & priorité</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Couple</td>
                <td className="py-2 pr-4">CHF 59</td>
                <td className="py-2 pr-4">CHF 106</td>
                <td className="py-2 pr-4">CHF 150</td>
                <td className="py-2">2 utilisateurs, 200 entrées, 5 contacts d'urgence, support prioritaire</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Family</td>
                <td className="py-2 pr-4">CHF 89</td>
                <td className="py-2 pr-4">CHF 160</td>
                <td className="py-2 pr-4">CHF 227</td>
                <td className="py-2">5 utilisateurs, 400 entrées, 8 contacts d'urgence, support prioritaire</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          Le plan Free n'est pas limité dans le temps ; le Fournisseur se réserve le
          droit d'en adapter les fonctionnalités ou les conditions moyennant un
          préavis raisonnable.
        </p>
      </section>

      {/* 2a */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2a. Dépassement des limites du plan</h2>
        <p className="text-sm leading-relaxed">
          Chaque plan définit des plafonds précis (nombre d'entrées, pièces jointes,
          vidéos d'héritage, contacts d'urgence, utilisateurs par foyer). Lorsque ces
          plafonds sont dépassés — par exemple à la suite d'un déclassement ultérieur
          vers un plan inférieur — le compte est considéré comme étant{" "}
          <strong>au-delà du quota</strong>. Les données existantes sont en tout cas
          conservées telles quelles et restent consultables.
        </p>
        <p className="text-sm leading-relaxed">
          Tant qu'un compte se trouve au-delà du quota, <strong>les nouvelles actions
          d'écriture sont bloquées</strong> (création de nouvelles entrées, téléversement
          de pièces jointes supplémentaires, invitation d'utilisateurs supplémentaires).
          La consultation, la suppression et la gestion des déclassements demeurent
          intégralement possibles. La libération d'urgence vers les personnes de
          confiance (trustee release) continue de fonctionner en tout cas — elle est
          exemptée de cette restriction.
        </p>
        <p className="text-sm leading-relaxed">
          Le Fournisseur <strong>se réserve le droit</strong>, en cas de dépassement
          disproportionné et prolongé des limites du plan, de restreindre un compte
          utilisateur selon la procédure graduée suivante :
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li><strong>Jour 0 :</strong> notification dans le tableau de bord et par e-mail ; les écritures dans les zones concernées sont bloquées.</li>
          <li><strong>Jours 14 et 30 :</strong> e-mails de rappel invitant à consolider les entrées ou à adapter le plan.</li>
          <li><strong>Jour 90 :</strong> si le dépassement persiste, le compte est placé en <strong>lecture seule</strong>. La consultation et la libération d'urgence restent disponibles ; toutes les autres actions sont bloquées de manière permanente tant que le dépassement persiste.</li>
          <li><strong>Après le jour 90, sans réponse aux tentatives raisonnables de contact :</strong> le Fournisseur se réserve le droit de supprimer définitivement le compte après préavis écrit avec un délai raisonnable. La suppression s'applique conformément aux dispositions relatives à la suppression de compte (cf. point 4).</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Le passage en lecture seule et la suppression éventuelle du compte sont
          annoncés au moins 14 jours à l'avance par e-mail à l'adresse enregistrée. La
          reprise d'une exploitation sans restriction intervient automatiquement dès
          que les limites du plan sont à nouveau respectées — soit par consolidation
          des données, soit par passage à un plan adapté.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Modalités de paiement</h2>
        <p className="text-sm leading-relaxed">
          Les plans payants sont facturés à l'avance, en un seul versement, pour la
          durée choisie (1, 2 ou 3 ans). Le paiement est traité par le prestataire de
          services de paiement Stripe, Inc. Le montant est automatiquement débité du
          moyen de paiement enregistré. En cas de défaut de paiement, le Fournisseur
          se réserve le droit de suspendre l'accès au Service jusqu'au règlement du
          montant dû.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Résiliation</h2>
        <p className="text-sm leading-relaxed">
          L'abonnement peut être résilié à tout moment depuis le compte utilisateur.
          La résiliation empêche le renouvellement automatique ; l'abonnement reste
          actif jusqu'à la fin de la durée payée. Aucun remboursement proportionnel
          des montants déjà versés n'est effectué. Le Fournisseur peut suspendre ou
          supprimer le compte utilisateur sans préavis en cas de violation grave des
          présentes conditions.
        </p>
        <p className="text-sm leading-relaxed">
          Avant la résiliation, le Fournisseur recommande vivement de télécharger un
          export chiffré des données du coffre-fort, toutes les données étant
          irrévocablement supprimées après résiliation.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. Obligations de l'utilisateur</h2>
        <ul className="list-disc list-inside text-sm space-y-1.5 leading-relaxed">
          <li>L'utilisateur est lui-même responsable de la sécurité de son mot de passe et de sa clé de récupération.</li>
          <li>L'utilisateur ne doit pas utiliser le Service à des fins illicites.</li>
          <li>L'utilisateur s'assure que les données qu'il stocke ne portent pas atteinte aux droits de tiers.</li>
          <li>L'utilisateur maintient à jour les coordonnées enregistrées dans son compte.</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Disponibilité et maintenance</h2>
        <p className="text-sm leading-relaxed">
          Le Fournisseur s'efforce de garantir une haute disponibilité du Service
          (disponibilité visée : 99 % en moyenne mensuelle) mais n'assume aucune
          garantie de disponibilité ininterrompue. Les opérations de maintenance
          planifiées sont annoncées à l'avance dans la mesure du possible.
        </p>
      </section>

      {/* 6a */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6a. Durée minimale d'exploitation des abonnements payés</h2>
        <p className="text-sm leading-relaxed">
          Le Fournisseur s'engage à maintenir le Service pendant toute la durée d'un
          abonnement préalablement payé par l'utilisateur. Toute personne qui souscrit
          un abonnement d'une durée d'un (1), deux (2) ou trois (3) ans dispose d'un
          droit contractuel à la fourniture du Service pendant toute la période
          prépayée.
        </p>
        <p className="text-sm leading-relaxed">
          Si le Fournisseur cesse le Service avant l'expiration de la durée prépayée
          pour des motifs économiques ou stratégiques qui lui sont propres, il
          s'engage à :
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li>annoncer par écrit la cessation, avec un préavis d'au moins quatre-vingt-dix (90) jours, à l'adresse e-mail enregistrée ;</li>
          <li>maintenir disponible la fonction d'export des données chiffrées du coffre-fort pendant toute la durée du préavis ;</li>
          <li>rembourser la part non utilisée de l'abonnement, calculée pro rata temporis sur la durée prépayée restante.</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Cette assurance ne s'applique pas en cas de force majeure, d'injonctions
          des autorités, d'insolvabilité ou d'autres circonstances dont le Fournisseur
          n'a pas à répondre. Dans ces cas, le Fournisseur s'efforcera, en toute bonne
          foi, de permettre aux utilisateurs un export ordonné des données dans un
          délai raisonnable.
        </p>
        <p className="text-sm leading-relaxed">
          Une cessation du plan Free gratuit n'est expressément pas couverte par cette
          disposition et est régie par le point 2, dernier alinéa.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Limitation de responsabilité</h2>
        <p className="text-sm leading-relaxed">
          Le Fournisseur n'est responsable que des dommages causés par négligence
          grave ou intention. Toute responsabilité pour négligence légère ainsi que
          pour dommages indirects, dommages consécutifs et manque à gagner est exclue
          dans la mesure permise par la loi. Le Service utilisant une architecture
          zero-knowledge, il est techniquement impossible au Fournisseur d'accéder
          au contenu du coffre-fort ou de restaurer des clés perdues.
        </p>
        <p className="text-sm leading-relaxed">
          La responsabilité totale du Fournisseur est limitée aux frais d'abonnement
          effectivement payés par l'utilisateur au cours des 12 derniers mois.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Protection des données</h2>
        <p className="text-sm leading-relaxed">
          Le traitement des données personnelles est régi par notre{" "}
          <Link href="/privacy" className="underline hover:text-slate-900">politique de confidentialité</Link>.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">9. Modifications des CGV</h2>
        <p className="text-sm leading-relaxed">
          Le Fournisseur se réserve le droit de modifier les présentes CGV moyennant
          un préavis de 30 jours par e-mail. Si l'utilisateur ne s'oppose pas dans ce
          délai, les nouvelles CGV sont réputées acceptées. En cas d'opposition,
          l'utilisateur dispose d'un droit de résiliation extraordinaire.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">10. Droit applicable et for</h2>
        <p className="text-sm leading-relaxed">
          Le droit suisse s'applique exclusivement. Le for pour tous les litiges
          découlant ou en lien avec le présent contrat est le canton de Thurgovie,
          Suisse, à moins que des dispositions légales impératives ne désignent un
          autre for.
        </p>
      </section>

      <p className="text-xs text-slate-400">Version : 22 mai 2026</p>
    </main>
  );
}
