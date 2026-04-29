import { TrendingUp, HeadphonesIcon, Megaphone, Settings, Award, DollarSign, Scale, Building, X } from "lucide-react";

const forProfiles = [
  { icon: TrendingUp, text: "Você trabalha em vendas e quer fechar mais, em menos tempo, com menos retrabalho" },
  { icon: HeadphonesIcon, text: "Você trabalha em CS e quer antecipar problemas antes que virem churn" },
  { icon: Megaphone, text: "Você trabalha em marketing e quer produzir mais conteúdo com menos esforço" },
  { icon: Settings, text: "Você trabalha em operações e quer eliminar de vez as tarefas repetitivas que tomam seu dia" },
  { icon: Award, text: "Você quer ser promovido e precisa se diferenciar da equipe de forma visível" },
  { icon: DollarSign, text: "Você quer crescer na carreira sem precisar trocar de emprego" },
  { icon: Scale, text: "Você trabalha no jurídico ou financeiro e quer recuperar horas toda semana" },
  { icon: Building, text: "Você é gestor e quer que sua equipe produza mais com as mesmas horas e pessoas" },
];

const notForItems = [
  "Quem quer largar o emprego, empreender ou criar uma renda extra",
  "Quem busca um curso teórico para assistir sem precisar aplicar nada",
  "Quem já domina 5+ das ferramentas listadas e as usa diariamente no trabalho",
  "Quem não usa computador na rotina profissional",
];

const ForWhoSection = () => {
  return (
    <section id="para-quem" className="section-padding">
      <div className="max-w-6xl mx-auto">

        {/* Para quem É */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-4">
          Você se encaixa aqui se…
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
          Virada Profissional foi construído para quem já trabalha, usa IA no mínimo superficialmente,
          e quer extrair resultado real disso no emprego atual.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {forProfiles.map((p, i) => (
            <div key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
              <p.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Para quem NÃO é */}
        <div className="max-w-2xl mx-auto rounded-xl border border-border bg-card p-8">
          <h3 className="text-lg font-bold mb-6 text-center">
            Não é para você se…
          </h3>
          <div className="grid gap-3">
            {notForItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="shrink-0 w-6 h-6 rounded-full bg-muted flex items-center justify-center mt-0.5">
                  <X className="w-3 h-3 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ForWhoSection;
