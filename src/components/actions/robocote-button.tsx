"use client";

import { useCallback } from "react";

export default function RobocoteButton() {
    const openChat = useCallback(() => {
        if (typeof window !== "undefined" && (window as any).robocoteOpenChat) {
            (window as any).robocoteOpenChat();
        } else {
            console.warn("Robocote ainda não carregou.");
        }
    }, []);

    return (
        <button
            onClick={openChat}
            className="flex flex-col items-center justify-center hover:opacity-90 transition cursor-pointer"
            title="Cotação Online"
        >
            <img
                src="/logos/icone.png"
                alt="Cotação Online"
                className="w-12 h-12"
            />
            <p className="text-sm mt-1 font-medium">Cotação Online</p>
        </button>
    );
}
