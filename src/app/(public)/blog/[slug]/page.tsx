// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { BlogPostMeta } from "@/lib/blog";
import { SeoSchemaArticle } from "@/components/seo-schema-article";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";
const PUBLISHER_LOGO_URL = `${SITE_URL}/logos/integro-seguros.svg`;

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

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const post = getPostBySlug(slug);
    if (!post) {
        return {};
    } ''

    const url = `${SITE_URL}/blog/${post.slug}`;
    const title = post.seoTitle ?? post.title;
    const description = post.seoDescription ?? post.excerpt;

    return {
        title,
        description,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            type: "article",
            siteName: "Integro Seguros",
            locale: "pt_BR",
            images: post.imageUrl
                ? [
                    {
                        url: post.imageUrl.startsWith("http")
                            ? post.imageUrl
                            : `${SITE_URL}${post.imageUrl}`,
                        alt: post.title,
                    },
                ]
                : undefined,
        },
    };
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

    const url = `${SITE_URL}/blog/${post.slug}`;
    const datePublishedISO = new Date(post.date).toISOString();

    return (
        <>
            <SeoSchemaArticle
                title={post.seoTitle ?? post.title}
                description={post.seoDescription ?? post.excerpt}
                url={url}
                datePublished={datePublishedISO}
                // se no futuro tiver updatedAt no frontmatter, passe aqui:
                // dateModified={post.updatedAt}
                authorName={post.author ?? "Integro Seguros"}
                publisherName="Integro Seguros"
                publisherLogoUrl={PUBLISHER_LOGO_URL}
                section={post.category}
                imageUrl={
                    post.imageUrl
                        ? post.imageUrl.startsWith("http")
                            ? post.imageUrl
                            : `${SITE_URL}${post.imageUrl}`
                        : undefined
                }
            // se você adicionar "keywords" no frontmatter, pode simplesmente repassar:
            // keywords={post.keywords}
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
                        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                            <span>
                                {new Date(post.date).toLocaleDateString("pt-BR", {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </span>
                            {post.author && <span>• {post.author}</span>}
                            {post.category && (
                                <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs uppercase tracking-wide">
                                    {post.category}
                                </span>
                            )}
                        </div>
                        {post.excerpt && (
                            <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                        )}
                    </header>

                    <MDXRemote source={post.content} components={mdxComponents} />
                </article>
            </main>
        </>
    );
}
