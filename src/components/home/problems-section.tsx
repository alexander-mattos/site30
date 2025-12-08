// src/components/home/problems-section.tsx
import { AlertTriangle } from "lucide-react";

const ProblemsSection = () => {
    return (
        <section id="solucoes" className="border-y bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-3">
                <div className="md:col-span-2 space-y-6">
                    <div className="space-y-2">
                        <h5>Os “e se…” que tiram o sono de quem empreende.</h5>
                        <h2>O risco é invisível… até acontecer.</h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-semibold text-[#890b23] mb-3">
                                Profissionais Liberais
                            </h3>
                            <ul className="space-y-2 text-sm text-[#333]">
                                <li>“E se um erro profissional gerar um processo?”</li>
                                <li>“E se um equipamento parar amanhã?”</li>
                                <li>“E se um paciente ou cliente me responsabilizar?”</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-[#890b23] mb-3">
                                Empresas
                            </h3>
                            <ul className="space-y-2 text-sm text-[#333]">
                                <li>“E se um incêndio parar minha operação?”</li>
                                <li>“E se um funcionário sofrer um acidente grave?”</li>
                                <li>“E se eu sofrer um processo de alto valor?”</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="space-y-3 text-sm">
                    <div className="rounded-2xl border border-[#890b23]/15 bg-white p-4 flex gap-3">
                        <div className="mt-1">
                            <AlertTriangle className="w-5 h-5 text-[#890b23]" />
                        </div>
                        <div>
                            <p className="font-semibold text-[#890b23] mb-1">
                                Você não controla o imprevisto, mas pode controlar a resposta.
                            </p>
                            <p className="text-[#444]">
                                Nosso trabalho é fazer com que você nunca esteja sozinho quando
                                isso acontecer. Atuamos antes, durante e depois do sinistro para
                                que o impacto na sua rotina e no seu caixa seja o menor possível.
                            </p>
                        </div>
                    </div>

                    <p className="text-xs text-[#666]">
                        Uma apólice bem desenhada não é custo: é a diferença entre um
                        problema grande e um problema administrável.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemsSection;
