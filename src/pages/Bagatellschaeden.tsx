import { Wrench } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import imgBeweis from "@/assets/service-beweissicherung.jpg";

const Bagatellschaeden = () => (
  <ServicePage
    title="Bagatellschäden"
    subtitle="Kostenvoranschläge und Kurzgutachten für kleinere Schäden"
    heroImage={imgBeweis}
    icon={Wrench}
    intro="Nicht jeder Schaden erfordert ein vollständiges Gutachten. Bei kleineren Schäden unter ca. 750–1.000 Euro netto Reparaturkosten kann ein qualifizierter Kostenvoranschlag die wirtschaftlich sinnvollere Alternative sein."
    details={[
      "Ein Kostenvoranschlag beinhaltet eine fachgerechte Kalkulation der Reparaturkosten auf Basis aktueller Ersatzteil- und Stundenverrechnungssätze. Er ist schneller erstellt als ein Vollgutachten und eignet sich besonders für kleinere Karosserie- und Lackschäden.",
      "Wichtig zu wissen: Auch bei einem Kostenvoranschlag haben Sie Anspruch auf die Erstattung durch die gegnerische Versicherung, sofern Sie unverschuldet geschädigt wurden. Allerdings werden hier keine Wertminderung und kein Nutzungsausfall berechnet.",
      "Wir beraten Sie gern vorab, ob in Ihrem Fall ein Kostenvoranschlag ausreicht oder ob ein vollständiges Gutachten die bessere Wahl ist. Diese Erstberatung ist für Sie selbstverständlich kostenlos und unverbindlich.",
    ]}
    benefits={[
      "Schnelle Erstellung des Kostenvoranschlags",
      "Günstigere Alternative zum Vollgutachten",
      "Fachgerechte Kalkulation nach aktuellen Daten",
      "Kostenübernahme durch gegnerische Versicherung",
      "Kostenlose Vorab-Beratung ob KVA oder Gutachten",
      "Vor-Ort-Besichtigung auch bei Bagatellschäden",
    ]}
    ctaText="Kostenvoranschlag anfragen"
  />
);

export default Bagatellschaeden;
