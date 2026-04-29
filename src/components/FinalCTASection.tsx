import { HOTMART_URL, PRICE, GUARANTEE_DAYS } from "@/lib/constants";

const FinalCTASection = () => {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28" style={{ backgroundColor: 'hsl(var(--cta-bg))' }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white tracking-tight">
          Seu colega não vai esperar. Você vai?
        </h2>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Acesso imediato. Conteúdo por área. Diagnóstico personalizado incluso.{" "}
          <span className="text-white font-semibold">{PRICE} uma única vez.</span>
        </p>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex sm:inline-flex justify-center items-center gap-3 w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold text-base sm:text-xl rounded-xl hover:bg-white/90 transition-all shadow-lg"
        >
          Quero ser o indispensável da minha equipe →
        </a>

        <p className="mt-5 text-sm text-white/50">
          🔒 Pagamento seguro via Hotmart · Acesso imediato · Garantia de {GUARANTEE_DAYS} dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTASection;
