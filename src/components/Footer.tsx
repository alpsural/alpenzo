const Footer = () => {
  return (
    <footer className="bg-secondary py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-display text-3xl tracking-[0.3em] text-gradient-gold mb-4">ALPENZO</p>
          <p className="font-display text-sm text-muted-foreground italic mb-8">Zirve, sadelikte saklıdır.</p>
          <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />
          <p className="font-body text-xs text-muted-foreground tracking-wider">
            © {new Date().getFullYear()} Alpenzo. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
