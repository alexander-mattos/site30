import { Metadata } from "next";
import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    Building2,
    Shield,
    Flame,
    Droplets,
    Zap,
    Users,
    Truck,
    CheckCircle2,
} from "lucide-react";
import { SeoSchemaService } from "@/components/seo-schema-service";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
    title: "Seguro Empresarial | Integro Seguros",
    description:
        "Seguro empresarial para proteção do patrimônio físico, conteúdo e operação de empresas de serviços, comércio, clínicas e indústrias.",
};

const faqItems = [
    {
        question: "O que o seguro empresarial protege exatamente?",
        answer:
            "O seguro empresarial protege o patrimônio da empresa, como prédio, conteúdo (estoque, móveis, equipamentos), além de poder incluir coberturas para responsabilidade civil, perda de lucros e outros riscos específicos, conforme o perfil da operação.",
    },
    {
        question: "Seguro empresarial é só para empresas grandes?",
        answer:
            "Não. Pequenos negócios, clínicas, escritórios e comércios de bairro também se beneficiam muito do seguro empresarial. O importante é dimensionar coberturas e limites de acordo com a realidade de cada empresa.",
    },
    {
        question: "Incêndio é a única cobertura obrigatória?",
        answer:
            "O incêndio costuma ser a cobertura básica, mas é muito comum complementar com danos elétricos, vendaval, roubo, impacto de veículos, responsabilidade civil, entre outras, conforme o risco da empresa.",
    },
    {
        question: "É possível incluir perda de faturamento no seguro empresarial?",
        answer:
            "Sim, algumas seguradoras permitem contratar coberturas ligadas à perda de lucros ou despesas fixas após um sinistro coberto, desde que isso esteja previsto nas condições e analisado na proposta.",
    },
    {
        question:
            "Minha empresa aluga o imóvel. Vale a pena contratar seguro empresarial mesmo assim?",
        answer:
            "Sim. Além da proteção para conteúdo, estoque e equipamentos, o seguro pode incluir responsabilidade civil por danos ao imóvel de terceiros (como o prédio alugado), entre outras coberturas importantes.",
    },
];

