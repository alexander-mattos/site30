// src/components/seo/SeoBaseOrganization.ts

export function getBaseUrl() {
    // Garante que não termina com "/"
    const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const fallback = "https://www.integroseguros.com.br";

    const url = (envUrl || fallback).trim();
    return url.endsWith("/") ? url.slice(0, -1) : url;
}

export function getOrganizationJsonLd() {
    const baseUrl = getBaseUrl();

    return {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
        name: "Integro Seguros",
        url: baseUrl,
        logo: `${baseUrl}/logos/logo-integro.svg`,
        sameAs: [
            // ajuste/complemente com seus canais reais
            "https://www.instagram.com/integrosegurosoficial",
            "https://www.linkedin.com/company/integrosegurosoficial",
            "https://www.facebook.com/integrosegurosoficial",
        ],
    };
}

export function getWebsiteJsonLd() {
    const baseUrl = getBaseUrl();

    return {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        url: baseUrl,
        name: "Integro Seguros",
        publisher: {
            "@id": `${baseUrl}#organization`,
        },
    };
}
