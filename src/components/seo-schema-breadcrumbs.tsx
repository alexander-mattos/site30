type BreadcrumbItem = {
    name: string;
    url: string; // sempre absoluta
};

type SeoSchemaBreadcrumbsProps = {
    items: BreadcrumbItem[];
};

export function SeoSchemaBreadcrumbs({ items }: SeoSchemaBreadcrumbsProps) {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.name,
            item: item.url,
        })),
    };

    return (
        <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbJsonLd),
            }}
        />
    );
}
