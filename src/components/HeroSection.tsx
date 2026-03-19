import { Phone, Shield, Clock, MessageCircle, BadgeCheck, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-gutachter.jpg";

const trustItems = [
  { icon: Shield, text: "Unabhängig" },
  { icon: Clock, text: "Schnell vor Ort" },
  { icon: MessageCircle, text: "Kostenlose Erstberatung" },
  { icon: BadgeCheck, text: "Für Geschädigte kostenfrei" },
];

const HeroSection = () => (
  <section id="start" className="relative min-h-[85vh] flex flex-col">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/50" />
    </div>

    <div className="relative flex-1 flex items-center">
      <div className="container-narrow px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 gold-gradient text-accent-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8">
            <Shield className="h-3.5 w-3.5" />
            Unabhängiger Sachverständiger
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-6">
            Ihr Kfz-Gutachter<br />
            <span className="text-accent">in Hannover</span>
          </h1>

          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light">
            Unfallgutachten, Schadengutachten und Fahrzeugbewertungen – schnell, unabhängig und zuverlässig.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#kontakt" className="gold-gradient text-accent-foreground font-bold px-8 py-4 hover:brightness-110 transition-all text-base uppercase tracking-wider flex items-center gap-2">
              Gutachten anfragen
              <ChevronRight className="h-5 w-5" />
            </a>
            <a href="tel:051112345678" className="border-2 border-accent text-accent font-bold px-8 py-4 hover:bg-accent/10 transition-all text-base uppercase tracking-wider flex items-center gap-2">
              <Phone className="h-5 w-5" />
              0511 / 12345678
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="relative bg-primary-dark/90 backdrop-blur-sm border-t border-primary-foreground/10">
      <div className="container-narrow px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-3 text-primary-foreground">
              <div className="gold-gradient p-2 flex-shrink-0">
                <item.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
