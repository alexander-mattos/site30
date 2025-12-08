// src/components/seo-schema-article.tsx

type SeoSchemaArticleProps = {
    /** Título do artigo (H1 / headline) */
    title: string;
    /** Resumo ou descrição curta (excerpt) */
    description: string;
    /** URL absoluta do artigo */
    url: string;
    /** Data de publicação em ISO (ex: 2025-12-02 ou 2025-12-02T10:00:00-03:00) */
    datePublished: string;
    /** Data de atualização em ISO (opcional) */
    dateModified?: string;
    /** Nome do autor (pode ser pessoa física ou "Integro Seguros") */
    authorName: string;
    /** Nome do site / publisher (default Integro Seguros) */
    publisherName?: string;
    /** URL do logo do publisher (opcional, recomendado) */
    publisherLogoUrl?: string;
    /** Categoria / seção do artigo (ex: Seguros Profissionais) */
    section?: string;
    /** URL de imagem principal do artigo (opcional, recomendado) */
    imageUrl?: string;
    /** Palavras-chave (opcional) */
    keywords?: string[];
};

export function SeoSchemaArticle({
    title,
    description,
    url,
    datePublished,
    dateModified,
    authorName,
    publisherName = "Integro Seguros",
    publisherLogoUrl,
    section,
    imageUrl,
    keywords,
}: SeoSchemaArticleProps) {
    const isBrandAuthor = authorName === publisherName;

    const articleJsonLd: Record<string, any> = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": url,
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
        headline: title,
        description,
        inLanguage: "pt-BR",
        author: {
            "@type": isBrandAuthor ? "Organization" : "Person",
            name: authorName,
        },
        publisher: {
            "@type": "Organization",
            name: publisherName,
            ...(publisherLogoUrl && {
                logo: {
                    "@type": "ImageObject",
                    url: publisherLogoUrl,
                },
            }),
        },
        datePublished,
        ...(dateModified && { dateModified }),
        ...(section && { articleSection: section }),
        ...(imageUrl && {
            image: {
                "@type": "ImageObject",
                url: imageUrl,
            },
        }),
        ...(keywords && keywords.length > 0 && { keywords }),
    };

    return (
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(articleJsonLd),
            }}
        />
    );
}
