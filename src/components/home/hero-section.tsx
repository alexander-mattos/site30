// src/components/home/hero-section.tsx
'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { insurers } from "@/config/insurers";
import { ShieldCheck, PhoneCall, LineChart } from "lucide-react";

const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    "https://wa.me/5500000000000";

const HeroSection = () => {
    const scrollToLeadCapture = () => {
        if (typeof document === "undefined") return;
        const el = document.getElementById("lead-capture");
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="border-b bg-gradient-to-b from-[#890b23]/5 via-white to-white">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* LADO ESQUERDO */}
                <div className="space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#890b23]/15 bg-white/80 px-3 py-1 text-[11px] font-semibold text-[#890b23] shadow-sm backdrop-blur">
                        <ShieldCheck className="w-4 h-4" />
                        Especialistas em riscos profissionais e empresariais
                    </span>

                    <div className="space-y-3">
                        <h5>Seguros sob medida para quem vive do próprio trabalho.</h5>
                        <h2>Proteção completa para quem vive do próprio negócio.</h2>
                    </div>

                    <p className="text-sm md:text-base text-[#4b4b4b] max-w-xl">
                        Estruturamos seguros para profissionais liberais e empresas que não
                        podem parar. Atendimento consultivo, comparando coberturas entre
                        seguradoras e acompanhando você do início ao sinistro.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Button
                            size="lg"
                            className="bg-[#890b23] hover:bg-[#6d081b] text-white px-6 cursor-pointer"
                            onClick={scrollToLeadCapture}
                        >
                            Quero proteger meu negócio
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-[#890b23] text-[#890b23] hover:bg-[#890b23]/5 px-6 inline-flex items-center gap-2 cursor-pointer"
                            asChild
                        >
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                            >
                                <PhoneCall className="w-4 h-4" />
                                <span>Falar com especialista no WhatsApp</span>
                            </a>
                        </Button>
                    </div>

                    <div className="flex flex-wrap gap-6 text-xs md:text-sm">
                        <div className="space-y-1">
                            <p className="font-bold text-[#890b23] text-xl md:text-2xl leading-none">
                                +80
                            </p>
                            <p className="text-[#4b4b4b]">empresas atendidas</p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold text-[#890b23] text-xl md:text-2xl leading-none">
                                +200
                            </p>
                            <p className="text-[#4b4b4b]">profissionais protegidos</p>
                        </div>
                        <div className="space-y-1 flex items-start gap-2">
                            <LineChart className="w-5 h-5 text-[#890b23] mt-[2px]" />
                            <div>
                                <p className="font-bold text-[#890b23] text-sm">
                                    Registro SUSEP 202010610
                                </p>
                                <p className="text-[#4b4b4b] text-xs md:text-sm">
                                    Atendimento em todo o Brasil
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* LADO DIREITO */}
                <div className="space-y-6">
                    {/* CARD SEGURADORAS */}
                    <div className="rounded-2xl border border-[#890b23]/10 bg-white p-5 md:p-6 shadow-sm">
                        <p className="text-xs md:text-sm font-semibold mb-4 text-[#1f1f1f] flex items-center gap-2">
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                <ShieldCheck className="w-3 h-3" />
                            </span>
                            Parceiros das principais seguradoras do mercado
                        </p>

                        <div className="grid grid-cols-3 gap-x-3 gap-y-3 opacity-90">
                            {insurers.map((insurer) => (
                                <div
                                    key={insurer.name}
                                    className="h-12 md:h-22 relative rounded-md bg-neutral-50 flex items-center justify-center grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition"
                                    title={insurer.name}
                                >
                                    <Image
                                        src={insurer.logo}
                                        alt={insurer.name}
                                        fill
                                        sizes="(max-width: 768px) 80px, 112px"
                                        className="object-contain p-1.5 md:p-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CARD ATENDIMENTO CONSULTIVO + MINI IMAGEM */}
                    <div className="rounded-2xl border border-[#890b23]/15 bg-[#890b23]/5 p-4 md:p-5 text-sm flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                        <div className="flex-1 space-y-1.5">
                            <p className="font-semibold text-[#890b23] flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                Atendimento consultivo, sem letras miúdas.
                            </p>
                            <p className="text-[#3b3b3b] text-xs md:text-sm">
                                Você fala com pessoas, não com robôs. Analisamos seu risco,
                                estruturamos as apólices com as seguradoras e acompanhamos
                                você em toda a jornada do seguro.
                            </p>
                        </div>

                        {/* mini imagem / avatar corretor – substitua por uma foto real depois */}
                        <div className="shrink-0">
                            <div className="relative h-20 w-24 md:h-24 md:w-28 rounded-xl overflow-hidden border border-white/60 shadow-sm bg-white">
                                <Image
                                    src="/images/corretor-atendimento.png"
                                    alt="Corretor da Integro em atendimento consultivo"
                                    fill
                                    sizes="112px"
                                    className="object-contain"
                                />
                            </div>
                            <p className="mt-2 text-[11px] text-[#555] leading-tight">
                                <span className="font-semibold text-[#890b23]">
                                    Integro Seguros
                                </span>
                                <br />
                                Consultoria 100% focada no seu risco.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
