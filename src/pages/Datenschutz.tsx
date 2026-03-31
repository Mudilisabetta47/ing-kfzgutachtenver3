import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Datenschutz = () => (
  <>
    <section className="relative py-16 blue-gradient">
      <div className="container-narrow px-4">
        <nav className="flex items-center gap-2 text-primary-foreground/50 text-sm mb-6">
          <Link to="/" className="hover:text-accent transition-colors">Start</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">Datenschutz</span>
        </nav>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl text-primary-foreground">
          Datenschutzerklärung
        </motion.h1>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">1. Datenschutz auf einen Blick</h2>
            <p className="text-sm leading-relaxed">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </div>
          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-sm leading-relaxed"><strong className="text-foreground">Wer ist verantwortlich?</strong><br />Die Datenverarbeitung erfolgt durch den Websitebetreiber. Kontaktdaten entnehmen Sie dem Impressum.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">2. Hinweis zur verantwortlichen Stelle</h2>
            <p className="text-sm leading-relaxed">ING KFZ Gutachten<br />Braunschweig<br /><br />Telefon: 0531 - 22 436 430<br />E-Mail: info@kfz-sachverstaendiger-braunschweig.de</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p className="text-sm leading-relaxed">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">4. Datenerfassung auf dieser Website</h2>
            <h3 className="font-heading text-xl text-foreground mb-2">Kontaktformular</h3>
            <p className="text-sm leading-relaxed">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.</p>
          </div>
          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">5. Ihre Rechte</h2>
            <p className="text-sm leading-relaxed">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Datenschutz;
