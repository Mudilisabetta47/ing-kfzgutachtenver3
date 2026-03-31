import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo-ing.png";

const navItems = [
  { label: "Start", href: "#start" },
  { label: "Gutachten", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-card/98 backdrop-blur-xl shadow-xl border-b border-border" : "bg-card shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-narrow flex items-center justify-between py-3 px-4">
        <a href="#start" className="flex items-center">
          <img src={logoImg} alt="ING KFZ Gutachten" className="h-11 md:h-14" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors tracking-wide group"
            >
              {item.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
            </a>
          ))}
          <motion.a
            href="#kontakt"
            className="ml-4 gold-gradient text-accent-foreground font-bold text-sm px-7 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition-all tracking-wide shadow-lg shadow-accent/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="h-4 w-4" />
            Jetzt anfragen
          </motion.a>
        </nav>

        <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menü">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t bg-card px-4 pb-4"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-3.5 text-sm font-bold text-foreground border-b border-border/50 tracking-wide" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="mt-4 block text-center gold-gradient text-accent-foreground font-bold text-sm px-6 py-3.5 rounded-lg tracking-wide" onClick={() => setMobileOpen(false)}>
              Jetzt anfragen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
