'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { use } from "react"

export default function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)
    const [error, setError] = useState("")
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        fetch(`/api/admin/users/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Usuário não encontrado")
                return res.json()
            })
            .then(data => {
                setUser(data)
                setFetching(false)
            })
            .catch(err => {
                setError(err.message)
                setFetching(false)
            })
    }, [id])

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError("")

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        // Remove password if empty to avoid overwriting
        if (!data.password) {
            delete data.password
        }

        try {
            const res = await fetch(`/api/admin/users/${id}`, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })

            if (!res.ok) throw new Error('Falha ao atualizar usuário')

            router.push('/admin/users')
            router.refresh()
        } catch (err) {
            setError("Erro ao atualizar usuário. Tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    if (fetching) return <div className="p-8">Carregando...</div>
    if (!user) return <div className="p-8 text-red-500">Usuário não encontrado</div>

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Editar Usuário</h1>

            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle>Dados do Usuário</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium">Nome</label>
                            <input
                                name="name"
                                id="name"
                                defaultValue={user.name}
                                className="rounded-md border p-2"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                defaultValue={user.email}
                                className="rounded-md border p-2"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password" className="text-sm font-medium">Nova Senha (opcional)</label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                className="rounded-md border p-2"
                                placeholder="Deixe em branco para manter a atual"
                            />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="role" className="text-sm font-medium">Função</label>
                            <select
                                name="role"
                                id="role"
                                defaultValue={user.role}
                                className="rounded-md border p-2"
                            >
                                <option value="CLIENT">Cliente</option>
                                <option value="ADMIN">Administrador</option>
                            </select>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <div className="flex gap-4">
                            <Button type="button" variant="outline" onClick={() => router.back()}>
                                Cancelar
                            </Button>
                            <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                {loading ? 'Salvando...' : 'Salvar Alterações'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
