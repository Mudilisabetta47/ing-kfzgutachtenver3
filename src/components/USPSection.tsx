import { Clock, MapPin, Shield, FileCheck, Handshake, Star } from "lucide-react";

const usps = [
  { icon: Clock, title: "Schnelle Terminvergabe", desc: "Meist innerhalb von 24 Stunden ein Termin verfügbar." },
  { icon: MapPin, title: "Vor-Ort-Service", desc: "Wir kommen zu Ihnen – an die Unfallstelle, Werkstatt oder nach Hause." },
  { icon: Shield, title: "Unabhängige Begutachtung", desc: "Keine Bindung an Versicherungen – wir arbeiten nur in Ihrem Interesse." },
  { icon: FileCheck, title: "Professionelle Dokumentation", desc: "Gerichtsfeste Gutachten mit lückenloser Beweissicherung." },
  { icon: Handshake, title: "Hilfe bei der Abwicklung", desc: "Unterstützung bei der Kommunikation mit Versicherungen und Anwälten." },
  { icon: Star, title: "Langjährige Erfahrung", desc: "Über 15 Jahre Erfahrung in der Kfz-Begutachtung." },
];

const USPSection = () => (
  <section className="section-padding bg-primary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
          Ihre Vorteile bei Kfz Gutachter Mustermann
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto">
          Vertrauen Sie auf einen erfahrenen Sachverständigen, der Ihre Interessen in den Mittelpunkt stellt.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usps.map((u) => (
          <div key={u.title} className="bg-primary-light/50 border border-primary-foreground/10 rounded p-6">
            <u.icon className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-heading text-base font-bold text-primary-foreground mb-2">{u.title}</h3>
            <p className="text-primary-foreground/75 text-sm leading-relaxed">{u.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default USPSection;
