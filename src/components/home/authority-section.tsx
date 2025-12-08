// src/components/home/authority-section.tsx
import { Award, FileCheck, GraduationCap, ShieldCheck } from "lucide-react";
import Image from "next/image";

const AuthoritySection = () => {
    return (
        <section className="bg-neutral-50 border-y">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
                {/* Cabeçalho */}
                <div className="max-w-3xl space-y-3">
                    <h5>Quem está por trás da Integro Seguros.</h5>
                    <h2>Autoridade técnica com foco em profissionais e empresas.</h2>
                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        Unimos experiência de mercado, atualização constante e visão prática
                        do dia a dia de quem empreende, atende clientes, lidera equipes e
                        toma decisões que carregam responsabilidade.
                    </p>
                </div>

                {/* Grid principal: sobre + credenciais */}
                <div className="grid gap-8 md:grid-cols-[1.1fr,1.1fr] items-start">
                    {/* Bloco com foto / história do corretor */}
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-4 items-start">
                            <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden bg-neutral-200 border border-white shadow-sm">
                                <Image
                                    src="/images/corretor-perfil.png"
                                    alt="Corretor responsável pela Integro Seguros"
                                    fill
                                    sizes="96px"
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-[#890b23]">
                                    Integro Seguros
                                </p>
                                <p className="text-xs text-[#666]">
                                    Corretora especializada em riscos profissionais e empresariais
                                </p>
                                <p className="text-xs text-[#444]">
                                    Atendemos profissionais liberais e empresas que buscam uma visão
                                    mais estratégica do seguro: não apenas cumprir exigências, mas
                                    proteger o que é essencial para o negócio.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-[#890b23]/15 bg-white p-4 space-y-2 text-xs md:text-sm">
                            <p className="font-semibold text-[#890b23] flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                Registro e atuação regulada
                            </p>
                            <p className="text-[#444]">
                                A Integro Seguros atua registrada junto aos órgãos reguladores do
                                mercado de seguros, seguindo normas de compliance, conduta ética e
                                transparência em todas as etapas do atendimento.
                            </p>
                        </div>
                    </div>

                    {/* Bloco de credenciais em cards */}
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-white border border-[#890b23]/10 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Award className="w-4 h-4" />
                            </div>
                            <p className="text-sm font-semibold text-[#2b2b2b]">
                                Foco em riscos profissionais
                            </p>
                            <p className="text-xs text-[#555]">
                                Experiência prática em seguros de responsabilidade civil
                                profissional, seguros para clínicas, consultórios e escritórios de
                                serviços especializados.
                            </p>
                        </div>

                        <div className="bg-white border border-[#890b23]/10 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <GraduationCap className="w-4 h-4" />
                            </div>
                            <p className="text-sm font-semibold text-[#2b2b2b]">
                                Atualização constante
                            </p>
                            <p className="text-xs text-[#555]">
                                Acompanhamo­s mudanças de produtos, clausulados e práticas de
                                mercado para levar sempre as alternativas mais atuais aos clientes.
                            </p>
                        </div>

                        <div className="bg-white border border-[#890b23]/10 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <FileCheck className="w-4 h-4" />
                            </div>
                            <p className="text-sm font-semibold text-[#2b2b2b]">
                                Visão detalhada de coberturas
                            </p>
                            <p className="text-xs text-[#555]">
                                Analisamos não só preço, mas franquias, limites, exclusões e
                                extensões de cobertura, para evitar surpresas na hora do sinistro.
                            </p>
                        </div>

                        <div className="bg-white border border-[#890b23]/10 rounded-2xl p-4 flex flex-col gap-2 shadow-sm">
                            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <p className="text-sm font-semibold text-[#2b2b2b]">
                                Acompanhamento contínuo
                            </p>
                            <p className="text-xs text-[#555]">
                                Estar ao lado do cliente significa acompanhar renovações, ajustes de
                                capital segurado, inclusão de novos riscos e mudanças na operação.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Fechamento */}
                <p className="text-xs md:text-sm text-[#555] max-w-3xl">
                    A escolha da corretora é tão importante quanto a escolha da seguradora.
                    Na Integro, nossa missão é ser o seu parceiro técnico em seguros, para
                    que você possa se concentrar no que faz melhor: atender seus clientes e
                    fazer sua empresa crescer.
                </p>
            </div>
        </section>
    );
};

export default AuthoritySection;
