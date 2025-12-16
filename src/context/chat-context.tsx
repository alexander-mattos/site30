"use client";

import {
    createContext,
    useCallback,
    useContext,
    ReactNode,
} from "react";
import { useChatWoot } from "@/hooks/useChatWoot";
import { trackChatOpen } from "@/lib/tracking";

type LeadType = "individual" | "empresa" | "vida_em_grupo" | "profissional" | "contato_geral";

type ChatOpenOptions = {
    lead_type?: LeadType;
    produto_key?: string;
    origin?: string;
};

type ChatContextValue = {
    isReady: boolean;
    /**
     * Abre o chat com contexto customizado
     */
    openChat: (options?: ChatOpenOptions) => void;

    /**
     * Atalhos padronizados por tipo de lead/produto
     */
    openIndividual: (originHint?: string) => void;
    openEmpresas: (originHint?: string) => void;
    openVidaEmGrupo: (originHint?: string) => void;
    openProfissional: (originHint?: string) => void;
    openContatoGeral: (originHint?: string) => void;
};

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

function computeOrigin(originHint?: string): string {
    if (originHint) return originHint;

    if (typeof window !== "undefined") {
        const path = window.location.pathname || "/";
        return `chat:${path}`;
    }

    return "chat:unknown";
}

export function ChatProvider({ children }: { children: ReactNode }) {
    const { isReady, openWithContext } = useChatWoot();

    const openChat = useCallback(
        (options?: ChatOpenOptions) => {
            if (!isReady) return;

            const origin = computeOrigin(options?.origin);

            // GA4 + Pixel
            trackChatOpen(origin);

            // repassa para o hook do ChatWoot, que seta custom_attributes
            openWithContext({
                lead_type: options?.lead_type,
                produto_key: options?.produto_key,
                origin,
            });
        },
        [isReady, openWithContext]
    );

    const openIndividual = useCallback(
        (originHint?: string) => {
            openChat({
                lead_type: "individual",
                produto_key: "seguro_individual",
                origin: originHint,
            });
        },
        [openChat]
    );

    const openEmpresas = useCallback(
        (originHint?: string) => {
            openChat({
                lead_type: "empresa",
                produto_key: "seguro_empresarial",
                origin: originHint,
            });
        },
        [openChat]
    );

    const openVidaEmGrupo = useCallback(
        (originHint?: string) => {
            openChat({
                lead_type: "vida_em_grupo",
                produto_key: "vida_em_grupo",
                origin: originHint,
            });
        },
        [openChat]
    );

    const openProfissional = useCallback(
        (originHint?: string) => {
            openChat({
                lead_type: "profissional",
                produto_key: "rc_profissional",
                origin: originHint,
            });
        },
        [openChat]
    );

    const openContatoGeral = useCallback(
        (originHint?: string) => {
            openChat({
                lead_type: "contato_geral",
                produto_key: "geral",
                origin: originHint,
            });
        },
        [openChat]
    );

    return (
        <ChatContext.Provider
            value={{
                isReady,
                openChat,
                openEmpresas,
                openIndividual,
                openVidaEmGrupo,
                openProfissional,
                openContatoGeral,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
}

export function useChatContext() {
    const ctx = useContext(ChatContext);
    if (!ctx) {
        throw new Error("useChatContext must be used within a ChatProvider");
    }
    return ctx;
}
