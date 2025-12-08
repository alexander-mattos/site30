// src/components/seo/SeoSchemaAbout.tsx
import React from "react";
import {
    getBaseUrl,
    getOrganizationJsonLd,
    getWebsiteJsonLd,
} from "./seo-base-organization";

interface SeoSchemaAboutProps {
    title: string;
    description: string;
    urlPath: string; // ex.: "/sobre"
}

export function SeoSchemaAbout({
    title,
    description,
    urlPath,
}: SeoSchemaAboutProps) {
    const baseUrl = getBaseUrl();
    const pageUrl = `${baseUrl}${urlPath}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            getOrganizationJsonLd(),
            getWebsiteJsonLd(),
            {
                "@type": "AboutPage",
                "@id": `${pageUrl}#about`,
                url: pageUrl,
                name: title,
                description,
                isPartOf: {
                    "@id": `${baseUrl}#website`,
                },
                about: {
                    "@id": `${baseUrl}#organization`,
                },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${pageUrl}#breadcrumb`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Início",
                        item: baseUrl,
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        name: title,
                        item: pageUrl,
                    },
                ],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
