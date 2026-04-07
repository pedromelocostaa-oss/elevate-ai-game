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
    text: "Eu usava ChatGPT todo dia e achei que já sabia o suficiente. Estava muito errado. Descobri ferramentas e formas de usar que nunca imaginei. Minha produtividade mudou de patamar depois do CLT do Futuro.",
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

const TestimonialsSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-12">
          O que quem já acessou está dizendo.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
