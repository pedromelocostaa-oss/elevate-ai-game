import { ShieldCheck } from "lucide-react";
import { HOTMART_URL, PRICE, GUARANTEE_DAYS } from "@/lib/constants";

const GuaranteeSection = () => {
  return (
    <section id="garantia" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
          {GUARANTEE_DAYS} dias de garantia. Sem perguntas.
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10">
          Se você acessar o conteúdo e sentir que não valeu cada centavo, devolvemos 100% do
          seu dinheiro em até {GUARANTEE_DAYS} dias. Sem burocracia, sem questionamento, sem enrolação.
          O risco é nosso, não seu.
        </p>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
        >
          Quero me tornar indispensável — {PRICE} →
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          Acesso imediato · Garantia de {GUARANTEE_DAYS} dias · Uma única vez
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
