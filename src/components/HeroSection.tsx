import { Phone, Shield, Clock, MessageCircle, BadgeCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gutachter.jpg";
import HeroScene3D from "./HeroScene3D";

const trustItems = [
  { icon: Shield, text: "Unabhängig" },
  { icon: Clock, text: "Schnell vor Ort" },
  { icon: MessageCircle, text: "Kostenlose Erstberatung" },
  { icon: BadgeCheck, text: "Für Geschädigte kostenfrei" },
];

const HeroSection = () => (
  <section id="start" className="relative min-h-screen flex flex-col overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/97 via-primary/90 to-primary/60" />
    </div>

    <HeroScene3D />

    <div className="relative flex-1 flex items-center">
      <div className="container-narrow px-4 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 gold-gradient text-accent-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Shield className="h-3.5 w-3.5" />
            Unabhängiger Sachverständiger
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-[6rem] text-primary-foreground leading-[0.95] mb-6"
          >
            Ihr Kfz-Gutachter<br />
            <span className="text-accent">in Hannover</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-primary-foreground/80 text-lg md:text-xl mb-10 max-w-xl leading-relaxed font-light"
          >
            Unfallgutachten, Schadengutachten und Fahrzeugbewertungen – schnell, unabhängig und zuverlässig.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#kontakt"
              className="gold-gradient text-accent-foreground font-bold px-8 py-4 text-base uppercase tracking-wider flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Gutachten anfragen
              <ChevronRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="tel:051112345678"
              className="border-2 border-accent text-accent font-bold px-8 py-4 text-base uppercase tracking-wider flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 160, 23, 0.1)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="h-5 w-5" />
              0511 / 12345678
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="relative bg-primary-dark/90 backdrop-blur-md border-t border-primary-foreground/10"
    >
      <div className="container-narrow px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
              className="flex items-center gap-3 text-primary-foreground"
            >
              <div className="gold-gradient p-2 flex-shrink-0">
                <item.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-semibold">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
