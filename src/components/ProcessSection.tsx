import { Phone, CalendarCheck, Search, FileText, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: Phone, num: "01", title: "Kontakt & Ersteinschätzung", desc: "Sie melden sich telefonisch oder online – wir prüfen sofort, welche Schritte sinnvoll sind." },
  { icon: CalendarCheck, num: "02", title: "Vor-Ort-Besichtigung", desc: "Wir kommen zu Ihnen, nehmen den Schaden auf und dokumentieren alle relevanten Daten." },
  { icon: Search, num: "03", title: "Gutachtenerstellung", desc: "Vollständiges Gutachten inkl. Reparaturweg, Kosten und Wertminderung." },
  { icon: FileText, num: "04", title: "Übermittlung", desc: "Wir übermitteln das Gutachten direkt an die gegnerische Versicherung und Ihren Anwalt." },
  { icon: Headphones, num: "05", title: "Schadensregulierung", desc: "Mit dem Gutachten erfolgt die Auszahlung bzw. Reparaturfreigabe." },
];

const ProcessSection = () => (
  <section id="ablauf" className="section-padding blue-gradient overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.04]">
      <div className="absolute top-20 left-10 w-64 h-64 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-10 right-20 w-96 h-96 border border-primary-foreground rounded-full" />
    </div>
    <div className="container-narrow relative">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">Der Ablauf</span>
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-3">So läuft die Schadenabwicklung ab</h2>
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
                <div className="w-20 h-20 border-2 border-primary-foreground/15 rounded-2xl flex items-center justify-center mx-auto group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <s.icon className="h-8 w-8 text-accent" />
                </div>
                <span className="absolute -top-3 -right-3 gold-gradient text-accent-foreground font-heading text-sm w-8 h-8 rounded-lg flex items-center justify-center shadow-lg">{s.num}</span>
              </div>
              <h3 className="font-heading text-lg text-primary-foreground mb-2">{s.title}</h3>
              <p className="text-primary-foreground/50 text-xs leading-relaxed">{s.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
