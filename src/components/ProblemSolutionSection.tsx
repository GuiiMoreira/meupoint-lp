import { motion } from "framer-motion";
import { Clock, Zap, Search } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/50" id="manifesto">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-display font-semibold text-sm uppercase tracking-widest text-muted-foreground">
              O Problema
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              40 minutos decidindo.
              <br />
              <span className="text-muted-foreground">Mesmo lugar de sempre.</span>
            </h2>
            <div className="space-y-5">
              {[
                {
                  icon: Search,
                  text: "Google Maps é utilitário demais — frio, sem alma.",
                },
                {
                  icon: Clock,
                  text: "Instagram é estético demais — muitas vezes fake ou atrasado.",
                },
                {
                  icon: Zap,
                  text: "O excesso de opções gera paralisia de escolha.",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-muted-foreground text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-2xl p-10 shadow-card border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-primary opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <span className="text-gradient font-display font-semibold text-sm uppercase tracking-widest">
                A Cura
              </span>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Abra. Escolha o mood.{" "}
                <span className="text-gradient">Vá.</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                O MeuPoint elimina a dúvida com um Mapa de Calor dinâmico. Escolha
                entre <strong className="text-foreground">Date</strong>,{" "}
                <strong className="text-foreground">Agito</strong> ou{" "}
                <strong className="text-foreground">Família</strong> — e veja onde
                a energia que você busca está concentrada naquele exato momento.
              </p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.4 } },
                }}
              >
                {["🔥 Agito", "💕 Date", "👨‍👩‍👧 Família", "☕ Chill", "🎵 Música"].map(
                  (mood) => (
                    <motion.span
                      key={mood}
                      variants={{
                        hidden: { opacity: 0, scale: 0.7 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="bg-card-gradient border border-primary/20 text-foreground px-4 py-2 rounded-full text-sm font-medium font-display cursor-default"
                    >
                      {mood}
                    </motion.span>
                  )
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
