import { Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative section-padding min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: 'radial-gradient(circle, hsl(217 91% 60%), transparent)' }} />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glow bg-secondary mb-8">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">Acesso imediato após a compra</span>
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          O profissional que dominar a IA será{" "}
          <span className="text-gradient">promovido.</span>
          <br />
          O que ignorar será{" "}
          <span className="text-muted-foreground">substituído.</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Nível IA é a plataforma que transforma profissionais comuns em profissionais indispensáveis — usando as ferramentas de IA que já existem, mas que quase ninguém sabe usar de verdade.
        </p>

        <a
          href="#checkout"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg rounded-xl hover:opacity-90 transition-all glow-box-strong"
        >
          Quero meu Nível IA agora — R$97
        </a>

        <p className="mt-4 text-sm text-muted-foreground">
          🔒 Pagamento seguro • Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
