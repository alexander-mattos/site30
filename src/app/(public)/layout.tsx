import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ChatWootUserBinding } from "@/components/integrations/ChatWootUserBinding";

export const metadata = {
    title: "Integro Seguros – Seguros para profissionais e empresas",
    description:
        "Seguros sob medida para profissionais liberais e empresas. RC Profissional, Empresarial, Vida em Grupo e Frota. Atendimento consultivo em todo o Brasil.",
    openGraph: {
        title: "Integro Seguros – Seguros para profissionais e empresas",
        description:
            "Proteção profissional e empresarial com atendimento consultivo.",
        url: "https://www.integroseguros.com.br",
        siteName: "Integro Seguros",
        images: [
            {
                url: "/og-image.jpg", // deixe assim, depois criamos sua imagem oficial
                width: 1200,
                height: 630,
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    alternates: {
        canonical: "https://www.integroseguros.com.br",
    },
};


export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <TopBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWootUserBinding />
            <FloatingActions />
        </div>
    );
}
