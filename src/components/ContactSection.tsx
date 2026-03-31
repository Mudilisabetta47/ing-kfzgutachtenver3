import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <section id="kontakt" className="section-padding bg-card overflow-hidden">
      <div className="container-narrow">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Kontakt</span>
            <h2 className="font-heading text-4xl md:text-6xl text-foreground mt-3">Jetzt Schaden melden!</h2>
            <div className="section-divider" />
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div>
              {submitted ? (
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-heading text-2xl text-foreground mb-2">Anfrage erhalten!</p>
                  <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Name *</label>
                      <input type="text" required className="w-full border border-input bg-background rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Ihr Name" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Telefon *</label>
                      <input type="tel" required className="w-full border border-input bg-background rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Telefonnummer" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">E-Mail</label>
                    <input type="email" className="w-full border border-input bg-background rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Ihre E-Mail-Adresse" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Leistung</label>
                    <select className="w-full border border-input bg-background rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-muted-foreground">
                      <option value="">Bitte wählen...</option>
                      <option>PKW Gutachten</option>
                      <option>LKW Gutachten</option>
                      <option>E-Auto & Hybrid</option>
                      <option>Kostenvoranschlag</option>
                      <option>Wertgutachten</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Nachricht *</label>
                    <textarea required rows={4} className="w-full border border-input bg-background rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none" placeholder="Beschreiben Sie kurz Ihr Anliegen..." />
                  </div>
                  <motion.button type="submit" className="w-full gold-gradient text-accent-foreground font-bold py-4 text-base tracking-wide rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-accent/20" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Send className="h-5 w-5" /> Unverbindlich anfragen
                  </motion.button>
                  <p className="text-xs text-muted-foreground text-center">Kostenlose Beratung für Ihren Schadensfall</p>
                </form>
              )}
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="blue-gradient p-8 text-primary-foreground shadow-xl rounded-2xl">
                <h3 className="font-heading text-2xl mb-6">ING Kfz Gutachten</h3>
                <div className="space-y-5">
                  <a href="tel:053122436430" className="flex items-center gap-4 hover:text-accent transition-colors">
                    <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><Phone className="h-5 w-5 text-accent-foreground" /></div>
                    <div><span className="font-bold text-lg block">0531 - 22 436 430</span><span className="text-primary-foreground/50 text-xs">Jetzt anrufen</span></div>
                  </a>
                  <a href="mailto:info@kfz-sachverstaendiger-braunschweig.de" className="flex items-center gap-4 hover:text-accent transition-colors">
                    <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><Mail className="h-5 w-5 text-accent-foreground" /></div>
                    <div><span className="block text-sm">info@kfz-sachverstaendiger-braunschweig.de</span><span className="text-primary-foreground/50 text-xs">E-Mail schreiben</span></div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><MapPin className="h-5 w-5 text-accent-foreground" /></div>
                    <div><span className="block">Braunschweig & Region</span><span className="text-primary-foreground/50 text-xs">Vor-Ort-Service</span></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><Clock className="h-5 w-5 text-accent-foreground" /></div>
                    <div><p>Mo – Fr: 08:00 – 18:00</p><p className="text-primary-foreground/50 text-xs">Sa: nach Vereinbarung</p></div>
                  </div>
                </div>
              </div>
              <motion.div className="border-2 border-primary/20 bg-primary/5 p-6 rounded-2xl" whileHover={{ borderColor: "hsl(45, 100%, 50%)" }}>
                <h4 className="font-heading text-xl text-foreground mb-2 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-primary" /> Kostenlose Beratung
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
