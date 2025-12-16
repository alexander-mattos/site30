// src/components/seo-schema-page.tsx
type SeoSchemaPageProps = {
    type?: "WebPage" | "AboutPage" | "ContactPage";
    title: string;
    description: string;
    url: string;
};

export function SeoSchemaPage({
    type = "WebPage",
    title,
    description,
    url,
}: SeoSchemaPageProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": type,
        name: title,
        description,
        url,
    };

    return (
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }}
        />
    );
}
