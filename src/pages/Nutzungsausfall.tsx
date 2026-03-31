import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const Nutzungsausfall = () => (
  <>
    <section className="relative py-16 blue-gradient">
      <div className="container-narrow px-4">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Nutzungsausfall</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl text-primary-foreground">
          Nutzungsausfall
        </motion.h1>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Nach einem unverschuldeten Unfall bekommen Sie für den Zeitraum der Reparatur Ihres Wagens entweder einen 
              <strong className="text-foreground"> Mietwagen gestellt</strong> oder <strong className="text-foreground">Nutzungsausfall bezahlt</strong>. 
              Das gilt immer dann, wenn der Schaden über der Bagatellgrenze liegt.
            </p>
            <p>
              Diese wird von den meisten Richtern und Gerichten heute bei 750 bis maximal 1.000 Euro Schadenshöhe angesetzt.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-8">Wie wird der Nutzungsausfall berechnet?</h2>
            <p>
              Die Höhe des Nutzungsausfalls hängt immer von der <strong className="text-foreground">Fahrzeugklasse</strong> ab. 
              Für einen Audi A6 bekommen Sie also einen höheren Nutzungsausfall zugesprochen als für einen VW Up.
            </p>
            <p>
              Unsere Gutachter weisen Ihnen immer die passende Fahrzeugklasse zu, damit Sie bei all den Scherereien, 
              die ein Unfall immer mit sich bringt, wenigstens das bekommen, was Ihnen per Gesetz zusteht.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-8">Mietwagen oder Nutzungsausfall?</h2>
            <p>
              Sie haben die Wahl: Entweder nutzen Sie einen Mietwagen auf Kosten der gegnerischen Versicherung oder 
              Sie lassen sich den Nutzungsausfall in Geld auszahlen. Letzteres lohnt sich besonders, wenn Sie ein 
              Zweitfahrzeug haben oder auf den Wagen verzichten können.
            </p>

            <div className="mt-8 bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <p className="text-foreground font-medium text-sm">
                Der Anspruch auf Nutzungsausfall besteht für die gesamte Reparaturdauer – 
                inklusive der Wartezeit auf Ersatzteile und der Werkstattauslastung. 
                Unsere Gutachter dokumentieren die voraussichtliche Reparaturdauer exakt im Gutachten.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Nutzungsausfall;
