import { X, Check } from "lucide-react";

const comparisons = [
  {
    common: "Usa o ChatGPT só para pesquisas genéricas",
    nivelIA: "Automatiza tarefas repetitivas e ganha horas por semana",
  },
  {
    common: "Copia e cola prompts da internet sem estratégia",
    nivelIA: "Cria prompts avançados que entregam resultados reais",
  },
  {
    common: "Não sabe quais ferramentas existem além do ChatGPT",
    nivelIA: "Domina 5+ ferramentas e sabe quando usar cada uma",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-6">
          90% dos profissionais usam IA{" "}
          <span className="text-gradient">do jeito errado.</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16">
          Eles acham que "saber usar o ChatGPT" é suficiente. Enquanto isso, uma minoria está saindo na frente — e levando as promoções.
        </p>

        <div className="grid gap-6 md:gap-8">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary border border-border">
                <div className="shrink-0 w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Profissional comum</span>
                  <p className="text-foreground mt-1">{item.common}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary border border-glow gradient-border">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">Profissional Nível IA</span>
                  <p className="text-foreground mt-1">{item.nivelIA}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
