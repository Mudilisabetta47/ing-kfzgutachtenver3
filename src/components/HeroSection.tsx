import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-gutachter.jpg";

const HeroSection = () => (
  <section id="start" className="relative h-[90vh] sm:h-[85vh] min-h-[500px] max-h-[800px]">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung in Braunschweig" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
    </div>

    <div className="relative h-full flex items-end sm:items-center pb-6 sm:pb-0">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="bg-card/95 backdrop-blur-sm p-6 sm:p-8 md:p-12 max-w-lg shadow-2xl">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 sm:mb-4 font-body">
            Kfz-Sachverständigenbüro Braunschweig
          </p>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl text-foreground leading-[1.05] mb-4 sm:mb-5 tracking-wide">
            Kfz Gutachter Braunschweig
          </h1>
          <p className="text-muted-foreground text-sm mb-5 sm:mb-6 font-body leading-relaxed">
            Ihr unabhängiger Partner im Schadenfall – schnell, zuverlässig und immer auf Ihrer Seite.
          </p>

          <ul className="space-y-2 mb-6 sm:mb-8">
            {[
              "Kostenfreie Vor-Ort-Besichtigung",
              "Direkte Abrechnung mit der Versicherung",
              "Gutachten innerhalb 24 Stunden",
            ].map((cp, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-xs sm:text-sm font-body">{cp}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#kontakt"
              className="gold-gradient text-accent-foreground font-bold px-6 sm:px-7 py-3 text-sm tracking-wide inline-flex items-center justify-center gap-2 uppercase"
            >
              Schaden melden
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:053122436430"
              className="border border-border text-foreground font-medium px-6 sm:px-7 py-3 text-sm inline-flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              0531 - 22 436 430
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
