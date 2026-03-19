import { Phone, CalendarCheck, Search, FileText, Headphones } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Kontakt", desc: "Kostenlos & unverbindlich beraten lassen." },
  { icon: CalendarCheck, num: "02", title: "Termin", desc: "Kurzfristig – meist innerhalb 24h." },
  { icon: Search, num: "03", title: "Begutachtung", desc: "Vor-Ort-Inspektion & Dokumentation." },
  { icon: FileText, num: "04", title: "Gutachten", desc: "Detailliertes, gerichtsfestes Gutachten." },
  { icon: Headphones, num: "05", title: "Abwicklung", desc: "Unterstützung bei der Regulierung." },
];

const ProcessSection = () => (
  <section id="ablauf" className="section-padding blue-gradient">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <span className="text-accent font-bold text-sm uppercase tracking-widest">Der Ablauf</span>
        <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-3">5 einfache Schritte</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="relative mx-auto mb-5">
              <div className="gold-gradient w-16 h-16 flex items-center justify-center mx-auto">
                <s.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 bg-primary-foreground text-primary font-heading text-sm w-7 h-7 flex items-center justify-center">{s.num}</span>
            </div>
            <h3 className="font-heading text-xl text-primary-foreground mb-1">{s.title}</h3>
            <p className="text-primary-foreground/60 text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
