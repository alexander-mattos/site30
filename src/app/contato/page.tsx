// app/contato/page.tsx
import { Metadata } from "next";
import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, PhoneCall } from "lucide-react";
import { SeoSchemaContact } from "@/components/seo-schema-contact";
import { ContactForm } from "@/components/contato/ContactForm";

const SITE =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

export const metadata: Metadata = {
    title: "Contato | Integro Seguros",
    description:
        "Canal de contato da Integro Seguros para qualquer tipo de seguro: automóvel, residencial, empresarial, vida, frota ou responsabilidade civil profissional.",
    keywords: "contato, integro seguros, seguro, seguros, seguros de automóvel, seguros de residencial, seguros de empresarial, seguros de vida, seguros de frota, seguros de responsabilidade civil profissional, seguros de responsabilidade civil empresarial, seguros de responsabilidade civil",
    alternates: {
        canonical: "/contato",
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://www.integroseguros.com.br/contato",
        images: [
            {
                url: "https://www.integroseguros.com.br/images/og/og-image.png",
                width: 1200,
                height: 630,
                alt: "Integro Seguros",
            },
        ],
        siteName: "Integro Seguros",
        title: "Contato | Integro Seguros",
        description: "Canal de contato da Integro Seguros para qualquer tipo de seguro: automóvel, residencial, empresarial, vida, frota ou responsabilidade civil profissional.",
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            nocache: true,
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function ContatoPage() {
    const title = "Contato - Integro Seguros";
    const description =
        "Use este canal para falar com a Integro Seguros sobre qualquer demanda de seguro. Nossa equipe direciona o atendimento para o especialista adequado.";

    const whatsappUrl =
        process.env.NEXT_PUBLIC_WHATSAPP_URL ??
        "https://wa.me/5500000000000";

    const telefoneExibicao = "(21) 4121-6120"; // ajuste
    const telefoneSchema = "+55-21-4121-6120"; // formato E.164 ideal p/ schema
    const email = "contato@integroseguros.com.br";

    return (
        <>
            <SeoSchemaContact
                title={title}
                description={description}
                urlPath={`${SITE}/contato`}
                telephone={telefoneSchema}
                email={email}
            />

            <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-10 md:space-y-14">
                <Breadcrumbs
                    items={[
                        { href: "/", label: "Início" },
                        { href: "/contato", label: "Contato" },
                    ]}
                />

                {/* HERO / INTRO */}
                <MotionSection
                    delay={0.05}
                    className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)] items-start"
                >
                    <div className="space-y-4">
                        <h5>Fale com a Integro Seguros.</h5>
                        <h2>Um canal único para qualquer tipo de seguro.</h2>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Automóvel, residencial, empresarial, vida, frota ou
                            responsabilidade civil profissional: você pode usar este formulário
                            para qualquer demanda de seguro. Nossa equipe analisa o pedido e
                            direciona para o especialista mais adequado.
                        </p>
                        <p className="text-xs md:text-sm text-[#666]">
                            Conte, em poucas linhas, o que você precisa proteger ou qual dúvida
                            você tem. A partir disso, retornamos com orientação e, se fizer
                            sentido, com propostas alinhadas ao seu perfil.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                            <Button
                                asChild
                                className="w-full sm:w-auto bg-[#890b23] hover:bg-[#6d081b] text-white text-sm"
                            >
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    <span className="inline-flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        Falar agora pelo WhatsApp
                                    </span>
                                </a>
                            </Button>

                            <div className="flex items-center gap-2 text-xs text-[#666]">
                                <PhoneCall className="w-3.5 h-3.5" />
                                <span>Atendimento em todo o Brasil, em horário comercial.</span>
                            </div>
                        </div>
                    </div>

                    {/* Bloco com informações diretas de contato */}
                    <AnimatedCard delay={0.08} className="text-sm space-y-3">
                        <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                            Outras formas de contato
                        </p>
                        <div className="space-y-2 text-xs text-[#555]">
                            <p className="font-semibold text-[#333]">Canais principais:</p>
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2">
                                    <MessageCircle className="w-3.5 h-3.5 text-[#890b23]" />
                                    <span>
                                        WhatsApp:{" "}
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#890b23] hover:underline"
                                        >
                                            falar com especialista
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Mail className="w-3.5 h-3.5 text-[#890b23]" />
                                    <span>
                                        E-mail:{" "}
                                        <a
                                            href={`mailto:${email}`}
                                            className="text-[#890b23] hover:underline"
                                        >
                                            {email}
                                        </a>
                                    </span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <PhoneCall className="w-3.5 h-3.5 text-[#890b23]" />
                                    <span>Telefone: {telefoneExibicao}</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-[11px] text-[#999] pt-2 border-t border-dashed border-[#e0e0e0]">
                            As informações enviadas por aqui são utilizadas exclusivamente para
                            retorno da equipe Integro e análise de perfil, em linha com a LGPD.
                        </p>
                    </AnimatedCard>
                </MotionSection>

                {/* FORMULÁRIO GENÉRICO */}
                <MotionSection delay={0.1}>
                    <ContactForm />
                </MotionSection>
            </main>
        </>
    );
}
