import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const DerKfzGutachter = () => (
  <>
    <section className="relative py-16 blue-gradient">
      <div className="container-narrow px-4">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Unabhängiger Kfz Gutachter</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl text-primary-foreground">
          Unabhängiger Kfz Gutachter
        </motion.h1>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Als <strong className="text-foreground">unabhängiger und zertifizierter Kfz-Sachverständiger</strong> in Braunschweig arbeiten wir 
              ausschließlich im Interesse unserer Kunden – der Geschädigten. Wir sind an keine Versicherung, Werkstatt oder sonstige 
              Institution gebunden.
            </p>
            
            <h2 className="font-heading text-2xl text-foreground mt-8">Warum ein unabhängiger Gutachter?</h2>
            <p>
              Keine gute Idee ist es, sich auf einen von der gegnerischen Versicherung beauftragten Gutachter zu verlassen. 
              Dieser wird unter Umständen bestrebt sein, den Schaden möglichst gering zu beziffern, damit die Kosten für die 
              zahlungspflichtige Versicherungsgesellschaft niedrig bleiben.
            </p>
            <p>
              Wir als unabhängiger Gutachter nehmen stets den gesamten zugrundeliegenden Sachverhalt in Augenschein und beziehen 
              auch die Wertminderung in die Berechnung der Schadenshöhe mit ein.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-8">Unsere Qualifikationen</h2>
            <div className="space-y-3">
              {[
                "Zertifizierter Kfz-Sachverständiger",
                "Empfohlener Gutachter des DGSV e.V.",
                "Qualifiziert für Elektro- und Hybridfahrzeuge",
                "Über 10 Jahre Berufserfahrung",
                "Gerichtsfeste Gutachten",
                "Fortlaufende Weiterbildung",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10 blue-gradient p-8 rounded-2xl text-primary-foreground flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl mb-2">Kostenlose Beratung</h3>
              <p className="text-primary-foreground/60 text-sm">Wir beraten Sie unverbindlich zu Ihrem Schadensfall.</p>
            </div>
            <a href="tel:053122436430" className="gold-gradient text-accent-foreground font-bold px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg whitespace-nowrap">
              <Phone className="h-5 w-5" /> 0531 - 22 436 430
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default DerKfzGutachter;
