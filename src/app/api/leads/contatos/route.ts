import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const nome = body.nome?.trim();
        const whatsapp = body.whatsapp?.trim();
        const email = body.email?.trim();
        const mensagem = body.mensagem?.trim();
        const fonteFromBody = body.fonte?.trim();

        if (!nome || (!whatsapp && !email) || !mensagem) {
            return NextResponse.json(
                {
                    error:
                        "Informe pelo menos nome, uma forma de contato (WhatsApp ou e-mail) e a mensagem.",
                },
                { status: 400 }
            );
        }

        const webhookUrl = process.env.N8N_WEBHOOK_LEAD_CONTATO_GERAL_URL;
        if (!webhookUrl) {
            console.error("N8N_WEBHOOK_LEAD_CONTATO_GERAL_URL não configurada");
            return NextResponse.json(
                { error: "Webhook não configurado." },
                { status: 500 }
            );
        }

        const payload = {
            tipoLead: "contato-geral",
            nome,
            whatsapp,
            email,
            mensagem,
            fonte: fonteFromBody || "site-integro-contato",
            createdAt: new Date().toISOString(),
        };

        const resp = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!resp.ok) {
            const text = await resp.text();
            console.error("Erro ao chamar n8n (contato):", text);
            return NextResponse.json(
                { error: "Falha ao registrar contato." },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Erro na API de contato:", error);
        return NextResponse.json(
            { error: "Erro interno." },
            { status: 500 }
        );
    }
}
