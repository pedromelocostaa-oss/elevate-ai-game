import { HOTMART_URL, PRICE } from "@/lib/constants";

const UrgencySection = () => {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-3xl mx-auto border-l-4 border-primary pl-5 sm:pl-8 md:pl-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-snug tracking-tight">
          A IA não vai te substituir.{" "}
          <span className="text-primary">Mas o colega que souber usá-la do jeito certo vai.</span>
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Enquanto você lê isso, alguém na sua empresa já está aprendendo a usar IA para entregar mais, ser mais lembrado na hora da promoção e ganhar mais. Não é sobre tecnologia — é sobre quem vai ser indispensável e quem vai ficar para trás. A questão é simples: você vai aprender antes ou depois do seu colega?
        </p>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-lg hover:opacity-90 transition-opacity"
        >
          Garantir meu acesso agora — {PRICE} →
        </a>
      </div>
    </section>
  );
};

export default UrgencySection;
