import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const IhreRechte = () => (
  <>
    <section className="relative py-16 blue-gradient">
      <div className="container-narrow px-4">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Ihre Rechte</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl text-primary-foreground">
          Ihre Rechte nach einem Unfall
        </motion.h1>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Als Geschädigter eines Verkehrsunfalls haben Sie umfangreiche Rechte, die Sie kennen sollten. 
              Die gegnerische Versicherung ist nicht immer auf Ihrer Seite – daher ist es wichtig, Ihre Ansprüche zu kennen und durchzusetzen.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-8 mb-4">Das steht Ihnen zu:</h2>
            <div className="space-y-4">
              {[
                { title: "Freie Gutachterwahl", desc: "Sie dürfen den Sachverständigen selbst wählen. Lassen Sie sich keinen Gutachter von der gegnerischen Versicherung aufzwingen." },
                { title: "Freie Werkstattwahl", desc: "Sie bestimmen, wo Ihr Fahrzeug repariert wird – auch in einer markengebundenen Fachwerkstatt." },
                { title: "Mietwagen oder Nutzungsausfall", desc: "Für die Dauer der Reparatur steht Ihnen ein Mietwagen zu oder eine Nutzungsausfallentschädigung." },
                { title: "Merkantile Wertminderung", desc: "Ihr Fahrzeug verliert durch den Unfall an Wert – dieser Minderwert wird Ihnen erstattet." },
                { title: "Schmerzensgeld", desc: "Bei Personenschäden haben Sie Anspruch auf Schmerzensgeld." },
                { title: "Kostenpauschale", desc: "Für den entstandenen Aufwand (Telefonate, Fahrten etc.) steht Ihnen eine Unkostenpauschale zu." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <p className="text-foreground font-medium text-sm">
                <strong>Wichtig:</strong> Akzeptieren Sie niemals vorschnell ein Angebot der gegnerischen Versicherung. 
                Lassen Sie den Schaden zuerst von einem unabhängigen Gutachter dokumentieren.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default IhreRechte;
