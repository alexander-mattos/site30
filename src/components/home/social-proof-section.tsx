// src/components/home/social-proof-section.tsx
import { Building2, UserCheck, Star, Quote } from "lucide-react";
import Image from "next/image";

const SocialProofSection = () => {
    return (
        <section className="bg-white border-y">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
                {/* Cabeçalho */}
                <div className="max-w-3xl space-y-3">
                    <h5>Quem já confia na Integro Seguros.</h5>
                    <h2>Profissionais e empresas que buscam segurança para crescer.</h2>
                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        Atuamos com quem leva a sério a responsabilidade sobre clientes,
                        pacientes, equipes e operações. A cada projeto, nosso foco é construir
                        relações de longo prazo, não apenas “vender uma apólice”.
                    </p>
                </div>

                {/* Métricas + badges */}
                <div className="grid gap-8 md:grid-cols-[1.1fr,1.2fr] items-start">
                    {/* Lado esquerdo – números e selos */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl border border-[#890b23]/15 bg-neutral-50 p-4 flex flex-col gap-1">
                                <p className="text-xs font-semibold text-[#890b23] inline-flex items-center gap-1">
                                    <Building2 className="w-4 h-4" />
                                    Empresas atendidas
                                </p>
                                <p className="text-2xl md:text-3xl font-bold text-[#890b23] leading-tight">
                                    +80
                                </p>
                                <p className="text-xs text-[#666]">
                                    De diferentes portes e segmentos, em várias regiões do Brasil.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#890b23]/15 bg-neutral-50 p-4 flex flex-col gap-1">
                                <p className="text-xs font-semibold text-[#890b23] inline-flex items-center gap-1">
                                    <UserCheck className="w-4 h-4" />
                                    Profissionais protegidos
                                </p>
                                <p className="text-2xl md:text-3xl font-bold text-[#890b23] leading-tight">
                                    +200
                                </p>
                                <p className="text-xs text-[#666]">
                                    Médicos, dentistas, advogados, engenheiros, consultores e outros.
                                </p>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-dashed border-[#890b23]/25 bg-[#890b23]/3 p-4 flex items-center gap-3">
                            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#890b23] shadow-sm">
                                <Star className="w-4 h-4" />
                            </div>
                            <p className="text-xs md:text-sm text-[#3b3b3b]">
                                Nosso objetivo é simples: que, se um dia você precisar acionar o
                                seguro, sinta que tem alguém do seu lado, e não apenas um número
                                de protocolo.
                            </p>
                        </div>
                    </div>

                    {/* Lado direito – depoimentos */}
                    <div className="grid gap-4 md:grid-cols-2">
                        {/* Testemunho 1 */}
                        <div className="rounded-2xl border border-[#890b23]/15 bg-white p-4 flex flex-col gap-3 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                                    <Image
                                        src="/images/depoimento-dentista.png"
                                        alt="Cliente da área de saúde"
                                        fill
                                        sizes="40px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-[#890b23]">
                                        Dra. Mariana, dentista
                                    </p>
                                    <p className="text-[11px] text-[#666]">
                                        Seguro RC Profissional • Clínica própria
                                    </p>
                                </div>
                                <Quote className="w-4 h-4 text-[#890b23]/60" />
                            </div>
                            <p className="text-xs md:text-sm text-[#3b3b3b]">
                                “Eu sabia que precisava de seguro, mas nunca tinha tido tempo de
                                entender as diferenças. A Integro me explicou com calma e montou
                                uma proteção que fez sentido para o meu consultório.”
                            </p>
                        </div>

                        {/* Testemunho 2 */}
                        <div className="rounded-2xl border border-[#890b23]/15 bg-white p-4 flex flex-col gap-3 shadow-sm">
                            <div className="flex items-start gap-3">
                                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-neutral-200 shrink-0">
                                    <Image
                                        src="/images/depoimento-empresa.png"
                                        alt="Cliente empresarial"
                                        fill
                                        sizes="40px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-[#890b23]">
                                        Rodrigo, gestor de empresa de serviços
                                    </p>
                                    <p className="text-[11px] text-[#666]">
                                        Seguro Empresarial + Vida em Grupo
                                    </p>
                                </div>
                                <Quote className="w-4 h-4 text-[#890b23]/60" />
                            </div>
                            <p className="text-xs md:text-sm text-[#3b3b3b]">
                                “Na renovação, avaliamos juntos o histórico de sinistros e os planos
                                de crescimento da empresa. Não foi só renovar por renovar: tivemos
                                uma visão de risco para o próximo ano.”
                            </p>
                        </div>
                    </div>
                </div>

                {/* Rodapé da seção */}
                <p className="text-xs md:text-sm text-[#555] max-w-3xl">
                    Cada negócio tem uma história, uma cultura e uma forma de operar. Nossa
                    proposta é construir um relacionamento em que o seguro faça parte da sua
                    estratégia, e não apenas da sua lista de despesas.
                </p>
            </div>
        </section>
    );
};

export default SocialProofSection;
