import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import imgLeasing from "@/assets/service-leasing.jpg";

const Wertgutachten = () => (
  <>
    <section className="relative h-[45vh] min-h-[380px] flex items-end overflow-hidden">
      <img src={imgLeasing} alt="Wertgutachten Braunschweig" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/60 to-primary-dark/30" />
      <div className="relative w-full max-w-6xl mx-auto px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4 font-body">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary-foreground/40">Gutachten</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-accent font-medium">Wertgutachten</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground tracking-wide mb-2">Wertgutachten</h1>
          <p className="text-primary-foreground/60 text-base max-w-xl font-body">Professionelle Wertermittlung für Ihr Fahrzeug in Braunschweig</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 text-left">
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-foreground mb-6">Was ist ein Wertgutachten?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bei einem Wertgutachten handelt es sich um ein detailliertes Gutachten, das den aktuellen Marktwert Ihres Fahrzeugs 
                ermittelt. Für die Bewertung spielen Kriterien wie <strong className="text-foreground">Laufleistung, Vorschäden, Alter, 
                Ausstattung</strong> und der allgemeine Pflegezustand eine Rolle. Unser professioneller Sachverständiger nimmt Ihr Auto 
                exakt unter die Lupe und macht seriöse Angaben über den genauen Wert Ihres Wagens.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Wertgutachten beim Verkauf</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ein Wertgutachten hilft Ihnen besonders dann, wenn Sie Ihr Auto verkaufen möchten. Damit können Sie oft einen höheren 
                Verkaufspreis erzielen. Denn in den meisten Fällen glaubt ein Käufer mehr dem Dokument, das ein Kfz-Gutachter ausgestellt 
                hat, als den Worten eines Verkäufers. Das Gutachten schafft Vertrauen und dokumentiert den tatsächlichen Zustand des Fahrzeugs.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Wertgutachten beim Kauf</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Es hilft Ihnen aber auch als Käufer eines Gebrauchtwagens. Denn unsere Gutachter überprüfen auch den Zustand aller 
                Verschleißteile, so dass Sie nicht die Katze im Sack kaufen und bereits kurz nach dem Kauf mit einem teuren 
                Werkstattaufenthalt rechnen müssen. Allerdings ist der Verkäufer eines Autos nicht dazu verpflichtet, ein Wertgutachten 
                bei seinem Fahrzeug zuzulassen. Fragen Sie ihn – falls er es nicht möchte, hat er vielleicht etwas zu verbergen.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Weitere Anlässe für ein Wertgutachten</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Fahrzeugbewertung für Versicherungszwecke",
                  "Wertermittlung bei Erbschafts- oder Scheidungsangelegenheiten",
                  "Oldtimer-Bewertung für Versicherung oder Zustandsnote",
                  "Leasingrückgabe – dokumentierter Zustand bei Rückgabe",
                  "Firmenwagen-Bewertung für die Bilanzierung",
                  "Import/Export – Nachweis des Fahrzeugwerts bei Grenzübertritt",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Was enthält unser Wertgutachten?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unser Wertgutachten ist ein umfassendes Dokument, das alle relevanten Daten Ihres Fahrzeugs enthält:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Ausführliche Fahrzeugidentifikation (FIN, Erstzulassung, Laufleistung)",
                  "Umfangreiche Fotodokumentation des Fahrzeugs",
                  "Bewertung des Pflege- und Erhaltungszustands",
                  "Dokumentation der Ausstattung und Sonderausstattung",
                  "Marktpreisermittlung auf Basis aktueller Marktdaten",
                  "Prüfung auf reparierte und unreparierte Vorschäden",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <div className="blue-gradient p-6 rounded-2xl text-primary-foreground shadow-xl">
                <h3 className="font-heading text-xl mb-4">Wertgutachten anfragen</h3>
                <p className="text-primary-foreground/60 text-sm mb-6">Wir ermitteln den Wert Ihres Fahrzeugs – professionell und unabhängig.</p>
                <a href="tel:053122436430" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-bold">0531 - 22 436 430</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/kontakt" className="block gold-gradient text-accent-foreground font-bold text-center py-4 px-6 rounded-xl shadow-lg shadow-accent/20 tracking-wide">
                  Jetzt Wertgutachten anfragen
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-heading text-lg text-foreground mb-4">Weitere Leistungen</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Unfall-Gutachten", href: "/haftpflichtschaden" },
                    { label: "Kostenvoranschlag", href: "/kostenvoranschlag" },
                    { label: "PKW Gutachten", href: "/kfz-gutachten" },
                    { label: "LKW Gutachten", href: "/lkw-gutachten" },
                    { label: "Oldtimer Gutachten", href: "/oldtimer-gutachten" },
                    { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link to={l.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 border-b border-border/30 last:border-0">
                        <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-secondary rounded-2xl p-6 border border-border/50">
                <h4 className="font-heading text-lg text-foreground mb-3">Kosten</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die Kosten für ein Wertgutachten richten sich nach dem Fahrzeugwert und dem Aufwand. 
                  Kontaktieren Sie uns für ein individuelles Angebot.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Wertgutachten;
