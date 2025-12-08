// src/components/home/how-it-works-section.tsx
import { Button } from "@/components/ui/button";

const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ??
    "https://wa.me/5500000000000";

const HowItWorksSection = () => {
    const steps = [
        "Você nos chama no WhatsApp ou solicita a cotação",
        "Analisamos seu risco e seu perfil",
        "Comparamos nas melhores seguradoras",
        "Você escolhe a melhor opção e nós cuidamos da apólice e do sinistro",
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-8">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-[#890b23]">
                    Como funciona o nosso atendimento consultivo
                </h2>
                <p>
                    Um processo simples, guiado e sem burocracia, para você contratar o
                    seguro certo sem perder tempo.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4 text-sm">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm"
                    >
                        <div className="h-8 w-8 rounded-full bg-[#890b23] text-white flex items-center justify-center text-sm font-semibold">
                            {idx + 1}
                        </div>
                        <p>{step}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t text-sm md:text-base">
                <p>
                    <span className="font-semibold text-[#890b23]">
                        Você fala com pessoas. Não com robôs.
                    </span>{" "}
                    Atendimento humano, com explicação clara das coberturas e das
                    exclusões.
                </p>
                <Button className="bg-[#890b23] hover:bg-[#6d081b] text-white px-6" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Falar agora com um especialista
                    </a>
                </Button>
            </div>
        </section>
    );
};

export default HowItWorksSection;
