import { Zap, ClipboardList, Sparkles, Send } from "lucide-react";

const steps = [
  { num: 1, icon: ClipboardList, title: "Responda", label: "Preencha seu perfil: área, cargo, setor e como é o seu dia a dia" },
  { num: 2, icon: Sparkles, title: "Analise", label: "Nossa IA lê sua rotina real e identifica onde você está perdendo tempo" },
  { num: 3, icon: Send, title: "Receba", label: "Um plano de ação personalizado com exatamente o que aplicar primeiro" },
];

const areaChips = ["Vendas", "Marketing", "Jurídico", "RH", "Financeiro", "Operações", "Customer Success", "Produto/Tech"];
const cargoChips = ["Analista", "Coordenador", "Gerente", "Diretor", "VP / C-Level"];

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
        <div className="grid md:grid-cols-3 gap-6 mb-14">
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

        {/* Form preview mockup */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden mb-8">
          {/* Mockup header */}
          <div className="bg-primary px-6 py-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white/70 uppercase tracking-wide">Diagnóstico IA Personalizado</p>
              <p className="text-white font-bold text-sm">Conte sobre o seu trabalho</p>
            </div>
            <div className="ml-auto flex gap-1.5">
              <span className="px-2.5 py-1 bg-white/10 text-white/80 text-xs rounded-full">~5 minutos</span>
              <span className="px-2.5 py-1 bg-white/10 text-white/80 text-xs rounded-full">Gerado por IA</span>
            </div>
          </div>

          {/* Mockup body */}
          <div className="px-6 py-6 space-y-6 pointer-events-none select-none">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Área de atuação</p>
              <div className="flex flex-wrap gap-2">
                {areaChips.map((chip) => (
                  <span key={chip} className={`px-3 py-1.5 rounded-full text-sm border ${chip === "Marketing" ? "bg-primary text-primary-foreground border-primary font-semibold" : "border-border text-muted-foreground"}`}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Cargo</p>
              <div className="flex flex-wrap gap-2">
                {cargoChips.map((chip) => (
                  <span key={chip} className={`px-3 py-1.5 rounded-full text-sm border ${chip === "Gerente" ? "bg-primary text-primary-foreground border-primary font-semibold" : "border-border text-muted-foreground"}`}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Descreva seu dia a dia</p>
              <div className="w-full rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground italic">
                Passo boa parte do tempo criando briefings, revisando campanhas e respondendo demandas no Slack…
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/80 text-primary-foreground font-bold text-sm cursor-default">
              <Zap className="w-4 h-4" /> Gerar meu diagnóstico
            </button>
          </div>
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
