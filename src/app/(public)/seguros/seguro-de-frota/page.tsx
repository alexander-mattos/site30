import { Metadata } from "next";
import { MotionSection } from "@/components/ui/motion-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
    Truck,
    Car,
    Route,
    ShieldCheck,
    AlertTriangle,
    Clock4,
    MapPin,
    Gauge,
    CheckCircle2,
} from "lucide-react";
import { SeoSchemaService } from "@/components/seo-schema-service";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
    title: "Seguro de Frota | Integro Seguros",
    description:
        "Seguro de frota para empresas que dependem de veículos na operação: proteção para carros, utilitários, caminhões e equipes que estão na rua todos os dias.",
};

const faqItems = [
    {
        question: "Seguro de frota é só para empresas grandes?",
        answer:
            "Não. Empresas com poucos veículos já podem se beneficiar do seguro de frota, desde que atendam aos requisitos mínimos de cada seguradora. À medida que a frota cresce, as condições podem ficar ainda mais ajustadas à realidade da operação.",
    },
    {
        question: "Qual a diferença entre seguro de frota e seguro individual de veículo?",
        answer:
            "No seguro de frota, a empresa contrata um programa único de seguros para vários veículos, com regras, coberturas e condições negociadas em conjunto. Isso pode trazer mais coerência na gestão e, em muitos casos, ganho operacional e de custo.",
    },
    {
        question: "Posso ter carros de uso misto (pessoal e profissional) dentro da frota?",
        answer:
            "Em muitos casos, sim. É comum que veículos de diretores, sócios ou gestores entrem na frota com uso misto, desde que isso esteja corretamente declarado e aceite pela seguradora.",
    },
    {
        question: "Seguro de frota cobre apenas colisão, roubo e incêndio?",
        answer:
            "Além das coberturas básicas, é possível avaliar responsabilidade civil, assistência 24h, carro reserva, acessórios, vidros e outras extensões, conforme o perfil da frota e o apetite de risco da empresa.",
    },
    {
        question: "Veículos em nome de pessoas físicas podem entrar no seguro de frota da empresa?",
        answer:
            "Algumas seguradoras permitem incluir veículos de sócios ou diretores pessoas físicas dentro da frota empresarial, desde que sigam critérios específicos. Esse ponto precisa ser avaliado caso a caso.",
    },
];

