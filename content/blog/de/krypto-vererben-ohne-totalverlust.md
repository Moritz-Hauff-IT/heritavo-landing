---
title: "Krypto vererben — warum 20% aller Bitcoin als verloren gelten"
description: "Seed-Phrases, Hardware-Wallets, Custodial vs. Self-Custody: was du heute tun musst, damit deine Krypto-Anlage nicht im Erbfall verloren geht. Eine praktische Anleitung mit den häufigsten Fehlerquellen."
publishedAt: "2026-05-23"
updatedAt: "2026-05-23"
keywords:
  - "Krypto vererben"
  - "Bitcoin Nachlass"
  - "Seed Phrase sicher aufbewahren"
  - "Hardware Wallet Erbe"
  - "Krypto Erbschaft Schweiz"
author: "Moritz Hauff"
image: "/images/blog/crypto.webp"
imageAlt: "Goldene Bitcoin-Münzen in warmem Licht"
---

Es ist die wahrscheinlich teuerste Form digitaler Sorglosigkeit: **rund 20% aller Bitcoin gelten heute als irreversibel verloren** — geschätzt vom Analyse-Unternehmen Chainalysis. Coins, die seit über fünf Jahren nicht mehr bewegt wurden, deren Schlüssel niemand mehr kennt. Bei aktuellen Kursen reden wir über mehrere hundert Milliarden Franken Vermögen, das niemandem mehr gehört.

Ein erheblicher Teil davon geht auf Todesfälle zurück. Menschen sterben mit Krypto-Beständen, ohne dass jemand weiss, wie man drankommt — oder ob es überhaupt etwas gibt.

Das ist nicht abstrakt. Wenn du Krypto hältst, ist die Wahrscheinlichkeit, dass deine Familie nach deinem Tod **null Franken** davon erhält, dramatisch höher als bei jeder anderen Vermögensart. Banken haben Erbschafts-Prozesse, Versicherungen melden sich, Immobilien stehen im Grundbuch. Krypto ist anders: ohne Seed-Phrase ist es weg. Punkt.

Dieser Artikel zeigt, warum das so ist, welche typischen Fehler dazu führen — und wie du es konkret diese Woche besser machen kannst.

## Warum Krypto so spezifisch ist

Bei klassischen Vermögensarten gibt es **Intermediäre**: Banken, Versicherungen, Notare, Grundbücher. Deine Erben können auch dann an dein Vermögen kommen, wenn du selbst nicht mehr in der Lage bist, ihnen zu helfen — über behördliche Prozesse, Sterbeurkunden, Erbschein.

Bei selbstverwahrtem Krypto gibt es das nicht. Die Kryptografie kennt keine Behörde. Deine Coins sind durch einen privaten Schlüssel geschützt — typischerweise repräsentiert als **Seed Phrase** (12 oder 24 Wörter aus dem BIP39-Standard). Wer die Seed hat, hat das Geld. Wer sie nicht hat, hat nichts.

Es gibt keinen Reset-Knopf. Keinen Notfall-Beauftragten der Wallet. Kein Gericht, das den Zugang anordnen kann. **Mathematisch ist das Vermögen verloren**, sobald die Seed verloren ist — auch wenn alle Welt weiss, dass dir die Coins gehört haben.

Das ist die Stärke von Krypto (kein Eingriff möglich) und gleichzeitig die grösste Falle für die Nachlassplanung.

## Die häufigsten Fehler, die ich gesehen habe

Aus Gesprächen mit Krypto-Haltern und Erben sehe ich immer wieder die gleichen Patterns:

**1. „Meine Familie weiss von der Wallet, das reicht."**
Wissen *dass* es existiert ist eine Sache. Wissen *wie man drankommt* eine ganz andere. Wenn deine Frau weiss, dass du einen Ledger im Schreibtisch hast, aber nicht weiss, wo die Seed liegt — dann sind die Coins technisch verloren. Der Ledger selbst ist nur ein Display; das Geheimnis ist die Seed.

**2. „Die Seed ist sicher in der Schublade aufgeschrieben."**
Papier in einer Schublade hat zwei Probleme: erstens kann es beim Wohnungsbrand mit dir untergehen, zweitens kann es auch *vor* deinem Tod gefunden werden — Einbruch, neugierige Putzhilfe, Kinder. Single Point of Failure mit Diebstahlsrisiko.

