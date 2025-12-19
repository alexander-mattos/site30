import Image from "next/image";
import { blurDataURLShimmer } from "@/lib/og/shimmer";

type BlogHeaderProps = {
  title: string;
  slug: string;
  date: string;
  author?: string;
  category?: string;
  excerpt?: string;
  imageUrl?: string;
  readingTime?: number;
  keywords?: string[];
};

function normalizeImageUrl(url?: string) {
  if (!url) return undefined;
  return url.startsWith("/") ? url : `/${url}`;
}

export function BlogHeader({
  title,
  slug,
  date,
  author,
  category,
  excerpt,
  imageUrl,
  readingTime,
  keywords,
}: BlogHeaderProps) {

  // 🔐 imagem nunca é vazia
  const headerImage =
    normalizeImageUrl(imageUrl) ?? `/blog/${slug}/opengraph-image`;

  return (
    <header className="mb-10">
      <div className="mb-6 overflow-hidden rounded-2xl border">
        <Image
          src={headerImage}
          alt={title}
          width={1200}
          height={630}
          className="w-full h-[260px] sm:h-[360px] object-cover"
          priority
          placeholder="blur"
          blurDataURL={blurDataURLShimmer(1200, 630)}
          sizes="(max-width: 640px) 100vw, 768px"
        />
      </div>

      {category ? (
        <div className="text-xs uppercase tracking-wide text-muted-foreground">
          {category}
        </div>
      ) : null}

      <h1 className="mt-2 text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h1>

      <div className="mt-3 flex flex-wrap gap-3 text-sm text-muted-foreground">
        <span>
          {new Date(date).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
        {readingTime ? <span>• {readingTime} min de leitura</span> : null}
        {author ? <span>• {author}</span> : null}
      </div>

      {excerpt ? (
        <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
          {excerpt}
        </p>
      ) : null}

      {keywords?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {keywords.map((k) => (
            <span
              key={k}
              className="inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground"
            >
              {k}
            </span>
          ))}
        </div>
      ) : null}
    </header>
  );
}
