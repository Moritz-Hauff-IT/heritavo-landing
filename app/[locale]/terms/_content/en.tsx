import { Link } from "@/i18n/navigation";

export default function TermsEn() {
  return (
    <main className="mx-auto w-full max-w-3xl space-y-8 px-6 py-16 text-slate-600">
      <h1 className="text-3xl font-semibold text-slate-900">Terms of Service</h1>

      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <strong>Informal translation.</strong> This is an informal English translation
        of the German Terms of Service. In case of any discrepancy or dispute, the{" "}
        <Link href="/de/terms" className="underline hover:text-amber-700">German version</Link>{" "}
        is the legally binding original.
      </div>

      <p className="text-sm leading-relaxed">
        These Terms of Service govern the use of the SaaS service Heritavo (the
        "Service"), operated by Moritz Hauff IT, Okenfinerstrasse 2C, 8274 Tägerwilen,
        Switzerland (the "Provider"). By registering, the user accepts these Terms.
      </p>

      {/* 1 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">1. Subject of the Agreement</h2>
        <p className="text-sm leading-relaxed">
          The Provider makes available to the user a web-based service for the
          encrypted storage of digital legacy items as well as their automated
          handover in the emergency case. The Service is provided exclusively as
          Software-as-a-Service (SaaS); the user receives no right to a transfer of
          software.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2. Subscription Plans and Pricing</h2>
        <p className="text-sm leading-relaxed">
          The Service is offered under the following plans (prices in CHF, including
          any applicable taxes):
        </p>
        <div className="overflow-x-auto">
          <table className="text-sm w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">Plan</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">1 year</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">2 years</th>
                <th className="text-left py-2 pr-4 font-semibold text-slate-800">3 years</th>
                <th className="text-left py-2 font-semibold text-slate-800">Key features</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-2 pr-4 font-medium">Free</td>
                <td className="py-2 pr-4">CHF 0</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">1 user, 10 entries, 1 emergency contact</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Light</td>
                <td className="py-2 pr-4">CHF 19</td>
                <td className="py-2 pr-4">CHF 34</td>
                <td className="py-2 pr-4">CHF 49</td>
                <td className="py-2">1 user, 50 entries, 1 emergency contact, attachments</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Pro</td>
                <td className="py-2 pr-4">CHF 39</td>
                <td className="py-2 pr-4">CHF 70</td>
                <td className="py-2 pr-4">CHF 99</td>
                <td className="py-2">1 user, 200 entries, 3 emergency contacts, attachments & priority</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Couple</td>
                <td className="py-2 pr-4">CHF 59</td>
                <td className="py-2 pr-4">CHF 106</td>
                <td className="py-2 pr-4">CHF 150</td>
                <td className="py-2">2 users, 200 entries, 5 emergency contacts, priority support</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-medium">Family</td>
                <td className="py-2 pr-4">CHF 89</td>
                <td className="py-2 pr-4">CHF 160</td>
                <td className="py-2 pr-4">CHF 227</td>
                <td className="py-2">5 users, 400 entries, 8 emergency contacts, priority support</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm leading-relaxed">
          The Free plan is not time-limited; the Provider reserves the right to adjust
          its feature set or terms with reasonable prior notice.
        </p>
      </section>

      {/* 2a */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">2a. Exceeding Plan Limits</h2>
        <p className="text-sm leading-relaxed">
          Each plan defines specific upper limits (number of entries, attachments,
          legacy videos, emergency contacts, users per household). If these limits
          are exceeded — for example through a subsequent downgrade to a smaller plan —
          the account is considered <strong>over quota</strong>. Existing data is
          preserved unchanged and remains accessible in all cases.
        </p>
        <p className="text-sm leading-relaxed">
          While an account is over quota, <strong>new write actions are blocked</strong>
          (creating new entries, uploading further attachments, inviting further users).
          Reading, deletion, and downgrade management remain unrestricted. The emergency
          release to trusted contacts (trustee release) continues to function in all
          cases — it is exempt from this restriction.
        </p>
        <p className="text-sm leading-relaxed">
          The Provider <strong>reserves the right</strong> to restrict a user account
          in cases of disproportionately long exceedance of plan limits under the
          following staged procedure:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li><strong>Day 0:</strong> Notice in the dashboard and by email; write actions in affected areas are blocked.</li>
          <li><strong>Day 14 and 30:</strong> Reminder emails with a request to either consolidate entries or adjust the plan.</li>
          <li><strong>Day 90:</strong> If the exceedance persists, the account is set to <strong>read-only</strong>. Reading and emergency release remain available; all other actions are permanently blocked as long as the exceedance persists.</li>
          <li><strong>After day 90, without response to reasonable contact attempts:</strong> The Provider reserves the right to definitively delete the account after written prior notice with a reasonable deadline. Deletion applies as per the provisions on account deletion (see section 4).</li>
        </ul>
        <p className="text-sm leading-relaxed">
          Read-only setting and any account deletion are announced at least 14 days in
          advance by email to the address on file. Restoration of unrestricted operation
          occurs automatically as soon as plan limits are again observed — either through
          consolidation of data or through upgrade to a fitting plan.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">3. Payment Terms</h2>
        <p className="text-sm leading-relaxed">
          Paid plans are billed in advance as a one-time amount for the chosen term
          (1, 2, or 3 years). Payment is processed by the payment service provider
          Stripe, Inc. The amount is automatically charged to the payment method on
          file. In case of payment default, the Provider reserves the right to suspend
          access to the Service until the outstanding amount is settled.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">4. Termination</h2>
        <p className="text-sm leading-relaxed">
          The subscription may be cancelled at any time in the user account. Cancellation
          prevents automatic renewal; the subscription remains active until the end of
          the paid term. No pro-rata refund of amounts already paid will be made. The
          Provider may suspend or delete the user account without notice in the event
          of a serious violation of these Terms.
        </p>
        <p className="text-sm leading-relaxed">
          Before cancellation, the Provider strongly recommends downloading an encrypted
          export of the vault data, as all data will be irreversibly deleted after
          cancellation.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">5. User Obligations</h2>
        <ul className="list-disc list-inside text-sm space-y-1.5 leading-relaxed">
          <li>The user is responsible for the security of their password and recovery key.</li>
          <li>The user shall not use the Service for unlawful purposes.</li>
          <li>The user ensures that the data they store does not infringe third-party rights.</li>
          <li>The user keeps the contact information in the account current.</li>
        </ul>
      </section>

      {/* 6 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6. Availability and Maintenance</h2>
        <p className="text-sm leading-relaxed">
          The Provider strives for high availability of the Service (targeted
          availability: 99% on monthly average) but assumes no guarantee of
          uninterrupted availability. Planned maintenance is announced in advance
          where possible.
        </p>
      </section>

      {/* 6a */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">6a. Minimum Operating Period for Paid Subscriptions</h2>
        <p className="text-sm leading-relaxed">
          The Provider undertakes to maintain the Service for the entire duration of
          a subscription prepaid by the user. Anyone who purchases a subscription with
          a term of one (1), two (2), or three (3) years has a contractual claim to
          the provision of the Service for the entire prepaid period.
        </p>
        <p className="text-sm leading-relaxed">
          Should the Provider discontinue the Service before the expiry of the prepaid
          term for its own economic or strategic reasons, the Provider undertakes:
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 leading-relaxed">
          <li>to provide written notice of discontinuation with a lead time of at
            least ninety (90) days to the email address on file;</li>
          <li>to keep the export function for encrypted vault data available for the
            entire notice period;</li>
          <li>to refund the unused portion of the subscription on a pro rata temporis
            basis, calculated against the remaining prepaid term.</li>
        </ul>
        <p className="text-sm leading-relaxed">
          This assurance does not apply in cases of force majeure, regulatory orders,
          insolvency, or other circumstances for which the Provider is not responsible.
          In such cases, the Provider shall endeavour in good faith to enable users to
          carry out an orderly data export within a reasonable period.
        </p>
        <p className="text-sm leading-relaxed">
          A discontinuation of the free Free plan is expressly not covered by this
          provision and is governed by section 2, last paragraph.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">7. Limitation of Liability</h2>
        <p className="text-sm leading-relaxed">
          The Provider is liable only for damages caused by gross negligence or
          intent. Liability for slight negligence as well as for indirect damages,
          consequential damages, and lost profits is excluded to the extent permitted
          by law. Because the Service uses a zero-knowledge architecture, it is
          technically impossible for the Provider to access the contents of the vault
          or to recover lost keys.
        </p>
        <p className="text-sm leading-relaxed">
          The total liability of the Provider is limited to the subscription fees
          actually paid by the user in the last 12 months.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">8. Data Protection</h2>
        <p className="text-sm leading-relaxed">
          The processing of personal data is governed by our{" "}
          <Link href="/privacy" className="underline hover:text-slate-900">Privacy Policy</Link>.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">9. Amendments to the Terms</h2>
        <p className="text-sm leading-relaxed">
          The Provider reserves the right to amend these Terms with 30 days' notice
          by email. If the user does not object within this period, the new Terms are
          deemed accepted. In case of objection, the user has the right to extraordinary
          termination.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">10. Applicable Law and Jurisdiction</h2>
        <p className="text-sm leading-relaxed">
          Swiss law applies exclusively. The place of jurisdiction for all disputes
          arising from or in connection with this Agreement is Canton of Thurgau,
          Switzerland, unless mandatory statutory provisions stipulate another place
          of jurisdiction.
        </p>
      </section>

      <p className="text-xs text-slate-400">Version: 22 May 2026</p>
    </main>
  );
}
