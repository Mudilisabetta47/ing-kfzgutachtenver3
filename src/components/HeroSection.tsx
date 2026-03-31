import { Phone, ChevronRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gutachter.jpg";
import HeroScene3D from "./HeroScene3D";

const HeroSection = () => (
  <section id="start" className="relative min-h-[100vh] flex flex-col overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(217,80%,15%)]/95 via-[hsl(217,69%,28%)]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(217,80%,15%)]/60 via-transparent to-[hsl(217,80%,15%)]/30" />
    </div>

    <HeroScene3D />

    <div className="relative flex-1 flex items-center">
      <div className="container-narrow px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-sm font-semibold tracking-wide">Kfz Gutachter und Sachverständiger Braunschweig</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground leading-[0.95] mb-8"
          >
            KFZ Gutachter
            <br />
            <span className="text-accent">Braunschweig</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-primary-foreground/75 text-lg md:text-xl mb-12 max-w-xl leading-relaxed"
          >
            Ihr unabhängiger Partner im Schadenfall – schnell und zuverlässig.
            Kostenlose Beratung für Ihren Schadensfall in Braunschweig, Salzgitter und Wolfsburg.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#kontakt"
              className="gold-gradient text-accent-foreground font-bold px-10 py-4 text-base tracking-wide flex items-center gap-2 shadow-xl shadow-accent/25 rounded-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(234,179,8,0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Jetzt Schaden melden!
              <ChevronRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="tel:053122436430"
              className="border-2 border-primary-foreground/25 text-primary-foreground font-semibold px-8 py-4 text-base flex items-center gap-2 backdrop-blur-sm hover:border-accent hover:text-accent transition-all rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-5 w-5" />
              0531 - 22 436 430
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#leistungen" className="text-primary-foreground/40 hover:text-accent transition-colors">
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