export default function SeguroEmpresarialPage() {
    return (
        <>
            {/* SEO estruturado: Service + FAQ + Breadcrumb */}
            <SeoSchemaService
                serviceName="Seguro Empresarial"
                serviceDescription="Seguro empresarial para proteção do patrimônio físico, conteúdo, estoque, equipamentos e operação de empresas de serviços, comércio, clínicas, escritórios e indústrias."
                urlPath="/seguros/seguro-empresarial"
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
                        { href: "/seguros/seguro-empresarial", label: "Seguro Empresarial" },
                    ]}
                />

                {/* HERO do produto */}
                <MotionSection
                    delay={0.05}
                    className="grid gap-8 md:grid-cols-2 items-start"
                >
                    <div className="space-y-4">
                        <h5>Seguro Empresarial.</h5>
                        <h2>
                            Proteção para o patrimônio e a continuidade da sua empresa.
                        </h2>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Um incêndio, uma pane elétrica, um alagamento ou mesmo um roubo
                            podem afetar não só o patrimônio, mas também o funcionamento da
                            sua empresa. O seguro empresarial existe para que esses eventos
                            não coloquem em risco tudo o que você construiu.
                        </p>

                        <div className="grid gap-3 text-xs md:text-sm">
                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Flame className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Eventos súbitos e imprevistos
                                    </p>
                                    <p className="text-[#555]">
                                        Coberturas para incêndio, explosão, fumaça, danos elétricos,
                                        vendaval e outros riscos que podem atingir a sua estrutura.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Droplets className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Estoque, equipamentos e conteúdo
                                    </p>
                                    <p className="text-[#555]">
                                        Proteção para bens, mercadorias, móveis e equipamentos que
                                        sustentam a operação e o faturamento da empresa.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Continuidade do negócio
                                    </p>
                                    <p className="text-[#555]">
                                        Possibilidade de coberturas voltadas a despesas fixas e
                                        continuidade da operação após um sinistro coberto.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado direito: tipos de empresas em que o seguro faz mais diferença */}
                    <div className="space-y-4">
                        <AnimatedCard delay={0.1} className="h-full">
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                        Para quem é
                                    </p>
                                    <h3 className="text-base font-semibold text-[#2b2b2b]">
                                        Empresas que não podem parar por um imprevisto físico.
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-3 grid gap-3 text-xs text-[#555]">
                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Serviços e clínicas
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Clínicas, consultórios e centros de diagnóstico.</li>
                                        <li>Escritórios de advocacia, contabilidade e consultorias.</li>
                                        <li>Negócios que dependem diretamente da estrutura física.</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Comércio e varejo
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Lojas físicas, showrooms e pontos de venda.</li>
                                        <li>Operações com estoque relevante ou bens de alto valor.</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Indústria e operações com frota
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Indústrias de pequeno e médio porte.</li>
                                        <li>Empresas com galpões, depósitos e frota própria.</li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* O que o seguro pode cobrir */}
                <MotionSection delay={0.12} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>O que o seguro empresarial pode cobrir.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            As coberturas são moduladas conforme o porte, o segmento e as
                            necessidades da empresa, mas em linhas gerais podemos considerar:
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.14}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Flame className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Incêndio, explosão e fumaça
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Cobertura básica para danos causados por incêndio, explosão e
                                fumaça, atingindo prédio, conteúdo ou ambos, conforme contratação.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.18}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Danos elétricos e eletrônicos
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Proteção contra danos a equipamentos por curtos-circuitos,
                                oscilações de energia e outros eventos elétricos cobertos.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.22}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Droplets className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Vendaval, alagamento e eventos da natureza
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Possibilidade de incluir coberturas ligadas a vendaval, impacto
                                de granizo, alagamentos e outros eventos, conforme aceitação da
                                seguradora.
                            </p>
                        </AnimatedCard>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.24}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Shield className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Roubo e furto qualificado
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Coberturas relacionadas a subtração de bens dentro da empresa,
                                de acordo com as condições específicas da apólice.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.26}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Users className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Responsabilidade civil
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Amparo em casos em que terceiros sofram danos corporais ou
                                materiais em razão de situações ligadas à empresa, dentro dos
                                limites contratados.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.28}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Truck className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Outras coberturas específicas
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                A depender do perfil, é possível avaliar garantias adicionais,
                                perdas de lucros, coberturas para mercadorias em trânsito e
                                outros pontos relevantes.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Como funciona na prática */}
                <MotionSection delay={0.15} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Como o seguro empresarial funciona na prática.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Nossa atuação vai além de simplesmente “passar uma cotação”.
                            Trabalhamos para que o seguro empresarial seja coerente com o
                            momento e os planos da sua empresa.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.17}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                1. Mapeamento do risco
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Entendemos a atividade, a localização, o tipo de construção,
                                valores de estoque, equipamentos e demais particularidades da
                                sua operação.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                2. Desenho de coberturas e limites
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Com base no diagnóstico, estruturamos coberturas, limites e
                                franquias que façam sentido para a realidade da empresa — nem
                                subsegurado, nem superdimensionado.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.23}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                3. Acompanhamento e sinistro
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Seguimos ao lado da empresa em renovações, ajustes de valores e,
                                principalmente, na condução de eventuais sinistros.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* FAQ */}
                <MotionSection delay={0.18} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Perguntas frequentes sobre o seguro empresarial.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Algumas das dúvidas mais comuns de empresários e gestores que
                            estão avaliando contratar esse tipo de proteção:
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
                            Quer entender qual desenho de seguro empresarial faz mais sentido
                            para a sua empresa?
                        </p>
                        <p>
                            A realidade de uma clínica é diferente da de um comércio, que por
                            sua vez é diferente da de uma indústria. Por isso, nosso ponto de
                            partida é sempre ouvir como funciona o seu negócio, o que é
                            prioritário proteger e quais são os principais receios hoje.
                        </p>
                        <p className="text-xs text-[#666]">
                            Você pode solicitar um contato consultivo pela home, na seção
                            “Fale com um especialista”, ou pelos canais disponíveis no rodapé
                            do site.
                        </p>
                    </section>
                </MotionSection>
            </main>
        </>
    );
}
