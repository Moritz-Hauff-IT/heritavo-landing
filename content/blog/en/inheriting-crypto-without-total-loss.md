---
title: "Inheriting Crypto — Why 20% of All Bitcoin Is Considered Lost"
description: "Seed phrases, hardware wallets, custodial vs self-custody: what you need to do today so your crypto holdings don't get lost when you die. A practical guide with the most common failure modes."
publishedAt: "2026-05-23"
updatedAt: "2026-05-23"
keywords:
  - "inheriting crypto"
  - "bitcoin inheritance"
  - "seed phrase safe storage"
  - "hardware wallet inheritance"
  - "crypto estate planning"
author: "Moritz Hauff"
image: "/images/blog/crypto.webp"
imageAlt: "Golden Bitcoin coins in warm light"
---

It's probably the most expensive form of digital carelessness: **roughly 20% of all Bitcoin is now considered irreversibly lost** — an estimate from analytics firm Chainalysis. Coins that haven't moved in over five years, whose keys nobody knows anymore. At current prices, we're talking about hundreds of billions of dollars in wealth that belongs to no one.

A significant portion comes down to deaths. People die holding crypto without anyone knowing how to access it — or whether it even exists.

This isn't abstract. If you hold crypto, the probability that your family receives **zero** of it after your death is dramatically higher than for any other asset class. Banks have inheritance processes, insurers reach out, real estate is in land registers. Crypto is different: without the seed phrase it's gone. Period.

This article explains why, what the typical mistakes are — and how you can concretely do better this week.

## Why Crypto Is So Specific

Classical asset classes have **intermediaries**: banks, insurance companies, notaries, land registries. Your heirs can access your wealth even when you can't help them — through institutional processes, death certificates, certificates of inheritance.

Self-custodied crypto has none of that. Cryptography knows no authority. Your coins are protected by a private key — typically represented as a **seed phrase** (12 or 24 words from the BIP39 standard). Whoever has the seed has the money. Whoever doesn't, has nothing.

There's no reset button. No emergency contact for the wallet. No court that can order access. **Mathematically, the wealth is lost** the moment the seed is lost — even if the whole world knows the coins belonged to you.

This is crypto's strength (no interference possible) and simultaneously its biggest trap for estate planning.

## The Most Common Mistakes I've Seen

From conversations with crypto holders and heirs, the same patterns keep coming up:

**1. "My family knows about the wallet, that's enough."**
Knowing *that* it exists is one thing. Knowing *how to access it* is entirely another. If your wife knows you have a Ledger in your desk but doesn't know where the seed is — the coins are technically lost. The Ledger itself is just a display; the secret is the seed.

**2. "The seed is safely written down in a drawer."**
Paper in a drawer has two problems: first, it can go up with you in a house fire; second, it can also be found *before* your death — burglary, curious cleaner, kids. Single point of failure with theft risk.

**3. "I use a custodial exchange like Binance / Coinbase / Bitcoin Suisse, they have inheritance processes."**
Partially true: custodial exchanges (platforms that hold the coins for you) treat the account like a bank account and hand it over to heirs with a death certificate. **BUT:** for that, you need to know the account login or your heirs must be able to find it. Plus: most custodial platforms are not in your jurisdiction — Malta, Lithuania, Singapore. International inheritance processes can take months. And if the exchange goes bankrupt — see FTX 2022 — the coins are gone anyway, certificate of inheritance or not.

**4. "I split the seed into 2-3 pieces and hid them at different locations."**
Naive splitting is dangerous. If you split a 24-word seed into two 12-word halves, an attacker with one half reduces the brute-force complexity from 2^256 to 2^128. That sounds like a lot — but with specialized hardware it can become crackable in a few years. Plus: what if one piece is lost? Then **everything** is gone. Real secret sharing (Shamir) solves both — more on that below.

**5. "Cloud backup, notes app, email to myself."**
Classic and fatal. Cloud providers get hacked (LastPass 2022, Dropbox historically, etc.). Email accounts get taken over. A seed phrase sitting digitally in cleartext anywhere — even encrypted with your cloud password — is always **one step** from theft. Crypto thieves actively scan for exactly these traces.

