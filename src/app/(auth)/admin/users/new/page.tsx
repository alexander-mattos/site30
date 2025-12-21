'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function NewUserPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setLoading(true)
        setError("")

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())

        try {
            const res = await fetch('/api/admin/users', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })

            if (!res.ok) throw new Error('Falha ao criar usuário')

            router.push('/admin/users')
            router.refresh()
        } catch (err) {
            setError("Erro ao criar usuário. Tente novamente.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Novo Usuário</h1>

            <Card className="max-w-2xl">
                <CardHeader>
                    <CardTitle>Dados do Usuário</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium">Nome</label>
                            <input name="name" id="name" className="rounded-md border p-2" required />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <input name="email" id="email" type="email" className="rounded-md border p-2" required />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="password" className="text-sm font-medium">Senha</label>
                            <input name="password" id="password" type="password" className="rounded-md border p-2" required />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="role" className="text-sm font-medium">Função</label>
                            <select name="role" id="role" className="rounded-md border p-2">
                                <option value="CLIENT">Cliente</option>
                                <option value="ADMIN">Administrador</option>
                            </select>
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <Button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            {loading ? 'Criando...' : 'Criar Usuário'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
