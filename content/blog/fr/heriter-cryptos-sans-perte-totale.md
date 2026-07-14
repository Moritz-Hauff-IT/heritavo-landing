---
title: "Hériter des cryptos — pourquoi 20% des Bitcoin sont perdus"
description: "Phrases seed, hardware wallets, custodial vs self-custody : ce que tu dois faire aujourd'hui pour que ton patrimoine crypto ne soit pas perdu en cas de décès. Guide pratique avec les erreurs les plus fréquentes."
publishedAt: "2026-05-23"
updatedAt: "2026-05-23"
keywords:
  - "hériter cryptos"
  - "succession Bitcoin"
  - "phrase seed sécurisée"
  - "hardware wallet héritage"
  - "succession crypto Suisse"
author: "Moritz Hauff"
image: "/images/blog/crypto.webp"
imageAlt: "Pièces de Bitcoin dorées dans une lumière chaude"
---

C'est probablement la forme la plus coûteuse d'insouciance numérique : **environ 20% de tous les Bitcoin sont aujourd'hui considérés comme irréversiblement perdus** — estimation de la société d'analyse Chainalysis. Des coins qui n'ont pas bougé depuis plus de cinq ans, dont personne ne connaît plus les clés. Aux cours actuels, on parle de centaines de milliards de francs de patrimoine qui n'appartiennent plus à personne.

Une partie significative remonte à des décès. Des gens meurent en possédant des cryptos sans que personne ne sache comment y accéder — ni même si elles existent.

Ce n'est pas abstrait. Si tu détiens des cryptos, la probabilité que ta famille reçoive **zéro franc** de tout ça après ta mort est dramatiquement plus élevée que pour n'importe quelle autre classe d'actifs. Les banques ont des processus successoraux, les assurances se manifestent, les biens immobiliers sont au registre foncier. Les cryptos sont différentes : sans la phrase seed, c'est perdu. Point.

Cet article explique pourquoi, quelles erreurs typiques y conduisent — et comment tu peux faire mieux concrètement cette semaine.

## Pourquoi les cryptos sont si spécifiques

Pour les classes d'actifs classiques, il y a des **intermédiaires** : banques, assurances, notaires, registres fonciers. Tes héritiers peuvent accéder à ton patrimoine même quand tu n'es plus là pour les aider — via des processus institutionnels, certificats de décès, certificats d'héritier.

Pour les cryptos en self-custody, rien de tout cela. La cryptographie ne connaît pas d'autorité. Tes coins sont protégés par une clé privée — typiquement représentée par une **phrase seed** (12 ou 24 mots du standard BIP39). Qui a la seed a l'argent. Qui ne l'a pas n'a rien.

Pas de bouton reset. Pas de contact d'urgence pour le wallet. Pas de tribunal qui peut ordonner l'accès. **Mathématiquement, le patrimoine est perdu** dès que la seed est perdue — même si le monde entier sait que les coins t'appartenaient.

C'est la force des cryptos (aucune intervention possible) et simultanément le plus grand piège pour la planification successorale.

## Les erreurs les plus fréquentes

D'après les conversations avec des détenteurs de cryptos et des héritiers, les mêmes patterns reviennent constamment :

**1. « Ma famille sait pour le wallet, ça suffit. »**
Savoir *qu'il existe* est une chose. Savoir *comment y accéder* en est une autre. Si ta femme sait que tu as un Ledger dans le bureau mais pas où est la seed — les coins sont techniquement perdus. Le Ledger lui-même n'est qu'un écran ; le secret c'est la seed.

**2. « La seed est notée en sécurité dans un tiroir. »**
Du papier dans un tiroir a deux problèmes : d'abord il peut partir avec toi dans l'incendie, ensuite il peut aussi être trouvé *avant* ta mort — cambriolage, femme de ménage curieuse, enfants. Single point of failure avec risque de vol.

