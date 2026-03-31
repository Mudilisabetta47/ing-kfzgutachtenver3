import { Award } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import imgLeasing from "@/assets/service-leasing.jpg";

const OldtimerGutachten = () => (
  <ServicePage
    title="Oldtimer Gutachten"
    subtitle="Wertgutachten für klassische Fahrzeuge – für Versicherung, H-Kennzeichen und Verkauf"
    heroImage={imgLeasing}
    icon={Award}
    intro="Ein Oldtimer ist mehr als nur ein Fahrzeug – er ist eine Investition aus Leidenschaft. Damit Ihr klassisches Fahrzeug nicht nur emotional, sondern auch materiell abgesichert ist, ist ein professionelles Wertgutachten unerlässlich."
    details={[
      "Ob für die richtige Versicherungseinstufung, die Erlangung des begehrten H-Kennzeichens oder für den Kauf bzw. Verkauf eines Klassikers: Ein fundiertes Wertgutachten schafft Klarheit über den tatsächlichen Marktwert und den Zustand Ihres Fahrzeugs.",
      "Wir bewerten Ihren Oldtimer nach anerkannten Bewertungskriterien und berücksichtigen dabei Zustandsnoten, Originalität, Restaurierungsqualität und marktrelevante Besonderheiten. Unsere Gutachten werden von Versicherungen und Behörden anerkannt.",
      "Bei Unfallschäden an Oldtimern ist die Situation besonders komplex: Originalteile sind oft nicht mehr verfügbar, und die Reparatur erfordert spezialisierte Werkstätten. Wir kennen die Besonderheiten und berücksichtigen diese in unseren Gutachten.",
    ]}
    benefits={[
      "Anerkannte Wertgutachten für Versicherung und Behörden",
      "Zustandsbewertung nach gängigen Klassifizierungssystemen",
      "Unterstützung beim H-Kennzeichen-Antrag",
      "Bewertung von Restaurierungsqualität und Originalität",
      "Marktgerechte Wertermittlung für Kauf und Verkauf",
      "Unfallgutachten unter Berücksichtigung der Oldtimer-Besonderheiten",
    ]}
  />
);

export default OldtimerGutachten;
