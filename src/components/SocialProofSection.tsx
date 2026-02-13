import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Goleiros Treinando" },
  { icon: TrendingUp, value: "95%", label: "Satisfação" },
  { icon: Award, value: "3+", label: "Anos de XP" },
  { icon: Target, value: "1k+", label: "Treinos" },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 md:py-32 px-4 bg-muted/10 relative overflow-hidden">
      {/* Background Texture - Tactical Dot Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#1c1e9a 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground tracking-wide mb-4">
            RESULTADOS <span className="text-[#1c1e9a]">COMPROVADOS</span>
          </h2>
          <div className="w-24 h-1 bg-[#1c1e9a] mx-auto rounded-full mb-8"></div>
        </div>

        {/* Scoreboard Stats Bar */}
        <div className="bg-white border border-border rounded-2xl shadow-xl p-8 mb-20 transform hover:-translate-y-1 transition-transform duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center relative group">
                {/* Divider */}
                {i !== 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border"></div>}

                <div className="text-5xl md:text-6xl font-bebas text-[#1c1e9a] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground font-medium uppercase tracking-wider text-xs">
                  <stat.icon className="w-4 h-4 text-[#1c1e9a]" />
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Video Feature */}
        <div className="mt-20">
          <div className="bg-[#1c1e9a] rounded-3xl p-1 md:p-2 shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-700">
            <div className="bg-background rounded-[20px] overflow-hidden relative aspect-video md:aspect-[21/9] flex items-center justify-center border-4 border-white">
              <div className="absolute inset-0 bg-muted/20"></div>
              <div className="text-center relative z-10">
                <div className="w-16 h-16 bg-[#1c1e9a] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">VER DEPOIMENTO EM VÍDEO</h3>
                <p className="text-muted-foreground">Assista a evolução real dos nossos alunos</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
