// src/components/seo-schema-service.tsx

"use client";

import Script from "next/script";

type FaqItem = {
    question: string;
    answer: string;
};

type BreadcrumbItem = {
    name: string;
    item: string; // URL absoluta
};

type SeoSchemaServiceProps = {
    serviceName: string;
    serviceDescription: string;
    urlPath: string; // ex.: "/seguros/rc-profissional"
    faqItems?: FaqItem[];
    providerName?: string;
    areaServed?: string;
    serviceType?: string;
    // opcional: sobrescrever breadcrumbs padrão
    breadcrumbsOverride?: BreadcrumbItem[];
};

export function SeoSchemaService({
    serviceName,
    serviceDescription,
    urlPath,
    faqItems,
    providerName = "Integro Seguros",
    areaServed = "Brasil",
    serviceType = "InsuranceAgency",
    breadcrumbsOverride,
}: SeoSchemaServiceProps) {
    const baseUrl =
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.integroseguros.com.br";

    const fullUrl = `${baseUrl}${urlPath}`;

    const breadcrumbs: BreadcrumbItem[] =
        breadcrumbsOverride ??
        [
            { name: "Início", item: baseUrl },
            { name: "Seguros", item: `${baseUrl}/seguros` },
            { name: serviceName, item: fullUrl },
        ];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        description: serviceDescription,
        url: fullUrl,
        serviceType,
        areaServed,
        provider: {
            "@type": "Organization",
            name: providerName,
            url: baseUrl,
        },
    };

    const faqSchema =
        faqItems && faqItems.length
            ? {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: item.answer,
                    },
                })),
            }
            : null;

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.item,
        })),
    };

    return (
        <>
            <Script
                id={`schema-service-${urlPath}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {faqSchema && (
                <Script
                    id={`schema-faq-${urlPath}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <Script
                id={`schema-breadcrumb-${urlPath}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
