import type { ReactNode } from "react";
import type { BlogPostMeta } from "@/lib/blog";
import { BlogEditorial } from "@/components/blog-editorial";
import { ArticleCta } from "@/components/actions/article-cta";
import { RelatedPosts } from "@/components/blog/related-posts";
import { BlogHeader } from "@/components/blog/blog-header";
import { articleCtaByCategory, defaultArticleCta } from "@/lib/article-cta-map";

type BlogLayoutProps = {
    post: BlogPostMeta & {
        content?: string; // se quiser passar, ok; aqui não usamos diretamente
        keywords?: string[];
        readingTime?: number;
    };
    allPosts: BlogPostMeta[];
    children: ReactNode; // o conteúdo MDX renderizado
};

export function BlogLayout({ post, allPosts, children }: BlogLayoutProps) {
    const preset = post.readingTime && post.readingTime <= 4 ? "short" : "long";
    const cta =
        (post.category && articleCtaByCategory[post.category]) || defaultArticleCta;

    return (
        <main className="max-w-3xl mx-auto px-4 py-10">
            <BlogEditorial preset={preset}>
                <BlogHeader
                    title={post.title}
                    slug={post.slug}
                    date={post.date}
                    author={post.author}
                    category={post.category}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                    readingTime={post.readingTime}
                    keywords={post.keywords}
                />

                {/* Conteúdo */}
                {children}
            </BlogEditorial>

            {/* CTA fora do editorial, pra “quebrar” a leitura e chamar ação */}
            <ArticleCta {...cta} />

            {/* Relacionados */}
            <RelatedPosts
                currentSlug={post.slug}
                currentCategory={post.category}
                currentKeywords={post.keywords}
                posts={allPosts}
                limit={3}
            />
        </main>
    );
}
