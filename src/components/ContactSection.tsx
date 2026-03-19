import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Kontaktieren Sie uns</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rufen Sie uns an oder nutzen Sie das Kontaktformular – wir beraten Sie kostenlos und unverbindlich.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded p-8 text-center">
                <p className="text-green-800 font-semibold text-lg mb-2">Vielen Dank für Ihre Anfrage!</p>
                <p className="text-green-700">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full border border-input rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Telefon *</label>
                  <input
                    type="tel"
                    required
                    className="w-full border border-input rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">E-Mail</label>
                  <input
                    type="email"
                    className="w-full border border-input rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-1">Nachricht *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-input rounded px-4 py-3 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground font-bold py-3.5 rounded hover:brightness-110 transition-all text-base"
                >
                  Jetzt unverbindlich anfragen
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-primary rounded p-6 text-primary-foreground">
              <h3 className="font-heading text-lg font-bold mb-4">Kfz Gutachter Mustermann</h3>
              <div className="space-y-3">
                <a href="tel:051112345678" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-semibold text-lg">0511 / 12345678</span>
                </a>
                <a href="mailto:info@gutachter-hannover.de" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                  <span>info@gutachter-hannover.de</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-accent" />
                  <span>Hannover und Region</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p>Mo – Fr: 08:00 – 18:00 Uhr</p>
                    <p>Sa: nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded p-6">
              <h4 className="font-heading font-bold text-foreground mb-2">Kostenlose Erstberatung</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Rufen Sie uns an – wir beraten Sie kostenlos und unverbindlich zu Ihrem Schadenfall und klären, ob ein Gutachten sinnvoll ist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
