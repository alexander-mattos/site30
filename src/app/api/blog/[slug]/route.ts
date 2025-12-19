// src/app/api/blog/[slug]/route.ts
import { NextResponse } from "next/server";
import { getPostBySlug } from "@/lib/blog";

export const runtime = "nodejs";

export async function GET(
    _req: Request,
    context: { params: Promise<{ slug: string }> }
) {
    const { slug } = await context.params;

    const post = getPostBySlug(slug);

    return NextResponse.json({
        title: post.title,
        excerpt: post.excerpt,
        imageUrl: post.imageUrl ?? null,
        category: post.category ?? null,
        date: post.date ?? null,
    });
}