**3. « J'utilise une exchange custodial comme Binance / Bitpanda / Coinbase, ils ont des processus successoraux. »**
Partiellement vrai : les exchanges custodial (plateformes qui détiennent les coins pour toi) traitent le compte comme un compte bancaire et le transmettent aux héritiers avec un certificat de décès. **MAIS :** pour cela il faut connaître le login du compte ou que les héritiers puissent le trouver. Plus : la plupart des plateformes custodial ne sont pas en Suisse, mais en Lituanie, Malte, Estonie ou plus loin. Les processus successoraux internationaux peuvent prendre des mois. Et : si l'exchange fait faillite — voir FTX 2022 — les coins sont quand même perdus, même avec certificat d'héritier.

**4. « J'ai divisé la seed en 2-3 morceaux et les ai cachés à différents endroits. »**
Le partage naïf est dangereux. Si tu divises une seed de 24 mots en deux moitiés de 12 mots, un attaquant avec une moitié réduit la complexité brute-force de 2^256 à 2^128. Ça paraît beaucoup — mais avec du matériel spécialisé, cela peut devenir cassable en quelques années. Plus : et si un morceau est perdu ? Alors **tout** est perdu. Le vrai secret sharing (Shamir) résout les deux — plus de détails ci-dessous.

**5. « Backup cloud, app de notes, e-mail à moi-même. »**
Classique et fatal. Les fournisseurs cloud se font hacker (LastPass 2022, Dropbox dans le passé, etc.). Les comptes e-mail se font prendre. Une phrase seed posée digitalement en clair quelque part — même chiffrée avec ton mot de passe cloud — est toujours **un pas** du vol. Les voleurs de crypto scannent activement exactement ces traces.

## Ce qui marche : Hardware wallet + stockage seed sécurisé

La solution robuste pour les cryptos en self-custody a deux parties :

**Partie 1 : Hardware wallet comme outil quotidien.**
Un appareil comme Ledger, Trezor ou BitBox garde la seed hors ligne, signe les transactions sans que la clé ne quitte la puce. Même si ton ordinateur est compromis par un malware, l'attaquant ne peut pas atteindre les coins.

