import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#111111] text-white border-t border-[#890b23]/40">
            <div className="max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-8 md:space-y-10">
                <div className="grid gap-8 md:grid-cols-4">
                    {/* Marca / texto institucional */}
                    <div className="space-y-3">
                        <Image
                            src="/logos/logo_light.svg"
                            alt="Integro Seguros"
                            width={160}
                            height={40}
                            className="h-16 w-auto"
                        />
                        <p className="text-xs md:text-sm text-white/70">
                            Corretora especializada em riscos profissionais e empresariais.
                            Atuamos de forma consultiva, ajudando você a proteger o que é
                            essencial para o seu negócio e para a sua carreira.
                        </p>
                    </div>

                    {/* Navegação */}
                    <div className="space-y-3 text-xs md:text-sm">
                        <h4 className="font-semibold text-white">Navegação</h4>
                        <ul className="space-y-1.5 text-white/70">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#para-quem-e"
                                    className="hover:text-white transition-colors"
                                >
                                    Para quem é
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#solucoes"
                                    className="hover:text-white transition-colors"
                                >
                                    Soluções
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#por-que-corretora"
                                    className="hover:text-white transition-colors"
                                >
                                    Por que a Integro?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="hover:text-white transition-colors"
                                >
                                    Conteúdos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#fale-com-especialista"
                                    className="hover:text-white transition-colors"
                                >
                                    Fale com um especialista
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Soluções (atalhos) */}
                    <div className="space-y-3 text-xs md:text-sm">
                        <h4 className="font-semibold text-white">Soluções em destaque</h4>
                        <ul className="space-y-1.5 text-white/70">
                            <li>
                                <Link
                                    href="/seguros/responsabilidade-civil-profissional"
                                    className="hover:text-white transition-colors"
                                >
                                    Responsabilidade Civil Profissional
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/seguros/seguro-empresarial"
                                    className="hover:text-white transition-colors"
                                >
                                    Seguro Empresarial
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/seguros/vida-em-grupo"
                                    className="hover:text-white transition-colors"
                                >
                                    Vida em Grupo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/seguros/seguro-de-frota"
                                    className="hover:text-white transition-colors"
                                >
                                    Frota e Equipamentos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="space-y-3 text-xs md:text-sm">
                        <h4 className="font-semibold text-white">Contato</h4>
                        <ul className="space-y-2 text-white/70">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-white/70" />
                                <span>
                                    <Link
                                        href="mailto:contato@integroseguros.com.br"
                                        className="hover:text-white transition-colors"
                                    >
                                        contato@integroseguros.com.br
                                    </Link>
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-white/70" />
                                <span>
                                    <Link
                                        href="tel:+552141216120"
                                        className="hover:text-white transition-colors"
                                    >
                                        (21) 4121-6120
                                    </Link>
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-white/70 mt-[2px]" />
                                <span>Atendimento remoto em todo o Brasil.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-white/70" />
                                <span>Atendimento em horário comercial (horário de Brasília).</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Linha final */}
                <div className="border-t border-white/10 pt-4 mt-2 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] md:text-xs text-white/50">
                    <p>© {year} Integro Seguros. Todos os direitos reservados.</p>
                    <div className="flex flex-wrap items-center gap-3">
                        <span className="text-white/40">
                            Registro SUSEP 202010610 / Rio de Janeiro - RJ.
                        </span>
                        <span className="text-white/30">•</span>
                        <Link
                            href="/politica-de-privacidade"
                            className="hover:text-white transition-colors"
                        >
                            Política de Privacidade
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
