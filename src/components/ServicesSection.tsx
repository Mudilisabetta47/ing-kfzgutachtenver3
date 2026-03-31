import { ArrowRight, Car, Truck, Zap, Bike, Award, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import imgUnfall from "@/assets/service-unfallgutachten.jpg";
import imgSchaden from "@/assets/service-schadengutachten.jpg";
import imgBewertung from "@/assets/service-fahrzeugbewertung.jpg";
import imgOldtimer from "@/assets/service-oldtimer.jpg";
import imgLeasing from "@/assets/service-leasing.jpg";
import imgBeweis from "@/assets/service-beweissicherung.jpg";

const services = [
  { icon: Car, title: "PKW Gutachten", desc: "Unfallgutachten für Pkw – vom Kleinwagen bis zum Transporter.", img: imgUnfall },
  { icon: Truck, title: "LKW Gutachten", desc: "Fachgerechte Gutachten für Lkw und Nutzfahrzeuge aller Größen.", img: imgSchaden },
  { icon: Zap, title: "E-Auto & Hybrid", desc: "Begutachtung moderner Elektro- und Hybridfahrzeuge inkl. HV-System.", img: imgBewertung },
  { icon: Bike, title: "Motorrad Gutachten", desc: "Gutachten für Motorräder, Roller und andere Krafträder.", img: imgOldtimer },
  { icon: Award, title: "Oldtimer Gutachten", desc: "Bewertung & Dokumentation für klassische Fahrzeuge und Sammlerfahrzeuge.", img: imgLeasing },
  { icon: Wrench, title: "Bagatellschäden", desc: "Kostenvoranschläge für kleinere Schäden unter ca. 1.000 € netto.", img: imgBeweis },
];

const ServicesSection = () => (
  <section id="leistungen" className="section-padding bg-background overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-[0.2em] uppercase">Unsere Gutachten</span>
          <h2 className="font-heading text-4xl md:text-6xl text-foreground mt-3">Unsere Leistungen im Überblick</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <motion.a
              href="#kontakt"
              className="group relative h-[380px] overflow-hidden block rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(217,80%,15%)]/95 via-[hsl(217,69%,28%)]/40 to-transparent group-hover:from-[hsl(217,80%,15%)] transition-all duration-500" />
              
              <div className="absolute top-5 left-5">
                <div className="gold-gradient w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <s.icon className="h-6 w-6 text-accent-foreground" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-7 transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="font-heading text-2xl text-primary-foreground mb-2">{s.title}</h3>
                <p className="text-primary-foreground/60 text-sm mb-4 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Gutachten anfragen <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
