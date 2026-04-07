const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at bottom, hsl(217 91% 60% / 0.15), transparent 70%)' }} />
      
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
          Suba de nível.{" "}
          <span className="text-gradient">Agora.</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Por apenas R$97 você acessa tudo: conteúdo completo, ferramentas, prompts prontos e o diagnóstico personalizado por IA.
        </p>

        <a
          href="#checkout"
          className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-display font-bold text-xl rounded-xl hover:opacity-90 transition-all glow-box-strong"
        >
          Quero meu Nível IA agora
        </a>

        <p className="mt-5 text-sm text-muted-foreground">
          🔒 Pagamento seguro • Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
