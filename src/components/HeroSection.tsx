import chatgptLogo from "@/assets/logos/chatgpt.png";
import claudeLogo from "@/assets/logos/claude.png";
import geminiLogo from "@/assets/logos/gemini.png";
import copilotLogo from "@/assets/logos/copilot.png";
import lovableLogo from "@/assets/logos/lovable.png";
import cursorLogo from "@/assets/logos/cursor.png";
import n8nLogo from "@/assets/logos/n8n.png";
import perplexityLogo from "@/assets/logos/perplexity.png";
import notebooklmLogo from "@/assets/logos/notebooklm.png";

const toolLogos = [
  { name: "ChatGPT", logo: chatgptLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Gemini", logo: geminiLogo },
  { name: "Copilot", logo: copilotLogo },
  { name: "Lovable", logo: lovableLogo },
  { name: "Cursor", logo: cursorLogo },
  { name: "n8n", logo: n8nLogo },
  { name: "Perplexity", logo: perplexityLogo },
  { name: "NotebookLM", logo: notebooklmLogo },
];

const HeroSection = () => {
  return (
    <>
      <section className="section-padding min-h-[85vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-6">
            O profissional que dominar a IA será{" "}
            <span className="text-primary">promovido.</span>
            <br />
            O que ignorar será{" "}
            <span className="text-muted-foreground">substituído.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Nível IA é a plataforma que transforma profissionais comuns em profissionais indispensáveis — usando as ferramentas de IA que já existem, mas que quase ninguém sabe usar de verdade.
          </p>

          <a
            href="#checkout"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Quero meu Nível IA agora — R$97
          </a>

          <p className="mt-4 text-sm text-muted-foreground">
            🔒 Acesso imediato após a compra • Garantia de 7 dias
          </p>
        </div>
      </section>

      {/* Tools bar */}
      <div className="py-8 px-4" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground mb-6">Ferramentas que você vai dominar:</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {toolLogos.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-2">
                <img src={t.logo} alt={t.name} loading="lazy" width={36} height={36} className="w-9 h-9 object-contain" />
                <span className="text-xs text-muted-foreground font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
