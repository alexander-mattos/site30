'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function NewPolicyPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        fetch('/api/admin/users/list')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(console.error)
    }, [])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError("")

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const res = await fetch('/api/admin/policies', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })

            if (!res.ok) throw new Error('Falha ao criar apólice')

            router.push('/admin/policies')
            router.refresh()
        } catch (err) {
            setError("Erro ao criar apólice. Tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Nova Apólice</h1>

            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle>Dados da Apólice</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <label htmlFor="userId" className="text-sm font-medium">Cliente</label>
                            <select name="userId" id="userId" className="rounded-md border p-2" required>
                                <option value="">Selecione um cliente</option>
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name} ({user.email})</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="policyNumber" className="text-sm font-medium">Número da Apólice</label>
                            <input name="policyNumber" id="policyNumber" className="rounded-md border p-2" required />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="type" className="text-sm font-medium">Tipo de Seguro</label>
                            <select name="type" id="type" className="rounded-md border p-2" required>
                                <option value="Seguro Auto">Seguro Auto</option>
                                <option value="Seguro de Vida">Seguro de Vida</option>
                                <option value="Seguro Residencial">Seguro Residencial</option>
                                <option value="Seguro Empresarial">Seguro Empresarial</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <label htmlFor="startDate" className="text-sm font-medium">Início Vigência</label>
                                <input name="startDate" id="startDate" type="date" className="rounded-md border p-2" required />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="endDate" className="text-sm font-medium">Fim Vigência</label>
                                <input name="endDate" id="endDate" type="date" className="rounded-md border p-2" required />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="premium" className="text-sm font-medium">Valor do Prêmio (R$)</label>
                            <input name="premium" id="premium" type="number" step="0.01" className="rounded-md border p-2" required />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="status" className="text-sm font-medium">Status</label>
                            <select name="status" id="status" className="rounded-md border p-2">
                                <option value="Ativo">Ativo</option>
                                <option value="Pendente">Pendente</option>
                                <option value="Cancelado">Cancelado</option>
                                <option value="Expirado">Expirado</option>
                            </select>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            {loading ? 'Criando...' : 'Criar Apólice'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
