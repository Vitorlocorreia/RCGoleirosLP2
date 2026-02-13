import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
  // Coordinates for Boa Viagem, Recife - PE
  const latitude = "-8.1269709";
  const longitude = "-34.9035704";

  const contactInfo = [
    {
      icon: MapPin,
      title: "HQ / RECIFE",
      content: "R. José da Silva Lucena, 400\nBoa Viagem, Recife - PE",
      details: "CEP: 51160-350",
      action: "Traçar Rota",
      link: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    },
    {
      icon: Phone,
      title: "CONTATO DIRETO",
      content: "+55 81 99818-3444",
      details: "Atendimento via WhatsApp",
      action: "Chamar Agora",
      link: "https://wa.me/5581998183444",
    },
    {
      icon: Clock,
      title: "HORÁRIOS DE TREINO",
      content: "Segunda a Sexta: 06h - 21h",
      details: "Sábado: 08h - 12h",
      action: null,
      link: null,
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-background relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <span className="bg-[#1c1e9a] text-white px-6 py-2 rounded-sm text-xs font-bold tracking-[0.2em] uppercase shadow-lg transform -skew-x-12">
              NOSSA BASE
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bebas text-foreground tracking-wide mb-6">
            CENTRO DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1c1e9a] to-blue-600">TREINAMENTO</span>
          </h2>
          <div className="w-32 h-1.5 bg-[#1c1e9a] mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Map Container - Takes up more space */}
          <div className="lg:col-span-3 relative group">
            {/* Tech Frame */}
            <div className="absolute -inset-4 border border-[#1c1e9a]/10 rounded-3xl z-0 hidden md:block"></div>
            <div className="absolute -inset-4 border border-[#1c1e9a]/10 rounded-3xl z-0 md:hidden translate-y-4"></div>

            {/* Corner Accents */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-[#1c1e9a] rounded-tr-3xl z-10 hidden md:block"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-[#1c1e9a] rounded-bl-3xl z-10 hidden md:block"></div>

            <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:scale-[1.01]">
              <div className="absolute inset-0 bg-[#1c1e9a]/10 pointer-events-none z-10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
              <iframe
                src={`https://maps.google.com/maps?width=100%25&height=600&hl=pt-BR&q=${latitude},${longitude}&t=&z=15&ie=UTF8&iwloc=B&output=embed`}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-700"
                title="Localização RC Performance - Boa Viagem, Recife"
              />
            </div>
          </div>

          {/* Info Cards - Stacked */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border text-left border-gray-100 p-6 rounded-xl shadow-lg relative overflow-hidden group hover:border-[#1c1e9a]/30 transition-all hover:translate-x-2"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#1c1e9a]/5 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150"></div>

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1c1e9a] rounded-lg flex items-center justify-center shrink-0 shadow-lg group-hover:bg-blue-700 transition-colors">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#1c1e9a] font-bold text-sm tracking-widest uppercase mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-800 font-bebas text-2xl tracking-wide mb-1 leading-none">
                      {info.content}
                    </p>
                    {info.details && (
                      <p className="text-gray-500 text-sm font-medium mb-3">
                        {info.details}
                      </p>
                    )}

                    {info.link && (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold text-[#1c1e9a] hover:text-blue-700 uppercase tracking-widest group/link mt-1"
                      >
                        {info.action} <ArrowRight className="w-3 h-3 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
