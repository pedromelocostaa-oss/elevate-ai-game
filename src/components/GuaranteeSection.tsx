import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          7 dias de garantia. Sem perguntas.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Se você comprar, acessar o conteúdo e sentir que não valeu cada centavo, devolvemos 100% do seu dinheiro em até 7 dias. Sem burocracia, sem questionamento, sem enrolação.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
