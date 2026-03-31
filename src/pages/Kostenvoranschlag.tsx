import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import imgBeweis from "@/assets/service-beweissicherung.jpg";

const Kostenvoranschlag = () => (
  <>
    <section className="relative h-[45vh] min-h-[380px] flex items-end overflow-hidden">
      <img src={imgBeweis} alt="Kostenvoranschlag Braunschweig" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/60 to-primary-dark/30" />
      <div className="relative w-full max-w-6xl mx-auto px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4 font-body">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary-foreground/40">Gutachten</span>
          <ChevronRight className="h-3 w-3" />
          <span className="text-accent font-medium">Kostenvoranschlag</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground tracking-wide mb-2">Kostenvoranschlag</h1>
          <p className="text-primary-foreground/60 text-base max-w-xl font-body">Die wirtschaftliche Alternative bei kleineren Schäden</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 text-left">
            <ScrollReveal>
              <h2 className="font-heading text-3xl text-foreground mb-6">Kostenvoranschlag für Kfz-Schäden</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Der Kostenvoranschlag listet ausschließlich die für die Reparatur Ihres Autos zu erwartenden Kosten auf. 
                Enthalten sind die Arbeitskosten, die sich aus Arbeitsstunden multipliziert mit dem Stundensatz der Werkstatt errechnen. 
                Hinzu kommen die voraussichtlichen Materialkosten sowie die Ersatzteilpreise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In den meisten Fällen wird ein Kostenvoranschlag von einer Kfz-Werkstatt erstellt und er hilft bei der Vorbereitung 
                einer Reparatur. Aber auch ein Sachverständiger von ING Kfz Gutachten unterstützt Sie gerne und fertigt Ihnen ein 
                solches Dokument an – unabhängig und fachkundig.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Wann ist ein Kostenvoranschlag sinnvoll?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bei Schäden unter ca. <strong className="text-foreground">750–1.000 € netto</strong> (sogenannte Bagatellschäden) ist ein 
                Kostenvoranschlag oft die wirtschaftlich sinnvollere Wahl gegenüber einem vollständigen Gutachten. Die Versicherung kann in 
                diesem Fall auf einen Kostenvoranschlag bestehen.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bei höheren Schäden empfehlen wir dagegen immer ein vollständiges Schadensgutachten, da dieses zusätzlich die Wertminderung, 
                den Nutzungsausfall und weitere Ansprüche dokumentiert.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-4">Kurzgutachten als Kompromiss</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Das Kurzgutachten ist ein Kompromiss aus Kostenvoranschlag und einem umfassenden Schadensgutachten. Es beinhaltet die meisten 
                Informationen, die auch in einem Gutachten aufgeführt sind. Mit zwei Ausnahmen: Es fehlen Angaben zur 
                <strong className="text-foreground"> Wertminderung</strong> des Fahrzeugs durch den Unfall und auch der 
                <strong className="text-foreground"> Nutzungsausfall</strong> wird nicht angegeben.
              </p>

              <h3 className="font-heading text-2xl text-foreground mt-10 mb-6">Unterschied: Kostenvoranschlag vs. Gutachten</h3>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left p-4 font-heading">Merkmal</th>
                      <th className="text-left p-4 font-heading">Kostenvoranschlag</th>
                      <th className="text-left p-4 font-heading">Gutachten</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Reparaturkosten", "✓", "✓"],
                      ["Fotodokumentation", "Teilweise", "Umfassend"],
                      ["Wertminderung", "✗", "✓"],
                      ["Nutzungsausfall", "✗", "✓"],
                      ["Restwertermittlung", "✗", "✓"],
                      ["Gerichtstauglich", "Eingeschränkt", "Vollständig"],
                      ["Kosten", "Geringer", "Höher (von Versicherung getragen)"],
                    ].map(([label, kv, ga], i) => (
                      <tr key={label} className={i % 2 === 0 ? "bg-secondary" : "bg-card"}>
                        <td className="p-4 font-medium text-foreground">{label}</td>
                        <td className="p-4 text-muted-foreground">{kv}</td>
                        <td className="p-4 text-muted-foreground">{ga}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-6">
                <p className="text-foreground text-sm leading-relaxed">
                  <strong>Tipp:</strong> Wir beraten Sie gern vorab kostenlos, welche Variante in Ihrem Fall die richtige ist. 
                  Rufen Sie uns einfach an – gemeinsam finden wir die beste Lösung.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ScrollReveal direction="right">
              <div className="blue-gradient p-6 rounded-2xl text-primary-foreground shadow-xl">
                <h3 className="font-heading text-xl mb-4">Schnell & unkompliziert</h3>
                <p className="text-primary-foreground/60 text-sm mb-6">Kostenlose Erstberatung – wir helfen Ihnen weiter.</p>
                <a href="tel:053122436430" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <span className="font-bold">0531 - 22 436 430</span>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.1}>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/kontakt" className="block gold-gradient text-accent-foreground font-bold text-center py-4 px-6 rounded-xl shadow-lg shadow-accent/20 tracking-wide">
                  Kostenvoranschlag anfragen
                </Link>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-6">
                <h4 className="font-heading text-lg text-foreground mb-4">Weitere Leistungen</h4>
                <ul className="space-y-2">
                  {[
                    { label: "Unfall-Gutachten", href: "/haftpflichtschaden" },
                    { label: "Wertgutachten", href: "/wertgutachten" },
                    { label: "PKW Gutachten", href: "/kfz-gutachten" },
                    { label: "LKW Gutachten", href: "/lkw-gutachten" },
                    { label: "E-Auto & Hybrid", href: "/gutachter-elektro-hybrid" },
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
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Kostenvoranschlag;
