/**
 * Strukturierte Daten als serverseitig gerendertes <script>. Bewusst nicht
 * next/script: dessen Inhalt landet nur im RSC-Payload und wird erst per
 * JavaScript eingefuegt — KI-Crawler ohne JS-Ausfuehrung sehen ihn nie.
 * `<` wird escaped, damit kein String im JSON das Script-Tag schliessen kann.
 * Kein Nonce noetig: ld+json ist kein ausfuehrbares Script.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
