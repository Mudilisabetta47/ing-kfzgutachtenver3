import { AlertTriangle, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const InfoSection = () => (
  <section className="section-padding bg-card overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Wissenswertes</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Ihr Unfallgutachter im Schadenfall</h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-10">
        <ScrollReveal direction="left">
          <div className="bg-secondary rounded-2xl p-8 border border-border/50 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl text-foreground">Ich habe den Unfall NICHT verursacht – Was nun?</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed text-sm space-y-4">
              <p>Als Erstes: Ruhig bleiben, egal wie schlimm es im ersten Moment erscheint!</p>
              <p>Wenn Sie den Unfall nicht verursacht haben, sind die Karten gut für Sie gemischt. Die Kosten für den Gutachter übernimmt die <strong className="text-foreground">Versicherung des Unfallgegners</strong>.</p>
              <p>Sie haben das Recht, einen eigenen unabhängigen Kfz-Gutachter zu beauftragen. Lassen Sie sich nicht von der gegnerischen Versicherung einen Gutachter zuweisen – dieser handelt im Interesse der Versicherung, nicht in Ihrem!</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="bg-secondary rounded-2xl p-8 border border-border/50 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-2xl text-foreground">Warum ein unabhängiger Gutachter?</h3>
            </div>
            <div className="text-muted-foreground leading-relaxed text-sm space-y-4">
              <p>Die gegnerische Versicherung beauftragt eigene Gutachter, die in deren Interesse handeln. Keine gute Idee ist es, sich auf einen von der gegnerischen Versicherung beauftragten Gutachter zu verlassen.</p>
              <p>Ein <strong className="text-foreground">unabhängiger Kfz-Sachverständiger</strong> ermittelt den tatsächlichen Schadensumfang neutral und fair. So erhalten Sie den vollen Schadenersatz, der Ihnen zusteht – einschließlich Wertminderung und Nutzungsausfall.</p>
              <p>Unsere Gutachterkosten werden bei unverschuldeten Unfällen vollständig von der gegnerischen Versicherung übernommen.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default InfoSection;
