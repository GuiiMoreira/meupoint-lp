import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsla(183,82%,43%,0.3),transparent_60%)]" />

      <div className="relative z-10 container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <MapPin className="w-12 h-12 text-primary-foreground/80 mx-auto mb-6 animate-float" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Do clique ao brinde.
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            O MeuPoint começa em Salvador, mas a necessidade de conexão real é
            universal. Estamos construindo a ponte definitiva entre o digital e o
            presencial.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-display font-bold px-10 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Quero participar da lista de espera
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
