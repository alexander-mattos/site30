import { Metadata } from "next";
import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    Users2,
    HeartPulse,
    ShieldCheck,
    BriefcaseMedical,
    HandHeart,
    CheckCircle2,
} from "lucide-react";
import { SeoSchemaService } from "@/components/seo-schema-service";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
    title: "Seguro de Vida e Vida em Grupo | Integro Seguros",
    description:
        "Seguro de vida para profissionais e vida em grupo para empresas que querem cuidar de sócios, gestores e equipes com proteção financeira em momentos críticos.",
};

const faqItems = [
    {
        question: "Qual a diferença entre seguro de vida individual e vida em grupo?",
        answer:
            "O seguro de vida individual é contratado em nome da própria pessoa física. Já o vida em grupo é contratado pela empresa ou entidade para um conjunto de pessoas (colaboradores, sócios, associados), com condições e regras específicas de elegibilidade.",
    },
    {
        question: "Seguro de vida em grupo é um benefício obrigatório para empresas?",
        answer:
            "Na maioria dos casos não é obrigatório por lei, mas muitas convenções coletivas, contratos ou acordos trabalhistas podem prever essa exigência. Além disso, é um benefício muito valorizado pela equipe e pela liderança.",
    },
    {
        question: "Quais eventos o seguro de vida costuma cobrir?",
        answer:
            "As coberturas variam por produto, mas geralmente incluem morte (qualquer causa), morte acidental, invalidez por acidente, invalidez por doença e, opcionalmente, diárias, doenças graves ou outras coberturas complementares.",
    },
    {
        question: "Seguro de vida em grupo é muito caro para pequenas empresas?",
        answer:
            "Não necessariamente. É possível ajustar capitais segurados e coberturas de acordo com o orçamento e o perfil dos colaboradores, mantendo um bom equilíbrio entre custo e benefício.",
    },
    {
        question: "Posso contratar um seguro de vida mesmo sendo profissional liberal?",
        answer:
            "Sim. Profissionais liberais, autônomos e sócios de pequenas empresas podem contratar seguro de vida individual ou estruturado em nome da pessoa jurídica, conforme o objetivo da proteção.",
    },
];

