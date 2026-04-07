import { BookOpen, Target, Bot } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Conteúdo prático por área",
    description: "Aprenda as ferramentas que os profissionais mais valorizados já dominam, organizado por função: vendas, CS, marketing, operações, jurídico, financeiro.",
  },
  {
    icon: Target,
    title: "Aplicação no seu dia a dia",
    description: "Não é teoria. É como usar IA nas tarefas que você já faz hoje, de forma concreta e imediata.",
  },
  {
    icon: Bot,
    title: "Diagnóstico personalizado por IA",
    description: "A cereja do bolo: descreva sua rotina e receba um plano feito exclusivamente para o seu cargo, sua área e sua empresa.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Virada Profissional com IA: o caminho mais direto para se tornar o profissional mais valioso da sua equipe.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma plataforma completa que te ensina a usar as ferramentas certas, do jeito certo — e ainda entrega um diagnóstico personalizado com IA para a sua realidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-8 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
