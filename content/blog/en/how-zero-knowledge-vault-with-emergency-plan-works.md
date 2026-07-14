---
title: "How a Zero-Knowledge Vault with Emergency Plan Works"
description: "What zero-knowledge really means, how an automated emergency plan works without involving the provider, and which sharing modes exist. A technical and practical explanation."
publishedAt: "2026-05-22"
updatedAt: "2026-05-22"
keywords:
  - "zero-knowledge vault"
  - "digital emergency plan"
  - "end-to-end encryption"
  - "Argon2id"
  - "Shamir's Secret Sharing"
author: "Moritz Hauff"
image: "/images/blog/zero-knowledge.webp"
imageAlt: "Vintage brass key on a computer keyboard"
---

When you take digital legacy planning seriously, one central question comes up fast: **who can read my sensitive data?** With classic cloud services, the answer is: theoretically the provider, the host, in worst-case authorities with access. With a zero-knowledge vault, the answer is: **no one but you**, and in an emergency the trusted contacts you explicitly designated.

This sounds contradictory at first: how can a legacy provider "not know" my data but still hand it over to my trusted contacts in an emergency? The answer is in the architecture — which is surprisingly elegant once you understand it.

This article explains it step by step — what zero-knowledge means concretely, how the automated emergency plan works, and which sharing modes exist. Examples refer to [Heritavo](/en), built on exactly this principle.

## What "Zero-Knowledge" Concretely Means

The term is overused — almost every cloud provider markets with it. The strict definition is precise though: **the provider sees nothing but encrypted bytes**. No file names, no search terms, no contents, no keys.

In practice this means:

1. **Encryption happens in your browser**, not on the server. When you save a password, it gets encrypted with AES-256-GCM (an established symmetric algorithm) before upload.
2. **The key never leaves your device**. It's derived from your master password via a compute-intensive algorithm called Argon2id, which additionally protects against brute force.
3. **The server receives only byte salad**. If the server is compromised, the data is worthless — without your password no one can decrypt it.

The master password itself doesn't reach the server either. Instead, a derived hash is used for authentication, which can't be used for decryption.

Consequence: **if you forget your master password and haven't set up a recovery method, the data is irretrievably lost.** That's the direct downside of zero-knowledge — the provider can't help, because they literally know nothing.

## The Emergency Plan Problem

Here it gets interesting: zero-knowledge means the provider can't unlock you. But for digital legacy planning, that's exactly what's needed — trusted contacts should get access in an emergency, without you being able to unlock them yourself (you're not around, or incapacitated).

How does this work without the provider knowing the key?

The answer is conceptually simple: **you share the key with your trusted contacts before the emergency arises** — in a controlled way the provider can't influence.

There are three ways to implement this, each with different trade-offs between convenience and security.

## Sharing Mode 1: Recovery Sheet (Testament)

The simplest model. During setup, you generate a physical recovery code — as a printable PDF. You store it in a secure place: home safe, with a notary, in a bank deposit box.

In an emergency, your trusted contacts enter this code and can decrypt the vault.

**Pro:** fully zero-knowledge. The provider never sees the code. Even with a total server breach, the vault remains safe.

**Con:** single point of failure on the physical side — if the safe is lost with you (fire, theft), the recovery code is gone too.

**When useful:** if you have very secure physical storage (notary or bank deposit), and accept the single-point-of-failure risk.

## Sharing Mode 2: Shamir's Secret Sharing (Code Print)

This gets mathematically elegant. Instead of a single recovery code, the key is split into **N fragments**, of which **M** are needed to reconstruct. E.g. 3-of-5: five people each get one fragment, three must come together.

This is an established cryptographic scheme by Adi Shamir (co-inventor of RSA), published in 1979. It has two important properties:

1. **With fewer than M fragments, nothing can be derived** — not partially, not a hint, nothing. Mathematically.
2. **With M or more fragments, the key reconstructs exactly.**

You give each trusted contact a printed code sheet. In an emergency, at least M of N people must come together, enter their codes — and only then does the vault open.

**Pro:** no single point of failure. You can lose one person (death, move, conflict) and still access. Plus: no single person can access the vault alone (protection against hostile heirs or compromised contacts).

**Con:** organisational overhead — all codes must be distributed physically and stored safely. With contacts spread far apart, reunion in an emergency can be logistically complex.

**When useful:** with multiple trusted contacts at different locations (typical family constellation). The most robust mode for serious legacy planning.

## Sharing Mode 3: Shamir Code via Email

Like Mode 2, but codes are sent by email to trusted contacts instead of physically distributed.

**Pro:** convenient, fast to set up. No printed codes to lose.

**Con:** this is **no longer 100% zero-knowledge**. Email delivery happens via the provider's server. Theoretically the operator could read the codes, theoretically an email provider could too.

