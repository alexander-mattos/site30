import { NextResponse } from "next/server";
import crypto from "crypto";
import { auth } from "@/lib/auth";

export async function GET() {
    const session = await auth();

    if (!session?.user?.id) {
        return NextResponse.json(
            { error: "Não autenticado" },
            { status: 401 }
        );
    }

    const secret = process.env.CHATWOOT_HMAC_SECRET;

    if (!secret) {
        console.error("CHATWOOT_HMAC_SECRET não configurado");
        return NextResponse.json(
            { error: "Servidor não está configurado para HMAC" },
            { status: 500 }
        );
    }

    const userId = String(session.user.id);

    const identifierHash = crypto
        .createHmac("sha256", secret)
        .update(userId)
        .digest("hex");

    return NextResponse.json({
        userId,
        identifierHash,
    });
}
