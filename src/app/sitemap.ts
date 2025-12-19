import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

function clamp(n: number, min: number, max: number) {
    return Math.max(min, Math.min(max, n));
}

// Prioridade decai com o tempo: mais recente = mais importante
function priorityByDate(dateISO: string) {
    const now = Date.now();
    const t = new Date(dateISO).getTime();
    const ageDays = Math.max(0, (now - t) / (1000 * 60 * 60 * 24));

    // meia-vida ~120 dias (ajuste como quiser)
    const decay = Math.exp(-ageDays / 120);
    const priority = 0.45 + 0.5 * decay; // ~0.95 novo, ~0.45 antigo
    return clamp(Number(priority.toFixed(2)), 0.3, 1.0);
}

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${SITE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];

    const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => {
        const lastModified = new Date(post.date); // se depois tiver updatedAt, use aqui
        return {
            url: `${SITE_URL}/blog/${post.slug}`,
            lastModified,
            changeFrequency: "weekly",
            priority: priorityByDate(post.date),
        };
    });

    return [...staticRoutes, ...blogRoutes];
}
