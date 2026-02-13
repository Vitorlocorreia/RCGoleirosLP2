import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/29719231/pexels-photo-29719231.jpeg"
          alt="Professional goalkeeper making a diving save by Franco Monsalvo on Pexels"
          className="w-full h-full object-cover"
          style={{ backgroundColor: '#67A2A6' }}
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        {/* Subtle Pattern */}
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Logo Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10"
            >
              <img
                src="/logo-rc-goleiros.jpg"
                alt="RC Goleiros"
                className="w-12 h-12 rounded-full border-2 border-white/20 shadow-lg"
              />
              <div className="text-left">
                <p className="text-white/90 text-sm font-bold tracking-wider">RC PERFORMANCE</p>
                <p className="text-[#1c1e9a] text-xs font-medium tracking-wide">TREINAMENTO DE ELITE</p>
              </div>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-display text-white mb-6 leading-[0.9] drop-shadow-2xl">
              TREINAMENTO
              <br />
              <span className="text-[#1c1e9a]">
                ESPECÍFICO
              </span>
              <br />
              PARA GOLEIROS
            </h1>

            <p className="text-body-lg text-white/80 max-w-xl mb-10 font-light leading-relaxed drop-shadow-md">
              Eleve sua performance com treinos funcionais que vão além da musculação tradicional.
              <span className="text-white font-medium ml-1">Método RC Performance</span> para goleiros de todo o Brasil.
            </p>



            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#1c1e9a] hover:bg-[#1c1e9a]/90 text-white text-lg font-bold px-8 h-14 shadow-[0_0_20px_rgba(28,30,154,0.5)] hover:shadow-[0_0_30px_rgba(28,30,154,0.7)] transition-all group relative overflow-hidden"
                onClick={() => document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center">
                  COMEÇAR POR R$ 0,99
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 transform skew-y-12" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 text-lg h-14 px-8 backdrop-blur-sm transition-all shadow-lg"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
              >
                SAIBA MAIS
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 mt-12 text-white/80 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-800 border-2 border-white/20 flex items-center justify-center text-xs font-bold text-white shadow-lg relative z-[3]" style={{ zIndex: 4 - i }}>
                      {i === 1 ? 'AG' : i === 2 ? 'JP' : 'LM'}
                    </div>
                  ))}
                </div>
                <div>
                  <span className="block text-white font-bold text-lg leading-none">+500</span>
                  <span className="text-xs text-white/60 font-medium tracking-wide">GOLEIROS TREINANDO</span>
                </div>
              </div>
              <div className="h-8 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="flex text-accent drop-shadow-md">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-white/60 font-medium tracking-wide">4.9/5 AVALIAÇÃO</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Video with Cinematic Glow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Glowing Backdrop */}
            <div className="absolute -inset-4 bg-accent/20 rounded-[2rem] blur-2xl opacity-50 animate-pulse-slow" />

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-video relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <iframe
                  src="https://www.youtube.com/embed/wLG-kb5-mp4?controls=0&rel=0&modestbranding=1"
                  title="RC Performance - Boas Vindas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full relative z-0"
                />
              </div>
            </motion.div>

            {/* Floating Element Decoration */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
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

      {/* Modern Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-[10px] tracking-[0.2em] font-medium text-white uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white via-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