## What Works: Hardware Wallet + Secure Seed Storage

The robust solution for self-custodied crypto has two parts:

**Part 1: Hardware wallet as daily tool.**
A device like Ledger, Trezor, or BitBox keeps the seed offline, signs transactions without the key ever leaving the chip. Even if your computer is compromised with malware, the attacker can't reach the coins.

**Part 2: Secure seed storage for the emergency case.**
The hardware wallet itself is just a tool. The actual secret — the seed phrase — must be stored separately and durably so you can recover (if the device breaks, gets lost, or you die).

Here are the serious options:

### Option A: Steel Backup (Cryptosteel, Billfodl, Seedplate)

A metal plate where the 24 words are stamped or engraved. Fire-resistant to 1500°C, acid-resistant, waterproof. Lasts centuries. Cost: $50 to $150.

**Pro:** essentially indestructible, one-time investment.
**Con:** physical object with all physical risks (burglary, loss, seizure). Plus: whoever finds it has everything. Single point of failure.

**Storage:** safe at home + bank deposit box + with a trusted person — diversify. **But:** then you have the secret in multiple locations, and theft at one location costs everything.

### Option B: Shamir's Secret Sharing — Split the Seed into Fragments

Mathematically elegant: the seed is split into N fragments (cryptographically proper — not naively halved), of which M are needed to reconstruct. For example 3-of-5: five people each hold one fragment, three must come together.

Properties:
- **Fewer than M fragments reveal mathematically nothing** — not even partial information
- **M or more fragments** reconstruct the seed exactly
- You can lose one fragment without losing access
- A single person can't access your coins, even with their fragment

This is the gold standard for self-custodied crypto inheritance — no single point of failure, no betrayal risk, mathematically provable security.

