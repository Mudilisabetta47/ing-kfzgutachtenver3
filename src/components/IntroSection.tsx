import { CheckCircle, Phone } from "lucide-react";
import aboutImg from "@/assets/about-gutachter.jpg";
import ScrollReveal from "./ScrollReveal";

const IntroSection = () => (
  <section id="ueber-uns" className="py-16 md:py-24 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Text – 3 cols */}
        <div className="lg:col-span-3">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-6">
              Warum ING Kfz Gutachten Braunschweig
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5 font-body">
              Sie hatten einen Unfall und benötigen ein professionelles Kfz-Wert- oder Schadengutachten?
              Dann stehen wir Ihnen als verlässlicher Kfz-Gutachter in Braunschweig von der Erstellung eines
              Kfz-Gutachtens, Kurzgutachtens, Kostenvoranschlages bis hin zur Restwertermittlung zur Verfügung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 font-body">
              Als Geschädigter unterstützen wir Sie dabei, die exakte Höhe der anfallenden Reparaturkosten
              zu ermitteln. Sie erhalten detaillierte Informationen darüber, welche Forderungen Ihnen
              für den Schadenersatz zustehen und wie sich diese zusammensetzen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body">
              Unsere Gutachter sind zertifiziert und wir sind empfohlener Gutachter vom
              Deutschen Gutachter und Sachverständigen Verband e.V. (DGSV).
            </p>

            <a
              href="tel:053122436430"
              className="gold-gradient text-accent-foreground font-bold px-7 py-3 rounded-md inline-flex items-center gap-2 text-sm"
            >
              <Phone className="h-4 w-4" />
              Jetzt Termin vereinbaren
            </a>
          </ScrollReveal>
        </div>

        {/* Image – 2 cols */}
        <div className="lg:col-span-2">
          <ScrollReveal>
            <img
              src={aboutImg}
              alt="ING KFZ Gutachten – Sachverständiger bei der Arbeit in Braunschweig"
              className="w-full h-[360px] object-cover rounded-lg"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Bullet points */}
      <ScrollReveal>
        <div className="mt-14 border-t border-border pt-10">
          <h3 className="font-heading text-2xl text-foreground mb-5 tracking-wide">
            Unsere Leistungen für Sie:
          </h3>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
            {[
              "Fundierte Kfz-Gutachten mit direkter Begleitung durch den Schadenprozess",
              "Abstimmung des Schadenprozesses mit Ihrer Werkstatt",
              "Rund um die Uhr erreichbar",
              "Direkte Abrechnung mit der gegnerischen Versicherung",
              "Kostenlose Anfahrt und Besichtigung vor Ort",
              "Gutachten innerhalb von 1–2 Werktagen",
              "Kostenvoranschläge für Kasko- oder Bagatellschäden",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground text-sm font-body">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default IntroSection;
