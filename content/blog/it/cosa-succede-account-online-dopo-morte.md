---
title: "Cosa succede agli account online dopo la morte? Guida pratica 2026"
description: "E-mail, cloud storage, e-banking, social media: chi accede concretamente ai tuoi account digitali in caso di emergenza? Una guida pratica con passi da fare questo weekend."
publishedAt: "2026-05-22"
updatedAt: "2026-05-22"
keywords:
  - "account online dopo morte"
  - "successione digitale"
  - "eredità digitale"
  - "trasmettere password"
  - "accesso emergenza account"
author: "Moritz Hauff"
image: "/images/blog/accounts.webp"
imageAlt: "Persone anziane sedute a un tavolo con un laptop"
---

Se inizi a contare i tuoi account online, raggiungi rapidamente numeri sorprendenti. Account e-mail, banca, cloud storage, streaming, newsletter, forum — una vita moderna tipica si distribuisce oggi su dozzine o ben oltre cento account digitali. La domanda che non mi ha lasciato costruendo Heritavo: cosa succederà a tutto questo se domani accade qualcosa?

Se non ti sei mai chiesto chi accede al tuo account e-mail, al tuo e-banking o al tuo cloud storage in caso di emergenza, sei in buona compagnia. Dalla mia esperienza nella costruzione di Heritavo, presumo che la maggioranza degli adulti digitalmente attivi non abbia un piano concreto per la propria successione digitale.

Questo articolo non è marketing — è un bilancio onesto: come funziona davvero l'accesso in emergenza, quali soluzioni funzionano, quali no, e quali passi puoi compiere questo weekend.

## La realtà cruda: senza preparazione, nessuno entra rapidamente

In Svizzera (e similmente in Italia e nella UE), valgono alcuni principi che la maggior parte delle persone capisce solo dopo un decesso in famiglia:

**Le banche bloccano i conti immediatamente.** Appena una banca apprende del decesso — tramite comune, parente o ufficio successioni — gli accessi e-banking vengono disattivati. Gli eredi vi accedono solo dopo presentazione del **certificato ereditario**. Tempo tipico: 4-8 settimane, più lungo in casi complessi.

**I servizi online richiedono certificati di morte.** Google ha un "Inactive Account Manager", Apple un "Contatto erede", Microsoft un processo "Next of Kin". Tutti e tre sono meglio di niente, ma tutti richiedono che li abbia configurati **prima** dell'emergenza. Altrimenti la famiglia deve fare richiesta formale, con certificato di morte, prova di identità, a volte certificato ereditario — 6 settimane a 4 mesi.

**I dispositivi cifrati sono morti senza password.** Un iPhone con Face ID senza backup PIN, un Mac con FileVault, un Windows BitLocker — tutti e tre sono bloccati crittograficamente. Apple, Microsoft e Google **non possono** decifrarli su richiesta.

**Le crypto sono la categoria più difficile.** Chi non ha salvato la seed phrase perde le crypto matematicamente. Diverse stime del settore suggeriscono che una parte significativa di tutti i bitcoin mai minati sia permanentemente inaccessibile — principalmente per chiavi perse e seed phrase non trasmesse.

Non è teoria. Le famiglie spesso impiegano mesi per accedere agli account digitali dei parenti deceduti — talvolta perdendo interamente archivi foto o documenti importanti.

## Le categorie di account che contano — per priorità

### 1. E-mail (priorità massima)

L'account e-mail principale è il **pulsante reset per quasi tutto il resto**. Chi ha accesso può richiedere reset password sulla maggior parte dei servizi.

Cosa funziona:
- **Gmail**: Inactive Account Manager (Impostazioni → Dati e privacy)
- **Apple Mail (iCloud)**: Contatto erede da iOS 15.2
- **E-mail su dominio proprio**: password + metodo di recupero **devono** essere in una soluzione separata

### 2. Banking & finanze

**E-banking** è un caso speciale. La maggior parte delle banche svizzere rifiuta nelle CGV la trasmissione di password. La via ufficiale è certificato ereditario + appuntamento bancario.

Cosa **dovresti** documentare:
- Quali banche usi
- Liste IBAN
- Token 2FA hardware
- Una **procura di previdenza** per "incapace di discernimento, ma non morto"

