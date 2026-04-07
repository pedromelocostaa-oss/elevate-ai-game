import { BookOpen, Brain, Wrench } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Conteúdo direto ao ponto",
    description: "Aprenda sobre as ferramentas de IA mais poderosas do mercado de forma prática e sem enrolação.",
  },
  {
    icon: Wrench,
    title: "Ferramentas que importam",
    description: "ChatGPT, Claude, Lovable, Cursor e n8n — as ferramentas que profissionais de alto desempenho já usam.",
  },
  {
    icon: Brain,
    title: "Diagnóstico personalizado por IA",
    description: "A cereja do bolo: uma IA analisa sua rotina e entrega um plano sob medida de como aplicar IA no seu trabalho.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">A Solução</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            Conheça o <span className="text-gradient">Nível IA</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma plataforma completa que te ensina a usar as ferramentas certas, do jeito certo — e ainda entrega um diagnóstico personalizado com IA para a sua realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-secondary border border-border hover:border-glow transition-colors group gradient-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
