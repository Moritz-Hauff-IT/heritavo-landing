---
title: "Ereditare crypto — perché il 20% dei Bitcoin va perso"
description: "Seed phrase, hardware wallet, custodial vs self-custody: cosa devi fare oggi perché il tuo patrimonio crypto non vada perso in caso di morte. Guida pratica con gli errori più frequenti."
publishedAt: "2026-05-23"
updatedAt: "2026-05-23"
keywords:
  - "ereditare crypto"
  - "successione Bitcoin"
  - "seed phrase sicura"
  - "hardware wallet eredità"
  - "successione crypto Svizzera"
author: "Moritz Hauff"
image: "/images/blog/crypto.webp"
imageAlt: "Monete Bitcoin dorate in luce calda"
---

È probabilmente la forma più costosa di disattenzione digitale: **circa il 20% di tutti i Bitcoin è oggi considerato irreversibilmente perso** — stima della società di analisi Chainalysis. Coin che non si muovono da oltre cinque anni, le cui chiavi nessuno conosce più. Ai corsi attuali parliamo di centinaia di miliardi di franchi di patrimonio che non appartengono più a nessuno.

Una parte significativa risale a decessi. Persone che muoiono possedendo crypto senza che nessuno sappia come accedervi — o se esistono affatto.

Non è astratto. Se detieni crypto, la probabilità che la tua famiglia riceva **zero franchi** dopo la tua morte è drammaticamente più alta che per qualsiasi altra classe di attivi. Le banche hanno processi successori, le assicurazioni si fanno sentire, gli immobili sono nel registro fondiario. Le crypto sono diverse: senza seed phrase è perso. Punto.

Questo articolo spiega perché, quali errori tipici portano a questo — e come puoi fare meglio concretamente questa settimana.

## Perché le crypto sono così specifiche

Per le classi di attivi classiche ci sono **intermediari**: banche, assicurazioni, notai, registri fondiari. I tuoi eredi possono accedere al tuo patrimonio anche quando tu non puoi più aiutarli — tramite processi istituzionali, certificati di morte, certificati ereditari.

Per le crypto in self-custody niente di tutto questo. La crittografia non conosce autorità. I tuoi coin sono protetti da una chiave privata — tipicamente rappresentata come **seed phrase** (12 o 24 parole dallo standard BIP39). Chi ha la seed ha i soldi. Chi non ce l'ha non ha niente.

Nessun pulsante reset. Nessun contatto di emergenza per il wallet. Nessun tribunale che possa ordinare l'accesso. **Matematicamente il patrimonio è perso** non appena la seed è persa — anche se tutto il mondo sa che i coin ti appartenevano.

È la forza delle crypto (nessun intervento possibile) e contemporaneamente la più grande trappola per la pianificazione successoria.

## Gli errori più frequenti

Da conversazioni con detentori di crypto ed eredi vedo sempre gli stessi pattern:

**1. "La mia famiglia sa del wallet, basta."**
Sapere *che esiste* è una cosa. Sapere *come accedervi* è tutt'altra. Se tua moglie sa che hai un Ledger nella scrivania ma non sa dov'è la seed — i coin sono tecnicamente persi. Il Ledger stesso è solo un display; il segreto è la seed.

**2. "La seed è scritta in sicurezza in un cassetto."**
La carta in un cassetto ha due problemi: primo può andare con te nell'incendio, secondo può anche essere trovata *prima* della tua morte — furto, donna delle pulizie curiosa, bambini. Single point of failure con rischio di furto.

**3. "Uso un exchange custodial come Binance / Bitpanda / Coinbase, hanno processi successori."**
Parzialmente vero: gli exchange custodial (piattaforme che detengono i coin per te) trattano l'account come un conto bancario e lo consegnano agli eredi con certificato di morte. **MA:** per quello bisogna conoscere il login dell'account o gli eredi devono poterlo trovare. Inoltre: la maggior parte delle piattaforme custodial non sono in Svizzera, ma in Lituania, Malta, Estonia o più lontano. I processi successori internazionali possono durare mesi. E: se l'exchange fallisce — vedi FTX 2022 — i coin sono persi comunque, anche con certificato ereditario.

