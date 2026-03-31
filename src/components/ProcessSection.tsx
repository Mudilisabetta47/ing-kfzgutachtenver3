import { Phone, Search, FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    icon: Phone,
    num: "1",
    title: "Kontakt aufnehmen",
    desc: "Rufen Sie uns an oder schreiben Sie uns eine E-Mail, um den Unfallhergang kurz zu schildern. Wir beraten Sie unverbindlich und vereinbaren bei Bedarf sofort einen Begutachtungstermin.",
  },
  {
    icon: Search,
    num: "2",
    title: "Fahrzeugbegutachtung & Gutachtenerstellung",
    desc: "Unser Gutachter begutachtet den Schaden bei Ihnen vor Ort und erstellt ein unabhängiges Unfallgutachten. Auf Wunsch vermitteln wir Ihnen eine geeignete Werkstatt und kümmern uns um die Organisation eines Mietwagens.",
  },
  {
    icon: FileCheck,
    num: "3",
    title: "Schadensabwicklung & Kostentransparenz",
    desc: "Mit dem Gutachten fordern Sie bei der gegnerischen Versicherung den Schadenersatz ein. Hierbei unterstützt Sie ein Rechtsanwalt – bei einem unverschuldeten Unfall entstehen Ihnen KEINE Kosten.",
  },
];

const ProcessSection = () => (
  <section id="ablauf" className="section-padding blue-gradient overflow-hidden relative">
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="absolute top-20 left-10 w-64 h-64 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-10 right-20 w-96 h-96 border border-primary-foreground rounded-full" />
    </div>
    <div className="container-narrow relative">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm uppercase tracking-[0.2em]">So funktioniert es</span>
          <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-3">
            Sie hatten einen Unfall? So funktioniert unser Service
          </h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>

      {/* Phone CTA */}
      <ScrollReveal delay={0.1}>
        <motion.a
          href="tel:053122436430"
          className="flex items-center justify-center gap-3 mb-14 text-primary-foreground hover:text-accent transition-colors"
          whileHover={{ scale: 1.03 }}
        >
          <div className="gold-gradient w-10 h-10 rounded-full flex items-center justify-center shadow-md">
            <Phone className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <span className="block text-xs text-primary-foreground/50 font-medium">Zur 24h Hotline</span>
            <span className="font-heading text-xl">0531 - 22 436 430</span>
          </div>
        </motion.a>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num} delay={i * 0.15}>
            <motion.div
              className="relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 h-full group hover:bg-primary-foreground/10 transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              {/* Big number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading text-6xl text-accent/80 group-hover:text-accent transition-colors">{s.num}</span>
                <div className="w-14 h-14 border-2 border-primary-foreground/15 rounded-xl flex items-center justify-center group-hover:border-accent transition-colors">
                  <s.icon className="h-7 w-7 text-accent" />
                </div>
              </div>
              <h3 className="font-heading text-xl text-primary-foreground mb-4">{s.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
