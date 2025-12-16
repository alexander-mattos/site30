"use client";

import { useCallback, useEffect, useState } from "react";

type ChatContext = {
    lead_type?: "individual" | "empresa" | "vida_em_grupo" | "profissional" | "contato_geral";
    produto_key?: string;
    origin?: string;
};

export type ChatWootUser = {
    id: string; // id único (id do teu user, email, etc.)
    name?: string;
    email?: string;
    phoneNumber?: string;
    avatarUrl?: string;
    identifierHash?: string; // se usar HMAC no ChatWoot
};

export function useChatWoot() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Se o widget já estiver carregado
        if (window.$chatwoot) {
            setIsReady(true);
        }

        // Listener para evento de pronto (se você disparar no init)
        function handleReady() {
            if (window.$chatwoot) {
                setIsReady(true);
            }
        }

        window.addEventListener("chatwoot:ready", handleReady);

        // Fallback: polling até encontrar $chatwoot (com limite de tentativas)
        let attempts = 0;
        const interval = setInterval(() => {
            attempts += 1;

            if (window.$chatwoot) {
                setIsReady(true);
                clearInterval(interval);
            }

            if (attempts > 40) {
                // ~12s de tentativa, depois desiste
                clearInterval(interval);
            }
        }, 500);

        return () => {
            window.removeEventListener("chatwoot:ready", handleReady);
            clearInterval(interval);
        };
    }, []);

    const openWithContext = useCallback((ctx?: ChatContext) => {
        if (!window.$chatwoot) return;

        const pageUrl = typeof window !== "undefined" ? window.location.href : "";

        // Atributos no contato / conversa
        const attrs: Record<string, any> = {
            ...(ctx?.lead_type && { lead_type: ctx.lead_type }),
            ...(ctx?.produto_key && { produto_key: ctx.produto_key }),
            ...(ctx?.origin && { origin: ctx.origin }),
            ...(pageUrl && { page_url: pageUrl }),
        };

        if (Object.keys(attrs).length > 0) {
            window.$chatwoot.setCustomAttributes?.(attrs);

            if (typeof window.$chatwoot.setConversationCustomAttributes === "function") {
                window.$chatwoot.setConversationCustomAttributes(attrs);
            }
        }

        window.$chatwoot.toggle();
    }, []);

    // Fecha o widget (prioriza hide, cai pra toggle se preciso)
    const close = useCallback(() => {
        if (typeof window === "undefined") return;

        if (window.$chatwoot?.hide) {
            window.$chatwoot.hide();
        } else {
            window.$chatwoot?.toggle?.();
        }
    }, []);

    // Alterna (abre/fecha)
    const toggle = useCallback(() => {
        if (!window.$chatwoot) return;
        window.$chatwoot.toggle();
    }, []);

    // Define atributos customizados na conversa (tipo_cliente, origem, etc.)
    const setCustomAttributes = useCallback((attributes: Record<string, any>) => {
        if (typeof window === "undefined") return;
        window.$chatwoot?.setCustomAttributes?.(attributes);
    }, []);

    // Amarra o usuário logado no widget (com HMAC opcional)
    const setUser = useCallback((user: ChatWootUser) => {
        if (typeof window === "undefined") return;

        if (typeof window.$chatwoot?.setUser !== "function") {
            console.warn("ChatWoot ainda não está pronto para setUser");
            return;
        }

        const { id, name, email, phoneNumber, avatarUrl, identifierHash } = user;

        window.$chatwoot.setUser(id, {
            ...(name && { name }),
            ...(email && { email }),
            ...(phoneNumber && { phone_number: phoneNumber }),
            ...(avatarUrl && { avatar_url: avatarUrl }),
            ...(identifierHash && { identifier_hash: identifierHash }),
        });
    }, []);

    // Reseta usuário (logout no widget)
    const resetUser = useCallback(() => {
        if (typeof window === "undefined") return;
        if (typeof window.$chatwoot?.reset !== "function") return;

        window.$chatwoot.reset();
    }, []);

    return {
        isReady,
        openWithContext,
        close,
        toggle,
        setCustomAttributes,
        setUser,
        resetUser,
    };
}
