import { Phone } from "lucide-react";
import { Shield, Clock, MessageCircle, BadgeCheck } from "lucide-react";
import heroImg from "@/assets/hero-gutachter.jpg";

const trustItems = [
  { icon: Shield, text: "Unabhängig" },
  { icon: Clock, text: "Schnell vor Ort" },
  { icon: MessageCircle, text: "Kostenlose Erstberatung" },
  { icon: BadgeCheck, text: "Für Geschädigte meist kostenfrei" },
];

const HeroSection = () => (
  <section id="start" className="relative">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
    </div>
    <div className="relative container-narrow px-4 py-20 md:py-32">
      <div className="max-w-2xl">
        <h1 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-6">
          Ihr Kfz-Gutachter in Hannover – schnell, unabhängig und zuverlässig
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed">
          Unfallgutachten, Schadengutachten und Fahrzeugbewertungen vom unabhängigen Sachverständigen. Wir sind kurzfristig für Sie da.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#kontakt"
            className="bg-accent text-accent-foreground font-bold px-8 py-3.5 rounded hover:brightness-110 transition-all text-base"
          >
            Gutachten anfragen
          </a>
          <a
            href="tel:051112345678"
            className="border-2 border-primary-foreground text-primary-foreground font-bold px-8 py-3.5 rounded hover:bg-primary-foreground/10 transition-all text-base flex items-center gap-2"
          >
            <Phone className="h-5 w-5" />
            Jetzt anrufen
          </a>
        </div>
      </div>
    </div>

    <div className="relative bg-primary-light">
      <div className="container-narrow px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-primary-foreground">
              <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-sm font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
