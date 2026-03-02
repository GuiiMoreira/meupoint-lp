import { motion } from "framer-motion";
import { Rocket, Palette, Code, Database } from "lucide-react";

const team = [
  {
    name: "Lizandra",
    role: "Growth",
    icon: Rocket,
    description: "O motor de aquisição e escala.",
  },
  {
    name: "João Paulo",
    role: "Marketing & PM",
    icon: Palette,
    description: "O guardião da marca e da jornada do produto.",
  },
  {
    name: "Guilherme",
    role: "Front-end & UX",
    icon: Code,
    description: "O arquiteto da experiência visual e fluidez mobile.",
  },
  {
    name: "Thiago",
    role: "Back-end & Data",
    icon: Database,
    description: "O mestre da infraestrutura e inteligência de dados.",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-background" id="time">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gradient font-display font-semibold text-sm uppercase tracking-widest">
            O Time
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            A força dos <span className="text-gradient">25%</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Uma sociedade horizontal composta por quatro pilares complementares.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-lg p-8 text-center shadow-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="bg-gradient-primary w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5">
                <member.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {member.name}
              </h3>
              <p className="text-gradient font-display font-semibold text-sm mt-1">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mt-3">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