In practice: solid security level for most users. But for particularly sensitive use cases (journalists with source protection, lawyers with client confidentiality), Mode 1 or 2 is the better choice.

**When useful:** when maximum convenience is desired and the threat model classifies the email path as sufficiently secure.

## How the Emergency Plan Triggers

The sharing modes govern the **how**. But when does the process actually start? With classic inactive account features, it's inactivity — you don't log in for e.g. 6 months, then trusted contacts get notified.

With a dedicated legacy vault like Heritavo, it works similarly but with finer control — check-in-based:

1. **You choose a check-in interval** — e.g. every 4 weeks.
2. **Before deadline you get reminder emails** — typically 7 days before.
3. **If you don't respond, the release prepares** — trusted contacts get informed.
4. **Veto window** — typically 72 hours where you or trusted contacts can still stop the process (e.g. if you were just on holiday).
5. **If no one stops → release triggers** — trusted contacts can now enter their codes and open the vault.

Important: **this whole process runs automatically**. The provider needs no external trigger input (no death certificate, no phone call). That's simultaneously the great strength and the central design decision — triggering is based on your behaviour (check-in) rather than authority confirmation.

## What Can Live in the Vault

A classic password manager stores primarily logins. A dedicated legacy vault has broader scope — all data that should "survive":

- **Passwords and logins** — like a password manager
- **Documents** — insurance policies, leases, tax records, scanned documents
- **Legacy videos** — personal messages to family, playable only after release
- **Crypto seed phrases** — the most important use case without alternative
- **Emergency contacts** — who to notify how
- **Step-by-step instructions** — "if you're reading this, first do X, then Y"

Key difference to daily password managers: **auto-fill and mobile apps are usually deliberately missing**. Not a bug — if you used the vault daily, you'd have a larger attack surface. Legacy data rarely changes; a clean web interface is enough.

## What Happens in an Emergency (Complete Flow)

Imagine you pass away or become incapacitated. How exactly does the release run? Typical flow with a Recovery Sheet setup:

1. **Day 0:** Missed check-in. System sends reminders to you.
2. **Day 7-30** (configurable): second and third reminders. Still no response → release process starts.
3. **Day 30-37:** trusted contacts get notified by email. They learn the release is being prepared.
4. **72h veto window:** trusted contacts or you can still stop the process.
5. **After veto window:** release link becomes active. Trusted contacts can decrypt the vault by entering Recovery Code (Sheet) or their Shamir fragments.
6. **Decryption in browser:** zero-knowledge again — server delivers only encrypted data, decryption happens locally on trusted contact's device.
7. **Download as ZIP:** all data — passwords, documents, videos — gets downloaded as encrypted ZIP archive. Trusted contacts keep the data locally.

Important: after release, the original vault remains **encrypted** on the server. The provider saw nothing in plaintext at any point. But trusted contacts now have the key and can decrypt as often as needed.

## Where Trust Is Still Needed

Honesty matters: even zero-knowledge systems require trust at one point — in **the encryption code itself**. If the provider serves a manipulated browser version, they could theoretically intercept the master password as you type it.

Mitigations:

- **Open-source crypto libraries** — cryptographic algorithms (AES, Argon2id, Shamir) are established standards with published implementations
- **Audited code bases** — formal security audits by independent firms
- **Swiss legal framework** — providers subject to Swiss data protection law, which actively prohibits provider manipulation
- **Reproducible builds / public source** — for very sensitive use cases, check the source code yourself

In Heritavo's case: crypto components are based on established Web Crypto API standards and hash-wasm (Argon2id implementation). Hosting in Switzerland at Infomaniak. Swiss Data Protection Act (DSG) prohibits active weakening of encryption by the provider.

## When a Zero-Knowledge Vault with Emergency Plan Makes Sense

Not for every use case. For daily browser logins, a classic password manager is better suited — that has auto-fill and mobile apps.

But for **digital legacy** — data and content that should survive, not be used daily, but be available in an emergency — this type of vault is exactly the right tool.

Typical use cases:

- **Crypto seed inheritance** — the most important use case without alternative
- **Important documents** passed to family (contracts, insurance, bank statements)
- **Personal messages** to relatives (legacy videos, written letters)
- **Emergency instructions** for complex life situations

If you want to try Heritavo — the Free plan covers 10 entries and 1 emergency contact, is gratis, no credit card needed.

[Try Heritavo Free](/en)

Related articles:
- [What happens to online accounts after death?](/en/blog/what-happens-to-online-accounts-after-death) — the question Heritavo tries to solve
- [Digital Estate Planning in Switzerland: legal guide](/en/blog/digital-estate-switzerland-guide) — the legal framework

Questions? Write me at [support@heritavo.com](mailto:support@heritavo.com) — I answer personally.
