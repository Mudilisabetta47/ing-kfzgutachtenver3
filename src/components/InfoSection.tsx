import { AlertTriangle, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const InfoSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-2">Gut zu wissen</h2>
        <p className="text-muted-foreground text-sm font-body mb-10">Wichtige Informationen für Unfallgeschädigte.</p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollReveal>
          <div className="border border-border rounded-lg p-7 h-full">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-5 w-5 text-accent" />
              <h3 className="font-heading text-xl text-foreground tracking-wide">Unfall nicht verursacht – Was nun?</h3>
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed font-body space-y-3">
              <p>Ruhig bleiben. Als unverschuldeter Geschädigter sind die Karten gut für Sie gemischt.</p>
              <p>Die Kosten für den Gutachter übernimmt die <strong className="text-foreground">Versicherung des Unfallgegners</strong>. Sie haben das Recht, einen eigenen unabhängigen Gutachter zu beauftragen.</p>
              <p>Lassen Sie sich nicht von der gegnerischen Versicherung einen Gutachter zuweisen – dieser handelt im Interesse der Versicherung, nicht in Ihrem.</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="border border-border rounded-lg p-7 h-full">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-xl text-foreground tracking-wide">Warum ein unabhängiger Gutachter?</h3>
            </div>
            <div className="text-muted-foreground text-sm leading-relaxed font-body space-y-3">
              <p>Versicherungsgutachter haben ein Interesse daran, den Schaden möglichst niedrig zu bewerten. Das spart der Versicherung Geld – auf Ihre Kosten.</p>
              <p>Ein <strong className="text-foreground">unabhängiger Sachverständiger</strong> ermittelt den tatsächlichen Schaden neutral. So erhalten Sie den vollen Schadenersatz inklusive Wertminderung und Nutzungsausfall.</p>
              <p>Bei unverschuldeten Unfällen werden die Gutachterkosten vollständig von der gegnerischen Versicherung übernommen.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default InfoSection;
