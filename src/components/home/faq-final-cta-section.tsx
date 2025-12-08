"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { ShieldCheck, Briefcase, HelpCircle } from "lucide-react";

type FormType = "profissional" | "empresa" | "contato";

export default function FaqFinalCtaSection() {
    const [open, setOpen] = useState(false);
    const [formType, setFormType] = useState<FormType | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);

    function openForm(type: FormType) {
        setFormType(type);
        setFeedback(null);
        setOpen(true);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!formType) return;

        setIsSubmitting(true);
        setFeedback(null);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            let url = "";
            let body: any = {};

            if (formType === "profissional") {
                url = "/api/leads/profissionais";
                body = {
                    nome: formData.get("nome"),
                    whatsapp: formData.get("whatsapp"),
                    profissao: formData.get("profissao"),
                };
            } else if (formType === "empresa") {
                url = "/api/leads/empresas";
                body = {
                    empresa: formData.get("empresa"),
                    whatsapp: formData.get("whatsapp"),
                    segmento: formData.get("segmento"),
                    funcionarios: formData.get("funcionarios"),
                };
            } else {
                url = "/api/leads/contato";
                body = {
                    nome: formData.get("nome"),
                    whatsapp: formData.get("whatsapp"),
                    email: formData.get("email"),
                    mensagem: formData.get("mensagem"),
                };
            }

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setFeedback(
                    data.error ||
                    "Não foi possível enviar sua solicitação. Tente novamente."
                );
            } else {
                setFeedback(
                    "Recebemos seus dados! Em breve um especialista da Integro Seguros entra em contato."
                );
                form.reset();
            }
        } catch (err) {
            setFeedback("Erro de conexão. Tente novamente em instantes.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section className="border-t bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4 py-16 space-y-10">
                {/* Cabeçalho */}
                <div className="text-center space-y-3 max-w-2xl mx-auto">
                    <p className="h5">
                        Ainda tem dúvidas sobre qual seguro faz sentido para você?
                    </p>
                    <h2>
                        Perguntas frequentes e um especialista à sua disposição.
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground">
                        Se a resposta que você procura não estiver aqui, basta nos acionar:
                        em poucos minutos alguém da nossa equipe fala com você.
                    </p>
                </div>

                {/* FAQ */}
                <div className="grid gap-8 md:grid-cols-[1.4fr,1fr] items-start">
                    <div>
                        <Accordion type="single" collapsible className="space-y-2">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-left">
                                    Seguro de responsabilidade civil só vale quando eu “erro”
                                    mesmo?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Não necessariamente. Muitas vezes o seguro atua para custear
                                    sua defesa, mesmo quando não há erro técnico, mas existe uma
                                    reclamação formal, um processo ético ou judicial. O objetivo é
                                    que você tenha suporte financeiro e técnico para se defender.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2">
                                <AccordionTrigger className="text-left">
                                    Vocês atendem clientes em todo o Brasil?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Sim. A Integro Seguros atende profissionais liberais e
                                    empresas em todo o território nacional, com atendimento
                                    consultivo via WhatsApp, e-mail, vídeo e telefone.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3">
                                <AccordionTrigger className="text-left">
                                    Posso ter mais de um seguro com vocês?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Pode – e muitas vezes isso é o mais indicado. Por exemplo:
                                    seguro de responsabilidade civil + seguro empresarial + vida em
                                    grupo para sócios ou equipe. Nós ajudamos a desenhar uma
                                    proteção integrada, sem sobreposição de coberturas.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4">
                                <AccordionTrigger className="text-left">
                                    Seguro RC Profissional cobre processos?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Seguros de responsabilidade civil profissional e empresarial podem cobrir
                                    reclamações de terceiros, incluindo custos de defesa e indenizações, conforme
                                    condições da apólice.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-5">
                                <AccordionTrigger className="text-left">
                                    Em quanto tempo recebo a apólice?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Após o envio das informações e aprovação da proposta, a emissão costuma ocorrer
                                    em poucos dias úteis, variando conforme a seguradora.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-6">
                                <AccordionTrigger className="text-left">
                                    E se ocorrer sinistro?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Nossa equipe acompanha você em todas as etapas: abertura de sinistro, envio de
                                    documentos, acompanhamento com a seguradora e conclusão do processo.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-7">
                                <AccordionTrigger className="text-left">
                                    Posso parcelar?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Na maioria dos casos, é possível parcelar o prêmio em várias vezes, conforme as
                                    regras da seguradora e o valor do seguro.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-8">
                                <AccordionTrigger className="text-left">
                                    Posso trocar a seguradora depois?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Sim. Avaliamos as opções a cada renovação e, se fizer sentido, migramos para
                                    outra seguradora com condições mais adequadas.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-9">
                                <AccordionTrigger className="text-left">
                                    É obrigação legal ter esse seguro?
                                </AccordionTrigger>
                                <AccordionContent>
                                    Alguns contratos, conselhos de classe e operações exigem seguro específico.
                                    Mesmo quando não é obrigatório por lei, é altamente recomendado para proteção
                                    financeira.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Cards de CTA */}
                    <div className="space-y-4">
                        <Card className="border-[#f0e2e5]">
                            <CardHeader className="flex flex-row items-start gap-3 pb-3">
                                <div className="mt-1 rounded-full bg-[#890b23]/10 p-2">
                                    <ShieldCheck className="w-4 h-4 text-[#890b23]" />
                                </div>
                                <div>
                                    <CardTitle className="text-base">
                                        Sou profissional liberal
                                    </CardTitle>
                                    <CardDescription className="text-xs">
                                        RC profissional, equipamentos, consultório, vida…
                                        analisamos o seu caso e sugerimos o que faz sentido.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white text-sm cursor-pointer"
                                    onClick={() => openForm("profissional")}
                                >
                                    Falar sobre meu seguro profissional
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-[#f0e2e5]">
                            <CardHeader className="flex flex-row items-start gap-3 pb-3">
                                <div className="mt-1 rounded-full bg-[#890b23]/10 p-2">
                                    <Briefcase className="w-4 h-4 text-[#890b23]" />
                                </div>
                                <div>
                                    <CardTitle className="text-base">
                                        Tenho uma empresa
                                    </CardTitle>
                                    <CardDescription className="text-xs">
                                        Seguro empresarial, frota, vida em grupo, RC, D&amp;O…
                                        organizamos a proteção da sua operação.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white text-sm cursor-pointer"
                                    onClick={() => openForm("empresa")}
                                >
                                    Falar sobre seguro para minha empresa
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-dashed border-[#e0e0e0] bg-white/70">
                            <CardHeader className="flex flex-row items-start gap-3 pb-3">
                                <div className="mt-1 rounded-full bg-neutral-200 p-2">
                                    <HelpCircle className="w-4 h-4 text-neutral-700" />
                                </div>
                                <div>
                                    <CardTitle className="text-base">
                                        Outra demanda ou dúvida geral
                                    </CardTitle>
                                    <CardDescription className="text-xs">
                                        Seguro de carro, residencial, viagem ou dúvidas gerais.
                                        Pode mandar: vamos te responder por WhatsApp ou e-mail.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <Button
                                    variant="outline"
                                    className="w-full border-[#890b23]/30 text-[#890b23] hover:bg-[#890b23]/5 text-sm cursor-pointer"
                                    onClick={() => openForm("contato")}
                                >
                                    Falar com um especialista
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-lg">
                            {formType === "profissional" &&
                                "Conte um pouco sobre sua atividade profissional"}
                            {formType === "empresa" &&
                                "Conte um pouco sobre sua empresa"}
                            {formType === "contato" &&
                                "Como podemos te ajudar?"}
                        </DialogTitle>
                        <DialogDescription className="text-xs">
                            Seus dados serão usados apenas para retorno da Integro Seguros.
                            Não fazemos envio de spam.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {formType === "profissional" && (
                            <>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium" htmlFor="nome">
                                        Nome completo
                                    </label>
                                    <input
                                        id="nome"
                                        name="nome"
                                        required
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium" htmlFor="whatsapp">
                                        WhatsApp
                                    </label>
                                    <input
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium" htmlFor="profissao">
                                        Profissão / especialidade
                                    </label>
                                    <input
                                        id="profissao"
                                        name="profissao"
                                        required
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="Ex.: dentista, médico, engenheiro..."
                                    />
                                </div>
                            </>
                        )}

                        {formType === "empresa" && (
                            <>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium" htmlFor="empresa">
                                        Nome da empresa
                                    </label>
                                    <input
                                        id="empresa"
                                        name="empresa"
                                        required
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="Razão social ou nome fantasia"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium" htmlFor="whatsapp">
                                        WhatsApp
                                    </label>
                                    <input
                                        id="whatsapp"
                                        name="whatsapp"
                                        required
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium" htmlFor="segmento">
                                        Segmento de atuação
                                    </label>
                                    <input
                                        id="segmento"
                                        name="segmento"
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="Comércio, serviços, saúde, indústria..."
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label
                                        className="text-xs font-medium"
                                        htmlFor="funcionarios"
                                    >
                                        Número aproximado de funcionários
                                    </label>
                                    <input
                                        id="funcionarios"
                                        name="funcionarios"
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="Ex.: 5, 20, 100..."
                                    />
                                </div>
                            </>
                        )}

                        {formType === "contato" && (
                            <>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium" htmlFor="nome">
                                        Nome
                                    </label>
                                    <input
                                        id="nome"
                                        name="nome"
                                        required
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <label
                                            className="text-xs font-medium"
                                            htmlFor="whatsapp"
                                        >
                                            WhatsApp
                                        </label>
                                        <input
                                            id="whatsapp"
                                            name="whatsapp"
                                            className="w-full rounded-md border px-2 py-2 text-sm"
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-medium" htmlFor="email">
                                            E-mail
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            className="w-full rounded-md border px-2 py-2 text-sm"
                                            placeholder="voce@exemplo.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label
                                        className="text-xs font-medium"
                                        htmlFor="mensagem"
                                    >
                                        Mensagem
                                    </label>
                                    <textarea
                                        id="mensagem"
                                        name="mensagem"
                                        required
                                        rows={4}
                                        className="w-full rounded-md border px-2 py-2 text-sm"
                                        placeholder="Conte brevemente qual é a sua necessidade."
                                    />
                                </div>
                            </>
                        )}

                        {feedback && (
                            <p className="text-xs text-muted-foreground">{feedback}</p>
                        )}

                        <DialogFooter className="mt-2">
                            <Button
                                type="button"
                                variant="outline"
                                className="text-xs"
                                onClick={() => setOpen(false)}
                            >
                                Fechar
                            </Button>
                            <Button
                                type="submit"
                                className="text-xs bg-[#890b23] hover:bg-[#6d081b]"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar dados"}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
}
