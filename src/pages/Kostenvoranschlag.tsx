import { Link } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import imgBeweis from "@/assets/service-beweissicherung.jpg";

const Kostenvoranschlag = () => (
  <>
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={imgBeweis} alt="Kostenvoranschlag" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(217,80%,15%)]/95 via-[hsl(217,69%,28%)]/60 to-[hsl(217,80%,15%)]/30" />
      <div className="relative container-narrow px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Kostenvoranschlag</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-3">Kostenvoranschlag</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">Die wirtschaftliche Alternative bei Bagatellschäden</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Der Kostenvoranschlag listet ausschließlich die für die Reparatur Ihres Autos zu erwartenden Kosten auf. Enthalten sind die Arbeitskosten, 
              die sich aus Arbeitsstunden multipliziert mit dem Stundensatz der Werkstatt errechnen. Hinzu kommen die voraussichtlichen Materialkosten sowie die Ersatzteilpreise.
            </p>
            <p>
              In den meisten Fällen wird ein Kostenvoranschlag von einer Kfz-Werkstatt gemacht und er hilft bei der Vorbereitung einer Reparatur. 
              Aber auch ein Sachverständiger von ING Gutachter unterstützt Sie gerne und fertigt Ihnen ein solches Dokument an.
            </p>
            
            <h2 className="font-heading text-2xl text-foreground mt-8">Kurzgutachten als Kompromiss</h2>
            <p>
              Das Kurzgutachten ist ein Kompromiss aus Kostenvoranschlag und einem umfassenden Schadensgutachten. Es beinhaltet die meisten Informationen, 
              die auch in einem Gutachten aufgeführt sind. Mit zwei Ausnahmen: Es fehlen Angaben zur <strong className="text-foreground">Wertminderung</strong> des Fahrzeugs 
              durch den Unfall und auch der <strong className="text-foreground">Nutzungsausfall</strong> wird nicht angegeben.
            </p>
            <p>
              Bei Schäden unter ca. 750–1.000 € netto ist ein Kostenvoranschlag oft die wirtschaftlich sinnvollere Wahl. Wir beraten Sie gern vorab kostenlos, 
              welche Variante in Ihrem Fall die richtige ist.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 blue-gradient p-8 rounded-2xl text-primary-foreground flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl mb-2">Kostenvoranschlag anfragen</h3>
              <p className="text-primary-foreground/60 text-sm">Kostenlose Erstberatung – wir helfen Ihnen weiter.</p>
            </div>
            <a href="tel:053122436430" className="gold-gradient text-accent-foreground font-bold px-8 py-3 rounded-lg flex items-center gap-2 shadow-lg whitespace-nowrap">
              <Phone className="h-5 w-5" /> Jetzt anrufen
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Kostenvoranschlag;
