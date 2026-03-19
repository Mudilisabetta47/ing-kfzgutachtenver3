import { ArrowRight } from "lucide-react";
import imgUnfall from "@/assets/service-unfallgutachten.jpg";
import imgSchaden from "@/assets/service-schadengutachten.jpg";
import imgBewertung from "@/assets/service-fahrzeugbewertung.jpg";
import imgOldtimer from "@/assets/service-oldtimer.jpg";
import imgLeasing from "@/assets/service-leasing.jpg";
import imgBeweis from "@/assets/service-beweissicherung.jpg";

const services = [
  { title: "Unfallgutachten", img: imgUnfall },
  { title: "Schadengutachten", img: imgSchaden },
  { title: "Fahrzeugbewertung", img: imgBewertung },
  { title: "Oldtimerbewertung", img: imgOldtimer },
  { title: "Leasing-Rückgabe", img: imgLeasing },
  { title: "Beweissicherung", img: imgBeweis },
];

const ServicesSection = () => (
  <section id="leistungen" className="section-padding bg-primary">
    <div className="container-narrow">
      <div className="text-center mb-14">
        <span className="text-accent font-bold text-sm uppercase tracking-widest">Was wir bieten</span>
        <h2 className="font-heading text-4xl md:text-6xl text-primary-foreground mt-3">Unsere Leistungen</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((s) => (
          <a key={s.title} href="#kontakt" className="group relative h-72 overflow-hidden block">
            <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-heading text-2xl text-primary-foreground mb-2">{s.title}</h3>
              <span className="inline-flex items-center gap-1 text-accent text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                Anfragen <ArrowRight className="h-4 w-4" />
              </span>
            </div>
            <div className="absolute top-4 right-4 gold-gradient w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="h-5 w-5 text-accent-foreground" />
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