**3. „Ich nutze eine Custodial Exchange wie Binance / Bitpanda / Bitbox, die haben Erbschaftsprozesse."**
Stimmt teilweise: Custodial Exchanges (also Plattformen, die die Coins für dich halten) behandeln das Konto wie ein Bankkonto und übergeben es mit Sterbeurkunde an die Erben. **ABER:** dafür musst du den Account-Login kennen oder die Erben müssen ihn herausfinden können. Plus: die meisten Custodial-Plattformen sind nicht in der Schweiz, sondern in Litauen, Malta, Estland oder weiter weg. Internationale Erbschaftsprozesse können Monate dauern. Und: wenn die Exchange pleitegeht — siehe FTX 2022 — sind die Coins trotzdem weg, auch mit Erbschein.

**4. „Ich habe die Seed in 2-3 Stücke aufgeteilt und an verschiedenen Orten versteckt."**
Naive Aufteilung ist gefährlich. Wenn du eine 24-Wörter-Seed in zwei 12-Wörter-Hälften teilst, reduziert ein Angreifer mit einer Hälfte die Brute-Force-Komplexität von 2^256 auf 2^128. Das klingt nach viel — bei spezialisierter Hardware kann es in einigen Jahren knackbar werden. Plus: was, wenn ein Stück verloren geht? Dann ist *alles* weg. Echtes Secret-Sharing (Shamir) löst beides — dazu unten mehr.

**5. „Cloud-Backup, Notiz-App, E-Mail an mich selbst."**
Klassisch und tödlich. Cloud-Anbieter werden gehackt (LastPass 2022, Dropbox in der Vergangenheit, etc.). E-Mail-Konten werden übernommen. Eine Seed-Phrase, die irgendwo digital im Klartext liegt — auch verschlüsselt mit deinem Cloud-Passwort — ist immer **eine Stufe** vom Diebstahl entfernt. Krypto-Diebe scannen aktiv nach genau solchen Spuren.

## Was funktioniert: Hardware-Wallet + sichere Seed-Verwahrung

Die robuste Lösung für selbstverwahrtes Krypto besteht aus zwei Teilen:

**Teil 1: Hardware-Wallet als tägliches Werkzeug.**
Ein Gerät wie Ledger, Trezor oder BitBox hält die Seed offline, signiert Transaktionen ohne dass der Schlüssel den Chip verlässt. Selbst wenn dein Computer mit Malware kompromittiert ist, kann der Angreifer nicht an die Coins.

**Teil 2: Sichere Seed-Verwahrung für den Notfall.**
Das Hardware-Wallet selbst ist nur ein Werkzeug. Das eigentliche Geheimnis — die Seed-Phrase — muss separat und langlebig gespeichert sein, damit du im Notfall wiederherstellen kannst (wenn das Gerät kaputt geht, verloren ist, oder du gestorben bist).

Hier sind die seriösen Optionen:

### Variante A: Stahl-Backup (Cryptosteel, Billfodl, Seedplate)

Eine Metallplatte, in die die 24 Wörter eingestanzt oder eingraviert werden. Feuerfest bis 1500°C, säurefest, wasserfest. Hält Jahrhunderte. Kosten: zwischen 50 und 150 Franken.

**Pro:** quasi unzerstörbar, einmal-Investition.
**Contra:** physisches Objekt mit allen physischen Risiken (Einbruch, Verlust, Beschlagnahme). Plus: wer es findet, hat alles. Single Point of Failure.

**Aufbewahrung:** Tresor zu Hause + Bankschliessfach + bei Vertrauensperson — diversifizieren. **Aber:** dann hast du das Geheimnis an mehreren Orten, und ein Diebstahl an einem Ort kostet alles.

### Variante B: Shamir's Secret Sharing — Seed in Fragmente teilen

Mathematisch elegant: die Seed wird in N Fragmente aufgeteilt (kryptografisch korrekt — nicht naiv halbiert), von denen M zur Wiederherstellung gebraucht werden. Zum Beispiel 3-von-5: fünf Personen halten je ein Fragment, drei müssen sich zusammentun.

Eigenschaften:
- **Weniger als M Fragmente verraten mathematisch nichts** — auch keine partielle Information
- **M oder mehr Fragmente** rekonstruieren die Seed exakt
- Du kannst ein Fragment verlieren, ohne den Zugang zu verlieren
- Eine einzelne Person kann nicht an deine Coins, auch nicht mit ihrem Fragment

Das ist der Goldstandard für selbstverwahrtes Krypto-Erbe — kein Single Point of Failure, kein Verrats-Risiko, mathematisch beweisbar sicher.

