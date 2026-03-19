import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Startseite", href: "#start" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-card sticky top-0 z-50 shadow-sm">
      <div className="container-narrow flex items-center justify-between py-4 px-4">
        <a href="#start" className="flex items-center gap-2">
          <div className="bg-primary rounded-sm p-2">
            <span className="text-primary-foreground font-heading font-bold text-lg leading-none">KG</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-foreground text-base md:text-lg">Kfz Gutachter</span>
            <span className="block text-xs text-muted-foreground">Mustermann · Hannover</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="bg-accent text-accent-foreground font-bold text-sm px-5 py-2.5 rounded hover:brightness-110 transition-all"
          >
            Jetzt Termin anfragen
          </a>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t bg-card px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-3 text-sm font-semibold text-foreground border-b border-border"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="mt-3 block text-center bg-accent text-accent-foreground font-bold text-sm px-5 py-2.5 rounded"
            onClick={() => setMobileOpen(false)}
          >
            Jetzt Termin anfragen
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
