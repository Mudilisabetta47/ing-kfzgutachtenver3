import { Clock, MapPin, Shield, FileCheck, Handshake, Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const usps = [
  { icon: Star, title: "15 Jahre Erfahrung", desc: "Seit über 15 Jahren unabhängige Kfz-Gutachten in Hannover." },
  { icon: Shield, title: "100% Unabhängig", desc: "Wir arbeiten ausschließlich im Interesse der Geschädigten." },
  { icon: MapPin, title: "Vor-Ort-Service", desc: "Wir kommen zu Ihnen – egal ob Zuhause, Werkstatt oder Arbeitsplatz." },
  { icon: FileCheck, title: "Kostenübernahme", desc: "Die gegnerische Versicherung trägt in der Regel die Gutachterkosten." },
  { icon: Clock, title: "Schnelle Termine", desc: "Meist innerhalb von 24–48 Stunden, in dringenden Fällen noch schneller." },
  { icon: Handshake, title: "Volle Abwicklung", desc: "Unterstützung bei der Versicherungskommunikation und Regulierung." },
];

const USPSection = () => (
  <section className="section-padding bg-background overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Ihre Vorteile</span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mt-3">Warum ING Gutachten?</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usps.map((u, i) => (
          <ScrollReveal key={u.title} delay={i * 0.1}>
            <motion.div
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <u.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-2">{u.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default USPSection;
