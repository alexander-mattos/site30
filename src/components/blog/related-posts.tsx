import type { BlogPostMeta } from "@/lib/blog";

type RelatedPostsProps = {
    currentSlug: string;
    currentCategory?: string;
    currentKeywords?: string[];
    posts: BlogPostMeta[];
    limit?: number;
};

function normalizeKeyword(s: string) {
    return s.trim().toLowerCase();
}

function scoreRelated(
    post: BlogPostMeta,
    currentCategory?: string,
    currentKeywords?: string[]
) {
    let score = 0;

    // Categoria pesa bem (mas não domina tudo)
    if (currentCategory && post.category && post.category === currentCategory) {
        score += 3;
    }

    const a = new Set((currentKeywords ?? []).map(normalizeKeyword));
    const b = new Set((post.keywords ?? []).map(normalizeKeyword));

    // Interseção de keywords
    let overlap = 0;
    for (const k of a) if (b.has(k)) overlap++;

    score += overlap * 2;

    // Leve boost para posts com imagem (melhor CTR na listagem)
    if (post.imageUrl) score += 0.5;

    return score;
}

export function RelatedPosts({
    currentSlug,
    currentCategory,
    currentKeywords,
    posts,
    limit = 3,
}: RelatedPostsProps) {
    const related = posts
        .filter((p) => p.slug !== currentSlug)
        .map((p) => ({ post: p, score: scoreRelated(p, currentCategory, currentKeywords) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, limit)
        .map((x) => x.post);

    if (related.length === 0) return null;

    return (
        <section className="mt-12">
            <h2 className="text-lg font-semibold mb-4">Leia também</h2>

            <div className="grid gap-4 sm:grid-cols-3">
                {related.map((p) => (
                    <a
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="rounded-xl border bg-background p-4 hover:bg-muted/40 transition"
                    >
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">
                            {p.category ?? "Blog"}
                        </div>

                        <div className="mt-2 font-semibold leading-snug line-clamp-3">
                            {p.seoTitle ?? p.title}
                        </div>

                        {p.excerpt ? (
                            <div className="mt-2 text-sm text-muted-foreground line-clamp-3">
                                {p.excerpt}
                            </div>
                        ) : null}

                        <div className="mt-3 text-xs text-muted-foreground">
                            {p.readingTime ? `${p.readingTime} min` : null}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
