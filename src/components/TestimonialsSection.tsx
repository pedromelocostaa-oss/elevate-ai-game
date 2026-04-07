import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "RM",
    name: "Rafael Mendes",
    role: "Analista de Operações",
    company: "TechFlow Brasil",
    text: "Hesitei por causa do preço, mas em 3 dias já tinha automatizado um relatório que me tomava 4 horas por semana. O R$97 se pagou em uma semana.",
  },
  {
    initials: "CS",
    name: "Camila Santos",
    role: "Gerente de Projetos",
    company: "Innovare Digital",
    text: "Achei que não teria tempo. Assisti os módulos no almoço e já apliquei no mesmo dia. Em uma semana, meu gestor perguntou o que eu estava fazendo diferente.",
  },
  {
    initials: "LA",
    name: "Lucas Almeida",
    role: "Coordenador de RH",
    company: "Grupo Vértice",
    text: "Sou de humanas, zero técnico. Mesmo assim consegui aplicar IA em recrutamento e onboarding. O conteúdo é realmente acessível.",
  },
  {
    initials: "FO",
    name: "Fernanda Oliveira",
    role: "Executiva de Vendas",
    company: "SalesUp Co.",
    text: "Usava ChatGPT todo dia e achava que já sabia tudo. Descobri Claude, aprendi sobre n8n e automação — minha prospecção triplicou.",
  },
  {
    initials: "MB",
    name: "Marcos Barbosa",
    role: "Analista Jurídico",
    company: "Juris Partners",
    text: "Achei que IA não tinha nada a ver com direito. O módulo de IA por área me mostrou aplicações diretas para análise de contratos e compliance.",
  },
  {
    initials: "PT",
    name: "Patrícia Torres",
    role: "Coordenadora de CS",
    company: "ClientFirst Tech",
    text: "O diagnóstico personalizado foi assustadoramente preciso. Mapeou exatamente onde eu perdia tempo e me deu um plano claro. Impressionante.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-6">
            Quem já subiu de <span className="text-gradient">nível</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-secondary border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.company}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
