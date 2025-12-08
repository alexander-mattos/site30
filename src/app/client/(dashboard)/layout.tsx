import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth"

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full bg-primary text-primary-foreground md:w-64 md:min-h-screen">
                <div className="p-6">
                    <h2 className="text-xl font-bold">Integro Seguros</h2>
                    <p className="text-sm text-primary-foreground/70">Área do Cliente</p>
                </div>
                <nav className="space-y-2 px-4">
                    <Link href="/client/dashboard" className="block rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
                        Dashboard
                    </Link>
                    <Link href="/client/products" className="block rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
                        Meus Produtos
                    </Link>
                    <form
                        action={async () => {
                            "use server"
                            await signOut({ redirectTo: "/client/login" })
                        }}
                    >
                        <button type="submit" className="w-full text-left rounded-md px-4 py-2 hover:bg-red-900/50 text-red-300 hover:text-red-200 transition-colors">
                            Sair
                        </button>
                    </form>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-50 p-8">
                {children}
            </main>
        </div>
    )
}
