import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data - in a real app, fetch from Prisma
const policies = [
    {
        id: 1,
        type: "Seguro Auto",
        policyNumber: "123456789",
        status: "Ativo",
        validity: "10/05/2026",
    },
    {
        id: 2,
        type: "Seguro Residencial",
        policyNumber: "987654321",
        status: "Ativo",
        validity: "22/11/2026",
    },
    {
        id: 3,
        type: "Seguro de Vida",
        policyNumber: "456123789",
        status: "Pendente",
        validity: "01/01/2026",
    },
]

export default function ClientProductsPage() {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Meus Produtos</h1>

            <div className="grid gap-6">
                {policies.map((policy) => (
                    <Card key={policy.id}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-xl font-bold text-primary">
                                {policy.type}
                            </CardTitle>
                            <Badge variant={policy.status === "Ativo" ? "default" : "secondary"}>
                                {policy.status}
                            </Badge>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Número da Apólice</p>
                                    <p className="text-gray-900">{policy.policyNumber}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Validade</p>
                                    <p className="text-gray-900">{policy.validity}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
