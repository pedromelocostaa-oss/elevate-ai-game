import { Target, MessageSquare, Bot } from "lucide-react";

const steps = [
  { num: 1, icon: Target, label: "Você informa sua área de atuação e seu setor" },
  { num: 2, icon: MessageSquare, label: "Descreve como é o seu dia a dia — tarefas, ferramentas, gargalos e desafios reais" },
  { num: 3, icon: Bot, label: "A IA analisa tudo e entrega um diagnóstico com ações concretas para aplicar na semana seguinte" },
];

const DiagnosisSection = () => {
  return (
    <section className="py-20 md:py-24 px-4 md:px-8 border-y border-primary/20" style={{ backgroundColor: 'hsl(var(--section-highlight))' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Incluso no seu acesso
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Um plano de IA feito para a sua rotina. Não para uma persona genérica.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Todo mundo recebe o mesmo conteúdo. Só você recebe um diagnóstico
            que analisa a sua área, o seu cargo e os seus desafios específicos —
            e te diz exatamente onde aplicar IA primeiro.
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
            <span className="font-bold text-primary">É como ter um consultor de IA olhando para a sua rotina</span>{" "}
            — sem reunião, sem agenda, sem cobrar por hora. Você preenche em 5 minutos e sai com um plano de ação.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
