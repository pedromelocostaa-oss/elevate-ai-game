import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "MS", name: "Mariana Souza", role: "Analista de Vendas", company: "TechCorp",
    color: "bg-blue-100 text-blue-700",
    text: "Fiquei na dúvida nos R$97, mas na primeira semana já economizei pelo menos 5 horas que eu perderia em tarefas manuais. Recuperei o investimento em dias. Hoje não consigo imaginar trabalhar sem essas ferramentas.",
  },
  {
    initials: "RF", name: "Rafael Ferreira", role: "Gerente de Operações", company: "Logmaster",
    color: "bg-green-100 text-green-700",
    text: "Minha agenda é caótica. Consumi o conteúdo em pedaços no horário de almoço e entre reuniões. Na primeira semana já estava aplicando no trabalho. Não precisa de blocos de 2 horas — você encaixa no seu ritmo.",
  },
  {
    initials: "CB", name: "Camila Barros", role: "Coordenadora de RH", company: "GrupoVida",
    color: "bg-purple-100 text-purple-700",
    text: "Sou do RH, nunca me considerei uma pessoa de tecnologia. Achei que não era para mim. Me surpreendi com o quanto consegui aplicar na minha rotina logo nos primeiros dias. A linguagem é simples, sem jargão.",
  },
  {
    initials: "LM", name: "Lucas Mendes", role: "Executivo de Contas", company: "Vendex",
    color: "bg-orange-100 text-orange-700",
    text: "Eu usava ChatGPT todo dia e achei que já sabia o suficiente. Estava muito errado. Descobri ferramentas e formas de usar que nunca imaginei. Minha produtividade mudou de patamar depois da Virada Profissional com IA.",
  },
  {
    initials: "PT", name: "Patricia Torres", role: "Advogada", company: "Jurídico & Co",
    color: "bg-rose-100 text-rose-700",
    text: "Trabalho no jurídico e não esperava encontrar casos tão específicos para a minha rotina. Tinha conteúdo direto sobre revisão de contratos, alertas de vencimento e geração de documentos. Exatamente o que eu precisava.",
  },
  {
    initials: "GO", name: "Gabriel Oliveira", role: "Analista de CS", company: "SaaSBrasil",
    color: "bg-teal-100 text-teal-700",
    text: "Fiz o diagnóstico com ceticismo. O resultado me surpreendeu — parecia que alguém que trabalha comigo tinha montado aquele plano. Saí com ações concretas para aplicar na semana seguinte. Impressionante.",
  },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="p-6 rounded-xl border border-border bg-card shadow-sm h-full flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${t.color}`}>
        {t.initials}
      </div>
      <div>
        <p className="font-semibold text-sm text-foreground">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
      </div>
    </div>
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-4">
          Quem já aplicou, aprovou.
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-xl mx-auto mb-10">
          Profissionais reais, de áreas diferentes, com o mesmo resultado: começaram a aplicar na primeira semana.
        </p>

        {/* Mobile: carrossel horizontal com snap */}
        <div className="md:hidden -mx-4 px-4 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((t, i) => (
            <div key={i} className="snap-start shrink-0 w-[82vw]">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Indicador de deslize — só mobile */}
        <p className="md:hidden text-center text-xs text-muted-foreground mt-3">
          ← deslize para ver mais →
        </p>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
