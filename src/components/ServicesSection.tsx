import imgUnfall from "@/assets/service-unfallgutachten.jpg";
import imgSchaden from "@/assets/service-schadengutachten.jpg";
import imgBewertung from "@/assets/service-fahrzeugbewertung.jpg";
import imgOldtimer from "@/assets/service-oldtimer.jpg";
import imgLeasing from "@/assets/service-leasing.jpg";
import imgBeweis from "@/assets/service-beweissicherung.jpg";

const services = [
  { title: "Unfallgutachten", img: imgUnfall, desc: "Professionelle Dokumentation und Bewertung von Unfallschäden für Ihre Ansprüche." },
  { title: "Schadengutachten", img: imgSchaden, desc: "Detaillierte Schadenanalyse mit exakter Kalkulation der Reparaturkosten." },
  { title: "Fahrzeugbewertung", img: imgBewertung, desc: "Objektive Wertermittlung für Kauf, Verkauf oder Versicherungszwecke." },
  { title: "Oldtimerbewertung", img: imgOldtimer, desc: "Fachkundige Bewertung und Zustandsdokumentation von Oldtimern." },
  { title: "Leasing-Rückgabe", img: imgLeasing, desc: "Unabhängige Prüfung vor der Leasing-Rückgabe zum Schutz vor Nachforderungen." },
  { title: "Beweissicherung", img: imgBeweis, desc: "Gerichtsfeste Dokumentation und Sicherung von Beweismaterial." },
];

const ServicesSection = () => (
  <section id="leistungen" className="section-padding bg-secondary">
    <div className="container-narrow">
      <div className="text-center mb-12">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Unsere Leistungen</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Vom Unfallgutachten bis zur Oldtimerbewertung – wir bieten Ihnen das gesamte Spektrum der Kfz-Begutachtung.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card rounded overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="overflow-hidden h-48">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">{s.desc}</p>
              <a href="#kontakt" className="text-sm font-semibold text-primary hover:text-accent transition-colors">
                Mehr erfahren →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
