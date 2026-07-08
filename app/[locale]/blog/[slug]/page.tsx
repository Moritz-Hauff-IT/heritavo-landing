import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { locales, type Locale } from "@/i18n/config";
import { getBlogPost, getAllBlogSlugs } from "@/lib/blog";
import LanguageSwitcher from "@/components/language-switcher";

const BASE_URL = "https://heritavo.com";

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllBlogSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  const post = getBlogPost(safeLocale, slug);
  if (!post) return { title: "Artikel nicht gefunden – Heritavo" };
  const canonicalUrl = `${BASE_URL}/${safeLocale}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      url: canonicalUrl,
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author ?? "Moritz Hauff"],
    },
  };
}

const LOCALE_FORMAT: Record<Locale, string> = {
  de: "de-CH",
  en: "en-GB",
  fr: "fr-CH",
  it: "it-CH",
};

const I18N: Record<Locale, {
  back: string;
  updated: string;
  readingTime: string;
  authorIntro: string;
  authorRole: string;
  more: string;
}> = {
  de: {
    back: "← Zurück zum Wissen",
    updated: "aktualisiert",
    readingTime: "Min Lesezeit",
    authorIntro: "Geschrieben von",
    authorRole: "Gründer von Heritavo — dem Schweizer Zero-Knowledge-Tresor mit automatischem Notfallplan.",
    more: "Mehr darüber:",
  },
  en: {
    back: "← Back to insights",
    updated: "updated",
    readingTime: "min read",
    authorIntro: "Written by",
    authorRole: "founder of Heritavo — the Swiss zero-knowledge vault with automated emergency plan.",
    more: "More about it:",
  },
  fr: {
    back: "← Retour aux ressources",
    updated: "mis à jour",
    readingTime: "min de lecture",
    authorIntro: "Écrit par",
    authorRole: "fondateur de Heritavo — le coffre-fort zero-knowledge suisse avec plan d'urgence automatique.",
    more: "En savoir plus :",
  },
  it: {
    back: "← Torna alle risorse",
    updated: "aggiornato",
    readingTime: "min di lettura",
    authorIntro: "Scritto da",
    authorRole: "fondatore di Heritavo — il vault zero-knowledge svizzero con piano d'emergenza automatico.",
    more: "Saperne di più:",
  },
};

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(LOCALE_FORMAT[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale: Locale = locales.includes(locale as Locale) ? (locale as Locale) : "de";
  const post = getBlogPost(safeLocale, slug);
  if (!post) notFound();
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { "@type": "Person", name: post.author ?? "Moritz Hauff" },
    publisher: { "@id": `${BASE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/${safeLocale}/blog/${slug}` },
    keywords: post.keywords?.join(", "),
    inLanguage: LOCALE_FORMAT[safeLocale],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Heritavo", item: `${BASE_URL}/${safeLocale}` },
      { "@type": "ListItem", position: 2, name: "Wissen", item: `${BASE_URL}/${safeLocale}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE_URL}/${safeLocale}/blog/${slug}` },
    ],
  };

  return (
    <>
      <Script id="article-schema" type="application/ld+json" nonce={nonce}>
        {JSON.stringify(articleSchema)}
      </Script>
      <Script id="breadcrumb-schema" type="application/ld+json" nonce={nonce}>
        {JSON.stringify(breadcrumbSchema)}
      </Script>
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href={`/${safeLocale}`} className="flex items-center space-x-2.5" aria-label="Heritavo">
            <Image src="/logo.svg" alt="Heritavo Logo" width={160} height={48} unoptimized priority />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="mx-auto w-full max-w-3xl px-6 py-20">
        <nav className="text-sm mb-10">
          <Link
            href={`/${safeLocale}/blog`}
            className="inline-flex items-center gap-1 text-slate-500 hover:text-primary hover:gap-2 transition-all"
          >
            {I18N[safeLocale].back}
          </Link>
        </nav>
        <article className="space-y-10">
          <header className="space-y-5 text-center">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-xs font-medium text-primary">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, safeLocale)}</time>
              <span className="h-1 w-1 rounded-full bg-primary/50" />
              <span>{post.readingTimeMin} {I18N[safeLocale].readingTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">{post.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">{post.description}</p>
            {post.updatedAt && post.updatedAt !== post.publishedAt && (
              <p className="text-xs text-slate-400">
                {I18N[safeLocale].updated} {formatDate(post.updatedAt, safeLocale)}
              </p>
            )}
          </header>
          <hr className="border-slate-200" />
          <BlogBody html={post.htmlBody} />
          <footer className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/15 text-primary font-semibold flex items-center justify-center text-sm">
                MH
              </div>
              <div className="text-sm">
                <p className="text-slate-900 font-medium">{post.author ?? "Moritz Hauff"}</p>
                <p className="text-slate-500 text-xs">{I18N[safeLocale].authorRole}</p>
              </div>
            </div>
            <p className="text-sm text-slate-600">
              {I18N[safeLocale].more} <Link href={`/${safeLocale}`} className="text-primary font-medium hover:underline">heritavo.com</Link>
            </p>
          </footer>
        </article>
      </main>
    </>
  );
}

function BlogBody({ html }: { html: string }) {
  // marked-rendered HTML aus eigenen .md-Files (frontmatter+content unter
  // unserem control, nicht user-input) — sicher zu rendern.
  return (
    <div
      className="prose prose-slate prose-lg max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-slate-900
        prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-slate-900
        prose-p:leading-[1.8] prose-p:text-slate-700
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
        prose-strong:text-slate-900 prose-strong:font-semibold
        prose-li:my-1.5 prose-li:text-slate-700
        prose-ul:my-6 prose-ol:my-6
        prose-blockquote:border-l-4 prose-blockquote:border-primary/30 prose-blockquote:bg-primary/5 prose-blockquote:px-6 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-slate-600
        prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
        prose-table:text-sm
        prose-th:bg-slate-50 prose-th:font-semibold
        prose-hr:my-12 prose-hr:border-slate-200"
      // eslint-disable-next-line react/no-danger -- markdown-output, controlled-source
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
