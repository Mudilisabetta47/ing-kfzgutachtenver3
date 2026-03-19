import { Clock, MapPin, Shield, FileCheck, Handshake, Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const usps = [
  { icon: Clock, title: "Schnelle Termine", desc: "Meist innerhalb von 24 Stunden." },
  { icon: MapPin, title: "Vor-Ort-Service", desc: "Wir kommen direkt zu Ihnen." },
  { icon: Shield, title: "Unabhängig", desc: "Keine Bindung an Versicherungen." },
  { icon: FileCheck, title: "Gerichtsfest", desc: "Lückenlose Dokumentation." },
  { icon: Handshake, title: "Abwicklung", desc: "Hilfe bei Versicherungskommunikation." },
  { icon: Star, title: "Erfahrung", desc: "Über 15 Jahre Expertise." },
];

const USPSection = () => (
  <section className="section-padding bg-secondary overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">Ihre Vorteile</span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mt-3">Warum wir?</h2>
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usps.map((u, i) => (
          <ScrollReveal key={u.title} delay={i * 0.1}>
            <motion.div
              className="bg-card p-8 border-l-4 border-accent hover:shadow-xl transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <u.icon className="h-10 w-10 text-accent mb-5" />
              <h3 className="font-heading text-2xl text-foreground mb-2">{u.title}</h3>
              <p className="text-muted-foreground text-sm">{u.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default USPSection;
