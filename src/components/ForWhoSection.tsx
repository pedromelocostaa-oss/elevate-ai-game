import { TrendingUp, HeadphonesIcon, Megaphone, Settings, Award, DollarSign, Scale, Building } from "lucide-react";

const profiles = [
  { icon: TrendingUp, text: "Para você que trabalha em vendas e quer fechar mais em menos tempo" },
  { icon: HeadphonesIcon, text: "Para você que trabalha em CS e quer antecipar problemas antes que virem churn" },
  { icon: Megaphone, text: "Para você que trabalha em marketing e quer produzir mais com menos esforço" },
  { icon: Settings, text: "Para você que trabalha em operações e quer eliminar tarefas repetitivas de uma vez" },
  { icon: Award, text: "Para você que quer ser promovido e precisa se destacar da equipe" },
  { icon: DollarSign, text: "Para você que quer ganhar mais sem precisar trocar de emprego" },
  { icon: Scale, text: "Para você que trabalha no jurídico ou financeiro e quer ganhar horas de volta toda semana" },
  { icon: Building, text: "Para gestores que querem que seu time inteiro produza mais com as mesmas horas" },
];

const ForWhoSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-12">
          Esse produto foi feito para você.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((p, i) => (
            <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <p.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
