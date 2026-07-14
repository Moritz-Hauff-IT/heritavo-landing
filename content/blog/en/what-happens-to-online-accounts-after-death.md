---
title: "What Happens to Online Accounts After Death? A Practical Guide (2026)"
description: "Email, cloud storage, banking, social media: who actually gets access to your digital accounts in an emergency? A practical guide with steps you can do this weekend."
publishedAt: "2026-05-22"
updatedAt: "2026-05-22"
keywords:
  - "online accounts after death"
  - "digital legacy"
  - "digital estate planning"
  - "password inheritance"
  - "emergency account access"
author: "Moritz Hauff"
image: "/images/blog/accounts.webp"
imageAlt: "Older people sitting at a table with a laptop"
---

If you start counting your online accounts, you quickly reach surprising numbers. Email accounts, banking, cloud storage, streaming services, newsletters, forums — a typical modern life spreads across dozens to well over a hundred digital accounts today. The question that hasn't let me go while building Heritavo: what happens to all of it if something happens tomorrow?

If you've never thought about who gets access to your email, online banking, or cloud storage in an emergency, you're in good company. In my experience building Heritavo, I assume that the majority of digitally active adults have no concrete plan for their digital estate.

This article isn't marketing — it's an honest take: how access really works in an emergency, which solutions work, which don't, and what concrete steps you can take this weekend.

## The Sober Reality: Without Preparation, No One Gets In Quickly

In Switzerland (and similarly in Germany and the broader EU), a few principles apply that most people only understand after a death in the family:

**Banks freeze accounts immediately.** As soon as a bank learns of a death — through municipal records, a relative, or the probate office — online banking access is deactivated. Heirs regain access only after presenting a **certificate of inheritance** (Erbenschein). Typical processing time: 4-8 weeks, longer in complex cases.

**Online services demand death certificates.** Google has an "Inactive Account Manager", Apple has a "Legacy Contact", Microsoft has a "Next of Kin" process. All three are better than nothing, but all three require that you set them up **before** the emergency. If not: your family must formally apply, with death certificate, proof of identity, sometimes inheritance certificate — processing 6 weeks to 4 months.

**Encrypted devices are dead without the password.** An iPhone with Face ID but no PIN backup, a Mac with FileVault enabled, a BitLocker Windows machine — all three are cryptographically locked. Apple, Microsoft, and Google **cannot** unlock them on request. That's a feature, not a bug — but a problem in a bereavement.

**Crypto is the hardest category.** Anyone who hasn't backed up their seed phrase loses their crypto holdings mathematically. Various industry estimates suggest that a significant portion of all bitcoin ever mined is permanently inaccessible — mostly due to lost keys and unshared recovery phrases.

None of this is theory. Families often need months to access digital accounts of deceased relatives — sometimes losing entire photo archives or important documents entirely.

## The Account Categories That Matter — Ordered by Priority

Not all accounts are equally critical. Here in order of importance:

### 1. Email (Highest Priority)

Your primary email is the **reset button for almost everything else**. Whoever has access can request password resets at most online services. So this needs the most robust emergency plan.

What works:
- **Gmail**: Inactive Account Manager (Settings → Data and Privacy). You set an inactivity period (3-18 months); after that, trusted contacts are notified automatically and gain access to chosen data categories.
- **Apple Mail (iCloud)**: Legacy Contact feature since iOS 15.2. Up to five contacts per device.
- **Self-hosted domain email** (Infomaniak, mailbox.org, Fastmail): password + recovery method **must** be stored in a separate solution.

What doesn't work: a sticky note with the password in a drawer. Static from day one, and nobody knows where the note lives.

### 2. Banking & Finance

**Online banking** is a special case. Most Swiss banks (UBS, ZKB, Raiffeisen, PostFinance) explicitly forbid in their terms of service that passwords be passed on — even to heirs. The official path is inheritance certificate + in-person bank appointment.

