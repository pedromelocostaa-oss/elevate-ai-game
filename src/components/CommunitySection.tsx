import { MessageCircle, Users, SlidersHorizontal } from "lucide-react";

const filters = {
  tools: ["ChatGPT", "Claude", "Gemini", "Lovable", "n8n"],
  areas: ["Marketing", "Vendas", "RH", "Operações", "Jurídico", "Financeiro"],
};

const cases = [
  {
    tool: "Lovable",
    toolColor: "bg-violet-100 text-violet-700",
    area: "Marketing",
    title: "Criei um CRM de marketing do zero com Claude e Lovable — e finalmente consegui mostrar o que o setor produz para os meus superiores",
    result: "Finalmente consigo mostrar com clareza o volume e a estratégia por trás de cada publicação.",
    author: "Yara",
    role: "",
  },
  {
    tool: "Claude",
    toolColor: "bg-orange-100 text-orange-700",
    area: "Jurídico",
    title: "Como o Claude organizou minha semana inteira em 5 minutos — integrado ao Google Calendar",
    result: "Economizei tempo que gastaria reorganizando tarefas manualmente. Minha semana ficou muito mais clara.",
    author: "Ana Ribeiro",
    role: "",
  },
  {
    tool: "Lovable",
    toolColor: "bg-violet-100 text-violet-700",
    area: "Vendas",
    title: "Como criei propostas de venda interativas com IA — e aumentei minhas conversões",
    result: "Minhas conversões aumentaram e o processo ficou mais claro para o cliente — ele passa a ver o valor do serviço antes mesmo da reunião.",
    author: "Pedro Costa",
    role: "",
  },
];

const CommunitySection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            <Users className="w-3.5 h-3.5" />
            Incluso no seu acesso
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Uma comunidade de profissionais compartilhando o que construíram com IA
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Filtre por área ou ferramenta e veja o que outros alunos da sua função já
            colocaram em prática. Quando você construir algo, compartilha também.
          </p>
        </div>

        {/* Filtros — visual only, representa a UI real do produto */}
        <div className="mb-8 p-5 rounded-xl border border-border bg-card">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Filtros disponíveis dentro da plataforma</span>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium w-16 shrink-0">Ferramenta</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">Todos</span>
              {filters.tools.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground font-medium w-16 shrink-0">Área</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">Todos</span>
              {filters.areas.map((a) => (
                <span key={a} className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">{a}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Cards de cases reais */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {cases.map((c, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card flex flex-col gap-4">
              {/* Tags */}
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${c.toolColor}`}>{c.tool}</span>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">{c.area}</span>
              </div>

              {/* Título */}
              <h3 className="font-bold text-sm text-foreground leading-snug">{c.title}</h3>

              {/* Resultado */}
              <div className="mt-auto p-3 rounded-lg bg-primary/5 border border-primary/10">
                <p className="text-xs text-primary leading-relaxed italic">"{c.result}"</p>
              </div>

              {/* Autor */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                    {c.author.charAt(0)}
                  </div>
                  <span className="text-xs font-medium text-foreground">{c.author}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>0</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da seção */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Acesse a <span className="font-semibold text-foreground">Comunidade Virada IA</span> dentro da plataforma após sua compra —
            filtre por área, leia o que outros construíram e compartilhe o seu.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;
