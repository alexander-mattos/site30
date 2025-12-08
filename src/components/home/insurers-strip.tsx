// src/components/home/insurers-strip.tsx
import Image from "next/image";
import { insurers } from "@/config/insurers";

export function InsurersStrip() {
    return (
        <section className="w-full">
            <div className="mx-auto max-w-5xl px-4 py-4 md:py-6">
                {/* Título enxuto no mobile */}
                <p className="text-[11px] md:text-xs font-medium tracking-wide text-muted-foreground mb-3 md:mb-4">
                    Parceiros das principais seguradoras do mercado
                </p>

                {/* GRID MOBILE FIRST */}
                <div
                    className="
            grid 
            grid-cols-3 
            gap-x-3 gap-y-3
            sm:grid-cols-4
            md:grid-cols-5 
            lg:grid-cols-6
          "
                >
                    {insurers.map((insurer) => (
                        <div
                            key={insurer.name}
                            className="
                relative 
                h-7 md:h-9 
                w-full 
                rounded-md 
                bg-neutral-50 
                flex items-center justify-center 
                grayscale hover:grayscale-0 
                opacity-70 hover:opacity-100 
                transition
              "
                            title={insurer.name}
                        >
                            <Image
                                src={insurer.logo}
                                alt={insurer.name}
                                fill
                                sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 112px"
                                className="object-contain p-1.5 md:p-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
