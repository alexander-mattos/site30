// app/api/leads/empresas/route.ts
import { NextResponse } from "next/server";

type LeadEmpresaBody = {
    empresa?: string;
    whatsapp?: string;
    segmento?: string;
    funcionarios?: string;
    contexto?: string;
    email?: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as LeadEmpresaBody;

        const empresa = body.empresa?.trim();
        const whatsapp = body.whatsapp?.trim();
        const segmento = body.segmento?.trim();
        const funcionarios = body.funcionarios?.trim();
        const contexto = body.contexto?.trim();
        const email = body.email?.trim();

        if (!empresa || !whatsapp) {
            return NextResponse.json(
                { error: "Nome da empresa e WhatsApp são obrigatórios." },
                { status: 400 }
            );
        }

        const webhookUrl = process.env.N8N_WEBHOOK_LEAD_EMPRESA_URL;
        if (!webhookUrl) {
            console.error("N8N_WEBHOOK_LEAD_EMPRESA_URL não configurada");
            return NextResponse.json(
                { error: "Webhook não configurado." },
                { status: 500 }
            );
        }

        const payload = {
            tipoLead: "empresa",
            empresa,
            whatsapp,
            segmento: segmento || null,
            funcionarios: funcionarios || null,
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
            console.error("Erro ao chamar n8n (lead empresa):", text);
            return NextResponse.json(
                { error: "Falha ao registrar lead." },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Erro na API de lead empresa:", error);
        return NextResponse.json(
            { error: "Erro interno." },
            { status: 500 }
        );
    }
}
