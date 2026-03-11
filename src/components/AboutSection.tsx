import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    desc: "Resultados mensuráveis em saltos, velocidade e resistência. Veja sua evolução semana a semana.",
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
    title: "Diminuição de Lesões",
    desc: "Treinamento focado em fortalecer pontos críticos e reduzir riscos de lesões.",
    color: "from-destructive to-red-600",
    shadow: "shadow-red-500/20",
  },
];

const gkImages = [
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.46.jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.47 (1).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.47 (2).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.47.jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.48 (1).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.48 (2).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.48 (3).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.48 (4).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.48 (5).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.48.jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.49 (1).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.49 (2).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.49 (3).jpeg",
  "/imgGk/WhatsApp Image 2026-03-10 at 21.23.49.jpeg",
];

const AboutSection = () => {
  const [currentStartIndex, setCurrentStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStartIndex((prev) => (prev + 3) % gkImages.length);
    }, 5000); // 5 segundos para dar tempo de ver o trio
    return () => clearInterval(timer);
  }, []);

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      images.push(gkImages[(currentStartIndex + i) % gkImages.length]);
    }
    return images;
  };

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

          <h2 className="text-headline text-foreground mb-8 leading-tight uppercase font-bebas tracking-wide">
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
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.color} blur-xl -z-10`} />
              <div className="absolute inset-0 bg-card/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-tl-3xl rounded-br-3xl" />

              <div className="absolute top-4 right-6 text-6xl font-black text-foreground/5 opacity-20 group-hover:opacity-10 transition-opacity select-none" style={{ fontFamily: 'Bebas Neue' }}>
                0{i + 1}
              </div>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-4 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg ${feature.shadow}`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors uppercase tracking-tight font-bebas">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                {feature.desc}
              </p>

              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl group-hover:border-accent transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-3xl group-hover:border-accent transition-colors"></div>
            </motion.div>
          ))}
        </div>

        {/* Improved Image Slideshow Showcase (3x group on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 relative group">
          <AnimatePresence mode="popLayout" initial={false}>
            {getVisibleImages().map((img, i) => (
              <motion.div
                key={`${img}-${i}`}
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={`relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 aspect-[3/4] ${i > 0 ? "hidden md:block" : "block"}`}
              >
                <img
                  src={img}
                  alt={`Goalkeeper training ${i}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                {/* Mobile Legend Overlay (Floating on top of the first image) */}
                {i === 0 && (
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent md:hidden z-20">
                    <div className="mb-2">
                      <span className="px-2 py-0.5 bg-accent text-accent-foreground text-[10px] font-bold rounded uppercase tracking-wider">Metodologia</span>
                    </div>
                    <h3 className="text-2xl font-bebas text-white tracking-wide leading-none mb-1">
                      TREINAMENTO <span className="text-accent">ESPECÍFICO</span>
                    </h3>
                    <p className="text-white/80 text-xs font-light leading-tight">
                      Desenvolvendo agilidade e técnica profissional em cada defesa.
                    </p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none md:block hidden" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Persistent Methodology Text Below the Grid - Hidden on mobile, shown on Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden md:block bg-background/80 border border-border p-8 rounded-3xl shadow-xl relative z-20"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded uppercase tracking-wider">Metodologia Real</span>
                <span className="w-12 h-px bg-primary/20"></span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bebas tracking-wide mb-4">
                TREINAMENTO <span className="text-[#1c1e9a]">ESPECÍFICO</span>
              </h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed border-l-4 border-accent pl-6">
                Cada exercício é pensado para desenvolver as habilidades que você realmente usa em campo.
                <strong className="text-foreground"> Explosão, coordenação e agilidade</strong> em um método validado.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="flex -space-x-3">
                {gkImages.slice(0, 5).map((img, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background overflow-hidden">
                    <img src={img} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-[#1c1e9a] border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                  +9
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