export default function SeguroDeFrotaPage() {
    return (
        <>
            {/* SEO estruturado: Service + FAQ + Breadcrumb */}
            <SeoSchemaService
                serviceName="Seguro de Frota"
                serviceDescription="Seguro de frota estruturado para empresas que utilizam veículos na operação — carros, utilitários e caminhões — com coberturas adaptadas à realidade do negócio."
                urlPath="/seguros/seguro-de-frota"
                faqItems={faqItems}
                providerName="Integro Seguros"
                areaServed="Brasil"
                serviceType="InsuranceAgency"
            />

            <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-12 md:space-y-16">
                {/* Breadcrumb visual */}
                <Breadcrumbs
                    items={[
                        { href: "/", label: "Início" },
                        { href: "/seguros", label: "Seguros" },
                        { href: "/seguros/seguro-de-frota", label: "Seguro de Frota" },
                    ]}
                />

                {/* HERO do produto */}
                <MotionSection
                    delay={0.05}
                    className="grid gap-8 md:grid-cols-2 items-start"
                >
                    <div className="space-y-4">
                        <h5>Seguro de Frota.</h5>
                        <h2>
                            Proteção para veículos que fazem a sua empresa acontecer.
                        </h2>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Entregas, visitas a clientes, transporte de equipes, logística
                            interna… Quando a operação depende de veículos, qualquer sinistro
                            pode significar atraso, perda de receita e desgaste com clientes.
                            O seguro de frota ajuda a reduzir esse impacto.
                        </p>

                        <div className="grid gap-3 text-xs md:text-sm">
                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Truck className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Cobertura para múltiplos veículos
                                    </p>
                                    <p className="text-[#555]">
                                        Estrutura única de seguro para a frota, com regras e
                                        coberturas pensadas para o conjunto, e não apenas para um veículo isolado.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Route className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Foco na continuidade da operação
                                    </p>
                                    <p className="text-[#555]">
                                        A frota volta a rodar o mais rápido possível, reduzindo
                                        impactos em prazos, contratos e rotinas da equipe.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <div className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-[#2b2b2b]">
                                        Desenho sob medida
                                    </p>
                                    <p className="text-[#555]">
                                        Possibilidade de modular coberturas, franquias e serviços
                                        de acordo com o perfil de uso dos veículos e das rotas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lado direito: para que tipo de frota faz mais sentido */}
                    <div className="space-y-4">
                        <AnimatedCard delay={0.1} className="h-full">
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Car className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                        Para quem é
                                    </p>
                                    <h3 className="text-base font-semibold text-[#2b2b2b]">
                                        Empresas que utilizam veículos como parte do seu dia a dia.
                                    </h3>
                                </div>
                            </div>

                            <div className="mt-3 grid gap-3 text-xs text-[#555]">
                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Frotas comerciais e de serviço
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Equipes comerciais em visita a clientes.</li>
                                        <li>Prestações de serviço, manutenção e suporte externo.</li>
                                        <li>Veículos de uso diário por times de campo.</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Logística e entregas
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Empresas que realizam entregas urbanas.</li>
                                        <li>Distribuição regional de produtos e insumos.</li>
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-semibold text-[#333] mb-1">
                                        Frota de executivos e sócios
                                    </p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Veículos em nome da empresa para diretores e gestores.</li>
                                        <li>Possibilidade de uso misto (pessoal/profissional), conforme aceitação.</li>
                                    </ul>
                                </div>
                            </div>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* O que o seguro pode cobrir */}
                <MotionSection delay={0.12} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>O que o seguro de frota pode cobrir.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Assim como no seguro de veículo individual, o seguro de frota
                            pode ter diferentes combinações de coberturas. A diferença é que,
                            aqui, olhamos para o conjunto da operação.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.14}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <ShieldCheck className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Colisão, roubo, furto e incêndio
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Coberturas básicas para danos aos veículos em eventos como
                                colisão, roubo, furto e incêndio, conforme contratação.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.18}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <AlertTriangle className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Responsabilidade civil
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Amparo em casos em que terceiros sofram danos corporais ou
                                materiais em decorrência de acidentes envolvendo veículos da frota.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.22}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Clock4 className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Assistência 24 horas
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Possibilidade de incluir serviços de guincho, socorro mecânico,
                                chaveiro, troca de pneu e outros atendimentos emergenciais.
                            </p>
                        </AnimatedCard>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.24}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Coberturas para regiões específicas
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Ajustes de cobertura para frotas que rodam predominantemente em
                                áreas urbanas, rodovias, regiões com maior incidência de roubo
                                ou rotas específicas.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.26}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Gauge className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Condutores e perfis
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Estruturação do seguro considerando perfis de condutores,
                                políticas internas de direção, uso profissional e misto, entre
                                outros fatores relevantes.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.28}>
                            <div className="flex items-start gap-3">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#890b23]/10 text-[#890b23]">
                                    <Truck className="w-4 h-4" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#890b23]">
                                        Outros serviços e extensões
                                    </h3>
                                </div>
                            </div>
                            <p className="mt-2 text-xs text-[#555]">
                                Conforme a seguradora, podem ser avaliados carro reserva,
                                cobertura para acessórios, rastreadores, entre outros itens.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* Como funciona na prática */}
                <MotionSection delay={0.15} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Como o seguro de frota se encaixa na sua operação.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            O desenho ideal depende de fatores como quantidade de veículos,
                            tipo de uso, rotas, perfil de condutores e políticas internas da
                            empresa. Nosso papel é organizar tudo isso em um programa de seguro coerente.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        <AnimatedCard delay={0.17}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                1. Levantamento da frota
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Entendemos quantos veículos você tem, quais modelos, idades,
                                tipos de uso e quais regiões costumam rodar.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.2}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                2. Desenho de coberturas e franquias
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Ajustamos coberturas, limites e franquias para equilibrar custo
                                e nível de proteção, considerando a realidade da operação.
                            </p>
                        </AnimatedCard>

                        <AnimatedCard delay={0.23}>
                            <p className="text-[11px] font-semibold text-[#890b23] uppercase tracking-[0.14em]">
                                3. Gestão contínua e sinistros
                            </p>
                            <p className="mt-2 text-xs text-[#555]">
                                Apoiamos na inclusão/exclusão de veículos, renovações e
                                condução de sinistros, buscando que a frota volte a rodar o quanto antes.
                            </p>
                        </AnimatedCard>
                    </div>
                </MotionSection>

                {/* FAQ */}
                <MotionSection delay={0.18} className="space-y-4">
                    <div className="space-y-2 max-w-3xl">
                        <h5>Perguntas frequentes sobre seguro de frota.</h5>
                        <p className="text-sm md:text-base text-[#4b4b4b]">
                            Algumas das dúvidas mais comuns de empresas que estão avaliando
                            estruturar ou melhorar o seguro da frota:
                        </p>
                    </div>

                    <div className="space-y-3">
                        {faqItems.map((item) => (
                            <AnimatedCard key={item.question} className="!p-4">
                                <p className="text-sm font-semibold text-[#2b2b2b]">
                                    {item.question}
                                </p>
                                <p className="mt-1 text-xs text-[#555]">{item.answer}</p>
                            </AnimatedCard>
                        ))}
                    </div>
                </MotionSection>

                {/* Chamada final */}
                <MotionSection delay={0.2}>
                    <section className="border border-dashed border-[#890b23]/30 rounded-2xl bg-[#890b23]/5 p-5 md:p-6 text-sm text-[#333] space-y-2">
                        <p className="font-semibold text-[#890b23]">
                            Quer entender qual modelo de seguro de frota faz mais sentido para a sua empresa?
                        </p>
                        <p>
                            A quantidade de veículos, o tipo de rota, a frequência de uso e
                            o histórico de sinistros influenciam diretamente no desenho do
                            seguro. Nosso trabalho é traduzir essa realidade em um programa de
                            proteção claro e funcional.
                        </p>
                        <p className="text-xs text-[#666]">
                            Você pode solicitar um contato consultivo pela home, na seção
                            “Fale com um especialista”, ou pelos canais disponíveis no rodapé do site.
                        </p>
                    </section>
                </MotionSection>
            </main>
        </>
    );
}
