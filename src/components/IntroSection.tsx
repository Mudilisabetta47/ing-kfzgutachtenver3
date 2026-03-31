import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-gutachter.jpg";
import ScrollReveal from "./ScrollReveal";

const bulletPoints = [
  "Technische Kompetenz, die überzeugt – wir erstellen fundierte Kfz-Gutachten und begleiten Sie sicher durch den Schadenprozess mit der Versicherung",
  "Auf Wunsch stimmen wir den gesamten Schadenprozess direkt mit Ihrer Werkstatt ab",
  "Unsere Experten sind rund um die Uhr für Sie erreichbar",
  "Als Kfz-Gutachter rechnen wir direkt mit der Versicherung ab",
  "Kostenlose Anfahrt und Besichtigung Ihres Schadens vor Ort",
  "Innerhalb von 1–2 Tagen erhalten Sie das Gutachten für Ihr Fahrzeug",
  "Unsere Gutachter erstellen Ihnen einen Kostenvoranschlag für Kasko- oder Bagatellschäden",
];

const IntroSection = () => (
  <section id="ueber-uns" className="section-padding bg-background overflow-hidden">
    <div className="container-narrow">
      <ScrollReveal>
        <div className="text-center mb-6">
          <span className="text-accent font-bold text-sm tracking-[0.2em] uppercase">Ihr unabhängiger Kfz-Sachverständiger</span>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mt-3">
            Warum ING Kfz Gutachten Braunschweig
          </h2>
          <div className="section-divider" />
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">
        <ScrollReveal direction="left">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sie hatten einen Unfall und benötigen ein professionelles Kfz-Wert- oder Schadengutachten?
              Dann stehen wir Ihnen als verlässlicher Kfz-Gutachter in Braunschweig von der Erstellung eines
              Kfz-Gutachtens, Kurzgutachtens, Kostenvoranschlages bis hin zur Restwertermittlung zur Verfügung.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Als Geschädigter kann Sie ein Kfz-Gutachter in Braunschweig dabei unterstützen, die exakte Höhe
              der anfallenden Reparaturkosten für Ihren Schaden zu ermitteln. Darüber hinaus erhalten Sie
              detaillierte Informationen darüber, welche Forderungen Ihnen für den Schadenersatz zustehen.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Als neutraler Kfz-Gutachter sind wir gerade für solche Situationen in Braunschweig qualifiziert
              und ausgezeichnet. Unsere Gutachter sind zertifiziert und wir sind empfohlener Gutachter vom
              Deutschen Gutachter und Sachverständigen Verband e.V. (DGSV).
            </p>

            <motion.a
              href="tel:053122436430"
              className="inline-flex items-center gap-3 gold-gradient text-accent-foreground font-bold px-8 py-4 rounded-xl shadow-lg shadow-accent/20 mb-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="h-5 w-5" />
              Jetzt Termin vereinbaren
            </motion.a>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img src={aboutImg} alt="ING KFZ Gutachten Braunschweig" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bullet points like Meisterwerk */}
      <ScrollReveal delay={0.15}>
        <div className="mt-16">
          <h3 className="font-heading text-2xl text-foreground mb-6">
            Als erfahrene Kfz-Gutachter stehen wir Ihnen in Braunschweig mit unserer Expertise zur Seite:
          </h3>
          <div className="space-y-4">
            {bulletPoints.map((point, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 bg-secondary rounded-xl p-4 border border-border/50"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm leading-relaxed">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default IntroSection;
