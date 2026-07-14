---
title: "Wie ein Zero-Knowledge-Tresor mit Notfallplan funktioniert"
description: "Was Zero-Knowledge wirklich heisst, wie ein automatisierter Notfallplan ohne den Anbieter funktioniert, und welche Freigabe-Modi es gibt. Eine technische und praktische Erklärung."
publishedAt: "2026-05-22"
updatedAt: "2026-05-22"
keywords:
  - "Zero-Knowledge-Tresor"
  - "Notfallplan digital"
  - "Ende-zu-Ende-Verschlüsselung"
  - "Argon2id"
  - "Shamir's Secret Sharing"
author: "Moritz Hauff"
image: "/images/blog/zero-knowledge.webp"
imageAlt: "Alter Messingschlüssel auf einer Computertastatur"
---

Wenn man digitale Vorsorge ernst nimmt, stellt sich schnell eine zentrale Frage: **Wer kann meine sensiblen Daten lesen?** Bei klassischen Cloud-Diensten ist die Antwort: theoretisch der Anbieter, der Hoster, im Worst-Case Behörden mit Zugriff. Bei einem Zero-Knowledge-Tresor ist die Antwort: **niemand außer dir**, und im Ernstfall die Vertrauenspersonen, die du explizit benannt hast.

Das klingt zunächst widersprüchlich: Wie kann der Anbieter eines Vorsorge-Dienstes meine Daten "nicht kennen", aber gleichzeitig im Ernstfall an meine Vertrauenspersonen übergeben? Die Antwort liegt in der Architektur — die ist überraschend elegant, wenn man sie einmal verstanden hat.

Dieser Artikel erklärt sie Schritt für Schritt — was Zero-Knowledge konkret bedeutet, wie der automatisierte Notfallplan funktioniert, und welche Freigabe-Modi es gibt. Beispiele beziehen sich auf [Heritavo](/de), das genau nach diesem Prinzip gebaut ist.

## Was "Zero-Knowledge" konkret bedeutet

Der Begriff wird inflationär verwendet — fast jeder Cloud-Anbieter wirbt damit. Die strenge Definition ist aber präzise: **der Anbieter sieht nichts ausser verschlüsselten Bytes**. Keine Datei-Namen, keine Suchbegriffe, keine Inhalte, keine Schlüssel.

Praktisch heisst das:

1. **Verschlüsselung passiert im Browser**, nicht auf dem Server. Wenn du ein Passwort speicherst, wird es vor dem Hochladen mit AES-256-GCM (einem etablierten symmetrischen Verfahren) verschlüsselt.
2. **Der Schlüssel verlässt nie dein Gerät**. Er wird aus deinem Master-Passwort abgeleitet — über einen rechenintensiven Algorithmus namens Argon2id, der zusätzlich gegen Brute-Force schützt.
3. **Der Server empfängt nur Bytes-Salat**. Wenn der Server kompromittiert würde, wären die Daten wertlos — ohne dein Passwort kann sie niemand entschlüsseln.

Das Master-Passwort selbst geht auch nicht an den Server. Stattdessen wird ein abgeleiteter Hash zur Authentifizierung verwendet, der nicht zum Entschlüsseln taugt.

Konsequenz: **Wenn du dein Master-Passwort vergisst und keine Recovery-Methode eingerichtet hast, sind die Daten unwiederbringlich verloren.** Das ist die direkte Kehrseite von Zero-Knowledge — der Anbieter kann dir nicht helfen, weil er buchstäblich nichts weiss.

## Das Notfallplan-Problem

Hier wird es spannend: Zero-Knowledge bedeutet, dass der Anbieter dich nicht entsperren kann. Aber bei digitaler Vorsorge ist genau das nötig — im Ernstfall sollen Vertrauenspersonen Zugriff bekommen, ohne dass du sie selbst entsperren kannst (du bist ja nicht mehr da, oder handlungsunfähig).

