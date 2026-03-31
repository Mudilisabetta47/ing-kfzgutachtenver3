import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo-ing.png";

const navItems = [
  { label: "Start", href: "/" },
  {
    label: "Gutachten",
    href: "/kfz-gutachten",
    children: [
      { label: "PKW Gutachten", href: "/kfz-gutachten" },
      { label: "LKW Gutachten", href: "/lkw-gutachten" },
      { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
      { label: "Motorrad Gutachten", href: "/motorrad-gutachten" },
      { label: "Oldtimer Gutachten", href: "/oldtimer-gutachten" },
      { label: "Bagatellschäden", href: "/bagatellschaeden" },
    ],
  },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Ablauf", href: "/#ablauf" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontakt", href: "/kontakt" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
    if (href.startsWith("/#")) {
      return <a href={href} className={className}>{children}</a>;
    }
    return <Link to={href} className={className}>{children}</Link>;
  };

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
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="ING KFZ Gutachten" className="h-11 md:h-14" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="relative px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors tracking-wide group flex items-center gap-1">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 bg-card border border-border rounded-xl shadow-xl py-2 min-w-[220px] z-50"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-5 py-2.5 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors tracking-wide group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </NavLink>
            )
          )}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/kontakt"
              className="ml-4 gold-gradient text-accent-foreground font-bold text-sm px-7 py-3 rounded-lg flex items-center gap-2 hover:brightness-110 transition-all tracking-wide shadow-lg shadow-accent/20"
            >
              <Phone className="h-4 w-4" />
              Jetzt anfragen
            </Link>
          </motion.div>
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
              <div key={item.label}>
                {item.children ? (
                  <>
                    <span className="block py-3 text-xs font-bold text-muted-foreground uppercase tracking-wider mt-2">{item.label}</span>
                    {item.children.map((child) => (
                      <Link key={child.href} to={child.href} className="block py-2.5 pl-4 text-sm font-medium text-foreground border-b border-border/30" onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  item.href.startsWith("/#") ? (
                    <a href={item.href} className="block py-3.5 text-sm font-bold text-foreground border-b border-border/50 tracking-wide" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.href} className="block py-3.5 text-sm font-bold text-foreground border-b border-border/50 tracking-wide" onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            ))}
            <Link to="/kontakt" className="mt-4 block text-center gold-gradient text-accent-foreground font-bold text-sm px-6 py-3.5 rounded-lg tracking-wide" onClick={() => setMobileOpen(false)}>
              Jetzt anfragen
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
