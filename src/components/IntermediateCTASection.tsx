import { HOTMART_URL, PRICE } from "@/lib/constants";

const IntermediateCTASection = () => {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20 border-y border-border" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
          Pronto para começar?
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3">
          Pare de deixar seu colega sair na frente.
        </h2>
        <p className="text-muted-foreground mb-8">
          Acesso imediato. Conteúdo por área. Sem jargão técnico.
        </p>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          Quero meu acesso — {PRICE} →
        </a>

        <p className="mt-4 text-xs text-muted-foreground">
          Garantia de 7 dias. Se não valeu, devolvemos 100%.
        </p>
      </div>
    </section>
  );
};

export default IntermediateCTASection;
