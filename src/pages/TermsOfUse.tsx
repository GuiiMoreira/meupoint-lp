import { Link } from "react-router-dom";

const TermsOfUse = () => {
  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-12">
      <div className="container max-w-4xl mx-auto space-y-8">
        <header className="space-y-3">
          <Link to="/" className="text-sm text-primary hover:underline">
            ← Voltar para a página inicial
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold">Termos de Uso</h1>
          <p className="text-muted-foreground">Última atualização: 10 de abril de 2026</p>
        </header>

        <section className="space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            Estes Termos de Uso regulam o acesso e uso do <strong>Lia Chat (MeuPoint)</strong>, serviço operado por
            <strong> ONDI TECNOLOGIA E TURISMO LTDA</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Aceitação</h2>
          <p className="text-sm md:text-base">
            Ao utilizar o serviço, você declara que leu e concorda com estes termos. Caso não concorde,
            interrompa o uso.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Sobre o serviço</h2>
          <p className="text-sm md:text-base">
            O Lia Chat oferece recomendações assistidas por inteligência artificial para eventos e lugares,
            principalmente por meio do WhatsApp.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>As respostas podem conter imprecisões ou informações desatualizadas.</li>
            <li>Eventos, horários, preços e disponibilidade podem mudar sem aviso por parte de terceiros.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Uso permitido</h2>
          <p className="text-sm md:text-base">Você concorda em não:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm md:text-base">
            <li>usar o serviço para atividades ilegais, abusivas ou ofensivas;</li>
            <li>tentar violar mecanismos de segurança, engenharia reversa ou extração indevida de dados;</li>
            <li>utilizar o serviço de forma que prejudique sua estabilidade ou terceiros.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Limitação de responsabilidade</h2>
          <p className="text-sm md:text-base">
            O serviço é fornecido no estado em que se encontra ("como está"), sem garantias de disponibilidade
            contínua, precisão absoluta ou adequação a objetivos específicos. A decisão final sobre comparecer a um
            local/evento é exclusivamente do usuário.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Propriedade intelectual</h2>
          <p className="text-sm md:text-base">
            Conteúdos, marca, identidade visual e componentes do serviço pertencem à ONDI TECNOLOGIA E TURISMO LTDA
            ou a seus licenciadores, quando aplicável.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">6. Contato</h2>
          <p className="text-sm md:text-base">
            Em caso de dúvidas sobre estes termos, fale com nossa equipe em
            {" "}<a className="text-primary hover:underline" href="mailto:contato@meupoint.com.br">contato@meupoint.com.br</a>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsOfUse;
