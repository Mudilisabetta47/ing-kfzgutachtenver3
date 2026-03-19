import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow px-4 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Kfz Gutachter Mustermann</h4>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Ihr unabhängiger Kfz-Sachverständiger in Hannover. Professionelle Gutachten für Unfallschäden, Fahrzeugbewertungen und mehr.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#start" className="hover:text-accent transition-colors">Startseite</a></li>
            <li><a href="#leistungen" className="hover:text-accent transition-colors">Leistungen</a></li>
            <li><a href="#ueber-uns" className="hover:text-accent transition-colors">Über uns</a></li>
            <li><a href="#ablauf" className="hover:text-accent transition-colors">Ablauf</a></li>
            <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            <li><a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:051112345678" className="hover:text-accent transition-colors">0511 / 12345678</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:info@gutachter-hannover.de" className="hover:text-accent transition-colors">info@gutachter-hannover.de</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span>Hannover und Region</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Öffnungszeiten</h4>
          <ul className="space-y-1 text-sm text-primary-foreground/70">
            <li>Mo – Fr: 08:00 – 18:00 Uhr</li>
            <li>Sa: nach Vereinbarung</li>
            <li>So: geschlossen</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container-narrow px-4 py-4 flex flex-wrap justify-between items-center gap-4 text-xs text-primary-foreground/50">
        <span>© 2026 Kfz Gutachter Mustermann. Alle Rechte vorbehalten.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent transition-colors">Impressum</a>
          <a href="#" className="hover:text-accent transition-colors">Datenschutz</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
