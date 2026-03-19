import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thomas K.",
    text: "Nach meinem Unfall war Herr Mustermann noch am gleichen Tag vor Ort. Das Gutachten war innerhalb von zwei Tagen fertig – absolut professionell und zuverlässig.",
    rating: 5,
  },
  {
    name: "Sandra M.",
    text: "Kompetente Beratung von Anfang an. Dank des unabhängigen Gutachtens habe ich den vollen Schadenersatz erhalten. Kann ich nur weiterempfehlen!",
    rating: 5,
  },
  {
    name: "Michael R.",
    text: "Sehr freundlicher und fachkundiger Gutachter. Die Beweissicherung für meinen Rechtsstreit war lückenlos dokumentiert. Top Service!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Das sagen unsere Kunden</h2>
        <p className="text-muted-foreground">Vertrauen und Zufriedenheit stehen bei uns an erster Stelle.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded shadow-md p-6">
            <Quote className="h-8 w-8 text-accent mb-4" />
            <p className="text-muted-foreground leading-relaxed mb-4 italic">„{t.text}"</p>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="font-semibold text-foreground text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
