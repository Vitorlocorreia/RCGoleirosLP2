import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Constantes ───────────────────────────────────────────────────────────────

const HERO_VIDEO_ID = "JWN16xi2ACc";
const YOUTUBE_EMBED_URL = `https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?controls=1&rel=0&modestbranding=1&loading=lazy`;

const TRUST_AVATARS = [
  { initials: "AG", label: "Aluno AG" },
  { initials: "JP", label: "Aluno JP" },
  { initials: "LM", label: "Aluno LM" },
] as const;

// ─── Utilitários ──────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── Componente principal ─────────────────────────────────────────────────────

const HeroSection = () => {
  return (
    <section
      aria-label="Apresentação RC Performance"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagem de fundo — preload definido no index.html */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <img
          src="/images/hero-training.jpg"
          alt=""
          role="presentation"
          className="w-full h-full object-cover"
          /* fetchpriority é tratado no <link rel="preload"> do index.html */
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Coluna esquerda — texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge de marca */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              <img
                src="/logo-rc-goleiros.jpg"
                alt="Logo RC Goleiros"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full border-2 border-white/20 shadow-lg"
                loading="eager"
              />
              <div className="text-left">
                <p className="text-white/90 text-sm font-bold tracking-wider">RC PERFORMANCE</p>
                <p className="bg-gradient-to-tr from-[#1c1e9a] via-blue-500 to-white text-transparent bg-clip-text text-xs font-bold tracking-wide">
                  TREINAMENTO DE EXCELÊNCIA
                </p>
              </div>
            </motion.div>

            {/* Headline principal — H1 único por página */}
            <h1 className="text-display text-white mb-6 leading-[0.9] drop-shadow-2xl">
              TREINAMENTO
              <br />
              <span className="bg-gradient-to-tr from-[#1c1e9a] via-blue-500 to-white text-transparent bg-clip-text font-black italic tracking-wider filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] pr-2">
                ESPECÍFICO
              </span>
              <br />
              PARA GOLEIROS
            </h1>

            <p className="text-body-lg text-white/80 max-w-xl mb-10 font-light leading-relaxed drop-shadow-md">
              Eleve sua performance com treinos funcionais que vão além da musculação tradicional.{" "}
              <span className="text-white font-medium">Método RC Performance</span> para goleiros de todo o Brasil.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#1c1e9a] hover:bg-[#1c1e9a]/90 text-white text-lg font-bold px-8 h-14 shadow-[0_0_20px_rgba(28,30,154,0.5)] hover:shadow-[0_0_30px_rgba(28,30,154,0.7)] transition-all group relative overflow-hidden"
                onClick={() => scrollTo("planos")}
              >
                <span className="relative z-10 flex items-center">
                  COMEÇAR AGORA
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden />
                </span>
                <div aria-hidden className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 text-lg h-14 px-8 backdrop-blur-sm transition-all shadow-lg"
                onClick={() => scrollTo("sobre")}
              >
                SAIBA MAIS
              </Button>
            </div>

            {/* Indicadores de confiança */}
            <div className="flex flex-wrap items-center gap-8 mt-12 text-white/80 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3" role="group" aria-label="Alunos ativos">
                  {TRUST_AVATARS.map((avatar, i) => (
                    <div
                      key={avatar.initials}
                      className="w-10 h-10 rounded-full bg-slate-800 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-lg"
                      style={{ zIndex: TRUST_AVATARS.length - i }}
                      aria-label={avatar.label}
                    >
                      {avatar.initials}
                    </div>
                  ))}
                </div>
                <div>
                  <span className="block text-white font-bold text-lg leading-none">+1000</span>
                  <span className="text-xs text-white/60 font-medium tracking-wide">GOLEIROS TREINANDO</span>
                </div>
              </div>

              <div className="h-8 w-px bg-white/10 hidden sm:block" aria-hidden />

              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="flex text-accent drop-shadow-md" aria-label="Avaliação 4.9 de 5 estrelas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} aria-hidden className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-white/60 font-medium tracking-wide">4.9/5 AVALIAÇÃO</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna direita — vídeo com lazy iframe (youtube-nocookie) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div aria-hidden className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl opacity-50 animate-pulse-slow" />

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video relative">
                <div aria-hidden className="absolute inset-0 bg-black/20 pointer-events-none z-10" />
                {/* youtube-nocookie: menos cookies, mesma performance */}
                <iframe
                  src={YOUTUBE_EMBED_URL}
                  title="RC Performance — Vídeo de Apresentação"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full relative z-0"
                />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              aria-hidden
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
                  <Play size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Assista agora</p>
                  <p className="text-white/60 text-xs">Vídeo Exclusivo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] tracking-[0.2em] font-medium text-white uppercase">Scroll</span>
        <div aria-hidden className="w-px h-12 bg-gradient-to-b from-white via-white/50 to-transparent" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
