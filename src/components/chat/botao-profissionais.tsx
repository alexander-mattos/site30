"use client";

import { Button } from "@/components/ui/button";
import { useChatContext } from "@/context/chat-context";

type ChatProfissionalButtonProps = {
    origin?: string;
    label?: string;
    className?: string;
};

export function ChatProfissionalButton({
    origin = "cta_profissionais",
    label = "Falar com especialista em RC Profissional",
    className,
}: ChatProfissionalButtonProps) {
    const { isReady, openProfissional } = useChatContext();

    const handleClick = () => {
        if (!isReady) return;
        openProfissional(origin);
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
