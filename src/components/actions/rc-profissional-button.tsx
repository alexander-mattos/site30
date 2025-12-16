"use client";

import { MessageCircle } from "lucide-react";
import { useChatWoot } from "@/hooks/useChatWoot";
import { trackProductVisit, trackWhatsAppClick } from "@/lib/tracking";
import { useEffect } from "react";

const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/552141216120";

export function ChatRCProfissionalButton() {
    const { isReady } = useChatWoot();

    useEffect(() => {
        trackProductVisit("rc_profissional");
    }, []);

    const handleWhatsAppProduto = () => {
        trackWhatsAppClick("produto_rc_profissional");
        window.open(whatsappUrl, "_blank");
    };

    return (
        <button
            type="button"
            onClick={handleWhatsAppProduto}
            disabled={!isReady}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-md transition cursor-pointer ${isReady
                ? "bg-[#890b23] text-white hover:bg-[#6d081b]"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
                }`}
            aria-label="Falar com especialista em RC Profissional"
        >
            <MessageCircle className="w-4 h-4" />
            Falar com especialista em RC Profissional
        </button>
    );
}
