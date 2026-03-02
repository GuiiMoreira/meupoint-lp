import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { value: 40, suffix: "min", label: "economizados por decisão" },
  { value: 500, suffix: "+", label: "locais mapeados no MVP" },
  { value: 4, suffix: "", label: "moods disponíveis no lançamento" },
  { value: 100, suffix: "%", label: "dados em tempo real" },
];

const StatsSection = () => {
  const counters = stats.map((s) => useCountUp(s.value, 2000));

  return (
    <section className="py-16 px-6 bg-background border-y border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              ref={counters[i].ref}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {counters[i].count}
                {stat.suffix}
              </div>
              <p className="text-muted-foreground font-body text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
