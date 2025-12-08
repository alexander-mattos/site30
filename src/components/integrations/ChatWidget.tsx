// src/components/integrations/ChatWidget.tsx
"use client";

import Script from "next/script";

type ChatWidgetProps = {
    enabled?: boolean;
};

export function ChatWidget({ enabled = true }: ChatWidgetProps) {
    if (!enabled) return null;

    let baseUrl =
        process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL ||
        "https://chatwoot.seusite.com.br";

    baseUrl = baseUrl.replace(/\/+$/, "");

    const websiteToken =
        process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN ||
        "tokenchatwoot";

    return (
        <>
            {/* Configurações visuais/comportamentais do widget */}
            <Script id="chatwoot-settings" strategy="afterInteractive">
                {`
                    window.chatwootSettings = window.chatwootSettings || {};
                    window.chatwootSettings = {
                        ...window.chatwootSettings,
                        hideMessageBubble: true,
                        showPopoutButton: false,
                        position: "right",
                        locale: "pt_BR",
                        launcherTitle: "Fale com um especialista",
                    };
                `}
            </Script>

            {/* SDK + inicialização */}
            <Script
                id="chatwoot-sdk"
                src={`${baseUrl}/packs/js/sdk.js`}
                strategy="afterInteractive"
                onLoad={() => {
                    if (typeof window === "undefined") return;

                    // @ts-expect-error - vem do script do Chatwoot
                    if (!window.chatwootSDK) {
                        console.error("Chatwoot SDK não encontrado em window.chatwootSDK");
                        return;
                    }

                    // @ts-expect-error - vem do script do Chatwoot
                    window.chatwootSDK.run({
                        websiteToken: websiteToken,
                        baseUrl: baseUrl,
                    });
                }}
            />
        </>
    );
}
