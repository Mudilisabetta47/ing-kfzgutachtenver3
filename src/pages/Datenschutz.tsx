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
            <h3 className="font-heading text-xl text-foreground mb-2">Allgemeine Hinweise</h3>
            <p className="text-sm leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Datenerfassung auf dieser Website</h3>
            <p className="text-sm leading-relaxed">
              <strong className="text-foreground">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">2. Hosting</h2>
            <p className="text-sm leading-relaxed">
              Wir hosten die Inhalte unserer Website bei folgendem Anbieter. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3 className="font-heading text-xl text-foreground mb-2">Datenschutz</h3>
            <p className="text-sm leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-sm leading-relaxed">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-foreground mb-2">Hinweis zur verantwortlichen Stelle</h3>
            <p className="text-sm leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              ING KFZ Gutachten<br />
              Hildesheimer Straße 229<br />
              30519 Hannover<br /><br />
              Telefon: 0511 - 543 00 976<br />
              E-Mail: info@ing-gutachten.de
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">4. Datenerfassung auf dieser Website</h2>
            <h3 className="font-heading text-xl text-foreground mb-2">Kontaktformular</h3>
            <p className="text-sm leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl text-foreground mb-3">5. Ihre Rechte</h2>
            <p className="text-sm leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Datenschutz;
