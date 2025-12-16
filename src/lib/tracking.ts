// src/lib/tracking.ts

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        fbq?: (...args: any[]) => void;
    }
}

// GA4 genérico
export function trackGAEvent(
    eventName: string,
    params?: Record<string, any>
) {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", eventName, params || {});
}

// Meta Pixel genérico
export function trackMetaEvent(
    eventName: string,
    params?: Record<string, any>
) {
    if (typeof window === "undefined" || !window.fbq) return;
    window.fbq("trackCustom", eventName, params || {});
}

/**
 * Clique em WhatsApp
 * GA4:  whatsapp_click
 * Meta: WhatsAppClick
 */
export function trackWhatsAppClick(origin: string) {
    const payload = { origin };

    trackGAEvent("whatsapp_click", payload);
    trackMetaEvent("WhatsAppClick", payload);
}

/**
 * Envio de contato genérico
 * GA4:  contact_submit
 * Meta: ContactSubmit
 */
export function trackContactSubmit(origin: string) {
    const payload = { origin };

    trackGAEvent("contact_submit", payload);
    trackMetaEvent("ContactSubmit", payload);
}

/**
 * Envio de lead (profissional, empresa, produto, FAQ etc.)
 * GA4:  lead_submit
 * Meta: LeadSubmit
 */
export function trackLeadSubmit(origin: string, tipoLead: string) {
    const payload = { origin, tipoLead };

    trackGAEvent("lead_submit", payload);
    trackMetaEvent("LeadSubmit", payload);
}

/**
 * Clique em CTA (botão que não é WhatsApp nem form)
 * GA4:  cta_click
 * Meta: CTAClick
 */
export function trackCtaClick(origin: string, label?: string) {
    const payload: Record<string, any> = { origin };
    if (label) payload.label = label;

    trackGAEvent("cta_click", payload);
    trackMetaEvent("CTAClick", payload);
}

/**
 * Visita a página de produto
 * GA4:  produto_visit
 * Meta: ProdutoVisit
 */
export function trackProductVisit(produtoKey: string) {
    const payload = { produto: produtoKey };

    trackGAEvent("produto_visit", payload);
    trackMetaEvent("ProdutoVisit", payload);
}

/**
 * Abertura do Chat (ChatWoot)
 * GA4:  chatwoot_open
 * Meta: ChatWootOpen
 */
export function trackChatOpen(origin: string) {
    const payload = { origin };

    trackGAEvent("chatwoot_open", payload);
    trackMetaEvent("ChatWootOpen", payload);
}
