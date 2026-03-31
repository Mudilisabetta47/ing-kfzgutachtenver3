import { Truck } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import imgSchaden from "@/assets/service-schadengutachten.jpg";

const LkwGutachten = () => (
  <ServicePage
    title="LKW Gutachten"
    subtitle="Fachgerechte Gutachten für Lastkraftwagen und Nutzfahrzeuge aller Größen"
    heroImage={imgSchaden}
    icon={Truck}
    intro="Unfälle mit Lastkraftwagen und Nutzfahrzeugen erfordern besondere Sachkenntnis bei der Begutachtung. Durch die Komplexität der Fahrzeugtechnik und die oft hohen Schadenssummen ist ein professionelles Gutachten hier besonders wichtig."
    details={[
      "Wir verfügen über langjährige Erfahrung in der Begutachtung von LKW, Sattelzügen, Transportern und anderen Nutzfahrzeugen. Dabei berücksichtigen wir die besonderen Anforderungen dieser Fahrzeugklassen, einschließlich Aufbauten, Ladungssicherungssysteme und spezielle Ausstattungen.",
      "Bei Nutzfahrzeugen spielt der Nutzungsausfall eine besonders große Rolle, da das Fahrzeug für den Geschäftsbetrieb benötigt wird. Wir berechnen den entgangenen Gewinn und die Kosten für Ersatzfahrzeuge präzise und nachvollziehbar.",
      "Auch bei LKW-Gutachten gilt: Im Haftpflichtschadenfall trägt die gegnerische Versicherung die Kosten für den unabhängigen Sachverständigen.",
    ]}
    benefits={[
      "Spezialwissen für alle LKW- und Nutzfahrzeugtypen",
      "Berücksichtigung von Aufbauten und Sonderausstattungen",
      "Präzise Berechnung des Nutzungsausfalls",
      "Dokumentation von Ladungsschäden",
      "Vor-Ort-Besichtigung auch auf Betriebsgeländen",
      "Schnelle Bearbeitung zur Minimierung der Standzeit",
    ]}
  />
);

export default LkwGutachten;
