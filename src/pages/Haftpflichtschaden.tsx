import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone, ArrowRight, FileText, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import imgUnfall from "@/assets/service-unfallgutachten.jpg";

const Haftpflichtschaden = () => (
  <>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={imgUnfall} alt="Unfall-Gutachten Braunschweig" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/60 to-primary-dark/30" />
      <div className="relative container-narrow px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/" className="hover:text-accent transition-colors">Gutachten</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Unfall-Gutachten</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-3">Unfall-Gutachten</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">Schadensgutachten im Haftpflichtschadenfall – für Ihre volle Entschädigung</p>
        </motion.div>
      </div>
    </section>

    {/* Content */}
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content – left-aligned */}
          <div className="lg:col-span-2 text-left">
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-foreground mb-6">Schadensgutachten nach einem Unfall</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sie hatten einen Unfall und benötigen rasch ein Schadensgutachten, das ein qualifizierter Kfz Sachverständiger anfertigt? 
                Dann melden Sie sich gerne per Telefon oder Mail bei uns. Unsere Kfz Gutachter kommen auch kurzfristig zu Ihnen nach Hause 
                oder dorthin, wo das beschädigte Fahrzeug steht – in ganz Braunschweig, Salzgitter, Wolfsburg und der Region.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bei einem <strong className="text-foreground">Haftpflichtschadenfall</strong> – also wenn der Unfall nicht von Ihnen verursacht wurde – haben Sie 
                als Geschädigter Anspruch auf ein unabhängiges Gutachten. Die Kosten hierfür trägt vollständig die Versicherung des Unfallverursachers. 
                Sie müssen also nichts bezahlen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Natürlich stehen wir Ihnen auch während der gesamten Schadensabwicklung mit der gegnerischen Versicherung zur Seite. 
                Bei unverschuldeten Unfällen haben Sie die <strong className="text-foreground">freie Gutachterwahl</strong>. Das Gutachten ist für Sie zudem 
                komplett kostenfrei – die Rechnung muss von der Versicherung des Unfallgegners getragen werden.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Warum ist ein unabhängiges Gutachten wichtig?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Die gegnerische Versicherung wird in vielen Fällen versuchen, eigene Gutachter einzusetzen. Diese handeln im Interesse der 
                Versicherung und werden den Schaden tendenziell niedrig bewerten. Ein unabhängiger Gutachter wie ING Kfz Gutachten ermittelt 
                dagegen den tatsächlichen Schaden – neutral und fair.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Alle unsere Gutachten erstellen wir exakt nach Herstellervorgaben. Sie werden von den Versicherungen akzeptiert und sind auch 
                vor Gericht prozesssicher, sollte es zu einer Auseinandersetzung kommen.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-6">Was beinhaltet ein Schadensgutachten?</h3>
              <div className="space-y-3 mb-8">
                {[
                  "Detaillierte Dokumentation aller Schäden mit hochauflösenden Fotos",
                  "Reparaturkalkulation nach Herstellervorgaben (z.B. Audatex / DAT)",
                  "Ermittlung der merkantilen Wertminderung",
                  "Berechnung des Nutzungsausfalls und der Mietwagenkosten",
                  "Wiederbeschaffungswert bei wirtschaftlichem Totalschaden",
                  "Restwertermittlung über unabhängige Restwertbörsen",
                  "Prüfung auf Vorschäden",
                  "Dokumentation der Unfallspuren und Schadensverursachung",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Ihre Ansprüche als Geschädigter</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Als unverschuldet Geschädigter stehen Ihnen umfangreiche Schadenersatzansprüche zu. Diese umfassen nicht nur die reinen 
                Reparaturkosten, sondern auch weitere Positionen:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: FileText, title: "Reparaturkosten", desc: "Vollständige Übernahme der Reparatur nach Gutachten" },
                  { icon: Shield, title: "Wertminderung", desc: "Ausgleich für den Wertverlust trotz fachgerechter Reparatur" },
                  { icon: Clock, title: "Nutzungsausfall", desc: "Entschädigung für die Zeit ohne Fahrzeug" },
                  { icon: Phone, title: "Mietwagen", desc: "Kosten für einen gleichwertigen Mietwagen" },
                ].map((item) => (
                  <div key={item.title} className="bg-secondary rounded-xl p-5 border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="h-5 w-5 text-primary" />
                      <h4 className="font-heading text-lg text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Ablauf der Gutachtenerstellung</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nach Ihrer Kontaktaufnahme vereinbaren wir schnellstmöglich einen Besichtigungstermin – meist innerhalb von 24 Stunden. 
                Unser Gutachter kommt direkt zu Ihnen, dokumentiert den Schaden vor Ort und erstellt ein umfassendes Gutachten. 
                Dieses wird anschließend direkt an die gegnerische Versicherung und ggf. an Ihren Rechtsanwalt übermittelt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In der Regel erhalten Sie das fertige Gutachten innerhalb von 1–2 Werktagen. Auf Wunsch vermitteln wir Ihnen eine 
                geeignete Werkstatt und organisieren einen Mietwagen.
              </p>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <div className="blue-gradient p-6 rounded-2xl text-primary-foreground shadow-xl">
                <h3 className="font-heading text-xl mb-4">Schnell & unkompliziert</h3>
                <p className="text-primary-foreground/60 text-sm mb-6">Rufen Sie uns an oder nutzen Sie unser Kontaktformular. Wir melden uns umgehend.</p>
                <a href="tel:053122436430" className="flex items-center gap-3 mb-3 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-bold">0531 - 22 436 430</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/kontakt" className="block gold-gradient text-accent-foreground font-bold text-center py-4 px-6 rounded-xl shadow-lg shadow-accent/20 tracking-wide">
                  Jetzt Gutachten anfragen
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-heading text-lg text-foreground mb-4">Weitere Leistungen</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Kostenvoranschlag", href: "/kostenvoranschlag" },
                    { label: "Wertgutachten", href: "/wertgutachten" },
                    { label: "PKW Gutachten", href: "/kfz-gutachten" },
                    { label: "LKW Gutachten", href: "/lkw-gutachten" },
                    { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
                    { label: "Motorrad Gutachten", href: "/motorrad-gutachten" },
                    { label: "Oldtimer Gutachten", href: "/oldtimer-gutachten" },
                    { label: "Bagatellschäden", href: "/bagatellschaeden" },
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
                <h4 className="font-heading text-lg text-foreground mb-3">Gut zu wissen</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Bei einem unverschuldeten Unfall mit einer Schadenshöhe über 750 € haben Sie Anspruch auf ein vollständiges 
                  Gutachten – die Kosten trägt die gegnerische Versicherung (§ 249 BGB).
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Haftpflichtschaden;
