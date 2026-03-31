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
  <section id="leistungen" className="py-20 md:py-28 bg-secondary/50">
    <div className="max-w-7xl mx-auto px-4">
      <ScrollReveal>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Was wir bieten</p>
        <h2 className="font-heading text-3xl md:text-5xl text-foreground tracking-wide mb-12">Unsere Leistungen</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-border">
        {services.map((s, i) => (
          <ScrollReveal key={s.title}>
            <Link
              to={s.href}
              className={`group block relative overflow-hidden bg-card hover:bg-primary/[0.02] transition-colors ${
                i < services.length - 1 ? "border-b md:border-b lg:border-b-0 border-border" : ""
              } ${(i + 1) % 3 !== 0 ? "lg:border-r border-border" : ""} ${(i + 1) % 2 !== 0 ? "md:border-r border-border" : ""}`}
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={s.img}
                  alt={`${s.title} – ING Kfz Gutachten Braunschweig`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2 tracking-wide">{s.title}</h3>
                <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed">{s.desc}</p>
                <span className="text-primary text-xs font-semibold font-body uppercase tracking-wider inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Details <ArrowRight className="h-3 w-3" />
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
