// src/types/chatwoot.d.ts

export interface ChatWootAPI {
    toggle: (visibility?: "open" | "close") => void;
    show?: () => void;
    hide?: () => void;
    open?: () => void;
    close?: () => void;
    reset?: () => void;
    setUser?: (identifier: string, props?: Record<string, any>) => void;
    setCustomAttributes?: (attributes: Record<string, any>) => void;
    setConversationCustomAttributes?: (attributes: Record<string, any>) => void;
    setLabel?: (label: string) => void;
    setLocale?: (locale: string) => void;
}

declare global {
    interface Window {
        $chatwoot?: ChatWootAPI;
        chatwootSDK?: any;
    }
}

export { };
