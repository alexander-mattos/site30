// src/components/blog-post-card.tsx

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

type BlogPostCardProps = {
    title: string;
    excerpt: string;
    slug: string;
    category?: string;
    date?: string;
};

export function BlogPostCard({
    title,
    excerpt,
    slug,
    category,
    date,
}: BlogPostCardProps) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader className="space-y-2">
                {(category || date) && (
                    <p className="text-xs uppercase text-muted-foreground tracking-wide">
                        {category}
                        {category && date && " • "}
                        {date &&
                            new Date(date).toLocaleDateString("pt-BR", {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric",
                            })}
                    </p>
                )}
                <CardTitle className="text-lg">
                    <Link href={`/blog/${slug}`} className="hover:underline">
                        {title}
                    </Link>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
            </CardContent>

            <CardFooter>
                <Link
                    href={`/blog/${slug}`}
                    className="text-sm font-medium underline underline-offset-4"
                >
                    Ler artigo completo
                </Link>
            </CardFooter>
        </Card>
    );
}
