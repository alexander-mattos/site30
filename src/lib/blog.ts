// src/lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

export type BlogPostMeta = {
    title: string;
    slug: string;
    date: string;
    author: string;
    category?: string;
    excerpt: string;
    seoTitle?: string;
    seoDescription?: string;
    imageUrl?: string;
    keywords?: string[];
    readingTime?: number;
};

export type BlogPost = BlogPostMeta & {
    content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Lê todos os nomes de arquivos .mdx na pasta /content/blog */
function getPostFileNames(): string[] {
    if (!fs.existsSync(BLOG_DIR)) {
        return [];
    }

    return fs
        .readdirSync(BLOG_DIR)
        .filter((file) => file.endsWith(".mdx"));
}

function fileNameToSlug(fileName: string): string {
    return fileName.replace(/\.mdx$/, "");
}

export function getPostBySlug(
    slugParam: string | string[] | undefined
): BlogPost {
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

    if (!slug) {
        notFound();
    }

    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(BLOG_DIR, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        notFound();
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const keywords = Array.isArray(data.keywords) ? data.keywords.map(String) : undefined;

    const readingTime =
        typeof data.readingTime === "number"
            ? data.readingTime
            : estimateReadingTimeMinutes(content);

    const meta: BlogPostMeta = {
        title: data.title ?? "",
        slug: data.slug ?? realSlug,
        date: data.date ?? "",
        author: data.author ?? "Integro Seguros",
        category: data.category ?? undefined,
        excerpt: data.excerpt ?? "",
        seoTitle: data.seoTitle ?? undefined,
        seoDescription: data.seoDescription ?? undefined,
        imageUrl: data.imageUrl ?? undefined,
        keywords,
        readingTime,
    };

    return {
        ...meta,
        content,
    };
}

export function getAllPosts(): BlogPostMeta[] {
    const fileNames = getPostFileNames();

    if (fileNames.length === 0) {
        return [];
    }

    const posts: BlogPostMeta[] = fileNames
        .map((fileName) => {
            const slug = fileNameToSlug(fileName);
            const fullPath = path.join(BLOG_DIR, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            const keywords = Array.isArray(data.keywords)
                ? data.keywords.map(String)
                : undefined;

            const readingTime =
                typeof data.readingTime === "number"
                    ? data.readingTime
                    : estimateReadingTimeMinutes(content);

            return {
                title: data.title ?? "",
                slug: data.slug ?? slug,
                date: data.date ?? "",
                author: data.author ?? "Integro Seguros",
                category: data.category ?? undefined,
                excerpt: data.excerpt ?? "",
                seoTitle: data.seoTitle ?? undefined,
                seoDescription: data.seoDescription ?? undefined,
                imageUrl: data.imageUrl ?? undefined,
                keywords,
                readingTime,
            } as BlogPostMeta;
        })
        .sort((a, b) => {
            const da = new Date(a.date).getTime();
            const db = new Date(b.date).getTime();
            return db - da;
        });

    return posts;
}

function estimateReadingTimeMinutes(text: string) {
    const words = text
        .replace(/[#>*_`[\]()-]/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;

    const wpm = 220; // leitura média pt-BR ~200–230
    return Math.max(1, Math.round(words / wpm));
}
