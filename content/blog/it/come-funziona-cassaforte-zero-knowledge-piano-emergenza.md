---
title: "Come funziona una cassaforte zero-knowledge con piano di emergenza"
description: "Cosa significa davvero zero-knowledge, come funziona un piano di emergenza automatizzato senza coinvolgere il fornitore, e quali modalità di condivisione esistono. Una spiegazione tecnica e pratica."
publishedAt: "2026-05-22"
updatedAt: "2026-05-22"
keywords:
  - "cassaforte zero-knowledge"
  - "piano emergenza digitale"
  - "crittografia end-to-end"
  - "Argon2id"
  - "Shamir Secret Sharing"
author: "Moritz Hauff"
---

Quando si prende sul serio la pianificazione digitale, emerge subito una domanda centrale: **chi può leggere i miei dati sensibili?** Con i servizi cloud classici, la risposta è: teoricamente il fornitore, l'host, nel peggiore dei casi le autorità. Con una cassaforte zero-knowledge, la risposta è: **nessuno tranne te**, e in caso di emergenza le persone di fiducia che hai esplicitamente designato.

Sembra contraddittorio all'inizio: come può un fornitore "non conoscere" i miei dati ma comunque consegnarli alle mie persone di fiducia in emergenza? La risposta è nell'architettura — sorprendentemente elegante una volta compresa.

Questo articolo lo spiega passo per passo — cosa significa zero-knowledge in concreto, come funziona il piano di emergenza automatizzato, e quali modalità di condivisione esistono. Gli esempi si riferiscono a [Heritavo](/it), costruito esattamente su questo principio.

## Cosa significa "Zero-Knowledge" in concreto

Il termine è abusato — quasi ogni fornitore cloud lo usa nel marketing. La definizione rigorosa è precisa: **il fornitore non vede nulla tranne byte cifrati**. Nessun nome di file, nessun termine di ricerca, nessun contenuto, nessuna chiave.

In pratica:

1. **La cifratura avviene nel tuo browser**, non sul server. Quando salvi una password, viene cifrata con AES-256-GCM (algoritmo simmetrico consolidato) prima dell'upload.
2. **La chiave non lascia mai il tuo dispositivo**. Viene derivata dalla tua master password tramite un algoritmo computazionalmente intensivo chiamato Argon2id, che protegge anche dal brute-force.
3. **Il server riceve solo insalata di byte**. Se il server viene compromesso, i dati sono inutili.

Anche la master password stessa non arriva al server. Al suo posto viene usato un hash derivato per l'autenticazione, che non può essere usato per decifrare.

Conseguenza: **se dimentichi la master password e non hai configurato un metodo di recupero, i dati sono irrimediabilmente persi.** È il rovescio diretto dello zero-knowledge — il fornitore non può aiutare, perché letteralmente non sa nulla.

## Il problema del piano di emergenza

Qui diventa interessante: zero-knowledge significa che il fornitore non può sbloccarti. Ma per la pianificazione digitale è esattamente ciò che serve — le persone di fiducia devono ottenere accesso in emergenza, senza che tu possa sbloccarle tu stesso (non ci sei più, o sei incapace).

Come funziona senza che il fornitore conosca la chiave?

La risposta è concettualmente semplice: **condividi la chiave con le persone di fiducia prima che si presenti l'emergenza** — in modo controllato che il fornitore non può influenzare.

Ci sono tre modi per implementarlo, ognuno con compromessi diversi tra comodità e sicurezza.

## Modalità 1: Recovery Sheet (testamento)

Il modello più semplice. Durante la configurazione generi un codice di recupero fisico — come PDF stampabile. Lo conservi in un luogo sicuro: cassaforte di casa, da un notaio, in una cassetta di sicurezza bancaria.

In emergenza, le persone di fiducia inseriscono questo codice e possono decifrare la cassaforte.

**Pro:** completamente zero-knowledge. Il fornitore non vede mai il codice. Anche con una violazione totale del server, la cassaforte rimane sicura.

**Contro:** single point of failure sul lato fisico — se la cassaforte va persa con te (incendio, furto), va perso anche il codice.

**Quando ha senso:** se hai un deposito fisico molto sicuro (notaio o cassetta bancaria), e accetti il rischio del single-point-of-failure.

## Modalità 2: Shamir's Secret Sharing (Code Print)

Qui diventa matematicamente elegante. Invece di un singolo codice di recupero, la chiave viene divisa in **N frammenti**, di cui ne servono **M** per ricostruire. Es. 3-su-5: cinque persone ricevono un frammento ciascuna, tre devono unirsi.

È uno schema crittografico consolidato di Adi Shamir (co-inventore di RSA), pubblicato nel 1979. Ha due proprietà importanti:

1. **Con meno di M frammenti, nulla può essere dedotto** — non parzialmente, non un indizio, nulla. Matematicamente.
2. **Con M o più frammenti, la chiave si ricostruisce esattamente.**

Dai a ciascuna persona di fiducia un foglio di codice stampato. In emergenza, almeno M di N persone devono unirsi, inserire i loro codici — e solo allora la cassaforte si apre.

**Pro:** nessun single point of failure. Puoi perdere una persona (morte, trasloco, conflitto) e accedere comunque. Inoltre: nessuna singola persona può accedere alla cassaforte da sola (protezione contro eredi ostili).

