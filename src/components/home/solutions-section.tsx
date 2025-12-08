// src/components/home/solutions-section.tsx
import { ShieldCheck, Building2, Stethoscope, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    "https://wa.me/5500000000000";

const SolutionsSection = () => {
    return (
        <section className="bg-white border-y">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
                {/* Cabeçalho da seção */}
                <div className="max-w-3xl space-y-3">
                    <h5>O seguro certo para cada tipo de risco.</h5>
                    <h2>Linhas de seguros que mais atendemos na Integro Seguros.</h2>
                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        Mais do que listar produtos, ajudamos você a entender quais coberturas
                        realmente fazem sentido para o seu momento, seu faturamento e seu apetite
                        de risco.
                    </p>
                </div>

                {/* Grid de soluções */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Card – RC Profissional */}
                    <div className="card-viva bg-white border rounded-2xl p-5 md:p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Stethoscope className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-semibold text-[#890b23]">
                                    Responsabilidade Civil Profissional
                                </h3>
                                <p className="text-xs text-[#666]">
                                    Para quem responde por atos profissionais e decisões técnicas.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-[#3b3b3b]">
                            Proteção em casos de reclamações e processos de pacientes ou clientes
                            por supostos erros, omissões ou falhas na prestação do serviço.
                        </p>
                        <ul className="text-xs text-[#555] space-y-1 list-disc pl-5">
                            <li>Médicos, dentistas e profissionais da saúde</li>
                            <li>Advogados, engenheiros, arquitetos e consultores</li>
                            <li>Honorários advocatícios e indenizações (conforme apólice)</li>
                        </ul>
                    </div>

                    {/* Card – Seguro Empresarial + Vida em Grupo */}
                    <div className="card-viva bg-white border rounded-2xl p-5 md:p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-semibold text-[#890b23]">
                                    Empresas, patrimônio e equipe
                                </h3>
                                <p className="text-xs text-[#666]">
                                    Para quem quer proteger estrutura física e pessoas.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-[#3b3b3b]">
                            Seguro Empresarial, Vida em Grupo e coberturas complementares para
                            que um imprevisto não coloque em risco a continuidade da operação.
                        </p>
                        <ul className="text-xs text-[#555] space-y-1 list-disc pl-5">
                            <li>Incêndio, danos elétricos, vendaval e alagamento</li>
                            <li>Vida em grupo para sócios e colaboradores</li>
                            <li>Responsabilidade Civil, D&amp;O e riscos operacionais</li>
                        </ul>
                    </div>

                    {/* Card – Frota, Equipamentos e Outros */}
                    <div className="card-viva bg-white border rounded-2xl p-5 md:p-6 flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <Truck className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-base md:text-lg font-semibold text-[#890b23]">
                                    Frotas, equipamentos e garantias
                                </h3>
                                <p className="text-xs text-[#666]">
                                    Proteção para os bens que mantêm seu negócio rodando.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-[#3b3b3b]">
                            Estruturamos soluções para bens de alto valor que, se pararem,
                            impactam diretamente seu faturamento e sua capacidade de entrega.
                        </p>
                        <ul className="text-xs text-[#555] space-y-1 list-disc pl-5">
                            <li>Frota leve e pesada (carros, utilitários, caminhões)</li>
                            <li>Equipamentos profissionais, clínicos e de tecnologia</li>
                            <li>Seguros de garantia e responsabilidade contratual</li>
                        </ul>
                    </div>
                </div>

                {/* CTA final da seção */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-dashed border-[#890b23]/20 pt-6 mt-2">
                    <p className="text-sm text-[#3b3b3b] max-w-3xl">
                        Não sabe por onde começar ou qual seguro faz sentido para o seu momento?
                        Conte pra nós como funciona sua atividade e montamos um desenho de
                        proteção sob medida, comparando condições entre seguradoras.
                    </p>
                    <Button className="bg-[#890b23] hover:bg-[#6d081b] text-white whitespace-nowrap" asChild>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            Quero entender qual seguro preciso
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
