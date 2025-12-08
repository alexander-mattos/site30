import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function getStats() {
    const usersCount = await prisma.user.count()
    const policiesCount = await prisma.policy.count()
    return { usersCount, policiesCount }
}

export default async function AdminDashboardPage() {
    const stats = await getStats()

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard Administrativo</h1>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.usersCount}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total de Apólices</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stats.policiesCount}</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
