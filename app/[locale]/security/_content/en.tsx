import { Link } from "@/i18n/navigation";

export default function SecurityEn() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-10 px-6 py-16">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Informal translation.</strong> This is an informal English translation
        of the German policy. In case of any discrepancy, the{" "}
        <Link href="/de/security" className="underline hover:text-amber-700">German version</Link>{" "}
        is authoritative.
      </div>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold">Security & Responsible Disclosure</h1>
        <p className="text-slate-600">
          Heritavo manages sensitive data under a zero-knowledge model. Security
          reports are our highest priority. This page describes how you can report a
          vulnerability and what expectations you can place on our handling.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">How to report issues</h2>
        <p className="text-slate-600">
          Preferably by email to{" "}
          <a href="mailto:security@heritavo.com" className="underline hover:text-slate-900">
            security@heritavo.com
          </a>
          . If that channel is unreachable, you can also reach us at{" "}
          <a href="mailto:support@heritavo.com" className="underline hover:text-slate-900">
            support@heritavo.com
          </a>
          .
        </p>
        <p className="text-slate-600">
          Machine-readable version of this policy:{" "}
          <a href="/.well-known/security.txt" className="underline hover:text-slate-900">
            /.well-known/security.txt
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">What to include in your report</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>A short description of the vulnerability and the affected component.</li>
          <li>Reproduction steps (request/response, URL, account ID where applicable).</li>
          <li>An impact assessment and the preconditions an attacker needs.</li>
          <li>Optional: a remediation suggestion.</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">What we commit to</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>We confirm receipt within 72 hours.</li>
          <li>We provide a first status update within 7 days.</li>
          <li>
            We will not pursue legal action against researchers who act in good faith,
            adhere to this policy, and do not exfiltrate real user data.
          </li>
          <li>
            On request, we credit you in a public Hall of Fame once the issue is fixed.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">What we ask of you</h2>
        <ul className="list-disc space-y-1 pl-6 text-slate-600">
          <li>
            Do not use destructive techniques (DoS, data manipulation, mass account
            creation) — if you need proof, create your own test account.
          </li>
          <li>
            Do not access other users' data. If you can reach real data, stop
            immediately and report it.
          </li>
          <li>
            Disclose the vulnerability only after a fix or after 90 days — whichever
            comes first.
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Scope</h2>
        <p className="text-slate-600">
          In scope are all Heritavo-operated hosts under <code>heritavo.com</code>.
          Other Heritavo domains (e.g. <code>heritavo.ch</code>, <code>heritavo.de</code>)
          are mere redirects to <code>heritavo.com</code> and have no separate scope.
          Out of scope are linked third parties, pure spam/phishing reports, and
          automated scanner findings without concrete impact.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-slate-900">Zero-knowledge model</h2>
        <p className="text-slate-600">
          Heritavo encrypts vault contents client-side before upload. The server has
          no access to the master key. Even a full database leak gives an attacker no
          access to decrypted vault data — provided the user password is strong
          enough to resist Argon2id brute force. Findings that break this invariant
          we handle with the highest priority.
        </p>
      </section>

      <p className="text-xs text-slate-400">Version: May 2026</p>
    </main>
  );
}
