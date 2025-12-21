import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    Building2,
    Stethoscope,
    ShoppingBag,
    Truck,
    Shield,
    Users2,
    FileText,
} from "lucide-react";
import { SeoSchemaService } from "@/components/seo-schema-service";
import { Metadata } from "next";

const SITE =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

export const metadata: Metadata = {
    title: "Para empresas | Integro Seguros",
    description:
        "Consultoria em seguros para empresas de diversos portes, incluindo seguro empresarial, frota, vida em grupo, responsabilidade civil e programas integrados de proteção.",
};

export default function ParaEmpresasPage() {
    return (
        <>
            <SeoSchemaService
                serviceName="Seguros para empresas"
                serviceDescription="Consultoria em seguros para empresas de diversos portes, incluindo seguro empresarial, frota, vida em grupo, responsabilidade civil e programas integrados de proteção."
                urlPath={`${SITE}/para-empresas`}
                faqItems={[]}
                providerName="Integro Seguros"
                areaServed="Brasil"
                serviceType="InsuranceAgency"
            />

            <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-12 md:space-y-16">
                {/* Cabeçalho */}
                <MotionSection delay={0.05} className="space-y-3 max-w-3xl">
                    <h5>Para quem lidera equipes, operações e resultados.</h5>
                    <h2>Seguros para empresas que levam gestão de risco a sério.</h2>
                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        A Integro Seguros atua ao lado de gestores e sócios que entendem o
                        seguro como parte da estratégia de continuidade do negócio – e não
                        apenas como uma exigência contratual ou uma linha no DRE.
                    </p>
                </MotionSection>

                {/* Segmentos de empresas atendidas */}
                <MotionSection delay={0.1} className="grid gap-6 md:grid-cols-3">
                    {/* Serviços, escritórios e clínicas */}
                    <AnimatedCard delay={0.12}>
                        <div className="flex items-start gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Stethoscope className="w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-[#890b23]">
                                    Serviços, escritórios e clínicas
                                </h3>
                                <p className="text-xs text-[#555]">
                                    Negócios de serviços especializados, com atendimento a clientes,
                                    pacientes ou outras empresas.
                                </p>
                            </div>
                        </div>
                        <ul className="mt-3 text-xs text-[#555] space-y-1.5 list-disc pl-5">
                            <li>Clínicas, consultórios e centros de diagnóstico.</li>
                            <li>Escritórios de advocacia, contabilidade e consultorias.</li>
                            <li>Operações que dependem de agenda e estrutura fixa.</li>
                        </ul>
                    </AnimatedCard>

                    {/* Comércio e operações com estoque */}
                    <AnimatedCard delay={0.16}>
                        <div className="flex items-start gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <ShoppingBag className="w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-[#890b23]">
                                    Comércio e operações com estoque
                                </h3>
                                <p className="text-xs text-[#555]">
                                    Empresas que lidam com estoque, fluxo de clientes e exposição a
                                    riscos patrimoniais e de responsabilidade.
                                </p>
                            </div>
                        </div>
                        <ul className="mt-3 text-xs text-[#555] space-y-1.5 list-disc pl-5">
                            <li>Lojas físicas, showrooms e centros de distribuição.</li>
                            <li>Estoque de bens e produtos de alto valor agregado.</li>
                            <li>Exposição a danos a terceiros em suas dependências.</li>
                        </ul>
                    </AnimatedCard>

                    {/* Indústria, logística e frota */}
                    <AnimatedCard delay={0.2}>
                        <div className="flex items-start gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Truck className="w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-[#890b23]">
                                    Indústria, logística e frota
                                </h3>
                                <p className="text-xs text-[#555]">
                                    Operações com maior complexidade operacional, frota própria e
                                    múltiplos pontos de atenção em risco.
                                </p>
                            </div>
                        </div>
                        <ul className="mt-3 text-xs text-[#555] space-y-1.5 list-disc pl-5">
                            <li>Indústrias de pequeno e médio porte.</li>
                            <li>Empresas de transporte e logística.</li>
                            <li>Operações com frota e contratos exigindo seguro.</li>
                        </ul>
                    </AnimatedCard>
                </MotionSection>

                {/* Programa de seguros para empresas */}
                <MotionSection delay={0.15} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Um programa de seguros pensado para a sua operação.</h5>
                        <p className="text-sm text-[#4b4b4b]">
                            Em muitas empresas, faz sentido pensar em programa de seguros como
                            um conjunto de proteções complementares, e não apenas apólices
                            isoladas. A partir do mapeamento de riscos, desenhamos combinações
                            coerentes com a sua realidade.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Patrimônio físico e conteúdo */}
                        <AnimatedCard delay={0.18}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Building2 className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Patrimônio físico e conteúdo
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Seguro empresarial para prédio, bens, equipamentos, móveis,
                                máquinas e demais ativos que sustentam o dia a dia da operação.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Focado em continuidade de negócio e proteção de ativos críticos.
                            </p>
                        </AnimatedCard>

                        {/* Pessoas e liderança */}
                        <AnimatedCard delay={0.22}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Users2 className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Pessoas e liderança
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Vida em grupo para colaboradores, proteção para sócios e
                                executivos e, quando fizer sentido, soluções como D&amp;O.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Alinha benefícios, proteção de famílias e governança da empresa.
                            </p>
                        </AnimatedCard>

                        {/* Responsabilidade e contratos */}
                        <AnimatedCard delay={0.26}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <FileText className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Responsabilidade e contratos
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Responsabilidade civil, seguro de frota, garantias contratuais e
                                outras soluções que apoiam a empresa em suas relações com terceiros.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Importante em contratos com clientes, fornecedores e parceiros estratégicos.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Chamada consultiva final */}
                <MotionSection delay={0.2}>
                    <section className="border border-dashed border-[#890b23]/30 rounded-2xl bg-[#890b23]/5 p-5 md:p-6 text-sm text-[#333] space-y-2 flex flex-col gap-2">
                        <div className="flex items-start gap-2">
                            <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/15 text-[#890b23] mt-0.5">
                                <Shield className="w-3.5 h-3.5" />
                            </div>
                            <p className="font-semibold text-[#890b23]">
                                Cada empresa tem sua própria equação de risco.
                            </p>
                        </div>
                        <p>
                            Nosso trabalho é traduzir essa equação em um programa de seguros
                            claro, sustentável e alinhado com os objetivos da gestão. Mais do que
                            “colocar apólices na rua”, buscamos ser um parceiro na construção
                            dessa visão de proteção.
                        </p>
                        <p className="text-xs text-[#666]">
                            Se quiser conversar sobre o seu cenário, você pode solicitar contato
                            consultivo pela home, na seção “Fale com um especialista”.
                        </p>
                    </section>
                </MotionSection>
            </main>
        </>
    );
}
