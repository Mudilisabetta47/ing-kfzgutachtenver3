import { Clock, MapPin, Shield, FileCheck, Handshake, Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const usps = [
  { icon: Clock, title: "Schnelle Termine", desc: "Meist innerhalb von 24 Stunden vor Ort." },
  { icon: MapPin, title: "Vor-Ort-Service", desc: "Wir kommen direkt zu Ihnen – in ganz Hannover." },
  { icon: Shield, title: "100% Unabhängig", desc: "Keine Bindung an Versicherungen." },
  { icon: FileCheck, title: "Gerichtsfest", desc: "Lückenlose, rechtssichere Dokumentation." },
  { icon: Handshake, title: "Volle Abwicklung", desc: "Hilfe bei Versicherungskommunikation." },
  { icon: Star, title: "15+ Jahre Erfahrung", desc: "Über 2.500 erstellte Gutachten." },
];

const USPSection = () => (
  <section className="section-padding bg-secondary overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Ihre Vorteile</span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mt-3">Warum wir?</h2>
          <div className="w-20 h-1 gold-gradient mx-auto mt-4" />
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {usps.map((u, i) => (
          <ScrollReveal key={u.title} delay={i * 0.1}>
            <motion.div
              className="bg-card p-8 border-l-4 border-primary hover:border-accent hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-14 h-14 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 transition-colors">
                <u.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
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
