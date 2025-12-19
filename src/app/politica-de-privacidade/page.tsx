import { SeoSchemaPage } from "@/components/seo-schema-page";
import { Metadata } from "next";


const SITE =
    process.env.NEXT_PUBLIC_SITE_URL || "https://integroseguros.com.br";

export const metadata: Metadata = {
    title: "Política de privacidade | Integro Seguros",
    description:
        "Política de privacidade da Integro Seguros, explicando como a corretora coleta, utiliza, armazena e protege os dados pessoais de clientes, potenciais clientes, usuários do site e demais titulares de dados, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).",
};

export default function PoliticaDePrivacidadePage() {
    return (
        <>
            <SeoSchemaPage
                title="Política de privacidade | Integro Seguros"
                description="Política de privacidade da Integro Seguros, explicando como a corretora coleta, utiliza, armazena e protege os dados pessoais de clientes, potenciais clientes, usuários do site e demais titulares de dados, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD)."
                url={`${SITE}/politica-de-privacidade`}
            />
            <main className="max-w-4xl mx-auto px-4 py-10 md:py-16 space-y-8">
                <header className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-semibold text-[#890b23]">
                        Política de Privacidade
                    </h1>
                    <p className="text-sm text-[#555]">
                        Esta Política de Privacidade explica como a Integro Seguros coleta,
                        utiliza, armazena e protege os dados pessoais de clientes, potenciais
                        clientes, usuários do site e demais titulares de dados, em conformidade
                        com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
                    </p>
                </header>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">1. Controlador dos dados</h2>
                    <p>
                        A responsável pelo tratamento dos dados pessoais é:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Nome empresarial:</strong> Integro Seguros (ajuste para o nome jurídico completo)</li>
                        <li><strong>CNPJ:</strong> [inserir CNPJ da corretora]</li>
                        <li><strong>E-mail de contato:</strong> contato@integroseguros.com.br</li>
                        <li><strong>Canal de privacidade:</strong> [e-mail ou formulário específico, se houver]</li>
                    </ul>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">2. Dados pessoais que podemos coletar</h2>
                    <p>Os dados coletados variam de acordo com a forma de relacionamento com a Integro Seguros, podendo incluir:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <strong>Dados de identificação:</strong> nome completo, CPF/CNPJ, profissão, cargo, empresa.
                        </li>
                        <li>
                            <strong>Dados de contato:</strong> e-mail, telefone, celular, WhatsApp, endereço.
                        </li>
                        <li>
                            <strong>Dados profissionais e do negócio:</strong> área de atuação, segmento, número aproximado de funcionários, estrutura da operação, informações necessárias para análise de risco.
                        </li>
                        <li>
                            <strong>Dados de navegação no site:</strong> páginas acessadas, tempo de permanência, origem de tráfego, endereço IP, cookies e identificadores semelhantes.
                        </li>
                        <li>
                            <strong>Dados relacionados a seguros:</strong> informações necessárias para cotação, contratação, renovação e gestão de apólices (sempre limitados ao mínimo necessário).
                        </li>
                    </ul>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">3. Finalidades do tratamento de dados</h2>
                    <p>Utilizamos os dados pessoais para as seguintes finalidades principais:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Analisar perfil e necessidades de proteção de profissionais e empresas.</li>
                        <li>Elaborar propostas, cotações e simulações de seguros.</li>
                        <li>Encaminhar informações a seguradoras e parceiros, quando necessário para cotação e contratação.</li>
                        <li>Manter comunicação sobre andamento de propostas, apólices, renovações e sinistros.</li>
                        <li>Enviar conteúdos relevantes sobre seguros, riscos e gestão, quando autorizado pelo titular.</li>
                        <li>Cumprir obrigações legais, regulatórias e contratuais aplicáveis ao mercado de seguros.</li>
                    </ul>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">4. Bases legais utilizadas</h2>
                    <p>O tratamento de dados pessoais pela Integro Seguros se baseia nas seguintes hipóteses da LGPD:</p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Execução de contrato</strong> ou de procedimentos preliminares relacionados a contrato de seguro.</li>
                        <li><strong>Cumprimento de obrigação legal ou regulatória</strong>, inclusive perante SUSEP e demais órgãos competentes.</li>
                        <li><strong>Legítimo interesse</strong> do controlador, sempre respeitando os direitos e liberdades fundamentais do titular.</li>
                        <li><strong>Consentimento</strong> do titular, quando exigido por lei, especialmente para envio de comunicações de marketing.</li>
                    </ul>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">5. Compartilhamento de dados</h2>
                    <p>
                        Os dados pessoais poderão ser compartilhados apenas quando necessário e nas seguintes hipóteses:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            Com <strong>seguradoras e parceiros</strong> envolvidos na análise, cotação, contratação e gestão de apólices.
                        </li>
                        <li>
                            Com <strong>prestadores de serviços</strong> que auxiliam em nossa operação (ex.: provedores de sistemas, CRM, automação, comunicação).
                        </li>
                        <li>
                            Com <strong>autoridades públicas</strong>, para cumprimento de obrigações legais, regulatórias ou por determinação judicial.
                        </li>
                    </ul>
                    <p>
                        Em qualquer caso, buscamos garantir que os terceiros que recebem os dados mantenham níveis adequados de segurança e proteção.
                    </p>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">6. Cookies e dados de navegação</h2>
                    <p>
                        Nosso site pode utilizar cookies e tecnologias semelhantes para melhorar a experiência de navegação,
                        entender o uso das páginas e possibilitar ações de comunicação e análise de performance.
                    </p>
                    <p>
                        Você pode gerenciar as permissões de cookies diretamente nas configurações do seu navegador. O
                        bloqueio de alguns tipos de cookies pode impactar certas funcionalidades do site.
                    </p>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">7. Segurança das informações</h2>
                    <p>
                        Adotamos medidas técnicas e administrativas razoáveis para proteger os dados pessoais sob nossa
                        responsabilidade contra acessos não autorizados, perda, alteração ou qualquer forma de tratamento
                        inadequado ou ilícito.
                    </p>
                    <p>
                        Ainda assim, nenhum sistema é totalmente imune a incidentes. Caso ocorra algum evento relevante, serão
                        adotadas as medidas previstas em lei, incluindo, quando necessário, a comunicação aos titulares e às
                        autoridades competentes.
                    </p>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">8. Direitos dos titulares de dados</h2>
                    <p>
                        Nos termos da LGPD, você possui, entre outros, os seguintes direitos em relação aos seus dados pessoais:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Confirmação da existência de tratamento.</li>
                        <li>Acesso aos dados pessoais que possuímos sobre você.</li>
                        <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                        <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
                        <li>Portabilidade dos dados, nos termos da regulamentação.</li>
                        <li>Informação sobre compartilhamento de dados com terceiros.</li>
                        <li>Revogação de consentimento, quando o tratamento se basear nessa hipótese.</li>
                    </ul>
                    <p>
                        Para exercer seus direitos, você pode entrar em contato pelo e-mail:{" "}
                        <strong>contato@integroseguros.com.br</strong> ou outro canal específico que venha a ser disponibilizado.
                    </p>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">9. Prazo de retenção dos dados</h2>
                    <p>
                        Os dados pessoais são mantidos pelo período necessário para cumprimento das finalidades descritas
                        nesta política, observando:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>prazos de prescrição aplicáveis a direitos e obrigações contratuais;</li>
                        <li>obrigações legais e regulatórias do mercado de seguros;</li>
                        <li>interesses legítimos relacionados à continuidade do relacionamento, dentro dos limites legais.</li>
                    </ul>
                </section>

                <section className="space-y-3 text-sm text-[#333]">
                    <h2 className="h5">10. Atualizações desta política</h2>
                    <p>
                        Esta Política de Privacidade pode ser atualizada periodicamente para refletir alterações na legislação,
                        em nossas práticas de tratamento de dados ou em nossos serviços.
                    </p>
                    <p>
                        A versão mais recente estará sempre disponível em nosso site, na página “Política de Privacidade”.
                    </p>
                </section>

                <section className="space-y-2 text-xs text-[#666]">
                    <p>
                        <strong>Última atualização:</strong> [inserir data da última revisão]
                    </p>
                    <p>
                        Esta política tem caráter informativo e não substitui a consulta a assessoria jurídica especializada
                        para casos específicos.
                    </p>
                </section>
            </main>
        </>
    );
}
