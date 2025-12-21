export default function ForbiddenPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-md rounded-2xl border p-6">
                <h1 className="text-xl font-semibold">Acesso negado</h1>
                <p className="mt-2 text-sm opacity-80">
                    Você não tem permissão para acessar esta página.
                </p>
                <a className="mt-4 inline-block underline" href="/dashboard">
                    Voltar
                </a>
            </div>
        </main>
    );
}
