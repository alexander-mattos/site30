// app/blog/page.tsx
import { getAllPosts } from "@/lib/blog";
import { BlogPostCard } from "@/components/blog-post-card";
import { SeoSchemaPage } from "@/components/seo-schema-page";

const SITE =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

export const metadata = {
    title: "Blog Integro Seguros | Conteúdos sobre seguros e gestão de riscos",
    description:
        "Artigos sobre seguros para profissionais liberais e empresas, responsabilidade civil, seguro empresarial, vida em grupo e proteção de patrimônio.",
    alternates: {
        canonical: `${SITE}/blog`,
    },
    openGraph: {
        title: "Blog Integro Seguros | Seguros para profissionais e empresas",
        description:
            "Conteúdos práticos sobre seguros, gestão de riscos e proteção de negócios para profissionais liberais e empresas.",
        url: `${SITE}/blog`,
        type: "website",
        siteName: "Integro Seguros",
        locale: "pt_BR",
    },
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <SeoSchemaPage
                type="WebPage"
                title="Blog | Integro Seguros"
                description="Conteúdos sobre seguros e gestão de riscos para profissionais liberais e empresas."
                url={`${SITE}/blog`}
            />

            <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
                <header className="space-y-3">
                    <h1 className="text-3xl font-bold">
                        Conteúdos sobre seguros e gestão de riscos
                    </h1>
                    <p className="text-muted-foreground">
                        Artigos para profissionais liberais e empresas que querem proteger
                        seu patrimônio e o futuro do negócio.
                    </p>
                </header>

                {posts.length === 0 ? (
                    <p className="text-muted-foreground">
                        Ainda não publicamos nenhum conteúdo por aqui. Em breve teremos artigos
                        sobre seguros para profissionais e empresas.
                    </p>
                ) : (
                    <section className="grid gap-6 md:grid-cols-2">
                        {posts.map((post) => (
                            <BlogPostCard
                                key={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                slug={post.slug}
                                category={post.category}
                                date={post.date}
                            />
                        ))}
                    </section>
                )}
            </main>
        </>
    );
}
