import { motion, type Easing } from "framer-motion";
import { MapPin, Flame, MessageCircle, Trophy, Camera } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Mapa de Calor Dinâmico",
    description: "Visualize em tempo real onde a cidade está bombando. Cores quentes mostram os pontos mais movimentados agora.",
  },
  {
    icon: MapPin,
    title: "Filtros de Mood",
    description: "Date, Agito, Família... escolha seu mood e descubra exatamente a vibe que combina com você.",
  },
  {
    icon: MessageCircle,
    title: "Check-in Social & Chat",
    description: "Faça check-in e desbloqueie um chat exclusivo com quem também está no mesmo lugar. Conexão instantânea.",
  },
  {
    icon: Trophy,
    title: "Gamificação Phygital",
    description: "Ganhe badges, títulos e recompensas reais — descontos e drinks — baseados na sua exploração urbana.",
  },
  {
    icon: Camera,
    title: "Feed de Experiências",
    description: "Uma rede social viva onde fotos e comentários se renovam conforme a vibe do lugar muda.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as Easing },
  },
};

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-background" id="funcionalidades">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gradient font-display font-semibold text-sm uppercase tracking-widest">
            Funcionalidades
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Tudo que você precisa para{" "}
            <span className="text-gradient">viver a cidade</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              whileHover={{
                y: -8,
                boxShadow: "var(--shadow-primary)",
                transition: { duration: 0.3 },
              }}
              className="group relative bg-card rounded-lg p-8 shadow-card border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <motion.div
                className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
