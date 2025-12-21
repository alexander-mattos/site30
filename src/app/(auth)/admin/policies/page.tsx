import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import Link from "next/link"

async function getPolicies() {
    return await prisma.policy.findMany({
        include: { user: true },
        orderBy: { createdAt: 'desc' },
    })
}

export default async function AdminPoliciesPage() {
    const policies = await getPolicies()

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Apólices</h1>
                <Link href="/admin/policies/new">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Nova Apólice</Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Lista de Apólices</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Número</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Cliente</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Tipo</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Validade</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {policies.map((policy) => (
                                    <tr key={policy.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle">{policy.policyNumber}</td>
                                        <td className="p-4 align-middle">{policy.user.name}</td>
                                        <td className="p-4 align-middle">{policy.type}</td>
                                        <td className="p-4 align-middle">{policy.status}</td>
                                        <td className="p-4 align-middle">{policy.endDate.toLocaleDateString('pt-BR')}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
