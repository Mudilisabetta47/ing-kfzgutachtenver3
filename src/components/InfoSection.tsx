import { AlertTriangle, HelpCircle, FileText, Users, Award } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const sections = [
  { icon: AlertTriangle, title: "Warum ein unabhängiger Gutachter?", text: "Die gegnerische Versicherung beauftragt eigene Gutachter, die in deren Interesse handeln. Keine gute Idee ist es, sich auf einen von der gegnerischen Versicherung beauftragten Gutachter zu verlassen – dieser wird bestrebt sein, den Schaden möglichst gering zu beziffern." },
  { icon: Users, title: "Wer zahlt das Gutachten?", text: "Die Kosten trägt der Schadenverursacher. Im Haftpflichtschadenfall können Sie davon ausgehen, dass Sie die Gebühren vom Unfallgegner bzw. von dessen Versicherung erstattet bekommen." },
  { icon: HelpCircle, title: "Was tun nach einem Unfall?", text: "Unfallstelle sichern, Schaden dokumentieren, Daten austauschen. Dann zeitnah einen unabhängigen Gutachter beauftragen. Bei unverschuldeten Unfällen trägt die gegnerische Versicherung die Kosten." },
  { icon: FileText, title: "Wann brauche ich ein Gutachten?", text: "Ab einer Schadenshöhe von ca. 750–1.000 € ist ein Gutachten sinnvoll. Es dokumentiert Schadenshöhe, Reparaturweg, Minderwert, Nutzungsausfall und Mietwagenkosten." },
  { icon: Award, title: "Was ist eine merkantile Wertminderung?", text: "Die merkantile Wertminderung ist der Wertverlust Ihres Fahrzeugs, der trotz fachgerechter Reparatur bestehen bleibt, weil es nun als 'Unfallwagen' gilt. Sie steht Ihnen bei unverschuldeten Unfällen zu." },
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
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
            <div className={`flex gap-5 p-6 bg-secondary rounded-2xl border border-border/50 hover:shadow-lg transition-shadow ${i === sections.length - 1 && sections.length % 2 !== 0 ? 'md:col-span-2 md:max-w-xl md:mx-auto' : ''}`}>
              <div className="flex-shrink-0">
                <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
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
