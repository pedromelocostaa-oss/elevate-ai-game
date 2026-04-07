import { Target, MessageSquare, Bot } from "lucide-react";

const steps = [
  { num: 1, icon: Target, label: "Você informa sua área de atuação e seu setor" },
  { num: 2, icon: MessageSquare, label: "Descreve como é o seu dia a dia no trabalho — suas tarefas, ferramentas e desafios" },
  { num: 3, icon: Bot, label: "A IA analisa tudo e entrega um diagnóstico com ações concretas para aplicar imediatamente" },
];

const DiagnosisSection = () => {
  return (
    <section className="py-20 md:py-24 px-4 md:px-8 border-y border-primary/20" style={{ backgroundColor: 'hsl(var(--section-highlight))' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Seu plano personalizado de IA. Para a sua área. Para o seu dia a dia.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nenhum curso genérico faz isso. Enquanto outros entregam o mesmo conteúdo para todo mundo, a Virada Profissional com IA analisa a sua rotina e te diz exatamente onde e como aplicar IA no seu trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {s.num}
              </div>
              <s.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-foreground text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="p-6 md:p-8 rounded-xl border border-primary/20 bg-card text-center">
          <p className="text-foreground leading-relaxed">
            <span className="font-bold text-primary">O diagnóstico é feito para você</span> — não para uma persona fictícia. É como ter um consultor de IA olhando para a sua rotina específica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
