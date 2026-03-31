import { Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Kontakt aufnehmen",
    desc: "Rufen Sie uns an oder schreiben Sie uns. Wir beraten Sie unverbindlich und vereinbaren sofort einen Termin.",
  },
  {
    num: "02",
    title: "Fahrzeugbegutachtung",
    desc: "Unser Gutachter begutachtet den Schaden vor Ort und erstellt ein unabhängiges Unfallgutachten.",
  },
  {
    num: "03",
    title: "Schadensabwicklung",
    desc: "Mit dem Gutachten fordern Sie den Schadenersatz ein. Ein Rechtsanwalt unterstützt Sie kostenfrei.",
  },
];

const ProcessSection = () => (
  <section id="ablauf" className="py-20 md:py-28 bg-primary-dark text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-primary-foreground/40 mb-3 font-body">Ablauf</p>
        <h2 className="font-heading text-3xl md:text-5xl tracking-wide mb-12">
          So funktioniert unser Service
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-0">
        {steps.map((s, i) => (
          <ScrollReveal key={s.num}>
            <div className={`p-8 md:p-10 h-full ${i < steps.length - 1 ? "md:border-r border-primary-foreground/10" : ""}`}>
              <span className="font-heading text-6xl text-accent/30 block mb-4">{s.num}</span>
              <h3 className="font-heading text-xl mb-3 tracking-wide">{s.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 flex items-center gap-3">
          <Phone className="h-4 w-4 text-accent" />
          <span className="text-primary-foreground/40 text-sm font-body">24h Hotline:</span>
          <a href="tel:053122436430" className="text-primary-foreground font-bold font-body hover:text-accent transition-colors">
            0531 - 22 436 430
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default ProcessSection;
