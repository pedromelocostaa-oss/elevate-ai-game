import { TrendingUp, HeadphonesIcon, Megaphone, Settings, Award, DollarSign } from "lucide-react";

const profiles = [
  { icon: TrendingUp, title: "Para você que trabalha em vendas", description: "Use IA para prospectar, qualificar leads e fechar mais negócios." },
  { icon: HeadphonesIcon, title: "Para você que trabalha em CS", description: "Automatize respostas, antecipe problemas e encante seus clientes." },
  { icon: Megaphone, title: "Para você que trabalha em marketing", description: "Crie conteúdo, analise dados e otimize campanhas com IA." },
  { icon: Settings, title: "Para você que trabalha em operações", description: "Elimine tarefas manuais e ganhe eficiência na sua rotina." },
  { icon: Award, title: "Para você que quer ser promovido", description: "Destaque-se gerando mais valor com menos esforço." },
  { icon: DollarSign, title: "Para você que quer ganhar mais", description: "Sem trocar de emprego — só mudando como você trabalha." },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Para quem é</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3">
            O Nível IA é para <span className="text-gradient">você?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profiles.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-secondary border border-border hover:border-glow transition-all group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
