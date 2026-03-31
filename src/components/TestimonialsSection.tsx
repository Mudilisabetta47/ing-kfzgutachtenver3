import { Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Alexander W.", initial: "A", text: "Super kompetent! Kann ich nur weiterempfehlen!" },
  { name: "Sandra M.", initial: "S", text: "Zuverlässig, sehr kompetent, bestens 👍🏻" },
  { name: "Thomas K.", initial: "T", text: "Noch am gleichen Tag vor Ort. Gutachten innerhalb von zwei Tagen – absolut professionell und zuverlässig." },
  { name: "Michael R.", initial: "M", text: "Ich kann ING Kfz Gutachten nur vorbehaltlos JEDEM empfehlen, denn hier erlebt man das Rundumsorglospaket gepaart mit Freundlichkeit, Zuverlässigkeit und geballter Kompetenz." },
  { name: "Lazize B.", initial: "L", text: "Schneller Einsatz, freundlich und kompetent. Ich bin sehr zufrieden. Weiter so." },
  { name: "Christian L.", initial: "C", text: "Leider habe ich nur 5 Sterne zur Verfügung sonst gäbe es mehr. Vom ersten Gespräch bis zur Auszahlung der Schadenssumme – einfach top." },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Kundenstimmen</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Ihre Meinung zählt!</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>

      {/* Rating summary */}
      <ScrollReveal delay={0.1}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="text-center">
            <p className="font-heading text-2xl text-foreground font-bold">Ausgezeichnet</p>
            <div className="flex gap-1 mt-1 justify-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">Basierend auf</p>
            <p className="font-bold text-foreground text-lg">120+ Bewertungen</p>
          </div>
          <div className="h-12 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">G</span>
            </div>
            <span className="text-sm font-semibold text-muted-foreground">Google Bewertungen</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.1}>
            <motion.div
              className="bg-card p-6 rounded-xl border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full"
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-heading text-primary-foreground text-lg">{t.initial}</span>
                </div>
                <div>
                  <span className="font-bold text-foreground text-sm block">{t.name}</span>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <div className="ml-auto w-6 h-6 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-[10px] font-bold">G</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.3}>
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold text-sm hover:text-accent transition-colors"
          >
            Geben Sie uns Ihr Feedback! →
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TestimonialsSection;
