"use client";

import { Button } from "@/components/ui/button";
import { useChatContext } from "@/context/chat-context";

type ChatVidaEmGrupoButtonProps = {
    origin?: string;
    label?: string;
    className?: string;
};

export function ChatVidaEmGrupoButton({
    origin = "cta_vida_em_grupo",
    label = "Falar sobre Vida em Grupo",
    className,
}: ChatVidaEmGrupoButtonProps) {
    const { isReady, openVidaEmGrupo } = useChatContext();

    const handleClick = () => {
        if (!isReady) return;
        openVidaEmGrupo(origin);
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
