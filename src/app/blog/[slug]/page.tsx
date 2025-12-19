// app/blog/[slug]/page.tsx
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { BlogLayout } from "@/components/blog/blog-layout";
import type { Metadata } from "next";
import { SeoSchemaBreadcrumbs } from "@/components/seo-schema-breadcrumbs";
import { blogCategoryLabels } from "@/lib/blog-category-labels";
import { SeoSchemaArticle } from "@/components/seo-schema-article";


const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

export function absoluteUrl(path: string) {
    return new URL(path, SITE_URL).toString();;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    const post = getPostBySlug(slug);

    const url = absoluteUrl(`/blog/${post.slug}`);
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
            images: [
                {
                    url: absoluteUrl(`/blog/${post.slug}/opengraph-image`),
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [absoluteUrl(`/blog/${post.slug}/opengraph-image`)],
        },
        keywords: post.keywords,
    };
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // ✅ post nasce aqui
    const post = getPostBySlug(slug);
    const allPosts = getAllPosts();

    const datePublishedISO = new Date(post.date).toISOString();

    // ✅ tudo que usa post fica AQUI
    const categoryLabel = post.category
        ? blogCategoryLabels[post.category] ?? post.category
        : null;

    const breadcrumbItems = [
        { name: "Início", url: absoluteUrl("/") },
        { name: "Blog", url: absoluteUrl("/blog") },
        ...(post.category
            ? [
                {
                    name: categoryLabel ?? post.category,
                    url: absoluteUrl(`/blog/categoria/${post.category}`),
                },
            ]
            : []),
        { name: post.title, url: absoluteUrl(`/blog/${post.slug}`) },
    ];

    return (
        <>
            <SeoSchemaArticle
                title={post.seoTitle ?? post.title}
                description={post.seoDescription ?? post.excerpt}
                url={absoluteUrl(`/blog/${post.slug}`)}
                datePublished={datePublishedISO}
                authorName={post.author ?? "Integro Seguros"}
                publisherName="Integro Seguros"
                publisherLogoUrl={absoluteUrl("/images/brand/logo-og.svg")}
                section={post.category}
                imageUrl={absoluteUrl(`/blog/${post.slug}/opengraph-image`)}
                keywords={post.keywords}
            />

            <SeoSchemaBreadcrumbs items={breadcrumbItems} />

            <BlogLayout post={post} allPosts={allPosts}>
                <MDXRemote source={post.content} components={{}} />
            </BlogLayout>
        </>
    );
}

