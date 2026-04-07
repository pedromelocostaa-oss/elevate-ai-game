import { MessageSquare, Brain, Users, Code, Sparkles, Monitor, Blocks, Terminal, Workflow, Search, BookOpen } from "lucide-react";

const tools = [
  { icon: MessageSquare, name: "ChatGPT", desc: "Pare de usar só para pesquisas. Aprenda a usá-lo como um assistente de trabalho completo para escrita, análise e tomada de decisão." },
  { icon: Brain, name: "Claude", desc: "O modelo mais preciso para análise profunda, escrita profissional e execução de tarefas complexas com documentos longos." },
  { icon: Users, name: "Claude Cowork", desc: "Rode múltiplos assistentes de IA em paralelo — como ter uma equipe extra executando tarefas ao mesmo tempo enquanto você foca no que importa." },
  { icon: Code, name: "Claude Code", desc: "Descreva o que precisa em português e a IA constrói, ajusta e corrige sistemas para você — sem precisar saber programar." },
  { icon: Sparkles, name: "Gemini", desc: "Integrado nativamente ao Google Docs, Gmail e Sheets. Analisa planilhas, resume e-mails e gera documentos direto nas ferramentas que você já usa." },
  { icon: Monitor, name: "Microsoft Copilot", desc: "IA dentro do Word, Excel, PowerPoint e Teams. Gera relatórios, analisa dados e cria apresentações sem sair do pacote Office." },
  { icon: Blocks, name: "Lovable", desc: "Crie ferramentas internas, formulários e painéis descrevendo o que precisa — sem depender do time de TI nem de ninguém de tecnologia." },
  { icon: Terminal, name: "Cursor", desc: "Construa e ajuste sistemas internos conversando em português. Ideal para quem precisa de soluções rápidas sem fila de desenvolvimento." },
  { icon: Workflow, name: "n8n", desc: "Conecte suas ferramentas e elimine tarefas repetitivas com automações visuais. Sem código, sem complicação, sem depender de ninguém." },
  { icon: Search, name: "Perplexity", desc: "Pesquisa inteligente com fontes verificadas. Substitua o Google nas suas pesquisas profissionais e receba respostas completas e confiáveis." },
  { icon: BookOpen, name: "NotebookLM", desc: "Transforme documentos, relatórios e reuniões em conhecimento estruturado. Faça perguntas sobre seus próprios arquivos e obtenha respostas precisas." },
];

const ToolsSection = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            As ferramentas que os profissionais mais valorizados já dominam.
          </h2>
          <p className="text-muted-foreground text-lg">
            Você vai sair daqui sabendo usar cada uma delas no seu trabalho.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((t, i) => (
            <div key={i} className="p-6 rounded-xl border border-border bg-card hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <t.icon className="w-5 h-5 text-primary shrink-0" />
                <h3 className="font-bold">{t.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
