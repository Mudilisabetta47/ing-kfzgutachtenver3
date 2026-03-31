import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const Anfahrt = () => (
  <>
    <section className="relative py-16 blue-gradient">
      <div className="container-narrow px-4">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Anfahrt</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl text-primary-foreground">
          Anfahrt & Standort
        </motion.h1>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-12">
          <ScrollReveal direction="left">
            <div>
              <h2 className="font-heading text-3xl text-foreground mb-6">So finden Sie uns</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wir sind in Braunschweig und der gesamten Region für Sie unterwegs. 
                Bei einem Vor-Ort-Termin kommen wir selbstverständlich direkt zu Ihnen – 
                ob an die Unfallstelle, zu Ihrer Werkstatt oder zu Ihnen nach Hause.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">Standort</h3>
                    <p className="text-muted-foreground text-sm">Braunschweig und Umgebung</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">Telefon</h3>
                    <a href="tel:053122436430" className="text-primary font-bold hover:text-accent transition-colors">0531 - 22 436 430</a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">Erreichbarkeit</h3>
                    <p className="text-muted-foreground text-sm">Mo – Fr: 08:00 – 18:00 Uhr</p>
                    <p className="text-muted-foreground text-sm">Sa: nach Vereinbarung</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="rounded-2xl overflow-hidden shadow-xl h-full min-h-[400px]">
              <iframe
                title="Standort Braunschweig"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77888.26454!2d10.4528!3d52.2689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aff5fc844fe4b1%3A0x41d3be10b53eb60!2sBraunschweig!5e0!3m2!1sde!2sde!4v1"
                className="w-full h-full min-h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12">
            <h3 className="font-heading text-2xl text-foreground mb-6 text-center">Unser Einzugsgebiet</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {["Braunschweig", "Salzgitter", "Wolfsburg", "Gifhorn", "Peine", "Wolfenbüttel", "Helmstedt", "Goslar", "Königslutter", "Vechelde", "Cremlingen", "Wendeburg"].map((loc) => (
                <div key={loc} className="flex items-center gap-2 bg-card rounded-lg p-3 border border-border text-sm font-medium text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  {loc}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Anfahrt;
