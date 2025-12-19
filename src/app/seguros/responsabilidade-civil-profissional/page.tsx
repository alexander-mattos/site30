
import { Metadata } from "next";
import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    ShieldAlert,
    Users,
    FileText,
    Gavel,
    Stethoscope,
    AlertTriangle,
    CheckCircle2,
} from "lucide-react";
import { SeoSchemaService } from "@/components/seo-schema-service";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { ChatRCProfissionalButton } from "@/components/actions/rc-profissional-button";

export const metadata: Metadata = {
    title: "Seguro de Responsabilidade Civil Profissional | Integro Seguros",
    description:
        "Seguro de responsabilidade civil profissional para médicos, dentistas, advogados, engenheiros e outros profissionais que querem proteção contra reclamações e processos.",
};

const faqItems = [
    {
        question: "O que é o seguro de responsabilidade civil profissional?",
        answer:
            "É um seguro que protege o profissional contra reclamações e processos de clientes ou pacientes, relacionados a supostos erros, falhas, omissões ou imperícia no exercício da atividade.",
    },
    {
        question:
            "Esse seguro cobre advogado e engenheiro também, ou só área da saúde?",
        answer:
            "Ele pode ser estruturado para diversas áreas: médicos, dentistas, outros profissionais da saúde, advogados, engenheiros, arquitetos, consultores, entre outros. As coberturas e limites são ajustados ao perfil de atuação.",
    },
    {
        question: "O seguro admite culpa do profissional?",
        answer:
            "Não. O objetivo do seguro é garantir recursos para defesa e eventual indenização dentro dos limites da apólice, sem que isso represente, por si só, admissão de culpa por parte do segurado.",
    },
    {
        question: "Em que momento o seguro passa a valer?",
        answer:
            "Após a aceitação da proposta pela seguradora e o pagamento da primeira parcela ou prêmio à vista, observadas as condições de retroatividade e de reclamações previstas nas condições gerais.",
    },
    {
        question:
            "Consigo contratar como pessoa física ou só como clínica/empresa?",
        answer:
            "É possível contratar tanto em nome do profissional (CPF) quanto da clínica/empresa (CNPJ), conforme o formato mais adequado à sua realidade.",
    },
];

