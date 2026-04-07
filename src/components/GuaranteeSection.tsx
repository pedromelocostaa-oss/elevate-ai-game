import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Garantia de 7 dias
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Se em 7 dias você sentir que o Nível IA não é para você, basta pedir e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é zero — todo ele é nosso.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
