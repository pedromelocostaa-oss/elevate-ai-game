import { ClipboardList, Sparkles, Send } from "lucide-react";

const steps = [
  { num: 1, icon: ClipboardList, title: "Responda", label: "Preencha seu perfil: área, cargo, setor e como é o seu dia a dia" },
  { num: 2, icon: Sparkles, title: "Analise", label: "Nossa IA lê sua rotina real e identifica onde você está perdendo tempo" },
  { num: 3, icon: Send, title: "Receba", label: "Um plano de ação personalizado com exatamente o que aplicar primeiro" },
];

const DiagnosisSection = () => {
  return (
    <section id="diagnostico" className="py-20 md:py-28 px-4 md:px-8" style={{ backgroundColor: 'hsl(var(--section-highlight))' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            Incluso no seu acesso
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Uma IA que analisa a <span className="text-primary">sua rotina</span> e te diz o que mudar.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Você conta como é o seu dia a dia — tarefas, ferramentas, gargalos — e a IA te entrega um plano concreto de onde e como aplicar IA para trabalhar menos e entregar mais.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {steps.map((s) => (
            <div key={s.num} className="flex flex-col items-center text-center p-6 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 text-lg font-bold">
                {s.num}
              </div>
              <s.icon className="w-5 h-5 text-primary mb-2" />
              <p className="font-bold text-foreground mb-1">{s.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="p-6 rounded-xl border border-primary/20 bg-card text-center">
          <p className="text-foreground leading-relaxed">
            <span className="font-bold text-primary">É como ter um consultor de IA olhando para a sua rotina</span>{" "}
            — sem reunião, sem agenda, sem cobrar por hora. Você preenche em 5 minutos e sai com ações para aplicar na semana seguinte.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DiagnosisSection;
