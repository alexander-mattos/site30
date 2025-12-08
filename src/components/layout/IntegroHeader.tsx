'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function IntegroHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Header Fixo */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'
                }`}>
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo + Menu */}
                    <div className="flex items-center gap-0">
                        <Link href="/" className={`bg-white rounded-l-lg transition-all duration-300 ${isScrolled ? 'px-4 py-2' : 'px-6 py-3'
                            }`}>
                            <span className={`font-bold transition-all duration-300 ${isScrolled ? 'text-lg' : 'text-2xl'
                                }`}>
                                <span className="text-red-600">Integro</span>
                                <br />
                                <span className={`text-gray-600 transition-all duration-300 ${isScrolled ? 'text-[8px]' : 'text-xs'
                                    }`}>CORRETORA DE SEGUROS</span>
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className={`bg-red-600 text-white rounded-r-lg hover:bg-red-700 transition-all duration-300 ${isScrolled ? 'px-3 py-4' : 'px-4 py-6'
                                }`}
                        >
                            <Menu className={`transition-all duration-300 ${isScrolled ? 'h-5 w-5' : 'h-6 w-6'
                                }`} />
                            <span className={`block mt-1 transition-all duration-300 ${isScrolled ? 'text-[10px]' : 'text-xs'
                                }`}>MENU</span>
                        </button>
                    </div>

                    {/* Área do Cliente (desktop) */}
                    <Link href="/client/login" className="hidden md:block">
                        <Button
                            variant="outline"
                            className={`bg-white/90 hover:bg-white border-red-600 text-red-600 font-semibold transition-all duration-300 ${isScrolled ? 'text-sm py-2' : 'text-base py-3'
                                }`}
                        >
                            <User className="mr-2 h-8 w-8" />
                            Área do Cliente
                        </Button>
                    </Link>

                    {/* Área de Login (desktop) */}
                    <Link href="/admin/login" className="hidden md:block">
                        <Button
                            variant="outline"
                            className={`bg-white/90 hover:bg-white border-red-600 text-red-600 font-semibold transition-all duration-300 ${isScrolled ? 'text-sm py-2' : 'text-base py-3'
                                }`}
                        >
                            Login
                        </Button>
                    </Link>
                </div>
            </header>

            {/* Menu em Tela Cheia */}
            <div className={`fixed inset-0 bg-red-700 z-[100] transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="container mx-auto px-4 py-6 h-full flex flex-col">
                    {/* Header do Menu */}
                    <div className="flex items-center justify-between mb-12">
                        <Link href="/" className="bg-white px-4 py-2 rounded-lg">
                            <span className="text-xl font-bold">
                                <span className="text-red-600">Integro</span>
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white hover:bg-red-800 p-2 rounded-lg transition-colors"
                        >
                            <X className="h-8 w-8" />
                        </button>
                    </div>

                    {/* Conteúdo do Menu */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
                            {/* Para Você */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Para Você</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/products?type=auto" className="hover:underline">Automóvel</Link></li>
                                    <li><Link href="/products?type=residencial" className="hover:underline">Residencial</Link></li>
                                    <li><Link href="/products?type=mobilidade" className="hover:underline">Mobilidade</Link></li>
                                    <li><Link href="/products?type=responsabilidade" className="hover:underline">Responsabilidade Civil Profissional</Link></li>
                                    <li><Link href="/products?type=fianca" className="hover:underline">Fiança Aluguel</Link></li>
                                    <li><Link href="/products?type=saude" className="hover:underline">Plano de Saúde e Odonto</Link></li>
                                    <li><Link href="/products?type=viagem" className="hover:underline">Seguro Viagem</Link></li>
                                    <li><Link href="/products?type=vida" className="hover:underline">Vida</Link></li>
                                </ul>
                            </div>

                            {/* Seu Negócio */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Seu Negócio</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/products?type=empresarial" className="hover:underline">Seguro Empresarial</Link></li>
                                    <li><Link href="/products?type=vida-acidentes" className="hover:underline">Seguro de Vida e Acidentes Pessoais</Link></li>
                                    <li><Link href="/products?type=condominio" className="hover:underline">Seguro Condomínio</Link></li>
                                    <li><Link href="/products?type=deo" className="hover:underline">Seguro D&O</Link></li>
                                    <li><Link href="/products?type=frota" className="hover:underline">Seguro Frota</Link></li>
                                    <li><Link href="/products?type=garantia" className="hover:underline">Seguro Garantia</Link></li>
                                    <li><Link href="/products?type=maquinas" className="hover:underline">Seguro de Máquinas e Equipamentos</Link></li>
                                    <li><Link href="/products?type=rc-civil" className="hover:underline">Seguro de Responsabilidade Civil</Link></li>
                                    <li><Link href="/products?type=engenharia" className="hover:underline">Risco de Engenharia</Link></li>
                                    <li><Link href="/products?type=saude-empresarial" className="hover:underline">Plano de Saúde e Odonto</Link></li>
                                </ul>
                            </div>

                            {/* Ajuda */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Ajuda</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/about" className="hover:underline">Sobre Nós</Link></li>
                                    <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
                                    <li><Link href="/privacy" className="hover:underline">Política de Privacidade e Proteção de Dados</Link></li>
                                </ul>
                            </div>

                            {/* Blog e Contato */}
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Blog</h3>
                                <ul className="space-y-3 mb-8">
                                    <li><Link href="/blog" className="hover:underline">Artigos</Link></li>
                                </ul>

                                <h3 className="text-2xl font-bold mb-6">Contato</h3>
                                <ul className="space-y-3">
                                    <li><Link href="/contact" className="hover:underline">Fale Conosco</Link></li>
                                    <li><Link href="/trabalhe-conosco" className="hover:underline">Trabalhe Conosco</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Redes Sociais */}
                    <div className="flex items-center justify-end gap-4 mt-8 pt-6 border-t border-red-600">
                        <a href="#" className="text-white hover:text-red-200 transition-colors">
                            <Facebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-white hover:text-red-200 transition-colors">
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-white hover:text-red-200 transition-colors">
                            <Instagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-white hover:text-red-200 transition-colors">
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-white hover:text-red-200 transition-colors">
                            <Youtube className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
