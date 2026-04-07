const FooterSection = () => {
  return (
    <footer className="px-4 py-8 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-display font-semibold text-foreground">Nível IA</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
        </div>
        <span>© 2025 Nível IA. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default FooterSection;
