"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Menu, MessageCircle, ChevronDown, User } from "lucide-react";
import Image from "next/image";

export function Header() {
    const whatsappUrl = useMemo(
        () =>
            process.env.NEXT_PUBLIC_WHATSAPP_URL ??
            "https://wa.me/5500000000000",
        []
    );

    return (
        <header className="w-full border-b bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logos/logo-light.svg"
                        alt="Integro Seguros"
                        width={260}
                        height={80}
                        priority
                        className="h-10 w-auto md:h-16"
                    />
                </Link>

                {/* MENU DESKTOP */}
                <nav className="hidden md:flex items-center gap-6">
                    {/* Início */}
                    <Link href="/" className="header-link">
                        Início
                    </Link>

                    {/* Seguros com dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="header-link inline-flex items-center gap-1 focus:outline-none">
                            Seguros
                            <ChevronDown className="w-3 h-3" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="start"
                            className="min-w-60 border-[#f0e2e5]"
                        >
                            <DropdownMenuLabel className="text-[11px] uppercase tracking-[0.14em] text-[#890b23]">
                                Produtos principais
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/seguros/responsabilidade-civil-profissional"
                                    className="flex flex-col gap-0.5 text-xs"
                                >
                                    <span className="font-medium text-[#222]">
                                        Responsabilidade Civil
                                    </span>
                                    <span className="text-[11px] text-[#777]">
                                        Proteção contra reclamações de clientes e pacientes.
                                    </span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/seguros/seguro-empresarial"
                                    className="flex flex-col gap-0.5 text-xs"
                                >
                                    <span className="font-medium text-[#222]">
                                        Seguro Empresarial
                                    </span>
                                    <span className="text-[11px] text-[#777]">
                                        Proteção para estrutura, conteúdo e operação.
                                    </span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/seguros/vida-em-grupo"
                                    className="flex flex-col gap-0.5 text-xs"
                                >
                                    <span className="font-medium text-[#222]">
                                        Vida em Grupo
                                    </span>
                                    <span className="text-[11px] text-[#777]">
                                        Benefício para times, sócios e colaboradores.
                                    </span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/seguros/seguro-de-frota"
                                    className="flex flex-col gap-0.5 text-xs"
                                >
                                    <span className="font-medium text-[#222]">
                                        Seguro de Frota
                                    </span>
                                    <span className="text-[11px] text-[#777]">
                                        Frotas comerciais, serviços e operações que dependem da rua.
                                    </span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem asChild>
                                <Link
                                    href="/seguros"
                                    className="w-full text-[12px] font-medium text-[#890b23]"
                                >
                                    Ver todos os seguros
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Demais páginas pilares */}
                    <Link href="/para-profissionais" className="header-link">
                        Para Profissionais
                    </Link>
                    <Link href="/para-empresas" className="header-link">
                        Para Empresas
                    </Link>
                    <Link href="/sobre" className="header-link">
                        Sobre Nós
                    </Link>
                    <Link href="/blog" className="header-link">
                        Blog
                    </Link>
                    <Link href="/contato" className="header-link">
                        Contato
                    </Link>
                </nav>

                {/* CTA DESKTOP */}
                <div className="hidden md:flex items-center gap-3">
                    <Link href="/login">
                        <Button className="bg-[#890b23] hover:bg-[#6d081b] text-white font-semibold text-sm">
                            <User className="w-4 h-4 mr-1" />
                            Área do Cliente
                        </Button>
                    </Link>
                </div>

                {/* MOBILE: MENU + CTA RESUMIDA */}
                <div className="flex md:hidden items-center gap-2">
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-[#890b23]/20 px-3 py-1 text-[11px] text-[#890b23] font-medium"
                    >
                        <MessageCircle className="w-3.5 h-3.5 mr-1" />
                        WhatsApp
                    </a>

                    <Sheet>
                        <SheetTrigger asChild>
                            <button
                                aria-label="Abrir menu"
                                className="inline-flex items-center justify-center rounded-full border border-[#e0e0e0] p-2 text-[#333] hover:bg-[#f5f5f5] transition-colors"
                            >
                                <Menu className="w-5 h-5" />
                            </button>
                        </SheetTrigger>

                        <SheetContent side="right" className="w-[260px] sm:w-[300px]">
                            <SheetHeader className="sr-only">
                                <SheetTitle>Menu de navegação</SheetTitle>
                                <SheetDescription>
                                    Selecione uma opção de navegação do site Integro Seguros.
                                </SheetDescription>
                            </SheetHeader>
                            <div className="mt-4 space-y-6">
                                {/* Logo / descrição curta */}
                                <div>
                                    <p className="text-xs font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                        Navegação
                                    </p>
                                    <p className="text-base font-semibold text-[#222] mt-1">
                                        Integro Seguros
                                    </p>
                                    <p className="text-[11px] text-[#777] mt-1">
                                        Seguros para profissionais liberais e empresas em todo o Brasil.
                                    </p>
                                </div>

                                {/* Links mobile simples */}
                                <nav className="flex flex-col gap-2">
                                    <SheetClose asChild>
                                        <Link
                                            href="/"
                                            className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[#444] hover:bg-[#f5f5f5] hover:text-[#890b23] transition-colors"
                                        >
                                            Início
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link
                                            href="/seguros"
                                            className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[#444] hover:bg-[#f5f5f5] hover:text-[#890b23] transition-colors"
                                        >
                                            Seguros
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link
                                            href="/para-profissionais"
                                            className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[#444] hover:bg-[#f5f5f5] hover:text-[#890b23] transition-colors"
                                        >
                                            Para Profissionais
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link
                                            href="/para-empresas"
                                            className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[#444] hover:bg-[#f5f5f5] hover:text-[#890b23] transition-colors"
                                        >
                                            Para Empresas
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link
                                            href="/sobre"
                                            className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[#444] hover:bg-[#f5f5f5] hover:text-[#890b23] transition-colors"
                                        >
                                            Sobre Nós
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link
                                            href="/blog"
                                            className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[#444] hover:bg-[#f5f5f5] hover:text-[#890b23] transition-colors"
                                        >
                                            Blog
                                        </Link>
                                    </SheetClose>

                                    <SheetClose asChild>
                                        <Link
                                            href="/contato"
                                            className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-[#444] hover:bg-[#f5f5f5] hover:text-[#890b23] transition-colors"
                                        >
                                            Contato
                                        </Link>
                                    </SheetClose>
                                </nav>

                                {/* CTA Área do Cliente + WhatsApp */}
                                <div className="pt-2 border-t border-dashed border-[#e5e5e5] space-y-3">
                                    <SheetClose asChild>
                                        <Link href="/login">
                                            <Button className="w-full bg-[#890b23] hover:bg-[#6d081b] text-white text-sm">
                                                Área do Cliente
                                            </Button>
                                        </Link>
                                    </SheetClose>

                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 rounded-md border border-[#890b23]/30 px-3 py-2 text-[12px] text-[#890b23] hover:bg-[#890b23]/5 transition-colors"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Falar com um especialista
                                    </a>

                                    <p className="text-[10px] text-[#999]">
                                        Atendimento consultivo, sem compromisso de contratação.
                                    </p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