What you **should** document anyway:
- Which banks you use (heirs sometimes overlook accounts)
- IBAN lists
- 2FA hardware tokens (where they are, what they're called)
- A **power of attorney** for the case "incapacitated but not dead" — this is the gap most people forget

**Crypto** is different: seed phrases must be inheritable. Without the seed = total loss. An encrypted vault or sealed envelope with a notary is the only working solution here.

### 3. Cloud Storage & Documents

Dropbox, Google Drive, iCloud, OneDrive: this is where contracts, insurance documents, scanned papers, and family photos live. In a bereavement, family needs fast access — otherwise contract deadlines are missed, insurance claims aren't filed, rent doesn't get paid.

Practical: one central directory with the most important documents + cloud access in the emergency plan.

### 4. Social Media & Profiles

Facebook and Instagram allow a memorial state. LinkedIn lets the profile be closed. X/Twitter is difficult — the only path is account suspension via identity proof from relatives.

Honestly: less urgent than email or banking, but emotionally important for many people, so it belongs on the list.

### 5. Subscriptions & Recurring Payments

Streaming services, SaaS tools, domain registrars, newsletter subscriptions: these often continue for months after death and drain accounts. A central list (what, where, how to cancel) saves family many hours of searching.

## Three Strategies for Provision — From Simple to Robust

### Strategy 1: Notary with USB Stick

You deposit an encrypted USB stick with passwords at a notary. On death, it's handed to the heirs per the will.

**Pro:** legally airtight, automatic trigger via probate process.

**Con:** static from day one. Every new password = new notary appointment. Most people update once — then never again. After 5 years the list is 80% outdated.

**When it makes sense:** if your online accounts are relatively static and you rarely sign up for new services. Realistically: fewer than 5% of digitally active people.

### Strategy 2: Password Manager with Emergency Access

Services like Bitwarden, 1Password, or LastPass have Emergency Access features: a trusted contact can request access after a wait period. You're notified by email — if you don't respond within the deadline, the person gets access.

**Pro:** password sync is built in. Updates happen automatically.

**Con:** providers know technically who has your master password — even if they don't store it in plaintext. Plus: many providers (Bitwarden, LastPass) are US-based — a US-government data request could surface data even from EU servers. Swiss data protection doesn't apply directly.

Plus: many of these tools are built as daily login helpers, not as legacy vaults. The emergency-access feature is often an add-on and the details vary (wait period, veto window, key architecture).

### Strategy 3: Zero-Knowledge Vault with Automated Emergency Plan

Here, encryption happens **entirely on your device**. The provider sees nothing — no plaintext, no key, nothing. On inactivity, the vault unlocks automatically for trusted contacts you designated in advance.

**Pro:** mathematically not viewable, not even by the operator or authorities. Even in a data breach, encrypted bytes are worthless.

**Con:** still uncommon. Trusted contacts must actively understand their role (they receive a physical code or sheet they must keep safe).

This is exactly the use case I built [Heritavo](/en) for. Full disclosure: I'm the founder, this article is on the Heritavo domain — so you're not reading a neutral source. What I say can be independently verified though (crypto library source, AES-256-GCM and Argon2id specs, hosting in Switzerland with Infomaniak).

## Concrete Step-by-Step for This Weekend

From experience: most people fail not at "whether" but at "where to start". Here's a concrete order that's doable in 2-3 hours:

**Step 1 — Make a list (20 min).** Sit with a blank document and write down all online services you're registered with. Helpful: open your browser's password manager, scroll through all entries. You'll find more than you thought.

**Step 2 — Prioritise (10 min).** Mark the critical ones: email, banking, cloud storage, crypto, anything with stored credit card. The rest is secondary.

**Step 3 — Back up recovery codes (30 min).** Every serious service offers recovery codes or backup emails. For critical services: print codes (yes, paper, even though it feels old-fashioned) or store in a separate encrypted solution.

**Step 4 — Choose trusted contacts (15 min).** Who should have access in an emergency? Partner alone is risky (what if you're in an accident together?). Best practice: 2-3 people at different locations. Families typically: partner + a sibling + a long-time friend.

**Step 5 — Choose a tool (variable).** Pick one of the three strategies above based on comfort. Pragmatically: if you want to start now, **any** solution is better than none. You can switch later.

**Step 6 — Brief trusted contacts (30 min conversation).** They need to know *that* something exists, *where* it is, *how* they access it. Without this conversation, all preparation is worthless. Best practice: a brief written note in your personal papers.

## Common Mistakes I've Seen

These patterns keep showing up:

- **"The passwords are all in my browser"** — browser managers are dead without the master password. Plus: if your Mac is encrypted (FileVault is default), they're not reachable even with the master.
- **"My notary has a list"** — usually static from 5+ years ago, often wrong providers and outdated URLs.
- **Crypto seed not documented anywhere** — the most common case of **total** asset loss after deaths involving crypto.
- **Only one trusted contact, who could be in the same accident** (partner) — single point of failure.
- **Everything in plaintext in a cloud note** — if the provider is hacked, the keys to everything go public. Has happened twice with major note apps.

## Conclusion & Next Step

Digital estate planning isn't primarily a technical problem — it's a communication and procrastination problem. Most people know *that* they should handle it, but defer for years. The most common reason: complexity and "I don't know where to start".

My suggestion: invest **one hour on a Sunday afternoon**. One of the three strategies above — even the simplest — beats nothing. And nothing is, unfortunately, still the default.

**If you want a turnkey solution:** Heritavo is built exactly for this use case — zero-knowledge vault, automated emergency plan via check-in, Swiss hosting. The Free plan is gratis and covers the first 10 entries plus one trusted contact. [Try Heritavo Free →](/en)

If you want to dig deeper:
- [Inheriting Crypto — why 20% of all Bitcoin is considered lost](/en/blog/inheriting-crypto-without-total-loss) — the most common total-loss case
- [How a Zero-Knowledge Vault with Emergency Plan Works](/en/blog/how-zero-knowledge-vault-with-emergency-plan-works) — the architecture explained
- [Digital Estate Planning in Switzerland: legal guide](/en/blog/digital-estate-switzerland-guide) — Swiss legal framework

Questions or your own experiences? Write me at [support@heritavo.com](mailto:support@heritavo.com) — I answer personally.
