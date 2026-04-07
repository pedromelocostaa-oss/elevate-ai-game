import chatgptLogo from "@/assets/logos/chatgpt.png";
import claudeLogo from "@/assets/logos/claude.png";
import geminiLogo from "@/assets/logos/gemini.png";
import copilotLogo from "@/assets/logos/copilot.png";
import lovableLogo from "@/assets/logos/lovable.png";
import cursorLogo from "@/assets/logos/cursor.png";
import n8nLogo from "@/assets/logos/n8n.png";
import perplexityLogo from "@/assets/logos/perplexity.png";
import notebooklmLogo from "@/assets/logos/notebooklm.png";

const tools = [
  { logo: chatgptLogo, name: "ChatGPT", desc: "Pare de usar só para pesquisas. Aprenda a usá-lo como um assistente de trabalho completo para escrita, análise e tomada de decisão." },
  { logo: claudeLogo, name: "Claude", desc: "O modelo mais preciso para análise profunda, escrita profissional e execução de tarefas complexas com documentos longos." },
  { logo: claudeLogo, name: "Claude Cowork", desc: "Rode múltiplos assistentes de IA em paralelo — como ter uma equipe extra executando tarefas ao mesmo tempo enquanto você foca no que importa." },
  { logo: claudeLogo, name: "Claude Code", desc: "Descreva o que precisa em português e a IA constrói, ajusta e corrige sistemas para você — sem precisar saber programar." },
  { logo: geminiLogo, name: "Gemini", desc: "Integrado nativamente ao Google Docs, Gmail e Sheets. Analisa planilhas, resume e-mails e gera documentos direto nas ferramentas que você já usa." },
  { logo: copilotLogo, name: "Microsoft Copilot", desc: "IA dentro do Word, Excel, PowerPoint e Teams. Gera relatórios, analisa dados e cria apresentações sem sair do pacote Office." },
  { logo: lovableLogo, name: "Lovable", desc: "Crie ferramentas internas, formulários e painéis descrevendo o que precisa — sem depender do time de TI nem de ninguém de tecnologia." },
  { logo: cursorLogo, name: "Cursor", desc: "Construa e ajuste sistemas internos conversando em português. Ideal para quem precisa de soluções rápidas sem fila de desenvolvimento." },
  { logo: n8nLogo, name: "n8n", desc: "Conecte suas ferramentas e elimine tarefas repetitivas com automações visuais. Sem código, sem complicação, sem depender de ninguém." },
  { logo: perplexityLogo, name: "Perplexity", desc: "Pesquisa inteligente com fontes verificadas. Substitua o Google nas suas pesquisas profissionais e receba respostas completas e confiáveis." },
  { logo: notebooklmLogo, name: "NotebookLM", desc: "Transforme documentos, relatórios e reuniões em conhecimento estruturado. Faça perguntas sobre seus próprios arquivos e obtenha respostas precisas." },
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
                <img src={t.logo} alt={t.name} loading="lazy" width={28} height={28} className="w-7 h-7 object-contain" />
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
