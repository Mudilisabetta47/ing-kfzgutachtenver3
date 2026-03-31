import { Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "1",
    title: "Kontakt aufnehmen",
    desc: "Rufen Sie uns an oder schreiben Sie uns eine E-Mail, um den Unfallhergang kurz zu schildern. Wir beraten Sie unverbindlich und vereinbaren bei Bedarf sofort einen Begutachtungstermin.",
  },
  {
    num: "2",
    title: "Fahrzeugbegutachtung",
    desc: "Unser Gutachter begutachtet den Schaden bei Ihnen vor Ort und erstellt ein unabhängiges Unfallgutachten. Auf Wunsch vermitteln wir eine geeignete Werkstatt und organisieren einen Mietwagen.",
  },
  {
    num: "3",
    title: "Schadensabwicklung",
    desc: "Mit dem Gutachten fordern Sie bei der gegnerischen Versicherung den Schadenersatz ein. Ein Rechtsanwalt unterstützt Sie – bei unverschuldeten Unfällen entstehen Ihnen keine Kosten.",
  },
];

const ProcessSection = () => (
  <section id="ablauf" className="py-16 md:py-24 blue-gradient">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground tracking-wide mb-3">
          So funktioniert unser Service
        </h2>
        <p className="text-primary-foreground/50 font-body text-sm mb-10 max-w-xl">
          Nach Ihrem Anruf kümmern wir uns um alles Weitere – von der Begutachtung bis zur Regulierung.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s) => (
          <ScrollReveal key={s.num}>
            <div className="border border-primary-foreground/10 rounded-lg p-7 h-full hover:border-primary-foreground/20 transition-colors">
              <span className="font-heading text-5xl text-accent/70 block mb-4">{s.num}</span>
              <h3 className="font-heading text-xl text-primary-foreground mb-3 tracking-wide">{s.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <div className="mt-10 flex items-center gap-3">
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
