import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Download, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

// ─── Configuração centralizada - edite aqui os seus links reais ───────────────
const WHATSAPP_SUPPORT_NUMBER = "5584921674972";

const LINKS = {
  mfit: "https://client.mfitpersonal.com.br/out/signup-link/NTM0NDQ2",
} as const;

const VALID_PLANS = ["mensal", "trimestral", "anual"] as const;
type PlanKey = typeof VALID_PLANS[number];

// ─── Utilitários ──────────────────────────────────────────────────────────────

function buildWhatsAppUrl(plan: string): string {
  let msg = `Olá! Acabei de assinar o plano ${plan.toUpperCase()}.`;

  try {
    const raw = localStorage.getItem("funnelData");
    if (raw) {
      const data = JSON.parse(raw) as Record<string, string>;
      msg += "\n\n*Aqui estão as minhas informações do teste:*";
      if (data.nivel) msg += `\n- *Nível Atual:* ${data.nivel}`;
      if (data.idade) msg += `\n- *Faixa Etária:* ${data.idade}`;
      if (data.foco) msg += `\n- *Foco Principal:* ${data.foco}`;
    }
  } catch {
    // localStorage indisponível ou JSON inválido - continua com a mensagem padrão
  }

  return `https://wa.me/${WHATSAPP_SUPPORT_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─── Sub-componente: Step Card ────────────────────────────────────────────────

interface StepCardProps {
  delay: number;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  action: React.ReactNode;
}

function StepCard({ delay, icon, iconBg, title, description, action }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="bg-card border border-border p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-shadow"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {action}
      </div>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

const Obrigado = () => {
  const [searchParams] = useSearchParams();

  // Valida e normaliza o plano recebido via query string
  const plan = useMemo<PlanKey>(() => {
    const raw = searchParams.get("plan")?.toLowerCase() ?? "";
    return VALID_PLANS.includes(raw as PlanKey) ? (raw as PlanKey) : "mensal";
  }, [searchParams]);

  const whatsappUrl = useMemo(() => buildWhatsAppUrl(plan), [plan]);

  // Remove os dados do funil após uso para não vazar entre sessões
  useEffect(() => {
    return () => localStorage.removeItem("funnelData");
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-6 text-center relative overflow-hidden">
      {/* Padrão de fundo sutil */}
      <div aria-hidden className="absolute inset-0 opacity-5 pointer-events-none select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto w-full">
        {/* Cabeçalho / Hero */}
        <motion.header
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center mb-10"
        >
          <img
            src="/logo-rc-goleiros.jpg"
            alt="Logo RC Goleiros"
            className="w-24 h-24 rounded-full object-cover border-4 border-[#1c1e9a]/20 shadow-xl mb-5"
          />
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
            <ShieldCheck className="w-7 h-7 text-white" aria-hidden />
          </div>
          <span className="bg-green-500/10 text-green-600 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Acesso Liberado — Plano {plan.toUpperCase()}
          </span>
          <h1 className="text-5xl md:text-6xl font-bebas text-foreground tracking-wide leading-tight">
            SEJA BEM-VINDO AO{" "}
            <span className="text-[#1c1e9a]">TIME!</span>
          </h1>
          <p className="text-lg text-muted-foreground font-light mt-4">
            Siga os passos abaixo para configurar seu acesso e começar os treinos agora mesmo.
          </p>
        </motion.header>

        {/* Passos */}
        <div className="grid gap-6 text-left">
          <StepCard
            delay={0.1}
            iconBg="bg-primary/10"
            icon={<Download className="w-7 h-7 text-primary" aria-hidden />}
            title="Passo 1: Aplicativo de Treino"
            description="Faça seu cadastro na MFIT para visualizar sua planilha de treinos personalizada."
            action={
              <Button asChild className="w-full md:w-auto font-bold uppercase tracking-wide bg-primary">
                <a href={LINKS.mfit} target="_blank" rel="noreferrer">
                  CADASTRAR NO MFIT <ArrowRight className="ml-2 w-4 h-4" aria-hidden />
                </a>
              </Button>
            }
          />

          <StepCard
            delay={0.2}
            iconBg="bg-[#25D366]/10"
            icon={<Users className="w-7 h-7 text-[#25D366]" aria-hidden />}
            title="Passo 2: Liberação de Acesso"
            description="Envie uma mensagem no nosso WhatsApp informando seu cadastro para que possamos liberar seu acesso na turma correta."
            action={
              <Button asChild className="w-full md:w-auto font-bold uppercase tracking-wide bg-[#25D366] hover:bg-[#128C7E]">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  SOLICITAR LIBERAÇÃO <Users className="ml-2 w-4 h-4" aria-hidden />
                </a>
              </Button>
            }
          />
        </div>

        {/* Rodapé */}
        <p className="mt-12 flex items-center justify-center gap-2 text-muted-foreground text-sm font-medium">
          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" aria-hidden />
          Seu acesso é vitalício enquanto a assinatura estiver ativa.
        </p>
      </div>
    </div>
  );
};

export default Obrigado;