**Trezor supports SLIP39** (Trezor's variant of Shamir) since 2019 directly in the device. You can split the seed into shares at creation time.

**For other hardware wallets**, this is done via external tools or via a vault service that has Shamir splitting built in — see below.

### Option C: Multi-Signature (Multisig) Wallet

Instead of a single seed there are multiple keys, of which a minimum number must sign (e.g. 2-of-3). Functionally similar to Shamir but implemented on-chain. Bitcoin, Ethereum, and most major chains support it.

**Pro:** native blockchain feature, no need to trust external tools.
**Con:** technically more demanding to set up, higher transaction fees, more complex in the recovery case (heirs need to handle multiple devices).

For most family setups, Shamir splitting (Option B) is the better trade-off — heirs need no crypto expertise, only the codes.

## Concrete Action Plan: What to Do This Week

**Step 1 (15 min): Inventory.**
What crypto holdings do you have? List all wallets, exchanges, staking accounts, DeFi positions. Don't forget cold-storage addresses from your earlier ICO phase — they're often worth more now than the rest.

**Step 2 (10 min): Separate custodial vs. self-custody.**
Custodial exchanges (Coinbase, Kraken, Bitcoin Suisse, Binance): inheritance processes run through the platform. Heirs need the account login and must complete the platform's KYC process for inheritance. Note the platforms you use — *not* the logins — in your emergency document.

Self-custody (own hardware wallet, own seed): responsibility is 100% on you.

**Step 3 (45 min): Professionalize seed storage.**

For self-custody holdings — pick one of the three options above.

Practical for most:
- Order steel backup (Bitbox Seedcard, Cryptosteel, Billfodl)
- Stamp/engrave the seed into the metal
- Create a second backup piece
- One piece at home in a safe, one piece in bank deposit box **or** with a trusted person

Advanced (when amounts exceed 5 figures):
- Use Trezor with SLIP39 → 3-of-5 Shamir split
- Distribute fragments to 5 trusted contacts
- Heirs know there are 5 and who holds them

**Step 4 (30 min): Brief your heirs — what and how.**

This is where most people fail. You don't have to *tell* your heirs the seed (that would be a security risk during your life). You have to tell them:

- *That* crypto holdings exist
- *Which* wallets / exchanges you use (list, not logins)
- *Where* the backups are physically stored (safe, bank, people)
- *How* they should proceed in an emergency (exact procedure, in what order)

Rule of thumb: imagine you're taken out of the game tonight. Would your loved ones, with what you wrote down for them, be able to reach the coins? If no, the preparation is incomplete.

**Step 5 (15 min): Document it in writing.**

Create a document that gets opened in the emergency case:

```
Crypto Estate Instructions — [your name], as of [date]

Holdings:
  - Bitcoin (~XX BTC) — Trezor Model T, top drawer of desk
  - Ethereum (~XX ETH) — same wallet
  - [other tokens]
  - [Exchange holdings]: Bitcoin Suisse (email address, KYC docs with
    [lawyer/notary]), Coinbase (email address)

Seed storage:
  - 3-of-5 Shamir splits (SLIP39)
  - Fragment 1: home safe
  - Fragment 2: bank deposit box UBS [branch, box #]
  - Fragment 3: with brother [name, city]
  - Fragment 4: with father [name, city]
  - Fragment 5: with notary [name, firm]

In an emergency:
  Bring at least 3 of 5 fragments together, load into a new Trezor
  (procedure: trezor.io/learn → SLIP39 Recovery), transfer coins
  to an address you control.
```

The document itself should **not** be kept together with the backups — otherwise it helps a thief find everything. Notary deposit or bank deposit box (alone, without a seed fragment) makes sense.

## Where Heritavo Can Help

Full disclosure: I'm the founder of Heritavo, this article is on the Heritavo domain.

Heritavo is built as a digital legacy vault for exactly these scenarios. Specifically relevant to crypto inheritance:

- **Store seed phrases encrypted** (zero-knowledge, AES-256-GCM) together with the procedure document above
- **Shamir's Secret Sharing built in**: you can give trusted contacts code fragments (3-of-5, 2-of-3, depending on the setup), without Heritavo ever seeing the seed
- **Check-in-based release**: on inactivity, the vault releases to your heirs, with a veto window in case you were just on holiday
- **Video messages**: many crypto holders want to *explain* the procedure — a video that's only playable in the emergency case can provide clarity a text document can't

The advantage over purely physical solutions (steel backup in a bank deposit box) is the **automatic release** — your heirs don't have to guess whether they should check, they get actively informed.

The advantage over "everything in plaintext somewhere": Heritavo mathematically never sees the seed. Even we can't release it — only your heirs with their fragments.

[Start free →](/en)

## Common Questions

**What about hardware wallets that break?**
The hardware is replaceable. As long as you have the seed, you can restore it into any other compatible wallet. That's the whole point of the seed phrase. Hardware wallets are tools, not storage.

**Should I also secure custodial holdings via Heritavo?**
For custodial holdings, it's often enough to tell heirs *which* platforms you use and to leave them the account login. The platform handles inheritance normally. Heritavo is less critical here — but can be the central place where this account data lives.

**What about staking, DeFi, NFTs?**
Same logic: anything accessible via private key hangs on the seed. NFTs in a wallet are just as affected as BTC. Staking contracts too — some have lock periods, your heirs need to know.

**Do I need legal advice?**
For the technical preparation, no. For the testamentary treatment of crypto wealth (valuation, inheritance tax, mandatory share): yes. It's worth involving a lawyer with crypto experience once the amounts become relevant.

## Bottom Line

Inheriting crypto isn't complicated — but it's **different** from any other asset class. There's no authority helping in the background, no automatic processes, no safety net. The responsibility is 100% yours.

The good news: 1-2 hours of focused work is enough to create a clean setup. Steel backup or Shamir splitting, clearly defined trusted contacts, written procedure. That's it.

The bad news: without these 1-2 hours, it's statistically likely your crypto holdings will be *entirely* lost when you die. No matter how much it is.

Related articles:
- [What happens to online accounts after death?](/en/blog/what-happens-to-online-accounts-after-death) — strategies for classical accounts
- [How a Zero-Knowledge Vault with Emergency Plan Works](/en/blog/how-zero-knowledge-vault-with-emergency-plan-works) — the architecture explained
- [Digital Estate Planning in Switzerland: legal guide](/en/blog/digital-estate-switzerland-guide) — Swiss legal framework

Questions or experiences with crypto inheritance? Write me at [support@heritavo.com](mailto:support@heritavo.com) — I answer personally.
