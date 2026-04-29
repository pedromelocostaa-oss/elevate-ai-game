import { HOTMART_URL, PRICE } from "@/lib/constants";

const NavHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <span className="font-extrabold text-foreground tracking-tight text-sm md:text-base">
          Virada Profissional
        </span>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#problema" className="hover:text-foreground transition-colors">O problema</a>
          <a href="#ferramentas" className="hover:text-foreground transition-colors">Ferramentas</a>
          <a href="#conteudo" className="hover:text-foreground transition-colors">Conteúdo</a>
          <a href="#faq" className="hover:text-foreground transition-colors">Dúvidas</a>
        </nav>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary text-primary-foreground font-bold text-sm rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          <span className="sm:hidden">{PRICE}</span>
          <span className="hidden sm:inline">Garantir acesso — {PRICE}</span>
        </a>
      </div>
    </header>
  );
};

export default NavHeader;