**Trezor unterstützt SLIP39** (Trezor's Variante von Shamir) seit 2019 direkt im Gerät. Du kannst die Seed schon bei der Erstellung in Shares aufteilen.

**Für andere Hardware-Wallets** geht das über externe Tools oder einen Tresor-Dienst, der Shamir-Splitting eingebaut hat — siehe weiter unten.

### Variante C: Multi-Signature (Multisig) Wallet

Statt einer einzigen Seed gibt es mehrere Schlüssel, von denen eine Mindestanzahl signieren muss (z.B. 2-von-3). Funktional ähnlich zu Shamir, aber on-chain implementiert. Bitcoin, Ethereum und die meisten grossen Chains unterstützen das.

**Pro:** native Blockchain-Funktion, kein Vertrauen auf externe Tools nötig.
**Contra:** technisch anspruchsvoller einzurichten, höhere Transaktionsgebühren, komplexer im Recovery-Fall (Erben müssen mit mehreren Geräten umgehen können).

Für die meisten Familien-Setups ist Shamir-Splitting (Variante B) der bessere Trade-off — die Erben brauchen keine Krypto-Expertise, nur die Codes.

## Konkrete Anleitung: was diese Woche zu tun ist

**Schritt 1 (15 Min): Bestandsaufnahme.**
Welche Krypto-Bestände hast du? Liste alle Wallets, Exchanges, Staking-Konten, DeFi-Positionen. Vergiss Cold-Storage-Adressen aus deiner früheren ICO-Phase nicht — die sind oft mehr wert geworden als der Rest.

**Schritt 2 (10 Min): Custodial vs. Self-Custody trennen.**
Custodial Exchanges (Bitpanda, Bitbox-App, Bitcoin Suisse, Kraken, Coinbase): hier laufen Erbschaftsprozesse über die Plattform. Die Erben brauchen den Account-Login und müssen den KYC-Prozess für die Erbschaft durchlaufen. Notiere die genutzten Plattformen — *nicht* die Logins — in deinem Notfall-Dokument.

Self-Custody (eigene Hardware-Wallet, eigene Seed): hier liegt die Verantwortung komplett bei dir.

**Schritt 3 (45 Min): Seed-Verwahrung professionalisieren.**

Für Self-Custody-Bestände — wähle eine der drei Varianten oben.

Praktisch für die meisten:
- Stahl-Backup bestellen (Bitbox Seedcard, Cryptosteel, Billfodl)
- Seed in das Metall stempeln/gravieren
- Ein zweites Backup-Stück erstellen
- Ein Stück zu Hause im Tresor, ein Stück Bankschliessfach **oder** bei einer Vertrauensperson

Fortgeschritten (wenn mehr als 5-stellige Beträge):
- Trezor mit SLIP39 nutzen → 3-von-5-Shamir-Aufteilung
- Fragmente an 5 Vertrauenspersonen verteilen
- Erben wissen, dass es 5 gibt und wer sie hält

**Schritt 4 (30 Min): Erben informieren — was und wie.**

Das ist der Teil, an dem die meisten scheitern. Du musst deinen Erben *nicht* die Seed sagen (das wäre ein Sicherheitsrisiko zu Lebzeiten). Du musst ihnen sagen:

- *Dass* es Krypto-Bestände gibt
- *Welche* Wallets / Exchanges du nutzt (Liste, nicht Logins)
- *Wo* die Backups physisch liegen (Tresor, Bank, Personen)
- *Wie* sie im Notfall vorgehen sollen (genaue Anleitung, in welcher Reihenfolge)

Faustregel: stell dir vor, du wirst heute Abend aus dem Spiel genommen. Wären deine Liebsten in der Lage, mit dem, was du ihnen aufgeschrieben hast, an die Coins zu kommen? Wenn nein, ist die Vorbereitung unvollständig.

**Schritt 5 (15 Min): Schriftlich festhalten.**

Erstelle ein Dokument, das im Erbfall geöffnet wird:

```
Krypto-Nachlass-Anweisung — [dein Name], Stand [Datum]

Bestände:
  - Bitcoin (~XX BTC) — Trezor Model T, Schreibtisch oberer Schubladenfach
  - Ethereum (~XX ETH) — selbe Wallet
  - [andere Tokens]
  - [Exchange-Bestände]: Bitcoin Suisse (E-Mail-Adresse, KYC liegt bei
    [Anwalt/Notar]), Bitpanda (E-Mail-Adresse)

Seed-Aufbewahrung:
  - 3-von-5-Shamir-Splits (SLIP39)
  - Fragment 1: Tresor zuhause
  - Fragment 2: Bankschliessfach UBS [Filiale, Schliessfach-Nr]
  - Fragment 3: bei Bruder [Name, Wohnort]
  - Fragment 4: bei Vater [Name, Wohnort]
  - Fragment 5: bei Notar [Name, Kanzlei]

Im Notfall:
  Mindestens 3 von 5 Fragmenten zusammenbringen, in einen neuen Trezor laden
  (Anleitung: trezor.io/learn → SLIP39 Recovery), Coins auf eine Adresse
  übertragen, die ihr kontrolliert.
```

Dieses Dokument selbst sollte **nicht** zusammen mit den Backups liegen — sonst hilft es einem Dieb, alles zu finden. Notarielles Hinterlegen oder Bankschliessfach (alleine, ohne Seed-Fragment) ist sinnvoll.

## Wo Heritavo helfen kann

Volle Offenlegung: ich bin der Gründer von Heritavo, dieser Artikel liegt auf der Heritavo-Domain.

Heritavo ist als digitaler Nachlass-Tresor genau für solche Szenarien gebaut. Konkret für Krypto-Erbe relevant:

- **Seed-Phrasen verschlüsselt speichern** (Zero-Knowledge, AES-256-GCM) zusammen mit der Anleitung wie oben
- **Shamir's Secret Sharing eingebaut**: du kannst Vertrauenspersonen Code-Fragmente geben (3-von-5, 2-von-3, je nach Konstellation), ohne dass Heritavo selbst die Seed je sieht
- **Check-in-basierte Freigabe**: bei Inaktivität wird der Tresor für deine Erben freigegeben, mit Veto-Fenster falls du nur in den Ferien warst
- **Video-Botschaften**: viele Krypto-Halter wollen die Anleitung *erklären* — ein Video, das nur im Erbfall abspielbar ist, kann Klarheit schaffen die ein Textdokument nicht hat

Der Vorteil gegenüber rein physischen Lösungen (Stahl-Backup im Bankschliessfach) ist die **Automatik der Freigabe** — deine Erben müssen nicht raten ob sie nachgucken sollten, sie werden aktiv informiert.

Der Vorteil gegenüber „alles im Klartext irgendwo": Heritavo sieht die Seed mathematisch nie. Auch wir können sie nicht herausgeben — nur deine Erben mit ihren Fragmenten.

[Kostenlos starten →](/de)

## Häufige Fragen

**Was ist mit Hardware-Wallets, die kaputtgehen?**
Die Hardware ist ersetzbar. Solange du die Seed hast, kannst du sie in jedes andere kompatible Wallet wiederherstellen. Das ist der ganze Sinn der Seed Phrase. Hardware-Wallets sind Werkzeuge, nicht Speicher.

**Sollte ich auch Custodial-Bestände via Heritavo absichern?**
Für Custodial-Bestände reicht oft, den Erben zu sagen *welche* Plattformen du nutzt + ihnen den Account-Login zu hinterlassen. Die Plattform erbt dann normal. Heritavo ist hier weniger kritisch — kann aber die zentrale Stelle sein, wo diese Account-Daten liegen.

**Was ist mit Staking, DeFi, NFTs?**
Gleiche Logik: alles, was via privaten Schlüssel zugänglich ist, hängt an der Seed. NFTs in einer Wallet sind genauso betroffen wie BTC. Staking-Verträge auch — manche haben Lock-Periods, das müssen die Erben wissen.

**Brauche ich rechtliche Beratung?**
Für die technische Vorbereitung nicht. Für die testamentarische Behandlung von Krypto-Vermögen (Bewertung, Erbschaftssteuer, Pflichtteil): ja. Es lohnt sich, einen Anwalt mit Krypto-Erfahrung einzubeziehen, sobald die Beträge relevant werden.

## Fazit

Krypto vererben ist nicht kompliziert — aber es ist **anders** als jede andere Vermögensart. Es gibt keine Behörde, die im Hintergrund hilft, keine automatischen Prozesse, kein Sicherheitsnetz. Die Verantwortung liegt zu 100% bei dir.

Die gute Nachricht: 1-2 Stunden konzentrierte Arbeit reichen, um das saubere Setup zu erstellen. Stahl-Backup oder Shamir-Splitting, Vertrauenspersonen klar definieren, Anleitung schriftlich hinterlegen. Mehr ist es nicht.

Die schlechte Nachricht: ohne diese 1-2 Stunden ist es statistisch wahrscheinlich, dass deine Krypto-Bestände bei deinem Tod *vollständig* verloren gehen. Egal wie viel es ist.

Verwandte Artikel:
- [Was passiert mit Online-Konten nach dem Tod?](/de/blog/online-konten-nach-tod) — Strategien für klassische Konten
- [Wie ein Zero-Knowledge-Tresor mit Notfallplan funktioniert](/de/blog/wie-zero-knowledge-tresor-mit-notfallplan-funktioniert) — die Architektur dahinter erklärt
- [Digitaler Nachlass in der Schweiz: rechtlicher Leitfaden](/de/blog/digitaler-nachlass-schweiz-leitfaden) — Schweizer Rechtsrahmen

Fragen oder eigene Erfahrungen mit Krypto-Erbe? Schreib mir an [support@heritavo.com](mailto:support@heritavo.com) — ich antworte selbst.
