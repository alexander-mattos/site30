import type { ArticleCtaProps } from "@/components/actions/article-cta";

export const articleCtaByCategory: Record<string, ArticleCtaProps> = {
    "seguros-profissionais": {
        eyebrow: "Integro Seguros",
        title: "Quer saber qual seguro faz sentido para sua especialidade?",
        description:
            "Cada profissional possui um risco jurídico diferente. Receba uma orientação objetiva e uma recomendação de cobertura adequada.",
        primary: {
            label: "Conhecer o RC Profissional",
            href: "/seguros/responsabilidade-civil-profissional",
        },
        secondary: {
            label: "Falar com especialista",
            href: "/contato",
        },
    },

    auto: {
        eyebrow: "Seguro Auto",
        title: "Seu carro está realmente protegido?",
        description:
            "Compare coberturas, franquias e assistências para contratar um seguro auto que faz sentido para o seu perfil.",
        primary: {
            label: "Cotação de Seguro Auto",
            href: "/seguros/auto",
        },
        secondary: {
            label: "Falar com especialista",
            href: "/contato",
        },
    },

    frota: {
        eyebrow: "Seguro de Frotas",
        title: "Reduza riscos e custos na sua frota",
        description:
            "Seguro sob medida para empresas que dependem de veículos no dia a dia, com gestão eficiente e economia.",
        primary: {
            label: "Conhecer Seguro de Frotas",
            href: "/seguros/frota",
        },
        secondary: {
            label: "Solicitar análise da frota",
            href: "/contato",
        },
    },

    empresarial: {
        eyebrow: "Seguro Empresarial",
        title: "Sua empresa está protegida contra imprevistos?",
        description:
            "Proteja patrimônio, operações e responsabilidade civil com um seguro empresarial bem estruturado.",
        primary: {
            label: "Conhecer Seguro Empresarial",
            href: "/seguros/empresarial",
        },
        secondary: {
            label: "Falar com consultor",
            href: "/contato",
        },
    },

    vida: {
        eyebrow: "Seguro de Vida",
        title: "Proteção financeira para quem você ama",
        description:
            "Seguro de vida não é sobre morte, é sobre tranquilidade, planejamento e proteção familiar.",
        primary: {
            label: "Conhecer Seguro de Vida",
            href: "/seguros/vida",
        },
        secondary: {
            label: "Simular agora",
            href: "/contato",
        },
    },

    "seguro-saude": {
        eyebrow: "Seguro Saúde",
        title: "Tenha acesso à saúde de qualidade sem surpresas",
        description:
            "Planos de saúde individuais, familiares ou empresariais com orientação transparente.",
        primary: {
            label: "Conhecer Seguro Saúde",
            href: "/seguros/seguro-saude",
        },
        secondary: {
            label: "Falar com especialista",
            href: "/contato",
        },
    },
};

export const defaultArticleCta: ArticleCtaProps = {
    eyebrow: "Integro Seguros",
    title: "Quer uma recomendação de seguro sob medida?",
    description:
        "Receba uma orientação clara, sem compromisso, baseada no seu perfil e nos riscos reais.",
    primary: {
        label: "Falar com especialista",
        href: "/contato",
    },
};