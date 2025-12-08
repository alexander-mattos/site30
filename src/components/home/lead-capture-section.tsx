"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    MessageCircle,
    ShieldCheck,
    ArrowRight,
    Clock,
    UserCheck,
    Building2,
} from "lucide-react";

const LeadCaptureSection = () => {
    // estados simples de controle de envio (os mesmos da versão anterior)
    const [loadingProf, setLoadingProf] = useState(false);
    const [loadingEmp, setLoadingEmp] = useState(false);
    const [msgProf, setMsgProf] = useState<string | null>(null);
    const [msgEmp, setMsgEmp] = useState<string | null>(null);

    // controle de aba ativa (profissional x empresa)
    const [activeType, setActiveType] = useState<"prof" | "emp">("prof");

    async function handleProfSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMsgProf(null);
        setLoadingProf(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const nome = formData.get("nome") as string;
        const whatsapp = formData.get("whatsapp") as string;
        const profissao = formData.get("profissao") as string;
        const contexto = formData.get("contexto") as string;
        const email = formData.get("email") as string | null;

        try {
            const res = await fetch("/api/leads/profissionais", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // 👇 mantém o payload antigo e adiciona campos extras se a API aceitar
                body: JSON.stringify({
                    nome,
                    whatsapp,
                    profissao,
                    contexto,
                    email,
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setMsgProf(
                    (data as any).error ||
                    "Não foi possível enviar sua solicitação. Tente novamente."
                );
            } else {
                setMsgProf("Recebemos seus dados! Em breve entraremos em contato.");
                form.reset();
            }
        } catch (error) {
            setMsgProf("Erro de conexão. Tente novamente.");
        } finally {
            setLoadingProf(false);
        }
    }

    async function handleEmpSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMsgEmp(null);
        setLoadingEmp(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const empresa = formData.get("empresa") as string;
        const whatsapp = formData.get("whatsapp") as string;
        const segmento = formData.get("segmento") as string;
        const funcionarios = formData.get("funcionarios") as string;
        const contexto = formData.get("contexto") as string;
        const email = formData.get("email") as string | null;

        try {
            const res = await fetch("/api/leads/empresas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // 👇 mantém o payload antigo e envia extras se a API aceitar
                body: JSON.stringify({
                    empresa,
                    whatsapp,
                    segmento,
                    funcionarios,
                    contexto,
                    email,
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setMsgEmp(
                    (data as any).error ||
                    "Não foi possível enviar sua solicitação. Tente novamente."
                );
            } else {
                setMsgEmp("Recebemos seus dados! Em breve entraremos em contato.");
                form.reset();
            }
        } catch (error) {
            setMsgEmp("Erro de conexão. Tente novamente.");
        } finally {
            setLoadingEmp(false);
        }
    }

    return (
        <section id="lead-capture" className="bg-[#890b23] text-white">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-[1.1fr,1.1fr] items-start">
                {/* Lado esquerdo – discurso consultivo */}
                <div className="space-y-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]">
                        <ShieldCheck className="w-4 h-4" />
                        Atendimento consultivo
                    </span>

                    <div className="space-y-3">
                        <h5 className="!text-white/80">
                            Vamos falar sobre o seu risco, não só sobre o seu seguro.
                        </h5>
                        <h2 className="!text-white">
                            Conte como funciona sua rotina e desenhamos a proteção junto com você.
                        </h2>
                    </div>

                    <p className="text-sm md:text-base text-white/80 max-w-xl">
                        Em poucos minutos de conversa, conseguimos entender sua atividade,
                        responsabilidades e pontos sensíveis. A partir disso, comparamos
                        opções entre seguradoras e sugerimos um desenho de proteção que faça
                        sentido para a sua realidade.
                    </p>

                    <div className="grid gap-3 md:grid-cols-2 text-xs md:text-sm">
                        <div className="flex items-start gap-2">
                            <div className="mt-[2px]">
                                <MessageCircle className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-white/80">
                                Atendimento humano, sem scripts engessados. Você fala direto com
                                quem entende de risco.
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="mt-[2px]">
                                <Clock className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-white/80">
                                Horários flexíveis para profissionais e gestores com rotina intensa.
                            </p>
                        </div>
                    </div>

                    <p className="text-[11px] md:text-xs text-white/70 max-w-md">
                        Não é compromisso de contratação: é uma conversa para entender se faz
                        sentido avançar com algum desenho de seguro para o seu momento.
                    </p>
                </div>

                {/* Lado direito – card com toggle PRO / EMPRESA */}
                <div className="bg-white text-[#222] rounded-2xl shadow-xl p-5 md:p-6 border border-white/10">
                    {/* Toggle tipo de lead */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="space-y-1">
                            <p className="text-xs font-semibold text-[#890b23] flex items-center gap-2">
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <MessageCircle className="w-3 h-3" />
                                </span>
                                Como você prefere ser atendido?
                            </p>
                            <p className="text-[11px] text-[#555]">
                                Escolha se deseja falar como profissional liberal ou como empresa.
                            </p>
                        </div>
                    </div>

                    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 p-1 mb-4 text-xs">
                        <button
                            type="button"
                            onClick={() => setActiveType("prof")}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition ${activeType === "prof"
                                ? "bg-white shadow-sm text-[#890b23]"
                                : "text-[#555]"
                                }`}
                        >
                            <UserCheck className="w-3 h-3" />
                            Profissional liberal
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveType("emp")}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition ${activeType === "emp"
                                ? "bg-white shadow-sm text-[#890b23]"
                                : "text-[#555]"
                                }`}
                        >
                            <Building2 className="w-3 h-3" />
                            Empresa / CNPJ
                        </button>
                    </div>

                    {/* FORMULÁRIO PROFISSIONAL LIBERAL */}
                    {activeType === "prof" && (
                        <form
                            onSubmit={handleProfSubmit}
                            className="space-y-4 text-sm"
                            noValidate
                        >
                            <div className="space-y-1">
                                <label
                                    htmlFor="nome-prof"
                                    className="text-xs font-medium text-[#333]"
                                >
                                    Nome completo
                                </label>
                                <Input
                                    id="nome-prof"
                                    name="nome"
                                    required
                                    placeholder="Como você prefere ser chamado(a)?"
                                    className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="profissao"
                                    className="text-xs font-medium text-[#333]"
                                >
                                    Sua profissão ou especialidade
                                </label>
                                <Input
                                    id="profissao"
                                    name="profissao"
                                    required
                                    placeholder="Ex.: dentista, médico, advogado, engenheiro..."
                                    className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-1">
                                    <label
                                        htmlFor="whatsapp-prof"
                                        className="text-xs font-medium text-[#333]"
                                    >
                                        WhatsApp
                                    </label>
                                    <Input
                                        id="whatsapp-prof"
                                        name="whatsapp"
                                        required
                                        placeholder="(00) 00000-0000"
                                        className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="email-prof"
                                        className="text-xs font-medium text-[#333]"
                                    >
                                        E-mail (opcional)
                                    </label>
                                    <Input
                                        id="email-prof"
                                        name="email"
                                        type="email"
                                        placeholder="seuemail@exemplo.com"
                                        className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="contexto-prof"
                                    className="text-xs font-medium text-[#333]"
                                >
                                    Conte rapidamente como funciona sua atividade
                                </label>
                                <Textarea
                                    id="contexto-prof"
                                    name="contexto"
                                    placeholder="Ex.: Atendo em consultório próprio, faço plantões, tenho 2 funcionários..."
                                    className="min-h-[80px] bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23] text-xs"
                                />
                            </div>

                            <div className="space-y-2 pt-1">
                                <Button
                                    type="submit"
                                    disabled={loadingProf}
                                    className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white inline-flex items-center justify-center gap-2"
                                >
                                    {loadingProf ? (
                                        "Enviando..."
                                    ) : (
                                        <>
                                            Quero falar com um especialista
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                                {msgProf && (
                                    <p className="text-[11px] text-[#555] leading-snug">
                                        {msgProf}
                                    </p>
                                )}
                                <p className="text-[10px] text-[#777] leading-snug">
                                    Seus dados serão usados apenas para contato relacionado a seguros
                                    profissionais, conforme nossa política de privacidade.
                                </p>
                            </div>
                        </form>
                    )}

                    {/* FORMULÁRIO EMPRESA */}
                    {activeType === "emp" && (
                        <form
                            onSubmit={handleEmpSubmit}
                            className="space-y-4 text-sm"
                            noValidate
                        >
                            <div className="space-y-1">
                                <label
                                    htmlFor="empresa"
                                    className="text-xs font-medium text-[#333]"
                                >
                                    Nome da empresa
                                </label>
                                <Input
                                    id="empresa"
                                    name="empresa"
                                    required
                                    placeholder="Razão social ou nome fantasia"
                                    className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                />
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-1">
                                    <label
                                        htmlFor="segmento"
                                        className="text-xs font-medium text-[#333]"
                                    >
                                        Segmento
                                    </label>
                                    <Input
                                        id="segmento"
                                        name="segmento"
                                        required
                                        placeholder="Ex.: clínica, escritório, indústria, logística..."
                                        className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="funcionarios"
                                        className="text-xs font-medium text-[#333]"
                                    >
                                        Nº aproximado de funcionários
                                    </label>
                                    <Input
                                        id="funcionarios"
                                        name="funcionarios"
                                        required
                                        placeholder="Ex.: 5, 20, 50+"
                                        className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                    />
                                </div>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-1">
                                    <label
                                        htmlFor="whatsapp-emp"
                                        className="text-xs font-medium text-[#333]"
                                    >
                                        WhatsApp
                                    </label>
                                    <Input
                                        id="whatsapp-emp"
                                        name="whatsapp"
                                        required
                                        placeholder="(00) 00000-0000"
                                        className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                        htmlFor="email-emp"
                                        className="text-xs font-medium text-[#333]"
                                    >
                                        E-mail (opcional)
                                    </label>
                                    <Input
                                        id="email-emp"
                                        name="email"
                                        type="email"
                                        placeholder="contato@empresa.com"
                                        className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="contexto-emp"
                                    className="text-xs font-medium text-[#333]"
                                >
                                    Resuma rapidamente sua operação
                                </label>
                                <Textarea
                                    id="contexto-emp"
                                    name="contexto"
                                    placeholder="Ex.: Temos 2 unidades, frota própria, estoque relevante, atendemos em todo o Brasil..."
                                    className="min-h-[80px] bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23] text-xs"
                                />
                            </div>

                            <div className="space-y-2 pt-1">
                                <Button
                                    type="submit"
                                    disabled={loadingEmp}
                                    className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white inline-flex items-center justify-center gap-2"
                                >
                                    {loadingEmp ? (
                                        "Enviando..."
                                    ) : (
                                        <>
                                            Quero falar sobre seguros para minha empresa
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    )}
                                </Button>
                                {msgEmp && (
                                    <p className="text-[11px] text-[#555] leading-snug">
                                        {msgEmp}
                                    </p>
                                )}
                                <p className="text-[10px] text-[#777] leading-snug">
                                    Seus dados serão usados apenas para contato relacionado a seguros
                                    empresariais, conforme nossa política de privacidade.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadCaptureSection;
