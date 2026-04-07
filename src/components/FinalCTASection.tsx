const FinalCTASection = () => {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28" style={{ backgroundColor: 'hsl(var(--cta-bg))' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
          Comece hoje. Seu próximo nível começa aqui.
        </h2>
        <p className="text-white/70 text-lg mb-10">
          Acesso imediato. Uma vez. R$97.
        </p>

        <a
          href="#checkout"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold text-xl rounded-xl hover:bg-white/90 transition-all shadow-lg"
        >
          Quero ser um CLT do Futuro
        </a>

        <p className="mt-5 text-sm text-white/50">
          🔒 Pagamento seguro • Acesso imediato • Garantia de 7 dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
