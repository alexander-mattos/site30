import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { prisma } from "@/lib/prisma"
import Link from "next/link"
import { UserActions } from "./user-actions"

async function getUsers() {
    return await prisma.user.findMany({
        orderBy: { createdAt: 'desc' },
    })
}

export default async function AdminUsersPage() {
    const users = await getUsers()

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Usuários</h1>
                <Link href="/admin/users/new">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Novo Usuário</Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Lista de Usuários</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nome</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Função</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Data Cadastro</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                        <td className="p-4 align-middle">{user.name || '-'}</td>
                                        <td className="p-4 align-middle">{user.email}</td>
                                        <td className="p-4 align-middle">{user.role}</td>
                                        <td className="p-4 align-middle">{user.createdAt.toLocaleDateString('pt-BR')}</td>
                                        <td className="p-4 align-middle text-right">
                                            <UserActions userId={user.id} userName={user.name || user.email} />
                                        </td>
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
