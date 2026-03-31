import { Phone, CheckCircle, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-gutachter.jpg";
import logoImg from "@/assets/logo-ing.png";

const checkpoints = [
  "Ihr Kfz-Sachverständigenbüro für Braunschweig und Umgebung",
  "Unabhängig, sachlich und fundiert",
  "Kostenfreie Vor-Ort-Besichtigung Ihres Fahrzeugs",
  "Direkte Abrechnung mit der Versicherung des Schadenverursachers",
];

const HeroSection = () => (
  <section id="start" className="relative min-h-[100vh] flex flex-col overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Kfz-Gutachter bei der Fahrzeugbegutachtung" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 via-transparent to-primary-dark/20" />
    </div>

    <div className="relative flex-1 flex items-center">
      <div className="container-narrow px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1] mb-10"
            >
              Kfz Gutachter Braunschweig |{" "}
              <span className="text-accent">ING Kfz Gutachten</span>
            </motion.h1>

            <div className="space-y-4 mb-10">
              {checkpoints.map((cp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90 text-base md:text-lg">{cp}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#kontakt"
                className="gold-gradient text-accent-foreground font-bold px-10 py-4 text-base tracking-wide flex items-center gap-2 shadow-xl shadow-accent/25 rounded-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(234,179,8,0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                Jetzt Schaden melden!
              </motion.a>
              <motion.a
                href="tel:053122436430"
                className="border-2 border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-4 text-base flex items-center gap-2 backdrop-blur-sm hover:border-accent hover:text-accent transition-all rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="h-5 w-5" />
                0531 - 22 436 430
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Trust badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-2 hidden lg:flex flex-col items-center gap-6"
          >
            <div className="glass-card p-8 text-center">
              <div className="text-accent font-heading text-5xl mb-1">★★★★★</div>
              <p className="text-primary-foreground font-bold text-lg">SEHR GUT</p>
              <p className="text-primary-foreground/60 text-sm mt-1">Basierend auf 120+ Bewertungen</p>
              <div className="mt-4 flex items-center justify-center gap-2">
                <img src={logoImg} alt="ING" className="h-8" />
              </div>
            </div>
            <div className="glass-card p-6 text-center">
              <p className="font-heading text-3xl text-accent">2.500+</p>
              <p className="text-primary-foreground/70 text-sm font-medium">Gutachten erstellt</p>
            </div>
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
      <a href="#unfall" className="text-primary-foreground/40 hover:text-accent transition-colors">
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </a>
    </motion.div>
  </section>
);

export default HeroSection;
