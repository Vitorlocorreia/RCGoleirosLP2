import { motion } from "framer-motion";
import { Award, Target, Users, CheckCircle, Linkedin, Instagram } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const trainers = [
  {
    name: "Ricardo Costa",
    role: "Head Coach",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    specialties: ["Alta Performance", "Metodologia RC"],
    description: "Criador do Método RC. +10 anos formando goleiros de elite.",
  },
  {
    name: "Lucas Mendes",
    role: "Prep. Físico",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop",
    specialties: ["Potência", "Prevenção"],
    description: "Especialista em biomecânica e desenvolvimento de potência.",
  },
  {
    name: "André Silva",
    role: "Fisiologista",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    specialties: ["Recovery", "Dados"],
    description: "Monitoramento de carga e estratégias de recuperação.",
  },
];

const TrainersSection = () => {
  const TrainerCard = ({ trainer }: { trainer: typeof trainers[0] }) => (
    <div className="bg-white border-2 border-border/60 rounded-xl overflow-hidden hover:shadow-[0_0_30px_rgba(28,30,154,0.15)] hover:border-[#1c1e9a] transition-all duration-500 h-full flex flex-col group relative">

      {/* Tech Corners - Always visible but subtle */}
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#1c1e9a]/20 rounded-tr-xl group-hover:border-[#1c1e9a] transition-colors z-20"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#1c1e9a]/20 rounded-bl-xl group-hover:border-[#1c1e9a] transition-colors z-20"></div>

      {/* Image Container */}
      <div className="relative h-80 md:h-96 overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-[#1c1e9a] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1e9a]/90 via-transparent to-transparent opacity-90"></div>

        {/* Floating Content */}
        <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
          <p className="text-[#1c1e9a] font-bold text-[10px] uppercase tracking-widest mb-2 bg-white inline-block px-3 py-1 rounded-sm shadow-sm">
            {trainer.role}
          </p>
          <h3 className="text-3xl md:text-4xl font-bebas tracking-wide text-white mb-1 group-hover:translate-x-1 transition-transform drop-shadow-md">
            {trainer.name.split(' ')[0]} <span className="text-white/70">{trainer.name.split(' ')[1]}</span>
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 md:p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50/50">
        <p className="text-muted-foreground leading-relaxed text-sm mb-6 flex-1 border-l-4 border-[#1c1e9a] pl-4 font-medium">
          {trainer.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {trainer.specialties.map((tech) => (
            <span key={tech} className="text-[10px] font-bold uppercase tracking-wider bg-[#1c1e9a]/5 text-[#1c1e9a] border border-[#1c1e9a]/10 px-3 py-1 rounded-sm">
              {tech}
            </span>
          ))}
        </div>

        {/* Social Icons (Mock) */}
        <div className="flex gap-4 mt-6 pt-6 border-t border-border opacity-60 group-hover:opacity-100 transition-opacity">
          <Instagram className="w-5 h-5 hover:text-[#1c1e9a] cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 hover:text-[#1c1e9a] cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="bg-[#1c1e9a] text-white px-6 py-2 rounded-sm text-xs font-bold tracking-[0.2em] uppercase shadow-lg transform -skew-x-12">
              QUEM FAZ ACONTECER
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bebas text-foreground tracking-wide mb-6">
            COMISSÃO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c1e9a] to-blue-600">TÉCNICA</span>
          </h2>
          <div className="w-32 h-1.5 bg-[#1c1e9a] mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Desktop Grid (Hidden on Mobile) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <TrainerCard trainer={trainer} />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel (Visible on Mobile) */}
        <div className="md:hidden mb-16 -mx-4">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 pl-4">
              {trainers.map((trainer, i) => (
                <CarouselItem key={i} className="pl-2 basis-[85%]">
                  <TrainerCard trainer={trainer} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
        </div>

        {/* Stats Ticker (Infinite Slider) */}
        <div className="w-full relative py-8 border-y border-[#1c1e9a]/10 bg-white/50 backdrop-blur-sm -mx-4 md:mx-0 md:w-auto md:rounded-2xl md:border md:bg-white md:shadow-lg md:backdrop-blur-none group hover:border-[#1c1e9a]/30 transition-colors">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1c1e9a]/20 to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1c1e9a]/20 to-transparent"></div>

          <InfiniteSlider gap={60} duration={30} durationOnHover={150}>
            {[
              { value: "10+", label: "Anos de Elite" },
              { value: "100%", label: "Certificado" },
              { value: "500+", label: "Atletas" },
              { value: "50+", label: "Clubes" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-12 px-4 select-none">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-6xl md:text-8xl font-bebas text-[#1c1e9a] drop-shadow-sm whitespace-nowrap leading-none line-clamp-1">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-[0.2em] whitespace-nowrap text-center">
                    {stat.label}
                  </span>
                </div>
                {/* Vertical Separator */}
                <div className="h-16 w-0.5 bg-[#1c1e9a]/10 rounded-full"></div>
              </div>
            ))}
          </InfiniteSlider>

          {/* Fade Masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10 md:hidden"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10 md:hidden"></div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