export default function RcProfissionalPage() {

    return (
        <>
            {/* SEO estruturado: Service + FAQ + Breadcrumb */}
            <SeoSchemaService
                serviceName="Seguro de Responsabilidade Civil Profissional"
                serviceDescription="Seguro de responsabilidade civil profissional estruturado para médicos, dentistas, advogados, engenheiros e outros profissionais liberais que querem proteção contra reclamações e processos de clientes e pacientes."
                urlPath="/seguros/rc-profissional"
                faqItems={faqItems}
                providerName="Integro Seguros"
                areaServed="Brasil"
                serviceType="InsuranceAgency"
            />

            <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-12 md:space-y-16">
                {/* Breadcrumb visual */}
                <Breadcrumbs
                    items={[
                        { href: "/", label: "Início" },
                        { href: "/seguros", label: "Seguros" },
                        { href: "/seguros/rc-profissional", label: "RC Profissional" },
                    ]}
                />
                {/* HERO do produto */}
                <MotionSection delay={0.05} className="grid gap-8 md:grid-cols-2 items-start">
                    <div className="space-y-4">
                        <h5>Seguro de Responsabilidade Civil Profissional.</h5>
                        <h2>
                            Proteção para sua atuação profissional frente a reclamações e processos.
                        </h2>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Mesmo com técnica apurada e todo cuidado no atendimento, um resultado
                            diferente do esperado pode gerar insatisfação, reclamações formais e
                            processos. O seguro de responsabilidade civil profissional existe para que
                            você não enfrente esse cenário sozinho.
                        </p>

                        <div className="grid gap-3 text-xs md:text-sm">
                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Gavel className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Custos de defesa jurídica
                                    </p>
                                    <p className="text-[#555]">
                                        Apoio financeiro para honorários de advogados e demais despesas de
                                        defesa, dentro dos limites da apólice.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <ShieldAlert className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Indenizações e acordos, quando devidos
                                    </p>
                                    <p className="text-[#555]">
                                        Amparo para indenizações devidas a clientes ou pacientes, conforme
                                        limites e coberturas contratadas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Tranquilidade para seguir exercendo sua atividade
                                    </p>
                                    <p className="text-[#555]">
                                        O foco volta a ser o exercício da profissão, enquanto o seguro se
                                        encarrega de suportar financeiramente o imprevisto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado direito: “para quem é” com visual de cards */}
                    <div className="space-y-4">
                        <AnimatedCard delay={0.1} className="h-full">
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Users className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                        Para quem é
                                    </p>
                                    <h3 className="text-base font-semibold text-[#2b2b2b]">
                                        Profissionais que assumem responsabilidade direta sobre pessoas,
                                        ativos e decisões.
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-3 grid gap-3 text-xs text-[#555]">
                                <div>
                                    <p className="font-semibold text-[#333] mb-1">Área da saúde</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Médicos de diversas especialidades.</li>
                                        <li>Dentistas, ortodontistas, implantodontistas.</li>
                                        <li>Outros profissionais que atuam em saúde e bem-estar.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#333] mb-1">Jurídico e exatas</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Advogados e escritórios de advocacia.</li>
                                        <li>Engenheiros, arquitetos, peritos e consultores.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#333] mb-1">Outros liberais</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Consultores, planejadores e profissionais especialistas.</li>
                                        <li>Atividades em que uma decisão técnica pode ser questionada.</li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedCard>
                        <div className="mt-6">
                            <ChatRCProfissionalButton />
                        </div>
                    </div>
                </MotionSection>

                {/* O que o seguro cobre (visão geral) */}
                <MotionSection delay={0.12} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>O que o seguro de RC Profissional pode cobrir.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            As coberturas variam conforme a seguradora e o perfil de atuação, mas em
                            geral o seguro pode contemplar:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.14}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <FileText className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Custos de defesa
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Honorários advocatícios e demais despesas de defesa judicial ou
                                extrajudicial, conforme limites da apólice.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.18}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <AlertTriangle className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Indenizações a terceiros
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Valores devidos a clientes ou pacientes em decorrência de decisões
                                judiciais ou acordos autorizados, dentro dos limites contratados.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.22}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Stethoscope className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Erros, falhas e omissões
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Reclamações relacionadas a supostos erros profissionais, falhas
                                técnicas, omissões e alegações de negligência ou imperícia.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Como funciona na prática */}
                <MotionSection delay={0.15} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Como o seguro funciona na prática.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Mais do que um documento, o seguro de RC Profissional é um suporte
                            contínuo para a sua atuação. Em linhas gerais, o processo é:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.17}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                1. Entendimento do risco
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Conversamos sobre a sua especialidade, forma de atuação, volume de
                                atendimentos, histórico e principais pontos de atenção.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                2. Desenho e comparação
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Estruturamos uma proposta comparando seguradoras, coberturas e limites,
                                para que você entenda claramente o que está contratando.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.23}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                3. Acompanhamento e sinistro
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Depois da contratação, seguimos ao seu lado em renovações, ajustes e,
                                principalmente, caso haja qualquer reclamação ou sinistro.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* FAQ da página */}
                <MotionSection delay={0.18} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Perguntas frequentes sobre o seguro de RC Profissional.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Algumas das dúvidas mais comuns de profissionais que estão avaliando
                            contratar esse tipo de proteção:
                        </p>
                    </div>

                    {/* Se você já usa o Accordion do shadcn, pode aproveitar aqui */}
                    <div className="space-y-3">
                        {/* Exemplo simples sem Accordion (mais direto, menos código extra) */}
                        {faqItems.map((item) => (
                            <AnimatedCard key={item.question} className="!p-4">
                                <p className="text-sm font-semibold text-[#2b2b2b]">
                                    {item.question}
                                </p>
                                <p className="mt-1 text-xs text-[#555]">{item.answer}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </MotionSection>

                {/* Chamada final para falar com especialista */}
                <MotionSection delay={0.2}>
                    <section className="border border-dashed border-[#890b23]/30 rounded-2xl bg-[#890b23]/5 p-5 md:p-6 text-sm text-[#333] space-y-2">
                        <p className="font-semibold text-[#890b23]">
                            Quer entender qual formato de seguro de RC Profissional faz mais sentido
                            para a sua realidade?
                        </p>
                        <p>
                            Você não precisa chegar com todas as respostas. Conte como funciona seu
                            dia a dia, o perfil dos seus clientes e quais são suas maiores preocupações.
                            A partir disso, montamos uma visão inicial e um desenho de proteção sob
                            medida.
                        </p>
                        <p className="text-xs text-[#666]">
                            Se preferir, você pode solicitar contato pela home, na seção “Fale com um
                            especialista”, ou pelos canais disponíveis no rodapé do site.
                        </p>
                    </section>
                </MotionSection>
            </main>
        </>
    );
}
