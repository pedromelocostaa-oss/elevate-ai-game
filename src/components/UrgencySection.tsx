import { AlertTriangle } from "lucide-react";

const UrgencySection = () => {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20">
      <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-2xl border border-glow glow-box relative overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(228 40% 8%), hsl(225 50% 12%))' }}>
        <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(217 91% 60% / 0.5), transparent)' }} />
        
        <div className="flex justify-center mb-6">
          <AlertTriangle className="w-6 h-6 text-primary opacity-70" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-6 leading-snug">
          Enquanto você lê isso, alguém na sua empresa{" "}
          <span className="text-gradient">já está aprendendo.</span>
        </h2>

        <p className="text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto mb-8">
          A IA não vai substituir você. Mas o profissional que souber usá-la melhor do que você pode. Não se trata de tecnologia — se trata de quem vai gerar mais valor, ser mais lembrado na hora da promoção e ganhar mais. Essa oportunidade está aqui. A questão é se você vai aproveitar antes ou depois do seu colega.
        </p>

        <div className="text-center">
          <a href="#checkout" className="text-primary hover:text-foreground transition-colors font-medium inline-flex items-center gap-1">
            Garantir meu acesso agora →
          </a>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
