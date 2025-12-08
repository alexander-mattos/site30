"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useChatWoot } from "@/hooks/useChatWoot";

export function ChatWootUserBinding() {
    const { data: session, status } = useSession();
    const { isReady, setUser, resetUser } = useChatWoot();
    const [boundUserId, setBoundUserId] = useState<string | null>(null);

    useEffect(() => {
        // Só tenta vincular quando:
        // - widget pronto
        // - sessão carregada (status !== "loading")
        if (!isReady || status === "loading") return;

        const user = session?.user;

        // Se não há usuário logado → reseta contexto no ChatWoot
        if (!user) {
            if (boundUserId) {
                resetUser();
                setBoundUserId(null);
            }
            return;
        }

        // Se já vinculamos esse userId, não precisa repetir
        if (boundUserId === user.id) return;

        // Chama a API para gerar o identifier_hash
        const bind = async () => {
            try {
                const res = await fetch("/api/chatwoot/identify");
                if (!res.ok) {
                    console.error("Falha ao obter identifier_hash do ChatWoot");
                    return;
                }

                const data = await res.json() as {
                    userId: string;
                    identifierHash: string;
                };

                setUser({
                    id: data.userId,
                    name: user.name || undefined,
                    email: user.email || undefined,
                    // se no futuro tiver telefone, dá pra adicionar aqui:
                    // phoneNumber: (user as any).phone,
                    identifierHash: data.identifierHash,
                });

                setBoundUserId(data.userId);
            } catch (err) {
                console.error("Erro ao vincular usuário ao ChatWoot:", err);
            }
        };

        bind();
    }, [isReady, status, session, setUser, resetUser, boundUserId]);

    // Componente não renderiza nada
    return null;
}
