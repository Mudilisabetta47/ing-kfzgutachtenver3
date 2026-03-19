import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Thomas K.", text: "Noch am gleichen Tag vor Ort. Gutachten innerhalb von zwei Tagen – absolut professionell und zuverlässig." },
  { name: "Sandra M.", text: "Kompetente Beratung von Anfang an. Dank des unabhängigen Gutachtens den vollen Schadenersatz erhalten." },
  { name: "Michael R.", text: "Sehr freundlicher und fachkundiger Gutachter. Lückenlose Dokumentation für meinen Rechtsstreit. Top!" },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-14">
          <span className="text-accent font-bold text-sm uppercase tracking-widest">Kundenstimmen</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Das sagen unsere Kunden</h2>
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.15}>
            <motion.div
              className="bg-card p-8 relative h-full"
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <Quote className="h-10 w-10 text-accent/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">„{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="gold-gradient w-10 h-10 flex items-center justify-center">
                  <span className="font-heading text-accent-foreground text-lg">{t.name[0]}</span>
                </div>
                <span className="font-bold text-foreground text-sm">{t.name}</span>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
