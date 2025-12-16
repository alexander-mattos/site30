"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { useChatContext } from "@/context/chat-context";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { trackWhatsAppClick, trackGAEvent, trackMetaEvent } from "@/lib/tracking";
import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL || "#";

export function FloatingActions() {
    const [visible, setVisible] = useState(false);
    const { isReady: chatReady, openContatoGeral } = useChatContext();

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // 🔹 Clique de WhatsApp com tracking
    const handleWhatsAppClick = () => {
        trackWhatsAppClick("floating_actions");
        if (whatsappUrl && whatsappUrl !== "#") {
            window.open(whatsappUrl, "_blank");
        }
    };

    // (Opcional) tracking pro chat online
    const handleChatClick = () => {
        if (!chatReady) return;
        openContatoGeral("floating_actions");
    };

    if (!visible) return null;

    return (
        <TooltipProvider delayDuration={150}>
            <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-40">
                {/* Botão Chat Online (ChatWoot) */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            type="button"
                            onClick={handleChatClick}
                            disabled={!chatReady}
                            className={`flex items-center justify-center w-15 h-15 rounded-full shadow-lg transition-all cursor-pointer ${chatReady
                                ? "bg-[#890b23] hover:bg-[#6d081b] hover:scale-105"
                                : "bg-[#ccc] cursor-not-allowed"
                                }`}
                            aria-label="Abrir chat online"
                        >
                            <Avatar className="h-6 w-6">
                                <AvatarImage src="/logos/icon-inverted.svg" />
                                <AvatarFallback>Integro</AvatarFallback> {/* Texto alternativo/fallback */}
                            </Avatar>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="text-xs">
                        Chat online com um especialista
                    </TooltipContent>
                </Tooltip>

                {/* Botão WhatsApp com tracking */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            type="button"
                            onClick={handleWhatsAppClick}
                            aria-label="Fale com a Integro Seguros no WhatsApp"
                            className="rounded-full bg-[#25D366] text-white shadow-lg p-3 md:p-3.5 flex items-center justify-center hover:scale-105 transition-transform"
                        >
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="text-xs">
                        Falar no WhatsApp
                    </TooltipContent>
                </Tooltip>

                {/* Voltar ao topo */}
                <Tooltip>
                    <TooltipTrigger asChild>
                        <button
                            type="button"
                            onClick={scrollToTop}
                            aria-label="Voltar ao topo"
                            className="rounded-full bg-[#111111] text-white shadow-lg p-3 md:p-3.5 flex items-center justify-center hover:scale-105 transition-transform"
                        >
                            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="text-xs">
                        Voltar ao topo
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}
