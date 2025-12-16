"use client";

import { Button } from "@/components/ui/button";
import { useChatContext } from "@/context/chat-context";

type ChatContatoGeralButtonProps = {
    origin?: string;
    label?: string;
    className?: string;
};

export function ChatContatoGeralButton({
    origin = "cta_contato_geral",
    label = "Falar com um especialista",
    className,
}: ChatContatoGeralButtonProps) {
    const { isReady, openContatoGeral } = useChatContext();

    const handleClick = () => {
        if (!isReady) return;
        openContatoGeral(origin);
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
