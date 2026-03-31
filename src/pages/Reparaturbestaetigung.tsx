import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const Reparaturbestaetigung = () => (
  <>
    <section className="relative py-16 blue-gradient">
      <div className="container-narrow px-4">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Reparaturbestätigung</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl text-primary-foreground">
          Reparaturbestätigung
        </motion.h1>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <ScrollReveal>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Eine Reparaturbestätigung oder ein Reparaturgutachten ist ein rechtlich unanfechtbarer Nachweis, 
              dass ein Auto <strong className="text-foreground">fachgerecht nach einem Unfall repariert</strong> worden ist.
            </p>
            
            <h2 className="font-heading text-2xl text-foreground mt-8">Wann ist eine Reparaturbestätigung wichtig?</h2>
            <p>
              Sie ist besonders dann sehr wichtig, wenn Sie Ihr Auto in Eigenregie repariert haben. 
              Wenn Ihr Auto später in einen weiteren Unfall mit ähnlichem Schadensbild verwickelt wird, 
              haben Sie einen Nachweis über die Reparatur des früheren Schadens.
            </p>
            <p>
              Können Sie die Reparatur des alten Schadens nicht beweisen, kann es sein, dass die gegnerische 
              Versicherung Ihren Schaden <strong className="text-foreground">nur teilweise oder gar nicht ersetzt</strong>. 
              Selbst dann, wenn Sie nicht der Unfallverursacher waren.
            </p>

            <h2 className="font-heading text-2xl text-foreground mt-8">Wer trägt die Kosten?</h2>
            <p>
              Wer die Kosten für eine Reparaturbescheinigung tragen muss, ist leider nicht ganz eindeutig. 
              Einige Versicherungsgesellschaften übernehmen diese, andere nicht. Hier lohnt es sich, vorher nachzufragen.
            </p>

            <div className="mt-8 bg-accent/10 border border-accent/20 rounded-2xl p-6">
              <p className="text-foreground font-medium text-sm">
                <strong>Unser Service:</strong> Wenn Sie bei uns ein Schadensgutachten in Auftrag gegeben haben, 
                bekommen Sie die Reparaturbestätigung immer <strong>kostenfrei</strong> dazu.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </>
);

export default Reparaturbestaetigung;
