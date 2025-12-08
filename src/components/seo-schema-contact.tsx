// src/components/seo/SeoSchemaContact.tsx
import React from "react";
import {
    getBaseUrl,
    getOrganizationJsonLd,
    getWebsiteJsonLd,
} from "./seo-base-organization";

interface SeoSchemaContactProps {
    title: string;
    description: string;
    urlPath: string; // ex.: "/contato"
    telephone?: string;
    email?: string;
}

export function SeoSchemaContact({
    title,
    description,
    urlPath,
    telephone,
    email,
}: SeoSchemaContactProps) {
    const baseUrl = getBaseUrl();
    const pageUrl = `${baseUrl}${urlPath}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            getOrganizationJsonLd(),
            getWebsiteJsonLd(),
            {
                "@type": "ContactPage",
                "@id": `${pageUrl}#contact`,
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
                "@type": "ContactPoint",
                "@id": `${baseUrl}#main-contact`,
                telephone: telephone || "+55-00-0000-0000",
                email: email || "contato@integroseguros.com.br",
                contactType: "customer service",
                areaServed: "BR",
                availableLanguage: ["Portuguese", "pt-BR"],
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