**4. "Ho diviso la seed in 2-3 pezzi e li ho nascosti in posti diversi."**
La divisione ingenua è pericolosa. Se dividi una seed di 24 parole in due metà di 12 parole, un attaccante con una metà riduce la complessità brute-force da 2^256 a 2^128. Sembra molto — ma con hardware specializzato può diventare craccabile in qualche anno. Inoltre: e se un pezzo si perde? Allora **tutto** è perso. Il vero secret sharing (Shamir) risolve entrambi — più sotto.

**5. "Backup cloud, app di note, e-mail a me stesso."**
Classico e fatale. I provider cloud vengono hackerati (LastPass 2022, Dropbox in passato, ecc.). Gli account e-mail vengono presi. Una seed phrase posata digitalmente in chiaro da qualche parte — anche cifrata con la tua password cloud — è sempre **un passo** dal furto. I ladri di crypto scansionano attivamente esattamente queste tracce.

## Cosa funziona: Hardware wallet + conservazione seed sicura

La soluzione robusta per crypto in self-custody ha due parti:

**Parte 1: Hardware wallet come strumento quotidiano.**
Un dispositivo come Ledger, Trezor o BitBox tiene la seed offline, firma le transazioni senza che la chiave lasci il chip. Anche se il tuo computer è compromesso da malware, l'attaccante non può raggiungere i coin.

**Parte 2: Conservazione seed sicura per il caso di emergenza.**
L'hardware wallet stesso è solo uno strumento. Il segreto vero — la seed phrase — deve essere conservato separatamente e durevolmente perché tu possa ripristinare (se il dispositivo si rompe, è perso, o se muori).

Ecco le opzioni serie:

### Opzione A: Backup in acciaio (Cryptosteel, Billfodl, Seedplate)

Una piastra metallica su cui le 24 parole sono incise o stampigliate. Resistente al fuoco fino a 1500°C, all'acido, all'acqua. Dura secoli. Costo: tra 50 e 150 franchi.

**Pro:** quasi indistruttibile, investimento unico.
**Contro:** oggetto fisico con tutti i rischi fisici (furto, perdita, sequestro). Inoltre: chi lo trova ha tutto. Single point of failure.

**Conservazione:** cassaforte a casa + cassetta di sicurezza in banca + presso persona di fiducia — diversificare. **Ma:** così hai il segreto in più posti, e un furto in un posto costa tutto.

### Opzione B: Shamir's Secret Sharing — dividere la seed in frammenti

Matematicamente elegante: la seed viene divisa in N frammenti (crittograficamente corretto — non ingenuamente dimezzata), di cui M sono necessari per ricostruire. Ad esempio 3-su-5: cinque persone hanno ciascuna un frammento, tre devono unirsi.

Proprietà:
- **Meno di M frammenti non rivelano matematicamente nulla** — nemmeno un'informazione parziale
- **M o più frammenti** ricostruiscono la seed esattamente
- Puoi perdere un frammento senza perdere l'accesso
- Una sola persona non può accedere ai tuoi coin, nemmeno con il suo frammento

È il gold standard per la successione crypto in self-custody — nessun single point of failure, nessun rischio di tradimento, sicurezza matematicamente dimostrabile.

**Trezor supporta SLIP39** (variante Shamir di Trezor) dal 2019 direttamente nel dispositivo. Puoi dividere la seed in shares alla creazione.

**Per altri hardware wallet** questo avviene tramite strumenti esterni o tramite un servizio di cassaforte con Shamir splitting integrato — vedi sotto.

### Opzione C: Wallet Multi-Signature (Multisig)

Invece di una singola seed ci sono più chiavi, di cui un numero minimo deve firmare (ad es. 2-su-3). Funzionalmente simile a Shamir ma implementato on-chain. Bitcoin, Ethereum e la maggior parte delle grandi chain lo supportano.