Wie funktioniert das, ohne dass der Anbieter den Schlüssel kennt?

Die Antwort ist konzeptuell einfach: **du teilst den Schlüssel mit deinen Vertrauenspersonen, bevor der Ernstfall eintritt** — auf eine kontrollierte Art, die der Anbieter nicht beeinflussen kann.

Es gibt drei Wege das umzusetzen, jeder mit unterschiedlichen Trade-offs zwischen Komfort und Sicherheit.

## Freigabe-Modus 1: Recovery Sheet (testament)

Das einfachste Modell. Du erzeugst beim Setup einen physischen Recovery-Code — als PDF zum Ausdrucken. Den bewahrst du an einem sicheren Ort auf: im Safe zu Hause, beim Notar, in einem Bankschliessfach.

Im Ernstfall geben deine Vertrauenspersonen diesen Code ein und können den Tresor entschlüsseln.

**Vorteil:** vollständig Zero-Knowledge. Der Anbieter sieht den Code nie. Auch bei einem totalen Server-Breach bleibt der Tresor sicher.

**Nachteil:** Single Point of Failure auf der physischen Seite — wenn der Safe gleichzeitig mit dir untergeht (Brand, Diebstahl), ist auch der Recovery-Code weg.

**Wann sinnvoll:** wenn du eine sehr sichere physische Aufbewahrung hast (z.B. Notar oder Bankschliessfach), und mit dem Single-Point-of-Failure-Risiko leben kannst.

## Freigabe-Modus 2: Shamir's Secret Sharing (Code-Print)

Hier wird es mathematisch eleganter. Statt eines einzelnen Recovery-Codes wird der Schlüssel in **N Fragmente** zerlegt, von denen **M** zum Wiederherstellen gebraucht werden. Z.B. 3-aus-5: fünf Personen bekommen je ein Fragment, drei davon müssen zusammenkommen.

Das ist ein etabliertes kryptographisches Verfahren von Adi Shamir (einer der Erfinder von RSA), 1979 veröffentlicht. Es hat zwei wichtige Eigenschaften:

1. **Mit weniger als M Fragmenten lässt sich gar nichts ableiten** — nicht ein bisschen, nicht teilweise, gar nichts. Mathematisch.
2. **Mit M oder mehr Fragmenten lässt sich der Schlüssel exakt rekonstruieren.**

Du gibst deinen Vertrauenspersonen je ein gedrucktes Codeblatt. Im Ernstfall müssen mindestens M von N Personen zusammenkommen, ihre Codes eingeben — und nur dann öffnet sich der Tresor.

**Vorteil:** kein Single Point of Failure. Du kannst eine Person verlieren (Tod, Umzug, Streit) und kommst trotzdem an deine Daten. Plus: keine Einzelperson kann allein auf den Tresor zugreifen (Schutz vor "feindlichen Erben" oder kompromittierten Vertrauenspersonen).

**Nachteil:** Organisations-Aufwand — alle Codes müssen physisch verteilt und gut aufbewahrt werden. Bei sehr weit verstreuten Personen kann die Wiedervereinigung im Ernstfall logistisch komplex sein.

**Wann sinnvoll:** bei mehreren Vertrauenspersonen mit unterschiedlichen Standorten (typische Familien-Konstellation). Der robusteste Modus für ernsthafte Vorsorge.

## Freigabe-Modus 3: Shamir Code per E-Mail

Wie Modus 2, aber die Codes werden per E-Mail an die Vertrauenspersonen verschickt statt physisch verteilt.

**Vorteil:** bequem, schnell aufgesetzt. Keine ausgedruckten Codes zum Verlieren.

**Nachteil:** das ist **nicht mehr 100% Zero-Knowledge**. Der E-Mail-Versand passiert über den Anbieter-Server. Theoretisch könnte der Betreiber die Codes mitlesen, theoretisch könnte ein E-Mail-Provider das auch.

