import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

const KontaktPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative py-20 blue-gradient overflow-hidden">
        <div className="container-narrow px-4">
          <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
            <Link to="/" className="hover:text-accent transition-colors">Start</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-accent">Kontakt</span>
          </nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-4">Kontakt aufnehmen</h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl">
              Melden Sie sich bei uns – telefonisch, per E-Mail oder über das Kontaktformular. Wir beraten Sie kostenlos und unverbindlich.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div>
                <h2 className="font-heading text-3xl text-foreground mb-6">Schreiben Sie uns</h2>
                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="font-heading text-2xl text-foreground mb-2">Anfrage erhalten!</p>
                    <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Name *</label>
                        <input type="text" required className="w-full border border-input bg-card rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Ihr Name" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Telefon *</label>
                        <input type="tel" required className="w-full border border-input bg-card rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Telefonnummer" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">E-Mail</label>
                      <input type="email" className="w-full border border-input bg-card rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Ihre E-Mail-Adresse" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Leistung</label>
                      <select className="w-full border border-input bg-card rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all text-muted-foreground">
                        <option value="">Bitte wählen...</option>
                        <option>PKW Gutachten</option>
                        <option>LKW Gutachten</option>
                        <option>E-Auto & Hybrid</option>
                        <option>Motorrad Gutachten</option>
                        <option>Oldtimer Gutachten</option>
                        <option>Bagatellschäden</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground mb-2 tracking-wide">Nachricht *</label>
                      <textarea required rows={5} className="w-full border border-input bg-card rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none" placeholder="Beschreiben Sie kurz Ihr Anliegen..." />
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full gold-gradient text-accent-foreground font-bold py-4 text-base tracking-wide rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
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
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="font-heading text-2xl text-foreground mb-6">ING Gutachten</h3>
                  <div className="space-y-5">
                    <a href="tel:051154300976" className="flex items-center gap-4 hover:text-primary transition-colors">
                      <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><Phone className="h-5 w-5 text-accent-foreground" /></div>
                      <div>
                        <span className="font-bold block">0511 - 543 00 976</span>
                        <span className="text-muted-foreground text-xs">Festnetz</span>
                      </div>
                    </a>
                    <a href="tel:017372979763" className="flex items-center gap-4 hover:text-primary transition-colors">
                      <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><Phone className="h-5 w-5 text-accent-foreground" /></div>
                      <div>
                        <span className="font-bold block">0173 - 72 79 763</span>
                        <span className="text-muted-foreground text-xs">Mobil</span>
                      </div>
                    </a>
                    <a href="mailto:info@ing-gutachten.de" className="flex items-center gap-4 hover:text-primary transition-colors">
                      <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><Mail className="h-5 w-5 text-accent-foreground" /></div>
                      <div>
                        <span className="block">info@ing-gutachten.de</span>
                        <span className="text-muted-foreground text-xs">E-Mail schreiben</span>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><MapPin className="h-5 w-5 text-accent-foreground" /></div>
                      <div>
                        <span className="block font-medium">Hildesheimer Str. 229</span>
                        <span className="text-muted-foreground text-xs">30519 Hannover</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="gold-gradient w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md"><Clock className="h-5 w-5 text-accent-foreground" /></div>
                      <div>
                        <p className="font-medium">Mo – Fr: 08:00 – 18:00</p>
                        <p className="text-muted-foreground text-xs">Sa: nach Vereinbarung</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-primary/20 bg-primary/5 p-6 rounded-2xl">
                  <h4 className="font-heading text-xl text-foreground mb-2 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" /> Für Geschädigte kostenfrei
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">Im Haftpflichtschadenfall übernimmt die gegnerische Versicherung die Kosten für das Gutachten.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default KontaktPage;