**Pro:** funzione nativa della blockchain, nessuna fiducia in strumenti esterni necessaria.
**Contro:** tecnicamente più impegnativo da configurare, commissioni di transazione più alte, più complesso nel caso di recovery (gli eredi devono saper gestire più dispositivi).

Per la maggior parte dei setup familiari, lo Shamir splitting (Opzione B) è il miglior compromesso — gli eredi non hanno bisogno di expertise crypto, solo dei codici.

## Piano d'azione concreto per questa settimana

**Passo 1 (15 min): Inventario.**
Quali avere crypto hai? Elenca tutti i wallet, exchange, account di staking, posizioni DeFi. Non dimenticare gli indirizzi cold storage dalla tua fase ICO precedente — spesso valgono più ora del resto.

**Passo 2 (10 min): Separare custodial vs. self-custody.**
Exchange custodial (Bitpanda, Bitbox app, Bitcoin Suisse, Kraken, Coinbase): i processi successori passano per la piattaforma. Gli eredi hanno bisogno del login dell'account e devono completare il KYC della piattaforma per l'eredità. Annota le piattaforme utilizzate — *non* i login — nel tuo documento d'emergenza.

Self-custody (hardware wallet proprio, seed propria): la responsabilità è tutta tua.

**Passo 3 (45 min): Professionalizzare la conservazione della seed.**

Per gli averi self-custody — scegli una delle tre opzioni sopra.

Pratico per la maggior parte:
- Ordinare un backup in acciaio (Bitbox Seedcard, Cryptosteel, Billfodl)
- Stampigliare/incidere la seed nel metallo
- Creare un secondo pezzo di backup
- Un pezzo a casa in cassaforte, un pezzo in cassetta di sicurezza **o** presso una persona di fiducia

Avanzato (quando gli importi superano le 5 cifre):
- Trezor con SLIP39 → split Shamir 3-su-5
- Distribuire i frammenti a 5 persone di fiducia
- Gli eredi sanno che ce ne sono 5 e chi li detiene

**Passo 4 (30 min): Informare gli eredi — cosa e come.**

Qui la maggior parte fallisce. *Non* devi dire la seed agli eredi (sarebbe un rischio di sicurezza durante la tua vita). Devi dire loro:

- *Che* esistono averi crypto
- *Quali* wallet / exchange usi (lista, non login)
- *Dove* sono fisicamente i backup (cassaforte, banca, persone)
- *Come* procedere in caso di emergenza (procedura esatta, in quale ordine)

Regola pratica: immagina di essere tolto dal gioco stasera. I tuoi cari, con quello che hai scritto loro, sarebbero in grado di raggiungere i coin? Se no, la preparazione è incompleta.

**Passo 5 (15 min): Documentare per iscritto.**

Crea un documento che si apre in caso di successione:

```
Istruzioni successorie crypto — [tuo nome], al [data]

Averi:
  - Bitcoin (~XX BTC) — Trezor Model T, cassetto superiore della scrivania
  - Ethereum (~XX ETH) — stesso wallet
  - [altri token]
  - [Averi exchange]: Bitcoin Suisse (e-mail, KYC presso [avvocato/notaio]),
    Bitpanda (e-mail)

Conservazione seed:
  - Split Shamir 3-su-5 (SLIP39)
  - Frammento 1: cassaforte a casa
  - Frammento 2: cassetta di sicurezza UBS [filiale, n° cassetta]
  - Frammento 3: presso fratello [nome, città]
  - Frammento 4: presso padre [nome, città]
  - Frammento 5: presso notaio [nome, studio]

In caso di emergenza:
  Riunire almeno 3 di 5 frammenti, caricare in un nuovo Trezor
  (procedura: trezor.io/learn → SLIP39 Recovery), trasferire i coin
  a un indirizzo che voi controllate.
```