**Contro:** carico organizzativo — tutti i codici devono essere distribuiti fisicamente e conservati. Con persone disperse, la riunione in emergenza può essere logisticamente complessa.

**Quando ha senso:** con più persone di fiducia in luoghi diversi (costellazione familiare tipica). La modalità più robusta per una pianificazione seria.

## Modalità 3: Codice Shamir via email

Come Modalità 2, ma i codici vengono inviati via email alle persone di fiducia invece di essere distribuiti fisicamente.

**Pro:** comodo, veloce da configurare.

**Contro:** **non è più 100% zero-knowledge**. La consegna email passa attraverso il server del fornitore. Teoricamente l'operatore potrebbe leggere i codici.

**Quando ha senso:** quando si desidera massima comodità e il threat model classifica il percorso email come sufficientemente sicuro.

## Come si attiva il piano di emergenza

Le modalità di condivisione governano il **come**. Ma quando inizia il processo? Con una cassaforte di successione dedicata come Heritavo, è basato su check-in:

1. **Scegli un intervallo di check-in** — es. ogni 4 settimane.
2. **Prima della scadenza ricevi email di promemoria** — tipicamente 7 giorni prima.
3. **Se non rispondi, il rilascio si prepara** — le persone di fiducia vengono informate.
4. **Finestra di veto** — tipicamente 72 ore in cui tu o le persone di fiducia potete ancora fermare il processo.
5. **Se nessuno ferma → il rilascio si attiva** — le persone di fiducia possono inserire i loro codici e aprire la cassaforte.

**L'intero processo funziona automaticamente**. Il fornitore non ha bisogno di alcun input esterno di attivazione (nessun certificato di morte, nessuna chiamata).

## Cosa può vivere nella cassaforte

Un classico password manager memorizza principalmente login. Una cassaforte di successione dedicata ha portata più ampia — tutti i dati che dovrebbero "sopravvivere":

- **Password e login** — come un password manager
- **Documenti** — polizze assicurative, contratti di affitto, dichiarazioni fiscali, documenti scansionati
- **Video di eredità** — messaggi personali alla famiglia, riproducibili solo dopo il rilascio
- **Seed phrase crypto** — il caso d'uso più importante senza alternative
- **Contatti di emergenza** — chi notificare e come
- **Istruzioni passo-passo**

Differenza chiave rispetto ai password manager quotidiani: **autofill e app mobili mancano di solito deliberatamente**. Non è un bug — se usassi la cassaforte quotidianamente, avresti una superficie di attacco maggiore.

## Cosa succede in emergenza (flusso completo)

1. **Giorno 0:** check-in mancato. Il sistema invia promemoria.
2. **Giorno 7-30:** secondo e terzo promemoria. Ancora nessuna risposta → inizia il processo di rilascio.
3. **Giorno 30-37:** persone di fiducia notificate via email.
4. **Finestra di veto 72h:** persone di fiducia o tu potete ancora fermare.
5. **Dopo il veto:** il link di rilascio diventa attivo. Le persone possono decifrare inserendo Recovery Code o frammenti Shamir.
6. **Decifratura nel browser:** di nuovo zero-knowledge — il server consegna solo dati cifrati, la decifratura avviene localmente.
7. **Download come ZIP:** tutti i dati — password, documenti, video — vengono scaricati come archivio ZIP cifrato.

## Dove serve ancora fiducia

L'onestà conta: anche i sistemi zero-knowledge richiedono fiducia in un punto — nel **codice di cifratura stesso**. Se il fornitore serve una versione browser manipolata, potrebbe teoricamente intercettare la master password mentre la digiti.

Mitigazioni:
- **Librerie crypto open-source** — algoritmi consolidati
- **Codebase auditate** — audit di sicurezza formali da firme indipendenti
- **Quadro giuridico svizzero** — fornitori soggetti alla LPD svizzera
- **Build riproducibili / source pubblico** — per casi d'uso molto sensibili

Nel caso di Heritavo: componenti crypto basati su Web Crypto API standard e hash-wasm. Hosting in Svizzera presso Infomaniak.

## Quando una cassaforte zero-knowledge con piano di emergenza ha senso

Non per ogni caso d'uso. Per i login quotidiani del browser, un password manager classico è più adatto.

Ma per la **successione digitale** — dati e contenuti che devono sopravvivere, non usati quotidianamente, ma disponibili in emergenza — questo tipo di cassaforte è lo strumento giusto.

Casi d'uso tipici:
- **Trasmissione seed crypto** — il caso più importante senza alternative
- **Documenti importanti** trasmessi alla famiglia
- **Messaggi personali** ai familiari (video di eredità, lettere)
- **Istruzioni di emergenza** per situazioni di vita complesse

Se vuoi provare Heritavo — il piano Free copre 10 voci e 1 contatto di emergenza, è gratis, senza carta di credito.

[Prova Heritavo Free](/it)

Articoli correlati:
- [Cosa succede ai tuoi account online dopo la morte?](/it/blog/cosa-succede-account-online-dopo-morte) — la domanda che Heritavo cerca di risolvere
- [Successione digitale in Svizzera: guida legale](/it/blog/successione-digitale-svizzera-guida) — il quadro giuridico

Domande? Scrivimi a [support@heritavo.com](mailto:support@heritavo.com).
