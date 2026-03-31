import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import imgUnfall from "@/assets/service-unfallgutachten.jpg";
import imgSchaden from "@/assets/service-schadengutachten.jpg";
import imgBewertung from "@/assets/service-fahrzeugbewertung.jpg";
import imgOldtimer from "@/assets/service-oldtimer.jpg";
import imgLeasing from "@/assets/service-leasing.jpg";
import imgBeweis from "@/assets/service-beweissicherung.jpg";

const services = [
  { title: "Unfallgutachten", desc: "Für Parkschäden, Auffahrunfälle und alle Haftpflichtschäden", img: imgUnfall, href: "/haftpflichtschaden" },
  { title: "Kostenvoranschlag", desc: "Für Kasko- oder Bagatellschäden unter 1.000 €", img: imgSchaden, href: "/kostenvoranschlag" },
  { title: "Fahrzeugbewertung", desc: "Wertgutachten für Kauf, Verkauf und Versicherung", img: imgBewertung, href: "/wertgutachten" },
  { title: "LKW Gutachten", desc: "Fachgerechte Gutachten für Nutzfahrzeuge aller Art", img: imgOldtimer, href: "/lkw-gutachten" },
  { title: "E-Auto & Hybrid", desc: "Spezialwissen für Hochvolt-Systeme und Akkutechnik", img: imgLeasing, href: "/gutachter-elektro-hybrid" },
  { title: "Motorrad Gutachten", desc: "Gutachten für Motorräder, Roller und Krafträder", img: imgBeweis, href: "/motorrad-gutachten" },
];

const ServicesSection = () => (
  <section id="leistungen" className="py-16 md:py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-2">Unsere Leistungen</h2>
        <p className="text-muted-foreground text-sm font-body mb-10">Gutachten für alle Fahrzeugtypen und Schadensarten.</p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <ScrollReveal key={s.title}>
            <Link to={s.href} className="group block overflow-hidden rounded-lg bg-card border border-border hover:border-primary/25 transition-colors">
              <div className="h-[180px] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} – ING Kfz Gutachten Braunschweig`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl text-foreground mb-1 tracking-wide">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-3">{s.desc}</p>
                <span className="text-primary text-sm font-semibold font-body inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
