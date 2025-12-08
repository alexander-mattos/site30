// src/components/home/profile-section.tsx
'use client';

import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, UserCheck } from "lucide-react";

const ProfileSection = () => {
    const scrollToLeadCapture = () => {
        if (typeof document === "undefined") return;
        const el = document.getElementById("lead-capture");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section id="para-quem-e" className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
                <h5>Para quem é a Integro Seguros?</h5>
                <h2>Proteção pensada para quem não pode parar.</h2>
                <p className="text-sm md:text-base text-[#4b4b4b]">
                    Se você é profissional liberal ou gestor de uma empresa, estruturamos
                    seguros que conversam com a realidade do seu negócio – sem pacotes
                    prontos e genéricos.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {/* Profissionais */}
                <div className="card-viva border rounded-2xl p-6 md:p-8 bg-white flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                            <UserCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#890b23]">
                                Para Profissionais Liberais
                            </h3>
                            <p className="text-xs text-[#5a5a5a]">
                                Ideal para quem vive do próprio nome e da confiança dos clientes.
                            </p>
                        </div>
                    </div>

                    <p className="text-sm">
                        Proteção para quem assina laudos, conduz atendimentos, presta
                        consultorias e responde diretamente pelos resultados do cliente.
                    </p>

                    <div>
                        <p className="text-sm font-semibold mb-2">Profissões atendidas:</p>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                            <li>Médicos e dentistas</li>
                            <li>Advogados e escritórios de advocacia</li>
                            <li>Engenheiros, arquitetos e consultores</li>
                            <li>Contadores e consultores financeiros</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold mb-2">Seguros típicos:</p>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                            <li>Responsabilidade Civil Profissional (RC Profissional)</li>
                            <li>Seguro de Vida para profissionais</li>
                            <li>Equipamentos (notebooks, ultrassom, scanners, etc.)</li>
                            <li>Consultórios e escritórios</li>
                        </ul>
                    </div>

                    <div className="mt-auto pt-2">
                        <Button
                            className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white cursor-pointer"
                            onClick={scrollToLeadCapture}
                        >
                            Quero proteger minha atividade
                        </Button>
                    </div>
                </div>

                {/* Empresas */}
                <div className="card-viva border rounded-2xl p-6 md:p-8 bg-white flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                            <BriefcaseBusiness className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-[#890b23]">
                                Para Empresas
                            </h3>
                            <p className="text-xs text-[#5a5a5a]">
                                Do CNPJ enxuto à operação com várias unidades e equipes.
                            </p>
                        </div>
                    </div>

                    <p className="text-sm">
                        Atuamos da porta pra dentro e da porta pra fora: patrimônio,
                        pessoas, frota, responsabilidade civil e continuidade do negócio.
                    </p>

                    <div>
                        <p className="text-sm font-semibold mb-2">Atendemos:</p>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                            <li>Comércios, escritórios e prestadores de serviços</li>
                            <li>Indústrias e operações logísticas</li>
                            <li>Clínicas, consultórios e estruturas de saúde</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold mb-2">Seguros típicos:</p>
                        <ul className="text-sm space-y-1 list-disc pl-5">
                            <li>Seguro Empresarial</li>
                            <li>Seguro de Frota</li>
                            <li>Vida em Grupo</li>
                            <li>Responsabilidade Civil, D&amp;O e riscos operacionais</li>
                        </ul>
                    </div>

                    <div className="mt-auto pt-2">
                        <Button
                            className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white cursor-pointer"
                            onClick={scrollToLeadCapture}
                        >
                            Quero proteger minha empresa
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;
