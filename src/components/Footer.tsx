import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import logoImg from "@/assets/logo-ing.png";

const Footer = () => (
  <footer className="blue-gradient text-primary-foreground">
    <div className="container-narrow px-4 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-5">
            <img src={logoImg} alt="ING KFZ Gutachten" className="h-10 brightness-0 invert" />
          </div>
          <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
            Ihr unabhängiger Sachverständiger in Hannover für Unfallgutachten, Fahrzeugbewertungen und mehr. Zertifiziert und unabhängig seit über 15 Jahren.
          </p>
          <div className="w-12 h-1 gold-gradient rounded-full" />
        </div>

        <div>
          <h4 className="font-heading text-xl mb-5 text-accent">Gutachten</h4>
          <ul className="space-y-2">
            {[
              { label: "PKW Gutachten", href: "/kfz-gutachten" },
              { label: "LKW Gutachten", href: "/lkw-gutachten" },
              { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
              { label: "Motorrad", href: "/motorrad-gutachten" },
              { label: "Oldtimer", href: "/oldtimer-gutachten" },
              { label: "Bagatellschäden", href: "/bagatellschaeden" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-primary-foreground/60 text-sm hover:text-accent transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3 text-accent/60" /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-5 text-accent">Kontakt</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><a href="tel:051154300976" className="hover:text-accent transition-colors">0511 - 543 00 976</a></li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><a href="tel:017372979763" className="hover:text-accent transition-colors">0173 - 72 79 763</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><a href="mailto:info@ing-gutachten.de" className="hover:text-accent transition-colors">info@ing-gutachten.de</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />Hildesheimer Str. 229, 30519 Hannover</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-5 text-accent">Öffnungszeiten</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Mo – Fr: 08:00 – 18:00</li>
            <li>Sa: nach Vereinbarung</li>
            <li>So: geschlossen</li>
          </ul>
          <Link to="/kontakt" className="mt-6 inline-block gold-gradient text-accent-foreground font-bold text-xs px-5 py-2.5 rounded-lg tracking-wide hover:brightness-110 transition-all shadow-md">
            Termin anfragen
          </Link>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-narrow px-4 py-4 flex flex-wrap justify-between items-center gap-4 text-xs text-primary-foreground/40">
        <span>&copy; 2026 ING Gutachten – Alle Rechte vorbehalten</span>
        <div className="flex gap-4">
          <Link to="/impressum" className="hover:text-accent transition-colors">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-accent transition-colors">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
