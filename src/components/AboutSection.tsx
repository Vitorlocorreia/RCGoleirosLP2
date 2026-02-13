import { motion } from "framer-motion";
import { Target, Zap, Trophy, Shield } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Treinos Específicos",
    desc: "Exercícios direcionados às demandas reais do goleiro em campo. Desenvolvidos por especialistas.",
    color: "from-primary to-secondary",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: Zap,
    title: "Performance Real",
    desc: "Resultados mensuráveis em saltos, reflexos e resistência. Veja sua evolução semana a semana.",
    color: "from-accent to-yellow-500",
    shadow: "shadow-orange-500/20",
  },
  {
    icon: Trophy,
    title: "Método Comprovado",
    desc: "Mais de 500 goleiros já transformaram sua performance com nosso método funcional.",
    color: "from-secondary to-primary",
    shadow: "shadow-blue-600/20",
  },
  {
    icon: Shield,
    title: "Prevenção de Lesões",
    desc: "Treinamento focado em fortalecer pontos críticos e reduzir riscos de lesões.",
    color: "from-destructive to-red-600",
    shadow: "shadow-red-500/20",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern - Preserved */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-12 h-px bg-accent"></span>
            <span className="text-accent font-bold tracking-[0.2em] text-sm uppercase">Por que RC Performance?</span>
            <span className="w-12 h-px bg-accent"></span>
          </div>

          <h2 className="text-headline text-foreground mb-8 leading-tight">
            TREINAMENTO QUE VAI{" "}
            <span className="text-[#1c1e9a] font-black">ALÉM DA MUSCULAÇÃO</span>
          </h2>
          <p className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto font-light">
            Nosso método funcional desenvolve potência, agilidade e explosão específicas para goleiros.
            <span className="text-foreground font-medium"> Prepare-se como um profissional</span>, onde quer que você esteja.
          </p>
        </motion.div>

        {/* Bento Grid Layout with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`group relative bg-card border border-border/50 p-8 hover:border-transparent transition-all duration-500 rounded-tl-3xl rounded-br-3xl`}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.color} blur-xl -z-10`} />
              <div className="absolute inset-0 bg-card/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-tl-3xl rounded-br-3xl" />

              {/* Index Number */}
              <div className="absolute top-4 right-6 text-6xl font-black text-foreground/5 opacity-20 group-hover:opacity-10 transition-opacity select-none" style={{ fontFamily: 'Bebas Neue' }}>
                0{i + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg ${feature.shadow}`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                {feature.desc}
              </p>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl group-hover:border-accent transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-3xl group-hover:border-accent transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {/* Image Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group"
        >
          <img
            src="https://images.pexels.com/photos/30542653/pexels-photo-30542653.jpeg"
            alt="Goalkeeper training exercise by Franco Monsalvo on Pexels"
            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundColor: '#6D7B6A' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* Overlay Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded uppercase tracking-wider">Metodologia</span>
                <span className="w-12 h-px bg-white/40"></span>
              </div>
              <h3 className="text-4xl md:text-5xl font-normal mb-6 font-bebas tracking-wide">
                TREINAMENTO FUNCIONAL <br /> <span className="text-[#1c1e9a]">ESPECÍFICO DE ELITE</span>
              </h3>
              <p className="text-white/80 max-w-2xl text-lg font-light leading-relaxed border-l-4 border-accent pl-6">
                Cada exercício é pensado para desenvolver as habilidades que você realmente usa em campo.
                <strong className="text-white">Explosão, reflexo, agilidade e resistência</strong> em um único método validado por profissionais.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
