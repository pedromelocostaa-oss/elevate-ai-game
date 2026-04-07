import { FileText, RefreshCw, BarChart3, X, Check } from "lucide-react";

const comparisons = [
  {
    icon: FileText,
    task: "Montar uma proposta comercial",
    common: "3–4 horas no Google Docs, escrevendo tudo do zero",
    nivelIA: "15 minutos com IA gerando, o profissional só revisa",
  },
  {
    icon: RefreshCw,
    task: "Atualizar o CRM e fazer follow-up",
    common: "Processo manual, esquecido 40% das vezes",
    nivelIA: "Automação que roda sozinha, zero esquecimento",
  },
  {
    icon: BarChart3,
    task: "Gerar relatório semanal",
    common: "1 dia compilando dados em planilha",
    nivelIA: "20 minutos com IA puxando e estruturando os dados",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight">
          90% dos profissionais usam IA{" "}
          <span className="text-primary">do jeito errado.</span>
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-16">
          A maioria usa apenas o ChatGPT para pesquisas simples, sem extrair valor real no trabalho. Enquanto isso, uma minoria está saindo na frente.
        </p>

        <div className="grid gap-6 md:gap-8">
          {comparisons.map((item, i) => (
            <div key={i} className="rounded-xl border border-border overflow-hidden">
              <div className="p-4 border-b border-border flex items-center gap-3" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">{item.task}</span>
              </div>
              <div className="grid md:grid-cols-2">
                <div className="flex items-start gap-3 p-5 border-b md:border-b-0 md:border-r border-border">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X className="w-3.5 h-3.5 text-destructive" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Profissional comum</span>
                    <p className="text-foreground mt-1 text-sm">{item.common}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">Profissional Nível IA</span>
                    <p className="text-foreground mt-1 text-sm">{item.nivelIA}</p>
                  </div>
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
