"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import {
    MessageCircle,
    ShieldCheck,
    Clock,
    UserCheck,
    Building2,
} from "lucide-react";
import { GenericField, GenericForm } from "../ui/generic-form";

const camposProf: GenericField[] = [
    { name: 'nome', id: 'nome-prof', label: 'Nome completo', required: true },
    { name: 'profissao', id: 'profissao', label: 'Profissão', required: true },
    { name: 'whatsapp', id: 'whatsapp-prof', label: 'WhatsApp', type: 'tel', required: true },
    { name: 'email', id: 'email-prof', label: 'E‑mail', type: 'email' },
    { name: 'contexto', id: 'contexto-prof', label: 'Conte rapidamente como funciona sua atividade', type: 'textarea' },
];

const camposEmp: GenericField[] = [
    { name: "empresa", id: "empresa", label: "Nome da empresa", required: true, placeholder: "Razão social ou nome fantasia" },
    { name: "segmento", id: "segmento", label: "Segmento", required: true, placeholder: "Ex.: clínica, escritório, indústria..." },
    { name: "funcionarios", id: "funcionarios", label: "Nº aproximado de funcionários", required: true, placeholder: "Ex.: 5, 20, 50+" },
    { name: "whatsapp", id: "whatsapp-emp", label: "WhatsApp", type: "tel", required: true, placeholder: "(00) 00000‑0000" },
    { name: "email", id: "email-emp", label: "E‑mail (opcional)", type: "email", placeholder: "contato@empresa.com" },
    { name: "contexto", id: "contexto-emp", label: "Resuma rapidamente sua operação", type: "textarea", placeholder: "Ex.: Temos 2 unidades, frota própria..." },
];

const LeadCaptureSection = () => {
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
                        <GenericForm
                            fields={camposProf}
                            endpoint="/api/leads/profissionais"
                            origin="home_profissional"
                            trackingType="lead"
                            successMessage="Recebemos seus dados! Em breve entraremos em contato."
                        />
                    )}

                    {/* FORMULÁRIO EMPRESA */}
                    {activeType === "emp" && (
                        <GenericForm
                            fields={camposEmp}
                            endpoint="/api/leads/empresas"
                            origin="home_empresa"
                            trackingType="lead"
                            successMessage="Recebemos seus dados! Em breve entraremos em contato."
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default LeadCaptureSection;
