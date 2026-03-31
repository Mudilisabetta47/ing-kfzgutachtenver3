import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const UnfallCTASection = () => (
  <section id="unfall" className="section-padding bg-background overflow-hidden">
    <div className="container-narrow text-center">
      <ScrollReveal>
        <h2 className="font-heading text-4xl md:text-6xl text-foreground mb-6">Unfall gehabt?</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Wir erklären Ihnen anschaulich alle wichtigen Schritte nach einem Unfall.
          Rufen Sie uns jetzt an – wir beraten Sie kostenlos und unverbindlich.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <motion.a
          href="tel:053122436430"
          className="inline-flex items-center gap-4 blue-gradient text-primary-foreground px-10 py-5 rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <div className="gold-gradient w-12 h-12 rounded-full flex items-center justify-center shadow-md">
            <Phone className="h-6 w-6 text-accent-foreground" />
          </div>
          <div className="text-left">
            <span className="block text-sm text-primary-foreground/60 font-medium">Jetzt anrufen und beraten lassen</span>
            <span className="block font-heading text-2xl md:text-3xl">0531 - 22 436 430</span>
          </div>
        </motion.a>
      </ScrollReveal>
    </div>
  </section>
);

export default UnfallCTASection;
