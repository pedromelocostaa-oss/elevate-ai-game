import chatgptLogo from "@/assets/logos/chatgpt.png";
import claudeLogo from "@/assets/logos/claude.png";
import geminiLogo from "@/assets/logos/gemini.svg";
import copilotLogo from "@/assets/logos/copilot.svg";
import lovableLogo from "@/assets/logos/lovable.png";
import cursorLogo from "@/assets/logos/cursor.svg";
import n8nLogo from "@/assets/logos/n8n.svg";
import perplexityLogo from "@/assets/logos/perplexity.svg";
import notebooklmLogo from "@/assets/logos/notebooklm.svg";
import { HOTMART_URL, PRICE } from "@/lib/constants";

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

const marqueeItems = [...toolLogos, ...toolLogos];

const HeroSection = () => {
  return (
    <>
      <section className="section-padding min-h-[72vh] sm:min-h-[88vh] flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-5 sm:mb-8 tracking-wide uppercase">
            Para profissionais empregados
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground mb-5 sm:mb-6">
            Você usa IA todo dia.
            <br />
            Seu colega também.{" "}
            <span className="text-primary">Só um de vocês vai ser promovido.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            A maioria usa ChatGPT para pesquisas básicas. Os profissionais que estão
            sendo promovidos usam IA para entregar em 15 minutos o que leva 4 horas,
            automatizar o que esqueceriam e resolver problemas sem depender de TI.
            Virada Profissional te mostra exatamente como.
          </p>

          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex sm:inline-flex justify-center items-center gap-3 w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold text-base sm:text-lg rounded-xl hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            Quero me tornar indispensável →
          </a>

          <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
            🔒 Acesso imediato · Garantia de 7 dias · {PRICE} uma única vez
          </p>
        </div>
      </section>

      <div className="py-8 overflow-hidden" style={{ backgroundColor: 'hsl(var(--section-alt))' }}>
        <p className="text-xs font-semibold text-muted-foreground mb-6 text-center uppercase tracking-widest">
          Ferramentas que você vai dominar
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to right, hsl(var(--section-alt)), transparent)' }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: 'linear-gradient(to left, hsl(var(--section-alt)), transparent)' }} />

          <div className="flex animate-marquee w-max gap-10 md:gap-14">
            {marqueeItems.map((t, i) => (
              <div key={i} className="flex flex-col items-center gap-2 shrink-0">
                <img src={t.logo} alt={t.name} width={36} height={36} className="w-9 h-9 object-contain" />
                <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
