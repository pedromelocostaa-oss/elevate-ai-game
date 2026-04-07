const FooterSection = () => {
  return (
    <footer className="px-4 py-8" style={{ backgroundColor: 'hsl(var(--cta-bg))' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 border-t border-white/10 pt-8">
        <span className="font-bold text-white">Nível IA</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
        </div>
        <span>© 2025 Nível IA. Todos os direitos reservados.</span>
      </div>
    </footer>
  );
};

export default FooterSection;
