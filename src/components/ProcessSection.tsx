import { Phone, CalendarCheck, Search, FileText, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Phone, num: "01", title: "Kontakt", desc: "Kostenlos & unverbindlich beraten lassen." },
  { icon: CalendarCheck, num: "02", title: "Termin", desc: "Kurzfristig – meist innerhalb 24h." },
  { icon: Search, num: "03", title: "Begutachtung", desc: "Vor-Ort-Inspektion & Dokumentation." },
  { icon: FileText, num: "04", title: "Gutachten", desc: "Detailliertes, gerichtsfestes Gutachten." },
  { icon: Headphones, num: "05", title: "Abwicklung", desc: "Unterstützung bei der Regulierung." },
];

const ProcessSection = () => (
  <section id="ablauf" className="section-padding blue-gradient overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute top-20 left-10 w-64 h-64 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-10 right-20 w-96 h-96 border border-primary-foreground rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary-foreground rounded-full" />
    </div>
    <div className="container-narrow relative">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Der Ablauf</span>
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-3">5 einfache Schritte</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.15}>
            <motion.div
              className="text-center group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 border-2 border-primary-foreground/20 flex items-center justify-center mx-auto group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <s.icon className="h-8 w-8 text-accent" />
                </div>
                <span className="absolute -top-3 -right-3 gold-gradient text-accent-foreground font-heading text-sm w-8 h-8 flex items-center justify-center shadow-md">{s.num}</span>
              </div>
              <h3 className="font-heading text-xl text-primary-foreground mb-2">{s.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
