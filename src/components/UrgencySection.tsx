const UrgencySection = () => {
  return (
    <section className="px-4 py-16 md:px-8 md:py-20" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-3xl mx-auto border-l-4 border-primary pl-8 md:pl-10">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-snug tracking-tight">
          Enquanto você lê isso, alguém na sua empresa já está aprendendo.
        </h2>

        <p className="text-muted-foreground leading-relaxed mb-8">
          A IA não vai substituir você. Mas o profissional que souber usá-la melhor do que você pode. Não se trata de tecnologia — se trata de quem vai gerar mais valor, ser mais lembrado na hora da promoção e ganhar mais. Essa oportunidade está aqui. A questão é se você vai aproveitar antes ou depois do seu colega.
        </p>

        <a href="#checkout" className="text-primary hover:underline transition-colors font-medium inline-flex items-center gap-1 text-sm">
          Garantir meu acesso agora →
        </a>
      </div>
    </section>
  );
};

export default UrgencySection;
