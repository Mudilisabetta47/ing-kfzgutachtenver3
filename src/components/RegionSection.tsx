import { MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const locations = [
  "Braunschweig", "Salzgitter", "Wolfsburg", "Gifhorn",
  "Peine", "Wolfenbüttel", "Helmstedt", "Goslar",
  "Königslutter", "Lehndorf", "Stöckheim", "Volkmarode",
];

const RegionSection = () => (
  <section className="py-16 md:py-24 bg-secondary">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground tracking-wide mb-2">Unser Einzugsgebiet</h2>
        <p className="text-muted-foreground text-sm font-body mb-8">Wir sind in Braunschweig und der gesamten Region für Sie unterwegs.</p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="flex flex-wrap gap-2">
          {locations.map((loc) => (
            <span
              key={loc}
              className="inline-flex items-center gap-1.5 bg-card border border-border rounded-md px-4 py-2 text-sm text-foreground font-body"
            >
              <MapPin className="h-3 w-3 text-primary" />
              {loc}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default RegionSection;
