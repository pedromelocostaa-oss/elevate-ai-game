import { User, Briefcase, MessageSquare, Cpu, FileText } from "lucide-react";

const steps = [
  { icon: User, label: "Informe sua área" },
  { icon: Briefcase, label: "Conte seu setor" },
  { icon: MessageSquare, label: "Descreva sua rotina" },
  { icon: Cpu, label: "IA analisa tudo" },
  { icon: FileText, label: "Receba seu plano" },
];

const DiagnosisSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(ellipse at center, hsl(217 91% 60% / 0.1), transparent 70%)' }} />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            ✨ Exclusivo do Nível IA
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Diagnóstico <span className="text-gradient">personalizado</span> por IA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nenhum curso genérico oferece isso. Você conta como é seu dia a dia — e a IA entrega um plano sob medida de como aplicar IA na sua rotina real.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-secondary border border-glow flex items-center justify-center glow-box">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium text-center max-w-[100px]">{step.label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-primary/30 mt-[-20px]" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-secondary border border-glow gradient-border text-center glow-box">
          <p className="text-lg text-foreground leading-relaxed">
            <span className="font-semibold text-primary">O resultado?</span> Um plano de ação personalizado com as ferramentas, prompts e automações ideais para a <em>sua</em> realidade profissional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiagnosisSection;
