import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Shield, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const plans = [
  {
    name: "Trial",
    price: "0,99",
    period: "por 7 dias",
    desc: "Teste o método",
    popular: false,
    badge: "OFERTA ESPECIAL",
    features: [
      "Acesso completo por 7 dias",
      "Todos os treinos específicos",
      "Suporte via WhatsApp",
      "Cancele quando quiser",
    ],
    link: "#",
    hasCoupon: false,
  },
  {
    name: "Mensal",
    price: "49,90",
    period: "/mês",
    desc: "Flexibilidade total",
    popular: false,
    features: [
      "Acesso completo à plataforma",
      "Novos treinos toda semana",
      "Suporte prioritário",
      "Comunidade exclusiva",
      "Acompanhamento de evolução",
    ],
    link: "#",
    hasCoupon: true,
  },
  {
    name: "Trimestral",
    price: "39,90",
    period: "/mês",
    desc: "Melhor custo-benefício",
    popular: true,
    badge: "MAIS POPULAR",
    savings: "Economize 20%",
    features: [
      "Tudo do plano Mensal",
      "20% de desconto total",
      "Avaliação de desempenho",
      "Plano nutricional básico",
      "Acesso a lives exclusivas",
      "Prioridade em novidades",
    ],
    link: "#",
    hasCoupon: true,
  },
  {
    name: "Anual",
    price: "29,90",
    period: "/mês",
    desc: "Máximo desconto",
    popular: false,
    badge: "MELHOR VALOR",
    savings: "Economize 40%",
    features: [
      "Tudo do plano Trimestral",
      "40% de desconto total",
      "Consultoria individual mensal",
      "Acesso vitalício a bônus",
      "Prioridade absoluta",
      "Material exclusivo",
    ],
    link: "#",
    hasCoupon: true,
  },
];

const PlansSection = () => {
  const [coupons, setCoupons] = useState<{ [key: string]: string }>({});
  const [appliedCoupons, setAppliedCoupons] = useState<{ [key: string]: boolean }>({});

  const handleCouponChange = (planName: string, value: string) => {
    setCoupons({ ...coupons, [planName]: value.toUpperCase() });
  };

  const applyCoupon = (planName: string) => {
    const coupon = coupons[planName];
    if (coupon && coupon.length >= 3) {
      setAppliedCoupons({ ...appliedCoupons, [planName]: true });
      // Aqui você pode adicionar validação real do cupom
    }
  };

  return (
    <section id="planos" className="py-24 md:py-32 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
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
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-[#1c1e9a]/10 text-[#1c1e9a] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
              PLANO DE ELITE
            </span>
          </div>
          <h2 className="text-headline text-foreground mb-6">
            COMECE POR{" "}
            <span className="text-[#1c1e9a] font-bebas text-6xl ml-2">R$ 0,99</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Teste o método por 7 dias completos. Depois escolha o plano que melhor se encaixa nos seus objetivos.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-sm text-foreground/70 font-medium">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#1c1e9a]" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#1c1e9a]" />
              <span>Garantia de satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#1c1e9a]" />
              <span>Acesso imediato</span>
            </div>
          </div>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-tl-3xl rounded-br-3xl p-8 flex flex-col group transition-all duration-300 ${plan.popular
                  ? "bg-white border-2 border-[#1c1e9a] shadow-[0_10px_40px_-10px_rgba(28,30,154,0.2)] scale-[1.02] lg:scale-105 z-10"
                  : "bg-white border border-border hover:border-[#1c1e9a]/50 hover:shadow-xl"
                }`}
            >
              {/* Tech Corner Accents */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 rounded-tl-3xl transition-colors ${plan.popular ? "border-[#1c1e9a]" : "border-gray-200 group-hover:border-[#1c1e9a]"}`} />
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 rounded-br-3xl transition-colors ${plan.popular ? "border-[#1c1e9a]" : "border-gray-200 group-hover:border-[#1c1e9a]"}`} />

              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md ${plan.popular
                    ? "bg-[#1c1e9a] text-white"
                    : "bg-accent text-accent-foreground"
                  }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6 relative z-10">
                <h3 className="text-3xl font-bebas text-foreground tracking-wide mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground font-medium">
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6 relative z-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-foreground font-bold">R$</span>
                  <span className={`text-6xl font-bebas ${plan.popular ? "text-[#1c1e9a]" : "text-foreground"}`}>{plan.price}</span>
                </div>
                <p className="text-sm mt-1 text-muted-foreground font-medium">
                  {plan.period}
                </p>
                {plan.savings && (
                  <div className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${plan.popular
                      ? "bg-[#1c1e9a]/10 text-[#1c1e9a]"
                      : "bg-green-100 text-green-700"
                    }`}>
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* Coupon Input */}
              {plan.hasCoupon && (
                <div className="mb-6 relative z-10">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        placeholder="CUPOM"
                        value={coupons[plan.name] || ""}
                        onChange={(e) => handleCouponChange(plan.name, e.target.value)}
                        className={`pl-10 h-10 font-medium bg-muted/20 border-border focus:border-[#1c1e9a] ${appliedCoupons[plan.name] ? "border-green-500" : ""}`}
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => applyCoupon(plan.name)}
                      disabled={!coupons[plan.name] || coupons[plan.name].length < 3}
                      className={`px-4 border-border hover:bg-[#1c1e9a] hover:text-white hover:border-[#1c1e9a] transition-colors ${appliedCoupons[plan.name]
                          ? "bg-green-500 text-white hover:bg-green-600 border-green-500"
                          : ""
                        }`}
                    >
                      {appliedCoupons[plan.name] ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        "OK"
                      )}
                    </Button>
                  </div>
                  {appliedCoupons[plan.name] && (
                    <p className="text-xs mt-2 flex items-center gap-1 text-green-600 font-medium">
                      <Check className="w-3 h-3" />
                      Cupom aplicado com sucesso!
                    </p>
                  )}
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1 relative z-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular
                        ? "bg-[#1c1e9a]/10"
                        : "bg-muted"
                      }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-[#1c1e9a]" : "text-muted-foreground"}`} />
                    </div>
                    <span className="text-sm leading-relaxed text-foreground/80 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full h-12 font-bold uppercase tracking-wide group relative z-10 shadow-lg hover:shadow-xl transition-all ${plan.popular || plan.name === "Trial"
                    ? "bg-[#1c1e9a] text-white hover:bg-[#1c1e9a]/90"
                    : "bg-white text-foreground border-2 border-border hover:border-[#1c1e9a] hover:text-[#1c1e9a]"
                  }`}
              >
                <a href={plan.link} className="flex items-center justify-center gap-2">
                  {plan.name === "Trial" ? "COMEÇAR AGORA" : "ASSINAR"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Precisa de um plano customizado para sua equipe?
          </p>
          <Button variant="outline" size="lg" className="border-[#1c1e9a]/20 text-[#1c1e9a] hover:bg-[#1c1e9a]/5">
            FALAR COM ESPECIALISTA
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
