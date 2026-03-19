import { AlertCircle, HelpCircle, FileText, Users, Award } from "lucide-react";

const sections = [
  {
    icon: AlertCircle,
    title: "Warum ein unabhängiger Kfz-Gutachter wichtig ist",
    text: "Nach einem Verkehrsunfall beauftragt die gegnerische Versicherung häufig einen eigenen Gutachter, der im Interesse der Versicherung handelt. Ein unabhängiger Sachverständiger hingegen dokumentiert den Schaden objektiv und stellt sicher, dass Ihnen der volle Schadenersatz zusteht. So schützen Sie sich vor Kürzungen und erhalten eine faire Regulierung.",
  },
  {
    icon: HelpCircle,
    title: "Was tun nach einem Unfall?",
    text: "Sichern Sie die Unfallstelle, dokumentieren Sie den Schaden mit Fotos und tauschen Sie die Daten mit dem Unfallgegner aus. Anschließend sollten Sie zeitnah einen unabhängigen Kfz-Gutachter beauftragen – bei unverschuldeten Unfällen ist das Ihr gutes Recht, und die Kosten trägt in der Regel die gegnerische Versicherung.",
  },
  {
    icon: FileText,
    title: "Wann brauche ich ein Schadengutachten?",
    text: "Ein Schadengutachten ist bei allen Schäden oberhalb der Bagatellgrenze (ca. 750 €) sinnvoll. Es dokumentiert die Schadenshöhe, den Reparaturweg, den Minderwert und die voraussichtliche Reparaturdauer. Damit haben Sie eine solide Grundlage für die Schadenregulierung gegenüber der Versicherung.",
  },
  {
    icon: Users,
    title: "Wer zahlt den Gutachter?",
    text: "Bei einem unverschuldeten Unfall übernimmt die Haftpflichtversicherung des Unfallverursachers die Kosten für den Gutachter. Sie haben das Recht, einen Gutachter Ihrer Wahl zu beauftragen – unabhängig davon, was Ihnen die gegnerische Versicherung empfiehlt.",
  },
  {
    icon: Award,
    title: "Warum unser Büro?",
    text: "Wir verbinden langjährige Erfahrung mit modernster Technik. Unsere Gutachten sind anerkannt, gerichtsfest und werden zeitnah erstellt. Mit unserem Vor-Ort-Service kommen wir direkt zu Ihnen – ob an die Unfallstelle, in die Werkstatt oder zu Ihnen nach Hause. Persönliche Betreuung und schnelle Terminvergabe sind für uns selbstverständlich.",
  },
];

const InfoSection = () => (
  <section className="section-padding bg-card">
    <div className="container-narrow">
      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
        Wichtige Informationen rund um Kfz-Gutachten
      </h2>
      <div className="space-y-10">
        {sections.map((s) => (
          <div key={s.title} className="flex gap-5">
            <div className="flex-shrink-0 mt-1">
              <div className="bg-primary/10 rounded p-2.5">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfoSection;
