const FACTS: [string, string][] = [
  ["Product", "Zero-knowledge vault for digital legacy planning (SaaS)"],
  ["Headquarters", "Tägerwilen (Thurgau), Switzerland"],
  ["Founder", "Moritz Hauff"],
  ["Hosting", "Switzerland"],
  ["Languages", "German, English, French, Italian"],
  ["Pricing", "Free to CHF 89/year (Family, 5 people); Pro CHF 39/year"],
  ["Release methods", "Recovery sheet (offline), access code by email, printed access code"],
  ["Website", "heritavo.com"],
];

export default function PressEn() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Press & Media</h1>
        <p className="text-slate-600">
          Everything journalists need to cover Heritavo: boilerplate, fact sheet, logos and a
          direct line to the founder. For interviews, background conversations or test
          accounts, get in touch any time — we usually reply within one business day.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">About Heritavo (boilerplate)</h2>
        <p className="text-slate-600">The following text may be reproduced verbatim:</p>
        <blockquote className="border-l-2 border-slate-200 pl-4 text-slate-600">
          Heritavo is a Swiss online service for digital legacy and emergency planning.
          Passwords, documents and personal messages are stored with end-to-end encryption —
          in a way that not even Heritavo itself can read them — and are handed over
          automatically and discreetly to designated trusted contacts when the time comes.
          The service is hosted in Switzerland and available in German, English, French and
          Italian.
        </blockquote>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Fact sheet</h2>
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
        <h2 className="font-semibold text-slate-900">Story angles</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            When someone dies or falls seriously ill, most families are locked out of their
            relative&apos;s accounts — from online banking to the photo archive.
          </li>
          <li>
            Zero-knowledge encryption means the provider is technically unable to read its
            customers&apos; data. What does trust look like when you don&apos;t need any?
          </li>
          <li>
            Digital estate planning is not just about death: dementia, accidents or a
            hospital stay make orderly access just as necessary.
          </li>
          <li>
            Every release method works offline — the handover succeeds even if the service
            were to disappear one day.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Logos & assets</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            <a href="/logo.svg" download className="underline hover:text-slate-900">Logo (SVG)</a>
          </li>
          <li>
            <a href="/logo.png" download className="underline hover:text-slate-900">Logo (PNG)</a>
          </li>
          <li>
            <a href="/logo-square.png" download className="underline hover:text-slate-900">Square logo (PNG)</a>
          </li>
        </ul>
        <p className="text-slate-600">
          Product screenshots and a founder photo are available on request in print
          resolution.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Press contact</h2>
        <p className="text-slate-600">
          Moritz Hauff, founder —{" "}
          <a href="mailto:presse@heritavo.com" className="underline hover:text-slate-900">
            presse@heritavo.com
          </a>.
        </p>
      </section>
    </main>
  );
}
