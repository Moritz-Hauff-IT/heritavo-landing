---
title: "Comment fonctionne un coffre-fort zero-knowledge avec plan d'urgence"
description: "Ce que zero-knowledge signifie vraiment, comment un plan d'urgence automatisé fonctionne sans impliquer le fournisseur, et quels modes de partage existent. Une explication technique et pratique."
publishedAt: "2026-05-22"
updatedAt: "2026-05-22"
keywords:
  - "coffre-fort zero-knowledge"
  - "plan urgence numérique"
  - "chiffrement de bout en bout"
  - "Argon2id"
  - "Shamir Secret Sharing"
author: "Moritz Hauff"
image: "/images/blog/zero-knowledge.webp"
imageAlt: "Ancienne clé en laiton sur un clavier d'ordinateur"
---

Quand on prend la planification numérique au sérieux, une question centrale émerge rapidement : **qui peut lire mes données sensibles ?** Avec les services cloud classiques, la réponse est : théoriquement le fournisseur, l'hébergeur, dans le pire des cas les autorités. Avec un coffre-fort zero-knowledge, la réponse est : **personne sauf toi**, et en cas d'urgence les personnes de confiance que tu as explicitement désignées.

Cela semble contradictoire au début : comment un fournisseur peut-il "ne pas connaître" mes données tout en les transmettant à mes personnes de confiance en cas d'urgence ? La réponse est dans l'architecture — qui est étonnamment élégante une fois comprise.

Cet article l'explique étape par étape — ce que zero-knowledge signifie concrètement, comment le plan d'urgence automatisé fonctionne, et quels modes de partage existent. Les exemples se réfèrent à [Heritavo](/fr), construit exactement sur ce principe.

## Ce que "Zero-Knowledge" signifie concrètement

Le terme est sur-utilisé — presque chaque fournisseur cloud s'en sert pour marketer. La définition stricte est précise : **le fournisseur ne voit rien d'autre que des octets chiffrés**. Pas de noms de fichiers, pas de termes de recherche, pas de contenus, pas de clés.

En pratique :

1. **Le chiffrement se passe dans ton navigateur**, pas sur le serveur. Quand tu sauvegardes un mot de passe, il est chiffré avec AES-256-GCM (algorithme symétrique établi) avant l'upload.
2. **La clé ne quitte jamais ton appareil**. Elle est dérivée de ton mot de passe maître via un algorithme calcul-intensif nommé Argon2id, qui protège en plus contre le brute-force.
3. **Le serveur reçoit seulement de la salade d'octets**. Si le serveur est compromis, les données sont sans valeur.

Le mot de passe maître lui-même ne parvient pas au serveur non plus. À la place, un hash dérivé est utilisé pour l'authentification, qui ne peut pas servir à déchiffrer.

Conséquence : **si tu oublies ton mot de passe maître et n'as pas configuré de méthode de récupération, les données sont irrémédiablement perdues.** C'est le revers direct du zero-knowledge — le fournisseur ne peut pas aider, parce qu'il ne sait littéralement rien.

## Le problème du plan d'urgence

