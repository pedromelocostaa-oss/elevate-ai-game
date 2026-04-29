import { Clock, Eye, Wrench, RefreshCw, Search, FileText, ShieldCheck, Sparkles } from "lucide-react";

const outcomes = [
  {
    icon: Clock,
    title: "Montar propostas em 15 minutos",
    desc: "Não em 3–4 horas como hoje. Com IA gerando a estrutura, você só revisa e ajusta.",
  },
  {
    icon: FileText,
    title: "Analisar documentos de 40 páginas em segundos",
    desc: "Contratos, relatórios, pesquisas de mercado — sem ler linha por linha. Pergunte e receba o que importa.",
  },
  {
    icon: Wrench,
    title: "Criar dashboards e ferramentas internas",
    desc: "Em horas, sem precisar de TI, sem fila de desenvolvimento, sem esperar meses.",
  },
  {
    icon: RefreshCw,
    title: "Automatizar follow-ups e atualizações de CRM",
    desc: "Zero esquecimento. A automação roda sozinha e você foca no que gera valor real.",
  },
  {
    icon: Search,
    title: "Pesquisar clientes, concorrentes e tendências",
    desc: "Em minutos, com fontes verificadas — não com buscas no Google que tomam horas.",
  },
  {
    icon: Eye,
    title: "Produzir apresentações e conteúdos",
    desc: "Em fração do tempo atual. Sem partir de zero, sem bloco em branco.",
  },
  {
    icon: ShieldCheck,
    title: "Identificar riscos em contratos antes de assinar",
    desc: "Não depois de descobrir o problema. Com IA revisando os pontos críticos para você.",
  },
  {
    icon: Sparkles,
    title: "Ter um plano de IA feito para a sua área e rotina",
    desc: "Via diagnóstico personalizado: você descreve seu trabalho, a IA entrega ações concretas para aplicar na semana seguinte.",
  },
];

const stats = [
  { value: "4 módulos", label: "do básico ao avançado" },
  { value: "9 ferramentas", label: "ensinadas na prática" },
  { value: "40+ prompts", label: "prontos para usar hoje" },
  { value: "7 áreas", label: "cobertas com casos reais" },
];

const LearningSection = () => {
  return (
    <section id="conteudo" className="section-padding" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center tracking-tight mb-4">
          O que você vai conseguir fazer depois da Virada Profissional
        </h2>
        <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
          Não uma lista de módulos — uma lista de coisas que vão mudar no seu trabalho a partir da primeira semana.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {outcomes.map((o, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <o.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-sm mb-1">{o.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center p-5 rounded-xl border border-border bg-card">
              <p className="text-2xl font-extrabold text-primary mb-1">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
