import { Metadata } from "next";
import Link from "next/link";
import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    ShieldCheck,
    Stethoscope,
    Building2,
    HeartPulse,
    Truck,
    ArrowRight,
    MessageCircle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { SeoSchemaService } from "@/components/seo-schema-service";

export const metadata: Metadata = {
    title: "Seguros para Profissionais e Empresas | Integro Seguros",
    description:
        "Conheça as principais soluções de seguros da Integro para profissionais liberais, empresas e operações que levam gestão de risco a sério.",
};

export default function SegurosPage() {
    const whatsappUrl =
        process.env.NEXT_PUBLIC_WHATSAPP_URL ??
        "https://wa.me/5500000000000"; // ajuste para o número real

    return (
        <>
            <SeoSchemaService
                serviceName="Consultoria em seguros para profissionais e empresas"
                serviceDescription="Página hub das principais soluções da Integro Seguros para profissionais liberais e empresas, com visão consultiva de gestão de riscos e proteção patrimonial."
                urlPath="/seguros"
                faqItems={[]} // mantemos vazio aqui
                providerName="Integro Seguros"
                areaServed="Brasil"
                serviceType="InsuranceAgency"
            />

            {/* Conteúdo principal */}
            <main className="max-w-6xl mx-auto px-4 py-10 md:py-16">
                <Breadcrumbs
                    items={[
                        { href: "/", label: "Início" },
                        { href: "/seguros", label: "Seguros" },
                    ]}
                />

                <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,0.9fr)]">
                    {/* COLUNA ESQUERDA – CONTEÚDO / HUB */}
                    <div className="space-y-12 md:space-y-16">
                        {/* Cabeçalho geral */}
                        <MotionSection delay={0.05} className="space-y-3 max-w-3xl">
                            <h5>Nossas soluções em seguros.</h5>
                            <h2>Seguros para proteger quem vive do próprio negócio.</h2>
                            <p className="text-sm md:text-base text-[#4b4b4b]">
                                A Integro Seguros atua com soluções específicas para profissionais
                                liberais, empresas e operações que não podem parar. Abaixo você
                                encontra os principais produtos que estruturamos no dia a dia, com
                                visão consultiva e foco em continuidade.
                            </p>
                        </MotionSection>

                        {/* Bloco: Para Profissionais */}
                        <MotionSection delay={0.1} className="space-y-4">
                            <div className="space-y-2">
                                <h5>Para Profissionais.</h5>
                                <p className="text-sm md:text-base text-[#4b4b4b] max-w-3xl">
                                    Para quem vive da própria assinatura, da agenda e da confiança
                                    dos clientes ou pacientes, um imprevisto pode significar impacto
                                    direto na renda e na reputação. Estes são os seguros que mais
                                    estruturamos para esse público.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* RC Profissional */}
                                <AnimatedCard delay={0.12}>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                            <ShieldCheck className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <h3 className="text-base font-semibold text-[#2b2b2b]">
                                                Seguro de Responsabilidade Civil Profissional
                                            </h3>
                                            <p className="text-xs text-[#555]">
                                                Proteção contra reclamações e processos de clientes e
                                                pacientes, envolvendo supostos erros, falhas ou omissões
                                                na atuação profissional.
                                            </p>
                                            <ul className="mt-2 text-[11px] text-[#666] list-disc pl-4 space-y-1">
                                                <li>Médicos, dentistas e outros profissionais da saúde.</li>
                                                <li>Advogados, engenheiros, arquitetos e consultores.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center text-xs md:text-sm">
                                        <p className="text-[#666]">
                                            Ideal para quem responde diretamente por decisões técnicas.
                                        </p>
                                        <Link
                                            href="/seguros/rc-profissional"
                                            className="inline-flex items-center gap-1 text-[#890b23] font-medium hover:underline"
                                        >
                                            Ver detalhes
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </AnimatedCard>

                                {/* Vida / Vida em Grupo (profissional / sócios) */}
                                <AnimatedCard delay={0.16}>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                            <Stethoscope className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <h3 className="text-base font-semibold text-[#2b2b2b]">
                                                Seguro de Vida para Profissionais e Sócios
                                            </h3>
                                            <p className="text-xs text-[#555]">
                                                Amparo financeiro em situações de morte, invalidez ou
                                                outros eventos cobertos, pensado para quem mantém a renda
                                                da família e do negócio.
                                            </p>
                                            <ul className="mt-2 text-[11px] text-[#666] list-disc pl-4 space-y-1">
                                                <li>Profissionais liberais e autônomos.</li>
                                                <li>Sócios e lideranças estratégicas.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center text-xs md:text-sm">
                                        <p className="text-[#666]">
                                            Um dos pilares da proteção de renda e sucessão.
                                        </p>
                                        <Link
                                            href="/seguros/vida-em-grupo"
                                            className="inline-flex items-center gap-1 text-[#890b23] font-medium hover:underline"
                                        >
                                            Ver detalhes
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </AnimatedCard>
                            </div>
                        </MotionSection>

                        {/* Divisor leve */}
                        <div className="h-px bg-gradient-to-r from-transparent via-[#890b23]/20 to-transparent" />

                        {/* Bloco: Para Empresas */}
                        <MotionSection delay={0.15} className="space-y-4">
                            <div className="space-y-2">
                                <h5>Para Empresas.</h5>
                                <p className="text-sm md:text-base text-[#4b4b4b] max-w-3xl">
                                    Do pequeno negócio às operações mais estruturadas, o foco aqui é
                                    proteger patrimônio, pessoas e a própria continuidade da empresa
                                    em caso de imprevistos relevantes.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-3">
                                {/* Seguro Empresarial */}
                                <AnimatedCard delay={0.17}>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                            <Building2 className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <h3 className="text-base font-semibold text-[#2b2b2b]">
                                                Seguro Empresarial
                                            </h3>
                                            <p className="text-xs text-[#555]">
                                                Proteção para prédio, conteúdo, estoque, equipamentos e
                                                outros bens essenciais à operação da empresa.
                                            </p>
                                            <ul className="mt-2 text-[11px] text-[#666] list-disc pl-4 space-y-1">
                                                <li>Clínicas, escritórios, comércio e pequenas indústrias.</li>
                                                <li>Empresas que não podem parar por um sinistro físico.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center text-xs md:text-sm">
                                        <p className="text-[#666]">
                                            Base para proteção patrimonial e continuidade.
                                        </p>
                                        <Link
                                            href="/seguros/seguro-empresarial"
                                            className="inline-flex items-center gap-1 text-[#890b23] font-medium hover:underline"
                                        >
                                            Ver detalhes
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </AnimatedCard>

                                {/* Vida em Grupo (benefício corporativo) */}
                                <AnimatedCard delay={0.2}>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                            <HeartPulse className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <h3 className="text-base font-semibold text-[#2b2b2b]">
                                                Vida em Grupo para Colaboradores
                                            </h3>
                                            <p className="text-xs text-[#555]">
                                                Benefício estruturado para equipes, com capitais e
                                                coberturas coerentes ao porte e à política de pessoas da
                                                empresa.
                                            </p>
                                            <ul className="mt-2 text-[11px] text-[#666] list-disc pl-4 space-y-1">
                                                <li>Times em crescimento e retenção de talentos.</li>
                                                <li>Empresas que querem cuidar das famílias da equipe.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center text-xs md:text-sm">
                                        <p className="text-[#666]">
                                            Ajuda a reforçar cultura de cuidado com pessoas.
                                        </p>
                                        <Link
                                            href="/seguros/vida-em-grupo"
                                            className="inline-flex items-center gap-1 text-[#890b23] font-medium hover:underline"
                                        >
                                            Ver detalhes
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </AnimatedCard>

                                {/* Seguro de Frota */}
                                <AnimatedCard delay={0.23}>
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                            <Truck className="w-4 h-4" />
                                        </div>
                                        <div className="space-y-1 flex-1">
                                            <h3 className="text-base font-semibold text-[#2b2b2b]">
                                                Seguro de Frota
                                            </h3>
                                            <p className="text-xs text-[#555]">
                                                Programa de seguro para veículos utilizados na operação:
                                                carros, utilitários e caminhões, com foco em continuidade.
                                            </p>
                                            <ul className="mt-2 text-[11px] text-[#666] list-disc pl-4 space-y-1">
                                                <li>Frotas comerciais, de serviço e de entregas.</li>
                                                <li>Veículos de sócios, gestores e equipes de campo.</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-between items-center text-xs md:text-sm">
                                        <p className="text-[#666]">
                                            Essencial para empresas que dependem da rua para funcionar.
                                        </p>
                                        <Link
                                            href="/seguros/seguro-de-frota"
                                            className="inline-flex items-center gap-1 text-[#890b23] font-medium hover:underline"
                                        >
                                            Ver detalhes
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </AnimatedCard>
                            </div>
                        </MotionSection>

                        {/* Chamada consultiva geral (base) */}
                        <MotionSection delay={0.2}>
                            <section className="border border-dashed border-[#890b23]/30 rounded-2xl bg-[#890b23]/5 p-5 md:p-6 text-sm text-[#333] space-y-2">
                                <p className="font-semibold text-[#890b23]">
                                    Não sabe por onde começar? Podemos montar uma visão inicial de riscos para você.
                                </p>
                                <p>
                                    Se você ainda está entendendo qual seguro faz mais sentido para a
                                    sua realidade — profissional, empresa ou ambos —, o próximo passo
                                    pode ser simplesmente contar como funciona seu dia a dia, seu
                                    negócio e suas principais preocupações.
                                </p>
                                <p className="text-xs text-[#666]">
                                    A partir daí, desenhamos um caminho de proteção coerente, sem
                                    compromisso de contratação. Você pode solicitar contato pela home,
                                    na seção “Fale com um especialista”, ou pelos canais disponíveis no rodapé.
                                </p>
                            </section>
                        </MotionSection>
                    </div>

                    {/* COLUNA DIREITA – SIDEBAR / CTA FIXA */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28 space-y-4">
                            <AnimatedCard delay={0.1} className="border-[#890b23]/30 bg-white">
                                <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em] mb-1">
                                    Atendimento consultivo
                                </p>
                                <h3 className="text-base md:text-lg font-semibold text-[#2b2b2b]">
                                    Fale com um especialista da Integro sobre o seu seguro.
                                </h3>
                                <p className="mt-2 text-xs text-[#555]">
                                    Em vez de tentar adivinhar coberturas e limites sozinho, você pode
                                    contar como funciona sua atividade e deixar que a gente traduza isso
                                    em um desenho de proteção coerente.
                                </p>

                                <ul className="mt-3 text-xs text-[#555] space-y-1 list-disc pl-4">
                                    <li>Atendimento humano, sem linguagem excessivamente técnica.</li>
                                    <li>Visão integrada de riscos profissionais e empresariais.</li>
                                    <li>Orientação antes, durante e depois da contratação.</li>
                                </ul>

                                <div className="mt-4 space-y-2">
                                    <Button
                                        asChild
                                        className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white text-sm"
                                    >
                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2"
                                        >
                                            <MessageCircle className="w-4 h-4" />
                                            Falar com especialista no WhatsApp
                                        </a>
                                    </Button>

                                    <Link
                                        href="/contato"
                                        className="block text-center text-[11px] text-[#666] hover:text-[#890b23] transition-colors"
                                    >
                                        Preferir formulário de contato
                                    </Link>

                                    <p className="pt-2 border-t border-dashed border-[#e0e0e0] text-[10px] text-[#999]">
                                        Atendimento em todo o Brasil. Horário comercial, em dias úteis.
                                    </p>
                                </div>
                            </AnimatedCard>
                        </div>
                    </aside>
                </div>
            </main>
        </>
    );
}
