import { Bike } from "lucide-react";
import ServicePage from "@/components/ServicePage";
import imgOldtimer from "@/assets/service-oldtimer.jpg";

const MotorradGutachten = () => (
  <ServicePage
    title="Motorrad Gutachten"
    subtitle="Gutachten für Motorräder, Roller und andere Krafträder"
    heroImage={imgOldtimer}
    icon={Bike}
    intro="Motorräder und Krafträder sind bei einem Unfall besonders anfällig für verdeckte Schäden. Ein fachkundiges Gutachten ist daher unerlässlich, um alle Schäden – auch die nicht sofort sichtbaren – vollständig zu dokumentieren."
    details={[
      "Bei Zweirädern werden Rahmen, Fahrwerk und tragende Teile bei einem Aufprall oft stärker belastet als es äußerlich den Anschein hat. Verformungen am Rahmen oder an der Schwinge können die Fahrsicherheit erheblich beeinträchtigen und müssen fachgerecht erfasst werden.",
      "Wir begutachten alle Arten von Krafträdern – von Rollern und Leichtkrafträdern über Touring- und Sportmaschinen bis hin zu Enduros und Cruisern. Dabei berücksichtigen wir die spezifischen Konstruktionsmerkmale und Materialien der jeweiligen Fahrzeugtypen.",
      "Auch bei Motorrädern haben Sie als unverschuldigter Unfallbeteiligter das Recht auf einen unabhängigen Sachverständigen. Die Kosten werden von der gegnerischen Versicherung übernommen.",
    ]}
    benefits={[
      "Erfahrung mit allen Motorradtypen und Marken",
      "Überprüfung von Rahmen, Gabel und Fahrwerk",
      "Erkennung verdeckter Schäden",
      "Bewertung von Anbauteilen und Zubehör",
      "Wertminderungsberechnung für Motorräder",
      "Kostenübernahme durch gegnerische Versicherung",
    ]}
  />
);

export default MotorradGutachten;
