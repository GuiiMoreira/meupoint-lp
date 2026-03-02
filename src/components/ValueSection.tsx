import { motion } from "framer-motion";
import { Building2, Users, BarChart3 } from "lucide-react";

const ValueSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gradient font-display font-semibold text-sm uppercase tracking-widest">
            Proposta de valor
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Valor para <span className="text-gradient">todos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-10 shadow-card border border-border/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Para o Usuário
              </h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-lg">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">●</span>
                Economia de tempo na escolha do rolê
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">●</span>
                Descoberta de novos lugares todos os dias
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">●</span>
                Status social através da gamificação
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-card rounded-2xl p-10 shadow-card border border-border/50"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Para o Estabelecimento
              </h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-lg">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">●</span>
                Atração de público em horários de ociosidade
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">●</span>
                Dados reais sobre o perfil dos clientes
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">●</span>
                Canal direto de promoção e engajamento
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
