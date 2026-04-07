import { Brain, Wrench, ListChecks, MessageCircle, BarChart3, Target, ClipboardList, Sparkles } from "lucide-react";

const modules = [
  { icon: Brain, title: "A mentalidade AI-First", desc: "Como as empresas mais eficientes do mundo já operam" },
  { icon: Wrench, title: "As ferramentas que mudam o jogo", desc: "ChatGPT, Claude, Lovable, Cursor, n8n e mais" },
  { icon: ListChecks, title: "Framework de 5 etapas", desc: "Para resolver qualquer problema com IA" },
  { icon: MessageCircle, title: "Prompt Engineering avançado", desc: "As técnicas que separam os 10% melhores usuários" },
  { icon: BarChart3, title: "IA aplicada por área", desc: "Vendas, CS, Marketing, Operações, Jurídico e Financeiro" },
  { icon: Target, title: "Casos reais com resultados", desc: "Resultados mensuráveis de empresas que já aplicaram" },
  { icon: ClipboardList, title: "Checklist diário de IA", desc: "Para criar o hábito e manter a consistência" },
  { icon: Sparkles, title: "20 prompts prontos", desc: "Para usar hoje na sua área, sem precisar criar do zero" },
];

const LearningSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-12">
          Tudo que você vai dominar dentro do Nível IA.
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {modules.map((m, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <m.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm mb-1">{m.title}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
