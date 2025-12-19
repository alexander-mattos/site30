import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { TopBar } from "@/components/layout/TopBar";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ChatWootUserBinding } from "@/components/integrations/ChatWootUserBinding";
import { ChatProvider } from "@/context/chat-context";
import { AnalyticsScripts } from "@/components/analytics/analytics-scripts";
import type { ReactNode } from "react";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/integrations/ChatWidget";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.integroseguros.com.br"),
  title: {
    default: "Integro Seguros | Corretora de Seguros para Profissionais e Empresas",
    template: "%s | Integro Seguros",
  },
  description:
    "Corretora de seguros especializada em profissionais liberais e empresas em todo o Brasil. Seguro empresarial, responsabilidade civil profissional, vida, frota e muito mais.",
  keywords: "corretora de seguros, seguros empresariais, seguros profissionais, seguros de vida, seguros de frota, seguros de responsabilidade civil profissional, seguros de responsabilidade civil empresarial, seguros de responsabilidade civil",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.integroseguros.com.br",
    images: [
      {
        url: "https://www.integroseguros.com.br/images/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Integro Seguros",
      },
    ],
    siteName: "Integro Seguros",
    title: "Integro Seguros | Corretora de Seguros para Profissionais e Empresas",
    description:
      "Proteção sob medida para quem vive do próprio negócio. Seguros profissionais e empresariais em todo o Brasil.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Integro Seguros",
  url: "https://www.integroseguros.com.br",
  logo: "https://www.integroseguros.com.br/logos/logo-light.svg",
  telephone: "+55-21-4121-6120",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "Country",
    name: "Brasil",
  },
  sameAs: [
    "https://www.instagram.com/integrosegurosoficial",
    "https://www.linkedin.com/company/integrosegurosoficial",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Integro Seguros",
  url: "https://www.integroseguros.com.br",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.integroseguros.com.br/busca?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />

      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <AuthProvider>
          <ChatProvider>
            <div className="flex min-h-screen flex-col">
              <TopBar />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <ChatWootUserBinding />
              <FloatingActions />
            </div>
            <AnalyticsScripts />

            {/* Script SDK ChatWoot */}
            <ChatWidget />
          </ChatProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