In der Praxis: solides Sicherheitsniveau für die meisten User. Aber für besonders sensible Use-Cases (Journalist:innen mit Quellenschutz, Anwält:innen mit Mandantengeheimnissen) ist Modus 1 oder 2 die bessere Wahl.

**Wann sinnvoll:** wenn maximaler Komfort gewünscht ist und das Threat-Model den E-Mail-Pfad als ausreichend sicher klassifiziert.

## Wie der Notfallplan ausgelöst wird

Die Freigabe-Modi regeln das **Wie**. Aber wann startet der Prozess überhaupt? Bei klassischen Inactive-Account-Funktionen ist das Inaktivität — du loggst dich z.B. 6 Monate nicht ein, dann werden Vertrauenspersonen benachrichtigt.

Bei einem dedizierten Vorsorge-Tresor wie Heritavo läuft es ähnlich, aber mit feinerer Steuerung — Check-In-basiert:

1. **Du wählst ein Check-In-Intervall** — z.B. alle 4 Wochen.
2. **Vor Ablauf bekommst du Erinnerungs-Mails** — typisch 7 Tage vor Ablauf.
3. **Wenn du nicht reagierst, wird die Freigabe vorbereitet** — Vertrauenspersonen werden informiert.
4. **Veto-Frist** — typisch 72 Stunden, in denen du oder Vertrauenspersonen den Prozess noch stoppen können (z.B. wenn du nur im Urlaub warst).
5. **Wenn niemand stoppt → Freigabe wird ausgelöst** — die Vertrauenspersonen können nun ihre Codes eingeben und den Tresor öffnen.

Wichtig: **dieser ganze Prozess läuft automatisch**. Der Anbieter braucht keine externe Trigger-Eingabe (keine Sterbeurkunde, kein Anruf). Das ist gleichzeitig die grosse Stärke und die zentrale Designentscheidung — die Auslösung basiert auf deinem Verhalten (Check-In) statt auf Behörden-Bestätigung.

## Was alles im Tresor liegen kann

Ein klassischer Passwort-Manager speichert primär Logins. Ein dedizierter Vorsorge-Tresor hat einen breiteren Scope — alle Daten die "überleben" sollen:

- **Passwörter und Logins** — wie ein Passwort-Manager
- **Dokumente** — Versicherungspolicen, Mietverträge, Steuerbescheide, gescannte Dokumente
- **Vermächtnis-Videos** — persönliche Botschaften an Familie, die erst bei der Freigabe abspielbar sind
- **Krypto-Seed-Phrasen** — der wichtigste Anwendungsfall ohne Alternative
- **Notfallkontakte** — wer wie zu informieren ist
- **Schritt-für-Schritt-Anweisungen** — "wenn ihr das lest, macht zuerst X, dann Y"

Der wichtige Unterschied zu täglich-genutzten Passwort-Managern: **Auto-Fill und Mobile-Apps fehlen meist bewusst**. Das ist kein Bug — wenn du den Tresor täglich benutzen würdest, hättest du eine grössere Angriffsoberfläche. Vorsorge-Daten ändern sich selten; ein nüchternes Web-Interface reicht.

## Was im Ernstfall passiert (kompletter Flow)

Stell dir vor, du verstirbst oder wirst handlungsunfähig. Wie genau läuft die Freigabe ab? Hier der typische Flow bei einem Setup mit Recovery Sheet:

1. **Tag 0:** Verpasste Check-In-Frist. System sendet Reminder an dich.
2. **Tag 7-30** (konfigurierbar): zweite und dritte Reminder. Wenn weiterhin keine Reaktion → Freigabe-Prozess startet.
3. **Tag 30-37:** Vertrauenspersonen werden per E-Mail informiert. Sie erfahren, dass die Freigabe vorbereitet wird.
4. **72h Veto-Frist:** Vertrauenspersonen oder du selbst können den Prozess noch stoppen.
5. **Nach Veto-Frist:** Freigabe-Link wird aktiv. Vertrauenspersonen können den Tresor entschlüsseln, indem sie den Recovery Code (Sheet) oder ihre Shamir-Fragmente eingeben.
6. **Entschlüsselung im Browser:** wieder Zero-Knowledge — der Server liefert nur verschlüsselte Daten, die Entschlüsselung passiert lokal auf dem Gerät der Vertrauenspersonen.
7. **Download als ZIP:** alle Daten — Passwörter, Dokumente, Videos — werden als verschlüsseltes ZIP-Archiv heruntergeladen. Die Vertrauenspersonen behalten die Daten lokal.

