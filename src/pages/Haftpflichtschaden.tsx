import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import imgUnfall from "@/assets/service-unfallgutachten.jpg";

const Haftpflichtschaden = () => (
  <>
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={imgUnfall} alt="Unfall-Gutachten" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(217,80%,15%)]/95 via-[hsl(217,69%,28%)]/60 to-[hsl(217,80%,15%)]/30" />
      <div className="relative container-narrow px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Unfall-Gutachten</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-3">Unfall-Gutachten</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">Schadensgutachten im Haftpflichtschadenfall – für Ihre volle Entschädigung</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <ScrollReveal>
              <p className="text-muted-foreground leading-relaxed">
                Sie hatten einen Unfall und benötigen rasch ein Schadensgutachten, das ein qualifizierter Kfz Sachverständiger anfertigt? Dann melden Sie sich gerne per Telefon oder Mail bei uns. 
                Unsere Kfz Gutachter kommen auch kurzfristig zu Ihnen nach Hause oder dorthin, wo das beschädigte Fahrzeug steht.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Natürlich stehen wir Ihnen auch während der gesamten Schadensabwicklung mit der gegnerischen Versicherung zur Seite. 
                Bei unverschuldeten Unfällen haben Sie die <strong className="text-foreground">freie Gutachterwahl</strong>. Das Gutachten ist für Sie zudem komplett kostenfrei – 
                die Rechnung muss von der Versicherung des Unfallgegners getragen werden.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Alle unsere Gutachten erstellen wir exakt nach Herstellervorgaben. Sie werden von den Versicherungen akzeptiert und sind auch vor Gericht prozesssicher, 
                sollte es zu einer Auseinandersetzung kommen.
              </p>

              <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Was beinhaltet ein Schadensgutachten?</h2>
              <div className="space-y-3">
                {[
                  "Detaillierte Dokumentation aller Schäden mit Fotos",
                  "Reparaturkalkulation nach Herstellervorgaben",
                  "Ermittlung der merkantilen Wertminderung",
                  "Berechnung des Nutzungsausfalls / Mietwagenkosten",
                  "Wiederbeschaffungswert bei Totalschaden",
                  "Restwertermittlung",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-6">
            <ScrollReveal direction="right">
              <div className="blue-gradient p-6 rounded-2xl text-primary-foreground shadow-xl">
                <h3 className="font-heading text-xl mb-4">Jetzt Schaden melden!</h3>
                <p className="text-primary-foreground/60 text-sm mb-6">Kostenlose Beratung für Ihren Schadensfall.</p>
                <a href="tel:053122436430" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-bold">0531 - 22 436 430</span>
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <Link to="/kontakt" className="block gold-gradient text-accent-foreground font-bold text-center py-4 px-6 rounded-xl shadow-lg tracking-wide">
                Gutachten anfragen
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Haftpflichtschaden;
