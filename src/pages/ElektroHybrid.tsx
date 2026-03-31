import { Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import imgBewertung from "@/assets/service-fahrzeugbewertung.jpg";

const ElektroHybrid = () => (
  <ServicePage
    title="E-Auto & Hybrid Gutachten"
    subtitle="Begutachtung moderner Elektro- und Hybridfahrzeuge inkl. Hochvolt-System"
    heroImage={imgBewertung}
    icon={Zap}
    intro="Elektro- und Hybridfahrzeuge stellen Gutachter vor besondere Herausforderungen. Die Hochvolt-Technik, der Akku und die komplexe Elektronik erfordern spezielles Know-how und besondere Sicherheitsvorkehrungen bei der Begutachtung."
    details={[
      "Ein Unfall mit einem Elektrofahrzeug kann schwerwiegende Folgen für den Hochvolt-Akku haben. Selbst bei äußerlich geringen Schäden können innere Beschädigungen der Batterie vorliegen, die ein erhebliches Sicherheitsrisiko darstellen und hohe Reparaturkosten verursachen.",
      "Wir verfügen über die notwendigen Qualifikationen und Erfahrung, um HV-Systeme fachgerecht zu beurteilen. Unsere Gutachten berücksichtigen die besonderen Aspekte der Elektromobilität, einschließlich Batterieprüfung, Isolationswiderstandsmessung und die Bewertung regenerativer Bremssysteme.",
      "Die Reparaturkosten bei Elektrofahrzeugen liegen oft deutlich höher als bei konventionellen Fahrzeugen. Ein unabhängiges Gutachten ist daher umso wichtiger, um sicherzustellen, dass alle Schäden vollständig erfasst und erstattet werden.",
    ]}
    benefits={[
      "Qualifizierte Begutachtung von HV-Systemen und Akkus",
      "Sicherheitsbewertung nach Unfallschäden",
      "Berücksichtigung der besonderen Reparaturverfahren",
      "Kenntnis aktueller Herstellervorgaben für E-Fahrzeuge",
      "Bewertung von Ladeinfrastruktur-Schäden",
      "Erfahrung mit allen gängigen E-Auto-Marken",
    ]}
  />
);

export default ElektroHybrid;
