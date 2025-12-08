// src/components/home/why-broker-section.tsx
import { ShieldCheck, Handshake, FileSearch, Scale } from "lucide-react";

const WhyBrokerSection = () => {
    return (
        <section id="por-que-corretora" className="bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-10">
                {/* Cabeçalho */}
                <div className="max-w-3xl space-y-3">
                    <h5>Por que contar com uma corretora especializada?</h5>
                    <h2>Seguro não é só preço. É análise de risco, cobertura e suporte.</h2>
                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        Contratar direto, apenas pelo menor valor, pode sair caro quando o
                        sinistro acontece. O papel da Integro Seguros é justamente ficar ao
                        seu lado em todas as etapas: antes, durante e depois da contratação.
                    </p>
                </div>

                {/* Grid de diferenciais */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Diferencial 1 */}
                    <div className="bg-white border border-[#890b23]/10 rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-sm">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                            <FileSearch className="w-5 h-5" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-[#890b23]">
                            Leitura técnica da apólice
                        </h3>
                        <p className="text-sm text-[#3b3b3b]">
                            Traduzimos as cláusulas e condições para uma linguagem que você
                            entende, apontando o que está coberto, o que não está e onde podem
                            existir riscos escondidos.
                        </p>
                    </div>

                    {/* Diferencial 2 */}
                    <div className="bg-white border border-[#890b23]/10 rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-sm">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                            <Handshake className="w-5 h-5" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-[#890b23]">
                            Defendemos o seu lado junto à seguradora
                        </h3>
                        <p className="text-sm text-[#3b3b3b]">
                            No momento do sinistro, você não fala sozinho com a seguradora.
                            A Integro acompanha o processo, ajuda na organização dos documentos
                            e busca o melhor desfecho possível dentro das regras do contrato.
                        </p>
                    </div>

                    {/* Diferencial 3 */}
                    <div className="bg-white border border-[#890b23]/10 rounded-2xl p-5 md:p-6 flex flex-col gap-3 shadow-sm">
                        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                            <Scale className="w-5 h-5" />
                        </div>
                        <h3 className="text-base md:text-lg font-semibold text-[#890b23]">
                            Busca de equilíbrio entre custo e cobertura
                        </h3>
                        <p className="text-sm text-[#3b3b3b]">
                            Não faz sentido pagar por coberturas que você não precisa — nem
                            ficar descoberto em pontos críticos. Nosso papel é encontrar o
                            ponto de equilíbrio para o seu perfil.
                        </p>
                    </div>
                </div>

                {/* Mini comparativo: direto x corretora */}
                <div className="rounded-2xl border border-dashed border-[#890b23]/25 bg-white/70 p-5 md:p-6">
                    <p className="text-xs font-semibold text-[#890b23] mb-3 uppercase tracking-[0.16em]">
                        Comparando na prática
                    </p>
                    <div className="grid gap-4 md:grid-cols-2 text-xs md:text-sm">
                        <div className="space-y-2">
                            <p className="font-semibold text-[#890b23]">
                                Comprar direto, só pelo menor preço:
                            </p>
                            <ul className="space-y-1 list-disc pl-5 text-[#4b4b4b]">
                                <li>Cláusulas técnicas sem explicação detalhada.</li>
                                <li>Foco em preço, não em cobertura.</li>
                                <li>No sinistro, você negocia sozinho com a seguradora.</li>
                                <li>Risco de descobrir lacunas somente na hora do problema.</li>
                            </ul>
                        </div>
                        <div className="space-y-2">
                            <p className="font-semibold text-[#890b23]">
                                Trabalhar com a Integro Seguros:
                            </p>
                            <ul className="space-y-1 list-disc pl-5 text-[#4b4b4b]">
                                <li>Análise de risco alinhada ao seu momento e ao seu faturamento.</li>
                                <li>Comparação entre seguradoras e desenhos de proteção possíveis.</li>
                                <li>Acompanhamento consultivo em caso de sinistro.</li>
                                <li>Visão de longo prazo, para crescer com segurança.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Fechamento */}
                <p className="text-xs md:text-sm text-[#555] max-w-3xl">
                    O seguro certo não existe em “tabela única”. Ele é construído a partir do
                    entendimento do seu negócio. É aqui que uma corretora especializada faz
                    toda a diferença.
                </p>
            </div>
        </section>
    );
};

export default WhyBrokerSection;
