import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O MeuPoint é gratuito?",
    a: "Sim! O app será gratuito para usuários. Estabelecimentos terão acesso a planos com dashboards e ferramentas de promoção.",
  },
  {
    q: "Quando o app será lançado?",
    a: "Estamos em fase de desenvolvimento do MVP. Entre na lista de espera para ser um dos primeiros a testar quando lançarmos em Salvador.",
  },
  {
    q: "Como funciona o Mapa de Calor?",
    a: "O mapa processa dados de check-ins, redes sociais e fluxo de busca em tempo real para mostrar onde está a energia que você procura naquele momento.",
  },
  {
    q: "Preciso fazer check-in para usar o app?",
    a: "Não é obrigatório, mas ao fazer check-in você desbloqueia funcionalidades exclusivas como o chat do local, badges e recompensas reais.",
  },
  {
    q: "Sou dono de um estabelecimento. Como posso participar?",
    a: "Entre em contato pelo nosso WhatsApp ou e-mail! Oferecemos dashboards com dados reais sobre o perfil dos seus clientes e canal direto de promoção.",
  },
  {
    q: "O MeuPoint estará disponível em outras cidades?",
    a: "Começamos em Salvador, mas a necessidade de conexão real é universal. A expansão para outras cidades brasileiras faz parte do nosso roadmap.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 px-6 bg-muted/50">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-accent/10 text-accent font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Dúvidas
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="font-display font-semibold text-foreground text-left hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
