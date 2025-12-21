// app/cliente/dashboard/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { requireAuth, requireRole } from "@/lib/auth-guards"

export default async function ClienteDashboardPage() {
    const { session } = await requireAuth()
    await requireRole("CLIENT");

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">
                Bem-vindo, {session?.user?.name || "Cliente"}
            </h1>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg text-gray-600">Apólices Ativas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-primary">3</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg text-gray-600">Próximo Vencimento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xl font-bold text-secondary">15/12/2025</p>
                        <p className="text-sm text-gray-500">Seguro Auto</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg text-gray-600">Sinistros em Aberto</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-3xl font-bold text-green-600">0</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Avisos Importantes</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-600">
                        Lembre-se de manter seus dados cadastrais atualizados para garantir a cobertura do seu seguro.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
