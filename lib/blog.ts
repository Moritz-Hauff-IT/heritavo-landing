import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { type Locale } from "@/i18n/config";

/**
 * Blog-Content-Reader fuer file-system-basierte Articles.
 *
 * Konvention:
 *   content/blog/<locale>/<slug>.md
 *
 * Frontmatter (Pflicht):
 *   ---
 *   title: "..."
 *   description: "..."
 *   publishedAt: "2026-05-21"     # ISO date
 *   updatedAt: "2026-05-21"       # ISO date (optional, falls vorhanden zeigt "aktualisiert")
 *   keywords: ["...", "..."]      # primary + secondary keywords
 *   author: "Moritz Hauff"        # default
 *   ---
 *
 * Body: standard Markdown (GFM via marked).
 */

export type BlogPostFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  keywords?: string[];
  author?: string;
  draft?: boolean;
  /** Header-Bild, Pfad unter public/ (z.B. /images/blog/crypto.webp) */
  image?: string;
  imageAlt?: string;
};

export type BlogPost = BlogPostFrontmatter & {
  slug: string;
  locale: Locale;
  htmlBody: string;
  readingTimeMin: number;
};

export type BlogPostMeta = BlogPostFrontmatter & {
  slug: string;
  locale: Locale;
  readingTimeMin: number;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "blog");

marked.use({
  gfm: true,
  breaks: false,
});

function readPostFile(locale: Locale, slug: string): { data: BlogPostFrontmatter; content: string } | null {
  const file = path.join(CONTENT_DIR, locale, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  return { data: parsed.data as BlogPostFrontmatter, content: parsed.content };
}

function estimateReadingTimeMin(text: string): number {
  // ~200 Woerter/Min Lesegeschwindigkeit (DE-Standard, leicht ueber englisch)
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getBlogPost(locale: Locale, slug: string): BlogPost | null {
  const file = readPostFile(locale, slug);
  if (!file) return null;
  if (file.data.draft) return null;
  const htmlBody = marked.parse(file.content, { async: false }) as string;
  return {
    ...file.data,
    slug,
    locale,
    htmlBody,
    readingTimeMin: estimateReadingTimeMin(file.content),
  };
}

export function getAllBlogPostMeta(locale: Locale): BlogPostMeta[] {
  const dir = path.join(CONTENT_DIR, locale);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  const metas = files
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const parsed = readPostFile(locale, slug);
      if (!parsed) return null;
      if (parsed.data.draft) return null;
      return {
        ...parsed.data,
        slug,
        locale,
        readingTimeMin: estimateReadingTimeMin(parsed.content),
      } satisfies BlogPostMeta;
    })
    .filter((m): m is BlogPostMeta => m !== null);
  // sort: neuestes zuerst
  return metas.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getAllBlogSlugs(locale: Locale): string[] {
  return getAllBlogPostMeta(locale).map((m) => m.slug);
}
