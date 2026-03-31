import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const locations = [
  "Braunschweig-Mitte", "Weststadt", "Östliches Ringgebiet", "Lehndorf",
  "Stöckheim", "Rüningen", "Mascherode", "Volkmarode",
  "Salzgitter", "Wolfsburg", "Gifhorn", "Peine",
  "Wolfenbüttel", "Helmstedt", "Goslar", "Königslutter",
];

const RegionSection = () => (
  <section className="section-padding bg-secondary overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-12">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em]">Einzugsgebiet</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">Ihr Gutachter vor Ort in Braunschweig & Umgebung</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Wir sind in ganz Braunschweig, Salzgitter, Wolfsburg und der gesamten Region für Sie unterwegs. Schnell, zuverlässig und unabhängig.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {locations.map((loc, i) => (
          <ScrollReveal key={loc} delay={i * 0.05}>
            <motion.div
              className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border hover:border-primary/30 hover:shadow-md transition-all"
              whileHover={{ x: 4 }}
            >
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{loc}</span>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default RegionSection;
