"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  trackContactSubmit,
  trackLeadSubmit,
  trackCtaClick,
} from "@/lib/tracking";

/**
 * Descreve cada campo do formulário genérico.  Um campo deve
 * especificar pelo menos name e label.  O tipo determina se
 * usamos um <Input> ou um <Textarea>.
 */
export type GenericField = {
  /** Nome do campo e chave no payload enviado */
  name: string;
  /** ID do campo */
  id: string;
  /** Rótulo exibido acima do campo */
  label: string;
  /** Tipo HTML do input (text, email, tel, textarea) */
  type?: "text" | "email" | "tel" | "textarea";
  /** Placeholder opcional para o campo */
  placeholder?: string;
  /** Indica se o campo é obrigatório */
  required?: boolean;
};

export type GenericFormProps = {
  /** Lista de campos a serem renderizados */
  fields: GenericField[];
  /** Endpoint da API (ex.: "/api/leads/profissionais") */
  endpoint: string;
  /** Identificador de origem usado nos eventos de rastreamento */
  origin: string;
  /** Tipo de rastreamento: "contact" chama trackContactSubmit, "lead" chama trackLeadSubmit */
  trackingType?: "contact" | "lead";
  /** Mensagem exibida quando a submissão é bem‑sucedida */
  successMessage?: string;
  /** Classe CSS extra para o formulário */
  className?: string;
};

/**
 * Componente de formulário genérico reutilizável.  Ele recebe
 * a configuração de campos, o endpoint e o tipo de rastreamento
 * e lida com estado de carregamento, mensagens e envio.
 */
export function GenericForm({
  fields,
  endpoint,
  origin,
  trackingType = "contact",
  successMessage = "Recebemos seus dados! Em breve entraremos em contato.",
  className,
}: GenericFormProps) {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFeedback(null);
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    // Constrói o payload com base nos campos configurados
    const payload: Record<string, any> = {};
    fields.forEach((field) => {
      payload[field.name] = (formData.get(field.name) as string) || "";
    });
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setFeedback(
          data.error || "Não foi possível enviar sua solicitação. Tente novamente."
        );
      } else {
        setFeedback(successMessage);
        form.reset();
        // Dispara o evento de analytics correspondente
        if (trackingType === "lead") {
          // tipo do lead pode ser derivado do endpoint ou passado como parte da origem
          trackLeadSubmit(origin, endpoint);
        } else {
          trackContactSubmit(origin);
        }
      }
    } catch (error) {
      setFeedback("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={className ?? "space-y-4"}>
      {fields.map((field) => (
        <div key={field.name} className="space-y-1">
          <Label htmlFor={field.id}>{field.label}{field.required ? "*" : null}</Label>
          {field.type === "textarea" ? (
            <Textarea
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23] text-sm"
            />
          ) : (
            <Input
              id={field.id}
              name={field.name}
              type={field.type || "text"}
              placeholder={field.placeholder}
              required={field.required}
              className="bg-neutral-50 border-neutral-200 focus-visible:ring-[#890b23]"
            />
          )}
        </div>
      ))}
      {feedback && (
        <p className="text-[11px] text-[#555] bg-[#f5f5f5] border border-dashed border-[#ddd] rounded-md px-3 py-2">
          {feedback}
        </p>
      )}
      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white inline-flex items-center justify-center gap-2"
      >
        {loading ? "Enviando..." : "Enviar"}
      </Button>
    </form>
  );
}