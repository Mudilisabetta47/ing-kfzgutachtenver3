import { CheckCircle, ArrowRight } from "lucide-react";
import aboutImg from "@/assets/about-gutachter.jpg";

const highlights = [
  "Zertifizierter Sachverständiger",
  "Über 15 Jahre Erfahrung",
  "Vor-Ort-Service in ganz Hannover",
  "Unabhängig & versicherungsungebunden",
];

const IntroSection = () => (
  <section id="ueber-uns" className="section-padding bg-card">
    <div className="container-narrow">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative overflow-hidden">
            <img src={aboutImg} alt="Kfz-Gutachter Mustermann" className="w-full h-[480px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 gold-gradient p-6 hidden md:block">
            <div className="text-center">
              <span className="font-heading text-5xl text-accent-foreground">15+</span>
              <span className="block text-xs font-bold text-accent-foreground uppercase tracking-widest mt-1">Jahre Erfahrung</span>
            </div>
          </div>
        </div>

        <div>
          <span className="text-accent font-bold text-sm uppercase tracking-widest">Über uns</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3 mb-6 leading-[1.1]">
            Kompetenz trifft<br />Unabhängigkeit
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Als freier Kfz-Sachverständiger in Hannover erstellen wir Gutachten ausschließlich in Ihrem Interesse. Keine Bindung an Versicherungen – volle Transparenz und Objektivität.
          </p>
          <div className="space-y-3 mb-8">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">{h}</span>
              </div>
            ))}
          </div>
          <a href="#kontakt" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:text-accent transition-colors">
            Jetzt kontaktieren <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
