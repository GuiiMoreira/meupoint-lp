import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="container max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <Link to="/" className="text-sm text-primary hover:underline">
            ← Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold">Política de Privacidade</h1>
          <p className="text-muted-foreground">Última atualização: 10 de abril de 2026</p>
        </header>

        <section className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            Esta Política de Privacidade descreve como a <strong>ONDI TECNOLOGIA E TURISMO LTDA</strong>,
            responsável pelo aplicativo <strong>Lia Chat</strong> e pela marca <strong>MeuPoint</strong>,
            trata dados pessoais ao fornecer recomendações de eventos e lugares via WhatsApp.
          </p>
          <p>
            Se você tiver dúvidas sobre este documento, entre em contato pelo e-mail
            {" "}<a className="text-primary hover:underline" href="mailto:contato@meupoint.com.br">contato@meupoint.com.br</a>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Quem somos</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>Empresa: ONDI TECNOLOGIA E TURISMO LTDA</li>
            <li>Aplicativo/Serviço: Lia Chat (MeuPoint)</li>
            <li>Canal principal: WhatsApp Business API</li>
            <li>Atuação: recomendações assistidas por IA de eventos e lugares</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Dados que tratamos</h2>
          <p className="text-sm md:text-base">
            Operamos com princípio de minimização de dados e não retenção por padrão.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li><strong>Mensagens enviadas:</strong> processadas para gerar respostas no chat.</li>
            <li><strong>Dados de localização:</strong> utilizados apenas quando você fornece localidade para recomendações próximas.</li>
            <li><strong>Metadados técnicos:</strong> informações operacionais mínimas para segurança, prevenção de abuso e estabilidade da plataforma.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Como usamos os dados</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>Responder às suas solicitações no Lia Chat.</li>
            <li>Gerar recomendações de lugares e eventos conforme o contexto da conversa.</li>
            <li>Manter a segurança e integridade do serviço.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Compartilhamento e operadores terceiros</h2>
          <p className="text-sm md:text-base">
            Para operar o serviço, podemos utilizar provedores terceirizados, incluindo plataformas de IA e infraestrutura
            em nuvem. O tratamento por terceiros ocorre exclusivamente para execução das funcionalidades do serviço,
            conforme contratos e requisitos legais aplicáveis.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Armazenamento e retenção</h2>
          <p className="text-sm md:text-base">
            Não armazenamos, em banco de dados persistente de produto, histórico completo de conversas para fins de perfil
            comercial neste estágio. Eventuais registros técnicos essenciais podem ser mantidos por prazo limitado para
            segurança e cumprimento de obrigações legais.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Seus direitos</h2>
          <p className="text-sm md:text-base">
            Você pode solicitar informações sobre tratamento de dados, correção ou exclusão de dados aplicáveis,
            observadas as bases legais e limitações técnicas do serviço, pelo e-mail de contato.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">7. Alterações desta política</h2>
          <p className="text-sm md:text-base">
            Esta política pode ser atualizada a qualquer momento para refletir mudanças legais, regulatórias ou de produto.
            A versão vigente estará sempre publicada nesta URL pública.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
