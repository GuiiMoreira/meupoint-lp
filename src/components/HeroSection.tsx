import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cidade vibrante com mapa de calor digital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-primary-foreground/90 text-sm font-medium font-body">
              O termômetro da cidade em tempo real
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-6">
            Descubra onde a{" "}
            <span className="text-gradient">energia</span>
            <br />
            está agora
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            O MeuPoint traduz o sentimento da cidade em tempo real. Abra o app,
            escolha seu mood e encontre sua vibe ideal — sem perder tempo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#funcionalidades"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-primary text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg shadow-primary-glow text-lg transition-all"
            >
              Explorar funcionalidades
            </motion.a>
            <motion.a
              href="#manifesto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="border border-primary-foreground/30 backdrop-blur-sm text-primary-foreground font-display font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/10 transition-all"
            >
              Nosso manifesto
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
