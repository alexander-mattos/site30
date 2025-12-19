import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cotação Online | Integro Seguros",
  description:
    "Faça sua cotação de seguros de forma rápida e simplificada diretamente no site da Integro Seguros.",
};

export default function CotacaoOnlinePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 md:py-16 space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-[#890b23]">
        Cotação online
      </h1>
      <p className="text-sm md:text-base text-[#555] max-w-2xl">
        Utilize a ferramenta abaixo para realizar sua cotação de seguro de forma
        rápida e sem compromisso. Basta preencher os dados solicitados e
        acompanhar as opções disponíveis.
      </p>
      <div className="w-full min-h-[600px] md:min-h-[80vh]">
        <iframe
          src="https://integroseguros.corretordigital.site/#/home?simplificado=true"
          className="w-full min-h-[600px] md:min-h-[110vh] bg-white border border-gray-200 rounded-lg shadow-sm"
          title="Cotação online"
        />
      </div>
    </main>
  );
}