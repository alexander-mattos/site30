"use client";

import { Button } from "@/components/ui/button";
import { useChatContext } from "@/context/chat-context";

type ChatEmpresasButtonProps = {
    origin?: string;
    label?: string;
    className?: string;
};

export function ChatEmpresasButton({
    origin = "cta_empresas",
    label = "Falar com time de empresas",
    className,
}: ChatEmpresasButtonProps) {
    const { isReady, openEmpresas } = useChatContext();

    const handleClick = () => {
        if (!isReady) return;
        openEmpresas(origin);
    };

    return (
        <Button
            type="button"
            disabled={!isReady}
            onClick={handleClick}
            className={className ?? "bg-[#890b23] hover:bg-[#6d081b] text-white"}
        >
            {label}
        </Button>
    );
}
