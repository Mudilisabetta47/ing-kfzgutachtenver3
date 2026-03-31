import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo-ing.png";

const navItems = [
  { label: "Start", href: "/" },
  {
    label: "Gutachten",
    children: [
      { label: "Unfall-Gutachten", href: "/haftpflichtschaden" },
      { label: "Kostenvoranschlag", href: "/kostenvoranschlag" },
      { label: "Wertgutachten", href: "/wertgutachten" },
      { label: "Kfz Gutachter", href: "/der-kfz-gutachter" },
    ],
  },
  {
    label: "Elektromobilität",
    children: [
      { label: "Gutachten Elektroauto", href: "/gutachter-elektro-hybrid" },
    ],
  },
  {
    label: "Infos",
    children: [
      { label: "Unabhängiger Kfz Gutachter", href: "/der-kfz-gutachter" },
      { label: "Ihre Rechte", href: "/ihre-rechte" },
      { label: "Nutzungsausfall", href: "/nutzungsausfall" },
      { label: "Reparaturbestätigung", href: "/reparaturbestaetigung" },
    ],
  },
  { label: "Anfahrt", href: "/anfahrt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-primary-dark text-primary-foreground/70 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:053122436430" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Phone className="h-3 w-3 text-accent" />
              0531 - 22 436 430
            </a>
            <a href="mailto:info@kfz-sachverstaendiger-braunschweig.de" className="flex items-center gap-1.5 hover:text-accent transition-colors">
              <Mail className="h-3 w-3 text-accent" />
              info@kfz-sachverstaendiger-braunschweig.de
            </a>
          </div>
          <span className="text-primary-foreground/40">Mo–Fr: 08:00 – 18:00 Uhr</span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-primary-dark/95 backdrop-blur-md shadow-2xl"
            : "bg-primary-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center">
            <img src={logoImg} alt="ING KFZ Gutachten" className="h-10 md:h-12" />
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="px-4 py-2.5 text-[13px] font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide flex items-center gap-1 uppercase">
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </button>
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-0 bg-card border border-border shadow-2xl py-1.5 min-w-[220px] z-50"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-5 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href!}
                  className="px-4 py-2.5 text-[13px] font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors tracking-wide uppercase"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:053122436430"
              className="text-primary-foreground/70 hover:text-accent transition-colors text-sm flex items-center gap-2"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              to="/schaden-melden"
              className="gold-gradient text-accent-foreground font-bold text-xs px-6 py-2.5 uppercase tracking-wider hover:brightness-110 transition-all"
            >
              Schaden melden
            </Link>
          </div>

          <button className="lg:hidden p-2 text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-primary-dark border-t border-primary-foreground/10 px-4 pb-4"
          >
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <span className="block py-3 text-xs font-bold text-primary-foreground/40 uppercase tracking-wider mt-2">{item.label}</span>
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href} className="block py-2.5 pl-4 text-sm text-primary-foreground/70 border-b border-primary-foreground/5" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link to={item.href!} className="block py-3 text-sm font-medium text-primary-foreground/80 border-b border-primary-foreground/10 uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/schaden-melden" className="mt-4 block text-center gold-gradient text-accent-foreground font-bold text-sm px-6 py-3 uppercase tracking-wide" onClick={() => setMobileOpen(false)}>
              Schaden melden
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
