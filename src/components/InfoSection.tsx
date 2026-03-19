import { AlertTriangle, HelpCircle, FileText, Users, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const sections = [
  { icon: AlertTriangle, title: "Warum ein unabhängiger Gutachter?", text: "Die gegnerische Versicherung beauftragt eigene Gutachter, die in deren Interesse handeln. Ein unabhängiger Sachverständiger dokumentiert objektiv und stellt sicher, dass Ihnen der volle Schadenersatz zusteht." },
  { icon: HelpCircle, title: "Was tun nach einem Unfall?", text: "Unfallstelle sichern, Schaden dokumentieren, Daten austauschen. Dann zeitnah einen unabhängigen Gutachter beauftragen – bei unverschuldeten Unfällen trägt die gegnerische Versicherung die Kosten." },
  { icon: FileText, title: "Wann brauche ich ein Gutachten?", text: "Ab einer Schadenshöhe von ca. 750 € ist ein Gutachten sinnvoll. Es dokumentiert Schadenshöhe, Reparaturweg, Minderwert und Reparaturdauer – die Grundlage für Ihre Ansprüche." },
  { icon: Users, title: "Wer zahlt den Gutachter?", text: "Bei unverschuldeten Unfällen übernimmt die Haftpflichtversicherung des Verursachers die Kosten. Sie haben das Recht, einen Gutachter Ihrer Wahl zu beauftragen." },
  { icon: Award, title: "Warum unser Büro?", text: "Langjährige Erfahrung, modernste Technik, gerichtsfeste Gutachten. Vor-Ort-Service, persönliche Betreuung und schnelle Terminvergabe sind selbstverständlich." },
];

const InfoSection = () => (
  <section className="section-padding bg-card overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Wissenswertes</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Gut informiert</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {sections.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`flex gap-5 ${i === sections.length - 1 && sections.length % 2 !== 0 ? 'md:col-span-2 md:max-w-xl md:mx-auto' : ''}`}>
              <div className="flex-shrink-0">
                <div className="bg-primary w-12 h-12 flex items-center justify-center">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.text}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default InfoSection;
