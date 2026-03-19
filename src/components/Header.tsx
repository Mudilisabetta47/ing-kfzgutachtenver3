import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Start", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-50 shadow-md">
      <div className="container-narrow flex items-center justify-between py-3 px-4">
        <a href="#start" className="flex items-center gap-3">
          <div className="gold-gradient w-12 h-12 flex items-center justify-center">
            <span className="font-heading text-accent-foreground text-2xl leading-none tracking-wider">KG</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading text-foreground text-xl md:text-2xl tracking-wide">Kfz Gutachter</span>
            <span className="block text-xs text-muted-foreground font-medium tracking-wider uppercase">Mustermann · Hannover</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="ml-3 gold-gradient text-accent-foreground font-bold text-sm px-6 py-3 flex items-center gap-2 hover:brightness-110 transition-all uppercase tracking-wider"
          >
            <Phone className="h-4 w-4" />
            Termin anfragen
          </a>
        </nav>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-card px-4 pb-4">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="block py-3 text-sm font-bold text-foreground border-b border-border uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#kontakt" className="mt-4 block text-center gold-gradient text-accent-foreground font-bold text-sm px-6 py-3 uppercase tracking-wider" onClick={() => setMobileOpen(false)}>
            Termin anfragen
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
