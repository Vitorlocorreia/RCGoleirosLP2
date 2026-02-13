import { Instagram, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 dot-pattern" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo-rc-goleiros.jpg"
                  alt="RC Goleiros"
                  className="w-16 h-16 rounded-full border-2 border-background/20"
                />
                <div>
                  <p className="text-lg font-bold uppercase tracking-wide">RC PERFORMANCE</p>
                  <p className="text-background/60 text-xs">Treinamento Específico</p>
                </div>
              </div>
              <p className="text-background/70 leading-relaxed text-sm">
                Treinamento de força específico para goleiros de todo o Brasil.
                Eleve sua performance ao próximo nível.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold uppercase tracking-wide mb-6 border-b border-background/10 pb-2">
                Links Rápidos
              </h4>
              <nav className="space-y-3">
                {[
                  { label: "Sobre", href: "#sobre" },
                  { label: "Planos", href: "#planos" },
                  { label: "Depoimentos", href: "#" },
                  { label: "FAQ", href: "#" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold uppercase tracking-wide mb-6 border-b border-background/10 pb-2">
                Contato
              </h4>
              <div className="space-y-4">
                <a
                  href="https://wa.me/5581998183444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+55 81 99818-3444</span>
                </a>
                <a
                  href="mailto:contato@rcgoleiros.com"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>contato@rcgoleiros.com</span>
                </a>
                <div className="flex items-start gap-3 text-background/70 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>
                    R. José da Silva Lucena, N400
                    <br />
                    Boa Viagem, Recife - PE
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold uppercase tracking-wide mb-6 border-b border-background/10 pb-2">
                Redes Sociais
              </h4>
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/rcgoleiros/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>@rcgoleiros</span>
                </a>
                <a
                  href="https://www.youtube.com/@rcgoleiros"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <Youtube className="w-4 h-4" />
                  </div>
                  <span>YouTube RC Goleiros</span>
                </a>
                <a
                  href="https://chat.whatsapp.com/CkYQup2ui0XIk0bE11qaEC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-background transition-colors text-sm group"
                >
                  <div className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span>Grupo de Dicas</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/50">
              <p>© {new Date().getFullYear()} RC Goleiros. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-background transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="hover:text-background transition-colors">
                  Privacidade
                </a>
                <a href="#" className="hover:text-background transition-colors">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
