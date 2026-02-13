import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Trophy, Zap, Shield, Target } from "lucide-react";

// Icons mapping for visual appeal
const levelIcons = {
  "Iniciante": Target,
  "Intermediário": Shield,
  "Avançado": Zap,
  "Profissional": Trophy
};

const levels = ["Iniciante", "Intermediário", "Avançado", "Profissional"];
const ages = ["Sub-15", "Sub-17", "Sub-20", "Adulto (20+)"];
const goals = [
  "Ganhar explosão e potência",
  "Melhorar agilidade e reflexos",
  "Prevenção de lesões",
  "Preparação física completa",
];

const FunnelSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    { label: "QUAL SEU NÍVEL ATUAL?", options: levels },
    { label: "QUAL SUA FAIXA ETÁRIA?", options: ages },
    { label: "QUAL SEU FOCO PRINCIPAL?", options: goals },
  ];

  const handleSelect = (option: string) => {
    const next = [...answers, option];
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendedPlan = () => {
    if (answers[0] === "Iniciante") return { plan: "Trial", reason: "Comece experimentando o método com segurança por apenas R$ 0,99." };
    if (answers[0] === "Profissional") return { plan: "Anual", reason: "Máximo compromisso, máximo resultado com 40% de desconto." };
    return { plan: "Trimestral", reason: "Melhor custo-benefício para evoluir consistentemente." };
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section id="funil" className="py-24 md:py-32 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern - Matching AboutSection */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase font-bold">Análise Tática</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bebas text-foreground mb-6 tracking-wide leading-tight">
            ENCONTRE SEU <span className="text-primary">PLANO IDEAL</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Responda 3 perguntas rápidas para receber uma recomendação personalizada de treino.
          </p>
        </motion.div>

        {/* Card Container - Light Theme Sporty */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative UI Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -z-10 rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 rounded-full"></div>

          {/* Progress Bar - Energy Style */}
          <div className="flex gap-2 mb-12">
            {questions.map((_, i) => (
              <div
                key={i}
                className="relative h-2 flex-1 rounded-full bg-muted overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: i <= step ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className={`absolute inset-0 ${i < step ? 'bg-primary' : 'bg-primary/50'}`}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10 text-center md:text-left">
                  <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2 block">
                    ETAPA 0{step + 1} // 0{questions.length}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bebas text-foreground tracking-wide">
                    {questions[step].label}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {questions[step].options.map((opt, idx) => (
                    <motion.button
                      key={opt}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group relative flex items-center justify-between p-6 rounded-xl border-2 border-border bg-white hover:border-primary hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)] transition-all duration-300 text-left w-full overflow-hidden"
                      onClick={() => handleSelect(opt)}
                    >
                      <div className="relative z-10 flex items-center gap-4">
                        <span className="text-muted-foreground/50 group-hover:text-primary font-mono text-xl font-bold transition-colors">0{idx + 1}</span>
                        <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{opt}</span>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-8"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-xl rotate-3 border-4 border-white">
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase font-bold">
                  ANÁLISE CONCLUÍDA
                </h3>
                <h4 className="text-muted-foreground mb-6 text-sm">Baseado no seu perfil, recomendamos:</h4>

                <div className="text-4xl md:text-5xl font-bebas text-foreground mb-6 p-6 border-2 border-accent/20 bg-accent/5 rounded-xl inline-block w-full max-w-md mx-auto relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-50"><Trophy size={20} className="text-accent" /></div>
                  <span className="relative z-10">PLANO {getRecommendedPlan().plan.toUpperCase()}</span>
                </div>

                <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed border-l-4 border-primary/20 pl-4 text-left p-4">
                  {getRecommendedPlan().reason}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
                    onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    VER OFERTA EXCLUSIVA
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 border-2 font-bold text-muted-foreground hover:text-foreground"
                    onClick={reset}
                  >
                    NOVA ANÁLISE
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FunnelSection;
