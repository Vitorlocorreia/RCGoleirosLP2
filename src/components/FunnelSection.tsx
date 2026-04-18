import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Trophy, Zap, Shield, Target } from "lucide-react";

// ─── Dados estáticos ──────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    label: "QUAL SEU NÍVEL ATUAL?",
    options: ["Iniciante", "Intermediário", "Avançado", "Profissional"],
  },
  {
    label: "QUAL SUA FAIXA ETÁRIA?",
    options: ["Sub-15", "Sub-17", "Sub-20", "Adulto (20+)"],
  },
  {
    label: "QUAL SEU FOCO PRINCIPAL?",
    options: [
      "Ganhar explosão e potência",
      "Melhorar agilidade e reflexos",
      "Prevenção de lesões",
      "Preparação física completa",
    ],
  },
] as const;

const RECOMMENDED_PLAN = {
  name: "Trimestral",
  reason:
    "Melhor custo-benefício para evoluir consistentemente com acesso completo à metodologia.",
};

// ─── Utilitários ──────────────────────────────────────────────────────────────

/** Persiste as respostas do funil para uso na página de obrigado */
function saveFunnelData(answers: readonly string[]): void {
  try {
    localStorage.setItem(
      "funnelData",
      JSON.stringify({ nivel: answers[0], idade: answers[1], foco: answers[2] })
    );
  } catch {
    // localStorage indisponível - não é crítico para o fluxo
  }
}

function scrollToPlans(): void {
  document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
}

// ─── Componente principal ─────────────────────────────────────────────────────

const FunnelSection = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = useCallback(
    (option: string) => {
      const next = [...answers, option];
      setAnswers(next);

      if (step < QUESTIONS.length - 1) {
        setStep((s) => s + 1);
      } else {
        saveFunnelData(next);
        setShowResult(true);
      }
    },
    [answers, step]
  );

  const handleReset = useCallback(() => {
    setStep(0);
    setAnswers([]);
    setShowResult(false);
  }, []);

  return (
    <section id="funil" className="py-24 md:py-32 px-4 bg-muted/30 relative overflow-hidden">
      {/* Padrão de fundo */}
      <div aria-hidden className="absolute inset-0 opacity-5 pointer-events-none select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden />
            <span className="text-accent font-mono text-xs tracking-[0.2em] uppercase font-bold">
              Análise Tática
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bebas text-foreground mb-6 tracking-wide leading-tight">
            ENCONTRE SEU <span className="text-primary">PLANO IDEAL</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            Responda 3 perguntas rápidas para receber uma recomendação personalizada de treino.
          </p>
        </motion.div>

        {/* Card do quiz */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decoração de fundo */}
          <div aria-hidden className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -z-10 rounded-full" />
          <div aria-hidden className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-3xl -z-10 rounded-full" />

          {/* Barra de progresso */}
          <div className="flex gap-2 mb-12" role="progressbar" aria-valuemin={0} aria-valuemax={QUESTIONS.length} aria-valuenow={step}>
            {QUESTIONS.map((_, i) => (
              <div key={i} className="relative h-2 flex-1 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: i <= step ? "100%" : "0%" }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                  className={`absolute inset-0 ${i < step ? "bg-primary" : "bg-primary/50"}`}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <QuizStep
                key={step}
                step={step}
                total={QUESTIONS.length}
                label={QUESTIONS[step].label}
                options={QUESTIONS[step].options as unknown as string[]}
                onSelect={handleSelect}
              />
            ) : (
              <QuizResult onViewPlans={scrollToPlans} onReset={handleReset} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// ─── Sub-componentes ──────────────────────────────────────────────────────────

interface QuizStepProps {
  step: number;
  total: number;
  label: string;
  options: string[];
  onSelect: (option: string) => void;
}

function QuizStep({ step, total, label, options, onSelect }: QuizStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-10 text-center md:text-left">
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2 block">
          ETAPA 0{step + 1} // 0{total}
        </span>
        <h3 className="text-3xl md:text-4xl font-bebas text-foreground tracking-wide">{label}</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {options.map((opt, idx) => (
          <motion.button
            key={opt}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex items-center justify-between p-6 rounded-xl border-2 border-border bg-white hover:border-primary hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)] transition-all duration-300 text-left w-full overflow-hidden"
            onClick={() => onSelect(opt)}
          >
            <div className="relative z-10 flex items-center gap-4">
              <span className="text-muted-foreground/50 group-hover:text-primary font-mono text-xl font-bold transition-colors">
                0{idx + 1}
              </span>
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {opt}
              </span>
            </div>
            <ArrowRight
              className="w-5 h-5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10"
              aria-hidden
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

interface QuizResultProps {
  onViewPlans: () => void;
  onReset: () => void;
}

function QuizResult({ onViewPlans, onReset }: QuizResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-center py-8"
    >
      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-6 shadow-xl rotate-3 border-4 border-white">
        <CheckCircle2 className="w-12 h-12 text-white" aria-hidden />
      </div>

      <h3 className="text-sm font-mono text-accent mb-2 tracking-widest uppercase font-bold">
        ANÁLISE CONCLUÍDA
      </h3>
      <p className="text-muted-foreground mb-6 text-sm">Baseado no seu perfil, recomendamos:</p>

      <div className="text-4xl md:text-5xl font-bebas text-foreground mb-6 p-6 border-2 border-accent/20 bg-accent/5 rounded-xl inline-block w-full max-w-md mx-auto relative overflow-hidden">
        <Trophy size={20} className="absolute top-2 right-2 text-accent opacity-50" aria-hidden />
        <span className="relative z-10">PLANO {RECOMMENDED_PLAN.name.toUpperCase()}</span>
      </div>

      <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto leading-relaxed border-l-4 border-primary/20 pl-4 text-left p-4">
        {RECOMMENDED_PLAN.reason}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 text-lg shadow-lg hover:shadow-xl transition-all"
          onClick={onViewPlans}
        >
          VER OFERTA EXCLUSIVA
          <ArrowRight className="ml-2 w-5 h-5" aria-hidden />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-14 border-2 font-bold text-muted-foreground hover:text-foreground"
          onClick={onReset}
        >
          NOVA ANÁLISE
        </Button>
      </div>
    </motion.div>
  );
}

export default FunnelSection;
