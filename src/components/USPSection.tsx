import { Clock, MapPin, Shield, FileCheck, Handshake, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const usps = [
  { icon: Star, title: "10+ Jahre Erfahrung", desc: "Seit über zehn Jahren unabhängige Kfz-Gutachten in Braunschweig." },
  { icon: Shield, title: "100% Unabhängig", desc: "Wir arbeiten ausschließlich im Interesse der Geschädigten – nie für Versicherungen." },
  { icon: MapPin, title: "Vor-Ort-Service", desc: "Wir kommen zu Ihnen – ob Zuhause, in der Werkstatt oder am Arbeitsplatz." },
  { icon: FileCheck, title: "Kostenübernahme", desc: "Die gegnerische Versicherung trägt in der Regel die Gutachterkosten." },
  { icon: Clock, title: "Schnelle Termine", desc: "Meist innerhalb von 24 Stunden, in dringenden Fällen noch am selben Tag." },
  { icon: Handshake, title: "Volle Abwicklung", desc: "Wir übernehmen die Kommunikation mit Versicherung und Anwalt." },
];

const USPSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-2">Ihre Vorteile</h2>
        <p className="text-muted-foreground text-sm font-body mb-10">Warum Geschädigte in Braunschweig uns vertrauen.</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden border border-border">
        {usps.map((u) => (
          <div key={u.title} className="bg-card p-7">
            <u.icon className="h-6 w-6 text-primary mb-4" />
            <h3 className="font-heading text-lg text-foreground mb-1.5 tracking-wide">{u.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-body">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default USPSection;