**Crypto** è diverso: seed phrase devono essere trasmesse. Senza seed = perdita totale.

### 3. Cloud storage & documenti

Dropbox, Google Drive, iCloud, OneDrive: contratti, documenti assicurativi, foto di famiglia. Pratico: una directory centrale con i documenti più importanti + accesso cloud nel piano d'emergenza.

### 4. Social media & profili

Facebook/Instagram permettono uno stato memoriale. LinkedIn la chiusura del profilo. X/Twitter difficile.

### 5. Abbonamenti & pagamenti ricorrenti

Streaming, SaaS, registrar di domini, newsletter: continuano spesso mesi dopo il decesso. Una lista centrale risparmia ore di ricerca alla famiglia.

## Tre strategie di previdenza — dal semplice al robusto

### Strategia 1: Notaio con chiavetta USB

Depositi una chiavetta USB cifrata con password dal notaio.

**Pro:** giuridicamente solida.
**Contro:** statica dal primo giorno. Dopo 5 anni la lista è obsoleta all'80%.

### Strategia 2: Password manager con accesso d'emergenza

Bitwarden, 1Password, LastPass hanno funzionalità di Emergency Access.

**Pro:** sincronizzazione automatica.
**Contro:** molti provider sono in USA — CLOUD Act applicabile. La protezione dati svizzera non si applica direttamente.

Inoltre: molti di questi tool sono pensati come aiuti al login quotidiano, non come cassaforte di successione. La funzione emergency-access è spesso un'aggiunta e i dettagli variano (periodo di attesa, finestra di veto, architettura delle chiavi).

### Strategia 3: Vault Zero-Knowledge con piano d'emergenza automatico

La cifratura avviene **interamente sul tuo dispositivo**. Il provider non vede nulla. In caso di inattività, il vault si apre automaticamente per persone di fiducia predefinite.

**Pro:** matematicamente non consultabile, nemmeno dall'operatore o dalle autorità.
**Contro:** ancora poco diffuso.

Questo è esattamente il caso d'uso per cui ho costruito [Heritavo](/it). Divulgazione completa: sono il fondatore, questo articolo è sul dominio Heritavo.

## Piano passo-passo per questo weekend

**Passo 1 — Fai una lista (20 min).** Tutti i servizi online dove sei registrato.

**Passo 2 — Priorizza (10 min).** Critici: e-mail, banca, cloud, crypto.

**Passo 3 — Salva i codici di recupero (30 min).** Stampa o salva in soluzione cifrata separata.

**Passo 4 — Scegli persone di fiducia (15 min).** 2-3 persone in luoghi diversi.

**Passo 5 — Scegli uno strumento (variabile).** Qualsiasi soluzione è meglio di niente.

**Passo 6 — Informa le persone di fiducia (30 min).** Devono sapere *che* esiste, *dove* è, *come* accedere.

## Errori comuni che ho visto

- **"Le password sono tutte nel mio browser"** — morti senza master password
- **"Il mio notaio ha una lista"** — statica da 5+ anni
- **Seed crypto non documentata da nessuna parte** — caso più frequente di perdita totale
- **Una sola persona di fiducia** — single point of failure
- **Tutto in chiaro in una nota cloud** — se il provider è hackerato, tutto pubblico

## Conclusione & prossimo passo

La successione digitale non è principalmente un problema tecnico — è un problema di comunicazione e procrastinazione. La mia proposta: investi **un'ora una domenica pomeriggio**.

**Se cerchi una soluzione chiavi in mano:** Heritavo è costruito esattamente per questo caso d'uso — cassaforte zero-knowledge, piano di emergenza automatico via check-in, hosting svizzero. Il piano Free è gratuito e copre le prime 10 voci più un contatto di fiducia. [Prova Heritavo Free →](/it)

Per approfondire:
- [Ereditare crypto — il caso più frequente di perdita totale](/it/blog/ereditare-crypto-senza-perdita-totale) — seed phrase, hardware wallet, Shamir
- [Come funziona una cassaforte zero-knowledge con piano di emergenza](/it/blog/come-funziona-cassaforte-zero-knowledge-piano-emergenza)
- [Successione digitale in Svizzera: guida giuridica](/it/blog/successione-digitale-svizzera-guida)

Domande? Scrivimi a [support@heritavo.com](mailto:support@heritavo.com).
