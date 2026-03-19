import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Kontakt</span>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground mt-3">Jetzt anfragen</h2>
            <div className="section-divider" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div>
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-primary/5 border-l-4 border-primary p-8 text-center"
                >
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-heading text-2xl text-foreground mb-2">Anfrage erhalten!</p>
                  <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Name *</label>
                      <input type="text" required className="w-full border border-input bg-card px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Telefon *</label>
                      <input type="tel" required className="w-full border border-input bg-card px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Telefonnummer" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">E-Mail</label>
                    <input type="email" className="w-full border border-input bg-card px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="Ihre E-Mail-Adresse" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Leistung</label>
                    <select className="w-full border border-input bg-card px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all text-muted-foreground">
                      <option value="">Bitte wählen...</option>
                      <option>Unfallgutachten</option>
                      <option>Schadengutachten</option>
                      <option>Fahrzeugbewertung</option>
                      <option>Oldtimerbewertung</option>
                      <option>Leasing-Rückgabe</option>
                      <option>Beweissicherung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2 uppercase tracking-wider">Nachricht *</label>
                    <textarea required rows={4} className="w-full border border-input bg-card px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none" placeholder="Beschreiben Sie kurz Ihr Anliegen…" />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground font-bold py-4 text-base uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Send className="h-5 w-5" />
                    Unverbindlich anfragen
                  </motion.button>
                  <p className="text-xs text-muted-foreground text-center">Kostenlose & unverbindliche Erstberatung</p>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="blue-gradient p-8 text-primary-foreground shadow-xl">
                <h3 className="font-heading text-2xl mb-6">ING KFZ Gutachten</h3>
                <div className="space-y-5">
                  <a href="tel:051112345678" className="flex items-center gap-4 hover:text-accent transition-colors group">
                    <div className="gold-gradient w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-md"><Phone className="h-5 w-5 text-accent-foreground" /></div>
                    <div>
                      <span className="font-bold text-lg block">0511 / 12345678</span>
                      <span className="text-primary-foreground/50 text-xs">Jetzt anrufen</span>
                    </div>
                  </a>
                  <a href="mailto:info@gutachter-hannover.de" className="flex items-center gap-4 hover:text-accent transition-colors">
                    <div className="gold-gradient w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-md"><Mail className="h-5 w-5 text-accent-foreground" /></div>
                    <div>
                      <span className="block">info@gutachter-hannover.de</span>
                      <span className="text-primary-foreground/50 text-xs">E-Mail schreiben</span>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="gold-gradient w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-md"><MapPin className="h-5 w-5 text-accent-foreground" /></div>
                    <div>
                      <span className="block">Hannover und Region</span>
                      <span className="text-primary-foreground/50 text-xs">Vor-Ort-Service</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="gold-gradient w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-md"><Clock className="h-5 w-5 text-accent-foreground" /></div>
                    <div>
                      <p>Mo – Fr: 08:00 – 18:00</p>
                      <p className="text-primary-foreground/50 text-xs">Sa: nach Vereinbarung</p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className="border-2 border-primary bg-primary/5 p-6"
                whileHover={{ borderColor: "hsl(45, 100%, 50%)" }}
              >
                <h4 className="font-heading text-xl text-foreground mb-2 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-primary" /> Kostenlose Erstberatung
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">Rufen Sie uns an – wir beraten Sie kostenlos und unverbindlich zu Ihrem Schadenfall.</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
