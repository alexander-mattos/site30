import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    ShieldCheck,
    Workflow,
    Repeat,
    Users,
    Briefcase,
    Sparkles,
    PlayCircle,
} from "lucide-react";
import { Metadata } from "next";
import { SeoSchemaAbout } from "@/components/seo-schema-about";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

const SITE =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

export const metadata: Metadata = {
    title: "Sobre a Integro Seguros | Corretora e Assessoria em Seguros",
    description:
        "Conheça a Integro Seguros, corretora e assessoria especializada em riscos profissionais e empresariais, com atendimento consultivo e atuação em todo o Brasil.",
};

export default function SobrePage() {
    const title = "Sobre a Integro Seguros";
    const description =
        "A Integro Seguros atua com foco em riscos profissionais e empresariais, oferecendo atendimento consultivo em todo o Brasil.";

    return (
        <>
            <SeoSchemaAbout
                title={title}
                description={description}
                urlPath={`${SITE}/sobre`}
            />

            <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-12 md:space-y-16">
                <Breadcrumbs
                    items={[
                        { href: "/", label: "Início" },
                        { href: "/sobre", label: "Sobre" },
                    ]}
                />

                {/* Cabeçalho / posicionamento */}
                <MotionSection delay={0.05} className="space-y-3 max-w-3xl">
                    <h5>Quem está por trás da Integro Seguros.</h5>
                    <h2>Uma corretora feita para quem precisa de mais do que um “seguro qualquer”.</h2>
                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        A Integro Seguros nasce da vivência prática com profissionais liberais e empresas
                        que assumem riscos todos os dias — atendendo pacientes, clientes, liderando equipes
                        ou cuidando da operação de um negócio. Nosso foco é traduzir esses riscos em
                        soluções de seguros claras, estruturadas e sustentáveis ao longo do tempo.
                    </p>
                </MotionSection>

                {/* Como trabalhamos – 3 pilares */}
                <MotionSection delay={0.1} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Como pensamos seguro, risco e relacionamento.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Mais do que “cotação em várias seguradoras”, encaramos seguro como parte da
                            gestão de risco do negócio. Por isso, nosso trabalho se apoia em três pilares:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.12}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Entendimento do cenário
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Antes de falar de apólice, falamos sobre a sua realidade: como funciona a
                                operação, qual o perfil de clientes, quais ativos são críticos e como uma
                                eventual parada impacta o negócio ou a carreira.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.16}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Workflow className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Desenho de proteção
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                A partir desse diagnóstico, desenhamos combinações de seguros que façam
                                sentido para o seu contexto, comparando coberturas, limites e condições
                                entre diferentes seguradoras.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Repeat className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Acompanhamento contínuo
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Seguro não é um evento pontual. Acompanhamos renovações, ajustes de limite,
                                inclusão de coberturas e, principalmente, estamos ao seu lado no momento
                                do sinistro, quando o seguro realmente precisa funcionar.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Para quem somos mais relevantes */}
                <MotionSection delay={0.15} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Para quem a Integro faz mais diferença.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Atuamos com diferentes perfis, mas há alguns cenários em que nossa abordagem
                            consultiva costuma gerar ainda mais valor:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <AnimatedCard delay={0.18}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Users className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Profissionais liberais e autônomos
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Médicos, dentistas, advogados, engenheiros, arquitetos, consultores e outros
                                profissionais cuja renda depende diretamente da agenda, da reputação e da
                                confiança dos clientes ou pacientes.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Em muitos casos, estruturamos proteções envolvendo responsabilidade civil
                                profissional, proteção de renda, consultório/escritório e equipamentos.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.22}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Briefcase className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Empresas e operações em crescimento
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Clínicas, escritórios, comércios, indústrias e empresas de serviços que
                                enxergam seguro como parte da estratégia de continuidade do negócio — e
                                não apenas como obrigação contratual.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Trabalhamos com combinações que envolvem patrimônio, pessoas, frota,
                                responsabilidades e exigências específicas de contratos e parceiros.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Vídeo institucional */}
                <MotionSection
                    delay={0.18}
                    className="grid gap-8 md:grid-cols-2 items-center"
                >
                    <div className="space-y-3">
                        <h5>Veja, em poucos minutos, como trabalhamos na prática.</h5>
                        <h2>Integro Seguros em vídeo: visão, postura e forma de atuar.</h2>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            No vídeo abaixo, apresentamos de forma objetiva quem somos, como pensamos
                            a relação com nossos clientes e o que você pode esperar de um atendimento
                            consultivo em seguros com a Integro.
                        </p>
                        <p className="text-xs text-[#666]">
                            Se você está conhecendo a Integro agora, este é um bom passo para entender
                            se a nossa forma de trabalhar conversa com o que você busca em uma corretora.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-100 shadow-md border border-neutral-200">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/Ne4uP-d0Az4"
                            title="Vídeo institucional Integro Seguros"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />

                        {/* overlay decorativo opcional */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="w-16 h-16 text-white/70 drop-shadow-xl" />
                        </div>
                    </div>
                </MotionSection>

                {/* Fechamento consultivo */}
                <MotionSection delay={0.22}>
                    <section className="border border-dashed border-[#890b23]/30 rounded-2xl bg-[#890b23]/5 p-5 md:p-6 text-sm text-[#333] space-y-2">
                        <div className="flex items-start gap-2">
                            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/15 text-[#890b23] mt-0.5">
                                <Sparkles className="w-3.5 h-3.5" />
                            </div>
                            <p className="font-semibold text-[#890b23]">
                                Se o que você viu aqui faz sentido para o seu momento, o próximo passo é simples.
                            </p>
                        </div>
                        <p>
                            Você pode contar, em poucos minutos, como funciona sua atividade ou empresa —
                            e nós retornamos com uma visão inicial de riscos e caminhos possíveis em termos
                            de seguros. Sem compromisso de contratação, com transparência desde o primeiro contato.
                        </p>
                        <p className="text-xs text-[#666]">
                            Para isso, basta acessar a seção “Fale com um especialista” na home ou utilizar
                            os canais de contato disponíveis no rodapé do site.
                        </p>
                    </section>
                </MotionSection>
            </main>
        </>
    );
}
