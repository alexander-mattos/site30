
import { AnimatedCard } from "@/components/ui/animated-card";
import { GenericForm, GenericField } from "@/components/ui/generic-form";

export function ContactForm({ origin = "contato_page" }: { origin?: string }) {

    // Define a configuração dos campos para o formulário de contato
    const fields: GenericField[] = [
        {
            name: "nome",
            id: "nome",
            label: "Nome completo",
            placeholder: "Digite seu nome",
            required: true,
        },
        {
            name: "whatsapp",
            id: "whatsapp",
            label: "Telefone / WhatsApp",
            placeholder: "(21) 99500-0000",
            type: "tel",
            required: true,
        },
        {
            name: "email",
            id: "email",
            label: "E-mail",
            placeholder: "seuemail@exemplo.com",
            type: "email",
            required: true,
        },
        {
            name: "mensagem",
            id: "mensagem",
            label: "Mensagem",
            type: "textarea",
            placeholder:
                'Ex.: "Quero cotar seguro de automóvel" ou "Preciso revisar meu seguro empresarial".',
            required: true,
        },
    ];

    return (
        <AnimatedCard delay={0.12} className="max-w-3xl mx-auto">
            <div className="mb-4 space-y-1">
                <h5>Formulário de contato.</h5>
                <p className="text-xs md:text-sm text-[#555]">
                    Preencha os campos abaixo e conte, com suas palavras, o que você
                    precisa. Pode ser uma cotação específica, revisão de apólice,
                    orientação sobre cobertura ou qualquer dúvida relacionada a seguros.
                </p>
            </div>

            <GenericForm
                fields={fields}
                endpoint="/api/leads/contatos"
                origin={origin}
                trackingType="contact"
                successMessage="Recebemos sua mensagem! Em breve entraremos em contato."
            />
        </AnimatedCard>
    );
}
