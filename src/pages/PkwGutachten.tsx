import { Car } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import imgUnfall from "@/assets/service-unfallgutachten.jpg";

const PkwGutachten = () => (
  <ServicePage
    title="PKW Gutachten"
    subtitle="Unfallgutachten für Personenkraftwagen – vom Kleinwagen bis zum Transporter"
    heroImage={imgUnfall}
    icon={Car}
    intro="Nach einem Verkehrsunfall ist ein professionelles Kfz-Gutachten die Grundlage für die vollständige Durchsetzung Ihrer Schadenersatzansprüche. Als unabhängiger Sachverständiger in Braunschweig erstellen wir detaillierte, gerichtsfeste Gutachten für alle PKW-Typen."
    details={[
      "Wir dokumentieren den gesamten Schadenumfang Ihres Fahrzeugs und berechnen die Reparaturkosten nach den Vorgaben der Fahrzeughersteller. Dabei berücksichtigen wir sämtliche Positionen wie Ersatzteile, Arbeitszeit, Lackierung und notwendige Zusatzarbeiten.",
      "Neben den reinen Reparaturkosten ermitteln wir auch die merkantile Wertminderung Ihres Fahrzeugs. Diese entsteht, weil ein reparierter Unfallwagen am Markt weniger wert ist als ein unfallfreies Fahrzeug gleichen Alters und Zustands.",
      "Im Haftpflichtschadenfall – also wenn Sie unverschuldet in den Unfall verwickelt wurden – übernimmt die gegnerische Versicherung die Kosten für das Gutachten. Sie haben als Geschädigter das Recht, einen unabhängigen Gutachter Ihrer Wahl zu beauftragen.",
    ]}
    benefits={[
      "Gerichtsfeste Dokumentation aller Schäden",
      "Ermittlung der Reparaturkosten nach Herstellervorgaben",
      "Berechnung der merkantilen Wertminderung",
      "Ermittlung von Nutzungsausfall bzw. Mietwagenkosten",
      "Kostenloser Vor-Ort-Service in Braunschweig und Umgebung",
      "Im Haftpflichtfall für Sie als Geschädigten kostenfrei",
    ]}
  />
);

export default PkwGutachten;
