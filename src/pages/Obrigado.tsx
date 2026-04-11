import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";

const Obrigado = () => {
    const [whatsappUrl, setWhatsappUrl] = useState("");

    useEffect(() => {
        // Attempt to recover funnel info from localStorage
        const savedData = localStorage.getItem("funnelData");
        let msg = "Olá! Acabei de assinar o plano.";

        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                msg += "\n\n*Aqui estão as minhas informações do teste:*";
                if (data.nivel) msg += `\n- *Nível Atual:* ${data.nivel}`;
                if (data.idade) msg += `\n- *Faixa Etária:* ${data.idade}`;
                if (data.foco) msg += `\n- *Foco Principal:* ${data.foco}`;
            } catch (e) {
                console.error("Error parsing funnel data", e);
            }
        }

        // Base WhatsApp URL - You should ask the user to replace the number
        const encodedMsg = encodeURIComponent(msg);
        // Número real fornecido pelo usuário
        setWhatsappUrl(`https://wa.me/5581998183444?text=${encodedMsg}`);
    }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col justify-center items-center p-6 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <CheckCircle className="w-24 h-24 text-green-500 mb-6" />

                <div className="inline-block mb-4">
                    <span className="bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                        PAGAMENTO CONFIRMADO
                    </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-bebas text-foreground mb-6">
                    MUITO OBRIGADO!
                </h1>

                <p className="text-xl text-muted-foreground font-light mb-10 leading-relaxed">
                    Sua assinatura foi processada com sucesso. Para darmos início ao seu treinamento e enviarmos o material adequado, precisamos que você nos chame no WhatsApp.
                </p>

                <div className="bg-muted/50 border border-border p-6 rounded-2xl mb-8 text-left w-full">
                    <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-green-500" />
                        Último passo:
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        As informações do seu teste (Nível, Idade e Foco) já estão salvas. Clique no botão abaixo para nos enviar automaticamente pelo WhatsApp.
                    </p>
                </div>

                <Button
                    asChild
                    className="w-full sm:w-auto h-14 font-bold uppercase tracking-wide px-8 text-lg bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                        <MessageCircle className="w-6 h-6" />
                        CONTINUAR NO WHATSAPP
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default Obrigado;
