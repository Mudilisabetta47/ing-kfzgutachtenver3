import { Phone, Shield, Clock, MessageCircle, BadgeCheck, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gutachter.jpg";
import HeroScene3D from "./HeroScene3D";

const trustItems = [
  { icon: Shield, text: "Unabhängig & zertifiziert" },
  { icon: Clock, text: "24h Terminfindung" },
  { icon: MessageCircle, text: "Kostenlose Erstberatung" },
  { icon: BadgeCheck, text: "Für Geschädigte kostenfrei" },
];

const HeroSection = () => (
  <section id="start" className="relative min-h-[100vh] flex flex-col overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung" className="w-full h-full object-cover scale-105" />
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(217,75%,18%)]/98 via-[hsl(217,69%,28%)]/92 to-[hsl(217,69%,28%)]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(217,75%,18%)]/70 via-transparent to-transparent" />
    </div>

    <HeroScene3D />

    <div className="relative flex-1 flex items-center">
      <div className="container-narrow px-4 py-24 md:py-32">
        <div className="max-w-3xl">



          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-primary-foreground leading-[0.92] mb-8"
          >
            Ihr Kfz-Gutachter<br />
            <span className="text-accent drop-shadow-[0_2px_10px_rgba(234,179,8,0.3)]">in Hannover</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-primary-foreground/80 text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light"
          >
            Unfallgutachten, Schadengutachten und Fahrzeugbewertungen – schnell, unabhängig und zuverlässig. Für Ihren vollen Schadenersatz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#kontakt"
              className="gold-gradient text-accent-foreground font-bold px-10 py-4 text-base uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-accent/20"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(234,179,8,0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Gutachten anfragen
              <ChevronRight className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="tel:051112345678"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-bold px-10 py-4 text-base uppercase tracking-wider flex items-center gap-2 backdrop-blur-sm hover:border-accent hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
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
      className="relative bg-[hsl(217,75%,18%)]/80 backdrop-blur-xl border-t border-primary-foreground/10"
    >
      <div className="container-narrow px-4 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + i * 0.1 }}
              className="flex items-center gap-3 text-primary-foreground group"
            >
              <div className="gold-gradient p-2.5 flex-shrink-0 shadow-md group-hover:shadow-accent/30 transition-shadow">
                <item.icon className="h-4 w-4 text-accent-foreground" />
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
