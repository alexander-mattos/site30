// src/lib/blog.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
): BlogPost | null {
    // Garante que sempre vamos trabalhar com uma string simples
    const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

    if (!slug) {
        // Se ainda assim não tiver slug, não tem o que fazer
        return null;
    }

    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(BLOG_DIR, `${realSlug}.mdx`);

    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

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
            const { data } = matter(fileContents);

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
            } as BlogPostMeta;
        })
        .sort((a, b) => {
            const da = new Date(a.date).getTime();
            const db = new Date(b.date).getTime();
            return db - da;
        });

    return posts;
}
