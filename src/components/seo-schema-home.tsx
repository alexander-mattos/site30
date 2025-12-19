export function SeoSchemaHome() {
    const org = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Integro Seguros",
        url: "https://www.integroseguros.com.br",
        logo: "https://www.integroseguros.com.br/logo.png", // ajuste depois
        sameAs: [
            "https://www.instagram.com/integrosegurosofficial",
            "https://www.linkedin.com/company/integrosegurosofficial",
            // adicione LinkedIn ou outras redes se tiver
        ],
        contactPoint: [
            {
                "@type": "ContactPoint",
                telephone: "+55-21-4121-6120",
                postalCode: "20735-270",
                streetAddress: "Rua Gustavo Gama, 245 - Méier",
                addressLocality: "Rio de Janeiro",
                addressRegion: "RJ",
                contactType: "customer support",
                areaServed: "BR",
                availableLanguage: "pt-BR",
            },
        ],
    };

    const webSite = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Integro Seguros",
        url: "https://www.integroseguros.com.br",
        potentialAction: {
            "@type": "SearchAction",
            target:
                "https://www.integroseguros.com.br/busca?q={search_term_string}",
            "query-input": "required name=search_term_string",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
            />
        </>
    );
}
