import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">Kontakt</span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mt-3">Jetzt anfragen</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {submitted ? (
              <div className="bg-secondary border-l-4 border-accent p-8 text-center">
                <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
                <p className="text-foreground font-bold text-lg mb-2 font-heading text-2xl">Anfrage erhalten!</p>
                <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Name *</label>
                  <input type="text" required className="w-full border border-input bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all" placeholder="Ihr vollständiger Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Telefon *</label>
                  <input type="tel" required className="w-full border border-input bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all" placeholder="Ihre Telefonnummer" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">E-Mail</label>
                  <input type="email" className="w-full border border-input bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all" placeholder="Ihre E-Mail-Adresse" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Nachricht *</label>
                  <textarea required rows={5} className="w-full border border-input bg-background px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all resize-none" placeholder="Beschreiben Sie kurz Ihr Anliegen…" />
                </div>
                <button type="submit" className="w-full gold-gradient text-accent-foreground font-bold py-4 hover:brightness-110 transition-all text-base uppercase tracking-wider flex items-center justify-center gap-2">
                  <Send className="h-5 w-5" />
                  Unverbindlich anfragen
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="blue-gradient p-8 text-primary-foreground">
              <h3 className="font-heading text-2xl mb-6">Kfz Gutachter Mustermann</h3>
              <div className="space-y-4">
                <a href="tel:051112345678" className="flex items-center gap-4 hover:text-accent transition-colors">
                  <div className="gold-gradient w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span className="font-bold text-lg">0511 / 12345678</span>
                </a>
                <a href="mailto:info@gutachter-hannover.de" className="flex items-center gap-4 hover:text-accent transition-colors">
                  <div className="gold-gradient w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span>info@gutachter-hannover.de</span>
                </a>
                <div className="flex items-center gap-4">
                  <div className="gold-gradient w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <span>Hannover und Region</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="gold-gradient w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p>Mo – Fr: 08:00 – 18:00</p>
                    <p className="text-primary-foreground/60 text-sm">Sa: nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-accent bg-accent/5 p-6">
              <h4 className="font-heading text-xl text-foreground mb-2">Kostenlose Erstberatung</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rufen Sie uns an – wir beraten Sie kostenlos zu Ihrem Schadenfall.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
