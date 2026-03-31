import { Phone, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const UnfallCTASection = () => (
  <section id="unfall" className="py-16 bg-background">
    <div className="max-w-7xl mx-auto px-4">
      <ScrollReveal>
        <div className="bg-primary-dark flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-12">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground tracking-wide">Unfall gehabt?</h2>
            <p className="text-primary-foreground/50 text-sm mt-2 font-body max-w-md">
              Wir beraten Sie kostenlos und unverbindlich. Rufen Sie uns an – auch abends und am Wochenende.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:053122436430"
              className="gold-gradient text-accent-foreground font-bold px-8 py-3.5 inline-flex items-center gap-3 text-sm uppercase tracking-wider whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              0531 - 22 436 430
            </a>
            <a
              href="#kontakt"
              className="border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 inline-flex items-center gap-2 text-sm uppercase tracking-wider whitespace-nowrap hover:border-accent hover:text-accent transition-colors"
            >
              Online melden
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default UnfallCTASection;
