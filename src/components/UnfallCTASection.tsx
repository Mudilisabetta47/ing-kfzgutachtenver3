import { Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const UnfallCTASection = () => (
  <section id="unfall" className="py-14 bg-background">
    <div className="max-w-6xl mx-auto px-4">
      <ScrollReveal>
        <div className="blue-gradient rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-primary-foreground tracking-wide">Unfall gehabt?</h2>
            <p className="text-primary-foreground/55 text-sm mt-2 font-body max-w-md">
              Wir beraten Sie kostenlos und unverbindlich. Rufen Sie uns an – auch abends und am Wochenende.
            </p>
          </div>
          <a
            href="tel:053122436430"
            className="gold-gradient text-accent-foreground font-bold px-8 py-4 rounded-md inline-flex items-center gap-3 text-sm whitespace-nowrap"
          >
            <Phone className="h-5 w-5" />
            0531 - 22 436 430
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default UnfallCTASection;