export default function VidaEmGrupoPage() {
    return (
        <>
            {/* SEO estruturado: Service + FAQ + Breadcrumb */}
            <SeoSchemaService
                serviceName="Seguro de Vida e Vida em Grupo"
                serviceDescription="Seguro de vida individual e vida em grupo estruturado para profissionais, sócios, gestores e colaboradores, garantindo amparo financeiro em situações críticas."
                urlPath="/seguros/vida-em-grupo"
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
                        { href: "/seguros/vida-em-grupo", label: "Vida e Vida em Grupo" },
                    ]}
                />

                {/* HERO do produto */}
                <MotionSection
                    delay={0.05}
                    className="grid gap-8 md:grid-cols-2 items-start"
                >
                    <div className="space-y-4">
                        <h5>Seguro de Vida e Vida em Grupo.</h5>
                        <h2>
                            Cuidar das pessoas também é cuidar da saúde do negócio.
                        </h2>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Em momentos críticos, como morte, invalidez ou diagnóstico de
                            doenças graves, o impacto financeiro pode ser grande para famílias,
                            sócios e para a própria empresa. O seguro de vida – individual ou
                            em grupo – é um dos pilares de proteção mais importantes nesse cenário.
                        </p>

                        <div className="grid gap-3 text-xs md:text-sm">
                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <HeartPulse className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Amparo financeiro em momentos delicados
                                    </p>
                                    <p className="text-[#555]">
                                        Proteção para famílias, sócios e colaboradores em situações
                                        de morte, invalidez ou outros eventos cobertos.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Users2 className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Benefício valorizado pela equipe
                                    </p>
                                    <p className="text-[#555]">
                                        Mostra cuidado com pessoas-chave da empresa, reforçando
                                        cultura e clima organizacional.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Flexibilidade de desenho
                                    </p>
                                    <p className="text-[#555]">
                                        É possível ajustar capitais segurados, coberturas e critérios
                                        de elegibilidade ao tamanho e ao orçamento da empresa.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado direito: para quem esse seguro faz mais sentido */}
                    <div className="space-y-4">
                        <AnimatedCard delay={0.1} className="h-full">
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <HandHeart className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                        Para quem é
                                    </p>
                                    <h3 className="text-base font-semibold text-[#2b2b2b]">
                                        Profissionais, sócios e empresas que não querem deixar
                                        famílias desamparadas.
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-3 grid gap-3 text-xs text-[#555]">
                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Profissionais liberais e autônomos
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Médicos, dentistas, advogados, engenheiros, consultores.</li>
                                        <li>Profissionais cuja renda sustenta o padrão de vida da família.</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Empresas e times em crescimento
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Empresas que querem oferecer um benefício consistente à equipe.</li>
                                        <li>Negócios em que a ausência de pessoas-chave gera forte impacto.</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Sócios e lideranças
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Sócios de pequenas e médias empresas.</li>
                                        <li>Lideranças estratégicas cuja saída abrupta afeta o negócio.</li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* O que o seguro pode cobrir */}
                <MotionSection delay={0.12} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>O que o seguro de vida e vida em grupo pode cobrir.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            As coberturas variam conforme o desenho do produto e a seguradora,
                            mas alguns pilares aparecem com frequência:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.14}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Morte (qualquer causa)
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Pagamento de capital segurado aos beneficiários em caso de
                                falecimento do segurado, conforme condições da apólice.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.18}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <BriefcaseMedical className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Invalidez por acidente ou doença
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Proteção em casos de invalidez permanente, seja por acidente
                                ou, conforme contratação, por doença, impactando a capacidade
                                de trabalho.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.22}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <HeartPulse className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Coberturas adicionais
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                A depender do produto, é possível avaliar diárias, doenças
                                graves, assistência funeral e outras extensões de proteção.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Como funciona na prática */}
                <MotionSection delay={0.15} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Como o seguro de vida se encaixa na sua realidade.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            O desenho ideal depende de fatores como idade média do grupo,
                            faixa de renda, porte da empresa, perfil de sócios e objetivos de
                            proteção. Nosso trabalho é traduzir isso em um programa coerente.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.17}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                1. Entendimento do grupo
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Mapeamos quantas pessoas devem ser incluídas, qual o perfil
                                (colaboradores, sócios, lideranças) e quais são as expectativas
                                em termos de benefício.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                2. Definição de capitais e coberturas
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Estruturamos capitais segurados, coberturas básicas e
                                adicionais, buscando equilíbrio entre proteção e orçamento.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.23}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                3. Implantação e acompanhamento
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Apoiamos a empresa na comunicação do benefício, inclusão e
                                exclusão de vidas, além de acompanhamento em eventuais sinistros.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* FAQ */}
                <MotionSection delay={0.18} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Perguntas frequentes sobre seguro de vida e vida em grupo.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Algumas das dúvidas mais comuns de profissionais, sócios e
                            gestores que estão avaliando esse tipo de proteção:
                        </p>
                    </div>

                    <div className="space-y-3">
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

                {/* Chamada final */}
                <MotionSection delay={0.2}>
                    <section className="border border-dashed border-[#890b23]/30 rounded-2xl bg-[#890b23]/5 p-5 md:p-6 text-sm text-[#333] space-y-2">
                        <p className="font-semibold text-[#890b23]">
                            Quer entender qual desenho de seguro de vida faz mais sentido
                            para você, sua família, sócios ou equipe?
                        </p>
                        <p>
                            Em vez de escolher um valor “aleatório” de capital segurado, nossa
                            proposta é olhar para o seu contexto: responsabilidades financeiras,
                            padrão de vida, planos futuros e o que você deseja proteger.
                        </p>
                        <p className="text-xs text-[#666]">
                            Você pode solicitar um contato consultivo pela home, na seção
                            “Fale com um especialista”, ou pelos canais disponíveis no rodapé do site.
                        </p>
                    </section>
                </MotionSection>
            </main>
        </>
    );
}
