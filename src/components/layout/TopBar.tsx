"use client";

import { PhoneCall, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function TopBar() {
    return (
        <div className="w-full bg-[#111111] text-white text-[11px] md:text-xs">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 py-2">
                <div className="flex items-center gap-2 text-white/80">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#facc15]" />
                    <span>Atendimento consultivo para profissionais e empresas em todo o Brasil.</span>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="tel:+552141216120"
                        className="hidden sm:inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors"
                    >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>(21) 4121-6120</span>
                    </a>

                    <Link
                        href="https://wa.me/552141216120"
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-white hover:text-white transition-colors"
                    >
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="hidden sm:inline">WhatsApp</span>
                        <span className="sm:hidden">Atendimento</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