Questo documento **non** dovrebbe essere conservato insieme ai backup — altrimenti aiuta un ladro a trovare tutto. Deposito notarile o cassetta di sicurezza (sola, senza frammento di seed) ha senso.

## Dove Heritavo può aiutare

Divulgazione completa: sono il fondatore di Heritavo, questo articolo è sul dominio Heritavo.

Heritavo è costruito come cassaforte di successione digitale esattamente per questi scenari. Specificamente rilevante per la successione crypto:

- **Memorizzare seed phrase cifrate** (zero-knowledge, AES-256-GCM) insieme al documento di procedura sopra
- **Shamir's Secret Sharing integrato**: puoi dare alle persone di fiducia frammenti di codice (3-su-5, 2-su-3, secondo la costellazione), senza che Heritavo veda mai la seed
- **Rilascio basato su check-in**: in caso di inattività, la cassaforte viene rilasciata per i tuoi eredi, con finestra di veto se eri solo in vacanza
- **Messaggi video**: molti detentori crypto vogliono *spiegare* la procedura — un video riproducibile solo in caso di successione può portare chiarezza che un documento di testo non può

Il vantaggio rispetto a soluzioni puramente fisiche (backup in acciaio in cassetta di sicurezza) è il **rilascio automatico** — i tuoi eredi non devono indovinare se dovrebbero controllare, vengono attivamente informati.

Il vantaggio rispetto a "tutto in chiaro da qualche parte": Heritavo non vede matematicamente mai la seed. Anche noi non possiamo rilasciarla — solo i tuoi eredi con i loro frammenti.

[Inizia gratis →](/it)

## Domande frequenti

**Cosa succede con hardware wallet che si rompono?**
L'hardware è sostituibile. Finché hai la seed, puoi ripristinarla in qualsiasi altro wallet compatibile. È tutto il senso della seed phrase. Gli hardware wallet sono strumenti, non storage.

**Dovrei proteggere anche gli averi custodial via Heritavo?**
Per gli averi custodial spesso basta dire agli eredi *quali* piattaforme usi + lasciare loro il login dell'account. La piattaforma eredita normalmente. Heritavo è meno critico qui — ma può essere il posto centrale dove vivono questi dati di account.

**Cosa succede con staking, DeFi, NFT?**
Stessa logica: tutto ciò che è accessibile via chiave privata pende dalla seed. Gli NFT in un wallet sono colpiti quanto BTC. Anche i contratti di staking — alcuni hanno lock period, gli eredi devono saperlo.

**Ho bisogno di consulenza legale?**
Per la preparazione tecnica no. Per il trattamento testamentario del patrimonio crypto (valutazione, imposta successoria, riserva ereditaria): sì. Vale la pena coinvolgere un avvocato con esperienza crypto non appena gli importi diventano rilevanti.

## Conclusione

Ereditare crypto non è complicato — ma è **diverso** da qualsiasi altra classe di attivi. Nessuna autorità che aiuta sullo sfondo, nessun processo automatico, nessuna rete di sicurezza. La responsabilità è 100% tua.

La buona notizia: 1-2 ore di lavoro concentrato bastano per creare il setup pulito. Backup in acciaio o Shamir splitting, persone di fiducia chiaramente definite, procedura scritta. Niente di più.

La cattiva notizia: senza queste 1-2 ore, è statisticamente probabile che i tuoi averi crypto andranno *completamente* persi alla tua morte. Non importa quanti siano.

Articoli correlati:
- [Cosa succede agli account online dopo la morte?](/it/blog/cosa-succede-account-online-dopo-morte) — strategie per account classici
- [Come funziona una cassaforte zero-knowledge con piano di emergenza](/it/blog/come-funziona-cassaforte-zero-knowledge-piano-emergenza) — l'architettura spiegata
- [Successione digitale in Svizzera: guida giuridica](/it/blog/successione-digitale-svizzera-guida) — quadro giuridico svizzero

Domande o esperienze con successione crypto? Scrivimi a [support@heritavo.com](mailto:support@heritavo.com) — rispondo personalmente.
