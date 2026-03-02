import { motion } from "framer-motion";
import { Building2, Users } from "lucide-react";

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const listItem = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.3 + i * 0.1 },
  }),
};

const ValueSection = () => {
  const userBenefits = [
    "Economia de tempo na escolha do rolê",
    "Descoberta de novos lugares todos os dias",
    "Status social através da gamificação",
  ];

  const bizBenefits = [
    "Atração de público em horários de ociosidade",
    "Dados reais sobre o perfil dos clientes",
    "Canal direto de promoção e engajamento",
  ];

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
            custom={0}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="bg-card rounded-2xl p-10 shadow-card border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Para o Usuário
              </h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-lg">
              {userBenefits.map((text, i) => (
                <motion.li
                  key={text}
                  custom={i}
                  variants={listItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent mt-1">●</span>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            custom={1}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="bg-card rounded-2xl p-10 shadow-card border border-border/50 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Para o Estabelecimento
              </h3>
            </div>
            <ul className="space-y-3 text-muted-foreground text-lg">
              {bizBenefits.map((text, i) => (
                <motion.li
                  key={text}
                  custom={i}
                  variants={listItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="text-accent mt-1">●</span>
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
