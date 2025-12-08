// app/api/leads/profissionais/route.ts
import { NextResponse } from "next/server";

type LeadProfissionalBody = {
    nome?: string;
    whatsapp?: string;
    profissao?: string;
    contexto?: string;
    email?: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as LeadProfissionalBody;

        const nome = body.nome?.trim();
        const whatsapp = body.whatsapp?.trim();
        const profissao = body.profissao?.trim();
        const contexto = body.contexto?.trim();
        const email = body.email?.trim();

        // validações obrigatórias (mantidas)
        if (!nome || !whatsapp || !profissao) {
            return NextResponse.json(
                { error: "Dados obrigatórios não informados." },
                { status: 400 }
            );
        }

        const webhookUrl = process.env.N8N_WEBHOOK_LEAD_PROFISSIONAL_URL;
        if (!webhookUrl) {
            console.error("N8N_WEBHOOK_LEAD_PROFISSIONAL_URL não configurada");
            return NextResponse.json(
                { error: "Webhook não configurado." },
                { status: 500 }
            );
        }

        // payload que o n8n vai receber (incluindo novos campos)
        const payload = {
            tipoLead: "profissional",
            nome,
            whatsapp,
            profissao,
            contexto: contexto || null,
            email: email || null,
            fonte: "site-integro-home",
            createdAt: new Date().toISOString(),
        };

        const resp = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!resp.ok) {
            const text = await resp.text();
            console.error("Erro ao chamar n8n (lead profissional):", text);
            return NextResponse.json(
                { error: "Falha ao registrar lead." },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Erro na API de lead profissional:", error);
        return NextResponse.json(
            { error: "Erro interno." },
            { status: 500 }
        );
    }
}