Wichtig: nach der Freigabe ist der ursprüngliche Tresor weiterhin **verschlüsselt** auf dem Server. Der Anbieter hat zu keinem Zeitpunkt etwas im Klartext gesehen. Die Vertrauenspersonen haben jetzt aber den Schlüssel und können beliebig oft entschlüsseln.

## Wo es trotzdem auf Vertrauen ankommt

Ehrlichkeit ist wichtig: auch Zero-Knowledge-Systeme erfordern an einer Stelle Vertrauen — nämlich in **den Code der Verschlüsselung**. Wenn der Anbieter eine manipulierte Browser-Version ausliefert, könnte er theoretisch das Master-Passwort beim Eintippen abfangen.

Mitigationen dagegen:

- **Open-Source-Crypto-Bibliotheken** — die kryptographischen Algorithmen (AES, Argon2id, Shamir) sind etablierte Standards mit veröffentlichten Implementierungen
- **Auditierte Code-Bases** — formelle Sicherheits-Audits durch unabhängige Firmen
- **Schweizer Rechtsrahmen** — Anbieter unterliegen Schweizer Datenschutzgesetz, das Anbieter-Manipulation aktiv verbietet
- **Reproducible builds / public source** — bei sehr sensiblen Use-Cases prüfst du den Source-Code selbst

Im Heritavo-Fall: die Crypto-Komponenten basieren auf etablierten Web-Crypto-API-Standards und hash-wasm (Argon2id-Implementierung). Hosting in der Schweiz bei Infomaniak. Das Schweizer Datenschutzgesetz (DSG) verbietet aktive Schwächung der Verschlüsselung durch den Anbieter.

## Wann ein Zero-Knowledge-Tresor mit Notfallplan Sinn macht

Nicht für jeden Use-Case. Für tägliche Browser-Logins ist ein klassischer Passwort-Manager besser geeignet — der hat Auto-Fill und Mobile-Apps.

Aber für **digitale Vorsorge** — Daten und Inhalte die überleben sollen, nicht täglich genutzt werden, aber im Ernstfall verfügbar sein müssen — ist dieser Tresor-Typ exakt das richtige Werkzeug.

Typische Use-Cases:

- **Krypto-Seed-Vererbung** — der wichtigste Anwendungsfall ohne Alternative
- **Wichtige Dokumente** an Familie übergeben (Verträge, Versicherungen, Bankunterlagen)
- **Persönliche Botschaften** an Angehörige (Vermächtnis-Videos, geschriebene Briefe)
- **Notfall-Anweisungen** für komplexe Lebenssituationen

Wenn du mit Heritavo arbeiten willst — der Free-Plan reicht für 10 Einträge und 1 Notfallkontakt, ist gratis, kein Kreditkarte nötig. Damit kannst du das Konzept ausprobieren und sehen ob es zu dir passt.

[Heritavo Free ausprobieren](/de)

Verwandte Artikel:
- [Was passiert mit Online-Konten nach dem Tod?](/de/blog/online-konten-nach-tod) — die Frage, die Heritavo zu lösen versucht
- [Digitaler Nachlass in der Schweiz: rechtlicher Leitfaden](/de/blog/digitaler-nachlass-schweiz-leitfaden) — der rechtliche Rahmen

Fragen? Schreib mir an [support@heritavo.com](mailto:support@heritavo.com) — ich antworte selbst.
