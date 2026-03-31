import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="kontakt" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-2">Schaden melden</h2>
          <p className="text-muted-foreground text-sm font-body mb-10">Kontaktieren Sie uns – wir melden uns schnellstmöglich.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <ScrollReveal>
            {submitted ? (
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
                <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="font-heading text-2xl text-foreground mb-1">Anfrage erhalten!</p>
                <p className="text-muted-foreground text-sm font-body">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 font-body">Name *</label>
                    <input type="text" required className="w-full border border-input bg-background rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5 font-body">Telefon *</label>
                    <input type="tel" required className="w-full border border-input bg-background rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="Telefonnummer" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 font-body">E-Mail</label>
                  <input type="email" className="w-full border border-input bg-background rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body" placeholder="Ihre E-Mail-Adresse" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 font-body">Leistung</label>
                  <select className="w-full border border-input bg-background rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-muted-foreground font-body">
                    <option value="">Bitte wählen...</option>
                    <option>Unfallgutachten</option>
                    <option>Kostenvoranschlag</option>
                    <option>Wertgutachten</option>
                    <option>LKW Gutachten</option>
                    <option>E-Auto & Hybrid</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 font-body">Nachricht *</label>
                  <textarea required rows={4} className="w-full border border-input bg-background rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none font-body" placeholder="Beschreiben Sie kurz Ihr Anliegen..." />
                </div>
                <button type="submit" className="w-full gold-gradient text-accent-foreground font-bold py-3.5 text-sm tracking-wide rounded-md flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> Unverbindlich anfragen
                </button>
                <p className="text-xs text-muted-foreground text-center font-body">Kostenlose Beratung für Ihren Schadensfall</p>
              </form>
            )}
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-5">
              <div className="blue-gradient rounded-lg p-7 text-primary-foreground">
                <h3 className="font-heading text-xl mb-5 tracking-wide">ING Kfz Gutachten</h3>
                <div className="space-y-4">
                  <a href="tel:053122436430" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="font-bold font-body">0531 - 22 436 430</span>
                  </a>
                  <a href="mailto:info@kfz-sachverstaendiger-braunschweig.de" className="flex items-center gap-3 hover:text-accent transition-colors">
                    <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-body break-all">info@kfz-sachverstaendiger-braunschweig.de</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-body">Braunschweig & Region</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-body">Mo–Fr: 08:00–18:00 · Sa: nach Vereinbarung</span>
                  </div>
                </div>
              </div>

              <div className="border border-border rounded-lg p-5">
                <h4 className="font-heading text-lg text-foreground mb-2 tracking-wide">Kostenlose Beratung</h4>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  Rufen Sie uns an – wir beraten Sie kostenlos und unverbindlich. Bei unverschuldeten Unfällen übernimmt die gegnerische Versicherung alle Kosten.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