Ici ça devient intéressant : zero-knowledge signifie que le fournisseur ne peut pas te déverrouiller. Mais pour la planification numérique, c'est exactement ce qu'il faut — les personnes de confiance doivent obtenir l'accès en cas d'urgence, sans que tu puisses les déverrouiller toi-même (tu n'es plus là, ou incapable).

Comment cela fonctionne-t-il sans que le fournisseur connaisse la clé ?

La réponse est conceptuellement simple : **tu partages la clé avec tes personnes de confiance avant que l'urgence n'arrive** — d'une manière contrôlée que le fournisseur ne peut pas influencer.

Il y a trois façons de mettre cela en œuvre, chacune avec des compromis différents entre confort et sécurité.

## Mode de partage 1 : Recovery Sheet (testament)

Le modèle le plus simple. Lors de la configuration, tu génères un code de récupération physique — sous forme de PDF à imprimer. Tu le conserves en lieu sûr : coffre à la maison, chez un notaire, dans un coffre bancaire.

En cas d'urgence, tes personnes de confiance saisissent ce code et peuvent déchiffrer le coffre.

**Pro :** entièrement zero-knowledge. Le fournisseur ne voit jamais le code. Même avec une brèche serveur totale, le coffre reste sûr.

**Contre :** point unique de défaillance côté physique — si le coffre disparaît en même temps que toi (incendie, vol), le code aussi.

**Quand pertinent :** si tu as un stockage physique très sûr (notaire ou coffre bancaire), et acceptes le risque de point unique de défaillance.

## Mode de partage 2 : Shamir's Secret Sharing (Code Print)

Ici ça devient mathématiquement élégant. Au lieu d'un seul code de récupération, la clé est divisée en **N fragments**, dont **M** sont nécessaires pour la reconstruction. Par exemple 3-sur-5 : cinq personnes reçoivent chacune un fragment, trois doivent se réunir.

C'est un schéma cryptographique établi d'Adi Shamir (co-inventeur de RSA), publié en 1979. Il a deux propriétés importantes :

1. **Avec moins de M fragments, rien ne peut être déduit** — pas partiellement, pas un indice, rien. Mathématiquement.
2. **Avec M fragments ou plus, la clé se reconstruit exactement.**

Tu donnes à chaque personne de confiance une feuille de code imprimée. En cas d'urgence, au moins M de N personnes doivent se réunir, saisir leurs codes — et seulement alors le coffre s'ouvre.

**Pro :** pas de point unique de défaillance. Tu peux perdre une personne (décès, déménagement, conflit) et accéder quand même. Plus : aucune personne seule ne peut accéder au coffre (protection contre héritiers hostiles).

**Contre :** charge organisationnelle — tous les codes doivent être distribués physiquement et conservés. Avec des personnes éloignées, la réunion en urgence peut être logistiquement complexe.

**Quand pertinent :** avec plusieurs personnes de confiance à différents endroits (constellation familiale typique). Le mode le plus robuste pour une planification sérieuse.

## Mode de partage 3 : Code Shamir par e-mail

Comme Mode 2, mais les codes sont envoyés par e-mail aux personnes de confiance au lieu d'être distribués physiquement.

**Pro :** pratique, rapide à configurer.

**Contre :** ce n'est **plus 100% zero-knowledge**. L'envoi e-mail passe par le serveur du fournisseur. Théoriquement, l'opérateur pourrait lire les codes.

**Quand pertinent :** quand le confort maximal est souhaité et le modèle de menace classe le chemin e-mail comme suffisamment sûr.

## Comment le plan d'urgence se déclenche

Les modes de partage régissent le **comment**. Mais quand le processus démarre-t-il ? Avec un coffre-fort de succession dédié comme Heritavo, c'est basé sur check-in :

1. **Tu choisis un intervalle de check-in** — par exemple toutes les 4 semaines.
2. **Avant l'échéance, tu reçois des e-mails de rappel** — typiquement 7 jours avant.
3. **Si tu ne réponds pas, la libération se prépare** — les personnes de confiance sont informées.
4. **Délai de veto** — typiquement 72 heures pendant lesquelles toi ou les personnes de confiance peuvent encore arrêter le processus.
5. **Si personne n'arrête → la libération se déclenche** — les personnes de confiance peuvent saisir leurs codes et ouvrir le coffre.

**Ce processus entier fonctionne automatiquement**. Le fournisseur n'a besoin d'aucune entrée externe de déclenchement (pas d'acte de décès, pas d'appel téléphonique).

## Ce qui peut vivre dans le coffre

Un gestionnaire de mots de passe classique stocke principalement des logins. Un coffre-fort de succession dédié a une portée plus large — toutes les données qui doivent "survivre" :

- **Mots de passe et logins** — comme un gestionnaire
- **Documents** — polices d'assurance, baux, déclarations fiscales, documents scannés
- **Vidéos d'héritage** — messages personnels à la famille, lisibles seulement après la libération
- **Phrases seed crypto** — le cas d'usage le plus important sans alternative
- **Contacts d'urgence** — qui notifier comment
- **Instructions étape par étape**

Différence clé avec les gestionnaires quotidiens : **l'auto-fill et les apps mobiles manquent généralement délibérément**. Pas un bug — si tu utilisais le coffre quotidiennement, tu aurais une surface d'attaque plus grande.

## Ce qui se passe en cas d'urgence (flux complet)

1. **Jour 0 :** check-in raté. Le système envoie des rappels.
2. **Jour 7-30** : deuxième et troisième rappels. Toujours pas de réponse → processus de libération démarre.
3. **Jour 30-37 :** personnes de confiance notifiées par e-mail.
4. **Fenêtre de veto 72h :** personnes de confiance ou toi peuvent encore arrêter.
5. **Après veto :** lien de libération devient actif. Les personnes peuvent déchiffrer en saisissant Recovery Code ou fragments Shamir.
6. **Déchiffrement dans le navigateur :** à nouveau zero-knowledge — le serveur livre seulement des données chiffrées, le déchiffrement se fait localement.
7. **Téléchargement en ZIP :** toutes les données — mots de passe, documents, vidéos — sont téléchargées en archive ZIP chiffrée.

## Où la confiance reste nécessaire

L'honnêteté importe : même les systèmes zero-knowledge demandent de la confiance à un endroit — dans **le code de chiffrement lui-même**. Si le fournisseur sert une version navigateur manipulée, il pourrait théoriquement intercepter le mot de passe maître au moment de la saisie.

Mitigations :
- **Bibliothèques crypto open-source** — algorithmes établis
- **Bases de code auditées** — audits formels par firmes indépendantes
- **Cadre juridique suisse** — fournisseurs soumis à la LPD suisse
- **Builds reproductibles / source publique** — pour cas d'usage très sensibles

Dans le cas Heritavo : composants crypto basés sur Web Crypto API standards et hash-wasm. Hébergement en Suisse chez Infomaniak.

## Quand un coffre-fort zero-knowledge avec plan d'urgence a du sens

Pas pour chaque cas d'usage. Pour les logins navigateur quotidiens, un gestionnaire classique est mieux adapté.

Mais pour la **succession numérique** — données et contenus qui doivent survivre, pas utilisés quotidiennement, mais disponibles en urgence — ce type de coffre est exactement le bon outil.

Cas d'usage typiques :
- **Transmission de seed crypto** — le cas le plus important sans alternative
- **Documents importants** transmis à la famille
- **Messages personnels** aux proches (vidéos d'héritage, lettres)
- **Instructions d'urgence** pour situations de vie complexes

Si tu veux essayer Heritavo — le plan Free couvre 10 entrées et 1 contact d'urgence, c'est gratuit, sans carte de crédit.

[Essayer Heritavo Free](/fr)

Articles liés :
- [Que deviennent vos comptes en ligne après un décès ?](/fr/blog/que-deviennent-mes-comptes-en-ligne-apres-deces) — la question que Heritavo tente de résoudre
- [Succession numérique en Suisse : guide juridique](/fr/blog/succession-numerique-suisse-guide) — le cadre juridique

Questions ? Écris-moi à [support@heritavo.com](mailto:support@heritavo.com).
