import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-gutachter.jpg";
import ScrollReveal from "./ScrollReveal";
import { useCounter } from "@/hooks/useCounter";

const highlights = [
  "Zertifizierter Sachverständiger (DGSV)",
  "Über 10 Jahre Erfahrung",
  "Kostenloser Vor-Ort-Service in Braunschweig & Umgebung",
  "100% unabhängig & versicherungsungebunden",
  "Gutachten für PKW, LKW, Elektro & Hybrid",
];

const stats = [
  { target: 2500, suffix: "+", label: "Gutachten erstellt" },
  { target: 10, suffix: "+", label: "Jahre Erfahrung" },
  { target: 24, suffix: "h", label: "Terminfindung" },
];

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, count } = useCounter(target);
  return (
    <div ref={ref} className="text-center p-6 bg-card rounded-2xl border border-border shadow-sm">
      <span className="font-heading text-5xl md:text-6xl text-primary">{count}{suffix}</span>
      <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
}

const IntroSection = () => (
  <section id="ueber-uns" className="section-padding bg-secondary overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Über uns</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">
            Unabhängiger KFZ-Gutachter für Schadensbewertung
          </h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img src={aboutImg} alt="ING KFZ Gutachten Braunschweig" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 gold-gradient p-6 rounded-2xl hidden md:block shadow-2xl">
              <div className="text-center">
                <span className="font-heading text-5xl text-accent-foreground">10+</span>
                <span className="block text-xs font-bold text-accent-foreground uppercase tracking-widest mt-1">Jahre</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In den Straßen von Braunschweig kommt es täglich zu zahlreichen Verkehrsunfällen. Wenn Sie unverschuldet in einen Verkehrsunfall verwickelt wurden, 
              begleiten wir Sie bei der Schadensabwicklung. Das Hauptaufgabengebiet unserer Kfz Gutachter ist die Erstellung von Schadensgutachten für Ihr beschädigtes Kraftfahrzeug.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Sie hatten einen Unfall im Raum <strong className="text-foreground">Braunschweig, Salzgitter oder Wolfsburg</strong>? Dann sind Sie bei ING Kfz Gutachter genau richtig. 
              Unsere Gutachter sind allesamt zertifiziert und wir sind empfohlener Gutachter vom Deutschen Gutachter und Sachverständigen Verband e.V. (DGSV).
            </p>
            <div className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <ScrollReveal key={h} delay={0.3 + i * 0.08}>
                  <div className="flex items-center gap-3 group">
                    <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium text-sm">{h}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <motion.a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold tracking-wide text-sm px-7 py-3.5 rounded-lg shadow-lg shadow-primary/20 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Jetzt kontaktieren <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-6">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
