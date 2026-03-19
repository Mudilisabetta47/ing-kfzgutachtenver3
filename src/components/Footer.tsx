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
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            Ihr unabhängiger Sachverständiger in Hannover für Unfallgutachten, Fahrzeugbewertungen und mehr.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-5">Navigation</h4>
          <ul className="space-y-2">
            {["Start", "Leistungen", "Über uns", "Ablauf", "FAQ", "Kontakt"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace("ü", "ue").replace(" ", "-")}`} className="text-primary-foreground/60 text-sm hover:text-accent transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3 text-accent" /> {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-5">Kontakt</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /><a href="tel:051112345678" className="hover:text-accent transition-colors">0511 / 12345678</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /><a href="mailto:info@gutachter-hannover.de" className="hover:text-accent transition-colors">info@gutachter-hannover.de</a></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" />Hannover und Region</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-xl mb-5">Öffnungszeiten</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Mo – Fr: 08:00 – 18:00</li>
            <li>Sa: nach Vereinbarung</li>
            <li>So: geschlossen</li>
          </ul>
          <a href="#kontakt" className="mt-6 inline-block gold-gradient text-accent-foreground font-bold text-xs px-5 py-2.5 uppercase tracking-wider hover:brightness-110 transition-all">
            Termin anfragen
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-narrow px-4 py-4 flex flex-wrap justify-between items-center gap-4 text-xs text-primary-foreground/40">
        <span>© 2026 ING KFZ Gutachten</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent transition-colors">Impressum</a>
          <a href="#" className="hover:text-accent transition-colors">Datenschutz</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
