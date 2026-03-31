import { Clock, MapPin, Shield, FileCheck, Handshake, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const usps = [
  { icon: Star, title: "10+ Jahre Erfahrung", desc: "Seit über zehn Jahren unabhängige Kfz-Gutachten in Braunschweig." },
  { icon: Shield, title: "100% Unabhängig", desc: "Wir arbeiten ausschließlich im Interesse der Geschädigten." },
  { icon: MapPin, title: "Vor-Ort-Service", desc: "Wir kommen zu Ihnen – ob Zuhause, in der Werkstatt oder am Arbeitsplatz." },
  { icon: FileCheck, title: "Kostenübernahme", desc: "Die gegnerische Versicherung trägt in der Regel die Gutachterkosten." },
  { icon: Clock, title: "Schnelle Termine", desc: "Meist innerhalb von 24 Stunden, in dringenden Fällen noch am selben Tag." },
  { icon: Handshake, title: "Volle Abwicklung", desc: "Wir übernehmen die Kommunikation mit Versicherung und Anwalt." },
];

const USPSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Vorteile</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground tracking-wide mb-12">Ihre Vorteile</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-0 gap-y-0 border-t border-l border-border">
        {usps.map((u) => (
          <ScrollReveal key={u.title}>
            <div className="border-b border-r border-border p-8 md:p-10 bg-card hover:bg-primary/[0.02] transition-colors">
              <u.icon className="h-6 w-6 text-accent mb-5" />
              <h3 className="font-heading text-lg text-foreground mb-2 tracking-wide">{u.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">{u.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default USPSection;
