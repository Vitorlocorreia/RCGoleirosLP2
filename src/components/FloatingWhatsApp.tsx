import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5581998183444";
  const message = "Olá! Gostaria de saber mais sobre o treinamento RC Performance.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Tooltip/Bubble */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: 20 }}
        animate={isOpen ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0, x: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-28 right-6 z-50 max-w-xs"
      >
        <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-border">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted-foreground rounded-full flex items-center justify-center hover:bg-foreground transition-colors"
          >
            <X className="w-3 h-3 text-white" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-foreground mb-1">Fale com a gente!</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tire suas dúvidas sobre os planos e treinamentos. Estamos online!
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="absolute bottom-4 -right-2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent" />
        </div>
      </motion.div>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-2xl flex items-center justify-center hover:shadow-green-500/50 transition-shadow group"
        aria-label="Fale conosco no WhatsApp"
      >
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        
        {/* Icon */}
        <MessageCircle className="w-8 h-8 text-white relative z-10 group-hover:rotate-12 transition-transform" />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </span>
      </motion.button>
    </>
  );
};

export default FloatingWhatsApp;
