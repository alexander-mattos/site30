"use client";

import { useCallback, useEffect, useState } from "react";

type ChatWootUser = {
    id: string; // id único (id do teu user, email, etc.)
    name?: string;
    email?: string;
    phoneNumber?: string;
    avatarUrl?: string;
    identifierHash?: string; // se usar HMAC no ChatWoot
};

type ChatWootAPI = {
    toggle: (state?: "open" | "close") => void;
    setUser?: (id: string, meta: Record<string, any>) => void;
    reset?: () => void;
};

declare global {
    interface Window {
        $chatwoot?: ChatWootAPI;
    }
}

export function useChatWoot() {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.$chatwoot) {
            setIsReady(true);
        }

        function handleReady() {
            if (window.$chatwoot) {
                setIsReady(true);
            }
        }

        window.addEventListener("chatwoot:ready", handleReady);

        return () => {
            window.removeEventListener("chatwoot:ready", handleReady);
        };
    }, []);

    const open = useCallback(() => {
        if (!window.$chatwoot) return;
        window.$chatwoot.toggle("open");
    }, []);

    const close = useCallback(() => {
        if (!window.$chatwoot) return;
        window.$chatwoot.toggle("close");
    }, []);

    const toggle = useCallback(() => {
        if (!window.$chatwoot) return;
        window.$chatwoot.toggle();
    }, []);

    const setUser = useCallback((user: ChatWootUser) => {
        if (!window.$chatwoot || typeof window.$chatwoot.setUser !== "function") {
            console.warn("Chatwoot ainda não está pronto para setUser");
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

    const resetUser = useCallback(() => {
        if (!window.$chatwoot || typeof window.$chatwoot.reset !== "function") {
            return;
        }
        window.$chatwoot.reset();
    }, []);

    return {
        isReady,
        open,
        close,
        toggle,
        setUser,
        resetUser,
    };
}
