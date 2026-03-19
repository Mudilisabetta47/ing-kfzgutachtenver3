import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-gutachter.jpg";
import ScrollReveal from "./ScrollReveal";
import { useCounter } from "@/hooks/useCounter";

const highlights = [
  "Zertifizierter Sachverständiger",
  "Über 15 Jahre Erfahrung",
  "Vor-Ort-Service in ganz Hannover",
  "Unabhängig & versicherungsungebunden",
];

const stats = [
  { target: 2500, suffix: "+", label: "Gutachten erstellt" },
  { target: 15, suffix: "+", label: "Jahre Erfahrung" },
  { target: 24, suffix: "h", label: "Terminfindung" },
];

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, count } = useCounter(target);
  return (
    <div ref={ref} className="text-center">
      <span className="font-heading text-5xl md:text-6xl text-primary">{count}{suffix}</span>
      <span className="block text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
}

const IntroSection = () => (
  <section id="ueber-uns" className="section-padding bg-card overflow-hidden">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative overflow-hidden shadow-2xl">
              <img src={aboutImg} alt="ING KFZ Gutachten" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 gold-gradient p-6 hidden md:block shadow-2xl">
              <div className="text-center">
                <span className="font-heading text-5xl text-accent-foreground">15+</span>
                <span className="block text-xs font-bold text-accent-foreground uppercase tracking-widest mt-1">Jahre Erfahrung</span>
              </div>
            </div>
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-4 border-l-4 border-primary hidden md:block" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div>
            <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Über uns</span>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 mb-6 leading-[1.1]">
              Kompetenz trifft<br />Unabhängigkeit
            </h2>
            <div className="w-16 h-1 gold-gradient mb-6" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Als freier Kfz-Sachverständiger in Hannover erstellen wir Gutachten ausschließlich in Ihrem Interesse. Keine Bindung an Versicherungen – volle Transparenz und Objektivität.
            </p>
            <div className="space-y-3 mb-8">
              {highlights.map((h, i) => (
                <ScrollReveal key={h} delay={0.3 + i * 0.1}>
                  <div className="flex items-center gap-3 group">
                    <div className="w-7 h-7 bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{h}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <motion.a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-sm px-7 py-3.5 shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Jetzt kontaktieren <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      <div className="mt-20 grid grid-cols-3 gap-8 border-t border-border pt-12">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default IntroSection;