**Partie 2 : Stockage seed sécurisé pour le cas d'urgence.**
Le hardware wallet lui-même n'est qu'un outil. Le secret réel — la phrase seed — doit être stocké séparément et durablement pour que tu puisses restaurer (si l'appareil casse, est perdu, ou si tu meurs).

Voici les options sérieuses :

### Variante A : Backup en acier (Cryptosteel, Billfodl, Seedplate)

Une plaque métallique sur laquelle les 24 mots sont gravés ou estampillés. Résistant au feu jusqu'à 1500°C, à l'acide, à l'eau. Tient des siècles. Coût : entre 50 et 150 francs.

**Pour :** quasi indestructible, investissement unique.
**Contre :** objet physique avec tous les risques physiques (cambriolage, perte, saisie). Plus : qui le trouve a tout. Single point of failure.

**Stockage :** coffre à la maison + coffre bancaire + chez une personne de confiance — diversifier. **Mais :** alors tu as le secret en plusieurs endroits, et un vol à un endroit coûte tout.

### Variante B : Shamir's Secret Sharing — diviser la seed en fragments

Mathématiquement élégant : la seed est divisée en N fragments (cryptographiquement correct — pas naïvement divisée en deux), dont M sont nécessaires pour reconstruire. Par exemple 3-sur-5 : cinq personnes ont chacune un fragment, trois doivent se réunir.

Propriétés :
- **Moins de M fragments ne révèlent mathématiquement rien** — pas même une information partielle
- **M ou plus de fragments** reconstruisent la seed exactement
- Tu peux perdre un fragment sans perdre l'accès
- Une seule personne ne peut pas accéder à tes coins, même avec son fragment

C'est le standard or pour la succession crypto en self-custody — pas de single point of failure, pas de risque de trahison, sécurité mathématiquement prouvable.

**Trezor supporte SLIP39** (variante Shamir de Trezor) depuis 2019 directement dans l'appareil. Tu peux diviser la seed en shares à la création.

**Pour d'autres hardware wallets**, cela se fait via des outils externes ou via un service de coffre-fort qui a Shamir splitting intégré — voir ci-dessous.

### Variante C : Wallet Multi-Signature (Multisig)

Au lieu d'une seule seed, il y a plusieurs clés dont un nombre minimal doit signer (par ex. 2-sur-3). Fonctionnellement similaire à Shamir mais implémenté on-chain. Bitcoin, Ethereum et la plupart des grandes chaînes le supportent.

**Pour :** fonction native de la blockchain, pas besoin de faire confiance à des outils externes.
**Contre :** plus exigeant techniquement à mettre en place, frais de transaction plus élevés, plus complexe en cas de recovery (les héritiers doivent savoir gérer plusieurs appareils).

Pour la plupart des setups familiaux, le Shamir splitting (Variante B) est le meilleur compromis — les héritiers n'ont pas besoin d'expertise crypto, juste des codes.

## Plan d'action concret pour cette semaine

**Étape 1 (15 min) : Inventaire.**
Quels avoirs crypto as-tu ? Liste tous les wallets, exchanges, comptes de staking, positions DeFi. N'oublie pas les adresses cold storage de ta phase ICO antérieure — souvent valent plus aujourd'hui que le reste.

**Étape 2 (10 min) : Séparer custodial vs. self-custody.**
Exchanges custodial (Bitpanda, Bitbox app, Bitcoin Suisse, Kraken, Coinbase) : les processus successoraux passent par la plateforme. Les héritiers ont besoin du login du compte et doivent passer le processus KYC pour l'héritage. Note les plateformes utilisées — *pas* les logins — dans ton document d'urgence.

Self-custody (hardware wallet propre, seed propre) : la responsabilité te revient entièrement.

**Étape 3 (45 min) : Professionnaliser le stockage de la seed.**

Pour les avoirs self-custody — choisis une des trois variantes ci-dessus.

Pratique pour la plupart :
- Commander un backup acier (Bitbox Seedcard, Cryptosteel, Billfodl)
- Estampiller/graver la seed dans le métal
- Créer un deuxième backup
- Un morceau à la maison dans un coffre, un morceau au coffre bancaire **ou** chez une personne de confiance

Avancé (quand les montants dépassent 5 chiffres) :
- Trezor avec SLIP39 → partage Shamir 3-sur-5
- Distribuer les fragments à 5 personnes de confiance
- Les héritiers savent qu'il y en a 5 et qui les détient

**Étape 4 (30 min) : Informer les héritiers — quoi et comment.**

C'est là que la plupart échouent. Tu n'as *pas* à dire la seed aux héritiers (ce serait un risque de sécurité de ton vivant). Tu dois leur dire :

- *Qu'il y a* des avoirs crypto
- *Quels* wallets / exchanges tu utilises (liste, pas logins)
- *Où* les backups sont physiquement (coffre, banque, personnes)
- *Comment* procéder en cas d'urgence (procédure exacte, dans quel ordre)

Règle empirique : imagine que tu es retiré du jeu ce soir. Tes proches, avec ce que tu leur as écrit, pourraient-ils atteindre les coins ? Si non, la préparation est incomplète.

**Étape 5 (15 min) : Documenter par écrit.**

Crée un document qui s'ouvre en cas de succession :

```
Instructions de succession crypto — [ton nom], au [date]

Avoirs :
  - Bitcoin (~XX BTC) — Trezor Model T, tiroir supérieur du bureau
  - Ethereum (~XX ETH) — même wallet
  - [autres tokens]
  - [Avoirs exchanges] : Bitcoin Suisse (e-mail, KYC chez [avocat/notaire]),
    Bitpanda (e-mail)

Stockage seed :
  - Splits Shamir 3-sur-5 (SLIP39)
  - Fragment 1 : coffre à la maison
  - Fragment 2 : coffre bancaire UBS [filiale, n° coffre]
  - Fragment 3 : chez frère [nom, ville]
  - Fragment 4 : chez père [nom, ville]
  - Fragment 5 : chez notaire [nom, étude]

En cas d'urgence :
  Réunir au moins 3 des 5 fragments, charger dans un nouveau Trezor
  (procédure : trezor.io/learn → SLIP39 Recovery), transférer les coins
  vers une adresse que vous contrôlez.
```

Ce document **ne** doit pas être rangé avec les backups — sinon il aide un voleur à tout trouver. Dépôt notarial ou coffre bancaire (seul, sans fragment de seed) a du sens.

## Où Heritavo peut aider

Divulgation complète : je suis le fondateur de Heritavo, cet article est sur le domaine Heritavo.

Heritavo est construit comme coffre-fort de succession numérique pour exactement ces scénarios. Spécifiquement pertinent pour la succession crypto :

- **Stocker des phrases seed chiffrées** (zero-knowledge, AES-256-GCM) avec le document de procédure ci-dessus
- **Shamir's Secret Sharing intégré** : tu peux donner aux personnes de confiance des fragments de code (3-sur-5, 2-sur-3, selon la constellation), sans que Heritavo ne voie jamais la seed
- **Libération basée sur check-in** : en cas d'inactivité, le coffre est libéré pour tes héritiers, avec fenêtre de veto si tu étais juste en vacances
- **Messages vidéo** : beaucoup de détenteurs crypto veulent *expliquer* la procédure — une vidéo lisible seulement en cas de succession peut apporter une clarté qu'un document texte ne peut pas

L'avantage par rapport aux solutions purement physiques (backup acier au coffre bancaire) est la **libération automatique** — tes héritiers ne doivent pas deviner s'ils devraient vérifier, ils sont activement informés.

L'avantage par rapport à « tout en clair quelque part » : Heritavo ne voit mathématiquement jamais la seed. Même nous ne pouvons pas la libérer — seulement tes héritiers avec leurs fragments.

[Commencer gratuitement →](/fr)

## Questions fréquentes

**Que se passe-t-il avec les hardware wallets qui cassent ?**
Le hardware est remplaçable. Tant que tu as la seed, tu peux la restaurer dans n'importe quel autre wallet compatible. C'est tout l'intérêt de la phrase seed. Les hardware wallets sont des outils, pas du stockage.

**Devrais-je aussi sécuriser les avoirs custodial via Heritavo ?**
Pour les avoirs custodial, il suffit souvent de dire aux héritiers *quelles* plateformes tu utilises + leur laisser le login. La plateforme hérite normalement. Heritavo est moins critique ici — mais peut être l'endroit central où ces données de compte vivent.

**Que se passe-t-il avec staking, DeFi, NFTs ?**
Même logique : tout ce qui est accessible via clé privée pend à la seed. Les NFTs dans un wallet sont autant affectés que le BTC. Les contrats de staking aussi — certains ont des lock periods, les héritiers doivent le savoir.

**Ai-je besoin de conseil juridique ?**
Pour la préparation technique, non. Pour le traitement testamentaire du patrimoine crypto (évaluation, impôt successoral, réserve héréditaire) : oui. Cela vaut la peine d'impliquer un avocat avec expérience crypto dès que les montants deviennent pertinents.

## Conclusion

Hériter des cryptos n'est pas compliqué — mais c'est **différent** de toute autre classe d'actifs. Aucune autorité en arrière-plan, aucun processus automatique, aucun filet de sécurité. La responsabilité est 100% à toi.

La bonne nouvelle : 1-2 heures de travail concentré suffisent pour créer le setup propre. Backup acier ou Shamir splitting, personnes de confiance clairement définies, procédure écrite. Rien de plus.

La mauvaise nouvelle : sans ces 1-2 heures, il est statistiquement probable que tes avoirs crypto seront *entièrement* perdus à ta mort. Peu importe le montant.

Articles liés :
- [Que deviennent vos comptes en ligne après un décès ?](/fr/blog/que-deviennent-mes-comptes-en-ligne-apres-deces) — stratégies pour les comptes classiques
- [Comment fonctionne un coffre-fort zero-knowledge avec plan d'urgence](/fr/blog/comment-fonctionne-coffre-fort-zero-knowledge-plan-urgence) — l'architecture expliquée
- [Succession numérique en Suisse : guide juridique](/fr/blog/succession-numerique-suisse-guide) — cadre juridique suisse

Questions ou expériences avec succession crypto ? Écris-moi à [support@heritavo.com](mailto:support@heritavo.com) — je réponds personnellement.
