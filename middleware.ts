// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const isAuthenticated = !!token;
    const userRole = token?.role;
    const { pathname } = req.nextUrl;

    // 1. **Ignorar rotas públicas** (ex.: home, login, cadastro):
    if (
        pathname === "/" ||
        pathname.startsWith("/login") ||
        pathname.startsWith("/cadastro")
    ) {
        return NextResponse.next(); // segue normalmente
    }

    // 2. **Proteger rotas /auth/**: se não autenticado, redireciona para login
    if (pathname.startsWith("/auth") && !isAuthenticated) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // 3. **Evitar acesso à página de login/cadastro por usuário já logado**:
    if (isAuthenticated && (pathname.startsWith("/login") || pathname.startsWith("/cadastro"))) {
        // Usuário logado tentando acessar login – redireciona para dashboard conforme role
        const redirectUrl = userRole === "ADMIN" ? "/admin/dashboard" : "/cliente/dashboard";
        return NextResponse.redirect(new URL(redirectUrl, req.url));
    }

    // 4. **Validação de role**: bloquear acesso de CLIENT a rotas de admin, e vice-versa se aplicável
    if (isAuthenticated && userRole === "CLIENT" && pathname.startsWith("/auth/admin")) {
        // Cliente tentando acessar área admin => redireciona para dashboard do cliente
        return NextResponse.redirect(new URL("/cliente/dashboard", req.url));
    }
    // (Admins podem acessar todas as áreas no nosso cenário, então não bloqueamos rotas de cliente para ADMIN)

    return NextResponse.next(); // autorização concedida, continua para a rota destino
}

// Aplica o middleware para todas rotas dentro de "/auth"
export const config = {
    matcher: ["/auth/:path*"],
};
