import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { getAllBlogPostMeta } from "@/lib/blog";
import { BASE_URL, pageMetadata, toLocale } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import LanguageSwitcher from "@/components/language-switcher";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = toLocale((await params).locale);
  const meta: Record<Locale, { title: string; description: string; descriptionOg: string }> = {
    de: {
      title: "Wissen & Ratgeber – Heritavo",
      description: "Artikel zu digitalem Nachlass, Notfallplanung, Passwort-Vererbung und Zero-Knowledge-Verschlüsselung. Aus der Praxis von Heritavo.",
      descriptionOg: "Artikel zu digitalem Nachlass, Notfallplanung und Zero-Knowledge-Verschlüsselung.",
    },
    en: {
      title: "Insights & Guides – Heritavo",
      description: "Articles on digital legacy, emergency planning, password inheritance, and zero-knowledge encryption. From building Heritavo.",
      descriptionOg: "Articles on digital legacy, emergency planning, and zero-knowledge encryption.",
    },
    fr: {
      title: "Ressources & Guides – Heritavo",
      description: "Articles sur la succession numérique, la planification d'urgence, la transmission de mots de passe et le chiffrement zero-knowledge. Depuis la construction de Heritavo.",
      descriptionOg: "Articles sur la succession numérique, la planification d'urgence et le chiffrement zero-knowledge.",
    },
    it: {
      title: "Risorse e Guide – Heritavo",
      description: "Articoli su successione digitale, pianificazione d'emergenza, trasmissione di password e crittografia zero-knowledge. Dalla costruzione di Heritavo.",
      descriptionOg: "Articoli su successione digitale, pianificazione d'emergenza e crittografia zero-knowledge.",
    },
  };
  const { title, description, descriptionOg } = meta[locale];
  return pageMetadata({ locale, path: "/blog", title, description, ogDescription: descriptionOg });
}

const LOCALE_FORMAT: Record<Locale, string> = {
  de: "de-CH",
  en: "en-GB",
  fr: "fr-CH",
  it: "it-CH",
};

const I18N: Record<Locale, {
  label: string;
  title: string;
  lead: string;
  empty: string;
  readingTime: string;
  readMore: string;
}> = {
  de: {
    label: "Wissen & Ratgeber",
    title: "Digitaler Nachlass aus der Praxis",
    lead: "Aus dem Aufbau von Heritavo: Was wir über Notfallplanung, Passwort-Vererbung und Zero-Knowledge-Verschlüsselung gelernt haben.",
    empty: "Bald gibt's hier erste Artikel.",
    readingTime: "Min Lesezeit",
    readMore: "Weiterlesen",
  },
  en: {
    label: "Insights & guides",
    title: "Digital legacy from practice",
    lead: "From building Heritavo: what we've learned about emergency planning, password inheritance, and zero-knowledge encryption.",
    empty: "First articles coming soon.",
    readingTime: "min read",
    readMore: "Read more",
  },
  fr: {
    label: "Ressources & guides",
    title: "Succession numérique en pratique",
    lead: "Issu de la construction de Heritavo : ce que nous avons appris sur la planification d'urgence, la transmission de mots de passe et le chiffrement zero-knowledge.",
    empty: "Premiers articles bientôt.",
    readingTime: "min de lecture",
    readMore: "Lire la suite",
  },
  it: {
    label: "Risorse e guide",
    title: "Successione digitale dalla pratica",
    lead: "Dalla costruzione di Heritavo: cosa abbiamo imparato su pianificazione d'emergenza, trasmissione di password e crittografia zero-knowledge.",
    empty: "Primi articoli a breve.",
    readingTime: "min di lettura",
    readMore: "Continua a leggere",
  },
};

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(LOCALE_FORMAT[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const safeLocale = toLocale((await params).locale);
  const posts = getAllBlogPostMeta(safeLocale);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${BASE_URL}/${safeLocale}/blog/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href={`/${safeLocale}`} className="flex items-center space-x-2.5" aria-label="Heritavo">
            <Image src="/logo.svg" alt="Heritavo Logo" width={160} height={48} unoptimized priority />
          </Link>
          <LanguageSwitcher />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-6 py-20 space-y-16">
        <header className="space-y-5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{I18N[safeLocale].label}</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">{I18N[safeLocale].title}</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {I18N[safeLocale].lead}
          </p>
          <div className="flex justify-center pt-2">
            <div className="h-1 w-16 bg-primary/30 rounded-full" />
          </div>
        </header>

        {posts.length === 0 ? (
          <p className="text-center text-sm text-slate-500">{I18N[safeLocale].empty}</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {posts.map((p, idx) => (
              <li key={p.slug} className={idx === 0 ? "md:col-span-2" : ""}>
                <Link
                  href={`/${safeLocale}/blog/${p.slug}`}
                  className="group flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-md hover:border-primary/40 transition-[border-color,box-shadow]"
                >
                  {p.image && (
                    <div className={`relative overflow-hidden rounded-xl mb-5 ${idx === 0 ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
                      <Image
                        src={p.image}
                        alt=""
                        aria-hidden
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-slow group-hover:scale-[1.06]"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                    <time dateTime={p.publishedAt}>{formatDate(p.publishedAt, safeLocale)}</time>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{p.readingTimeMin} {I18N[safeLocale].readingTime}</span>
                  </div>
                  <h2 className={`font-bold text-slate-900 group-hover:text-primary transition-colors mb-3 leading-tight ${idx === 0 ? "text-3xl" : "text-xl"}`}>
                    {p.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{p.description}</p>
                  <p className="mt-4 text-sm font-medium text-primary inline-flex items-center gap-1">
                    {I18N[safeLocale].readMore} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
