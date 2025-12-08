"use client";

import { PlayCircle, ShieldCheck } from "lucide-react";

const VideoInstitutionalSection = () => {
    return (
        <section className="bg-white border-y">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid gap-10 md:grid-cols-2 items-center">

                {/* Texto à esquerda */}
                <div className="space-y-5">
                    <h5>Conheça quem vai te acompanhar em cada etapa</h5>
                    <h2>Integro Seguros: um atendimento humano, técnico e próximo de você</h2>

                    <p className="text-sm md:text-base text-[#4b4b4b]">
                        Antes de contratar qualquer seguro, é fundamental saber quem estará
                        ao seu lado — na análise de riscos, na contratação e, principalmente,
                        no momento do sinistro. Este vídeo institucional apresenta, de forma
                        clara e objetiva, como trabalhamos e por que tantas empresas e
                        profissionais escolhem a Integro para proteger seus negócios.
                    </p>

                    <div className="flex items-center gap-3 text-xs md:text-sm text-[#444]">
                        <ShieldCheck className="w-4 h-4 text-[#890b23]" />
                        Consultoria especializada • Suporte real • Transparência sempre
                    </div>
                </div>

                {/* Vídeo à direita */}
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-100 shadow-md border border-neutral-200">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/Ne4uP-d0Az4"
                        title="Vídeo institucional Integro Seguros"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    />

                    {/* Overlay opcional decorativo */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white/60 drop-shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoInstitutionalSection;
