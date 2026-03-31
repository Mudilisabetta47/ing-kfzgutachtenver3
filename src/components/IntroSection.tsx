import { CheckCircle, Phone } from "lucide-react";
import aboutImg from "@/assets/about-gutachter.jpg";
import ScrollReveal from "./ScrollReveal";

const IntroSection = () => (
  <section id="ueber-uns" className="py-20 md:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3 font-body">Über uns</p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground tracking-wide mb-6">
              Warum ING Kfz Gutachten
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body text-[15px]">
              Sie hatten einen Unfall und benötigen ein professionelles Kfz-Wert- oder Schadengutachten?
              Dann stehen wir Ihnen als verlässlicher Kfz-Gutachter in Braunschweig von der Erstellung eines
              Kfz-Gutachtens bis hin zur Restwertermittlung zur Verfügung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body text-[15px]">
              Unsere Gutachter sind zertifiziert und wir sind empfohlener Gutachter vom
              Deutschen Gutachter und Sachverständigen Verband e.V. (DGSV).
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Kfz-Gutachten mit Begleitung",
                "Abstimmung mit Ihrer Werkstatt",
                "24h Erreichbarkeit",
                "Direkte Versicherungsabrechnung",
                "Kostenlose Vor-Ort-Besichtigung",
                "Gutachten in 1–2 Werktagen",
              ].map((p, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm font-body">{p}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:053122436430"
              className="gold-gradient text-accent-foreground font-bold px-7 py-3 inline-flex items-center gap-2 text-sm uppercase tracking-wider"
            >
              <Phone className="h-4 w-4" />
              Termin vereinbaren
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <img
              src={aboutImg}
              alt="ING KFZ Gutachten – Sachverständiger bei der Arbeit in Braunschweig"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 right-0 bg-primary text-primary-foreground p-6">
              <span className="font-heading text-4xl block">10+</span>
              <span className="text-xs uppercase tracking-wider text-primary-foreground/70 font-body">Jahre Erfahrung</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default IntroSection;
