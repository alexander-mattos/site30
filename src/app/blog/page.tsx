// app/blog/page.tsx
import { getAllPosts } from "@/lib/blog";
import { SeoSchemaPage } from "@/components/seo-schema-page";
import Image from "next/image";
import { blurDataURLShimmer } from "@/lib/og/shimmer";

const SITE =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

export const metadata = {
    title: "Blog Integro Seguros | Conteúdos sobre seguros e gestão de riscos",
    description:
        "Artigos sobre seguros para profissionais liberais e empresas, responsabilidade civil, seguro empresarial, vida e proteção de patrimônio.",
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

function formatDate(date: string) {
    try {
        return new Date(date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    } catch {
        return date;
    }
}

function normalize(s: string) {
    return s.trim().toLowerCase();
}

function categoryLabel(cat?: string) {
    if (!cat) return "Blog";
    const map: Record<string, string> = {
        "seguros-profissionais": "Seguros Profissionais",
        auto: "Seguro Auto",
        frota: "Seguro de Frotas",
        empresarial: "Seguro Empresarial",
        vida: "Seguro de Vida",
        "seguro-saude": "Seguro Saúde",
    };
    return map[cat] ?? cat;
}

function ensureLeadingSlash(url?: string) {
    if (!url) return undefined;
    return url.startsWith("/") ? url : `/${url}`;
}

function postCardImage(post: { slug: string; imageUrl?: string }) {
    // se tem imagem no frontmatter, usa ela
    if (post.imageUrl) return ensureLeadingSlash(post.imageUrl);

    // fallback: OG do post
    return `/blog/${post.slug}/opengraph-image`;
}

type PageProps = {
    searchParams?: Promise<{ q?: string; cat?: string }>;
};

export default async function BlogPage({ searchParams }: PageProps) {
    const sp = (await searchParams) ?? {};
    const q = sp.q ? normalize(sp.q) : "";
    const cat = sp.cat ? normalize(sp.cat) : "";

    const posts = getAllPosts();

    // categorias (para filtro)
    const categories = Array.from(
        new Set(posts.map((p) => p.category).filter(Boolean) as string[])
    ).sort((a, b) => a.localeCompare(b));

    // filtro
    const filtered = posts.filter((p) => {
        const matchesCat = !cat || normalize(p.category ?? "") === cat;

        const haystack = normalize(
            [
                p.title,
                p.excerpt,
                p.category,
                ...(p.keywords ?? []),
            ]
                .filter(Boolean)
                .join(" ")
        );

        const matchesQ = !q || haystack.includes(q);
        return matchesCat && matchesQ;
    });

    const [featured, ...rest] = filtered;

    return (
        <>
            <SeoSchemaPage
                type="WebPage"
                title="Blog | Integro Seguros"
                description="Conteúdos sobre seguros e gestão de riscos para profissionais liberais e empresas."
                url={`${SITE}/blog`}
            />

            <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
                {/* HERO */}
                <section className="relative overflow-hidden rounded-3xl border bg-background">
                    {/* accent */}
                    <div className="absolute left-0 top-0 h-full w-2 bg-[#C4162C]" />
                    {/* glow */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C4162C]/10 blur-3xl" />
                    <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#C4162C]/10 blur-3xl" />

                    <div className="relative p-6 md:p-10">
                        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            Integro Seguros • Blog
                        </p>

                        <h1 className="mt-3 text-3xl md:text-4xl font-bold leading-tight">
                            Conteúdos sobre seguros e gestão de riscos
                        </h1>

                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Artigos objetivos para profissionais e empresas que querem proteger
                            patrimônio, reduzir risco jurídico e tomar decisões com clareza.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://wa.me/552141216120?text=Quero%20receber%20conte%C3%BAdos%20e%20orienta%C3%A7%C3%A3o%20sobre%20seguros."
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-xl bg-[#C4162C] px-5 py-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#B11226] transition"
                            >
                                Receber conteúdos no WhatsApp
                            </a>

                            <a
                                href="/contato"
                                className="inline-flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium hover:bg-muted/40 transition"
                            >
                                Falar com especialista
                            </a>
                        </div>

                        {/* Busca + Filtro */}
                        <form
                            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
                            action="/blog"
                            method="GET"
                        >
                            <div className="flex-1">
                                <input
                                    name="q"
                                    defaultValue={sp.q ?? ""}
                                    placeholder="Buscar por tema, especialidade, cobertura…"
                                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C4162C]/30"
                                />
                            </div>

                            <div className="sm:w-64">
                                <select
                                    name="cat"
                                    defaultValue={sp.cat ?? ""}
                                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C4162C]/30"
                                >
                                    <option value="">Todas as categorias</option>
                                    {categories.map((c) => (
                                        <option key={c} value={c}>
                                            {categoryLabel(c)}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-xl bg-[#C4162C] px-5 py-3 text-sm font-medium text-[#F5F5F5] hover:bg-[#B11226] transition"
                            >
                                Filtrar
                            </button>
                        </form>

                        <div className="mt-4 text-xs text-muted-foreground">
                            {filtered.length} artigo(s) encontrado(s)
                            {cat ? ` • ${categoryLabel(cat)}` : ""}
                            {q ? ` • busca: “${sp.q}”` : ""}
                        </div>
                    </div>
                </section>

                {/* FEATURED */}
                {featured ? (
                    <section className="grid gap-6 lg:grid-cols-3">
                        <a
                            href={`/blog/${featured.slug}`}
                            className="group relative overflow-hidden rounded-3xl border bg-background lg:col-span-2"
                        >
                            <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                            <div className="absolute left-0 top-0 h-full w-2 bg-[#C4162C]" />

                            <Image
                                src={postCardImage(featured)}
                                alt={featured.title}
                                width={1200}
                                height={630}
                                className="h-64 w-full object-cover sm:h-80"
                                priority
                                placeholder="blur"
                                blurDataURL={blurDataURLShimmer(1200, 630)}
                                sizes="(max-width: 1024px) 100vw, 768px"
                                // OG é dinâmico — no dev o optimizer às vezes dá ruim. Isso elimina 90% das dores.
                                unoptimized={!featured.imageUrl}
                            />

                            <div className="relative p-6">
                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                    <span className="inline-flex items-center rounded-full border px-2 py-0.5 uppercase tracking-wide">
                                        Destaque
                                    </span>
                                    <span>•</span>
                                    <span>{categoryLabel(featured.category)}</span>
                                    <span>•</span>
                                    <span>{formatDate(featured.date)}</span>
                                    {featured.readingTime ? (
                                        <>
                                            <span>•</span>
                                            <span>{featured.readingTime} min</span>
                                        </>
                                    ) : null}
                                </div>

                                <h2 className="mt-3 text-2xl font-bold leading-snug group-hover:underline underline-offset-4 decoration-[#C4162C]/50">
                                    {featured.seoTitle ?? featured.title}
                                </h2>

                                {featured.excerpt ? (
                                    <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">
                                        {featured.excerpt}
                                    </p>
                                ) : null}

                                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#C4162C]">
                                    Ler artigo <span aria-hidden>→</span>
                                </div>
                            </div>
                        </a>

                        {/* Sidebar: “por onde começar” */}
                        <div className="rounded-3xl border bg-background p-6">
                            <h3 className="text-base font-semibold">Por onde começar</h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Se você está montando a proteção ideal, estes temas costumam ser
                                os mais importantes primeiro.
                            </p>

                            <div className="mt-5 grid gap-3">
                                <a
                                    href="/seguros/rc-profissional"
                                    className="rounded-xl border px-4 py-3 hover:bg-muted/40 transition"
                                >
                                    <div className="text-sm font-medium">RC Profissional</div>
                                    <div className="text-xs text-muted-foreground">
                                        Defesa e indenização para profissionais
                                    </div>
                                </a>

                                <a
                                    href="/seguros/empresarial"
                                    className="rounded-xl border px-4 py-3 hover:bg-muted/40 transition"
                                >
                                    <div className="text-sm font-medium">Seguro Empresarial</div>
                                    <div className="text-xs text-muted-foreground">
                                        Patrimônio, operação e responsabilidades
                                    </div>
                                </a>

                                <a
                                    href="/contato"
                                    className="rounded-xl bg-[#C4162C] px-4 py-3 text-[#F5F5F5] hover:bg-[#B11226] transition"
                                >
                                    <div className="text-sm font-semibold">Falar com especialista</div>
                                    <div className="text-xs opacity-90">
                                        Orientação rápida e objetiva
                                    </div>
                                </a>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="rounded-3xl border bg-background p-8 text-muted-foreground">
                        Ainda não publicamos nenhum conteúdo por aqui. Em breve teremos
                        artigos sobre seguros para profissionais e empresas.
                    </div>
                )}

                {/* GRID */}
                {rest.length > 0 ? (
                    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {rest.map((post) => (
                            <a
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group overflow-hidden rounded-3xl border bg-background hover:bg-muted/30 transition"
                            >
                                <Image
                                    src={postCardImage(post)}
                                    alt={post.title}
                                    width={600}
                                    height={315}
                                    className="h-40 w-full object-cover"
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL={blurDataURLShimmer(600, 315)}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    unoptimized={!post.imageUrl}
                                />

                                <div className="p-5">
                                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                        <span className="inline-flex items-center rounded-full border px-2 py-0.5 uppercase tracking-wide">
                                            {categoryLabel(post.category)}
                                        </span>
                                        <span>•</span>
                                        <span>{formatDate(post.date)}</span>
                                        {post.readingTime ? (
                                            <>
                                                <span>•</span>
                                                <span>{post.readingTime} min</span>
                                            </>
                                        ) : null}
                                    </div>

                                    <h3 className="mt-3 font-semibold leading-snug line-clamp-3 group-hover:underline underline-offset-4 decoration-[#C4162C]/40">
                                        {post.seoTitle ?? post.title}
                                    </h3>

                                    {post.excerpt ? (
                                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    ) : null}

                                    {post.keywords?.length ? (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {post.keywords.slice(0, 3).map((k) => (
                                                <span
                                                    key={k}
                                                    className="rounded-full border px-2.5 py-1 text-[11px] text-muted-foreground"
                                                >
                                                    {k}
                                                </span>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </a>
                        ))}
                    </section>
                ) : null}
            </main>
        </>
    );
}
