"use client";

import { useState } from "react";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [msgFeedback, setMsgFeedback] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMsgFeedback(null);
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const nome = (formData.get("nome") as string) || "";
        const telefone = (formData.get("telefone") as string) || "";
        const email = (formData.get("email") as string) || "";
        const mensagem = (formData.get("mensagem") as string) || "";

        try {
            const res = await fetch("/api/leads/contatos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, telefone, email, mensagem }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                setMsgFeedback(
                    data.error ||
                    "Não foi possível enviar sua mensagem. Tente novamente."
                );
            } else {
                setMsgFeedback(
                    "Recebemos sua mensagem! Em breve entraremos em contato."
                );
                form.reset();
            }
        } catch (error) {
            setMsgFeedback("Erro de conexão. Tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AnimatedCard delay={0.12} className="max-w-3xl mx-auto">
            <div className="mb-4 space-y-1">
                <h5>Formulário de contato.</h5>
                <p className="text-xs md:text-sm text-[#555]">
                    Preencha os campos abaixo e conte, com suas palavras, o que você
                    precisa. Pode ser uma cotação específica, revisão de apólice,
                    orientação sobre cobertura ou qualquer dúvida relacionada a seguros.
                </p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
                <div className="space-y-1">
                    <Label htmlFor="nome">Nome completo*</Label>
                    <Input
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        required
                    />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-1">
                        <Label htmlFor="telefone">Telefone / WhatsApp*</Label>
                        <Input
                            id="telefone"
                            name="telefone"
                            placeholder="(21) 99500-0000"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="email">E-mail*</Label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="seuemail@exemplo.com"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="mensagem">Mensagem*</Label>
                    <Textarea
                        id="mensagem"
                        name="mensagem"
                        rows={5}
                        placeholder='Ex.: "Quero cotar seguro de automóvel" ou "Preciso revisar meu seguro empresarial".'
                        required
                    />
                </div>

                <p className="text-[11px] text-[#777]">
                    Quanto mais contexto você puder trazer (tipo de seguro, atividade,
                    cidade, etc.), mais objetiva tende a ser nossa resposta.
                </p>

                {msgFeedback && (
                    <p className="text-[11px] text-[#555] bg-[#f5f5f5] border border-dashed border-[#ddd] rounded-md px-3 py-2">
                        {msgFeedback}
                    </p>
                )}

                <Button
                    type="submit"
                    className="w-full md:w-auto bg-[#890b23] hover:bg-[#6d081b] text-white text-sm mt-1"
                    disabled={loading}
                >
                    {loading ? "Enviando..." : "Enviar mensagem"}
                </Button>
            </form>
        </AnimatedCard>
    );
}
