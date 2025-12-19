"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Componente reutilizável de chamada para ação (CTA) para convidar o usuário
 * a realizar uma cotação online. Pode ser utilizado em qualquer página do
 * site para direcionar o visitante à página de cotação. Os textos podem ser
 * personalizados via props, mas valores padrões são fornecidos para tornar
 * o uso imediato.
 */
export interface CtaCotacaoOnlineProps {
    /** Título principal exibido no CTA */
    title?: string;
    /** Texto complementar/descritivo */
    subtitle?: string;
    /** Texto exibido no botão de ação */
    buttonText?: string;
}

export default function CtaCotacaoOnline({
    title = "Faça uma cotação online",
    subtitle =
    "Obtenha o seguro ideal para você ou sua empresa de forma rápida e simples.",
    buttonText = "Fazer cotação",
}: CtaCotacaoOnlineProps) {
    return (
        <section className="bg-[#890b23] text-white py-12 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                    {title}
                </h3>
                <p className="text-sm md:text-base opacity-90 max-w-3xl mx-auto">
                    {subtitle}
                </p>
                <Link href="/cotacao-online" className="inline-block">
                    <Button className="bg-white text-[#890b23] hover:bg-neutral-100 hover:text-[#890b23]
                        px-6 py-2 rounded-full font-semibold cursor-pointer">
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </section>
    );
}