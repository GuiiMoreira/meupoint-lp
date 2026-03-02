import { motion } from "framer-motion";
import { MapPin, Zap, Globe, Users } from "lucide-react";

const AboutSection = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Autenticidade Real-Time",
      desc: "O que importa é o que está acontecendo agora, não o que foi postado ontem.",
    },
    {
      icon: Users,
      title: "Pertencimento",
      desc: "Micro-comunidades instantâneas criadas através do check-in.",
    },
    {
      icon: Globe,
      title: "Inteligência Geolocalizada",
      desc: "Tecnologia de ponta para facilitar encontros humanos reais.",
    },
  ];

  return (
    <section id="sobre" className="py-24 px-6 bg-card">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary font-display font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Quem somos
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            O que é o <span className="text-gradient">MeuPoint</span>?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
            Somos uma plataforma de <strong className="text-foreground">social discovery</strong> e{" "}
            <strong className="text-foreground">inteligência urbana</strong> que conecta pessoas a
            experiências reais em tempo real. Não somos apenas um mapa de lugares —
            somos o sentimento da cidade traduzido em dados, gamificação e comunidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 shadow-card border border-border text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center"
        >
          <MapPin className="w-10 h-10 text-primary-foreground/80 mx-auto mb-4" />
          <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Nossa Visão
          </h3>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto font-body leading-relaxed">
            Ser a maior camada digital sobre a vida física das cidades brasileiras,
            tornando o <em>"não ter o que fazer"</em> um problema obsoleto.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
