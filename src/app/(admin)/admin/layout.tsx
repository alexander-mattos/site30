import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signOut } from "@/lib/auth"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col md:flex-row">
            {/* Sidebar */}
            <aside className="w-full bg-gray-900 text-white md:w-64 md:min-h-screen">
                <div className="p-6">
                    <h2 className="text-xl font-bold text-orange-500">Integro Admin</h2>
                    <p className="text-sm text-gray-400">Gerenciamento</p>
                </div>
                <nav className="space-y-2 px-4">
                    <Link href="/admin/dashboard" className="block rounded-md px-4 py-2 hover:bg-gray-800">
                        Dashboard
                    </Link>
                    <Link href="/admin/users" className="block rounded-md px-4 py-2 hover:bg-gray-800">
                        Usuários
                    </Link>
                    <Link href="/admin/policies" className="block rounded-md px-4 py-2 hover:bg-gray-800">
                        Apólices
                    </Link>
                    <div className="pt-4 mt-4 border-t border-gray-800">
                        <form
                            action={async () => {
                                "use server"
                                await signOut({ redirectTo: "/client/login" })
                            }}
                        >
                            <button type="submit" className="w-full text-left rounded-md px-4 py-2 hover:bg-red-900/50 text-red-400 hover:text-red-300">
                                Sair
                            </button>
                        </form>
                    </div>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 bg-gray-100 p-8">
                {children}
            </main>
        </div>
    )
}
