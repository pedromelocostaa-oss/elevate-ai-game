import { Brain, Wrench, ListChecks, MessageCircle, BarChart3, Target, ClipboardList, Sparkles } from "lucide-react";

const modules = [
  { icon: Brain, title: "A nova vantagem competitiva", description: "Mentalidade AI-First para se destacar no mercado." },
  { icon: Wrench, title: "As ferramentas que mudam o jogo", description: "Cursor, Claude, Lovable, n8n — quando e como usar cada uma." },
  { icon: ListChecks, title: "Framework operacional de IA", description: "5 etapas práticas para integrar IA na sua rotina." },
  { icon: MessageCircle, title: "Prompt Engineering avançado", description: "Crie prompts que geram resultados profissionais reais." },
  { icon: BarChart3, title: "IA aplicada por área", description: "Vendas, CS, Marketing, Operações, Jurídico, Financeiro." },
  { icon: Target, title: "Casos reais com resultados", description: "Exemplos mensuráveis de profissionais que aplicaram." },
  { icon: ClipboardList, title: "Checklist diário de IA", description: "Rotina prática para usar IA todos os dias no trabalho." },
  { icon: Sparkles, title: "Top 20 prompts por área", description: "Prompts prontos para copiar e usar imediatamente." },
];

const LearningSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Conteúdo</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {modules.map((m, i) => (
            <div key={i} className="p-6 rounded-2xl bg-secondary border border-border hover:border-glow transition-all group">
              <m.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display font-semibold mb-2">{m.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
