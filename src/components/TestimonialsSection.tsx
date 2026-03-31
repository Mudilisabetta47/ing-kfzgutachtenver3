import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  { name: "Alexander W.", text: "Super kompetent! Kann ich nur weiterempfehlen!" },
  { name: "Sandra M.", text: "Zuverlässig, sehr kompetent, bestens 👍🏻" },
  { name: "Thomas K.", text: "Noch am gleichen Tag vor Ort. Gutachten innerhalb von zwei Tagen – absolut professionell und zuverlässig." },
  { name: "Michael R.", text: "Ich kann ING Kfz Gutachten nur vorbehaltlos jedem empfehlen. Rundumsorglospaket gepaart mit Freundlichkeit, Zuverlässigkeit und geballter Kompetenz." },
  { name: "Lazize B.", text: "Schneller Einsatz, freundlich und kompetent. Ich bin sehr zufrieden. Weiter so." },
  { name: "Christian L.", text: "Vom ersten Gespräch bis zur Auszahlung der Schadenssumme – einfach top. Besser geht nicht." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-1">Kundenstimmen</h2>
            <p className="text-muted-foreground text-sm font-body">Was unsere Kunden über uns sagen.</p>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground font-body">
            <Stars />
            <span>4,9 / 5 · 120+ Google-Bewertungen</span>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <ScrollReveal key={t.name}>
            <div className="bg-card border border-border rounded-lg p-6 h-full">
              <Stars />
              <p className="text-muted-foreground text-sm leading-relaxed mt-4 mb-5 font-body">„{t.text}"</p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs font-bold font-body">{t.name[0]}</span>
                </div>
                <span className="text-foreground text-sm font-semibold font-body">{t.name}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
