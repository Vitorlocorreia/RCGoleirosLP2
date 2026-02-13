import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const PromosSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              PRODUTO COMPLEMENTAR
            </span>
          </div>
          <h2 className="text-headline text-foreground mb-6">
            EVOLUÇÃO{" "}
            <span className="text-primary">COMPLETA</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Além do treinamento físico de alto nível, oferecemos produtos que complementam
            sua jornada como goleiro profissional.
          </p>
        </motion.div>

        {/* Course Card - Centered and Larger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card border border-border rounded-3xl p-10 overflow-hidden group hover:shadow-2xl hover:border-primary/30 transition-all duration-300"
        >
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Icon */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary p-6 shadow-xl flex-shrink-0">
                <BookOpen className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-title text-foreground mb-3">
                  CURSO DE EDUCATIVOS TÉCNICOS
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Complemente seu treinamento físico com nosso curso exclusivo de educativos técnicos para goleiros.
                  Torne-se um atleta completo desenvolvendo tanto físico quanto técnica.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "Técnicas de defesa avançadas",
                    "Posicionamento estratégico",
                    "Saída de gol e distribuição",
                    "Jogo aéreo e rebotes",
                  ].map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full md:w-auto font-bold"
                  disabled
                >
                  EM BREVE
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PromosSection;
