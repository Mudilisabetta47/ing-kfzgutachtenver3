import { Phone, CheckCircle, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero-gutachter.jpg";

const checkpoints = [
  "Ihr Kfz-Sachverständigenbüro für Braunschweig und Umgebung",
  "Unabhängig, sachlich und fundiert",
  "Kostenfreie Vor-Ort-Besichtigung Ihres Fahrzeugs",
  "Direkte Abrechnung mit der Versicherung des Schadenverursachers",
];

const HeroSection = () => (
  <section id="start" className="relative min-h-[92vh] flex flex-col">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung in Braunschweig" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/65 to-primary/20" />
    </div>

    <div className="relative flex-1 flex items-center">
      <div className="max-w-6xl mx-auto w-full px-4 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-primary-foreground leading-[1.05] mb-8 tracking-wide">
            Kfz Gutachter Braunschweig
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 font-body leading-relaxed">
            Ihr unabhängiger Partner im Schadenfall – schnell, zuverlässig und immer auf Ihrer Seite.
          </p>

          <ul className="space-y-3 mb-10">
            {checkpoints.map((cp, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/85 text-sm md:text-base font-body">{cp}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="gold-gradient text-accent-foreground font-bold px-8 py-3.5 text-sm tracking-wide inline-flex items-center gap-2 rounded-md"
            >
              Jetzt Schaden melden
            </a>
            <a
              href="tel:053122436430"
              className="border border-primary-foreground/30 text-primary-foreground font-medium px-8 py-3.5 text-sm inline-flex items-center gap-2 rounded-md hover:border-accent hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              0531 - 22 436 430
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <a href="#unfall" className="text-primary-foreground/30 hover:text-accent transition-colors">
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </div>
  </section>
);

export default HeroSection;
