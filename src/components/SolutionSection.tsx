import { Zap, Eye, Wrench } from "lucide-react";

const results = [
  {
    icon: Zap,
    title: "Você entrega em 15 min o que leva 4 horas hoje",
    description:
      "Propostas, relatórios, apresentações e resumos de reunião que consomem seu dia passam a ser feitos em minutos. Não é atalho — é o mesmo trabalho, feito de forma mais inteligente.",
  },
  {
    icon: Eye,
    title: "Seu gestor começa a notar a diferença",
    description:
      "Quando você entrega mais rápido, erra menos e resolve problemas que antes precisavam de TI ou de dias de espera, a conversa sobre promoção aparece naturalmente.",
  },
  {
    icon: Wrench,
    title: "Você para de depender de todo mundo para resolver problemas",
    description:
      "Cria dashboards, formulários e ferramentas internas sozinho. Automatiza follow-ups, relatórios e atualizações de CRM sem precisar de dev, sem fila, sem espera.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Pare de usar IA como pesquisador glorificado.
            <br />
            <span className="text-primary">Comece a usar como quem vai ser promovido.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Virada Profissional não ensina teoria. Ensina o que fazer no trabalho de hoje
            para que seu gestor perceba a diferença amanhã.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <div key={i} className="p-8 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <r.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3 leading-snug">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
