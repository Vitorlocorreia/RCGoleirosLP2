import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "1000+", label: "Goleiros Treinando" },
  { icon: TrendingUp, value: "95%", label: "Satisfação" },
  { icon: Award, value: "15+", label: "Anos de XP" },
  { icon: Target, value: "10000+", label: "Treinos" },
];

const SocialProofSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: "k8mipBGGbnA",
      title: "BARATA",
      student: "DEPOIMENTO"
    },
    {
      id: "0JXoMJUbB2M",
      title: "BERNARDO",
      student: "DEPOIMENTO"
    },
    {
      id: "cmW29yofOhY",
      title: "LEO SOUZA",
      student: "DEPOIMENTO"
    }
  ];

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


        {/* Video Testimonials Container */}
        <div className="mt-20">
          {/* Mobile Carousel / Desktop Grid */}
          <div
            ref={scrollRef}
            onScroll={(e) => {
              const element = e.currentTarget;
              const index = Math.round(element.scrollLeft / (element.clientWidth * 0.85));
              if (index !== activeIndex) setActiveIndex(index);
            }}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 py-6 pb-8 md:pb-6 -mx-4 px-4 md:mx-0 md:px-4 scroll-smooth"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative min-w-[85vw] md:min-w-0 snap-center transition-all duration-300"
              >
                <div className={`rounded-3xl p-1 shadow-2xl transform transition-all duration-500 
                  ${idx === activeIndex
                    ? "bg-[#1c1e9a] scale-[1.02] md:bg-[#1c1e9a]/20 md:scale-100 md:hover:bg-[#1c1e9a] md:hover:scale-[1.02]"
                    : "bg-[#1c1e9a]/20 scale-100 hover:bg-[#1c1e9a]/60 md:hover:scale-[1.02] md:hover:bg-[#1c1e9a]"
                  }`}
                >
                  <div className="bg-background rounded-[22px] overflow-hidden relative aspect-video flex items-center justify-center border-2 border-white/10 text-left">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full object-cover"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-all duration-300 group-hover:pb-10 md:group-hover:opacity-0">
                      <h3 className="text-white font-bebas text-2xl tracking-wide uppercase">{video.title}</h3>
                      <p className="text-white/70 text-[10px] font-medium uppercase tracking-widest">{video.student}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollRef.current) {
                    const scrollAmount = scrollRef.current.clientWidth * 0.85 * i;
                    scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
                  }
                }}
                className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
                style={{ width: i === activeIndex ? "32px" : "8px" }}
              >
                <div className={`absolute inset-0 transition-colors duration-500 ${i === activeIndex ? "bg-[#1c1e9a]" : "bg-[#1c1e9a]/20"}`} />
                {i === activeIndex && (
                  <motion.div
                    layoutId="activeDotHighlight"
                    className="absolute inset-0 bg-[#1c1e9a]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProofSection;
