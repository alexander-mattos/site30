// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { BlogPostMeta } from "@/lib/blog";
import { SeoSchemaArticle } from "@/components/seo-schema-article";

export const runtime = "nodejs";

type RouteParams = {
    slug: string;
};

export async function generateStaticParams() {
    const posts = getAllPosts();

    return posts.map((post: BlogPostMeta) => ({
        slug: post.slug,
    }));
}

const mdxComponents = {};

export default async function BlogPostPage(props: {
    params: Promise<RouteParams>;
}) {
    // ✅ aqui a gente "desembrulha" a Promise de params
    const { slug } = await props.params;

    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const url = `https://www.seudominio.com.br/blog/${post.slug}`;

    return (
        <>
            <SeoSchemaArticle
                title={post.title}
                description={post.excerpt}
                url={url}
                datePublished={post.date}
                authorName={post.author}
                publisherName="Integro Seguros"
                publisherLogoUrl="https://www.seudominio.com.br/logo.png"
                section={post.category}
                imageUrl={post.imageUrl}
            />

            <main className="max-w-3xl mx-auto px-4 py-10">
                <article className="prose prose-neutral dark:prose-invert max-w-none">
                    <header className="mb-8">
                        {post.category && (
                            <p className="text-xs uppercase text-muted-foreground tracking-wide mb-2">
                                {post.category} •{" "}
                                {post.date &&
                                    new Date(post.date).toLocaleDateString("pt-BR")}
                            </p>
                        )}
                        <h1 className="text-3xl md:text-4xl font-bold mb-3">
                            {post.title}
                        </h1>
                        {post.excerpt && (
                            <p className="text-muted-foreground">{post.excerpt}</p>
                        )}
                    </header>

                    <MDXRemote source={post.content} components={mdxComponents} />
                </article>
            </main>
        </>
    );
}
