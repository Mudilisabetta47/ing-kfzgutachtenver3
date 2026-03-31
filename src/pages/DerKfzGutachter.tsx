import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone, ArrowRight, Award, Shield, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import aboutImg from "@/assets/about-gutachter.jpg";

const DerKfzGutachter = () => (
  <>
    <section className="relative h-[45vh] min-h-[380px] flex items-end overflow-hidden">
      <img src={aboutImg} alt="Kfz Gutachter Braunschweig" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/60 to-primary-dark/30" />
      <div className="relative w-full max-w-6xl mx-auto px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4 font-body">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary-foreground/40">Gutachten</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-accent font-medium">Kfz Gutachter</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground tracking-wide mb-2">Unabhängiger Kfz Gutachter</h1>
          <p className="text-primary-foreground/60 text-base max-w-xl font-body">Ihr zertifizierter Sachverständiger in Braunschweig und Umgebung</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 text-left">
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-foreground mb-6">Ihr unabhängiger Kfz-Sachverständiger</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Als <strong className="text-foreground">unabhängiger und zertifizierter Kfz-Sachverständiger</strong> in Braunschweig arbeiten 
                wir ausschließlich im Interesse unserer Kunden – der Geschädigten. Wir sind an keine Versicherung, Werkstatt oder sonstige 
                Institution gebunden. Diese Unabhängigkeit garantiert Ihnen eine objektive und faire Bewertung Ihres Fahrzeugschadens.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Warum ein unabhängiger Gutachter?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Keine gute Idee ist es, sich auf einen von der gegnerischen Versicherung beauftragten Gutachter zu verlassen. 
                Dieser wird unter Umständen bestrebt sein, den Schaden möglichst gering zu beziffern, damit die Kosten für die 
                zahlungspflichtige Versicherungsgesellschaft niedrig bleiben.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wir als unabhängiger Gutachter nehmen stets den gesamten zugrundeliegenden Sachverhalt in Augenschein und beziehen 
                auch die <strong className="text-foreground">Wertminderung</strong> in die Berechnung der Schadenshöhe mit ein. 
                Darüber hinaus dokumentieren wir den Nutzungsausfall und beraten Sie zu Ihren weiteren Ansprüchen.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Unsere Leistungen im Überblick</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unser Leistungsspektrum umfasst die gesamte Bandbreite der Kfz-Begutachtung. Von der schnellen Schadensbewertung 
                nach einem Unfall bis hin zur detaillierten Oldtimer-Bewertung bieten wir Ihnen professionelle Unterstützung:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Schadensgutachten nach Verkehrsunfällen (Haftpflichtschaden)",
                  "Kostenvoranschläge für Bagatell- und Kaskoschäden",
                  "Wertgutachten für Kauf, Verkauf und Versicherung",
                  "Gutachten für Elektro- und Hybridfahrzeuge",
                  "Gutachten für PKW, LKW, Motorräder und Oldtimer",
                  "Beweissicherungsgutachten",
                  "Technische Beratung und Unfallrekonstruktion",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-6">Unsere Qualifikationen</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Award, title: "Zertifiziert", desc: "Zertifizierter Kfz-Sachverständiger mit anerkannter Ausbildung" },
                  { icon: Shield, title: "DGSV empfohlen", desc: "Empfohlener Gutachter des DGSV e.V." },
                  { icon: BookOpen, title: "Fortbildung", desc: "Regelmäßige Weiterbildung und Schulungen" },
                ].map((q) => (
                  <div key={q.title} className="bg-secondary rounded-xl p-5 border border-border/50 text-center">
                    <q.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-heading text-lg text-foreground mb-1">{q.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Unser Einzugsgebiet</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Wir sind für Sie in der gesamten Region unterwegs. Unser Einzugsgebiet umfasst:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Braunschweig, Salzgitter, Wolfsburg, Gifhorn, Peine, Wolfenbüttel, 
                Helmstedt, Goslar, Königslutter</strong> und die gesamte umliegende Region. Die Anfahrt ist für Sie kostenlos.
              </p>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <div className="blue-gradient p-6 rounded-2xl text-primary-foreground shadow-xl">
                <h3 className="font-heading text-xl mb-4">Kostenlose Beratung</h3>
                <p className="text-primary-foreground/60 text-sm mb-6">Wir beraten Sie unverbindlich zu Ihrem Schadensfall.</p>
                <a href="tel:053122436430" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-bold">0531 - 22 436 430</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/kontakt" className="block gold-gradient text-accent-foreground font-bold text-center py-4 px-6 rounded-xl shadow-lg shadow-accent/20 tracking-wide">
                  Jetzt kontaktieren
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-heading text-lg text-foreground mb-4">Unsere Gutachten</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Unfall-Gutachten", href: "/haftpflichtschaden" },
                    { label: "Kostenvoranschlag", href: "/kostenvoranschlag" },
                    { label: "Wertgutachten", href: "/wertgutachten" },
                    { label: "PKW Gutachten", href: "/kfz-gutachten" },
                    { label: "LKW Gutachten", href: "/lkw-gutachten" },
                    { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
                    { label: "Motorrad Gutachten", href: "/motorrad-gutachten" },
                    { label: "Oldtimer Gutachten", href: "/oldtimer-gutachten" },
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
                <h4 className="font-heading text-lg text-foreground mb-3">Gerichtstauglich</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Alle unsere Gutachten sind gerichtsfest und werden von Versicherungen, Anwälten und Gerichten anerkannt.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default DerKfzGutachter;
