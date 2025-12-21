// app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/blog"; // sua função de fetch

const articleJsonLd = (post: {
    title: string;
    slug: string;
    date: string;
    author: string;
    excerpt: string;
}) => ({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
        "@type": "Person",
        name: post.author,
    },
    publisher: {
        "@type": "Organization",
        name: "Integro Seguros",
    },
    datePublished: post.date,
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://www.integroseguros.com.br/blog/${post.slug}`,
    },
});

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Artigo não encontrado",
            robots: { index: false, follow: false },
        };
    }

    return {
        title: post.seoTitle ?? post.title,
        description: post.seoDescription ?? post.excerpt,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.seoTitle ?? post.title,
            description: post.seoDescription ?? post.excerpt,
            type: "article",
            url: `https://www.integroseguros.com.br/blog/${post.slug}`,
            publishedTime: post.date,
        },
    };
}

export default async function PostPage({ params }: Props) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        return <div>Artigo não encontrado</div>;
    }

    return (
        <>
            {/* SCHEMA SEO */}
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([articleJsonLd(post)]),
                }}
            />
            <div>
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </>
    );
}
