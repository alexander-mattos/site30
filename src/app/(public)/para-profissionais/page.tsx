import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    Stethoscope,
    HeartPulse,
    Scale,
    PenTool,
    Briefcase,
    ClipboardList,
} from "lucide-react";
import { SeoSchemaService } from "@/components/seo-schema-service";

export default function ParaProfissionaisPage() {
    return (
        <>
            <SeoSchemaService
                serviceName="Seguros para profissionais liberais"
                serviceDescription="Consultoria em seguros para profissionais liberais e autônomos, com foco em responsabilidade civil profissional, vida, equipamentos e proteção de consultórios e escritórios."
                urlPath="/para-profissionais"
                faqItems={[]}
                providerName="Integro Seguros"
                areaServed="Brasil"
                serviceType="InsuranceAgency"
            />

            <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-12 md:space-y-16">
                {/* Cabeçalho */}
                <MotionSection delay={0.05} className="space-y-3 max-w-3xl">
                    <h5>Para quem vive do próprio nome e da própria assinatura.</h5>
                    <h2>Seguros para profissionais liberais e autônomos.</h2>
                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        Se a sua renda depende diretamente da sua agenda, da sua reputação e
                        da confiança dos clientes ou pacientes, um imprevisto pode pesar não
                        só no financeiro, mas também na sua imagem profissional. É aqui que
                        entram as soluções da Integro para profissionais.
                    </p>
                </MotionSection>

                {/* Blocos de “quem atendemos” */}
                <MotionSection delay={0.1} className="grid gap-6 md:grid-cols-3">
                    {/* Saúde e bem-estar */}
                    <AnimatedCard delay={0.12}>
                        <div className="flex items-start gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Stethoscope className="w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-[#890b23]">
                                    Saúde e bem-estar
                                </h3>
                                <p className="text-xs text-[#555]">
                                    Profissionais que lidam com procedimentos, diagnósticos e
                                    decisões clínicas ou estéticas.
                                </p>
                            </div>
                        </div>
                        <ul className="mt-3 text-xs text-[#555] space-y-1.5 list-disc pl-5">
                            <li>Médicos de diversas especialidades.</li>
                            <li>Dentistas, ortodontistas, implantodontistas.</li>
                            <li>Outros profissionais da saúde e estética.</li>
                        </ul>
                    </AnimatedCard>

                    {/* Jurídico, exatas e consultoria */}
                    <AnimatedCard delay={0.16}>
                        <div className="flex items-start gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Scale className="w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-[#890b23]">
                                    Jurídico, exatas e consultoria
                                </h3>
                                <p className="text-xs text-[#555]">
                                    Profissionais cuja recomendação técnica impacta diretamente
                                    decisões e contratos.
                                </p>
                            </div>
                        </div>
                        <ul className="mt-3 text-xs text-[#555] space-y-1.5 list-disc pl-5">
                            <li>Advogados e escritórios de advocacia.</li>
                            <li>Engenheiros e arquitetos.</li>
                            <li>Consultores, peritos e especialistas.</li>
                        </ul>
                    </AnimatedCard>

                    {/* Outros profissionais liberais */}
                    <AnimatedCard delay={0.2}>
                        <div className="flex items-start gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <PenTool className="w-4 h-4" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-base font-semibold text-[#890b23]">
                                    Outros profissionais liberais
                                </h3>
                                <p className="text-xs text-[#555]">
                                    Atividades que envolvem prestação de serviços especializados,
                                    atendimento e responsabilidade perante clientes.
                                </p>
                            </div>
                        </div>
                        <ul className="mt-3 text-xs text-[#555] space-y-1.5 list-disc pl-5">
                            <li>Contadores, planejadores financeiros, consultores.</li>
                            <li>Profissionais com consultório ou escritório próprio.</li>
                            <li>Atividades com uso de equipamentos de alto valor.</li>
                        </ul>
                    </AnimatedCard>
                </MotionSection>

                {/* Principais seguros para profissionais */}
                <MotionSection delay={0.15} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Principais seguros para profissionais.</h5>
                        <p className="text-sm text-[#4b4b4b]">
                            A combinação exata varia conforme a sua atividade, mas em muitos
                            casos trabalhamos com um núcleo de proteção que envolve
                            responsabilidade profissional, proteção de renda e estrutura de
                            atendimento.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* RC Profissional */}
                        <AnimatedCard delay={0.18}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <ClipboardList className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Responsabilidade Civil Profissional
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Protege contra reclamações e processos por supostos erros,
                                omissões ou falhas na prestação de serviços.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Inclui, conforme apólice, custos de defesa, acordos e
                                indenizações dentro dos limites contratados.
                            </p>
                        </AnimatedCard>

                        {/* Vida / Proteção de Renda */}
                        <AnimatedCard delay={0.22}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <HeartPulse className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Seguro de Vida / Proteção de Renda
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Amparo financeiro em caso de eventos que afetem sua capacidade
                                de exercer a atividade profissional, protegendo você e sua família.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Estrutura que pode incluir invalidez, doenças graves e outras
                                coberturas, conforme necessidade e orçamento.
                            </p>
                        </AnimatedCard>

                        {/* Consultório, escritório e equipamentos */}
                        <AnimatedCard delay={0.26}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Briefcase className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Consultório, escritório e equipamentos
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Proteção para estrutura física, móveis, aparelhos e equipamentos
                                profissionais de alto valor, reduzindo o impacto de um sinistro.
                            </p>
                            <p className="mt-2 text-[11px] text-[#666]">
                                Especialmente relevante para quem investiu em consultórios,
                                clínicas ou escritórios próprios.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Chamada consultiva final */}
                <MotionSection delay={0.2}>
                    <section className="border border-dashed border-[#890b23]/30 rounded-2xl bg-[#890b23]/5 p-5 md:p-6 text-sm text-[#333] space-y-2">
                        <p className="font-semibold text-[#890b23]">
                            Cada profissão tem seus próprios riscos e particularidades.
                        </p>
                        <p>
                            Em vez de oferecer um seguro genérico, nossa proposta é entender sua
                            rotina, seus procedimentos, o perfil dos seus clientes e seus planos
                            de médio prazo. A partir daí, desenhamos um programa de seguros
                            coerente com a sua realidade.
                        </p>
                        <p className="text-xs text-[#666]">
                            Se você quiser dar o próximo passo, pode solicitar um contato
                            consultivo pela home, na seção “Fale com um especialista”.
                        </p>
                    </section>
                </MotionSection>
            </main>
        </>
    );
}
