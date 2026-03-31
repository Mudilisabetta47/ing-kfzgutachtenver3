import { Link } from "react-router-dom";
import { ChevronRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import imgLeasing from "@/assets/service-leasing.jpg";

const Wertgutachten = () => (
  <>
    <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
      <img src={imgLeasing} alt="Wertgutachten" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(217,80%,15%)]/95 via-[hsl(217,69%,28%)]/60 to-[hsl(217,80%,15%)]/30" />
      <div className="relative container-narrow px-4 pb-12">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Wertgutachten</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-heading text-4xl md:text-6xl text-primary-foreground mb-3">Wertgutachten</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">Professionelle Wertermittlung für Ihr Fahrzeug</p>
        </motion.div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Dabei handelt es sich um ein detailliertes Gutachten, das den aktuellen Marktpreis Ihres Automobils angibt. Für die Bewertung spielen Kriterien wie 
              <strong className="text-foreground"> Laufleistung, Vorschäden, Alter</strong> oder allgemeiner Pflegezustand eine Rolle. Unser professioneller Sachverständiger nimmt Ihr Auto 
              exakt unter die Lupe und macht seriöse Angaben über den genauen Wert Ihres Wagens.
            </p>
            <h2 className="font-heading text-2xl text-foreground mt-8">Wertgutachten beim Verkauf</h2>
            <p>
              Ein Wertgutachten hilft Ihnen besonders dann, wenn Sie Ihr Auto verkaufen möchten. Damit können Sie oft einen höheren Verkaufspreis erzielen. 
              Denn in den meisten Fällen glaubt ein Käufer mehr dem Dokument, das ein KFZ Gutachter ausgestellt hat, als den Worten eines Verkäufers.
            </p>
            <h2 className="font-heading text-2xl text-foreground mt-8">Wertgutachten beim Kauf</h2>
            <p>
              Es hilft Ihnen aber auch als Käufer eines Gebrauchtwagens. Denn unsere Gutachter überprüfen auch den Zustand aller Verschleißteile, 
              so dass Sie nicht die Katze im Sack kaufen und bereits kurz nach dem Kauf mit einem teuren Werkstattaufenthalt rechnen müssen.
            </p>
            <p>
              Allerdings ist der Verkäufer eines Autos nicht dazu verpflichtet, ein Wertgutachten bei seinem Fahrzeug zuzulassen. Fragen Sie ihn – 
              falls er es nicht möchte, hat er vielleicht etwas zu verbergen.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="mt-10 blue-gradient p-8 rounded-2xl text-primary-foreground flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl mb-2">Wertgutachten anfragen</h3>
              <p className="text-primary-foreground/60 text-sm">Wir ermitteln den Wert Ihres Fahrzeugs professionell.</p>
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

export default Wertgutachten;
