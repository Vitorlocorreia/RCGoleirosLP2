import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target } from "lucide-react";

// ─── Dados estáticos ──────────────────────────────────────────────────────────

const STATS = [
  { icon: Users,     value: "1000+",  label: "Goleiros Treinando" },
  { icon: TrendingUp, value: "95%",   label: "Satisfação"         },
  { icon: Award,     value: "15+",    label: "Anos de XP"         },
  { icon: Target,    value: "10000+", label: "Treinos"            },
] as const;

const TESTIMONIALS = [
  { id: "VRNPXwJ0ImI", title: "Depoimento — Barata"     },
  { id: "I8CFG7r1hqQ", title: "Depoimento — Bernardo"   },
  { id: "N4PhWRm6UZg", title: "Depoimento — Leo Souza"  },
] as const;

/** Gera URL de embed usando youtube-nocookie (sem cookies de rastreamento) */
function buildEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=0&rel=0&modestbranding=1`;
}

// ─── Sub-componente: Miniatura com lazy-load ──────────────────────────────────

interface VideoCardProps {
  id: string;
  title: string;
  isActive: boolean;
  index: number;
}

/**
 * Exibe a thumbnail do YouTube enquanto o usuário não clicar.
 * Ao clicar, substitui pela iframe — evitando carregar 3 players pesados de uma vez.
 */
function VideoCard({ id, title, isActive, index }: VideoCardProps) {
  const [loaded, setLoaded] = useState(false);
  const thumbUrl = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative min-w-[85vw] md:min-w-0 snap-center transition-all duration-300"
    >
      <div
        className={`rounded-3xl p-1 shadow-2xl transform transition-all duration-500 ${
          isActive
            ? "bg-[#1c1e9a] scale-[1.02] md:bg-[#1c1e9a]/20 md:scale-100 md:hover:bg-[#1c1e9a] md:hover:scale-[1.02]"
            : "bg-[#1c1e9a]/20 scale-100 hover:bg-[#1c1e9a]/60 md:hover:scale-[1.02] md:hover:bg-[#1c1e9a]"
        }`}
      >
        <div className="bg-background rounded-[22px] overflow-hidden relative aspect-video border-2 border-white/10">
          {!loaded ? (
            /* Thumbnail estática até o clique — economia de ~300 KB por vídeo */
            <button
              className="w-full h-full relative"
              onClick={() => setLoaded(true)}
              aria-label={`Assistir: ${title}`}
            >
              <img
                src={thumbUrl}
                alt={title}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/20 transition-colors">
                <div className="w-16 h-16 bg-[#1c1e9a] rounded-full flex items-center justify-center shadow-xl">
                  <svg aria-hidden viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current ml-1">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>
            </button>
          ) : (
            <iframe
              src={buildEmbedUrl(id)}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

const SocialProofSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const index = Math.round(el.scrollLeft / (el.clientWidth * 0.85));
    setActiveIndex((prev) => (index !== prev ? index : prev));
  }, []);

  const scrollToIndex = useCallback((i: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: scrollRef.current.clientWidth * 0.85 * i,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      id="depoimentos"
      aria-label="Resultados e depoimentos"
      className="py-24 md:py-32 px-4 bg-muted/10 relative overflow-hidden"
    >
      {/* Padrão de fundo sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(#1c1e9a 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Cabeçalho */}
        <header className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bebas text-foreground tracking-wide mb-4">
            RESULTADOS <span className="text-[#1c1e9a]">COMPROVADOS</span>
          </h2>
          <div className="w-24 h-1 bg-[#1c1e9a] mx-auto rounded-full mb-8" aria-hidden />
        </header>

        {/* Painel de estatísticas */}
        <div className="bg-white border border-border rounded-2xl shadow-xl p-8 mb-20 hover:-translate-y-1 transition-transform duration-500">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center relative group">
                {i !== 0 && (
                  <div aria-hidden className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" />
                )}
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-5xl md:text-6xl font-bebas text-[#1c1e9a] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </dd>
                <div className="flex items-center justify-center gap-2 text-muted-foreground font-medium uppercase tracking-wider text-xs">
                  <stat.icon className="w-4 h-4 text-[#1c1e9a]" aria-hidden />
                  {stat.label}
                </div>
              </div>
            ))}
          </dl>
        </div>

        {/* Carrossel de depoimentos em vídeo */}
        <div className="mt-20">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 py-6 pb-8 md:pb-6 -mx-4 px-4 md:mx-0 md:px-4 scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
            role="list"
            aria-label="Depoimentos em vídeo"
          >
            {TESTIMONIALS.map((video, idx) => (
              <div key={video.id} role="listitem">
                <VideoCard
                  id={video.id}
                  title={video.title}
                  isActive={idx === activeIndex}
                  index={idx}
                />
              </div>
            ))}
          </div>

          {/* Paginação mobile */}
          <div className="flex justify-center gap-3 mt-8 md:hidden" role="tablist" aria-label="Navegar depoimentos">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                aria-label={`Ir para depoimento ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
                style={{ width: i === activeIndex ? "32px" : "8px" }}
              >
                <div
                  className={`absolute inset-0 transition-colors duration-500 ${
                    i === activeIndex ? "bg-[#1c1e9a]" : "bg-[#1c1e9a]/20"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
