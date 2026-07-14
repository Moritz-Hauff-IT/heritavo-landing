const FACTS: [string, string][] = [
  ["Produit", "Coffre-fort zero-knowledge pour l'héritage numérique (SaaS)"],
  ["Siège", "Tägerwilen (Thurgovie), Suisse"],
  ["Fondateur", "Moritz Hauff"],
  ["Hébergement", "Suisse"],
  ["Langues", "allemand, anglais, français, italien"],
  ["Tarifs", "gratuit à CHF 89/an (Family, 5 personnes) ; Pro CHF 39/an"],
  ["Méthodes de transmission", "Recovery sheet (hors ligne), code d'accès par e-mail, code d'accès imprimé"],
  ["Site web", "heritavo.com"],
];

export default function PressFr() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Presse & médias</h1>
        <p className="text-slate-600">
          Tout ce dont les journalistes ont besoin pour parler de Heritavo : présentation,
          fiche d&apos;information, logos et un contact direct avec le fondateur. Pour une
          interview, un entretien de fond ou un compte de test, contactez-nous à tout moment
          — nous répondons en général sous un jour ouvrable.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">À propos de Heritavo (présentation)</h2>
        <p className="text-slate-600">Le texte suivant peut être repris tel quel :</p>
        <blockquote className="border-l-2 border-slate-200 pl-4 text-slate-600">
          Heritavo est un service en ligne suisse dédié à la prévoyance numérique et à
          l&apos;héritage numérique. Mots de passe, documents et messages personnels sont
          stockés avec un chiffrement de bout en bout — de sorte que même Heritavo ne peut
          pas les lire — puis transmis automatiquement et discrètement aux personnes de
          confiance désignées, le moment venu. Le service est hébergé en Suisse et
          disponible en allemand, anglais, français et italien.
        </blockquote>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Fiche d&apos;information</h2>
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
        <h2 className="font-semibold text-slate-900">Angles d&apos;articles</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            En cas de décès ou de maladie grave, la plupart des familles se retrouvent
            exclues des comptes de leur proche — de l&apos;e-banking aux archives photos.
          </li>
          <li>
            Le chiffrement zero-knowledge signifie que le prestataire est techniquement
            incapable de lire les données de ses clients. À quoi ressemble la confiance
            quand on n&apos;en a plus besoin ?
          </li>
          <li>
            La prévoyance numérique ne concerne pas que le décès : démence, accident ou
            hospitalisation rendent un accès organisé tout aussi nécessaire.
          </li>
          <li>
            Toutes les méthodes de transmission fonctionnent hors ligne — la remise réussit
            même si le service venait à disparaître un jour.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Logos & visuels</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            <a href="/logo.svg" download className="underline hover:text-slate-900">Logo (SVG)</a>
          </li>
          <li>
            <a href="/logo.png" download className="underline hover:text-slate-900">Logo (PNG)</a>
          </li>
          <li>
            <a href="/logo-square.png" download className="underline hover:text-slate-900">Logo carré (PNG)</a>
          </li>
        </ul>
        <p className="text-slate-600">
          Captures d&apos;écran du produit et photo du fondateur disponibles sur demande en
          haute résolution.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Contact presse</h2>
        <p className="text-slate-600">
          Moritz Hauff, fondateur —{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>{" "}
          (mentionnez « presse » dans l&apos;objet).
        </p>
      </section>
    </main>
  );
}
